export default function AutonomousDriving() {
  return (
    <div className="bg-black min-h-screen py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-white mb-4">Autonomous Driving</h1>
        <p className="text-white/60 mb-12">
          Self-driving technology is advancing rapidly. Learn about the different levels of autonomy and how they work.
        </p>

        <div className="mb-12">
          <h2 className="text-2xl font-semibold text-cyan-400 mb-6">SAE Automation Levels</h2>
          <div className="space-y-4">
            {[
              { level: "L0", name: "No Automation", desc: "Human does everything - steering, acceleration, braking. No automated assistance.", color: "bg-white/5" },
              { level: "L1", name: "Driver Assistance", desc: "Adaptive cruise control OR lane keep assist. Human monitors everything.", color: "bg-white/5" },
              { level: "L2", name: "Partial Automation", desc: "Combined steering AND acceleration. Human must monitor and be ready to take over.", color: "bg-cyan-500/10 border-cyan-500/30" },
              { level: "L3", name: "Conditional Automation", desc: "Car drives in specific conditions. Human must respond to takeover requests.", color: "bg-blue-500/10 border-blue-500/30" },
              { level: "L4", name: "High Automation", desc: "Full self-driving in specific areas (geofenced). No human needed in those areas.", color: "bg-purple-500/10 border-purple-500/30" },
              { level: "L5", name: "Full Automation", desc: "Complete autonomous operation anywhere. No steering wheel or pedals needed.", color: "bg-cyan-500/20 border-cyan-500/50" },
            ].map((item) => (
              <div key={item.level} className={`flex gap-4 p-5 border border-white/10 rounded-xl ${item.color}`}>
                <span className="text-2xl font-bold text-cyan-400 min-w-[50px]">{item.level}</span>
                <div>
                  <h3 className="font-semibold text-white mb-1">{item.name}</h3>
                  <p className="text-sm text-white/60">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="p-6 bg-white/5 border border-white/10 rounded-xl">
            <h3 className="text-lg font-semibold text-white mb-4">Key Sensors Used</h3>
            <ul className="space-y-3">
              {[
                { name: "Cameras", desc: "360° vision for lane detection, signs, pedestrians" },
                { name: "LiDAR", desc: "Laser pulses for 3D mapping and object detection" },
                { name: "Radar", desc: "Radio waves for detecting speed and distance" },
                { name: "Ultrasound", desc: "Close-range detection for parking" },
              ].map((sensor) => (
                <li key={sensor.name} className="flex gap-3">
                  <span className="text-white/40">•</span>
                  <div>
                    <span className="text-white font-medium">{sensor.name}:</span>
                    <span className="text-white/50 text-sm"> {sensor.desc}</span>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div className="p-6 bg-white/5 border border-white/10 rounded-xl">
            <h3 className="text-lg font-semibold text-white mb-4">Current Status (2026)</h3>
            <ul className="space-y-3">
              {[
                { name: "Level 2", desc: "Widely available - Tesla, GM, Ford, BMW" },
                { name: "Level 3", desc: "Limited - Mercedes in Germany, BMW in US" },
                { name: "Level 4", desc: "Robotaxis - Waymo, Cruise in select cities" },
                { name: "Level 5", desc: "Not yet achieved - still research phase" },
              ].map((item) => (
                <li key={item.name} className="flex gap-3">
                  <span className="text-cyan-400">→</span>
                  <div>
                    <span className="text-white font-medium">{item.name}:</span>
                    <span className="text-white/50 text-sm"> {item.desc}</span>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
