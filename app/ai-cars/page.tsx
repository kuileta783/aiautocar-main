export default function AICars() {
  return (
    <div className="bg-black min-h-screen py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-white mb-4">AI Cars</h1>
        <p className="text-white/60 mb-12">
          Artificial intelligence is revolutionizing the automotive industry. 
          From smart assistants to autonomous driving capabilities, AI is making our roads safer.
        </p>

        <img 
          src="https://images.unsplash.com/photo-1617788138017-80ad40651399?w=1200&q=80" 
          alt="AI in Modern Cars"
          className="w-full rounded-xl mb-12"
        />

        <div className="space-y-8">
          <div className="border-b border-white/10 pb-8">
            <h2 className="text-2xl font-semibold text-cyan-400 mb-4">Featured AI Technologies</h2>
            <p className="text-white/60 mb-6">
              Modern AI cars come equipped with sophisticated neural networks that process data from cameras, 
              lidars, and radars to understand their surroundings and make driving decisions.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              { 
                name: "Tesla Autopilot", 
                desc: "Advanced driver assistance with neural networks processing 360° camera input",
                level: "Level 2",
                image: "https://images.unsplash.com/photo-1560958089-b8a1929cea89?w=400&q=80"
              },
              { 
                name: "Waymo Driver", 
                desc: "Full self-driving technology with 5th generation sensors",
                level: "Level 4",
                image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&q=80"
              },
              { 
                name: "GM Super Cruise", 
                desc: "Hands-free driving on mapped highways with driver attention",
                level: "Level 2",
                image: "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=400&q=80"
              },
              { 
                name: "Ford BlueCruise", 
                desc: "Intelligent adaptive cruise control with lane changing",
                level: "Level 2",
                image: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=400&q=80"
              },
              { 
                name: "Mercedes DRIVE PILOT", 
                desc: "First Level 3 system approved for highways in Germany",
                level: "Level 3",
                image: "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=400&q=80"
              },
              { 
                name: "BMW Personal Pilot", 
                desc: "Level 3 autonomous driving on highways",
                level: "Level 3",
                image: "https://images.unsplash.com/photo-1555215695-3004980ad54e?w=400&q=80"
              },
            ].map((tech) => (
              <div key={tech.name} className="p-6 bg-white/5 border border-white/10 rounded-xl overflow-hidden">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="font-semibold text-white">{tech.name}</h3>
                  <span className="text-xs px-2 py-1 bg-cyan-500/20 text-cyan-400 rounded">{tech.level}</span>
                </div>
                <p className="text-sm text-white/50">{tech.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 p-8 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/20 rounded-xl">
            <h3 className="text-xl font-semibold text-white mb-4">How AI Cars Work</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <img 
                  src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=300&q=80" 
                  alt="Perception"
                  className="w-full aspect-video object-cover rounded-lg mb-3"
                />
                <div className="text-2xl mb-2">📷</div>
                <h4 className="font-medium text-white mb-1">Perception</h4>
                <p className="text-sm text-white/50">Cameras and sensors detect objects, lane markings, and traffic signs</p>
              </div>
              <div>
                <img 
                  src="https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=300&q=80" 
                  alt="Processing"
                  className="w-full aspect-video object-cover rounded-lg mb-3"
                />
                <div className="text-2xl mb-2">🧠</div>
                <h4 className="font-medium text-white mb-1">Processing</h4>
                <p className="text-sm text-white/50">Neural networks analyze the data and predict object movements</p>
              </div>
              <div>
                <img 
                  src="https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=300&q=80" 
                  alt="Action"
                  className="w-full aspect-video object-cover rounded-lg mb-3"
                />
                <div className="text-2xl mb-2">🎯</div>
                <h4 className="font-medium text-white mb-1">Action</h4>
                <p className="text-sm text-white/50">AI makes driving decisions and controls steering, acceleration, braking</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
