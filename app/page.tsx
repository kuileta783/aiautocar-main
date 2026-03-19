import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-lg border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/" className="text-2xl font-bold">
            <span className="text-cyan-400">AI</span>AutoCar
          </Link>
          <div className="hidden md:flex items-center gap-8">
            <Link href="/" className="text-white hover:text-cyan-400 transition">Home</Link>
            <Link href="/about" className="text-white/70 hover:text-cyan-400 transition">About</Link>
            <Link href="/ai-cars" className="text-white/70 hover:text-cyan-400 transition">AI Cars</Link>
            <Link href="/autonomous-driving" className="text-white/70 hover:text-cyan-400 transition">Autonomous</Link>
            <Link href="/contact" className="text-white/70 hover:text-cyan-400 transition">Contact</Link>
          </div>
          <Link href="/contact" className="bg-gradient-to-r from-cyan-500 to-blue-600 px-5 py-2 rounded-full font-medium hover:opacity-90 transition">
            Get Started
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-cyan-500/10 border border-cyan-500/20 rounded-full px-4 py-2 mb-8">
            <span className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></span>
            <span className="text-cyan-400 text-sm font-medium">The Future is Here</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            The Future of <br className="hidden md:block" />
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">AI-Powered</span> Automobiles
          </h1>
          <p className="text-xl text-white/60 max-w-2xl mx-auto mb-10">
            Explore the latest developments in artificial intelligence for the automotive industry. From self-driving technology to intelligent car assistants.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/ai-cars" className="bg-gradient-to-r from-cyan-500 to-blue-600 px-8 py-4 rounded-full font-semibold hover:opacity-90 transition flex items-center justify-center gap-2">
              Explore AI Cars
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
            </Link>
            <Link href="/autonomous-driving" className="border border-white/20 px-8 py-4 rounded-full font-semibold hover:bg-white/5 transition">
              Learn More
            </Link>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 px-6 bg-gradient-to-b from-transparent to-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">AI Automotive Technologies</h2>
            <p className="text-white/50">Cutting-edge innovations transforming how we drive</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "Smart Assistants", desc: "Voice-activated AI assistants that learn your preferences and make driving safer.", icon: "🎙️", color: "from-violet-500 to-purple-600" },
              { title: "Autonomous Driving", desc: "Level 4-5 self-driving technology powered by machine learning.", icon: "🚗", color: "from-cyan-500 to-blue-600" },
              { title: "Predictive Maintenance", desc: "AI systems that predict maintenance needs before breakdowns occur.", icon: "🔧", color: "from-emerald-500 to-teal-600" },
              { title: "Enhanced Safety", desc: "Real-time hazard detection and collision avoidance systems.", icon: "🛡️", color: "from-rose-500 to-pink-600" },
              { title: "Connected Vehicles", desc: "V2X communication enabling cars to talk to infrastructure.", icon: "📡", color: "from-amber-500 to-orange-600" },
              { title: "Electric Integration", desc: "AI-optimized battery management and charging systems.", icon: "⚡", color: "from-yellow-400 to-green-500" },
            ].map((feature, i) => (
              <div key={i} className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 hover:border-cyan-500/30 transition-all duration-300">
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${feature.color} flex items-center justify-center text-2xl mb-6 group-hover:scale-110 transition-transform`}>
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-white/50 leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto bg-gradient-to-r from-cyan-500/20 via-blue-500/20 to-purple-500/20 rounded-3xl p-10 border border-white/10">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            {[
              { num: "500+", label: "AI Models" },
              { num: "99.9%", label: "Accuracy" },
              { num: "50+", label: "Car Brands" },
              { num: "24/7", label: "Support" },
            ].map((stat, i) => (
              <div key={i}>
                <div className="text-4xl font-bold text-cyan-400 mb-2">{stat.num}</div>
                <div className="text-white/50">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4">Stay Ahead of the Curve</h2>
          <p className="text-xl text-white/50 mb-10">Subscribe to our newsletter for the latest AI automotive news and updates.</p>
          <Link href="/contact" className="bg-gradient-to-r from-cyan-500 to-blue-600 px-10 py-4 rounded-full font-semibold hover:opacity-90 transition inline-flex items-center gap-2">
            Contact Us
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 py-10 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-white/50 text-sm">
            © 2026 AIAutoCar.com. All rights reserved.
          </div>
          <div className="flex gap-6">
            <Link href="/" className="text-white/50 hover:text-cyan-400 transition text-sm">Privacy</Link>
            <Link href="/" className="text-white/50 hover:text-cyan-400 transition text-sm">Terms</Link>
            <Link href="/" className="text-white/50 hover:text-cyan-400 transition text-sm">Contact</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
