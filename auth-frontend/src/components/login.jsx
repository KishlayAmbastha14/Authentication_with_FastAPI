import { useState } from "react";
import { Link, useNavigate } from "react-router-dom"; // useNavigate add kiya hai redirect ke liye
import AuthLayout from "./authlayout";

export default function Login() {
  const [form, setForm] = useState({ email: "", password: "" });
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const navigate = useNavigate(); // Navigation ke liye hook

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    try {
      const res = await fetch("http://localhost:8000/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (!res.ok) {
        setMessage(`❌ ${data.detail || "Invalid credentials"}`);
        return;
      }

      // 🔐 Token save karein (Backend se access_token aana chahiye)
      localStorage.setItem("token", data.access_token);
      
      setMessage("✅ Login successful! Redirecting...");

      // 🚀 2 seconds baad Dashboard ya Home par bhej dein
      setTimeout(() => {
        navigate("/dashboard"); 
      }, 1500);

    } catch (err) {
      setMessage("❌ Server error. Check if FastAPI is running.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <AuthLayout 
      title="Welcome Back" 
      subtitle="Please enter your details to sign in."
    >
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1 tracking-wide">Email Address</label>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-lg border border-gray-300 bg-white text-gray-900 focus:ring-2 focus:ring-indigo-500 outline-none transition-all placeholder:text-gray-400"
            placeholder="name@company.com"
            required
          />
        </div>

        <div>
          <div className="flex justify-between mb-1">
            <label className="block text-sm font-medium text-gray-700 tracking-wide">Password</label>
            <a href="#" className="text-xs text-indigo-600 hover:underline">Forgot?</a>
          </div>
          <input
            type="password"
            name="password"
            value={form.password}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-lg border border-gray-300 bg-white text-gray-900 focus:ring-2 focus:ring-indigo-500 outline-none transition-all placeholder:text-gray-400"
            placeholder="••••••••"
            required
          />
        </div>

        <button
          type="submit"
          disabled={loading}
          className={`w-full py-3 rounded-lg font-bold text-white shadow-lg transition-all transform active:scale-[0.98] ${
            loading ? "bg-indigo-400 cursor-not-allowed" : "bg-indigo-600 hover:bg-indigo-700 hover:shadow-indigo-200"
          }`}
        >
          {loading ? "Signing in..." : "Sign In"}
        </button>

        {message && (
          <div className={`p-3 rounded-lg text-center text-sm font-medium ${
            message.includes("✅") ? "bg-green-50 text-green-700 border border-green-200" : "bg-red-50 text-red-700 border border-red-200"
          }`}>
            {message}
          </div>
        )}

        <p className="text-center text-sm text-gray-600 font-medium">
          Don't have an account?{" "}
          <Link to="/signup" className="text-indigo-600 font-bold hover:underline">
            Sign up for free
          </Link>
        </p>
      </form>
    </AuthLayout>
  );
}