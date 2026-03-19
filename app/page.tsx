"use client";
import Link from "next/link";

export default function Home() {
  return (
    <div className="bg-black min-h-screen">
      {/* Hero */}
      <section className="relative py-32 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-cyan-500/10 via-black to-black" />
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
            {[
              { title: "Smart Assistants", description: "Voice-activated AI assistants that learn your preferences.", icon: "🎙️" },
              { title: "Autonomous Driving", description: "Level 4-5 self-driving technology powered by ML.", icon: "🚗" },
              { title: "Predictive Maintenance", description: "AI systems that predict maintenance needs.", icon: "🔧" },
              { title: "Enhanced Safety", description: "Real-time hazard detection and collision avoidance.", icon: "🛡️" },
            ].map((feature) => (
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

      {/* Latest Articles */}
      <section className="py-24 px-6 bg-white/5">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-bold text-white mb-12 text-center">Latest Articles</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: "The Rise of AI in Automotive", date: "March 15, 2026", excerpt: "How artificial intelligence is transforming the car industry.", href: "/blog" },
              { title: "Level 4 Autonomy: What It Means", date: "March 10, 2026", excerpt: "Understanding the difference between Level 3 and Level 4 autonomous systems.", href: "/autonomous-driving" },
              { title: "Voice Assistants in Modern Cars", date: "March 5, 2026", excerpt: "From Alexa to Google Assistant, how voice tech is evolving in vehicles.", href: "/ai-cars" },
            ].map((post) => (
              <Link
                key={post.title}
                href={post.href}
                className="p-6 bg-black/50 border border-white/10 rounded-xl hover:border-cyan-500/30 transition group"
              >
                <p className="text-sm text-white/40 mb-2">{post.date}</p>
                <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-cyan-400 transition">{post.title}</h3>
                <p className="text-sm text-white/50">{post.excerpt}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-24 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Stay Informed</h2>
          <p className="text-white/60 mb-8">
            Get the latest news on AI automotive technology delivered to your inbox.
          </p>
          <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto" onSubmit={(e) => e.preventDefault()}>
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-white/40 focus:border-cyan-500 focus:outline-none transition"
            />
            <button
              type="submit"
              className="px-6 py-3 bg-cyan-500 text-black font-semibold rounded-lg hover:bg-cyan-400 transition"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}
