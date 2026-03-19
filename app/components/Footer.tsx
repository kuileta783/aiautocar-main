import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-black border-t border-white/10 py-12">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <Link href="/" className="text-xl font-bold text-white">
              <span className="text-cyan-400">AI</span>AutoCar
            </Link>
            <p className="mt-3 text-sm text-white/50">
              Your source for AI automotive news and autonomous driving technology.
            </p>
          </div>
          <div>
            <h4 className="font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link href="/about" className="text-sm text-white/50 hover:text-cyan-400">About</Link></li>
              <li><Link href="/ai-cars" className="text-sm text-white/50 hover:text-cyan-400">AI Cars</Link></li>
              <li><Link href="/autonomous-driving" className="text-sm text-white/50 hover:text-cyan-400">Autonomous Driving</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-white mb-4">Resources</h4>
            <ul className="space-y-2">
              <li><Link href="/blog" className="text-sm text-white/50 hover:text-cyan-400">Blog</Link></li>
              <li><Link href="/contact" className="text-sm text-white/50 hover:text-cyan-400">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-white mb-4">Legal</h4>
            <ul className="space-y-2">
              <li><span className="text-sm text-white/50 cursor-pointer">Privacy Policy</span></li>
              <li><span className="text-sm text-white/50 cursor-pointer">Terms of Service</span></li>
            </ul>
          </div>
        </div>
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-white/40">© 2026 AIAutoCar.com. All rights reserved.</p>
          <div className="flex gap-6">
            <span className="text-sm text-white/40">Powered by AI</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
