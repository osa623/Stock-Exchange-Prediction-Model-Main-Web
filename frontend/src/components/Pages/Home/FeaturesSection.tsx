export default function FeaturesSection() {
  const features = [
    {
      icon: "🎯",
      title: "Accurate Predictions",
      description: "AI-driven forecasts with high accuracy rates",
      color: "from-blue-500/20 to-blue-600/20",
      border: "border-blue-500/30"
    },
    {
      icon: "⚡",
      title: "Real-Time Updates",
      description: "Get instant market changes and alerts",
      color: "from-yellow-500/20 to-yellow-600/20",
      border: "border-yellow-500/30"
    },
    {
      icon: "📈",
      title: "Market Analysis",
      description: "Comprehensive technical and fundamental analysis",
      color: "from-green-500/20 to-green-600/20",
      border: "border-green-500/30"
    },
    {
      icon: "🔒",
      title: "Secure Platform",
      description: "Bank-level security for your data",
      color: "from-purple-500/20 to-purple-600/20",
      border: "border-purple-500/30"
    },
    {
      icon: "📱",
      title: "Mobile Access",
      description: "Trade anywhere with responsive design",
      color: "from-pink-500/20 to-pink-600/20",
      border: "border-pink-500/30"
    },
    {
      icon: "💡",
      title: "Smart Insights",
      description: "Personalized recommendations for your portfolio",
      color: "from-cyan-500/20 to-cyan-600/20",
      border: "border-cyan-500/30"
    }
  ];

  return (
    <section className="flex min-h-screen w-full bg-gradient-to-b from-black to-gray-900 py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-white mb-6">
            Powerful Features
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Everything you need to make smart investment decisions
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`bg-gradient-to-br ${feature.color} backdrop-blur-sm rounded-2xl p-8 border ${feature.border} hover:scale-105 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/20`}
            >
              <div className="text-6xl mb-4">{feature.icon}</div>
              <h3 className="text-2xl font-bold text-white mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-300 text-lg">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
