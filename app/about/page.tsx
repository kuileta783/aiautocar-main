import Link from "next/link";

export const metadata = {
  title: "About - AIAutoCar",
  description: "Learn about AIAutoCar - your source for AI automotive technology news and reviews.",
};

export default function About() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <header className="border-b border-slate-700">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="text-2xl font-bold text-white">
            <span className="text-cyan-400">AI</span>AutoCar
          </Link>
          <nav className="hidden md:flex items-center gap-8">
            <Link href="/" className="text-slate-400 hover:text-cyan-400 transition">Home</Link>
            <Link href="/about" className="text-white hover:text-cyan-400 transition">About</Link>
            <Link href="/ai-cars" className="text-slate-400 hover:text-cyan-400 transition">AI Cars</Link>
            <Link href="/autonomous-driving" className="text-slate-400 hover:text-cyan-400 transition">Autonomous Driving</Link>
            <Link href="/contact" className="text-slate-400 hover:text-cyan-400 transition">Contact</Link>
          </nav>
        </div>
      </header>

      <main className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-white mb-8">About AIAutoCar</h1>
          
          <div className="space-y-6 text-slate-400">
            <p className="text-lg">
              Welcome to AIAutoCar, your premier destination for all things related to artificial intelligence in the automotive industry.
            </p>
            
            <h2 className="text-2xl font-semibold text-white mt-8">Our Mission</h2>
            <p>
              We are dedicated to bringing you the latest news, reviews, and insights into AI-powered automotive technology.
            </p>
            
            <h2 className="text-2xl font-semibold text-white mt-8">What We Cover</h2>
            <ul className="list-disc list-inside space-y-2">
              <li>Autonomous driving technology and Level 4-5 self-driving systems</li>
              <li>AI-powered car assistants and voice recognition</li>
              <li>Predictive maintenance and vehicle health monitoring</li>
              <li>Connected vehicles and V2X communication</li>
              <li>Electric vehicle AI optimization</li>
              <li>Automotive safety AI systems</li>
            </ul>
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
