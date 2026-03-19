export default function About() {
  return (
    <div className="bg-black min-h-screen py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-white mb-8">About AIAutoCar</h1>
        
        <img 
          src="https://images.unsplash.com/photo-1617788138017-80ad40651399?w=1200&q=80" 
          alt="AI Automotive Technology"
          className="w-full rounded-xl mb-12"
        />
        
        <div className="space-y-8 text-white/70">
          <p className="text-lg">
            Welcome to AIAutoCar, your premier destination for all things related to 
            artificial intelligence in the automotive industry.
          </p>

          <div className="border-l-2 border-cyan-500 pl-6">
            <h2 className="text-xl font-semibold text-white mb-4">Our Mission</h2>
            <p>
              We are dedicated to bringing you the latest news, reviews, and insights 
              into AI-powered automotive technology. Our goal is to help you understand 
              how AI is transforming the way we drive and interact with vehicles.
            </p>
          </div>

          <img 
            src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&q=80" 
            alt="AI Technology"
            className="w-full rounded-xl"
          />

          <div className="border-l-2 border-cyan-500 pl-6">
            <h2 className="text-xl font-semibold text-white mb-4">What We Cover</h2>
            <div className="grid md:grid-cols-2 gap-4 mt-4">
              {[
                "Autonomous driving technology and Level 4-5 self-driving systems",
                "AI-powered car assistants and voice recognition",
                "Predictive maintenance and vehicle health monitoring",
                "Connected vehicles and V2X communication",
                "Electric vehicle AI optimization",
                "Automotive safety AI systems",
              ].map((topic) => (
                <div key={topic} className="flex items-center gap-2">
                  <span className="text-cyan-400">→</span>
                  <span className="text-sm">{topic}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="border-l-2 border-cyan-500 pl-6">
            <h2 className="text-xl font-semibold text-white mb-4">Why Trust Us</h2>
            <div className="grid md:grid-cols-3 gap-6 mt-4">
              {[
                { icon: "📊", title: "Data-Driven", desc: "Analysis backed by industry data" },
                { icon: "🔬", title: "Expert Research", desc: "Deep technical understanding" },
                { icon: "⚡", title: "Up to Date", desc: "Latest developments covered" },
              ].map((item) => (
                <div key={item.title} className="text-center p-4 bg-white/5 rounded-xl">
                  <div className="text-3xl mb-2">{item.icon}</div>
                  <h3 className="font-medium text-white">{item.title}</h3>
                  <p className="text-xs text-white/50 mt-1">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="border-l-2 border-cyan-500 pl-6">
            <h2 className="text-xl font-semibold text-white mb-4">Our Team</h2>
            <p className="mb-4">
              We are a team of automotive enthusiasts, technology experts, and journalists 
              passionate about the future of mobility. With backgrounds in automotive engineering, 
              AI research, and tech journalism, we bring comprehensive insights to our readers.
            </p>
          </div>

          <img 
            src="https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=1200&q=80" 
            alt="Future of Driving"
            className="w-full rounded-xl"
          />

          <div className="mt-12 p-8 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/20 rounded-xl text-center">
            <h2 className="text-xl font-semibold text-white mb-4">Stay Connected</h2>
            <p className="text-white/60 mb-6">
              Follow us for daily updates on AI automotive technology.
            </p>
            <div className="flex justify-center gap-6">
              <span className="text-white/40">Twitter</span>
              <span className="text-white/40">LinkedIn</span>
              <span className="text-white/40">YouTube</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
