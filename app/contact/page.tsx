"use client";
import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="bg-black min-h-screen py-20 px-6 flex items-center justify-center">
        <div className="text-center max-w-md">
          <div className="text-5xl mb-6">✅</div>
          <h2 className="text-2xl font-bold text-white mb-4">Message Sent!</h2>
          <p className="text-white/60 mb-8">
            Thank you for reaching out. We'll get back to you within 24-48 hours.
          </p>
          <button
            onClick={() => setSubmitted(false)}
            className="px-6 py-3 border border-white/20 text-white rounded-lg hover:bg-white/5 transition"
          >
            Send Another Message
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-black min-h-screen py-20 px-6">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-4xl font-bold text-white mb-4 text-center">Contact Us</h1>
        <p className="text-white/60 text-center mb-12">
          Get in touch with us for questions, partnerships, or feedback.
        </p>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm text-white/70 mb-2">Name</label>
              <input
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white focus:border-cyan-500 focus:outline-none transition"
                placeholder="John Doe"
              />
            </div>
            <div>
              <label className="block text-sm text-white/70 mb-2">Email</label>
              <input
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white focus:border-cyan-500 focus:outline-none transition"
                placeholder="john@example.com"
              />
            </div>
          </div>
          <div>
            <label className="block text-sm text-white/70 mb-2">Subject</label>
            <input
              type="text"
              required
              value={formData.subject}
              onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
              className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white focus:border-cyan-500 focus:outline-none transition"
              placeholder="How can we help?"
            />
          </div>
          <div>
            <label className="block text-sm text-white/70 mb-2">Message</label>
            <textarea
              rows={5}
              required
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
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

        <div className="mt-12 pt-12 border-t border-white/10 grid md:grid-cols-3 gap-8 text-center">
          <div>
            <div className="text-2xl mb-2">📧</div>
            <p className="text-white/40 text-sm">Email</p>
            <p className="text-white">contact@aiautocar.com</p>
          </div>
          <div>
            <div className="text-2xl mb-2">🌍</div>
            <p className="text-white/40 text-sm">Location</p>
            <p className="text-white">San Francisco, CA</p>
          </div>
          <div>
            <div className="text-2xl mb-2">⏰</div>
            <p className="text-white/40 text-sm">Response Time</p>
            <p className="text-white">24-48 hours</p>
          </div>
        </div>
      </div>
    </div>
  );
}
