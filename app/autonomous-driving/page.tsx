export default function AutonomousDriving() {
  return (
    <div className="bg-black min-h-screen py-20 px-6">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold text-white mb-8">Autonomous Driving</h1>
        <div className="space-y-6 text-white/70">
          <p>
            Self-driving technology is advancing rapidly. Learn about the different 
            levels of autonomy and how they work.
          </p>
          <h2 className="text-2xl font-semibold text-white mt-10 mb-4">SAE Automation Levels</h2>
          <div className="space-y-4">
            {[
              { level: "Level 0", name: "No Automation", desc: "Human does everything" },
              { level: "Level 1", name: "Driver Assistance", desc: "Adaptive cruise control, lane keep" },
              { level: "Level 2", name: "Partial Automation", desc: "Combined steering + acceleration" },
              { level: "Level 3", name: "Conditional Automation", desc: "Car drives, human monitors" },
              { level: "Level 4", name: "High Automation", desc: "Full self-driving in specific areas" },
              { level: "Level 5", name: "Full Automation", desc: "Complete autonomous operation" },
            ].map((item) => (
              <div key={item.level} className="flex gap-4 p-4 bg-white/5 border border-white/10 rounded-lg">
                <span className="text-cyan-400 font-mono text-sm">{item.level}</span>
                <div>
                  <h3 className="font-semibold text-white">{item.name}</h3>
                  <p className="text-sm text-white/50">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
