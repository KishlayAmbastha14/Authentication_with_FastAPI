export default function AuthLayout({ title, subtitle, children, imageSide = "left" }) {
  return (
    <div className="min-h-screen bg-slate-200 flex items-center justify-center p-4">
      <div className="max-w-4xl w-full bg-orange-300 rounded-2xl shadow-2xl overflow-hidden flex flex-col md:flex-row">
        
        {/* Visual Side - Desktop Only */}
        <div className="hidden md:flex md:w-1/2 bg-gradient-to-linear from-indigo-600 to-purple-700 p-12 text-white flex-col justify-between">
          <div>
            <h2 className="text-3xl font-bold mb-4">Kishlay's Portal</h2>
            <p className="text-indigo-100 text-lg">
              {/* Manage your backend services and RAG applications with ease. */}
            </p>
          </div>
          <div className="mt-auto">
            <span className="text-sm text-indigo-200">© 2026 kishlay.pro</span>
          </div>
        </div>

        {/* Form Side */}
       <div className="w-full md:w-1/2 p-8 md:p-12 bg-white"> 
  <div className="text-center md:text-left mb-10">
    <h1 className="text-3xl font-extrabold text-gray-900">{title}</h1>
    <p className="text-gray-600 mt-2">{subtitle}</p>
  </div>
  {children}
</div>
      </div>
    </div>
  );
}