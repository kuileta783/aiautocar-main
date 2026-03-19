"use client";
import Link from "next/link";

const posts = [
  {
    slug: "rise-of-ai-in-automotive",
    title: "The Rise of AI in Automotive Industry",
    date: "March 15, 2026",
    excerpt: "How artificial intelligence is transforming the car industry from manufacturing to autonomous driving.",
    image: "https://images.unsplash.com/photo-1617788138017-80ad40651399?w=800&q=80",
    category: "Industry"
  },
  {
    slug: "level-4-autonomy-explained",
    title: "Level 4 Autonomy: What It Means for Drivers",
    date: "March 10, 2026",
    excerpt: "Understanding the difference between Level 3 and Level 4 autonomous systems and their implications.",
    image: "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=800&q=80",
    category: "Technology"
  },
  {
    slug: "voice-assistants-modern-cars",
    title: "Voice Assistants in Modern Cars",
    date: "March 5, 2026",
    excerpt: "From Alexa to Google Assistant, how voice technology is evolving in vehicles.",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80",
    category: "Features"
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
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group bg-white/5 border border-white/10 rounded-xl overflow-hidden hover:border-cyan-500/30 transition"
            >
              <div className="aspect-video bg-gradient-to-br from-cyan-500/20 to-blue-500/20 overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                  }}
                />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-xs px-2 py-1 bg-cyan-500/20 text-cyan-400 rounded">{post.category}</span>
                  <span className="text-sm text-white/40">{post.date}</span>
                </div>
                <h2 className="text-xl font-semibold text-white mb-2 group-hover:text-cyan-400 transition">{post.title}</h2>
                <p className="text-white/60 text-sm">{post.excerpt}</p>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-16 p-8 bg-white/5 border border-white/10 rounded-xl text-center">
          <h3 className="text-xl font-semibold text-white mb-4">More Articles Coming Soon</h3>
          <p className="text-white/60 mb-6">We're working on more in-depth articles about AI automotive technology.</p>
          <Link
            href="/ai-cars"
            className="inline-block px-6 py-3 bg-cyan-500 text-black font-semibold rounded-lg hover:bg-cyan-400 transition"
          >
            Explore AI Cars
          </Link>
        </div>
      </div>
    </div>
  );
}
