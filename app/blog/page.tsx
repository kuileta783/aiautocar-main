export default function Blog() {
  const posts = [
    { title: "The Rise of AI in Automotive", date: "March 15, 2026", excerpt: "How artificial intelligence is transforming the car industry." },
    { title: "Level 4 Autonomy: What It Means", date: "March 10, 2026", excerpt: "Understanding the difference between Level 3 and Level 4 autonomous systems." },
    { title: "Voice Assistants in Modern Cars", date: "March 5, 2026", excerpt: "From Alexa to Google Assistant, how voice tech is evolving in vehicles." },
  ];

  return (
    <div className="bg-black min-h-screen py-20 px-6">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold text-white mb-8">Blog</h1>
        <div className="space-y-6">
          {posts.map((post, i) => (
            <article key={i} className="p-6 bg-white/5 border border-white/10 rounded-xl hover:border-cyan-500/30 transition cursor-pointer">
              <p className="text-sm text-white/40 mb-2">{post.date}</p>
              <h2 className="text-xl font-semibold text-white mb-2">{post.title}</h2>
              <p className="text-white/60">{post.excerpt}</p>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
