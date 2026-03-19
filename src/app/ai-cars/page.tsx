import Link from "next/link";

export const metadata = {
  title: "AI Cars - AIAutoCar",
  description: "Explore the latest AI-powered cars and intelligent automotive technology.",
};

export default function AICars() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <header className="border-b border-slate-700">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="text-2xl font-bold text-white">
            <span className="text-cyan-400">AI</span>AutoCar
          </Link>
          <nav className="hidden md:flex items-center gap-8">
            <Link href="/" className="text-slate-400 hover:text-cyan-400 transition">Home</Link>
            <Link href="/about" className="text-slate-400 hover:text-cyan-400 transition">About</Link>
            <Link href="/ai-cars" className="text-white hover:text-cyan-400 transition">AI Cars</Link>
            <Link href="/autonomous-driving" className="text-slate-400 hover:text-cyan-400 transition">Autonomous Driving</Link>
            <Link href="/contact" className="text-slate-400 hover:text-cyan-400 transition">Contact</Link>
          </nav>
        </div>
      </header>

      <main className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-white mb-4">AI-Powered Cars</h1>
          <p className="text-xl text-slate-400 mb-12">
            Discover how artificial intelligence is revolutionizing the automotive industry.
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              { title: "Tesla Autopilot", desc: "Advanced driver assistance with neural network processing", brand: "Tesla" },
              { title: "Waymo Autonomous", desc: "Level 4 autonomous driving technology", brand: "Waymo" },
              { title: "Mercedes MBUX", desc: "AI-powered infotainment and voice assistant", brand: "Mercedes-Benz" },
              { title: "BMW iDrive 8", desc: "Intelligent personal assistant with natural language", brand: "BMW" },
            ].map((car, i) => (
              <div key={i} className="bg-slate-800 rounded-xl p-6 border border-slate-700">
                <span className="text-cyan-400 text-sm font-semibold">{car.brand}</span>
                <h3 className="text-xl font-semibold text-white mt-2 mb-3">{car.title}</h3>
                <p className="text-slate-400">{car.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 bg-slate-800 rounded-xl p-8 border border-slate-700">
            <h2 className="text-2xl font-bold text-white mb-4">Key AI Features in Modern Cars</h2>
            <ul className="space-y-3 text-slate-400">
              <li>🎙️ Natural language voice assistants</li>
              <li>🛡️ Real-time collision avoidance</li>
              <li>📱 Smartphone integration with AI sync</li>
              <li>🗺️ AI-powered navigation systems</li>
              <li>⚡ Intelligent battery management for EVs</li>
            </ul>
          </div>
        </div>
      </main>

      <footer className="border-t border-slate-700 py-8 px-4 mt-16">
        <div className="max-w-7xl mx-auto text-center text-slate-500">
          <p>&copy; 2026 AIAutoCar.com. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
