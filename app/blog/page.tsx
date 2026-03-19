import Link from "next/link";

const posts = [
  {
    slug: "rise-of-ai-in-automotive",
    title: "The Rise of AI in Automotive Industry",
    date: "March 15, 2026",
    excerpt: "How artificial intelligence is transforming the car industry from manufacturing to autonomous driving.",
    image: "https://images.unsplash.com/photo-1617788138017-80ad40651399?w=800&q=80",
    category: "Industry",
    readTime: "8 min read"
  },
  {
    slug: "level-4-autonomy-explained",
    title: "Level 4 Autonomy: What It Means for Drivers",
    date: "March 12, 2026",
    excerpt: "Understanding the difference between Level 3 and Level 4 autonomous systems and their implications.",
    image: "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=800&q=80",
    category: "Technology",
    readTime: "6 min read"
  },
  {
    slug: "voice-assistants-modern-cars",
    title: "Voice Assistants in Modern Cars",
    date: "March 8, 2026",
    excerpt: "From Alexa to Google Assistant, how voice technology is evolving in vehicles.",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80",
    category: "Features",
    readTime: "5 min read"
  },
  {
    slug: "ai-electric-vehicles",
    title: "How AI is Revolutionizing Electric Vehicles",
    date: "March 5, 2026",
    excerpt: "From battery optimization to autonomous charging, AI is making EVs smarter and more efficient.",
    image: "https://images.unsplash.com/photo-1593941707882-a5bba14938c7?w=800&q=80",
    category: "Electric Vehicles",
    readTime: "7 min read"
  },
  {
    slug: "future-of-car-safety",
    title: "The Future of Car Safety: AI-Powered Features",
    date: "March 1, 2026",
    excerpt: "How artificial intelligence is reducing accidents and saving lives on our roads.",
    image: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=800&q=80",
    category: "Safety",
    readTime: "6 min read"
  },
  {
    slug: "connected-cars-v2x",
    title: "Connected Cars and V2X Communication",
    date: "February 25, 2026",
    excerpt: "How vehicles are learning to communicate with each other and infrastructure for safer roads.",
    image: "https://images.unsplash.com/photo-1555215695-3004980ad54e?w=800&q=80",
    category: "Connectivity",
    readTime: "8 min read"
  },
];

export default function Blog() {
  return (
    <div className="bg-black min-h-screen py-20 px-6">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold text-white mb-4">Blog</h1>
        <p className="text-white/60 mb-12">
          Latest news and insights on AI automotive technology.
        </p>
        
        {/* Featured Article */}
        <Link
          href="/blog/rise-of-ai-in-automotive"
          className="block mb-12 group"
        >
          <div className="grid md:grid-cols-2 gap-8 p-6 bg-white/5 border border-white/10 rounded-2xl hover:border-cyan-500/30 transition">
            <div className="aspect-video md:aspect-auto overflow-hidden rounded-xl">
              <img
                src="https://images.unsplash.com/photo-1617788138017-80ad40651399?w=800&q=80"
                alt="Featured Article"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="flex flex-col justify-center">
              <span className="text-xs px-3 py-1 bg-cyan-500/20 text-cyan-400 rounded-full w-fit mb-4">Featured</span>
              <h2 className="text-2xl font-bold text-white mb-3 group-hover:text-cyan-400 transition">The Rise of AI in Automotive Industry</h2>
              <p className="text-white/60 mb-4">
                How artificial intelligence is transforming the car industry from manufacturing to autonomous driving. Explore the revolutionary changes happening right now.
              </p>
              <div className="flex items-center gap-4 text-sm text-white/40">
                <span>March 15, 2026</span>
                <span>•</span>
                <span>8 min read</span>
              </div>
            </div>
          </div>
        </Link>

        {/* Article Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.slice(1).map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group bg-white/5 border border-white/10 rounded-xl overflow-hidden hover:border-cyan-500/30 transition"
            >
              <div className="aspect-video bg-gradient-to-br from-cyan-500/20 to-blue-500/20 overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-xs px-2 py-1 bg-cyan-500/20 text-cyan-400 rounded">{post.category}</span>
                  <span className="text-xs text-white/40">{post.readTime}</span>
                </div>
                <h2 className="text-lg font-semibold text-white mb-2 group-hover:text-cyan-400 transition line-clamp-2">{post.title}</h2>
                <p className="text-white/50 text-sm line-clamp-2">{post.excerpt}</p>
                <div className="mt-4 text-sm text-white/40">{post.date}</div>
              </div>
            </Link>
          ))}
        </div>

        {/* Newsletter */}
        <div className="mt-16 p-8 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/20 rounded-2xl text-center">
          <h3 className="text-xl font-semibold text-white mb-4">Never Miss an Update</h3>
          <p className="text-white/60 mb-6">Get the latest articles delivered straight to your inbox.</p>
          <Link
            href="/contact"
            className="inline-block px-8 py-3 bg-cyan-500 text-black font-semibold rounded-lg hover:bg-cyan-400 transition"
          >
            Subscribe Now
          </Link>
        </div>
      </div>
    </div>
  );
}
