export default function AboutSection() {
  return (
    <section className="relative min-h-screen w-full bg-black py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-white mb-6">
            About Our Platform
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Revolutionizing stock market prediction with cutting-edge AI technology
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-3xl font-bold text-white">
              AI-Powered Predictions
            </h3>
            <p className="text-gray-300 text-lg leading-relaxed">
              Our advanced machine learning algorithms analyze vast amounts of market data 
              to provide accurate stock predictions and insights.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed">
              Make informed investment decisions with real-time data analysis and 
              predictive analytics powered by artificial intelligence.
            </p>
          </div>
          
          <div className="bg-gradient-to-br from-blue-900/30 to-purple-900/30 backdrop-blur-sm rounded-2xl p-8 border border-blue-500/30">
            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center">
                  <span className="text-2xl">📊</span>
                </div>
                <div>
                  <h4 className="text-xl font-bold text-white">Real-Time Data</h4>
                  <p className="text-gray-300">Live market updates</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center">
                  <span className="text-2xl">🤖</span>
                </div>
                <div>
                  <h4 className="text-xl font-bold text-white">AI Analytics</h4>
                  <p className="text-gray-300">Smart predictions</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-green-500/20 rounded-lg flex items-center justify-center">
                  <span className="text-2xl">💼</span>
                </div>
                <div>
                  <h4 className="text-xl font-bold text-white">Portfolio Management</h4>
                  <p className="text-gray-300">Optimize investments</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
