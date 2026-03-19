const posts = [
  {
    slug: "rise-of-ai-in-automotive",
    title: "The Rise of AI in Automotive Industry",
    date: "March 15, 2026",
    excerpt: "How artificial intelligence is transforming the car industry from manufacturing to autonomous driving.",
    content: `Artificial intelligence is revolutionizing every aspect of the automotive industry. From the factory floor to the road, AI technologies are making cars smarter, safer, and more efficient.

## AI in Manufacturing

Car manufacturers are using AI-powered robots and computer vision systems to improve quality control and production efficiency. Machine learning algorithms predict equipment failures before they happen, reducing downtime.

## AI in Vehicles

Modern cars contain dozens of AI-powered systems:
- **Driver Assistance**: Lane keeping, adaptive cruise control, automatic emergency braking
- **Infotainment**: Voice assistants that understand natural language
- **Navigation**: AI-powered route optimization based on real-time traffic data
- **Maintenance**: Predictive systems that alert drivers before breakdowns occur

## The Road to Autonomy

The automotive industry is progressing through the levels of autonomous driving. Level 2 systems are now common, with Level 3 and Level 4 systems beginning to appear in premium vehicles and robotaxi fleets.

## What's Next

By 2030, experts predict that Level 4 autonomous vehicles will be widely available for consumer purchase, transforming how we think about transportation.`
  },
  {
    slug: "level-4-autonomy-explained",
    title: "Level 4 Autonomy: What It Means for Drivers",
    date: "March 10, 2026",
    excerpt: "Understanding the difference between Level 3 and Level 4 autonomous systems and their implications.",
    content: `Level 4 autonomous driving represents a significant milestone in vehicle technology. But what exactly does it mean?

## What is Level 4?

Level 4 (High Automation) means the vehicle can drive itself completely in specific conditions without human intervention. Unlike Level 3, the system handles all driving tasks in its operational design domain (ODD).

## Key Characteristics

- **No Human Required**: Within the ODD, no steering wheel or pedals needed
- **Geofenced**: Only works in specific mapped areas
- **Handles Failures**: System can safely stop if it encounters unexpected situations
- **All Driving Tasks**: Handles steering, acceleration, braking, and environment monitoring

## Current Level 4 Systems

Waymo's robotaxi service in Phoenix and San Francisco represents the most advanced Level 4 implementation. These vehicles operate without safety drivers in designated service areas.

## Implications for Drivers

Level 4 autonomy will fundamentally change how we use vehicles:
- Commuters can work during their commute
- Elderly and disabled individuals gain independence
- Parking becomes automated
- Delivery and logistics transform

The transition to Level 4 is not just about technology—it's about reimagining mobility entirely.`
  },
  {
    slug: "voice-assistants-modern-cars",
    title: "Voice Assistants in Modern Cars",
    date: "March 5, 2026",
    excerpt: "From Alexa to Google Assistant, how voice technology is evolving in vehicles.",
    content: `Voice assistants have become a standard feature in modern vehicles, transforming how we interact with our cars.

## Evolution of In-Car Voice Assistants

The journey from basic voice commands to intelligent assistants:

**2010s**: Basic voice commands for phone calls and music
**2020**: Alexa Auto and Google Assistant integration
**2023**: Built-in assistants with natural language understanding
**2026**: AI-powered assistants with predictive capabilities

## Modern Capabilities

Today's voice assistants can:
- Understand natural speech patterns
- Control climate, entertainment, and navigation
- Answer questions about vehicle status
- Integrate with smart home devices
- Learn driver preferences over time

## Leading Systems

### Amazon Alexa Auto
Integrated with Alexa ecosystem, allowing home-to-car and car-to-home control.

### Google Assistant
Deep Android integration with real-time translation and navigation.

### Apple's Siri
Seamless iPhone integration for users in the Apple ecosystem.

### OEM Assistants
Mercedes MBUX, BMW iDrive, and Tesla's voice system offer deeper vehicle integration.

## The Future

Voice assistants are evolving toward predictive AI that anticipates needs before you ask. Imagine your car automatically adjusting settings based on your calendar or starting your commute when it detects you're about to leave.`
  },
];

export default function Blog() {
  return (
    <div className="bg-black min-h-screen py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-white mb-4">Blog</h1>
        <p className="text-white/60 mb-12">
          Latest news and insights on AI automotive technology.
        </p>
        
        <div className="space-y-6">
          {posts.map((post) => (
            <article 
              key={post.slug} 
              className="p-8 bg-white/5 border border-white/10 rounded-xl hover:border-cyan-500/30 transition"
            >
              <p className="text-sm text-white/40 mb-3">{post.date}</p>
              <h2 className="text-2xl font-semibold text-white mb-3">{post.title}</h2>
              <p className="text-white/60 mb-4">{post.excerpt}</p>
              <div className="text-cyan-400 text-sm font-medium">
                Read more →
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
