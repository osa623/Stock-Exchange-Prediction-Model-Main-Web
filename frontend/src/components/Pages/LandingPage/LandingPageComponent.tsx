export default function LandingPageComponent() {
  return (
    <div className="bg-white">
      {/* About Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            About Our Platform
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Revolutionizing stock market predictions with cutting-edge artificial intelligence and machine learning technology.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Mission</h2>
            <p className="text-gray-600 mb-4">
              We aim to democratize access to sophisticated stock market analysis tools, making professional-grade predictions available to all investors, regardless of their experience level.
            </p>
            <p className="text-gray-600">
              By leveraging advanced machine learning algorithms and real-time market data, we provide accurate predictions that help you make informed investment decisions.
            </p>
          </div>
          <div className="bg-gradient-to-br from-blue-100 to-blue-50 p-8 rounded-lg">
            <div className="space-y-4">
              <div className="flex items-center">
                <div className="bg-blue-600 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold mr-4">
                  1
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Data Collection</h3>
                  <p className="text-sm text-gray-600">Real-time market data aggregation</p>
                </div>
              </div>
              <div className="flex items-center">
                <div className="bg-blue-600 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold mr-4">
                  2
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">AI Analysis</h3>
                  <p className="text-sm text-gray-600">Advanced machine learning processing</p>
                </div>
              </div>
              <div className="flex items-center">
                <div className="bg-blue-600 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold mr-4">
                  3
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Predictions</h3>
                  <p className="text-sm text-gray-600">Accurate trend forecasts</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technology Section */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Our Technology
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Machine Learning
              </h3>
              <p className="text-gray-600">
                State-of-the-art neural networks trained on decades of historical market data to identify patterns and trends.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Real-time Processing
              </h3>
              <p className="text-gray-600">
                Lightning-fast data processing ensures you always have the most up-to-date predictions and insights.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Secure & Reliable
              </h3>
              <p className="text-gray-600">
                Enterprise-grade security and 99.9% uptime guarantee to keep your data safe and accessible.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-4 gap-8 text-center">
          <div>
            <div className="text-4xl font-bold text-blue-600 mb-2">87%</div>
            <div className="text-gray-600">Prediction Accuracy</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-blue-600 mb-2">10K+</div>
            <div className="text-gray-600">Active Users</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-blue-600 mb-2">500+</div>
            <div className="text-gray-600">Stocks Tracked</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-blue-600 mb-2">24/7</div>
            <div className="text-gray-600">Market Monitoring</div>
          </div>
        </div>
      </section>
    </div>
  );
}
