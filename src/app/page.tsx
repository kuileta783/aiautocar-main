import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Header */}
      <header className="border-b border-slate-700">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="text-2xl font-bold text-white">
            <span className="text-cyan-400">AI</span>AutoCar
          </Link>
          <nav className="hidden md:flex items-center gap-8">
            <Link href="/" className="text-white hover:text-cyan-400 transition">Home</Link>
            <Link href="/about" className="text-slate-400 hover:text-cyan-400 transition">About</Link>
            <Link href="/ai-cars" className="text-slate-400 hover:text-cyan-400 transition">AI Cars</Link>
            <Link href="/autonomous-driving" className="text-slate-400 hover:text-cyan-400 transition">Autonomous Driving</Link>
            <Link href="/contact" className="text-slate-400 hover:text-cyan-400 transition">Contact</Link>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section className="py-24 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            The Future of <span className="text-cyan-400">AI-Powered</span> Automobiles
          </h1>
          <p className="text-xl text-slate-400 mb-8 max-w-2xl mx-auto">
            Explore the latest developments in artificial intelligence for the automotive industry. From self-driving technology to intelligent car assistants.
          </p>
          <div className="flex gap-4 justify-center">
            <Link href="/ai-cars" className="bg-cyan-500 hover:bg-cyan-600 text-white px-8 py-3 rounded-lg font-semibold transition">
              Explore AI Cars
            </Link>
            <Link href="/autonomous-driving" className="border border-slate-600 hover:border-cyan-500 text-white px-8 py-3 rounded-lg font-semibold transition">
              Learn More
            </Link>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 px-4 bg-slate-800/50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-white text-center mb-12">AI Automotive Technologies</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "Smart Assistants", desc: "Voice-activated AI assistants that learn your preferences and make driving safer.", icon: "🎙️" },
              { title: "Autonomous Driving", desc: "Level 4-5 self-driving technology powered by machine learning.", icon: "🚗" },
              { title: "Predictive Maintenance", desc: "AI systems that predict maintenance needs before breakdowns occur.", icon: "🔧" },
              { title: "Enhanced Safety", desc: "Real-time hazard detection and collision avoidance systems.", icon: "🛡️" },
              { title: "Connected Vehicles", desc: "V2X communication enabling cars to talk to infrastructure.", icon: "📡" },
              { title: "Electric Integration", desc: "AI-optimized battery management and charging systems.", icon: "⚡" },
            ].map((feature, i) => (
              <div key={i} className="bg-slate-800 rounded-xl p-6 border border-slate-700 hover:border-cyan-500 transition">
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                <p className="text-slate-400">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Stay Updated</h2>
          <p className="text-slate-400 mb-8">Subscribe to our newsletter for the latest AI automotive news.</p>
          <Link href="/contact" className="bg-cyan-500 hover:bg-cyan-600 text-white px-8 py-3 rounded-lg font-semibold transition">
            Contact Us
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-700 py-8 px-4">
        <div className="max-w-7xl mx-auto text-center text-slate-500">
          <p>&copy; 2026 AIAutoCar.com. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
