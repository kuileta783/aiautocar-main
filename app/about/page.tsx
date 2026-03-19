export default function About() {
  return (
    <div className="bg-black min-h-screen py-20 px-6">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold text-white mb-8">About AIAutoCar</h1>
        <div className="space-y-6 text-white/70">
          <p>
            Welcome to AIAutoCar, your premier destination for all things related to 
            artificial intelligence in the automotive industry.
          </p>
          <h2 className="text-2xl font-semibold text-white mt-10 mb-4">Our Mission</h2>
          <p>
            We are dedicated to bringing you the latest news, reviews, and insights 
            into AI-powered automotive technology.
          </p>
          <h2 className="text-2xl font-semibold text-white mt-10 mb-4">What We Cover</h2>
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
    </div>
  );
}
