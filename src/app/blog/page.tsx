import Link from "next/link";

export const metadata = {
  title: "Blog - AIAutoCar",
  description: "Latest news and articles about AI in the automotive industry.",
};

const posts = [
  { id: 1, title: "The Rise of AI in Modern Vehicles", excerpt: "How artificial intelligence is transforming the driving experience.", date: "March 15, 2026", category: "Technology" },
  { id: 2, title: "Level 4 Autonomous Driving: What You Need to Know", excerpt: "A comprehensive guide to Level 4 self-driving technology.", date: "March 10, 2026", category: "Autonomous" },
  { id: 3, title: "Top AI Features in 2026 Electric Vehicles", excerpt: "The most innovative AI features in EVs this year.", date: "March 5, 2026", category: "EVs" },
];

export default function Blog() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <header className="border-b border-slate-700">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="text-2xl font-bold text-white">
            <span className="text-cyan-400">AI</span>AutoCar
          </Link>
          <nav className="hidden md:flex items-center gap-8">
            <Link href="/" className="text-slate-400 hover:text-cyan-400 transition">Home</Link>
            <Link href="/about" className="text-slate-400 hover:text-cyan-400 transition">About</Link>
            <Link href="/ai-cars" className="text-slate-400 hover:text-cyan-400 transition">AI Cars</Link>
            <Link href="/autonomous-driving" className="text-slate-400 hover:text-cyan-400 transition">Autonomous Driving</Link>
            <Link href="/contact" className="text-slate-400 hover:text-cyan-400 transition">Contact</Link>
          </nav>
        </div>
      </header>

      <main className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-white mb-4">Blog</h1>
          <p className="text-xl text-slate-400 mb-12">
            Latest news and articles about AI in the automotive industry.
          </p>

          <div className="space-y-8">
            {posts.map((post) => (
              <article key={post.id} className="bg-slate-800 rounded-xl p-6 border border-slate-700 hover:border-cyan-500 transition">
                <div className="flex items-center gap-4 text-sm text-slate-500 mb-3">
                  <span>{post.date}</span>
                  <span className="px-2 py-0.5 bg-cyan-900/50 text-cyan-400 rounded">{post.category}</span>
                </div>
                <h2 className="text-2xl font-semibold text-white mb-3">{post.title}</h2>
                <p className="text-slate-400">{post.excerpt}</p>
              </article>
            ))}
          </div>
        </div>
      </main>

      <footer className="border-t border-slate-700 py-8 px-4 mt-16">
        <div className="max-w-7xl mx-auto text-center text-slate-500">
          <p>&copy; 2026 AIAutoCar.com. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
