import { useState } from "react"
import AuthLayout from "./authlayout"

export default function Signup() {
  const [form, setForm] = useState({
    full_name: "", // Added name field for better UX
    email: "",
    password: ""
  })
  const [message, setMessage] = useState("")
  const [loading, setLoading] = useState(false)

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setMessage("")
    setLoading(true)

    try {
      const res = await fetch("http://localhost:8000/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form)
      })

      const data = await res.json()

      if (!res.ok) {
        setMessage(`❌ ${data.detail || "Signup failed"}`)
        return
      }

      setMessage("✅ Account created! You can now login.")
      setForm({ full_name: "", email: "", password: "" })

    } catch (err) {
      setMessage("❌ Connection error. Is the backend running?")
    } finally {
      setLoading(false)
    }
  }

  return (
    <AuthLayout 
      title="Create an account" 
      subtitle="Join us and start building your AI-powered portfolio."
    >
      <form onSubmit={handleSubmit} className="space-y-5">
        
        {/* Full Name Field */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
          <input
            type="text"
            name="full_name"
            placeholder="John Doe"
            value={form.full_name}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 rounded-lg border text-gray-900 border-gray-200 focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition-all placeholder:text-gray-400"
          />
        </div>

        {/* Email Field */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
          <input
            type="email"
            name="email"
            placeholder="kishlay@example.com"
            value={form.email}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 bg-white text-gray-900 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-all placeholder:text-gray-400"
          />
        </div>

        {/* Password Field */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
          <input
            type="password"
            name="password"
            placeholder="*******"
            value={form.password}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 rounded-lg border text-gray-900 border-gray-200 focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition-all placeholder:text-gray-400"
          />
          <p className="text-xs text-gray-500 mt-2 italic">Must be at least 8 characters.</p>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={loading}
          className={`w-full py-3 rounded-lg font-bold text-white shadow-lg transition-all transform active:scale-[0.98] ${
            loading ? "bg-indigo-400 cursor-not-allowed" : "bg-indigo-600 hover:bg-indigo-700 hover:shadow-indigo-200"
          }`}
        >
          {loading ? "Creating Account..." : "Get Started"}
        </button>

        {/* Feedback Message */}
        {message && (
          <div className={`p-3 rounded-lg text-center text-sm font-medium ${
            message.includes("✅") ? "bg-green-50 text-green-700" : "bg-red-50 text-red-700"
          }`}>
            {message}
          </div>
        )}

        <p className="text-center text-sm text-gray-600">
          Already have an account? <a href="/login" className="text-indigo-600 font-semibold hover:underline">Sign in</a>
        </p>
      </form>
    </AuthLayout>
  )
}