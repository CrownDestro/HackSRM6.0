export default function Navbar() {
    return (
      <nav className="flex items-center justify-between p-4 max-w-7xl mx-auto">
        <div className="text-2xl font-bold">Hackentor</div>
        <div className="space-x-4 flex items-center">
          <button className="px-4 py-2 hover:text-gray-300">Sign In</button>
          <button className="px-4 py-2 bg-purple-600 rounded-lg hover:bg-purple-700">
            Get Started
          </button>
        </div>
      </nav>
    );
  }