export default function Contact() {
  return (
    <div className="bg-black min-h-screen py-20 px-6">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-4xl font-bold text-white mb-4 text-center">Contact Us</h1>
        <p className="text-white/60 text-center mb-12">
          Get in touch with us for questions, partnerships, or feedback.
        </p>
        <form className="space-y-6">
          <div>
            <label className="block text-sm text-white/70 mb-2">Name</label>
            <input
              type="text"
              className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white focus:border-cyan-500 focus:outline-none transition"
              placeholder="Your name"
            />
          </div>
          <div>
            <label className="block text-sm text-white/70 mb-2">Email</label>
            <input
              type="email"
              className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white focus:border-cyan-500 focus:outline-none transition"
              placeholder="you@example.com"
            />
          </div>
          <div>
            <label className="block text-sm text-white/70 mb-2">Message</label>
            <textarea
              rows={5}
              className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white focus:border-cyan-500 focus:outline-none transition resize-none"
              placeholder="Your message..."
            />
          </div>
          <button
            type="submit"
            className="w-full py-3 bg-cyan-500 text-black font-semibold rounded-lg hover:bg-cyan-400 transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}
