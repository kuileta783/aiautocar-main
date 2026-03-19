import Link from "next/link";

const posts: Record<string, {
  title: string;
  date: string;
  image: string;
  category: string;
  readTime: string;
  excerpt: string;
  content: React.ReactNode;
}> = {
  "rise-of-ai-in-automotive": {
    title: "The Rise of AI in Automotive Industry",
    date: "March 15, 2026",
    image: "https://images.unsplash.com/photo-1617788138017-80ad40651399?w=1200&q=80",
    category: "Industry",
    readTime: "8 min read",
    excerpt: "How artificial intelligence is transforming the car industry from manufacturing to autonomous driving.",
    content: (
      <>
        <img src="https://images.unsplash.com/photo-1617788138017-80ad40651399?w=1200&q=80" alt="AI in Automotive" className="w-full rounded-xl mb-8" />
        
        <p className="text-lg text-white/80 mb-6 leading-relaxed">
          The automotive industry stands at the precipice of its most significant transformation since the invention of the automobile itself. Artificial Intelligence (AI) is not merely enhancing cars—it's fundamentally reimagining what vehicles can do, how they're built, and how we interact with them.
        </p>
        
        <div className="grid md:grid-cols-3 gap-4 mb-8">
          <div className="p-4 bg-cyan-500/10 border border-cyan-500/20 rounded-xl text-center">
            <div className="text-3xl font-bold text-cyan-400 mb-1">87%</div>
            <p className="text-sm text-white/60">of new cars will have some AI capability by 2030</p>
          </div>
          <div className="p-4 bg-cyan-500/10 border border-cyan-500/20 rounded-xl text-center">
            <div className="text-3xl font-bold text-cyan-400 mb-1">$15T</div>
            <p className="text-sm text-white/60">projected autonomous vehicle market by 2030</p>
          </div>
          <div className="p-4 bg-cyan-500/10 border border-cyan-500/20 rounded-xl text-center">
            <div className="text-3xl font-bold text-cyan-400 mb-1">40%</div>
            <p className="text-sm text-white/60">reduction in accidents with Level 4 AVs</p>
          </div>
        </div>

        <h2 className="text-2xl font-bold text-white mt-12 mb-4">AI in Manufacturing</h2>
        <img src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=1200&q=80" alt="AI Manufacturing" className="w-full rounded-xl mb-6" />
        <p className="text-white/70 mb-6 leading-relaxed">
          Car manufacturers are using AI-powered robots and computer vision systems to revolutionize quality control on the factory floor. These intelligent systems can detect microscopic defects that human inspectors would never catch, ensuring that every vehicle leaving the factory meets the highest standards.
        </p>
        <p className="text-white/70 mb-6 leading-relaxed">
          Machine learning algorithms now predict equipment failures before they occur, reducing unplanned downtime by up to 50%. Major manufacturers like Toyota, BMW, and Tesla have already deployed these systems across their global facilities.
        </p>

        <h2 className="text-2xl font-bold text-white mt-12 mb-4">AI-Powered Driving Assistance</h2>
        <p className="text-white/70 mb-6 leading-relaxed">
          Modern vehicles are equipped with an array of AI systems that work together to create a safer driving experience. From adaptive cruise control that learns your driving patterns to automatic emergency braking that reacts faster than any human, AI is making our roads safer.
        </p>

        <h2 className="text-2xl font-bold text-white mt-12 mb-4">The Road to Full Autonomy</h2>
        <img src="https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=1200&q=80" alt="Autonomous Driving" className="w-full rounded-xl mb-6" />
        <p className="text-white/70 mb-6 leading-relaxed">
          Level 4 autonomy—where vehicles can operate fully independently within defined geographical areas—is already a reality in robotaxi services. Waymo operates fully driverless vehicles in Phoenix and San Francisco, providing over 100,000 rides weekly without a human safety driver.
        </p>

        <div className="p-6 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/20 rounded-xl mt-8">
          <h3 className="font-semibold text-white mb-2">Key Takeaway</h3>
          <p className="text-white/70 text-sm">AI isn't replacing human drivers—it's augmenting our abilities, making roads safer and driving more accessible. The future of automotive isn't about removing humans from the equation; it's about creating a powerful partnership between human intuition and machine precision.</p>
        </div>
      </>
    ),
  },
  "ai-electric-vehicles": {
    title: "How AI is Revolutionizing Electric Vehicles",
    date: "March 5, 2026",
    image: "https://images.unsplash.com/photo-1593941707882-a5bba14938c7?w=1200&q=80",
    category: "Electric Vehicles",
    readTime: "7 min read",
    excerpt: "From battery optimization to autonomous charging, AI is making EVs smarter and more efficient.",
    content: (
      <>
        <img src="https://images.unsplash.com/photo-1593941707882-a5bba14938c7?w=1200&q=80" alt="Electric Vehicles" className="w-full rounded-xl mb-8" />
        
        <p className="text-lg text-white/80 mb-6 leading-relaxed">
          Electric vehicles represent the future of transportation, but it's Artificial Intelligence that's making them practical for everyday use. From extending range to predicting maintenance needs, AI is solving many of the challenges that once made EVs impractical for mainstream adoption.
        </p>

        <h2 className="text-2xl font-bold text-white mt-12 mb-4">Battery Management Intelligence</h2>
        <img src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&q=80" alt="Battery Technology" className="w-full rounded-xl mb-6" />
        <p className="text-white/70 mb-6 leading-relaxed">
          The battery is the heart of any electric vehicle, and AI is transforming how we manage this critical component through sophisticated thermal management, state-of-charge estimation, and lifetime prediction.
        </p>
        <div className="grid md:grid-cols-2 gap-4 mb-8">
          {[
            { icon: "⚡", name: "State of Charge Estimation", desc: "AI algorithms provide 98%+ accuracy in estimating remaining range" },
            { icon: "🌡️", name: "Thermal Management", desc: "Machine learning optimizes battery temperature for maximum lifespan" },
            { icon: "⏱️", name: "Lifetime Prediction", desc: "AI predicts battery degradation over time" },
            { icon: "🔌", name: "Charging Optimization", desc: "Smart charging schedules maximize battery health" },
          ].map((item) => (
            <div key={item.name} className="p-4 bg-white/5 border border-white/10 rounded-lg">
              <div className="flex items-center gap-3 mb-2">
                <span className="text-2xl">{item.icon}</span>
                <h3 className="font-semibold text-white">{item.name}</h3>
              </div>
              <p className="text-sm text-white/60">{item.desc}</p>
            </div>
          ))}
        </div>

        <h2 className="text-2xl font-bold text-white mt-12 mb-4">Range Optimization Through AI</h2>
        <p className="text-white/70 mb-6 leading-relaxed">
          Range anxiety remains the top concern for potential EV buyers. AI addresses this through sophisticated prediction and optimization—considering traffic, elevation, temperature, and driving style to calculate optimal routes.
        </p>

        <h2 className="text-2xl font-bold text-white mt-12 mb-4">Future: Bidirectional Charging and Smart Grids</h2>
        <div className="p-6 bg-gradient-to-r from-green-500/10 to-cyan-500/10 border border-green-500/20 rounded-xl mb-8">
          <h3 className="font-semibold text-white mb-4">Vehicle-to-Grid (V2G) Technology</h3>
          <p className="text-white/70 text-sm mb-4">
            AI-managed fleets of EVs could stabilize power grids by selling electricity back during peak demand. Your vehicle could earn money while parked, offsetting charging costs.
          </p>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="text-center">
              <div className="text-2xl font-bold text-green-400">$2,000+</div>
              <p className="text-sm text-white/60">Potential annual value from V2G</p>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-green-400">95%</div>
              <p className="text-sm text-white/60">of charging at optimal grid times</p>
            </div>
          </div>
        </div>

        <div className="p-6 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/20 rounded-xl">
          <h3 className="font-semibold text-white mb-2">The Bottom Line</h3>
          <p className="text-white/70 text-sm">AI isn't just making EVs more efficient—it's making them essential infrastructure. Future EVs will be mobile energy assets that communicate with grids, buildings, and other vehicles.</p>
        </div>
      </>
    ),
  },
  "future-of-car-safety": {
    title: "The Future of Car Safety: AI-Powered Features",
    date: "March 1, 2026",
    image: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=1200&q=80",
    category: "Safety",
    readTime: "6 min read",
    excerpt: "How artificial intelligence is reducing accidents and saving lives on our roads.",
    content: (
      <>
        <img src="https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=1200&q=80" alt="Car Safety" className="w-full rounded-xl mb-8" />
        
        <p className="text-lg text-white/80 mb-6 leading-relaxed">
          Every year, approximately 1.3 million people die in traffic accidents worldwide. Ninety-four percent of these accidents are caused by human error. Artificial Intelligence offers a solution: eyes that never tire, reflexes that never falter, and attention that never wanders.
        </p>

        <div className="p-6 bg-red-500/10 border border-red-500/20 rounded-xl mb-8">
          <div className="grid md:grid-cols-3 gap-6 text-center">
            <div>
              <div className="text-3xl font-bold text-red-400 mb-1">1.3M</div>
              <p className="text-sm text-white/60">Lives lost annually to car accidents</p>
            </div>
            <div>
              <div className="text-3xl font-bold text-red-400 mb-1">94%</div>
              <p className="text-sm text-white/60">Caused by human error</p>
            </div>
            <div>
              <div className="text-3xl font-bold text-green-400 mb-1">40%</div>
              <p className="text-sm text-white/60">Could be prevented with Level 4 AVs</p>
            </div>
          </div>
        </div>

        <h2 className="text-2xl font-bold text-white mt-12 mb-4">AI Safety Systems Today</h2>
        <div className="grid md:grid-cols-2 gap-4 mb-8">
          {[
            { name: "Automatic Emergency Braking", desc: "Detects pedestrians and cyclists, applying brakes if driver doesn't respond", icon: "🛑" },
            { name: "Blind Spot Monitoring", desc: "AI tracks vehicles in blind spots, alerting before lane changes", icon: "👁️" },
            { name: "Lane Departure Warning", desc: "Alerts when vehicle drifts from lane without signaling", icon: "⚠️" },
            { name: "Forward Collision Warning", desc: "Monitors vehicle ahead, warns of impending collisions", icon: "🚨" },
          ].map((item) => (
            <div key={item.name} className="p-4 bg-white/5 border border-white/10 rounded-lg flex gap-4">
              <span className="text-3xl">{item.icon}</span>
              <div>
                <h3 className="font-semibold text-white mb-1">{item.name}</h3>
                <p className="text-sm text-white/60">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <h2 className="text-2xl font-bold text-white mt-12 mb-4">The Road to Zero Accidents</h2>
        <p className="text-white/70 mb-6 leading-relaxed">
          While completely eliminating accidents may be impossible, AI is driving us closer to that goal than ever before through predictive collision avoidance, driver monitoring, and interconnected vehicle networks.
        </p>

        <div className="p-6 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/20 rounded-xl">
          <h3 className="font-semibold text-white mb-2">The Bottom Line</h3>
          <p className="text-white/70 text-sm">AI safety systems are not about removing human control—they're about augmenting human capabilities. The combination of human judgment and machine precision is creating the safest transportation system in history.</p>
        </div>
      </>
    ),
  },
  "connected-cars-v2x": {
    title: "Connected Cars and V2X Communication",
    date: "February 25, 2026",
    image: "https://images.unsplash.com/photo-1555215695-3004980ad54e?w=1200&q=80",
    category: "Connectivity",
    readTime: "8 min read",
    excerpt: "How vehicles are learning to communicate with each other and infrastructure for safer roads.",
    content: (
      <>
        <img src="https://images.unsplash.com/photo-1555215695-3004980ad54e?w=1200&q=80" alt="Connected Cars" className="w-full rounded-xl mb-8" />
        
        <p className="text-lg text-white/80 mb-6 leading-relaxed">
          The future of road safety isn't just about individual vehicles being smart—it's about vehicles talking to each other and to the infrastructure around them. V2X (Vehicle-to-Everything) communication is creating an interconnected transportation ecosystem where information flows seamlessly between cars, roads, and cities.
        </p>

        <h2 className="text-2xl font-bold text-white mt-12 mb-4">What is V2X?</h2>
        <div className="grid md:grid-cols-2 gap-4 mb-8">
          {[
            { name: "V2V (Vehicle-to-Vehicle)", desc: "Cars sharing position, speed, and direction with each other" },
            { name: "V2I (Vehicle-to-Infrastructure)", desc: "Communication with traffic lights, signs, and road sensors" },
            { name: "V2P (Vehicle-to-Pedestrian)", desc: "Detection of pedestrians and cyclists via smartphones" },
            { name: "V2N (Vehicle-to-Network)", desc: "Connection to cloud services for real-time traffic data" },
          ].map((item) => (
            <div key={item.name} className="p-4 bg-white/5 border border-white/10 rounded-lg">
              <h3 className="font-semibold text-cyan-400 mb-1">{item.name}</h3>
              <p className="text-sm text-white/60">{item.desc}</p>
            </div>
          ))}
        </div>

        <h2 className="text-2xl font-bold text-white mt-12 mb-4">Real-World Applications</h2>
        <img src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&q=80" alt="Smart City" className="w-full rounded-xl mb-6" />
        <p className="text-white/70 mb-6 leading-relaxed">
          V2X technology is already being deployed in cities around the world:
        </p>
        <ul className="list-disc list-inside space-y-2 text-white/70 mb-8">
          <li><strong>Emergency Vehicle Preemption:</strong> Traffic lights turn green as emergency vehicles approach</li>
          <li><strong>Intersection Safety:</strong> Warnings when another vehicle is about to run a red light</li>
          <li><strong>Traffic Flow Optimization:</strong> Coordinated timing reduces congestion and emissions</li>
          <li><strong>Hazard Warnings:</strong> Early notification of accidents, construction, or adverse weather</li>
        </ul>

        <h2 className="text-2xl font-bold text-white mt-12 mb-4">The Technology Behind V2X</h2>
        <p className="text-white/70 mb-6 leading-relaxed">
          Two main communication technologies power V2X: Dedicated Short-Range Communications (DSRC), based on Wi-Fi technology, and Cellular V2X (C-V2X), which leverages 5G networks. C-V2X is emerging as the global standard due to its superior range, reliability, and integration with cellular networks.
        </p>

        <div className="p-6 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/20 rounded-xl">
          <h3 className="font-semibold text-white mb-2">Looking Ahead</h3>
          <p className="text-white/70 text-sm">By 2030, V2X will be standard in most new vehicles, creating a harmonized transportation network where accidents are predicted before they occur and traffic flows with unprecedented efficiency.</p>
        </div>
      </>
    ),
  },
  "level-4-autonomy-explained": {
    title: "Level 4 Autonomy: What It Means for Drivers",
    date: "March 12, 2026",
    image: "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=1200&q=80",
    category: "Technology",
    readTime: "6 min read",
    excerpt: "Understanding the difference between Level 3 and Level 4 autonomous systems.",
    content: (
      <>
        <img src="https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=1200&q=80" alt="Level 4 Autonomy" className="w-full rounded-xl mb-8" />
        <p className="text-lg text-white/80 mb-6 leading-relaxed">
          Level 4 autonomy represents a fundamental shift because it removes the human from the driving equation entirely within defined operational areas. No steering wheel needed, no pedals—just passengers enjoying the journey while the vehicle handles everything.
        </p>
        <h2 className="text-2xl font-bold text-white mt-12 mb-4">Current Level 4 Deployments</h2>
        <p className="text-white/70 mb-6 leading-relaxed">
          Waymo operates the most advanced Level 4 fleet, with fully driverless vehicles providing over 100,000 rides weekly in Phoenix and San Francisco.
        </p>
      </>
    ),
  },
  "voice-assistants-modern-cars": {
    title: "Voice Assistants in Modern Cars",
    date: "March 8, 2026",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&q=80",
    category: "Features",
    readTime: "5 min read",
    excerpt: "From Alexa to Google Assistant, how voice technology is evolving in vehicles.",
    content: (
      <>
        <img src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&q=80" alt="Voice Assistant" className="w-full rounded-xl mb-8" />
        <p className="text-lg text-white/80 mb-6 leading-relaxed">
          Today's voice assistants understand natural language, learn preferences, and even predict what you need before you ask. They're evolving from simple command interpreters to intelligent companions.
        </p>
        <h2 className="text-2xl font-bold text-white mt-12 mb-4">Leading Voice Systems</h2>
        <p className="text-white/70 mb-6 leading-relaxed">
          Amazon Alexa Auto, Google Assistant, Apple Siri, and Mercedes MBUX each offer unique strengths—from smart home integration to deep vehicle control.
        </p>
      </>
    ),
  },
};

export default function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
  return <BlogPostContent params={params} />;
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
          <span className="text-white/40 text-sm mr-3">{post.date}</span>
          <span className="text-white/40 text-sm">{post.readTime}</span>
        </div>
        
        <h1 className="text-4xl font-bold text-white mb-6">{post.title}</h1>
        
        <div className="text-white/60 mb-8 text-lg">{post.excerpt}</div>
        
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
