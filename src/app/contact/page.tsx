import Link from "next/link";

export const metadata = {
  title: "Contact - AIAutoCar",
  description: "Get in touch with AIAutoCar for partnerships and inquiries.",
};

export default function Contact() {
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
            <Link href="/contact" className="text-white hover:text-cyan-400 transition">Contact</Link>
          </nav>
        </div>
      </header>

      <main className="py-16 px-4">
        <div className="max-w-2xl mx-auto">
          <h1 className="text-4xl font-bold text-white mb-4">Contact Us</h1>
          <p className="text-xl text-slate-400 mb-12">
            Get in touch for partnerships, advertising, or any inquiries.
          </p>

          <form className="space-y-6">
            <div>
              <label className="block text-slate-400 mb-2">Name</label>
              <input type="text" className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-3 text-white focus:border-cyan-500 focus:outline-none" placeholder="Your name" />
            </div>
            <div>
              <label className="block text-slate-400 mb-2">Email</label>
              <input type="email" className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-3 text-white focus:border-cyan-500 focus:outline-none" placeholder="your@email.com" />
            </div>
            <div>
              <label className="block text-slate-400 mb-2">Message</label>
              <textarea rows={5} className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-3 text-white focus:border-cyan-500 focus:outline-none" placeholder="Your message..."></textarea>
            </div>
            <button type="submit" className="w-full bg-cyan-500 hover:bg-cyan-600 text-white py-3 rounded-lg font-semibold transition">
              Send Message
            </button>
          </form>

          <div className="mt-12 text-center text-slate-500">
            <p>Or email us directly at: contact@aiautocar.com</p>
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
