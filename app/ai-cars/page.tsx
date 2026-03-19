export default function AICars() {
  return (
    <div className="bg-black min-h-screen py-20 px-6">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold text-white mb-8">AI Cars</h1>
        <div className="space-y-6 text-white/70">
          <p>
            Artificial intelligence is revolutionizing the automotive industry. 
            From smart assistants to autonomous driving capabilities, AI is making 
            our roads safer and our drives more enjoyable.
          </p>
          <h2 className="text-2xl font-semibold text-white mt-10 mb-4">Featured Technologies</h2>
          <div className="grid gap-4">
            {[
              { name: "Tesla Autopilot", desc: "Advanced driver assistance with neural networks" },
              { name: "Waymo", desc: "Full self-driving technology" },
              { name: "GM Super Cruise", desc: "Hands-free driving on mapped highways" },
              { name: "Ford BlueCruise", desc: "Intelligent adaptive cruise control" },
            ].map((tech) => (
              <div key={tech.name} className="p-4 bg-white/5 border border-white/10 rounded-lg">
                <h3 className="font-semibold text-white">{tech.name}</h3>
                <p className="text-sm text-white/50 mt-1">{tech.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
