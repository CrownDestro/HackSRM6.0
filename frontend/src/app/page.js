import Link from "next/link";
import ParticlesBackground from "@/Components/ParticlesBackground";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-black text-white">
      <ParticlesBackground />
      {/* Hero Section */}<br></br><br></br><br></br><br></br><br></br><br></br>
      <main className="relative z-10 flex flex-col items-center justify-center text-center px-4 mt-20">
        <h1 className="text-5xl md:text-6xl font-bold max-w-4xl mb-6">
          Transform Your Ideas with <span className="gradient-text">AI Power</span>
        </h1>
        <p className="text-gray-400 max-w-2xl mb-8">
          Describe your ideas and let our AI guide you on the right path to bring your ideas to life.
        </p>
        <div className="flex space-x-4 w-full max-w-md">
          <Link href="/idea">
            <button className="px-6 py-3 bg-purple-600 rounded-lg hover:bg-purple-700 flex items-center gap-2">
              Have an idea?
            </button>
          </Link>
          <Link href="/generate">
            <button className="flex-1 px-6 py-3 bg-purple-600 rounded-lg hover:bg-purple-700 flex items-center justify-center text-center gap-2">
              {"Don't know where to start?"}
            </button>
          </Link>
        </div>
      </main>
    </div>
  );
}
