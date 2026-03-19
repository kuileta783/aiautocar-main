import Link from "next/link";

const features = [
  {
    title: "Smart Assistants",
    description: "Voice-activated AI assistants that learn your preferences.",
    icon: "🎙️",
  },
  {
    title: "Autonomous Driving",
    description: "Level 4-5 self-driving technology powered by ML.",
    icon: "🚗",
  },
  {
    title: "Predictive Maintenance",
    description: "AI systems that predict maintenance needs.",
    icon: "🔧",
  },
  {
    title: "Enhanced Safety",
    description: "Real-time hazard detection and collision avoidance.",
    icon: "🛡️",
  },
];

export default function Home() {
  return (
    <div className="bg-black min-h-screen">
      {/* Hero */}
      <section className="relative py-32 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-cyan-500/5 via-transparent to-transparent" />
        <div className="max-w-4xl mx-auto text-center relative">
          <p className="text-cyan-400 text-sm font-medium tracking-wider uppercase mb-4">
            The Future of Mobility
          </p>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            AI-Powered <br className="hidden md:block" />
            <span className="text-cyan-400">Automotive</span> Technology
          </h1>
          <p className="text-lg text-white/60 max-w-2xl mx-auto mb-10">
            Exploring the intersection of artificial intelligence and the automotive industry. 
            From self-driving cars to intelligent assistants.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/ai-cars"
              className="px-8 py-3 bg-cyan-500 text-black font-semibold rounded-lg hover:bg-cyan-400 transition"
            >
              Explore AI Cars
            </Link>
            <Link
              href="/autonomous-driving"
              className="px-8 py-3 border border-white/20 text-white font-semibold rounded-lg hover:bg-white/5 transition"
            >
              Learn More
            </Link>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-bold text-white text-center mb-16">
            Key Technologies
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="p-6 bg-white/5 border border-white/10 rounded-xl hover:border-cyan-500/30 transition"
              >
                <div className="text-3xl mb-4">{feature.icon}</div>
                <h3 className="text-lg font-semibold text-white mb-2">{feature.title}</h3>
                <p className="text-sm text-white/50">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 bg-white/5">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Stay Informed</h2>
          <p className="text-white/60 mb-8">
            Get the latest news on AI automotive technology delivered to your inbox.
          </p>
          <Link
            href="/contact"
            className="inline-block px-8 py-3 bg-cyan-500 text-black font-semibold rounded-lg hover:bg-cyan-400 transition"
          >
            Subscribe Now
          </Link>
        </div>
      </section>
    </div>
  );
}
