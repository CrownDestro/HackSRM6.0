export default function Home() {
  return (
    <div className="min-h-screen bg-black">
      {/* Navigation */}
      <nav className="flex items-center justify-between p-4 max-w-7xl mx-auto">
        <div className="text-2xl font-bold">Hackentor</div>
        <div className="space-x-4">
          <button className="px-4 py-2 hover:text-gray-300">Sign In</button>
          <button className="px-4 py-2 bg-purple-600 rounded-lg hover:bg-purple-700">Get Started</button>
        </div>
      </nav>

      {/* Hero Section */}
      <main className="flex flex-col items-center justify-center text-center px-4 mt-20">
        <h1 className="text-5xl md:text-6xl font-bold max-w-4xl mb-6">
          Transform Your Ideas with <span className="gradient-text">AI Power</span>
        </h1>
        <p className="text-gray-400 max-w-2xl mb-8">
          Describe your ideas and let our AI guide you on a right path to bring your ideas to life.
        </p>
        <button className="px-6 py-3 bg-purple-600 rounded-lg hover:bg-purple-700 flex items-center gap-2">
          Have an idea?
        </button>
      </main>
    </div>
  );
}
