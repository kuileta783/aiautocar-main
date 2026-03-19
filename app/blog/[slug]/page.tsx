import Link from "next/link";

const posts = {
  "rise-of-ai-in-automotive": {
    title: "The Rise of AI in Automotive Industry",
    date: "March 15, 2026",
    image: "https://images.unsplash.com/photo-1617788138017-80ad40651399?w=1200&q=80",
    category: "Industry",
    excerpt: "How artificial intelligence is transforming the car industry from manufacturing to autonomous driving.",
    content: (
      <>
        <img src="https://images.unsplash.com/photo-1617788138017-80ad40651399?w=1200&q=80" alt="AI in Automotive" className="w-full rounded-xl mb-8" />
        <p className="text-lg text-white/80 mb-6">
          Artificial intelligence is revolutionizing every aspect of the automotive industry. From the factory floor to the road, AI technologies are making cars smarter, safer, and more efficient.
        </p>
        <h2 className="text-2xl font-bold text-white mt-10 mb-4">AI in Manufacturing</h2>
        <p className="text-white/70 mb-6">
          Car manufacturers are using AI-powered robots and computer vision systems to improve quality control and production efficiency. Machine learning algorithms predict equipment failures before they happen, reducing downtime.
        </p>
        <img src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=1200&q=80" alt="AI Manufacturing" className="w-full rounded-xl mb-8" />
        <h2 className="text-2xl font-bold text-white mt-10 mb-4">AI in Vehicles</h2>
        <p className="text-white/70 mb-6">
          Modern cars contain dozens of AI-powered systems that enhance safety, comfort, and performance.
        </p>
        <div className="grid md:grid-cols-2 gap-4 mb-8">
          {[
            { name: "Driver Assistance", desc: "Lane keeping, adaptive cruise control, automatic emergency braking" },
            { name: "Infotainment", desc: "Voice assistants that understand natural language" },
            { name: "Navigation", desc: "AI-powered route optimization based on real-time traffic data" },
            { name: "Maintenance", desc: "Predictive systems that alert drivers before breakdowns occur" },
          ].map((item) => (
            <div key={item.name} className="p-4 bg-white/5 border border-white/10 rounded-lg">
              <h3 className="font-semibold text-cyan-400 mb-1">{item.name}</h3>
              <p className="text-sm text-white/60">{item.desc}</p>
            </div>
          ))}
        </div>
        <h2 className="text-2xl font-bold text-white mt-10 mb-4">The Road to Autonomy</h2>
        <p className="text-white/70 mb-6">
          The automotive industry is progressing through the levels of autonomous driving. Level 2 systems are now common, with Level 3 and Level 4 systems beginning to appear in premium vehicles and robotaxi fleets.
        </p>
        <img src="https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=1200&q=80" alt="Autonomous Driving" className="w-full rounded-xl mb-8" />
        <h2 className="text-2xl font-bold text-white mt-10 mb-4">What's Next</h2>
        <p className="text-white/70">
          By 2030, experts predict that Level 4 autonomous vehicles will be widely available for consumer purchase, transforming how we think about transportation.
        </p>
      </>
    ),
  },
  "level-4-autonomy-explained": {
    title: "Level 4 Autonomy: What It Means for Drivers",
    date: "March 10, 2026",
    image: "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=1200&q=80",
    category: "Technology",
    excerpt: "Understanding the difference between Level 3 and Level 4 autonomous systems and their implications.",
    content: (
      <>
        <img src="https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=1200&q=80" alt="Level 4 Autonomy" className="w-full rounded-xl mb-8" />
        <p className="text-lg text-white/80 mb-6">
          Level 4 autonomous driving represents a significant milestone in vehicle technology. But what exactly does it mean?
        </p>
        <h2 className="text-2xl font-bold text-white mt-10 mb-4">What is Level 4?</h2>
        <p className="text-white/70 mb-6">
          Level 4 (High Automation) means the vehicle can drive itself completely in specific conditions without human intervention. Unlike Level 3, the system handles all driving tasks in its operational design domain (ODD).
        </p>
        <img src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&q=80" alt="Self Driving Technology" className="w-full rounded-xl mb-8" />
        <h2 className="text-2xl font-bold text-white mt-10 mb-4">Key Characteristics</h2>
        <div className="space-y-4 mb-8">
          {[
            { icon: "🚫", title: "No Human Required", desc: "Within the ODD, no steering wheel or pedals needed" },
            { icon: "🗺️", title: "Geofenced", desc: "Only works in specific mapped areas" },
            { icon: "🛡️", title: "Handles Failures", desc: "System can safely stop if it encounters unexpected situations" },
            { icon: "🎯", title: "All Driving Tasks", desc: "Handles steering, acceleration, braking, and environment monitoring" },
          ].map((item) => (
            <div key={item.title} className="flex gap-4 p-4 bg-white/5 border border-white/10 rounded-lg">
              <span className="text-2xl">{item.icon}</span>
              <div>
                <h3 className="font-semibold text-white">{item.title}</h3>
                <p className="text-sm text-white/60">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
        <h2 className="text-2xl font-bold text-white mt-10 mb-4">Current Level 4 Systems</h2>
        <p className="text-white/70 mb-6">
          Waymo's robotaxi service in Phoenix and San Francisco represents the most advanced Level 4 implementation. These vehicles operate without safety drivers in designated service areas.
        </p>
        <h2 className="text-2xl font-bold text-white mt-10 mb-4">Implications for Drivers</h2>
        <p className="text-white/70">
          Level 4 autonomy will fundamentally change how we use vehicles—commuters can work during their commute, elderly and disabled individuals gain independence, and delivery and logistics transform entirely.
        </p>
      </>
    ),
  },
  "voice-assistants-modern-cars": {
    title: "Voice Assistants in Modern Cars",
    date: "March 5, 2026",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&q=80",
    category: "Features",
    excerpt: "From Alexa to Google Assistant, how voice technology is evolving in vehicles.",
    content: (
      <>
        <img src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&q=80" alt="Voice Assistant in Car" className="w-full rounded-xl mb-8" />
        <p className="text-lg text-white/80 mb-6">
          Voice assistants have become a standard feature in modern vehicles, transforming how we interact with our cars.
        </p>
        <h2 className="text-2xl font-bold text-white mt-10 mb-4">Evolution of In-Car Voice Assistants</h2>
        <div className="space-y-4 mb-8">
          {[
            { year: "2010s", desc: "Basic voice commands for phone calls and music" },
            { year: "2020", desc: "Alexa Auto and Google Assistant integration" },
            { year: "2023", desc: "Built-in assistants with natural language understanding" },
            { year: "2026", desc: "AI-powered assistants with predictive capabilities" },
          ].map((item) => (
            <div key={item.year} className="flex gap-4 items-start">
              <span className="text-cyan-400 font-bold min-w-[60px]">{item.year}</span>
              <span className="text-white/70">{item.desc}</span>
            </div>
          ))}
        </div>
        <img src="https://images.unsplash.com/photo-1617788138017-80ad40651399?w=1200&q=80" alt="Modern Car Interior" className="w-full rounded-xl mb-8" />
        <h2 className="text-2xl font-bold text-white mt-10 mb-4">Modern Capabilities</h2>
        <p className="text-white/70 mb-6">Today's voice assistants can:</p>
        <ul className="list-disc list-inside space-y-2 text-white/70 mb-8">
          <li>Understand natural speech patterns</li>
          <li>Control climate, entertainment, and navigation</li>
          <li>Answer questions about vehicle status</li>
          <li>Integrate with smart home devices</li>
          <li>Learn driver preferences over time</li>
        </ul>
        <h2 className="text-2xl font-bold text-white mt-10 mb-4">The Future</h2>
        <p className="text-white/70">
          Voice assistants are evolving toward predictive AI that anticipates needs before you ask. Imagine your car automatically adjusting settings based on your calendar or starting your commute when it detects you're about to leave.
        </p>
      </>
    ),
  },
};

export default function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
  return (
    <BlogPostContent params={params} />
  );
}

async function BlogPostContent({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = posts[slug as keyof typeof posts];
  
  if (!post) {
    return (
      <div className="bg-black min-h-screen py-20 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-3xl font-bold text-white mb-4">Article Not Found</h1>
          <Link href="/blog" className="text-cyan-400 hover:underline">← Back to Blog</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-black min-h-screen py-20 px-6">
      <article className="max-w-3xl mx-auto">
        <Link href="/blog" className="inline-flex items-center gap-2 text-white/60 hover:text-cyan-400 mb-8 transition">
          ← Back to Blog
        </Link>
        
        <div className="mb-6">
          <span className="text-xs px-2 py-1 bg-cyan-500/20 text-cyan-400 rounded mr-3">{post.category}</span>
          <span className="text-white/40 text-sm">{post.date}</span>
        </div>
        
        <h1 className="text-4xl font-bold text-white mb-6">{post.title}</h1>
        
        <div className="text-white/60 mb-8">{post.excerpt}</div>
        
        {post.content}
        
        <div className="mt-16 pt-8 border-t border-white/10">
          <Link href="/blog" className="inline-flex items-center gap-2 text-cyan-400 hover:underline">
            ← Back to All Articles
          </Link>
        </div>
      </article>
    </div>
  );
}
