import Link from "next/link";

export const metadata = {
  title: "Autonomous Driving - AIAutoCar",
  description: "Learn about self-driving technology and the future of autonomous vehicles.",
};

export default function AutonomousDriving() {
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
            <Link href="/ai-cars" className="text-slate-400 hover:text-cyan-400 transition">AI Cars</Link>
            <Link href="/autonomous-driving" className="text-white hover:text-cyan-400 transition">Autonomous Driving</Link>
            <Link href="/contact" className="text-slate-400 hover:text-cyan-400 transition">Contact</Link>
          </nav>
        </div>
      </header>

      <main className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-white mb-4">Autonomous Driving Technology</h1>
          <p className="text-xl text-slate-400 mb-12">
            From Level 1 to Level 5 - understanding the stages of autonomous driving.
          </p>

          <div className="space-y-6">
            {[
              { level: "Level 1", title: "Driver Assistance", desc: "Single automated feature like lane centering or adaptive cruise control." },
              { level: "Level 2", title: "Partial Automation", desc: "Combined automated features like Tesla Autopilot or GM Super Cruise." },
              { level: "Level 3", title: "Conditional Automation", desc: "AI handles most driving but human must be ready to intervene." },
              { level: "Level 4", title: "High Automation", desc: "Full self-driving in specific areas without human intervention." },
              { level: "Level 5", title: "Full Automation", desc: "Complete autonomous driving anywhere, no steering wheel needed." },
            ].map((item, i) => (
              <div key={i} className="bg-slate-800 rounded-xl p-6 border border-slate-700">
                <span className="text-cyan-400 font-semibold">{item.level}</span>
                <h3 className="text-xl font-semibold text-white mt-2 mb-3">{item.title}</h3>
                <p className="text-slate-400">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 bg-gradient-to-r from-cyan-900/30 to-blue-900/30 rounded-xl p-8 border border-cyan-800">
            <h2 className="text-2xl font-bold text-white mb-4">The Future is Here</h2>
            <p className="text-slate-400">
              Companies like Waymo, Cruise, and Baidu are already operating Level 4 autonomous ride-hailing services in cities across the globe.
            </p>
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
