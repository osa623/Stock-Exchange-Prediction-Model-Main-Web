'use client';

import { useState } from 'react';

export default function DashboardPage() {
  const [selectedStock, setSelectedStock] = useState('AAPL');

  const mockStocks = [
    { symbol: 'AAPL', name: 'Apple Inc.', price: 175.43, change: 2.5 },
    { symbol: 'GOOGL', name: 'Alphabet Inc.', price: 140.82, change: -1.2 },
    { symbol: 'MSFT', name: 'Microsoft Corp.', price: 378.91, change: 1.8 },
    { symbol: 'AMZN', name: 'Amazon.com Inc.', price: 155.32, change: 3.1 },
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Dashboard</h1>
          <p className="text-gray-600">Monitor and analyze stock market predictions</p>
        </div>

        {/* Stats Overview */}
        <div className="grid md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white p-6 rounded-lg shadow">
            <div className="text-sm text-gray-600 mb-1">Total Portfolio</div>
            <div className="text-2xl font-bold text-gray-900">$124,532</div>
            <div className="text-sm text-green-600">+5.2%</div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow">
            <div className="text-sm text-gray-600 mb-1">Todays Gain</div>
            <div className="text-2xl font-bold text-gray-900">$2,431</div>
            <div className="text-sm text-green-600">+1.95%</div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow">
            <div className="text-sm text-gray-600 mb-1">Active Stocks</div>
            <div className="text-2xl font-bold text-gray-900">12</div>
            <div className="text-sm text-gray-500">Tracked</div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow">
            <div className="text-sm text-gray-600 mb-1">Predictions</div>
            <div className="text-2xl font-bold text-gray-900">87%</div>
            <div className="text-sm text-green-600">Accuracy</div>
          </div>
        </div>

        {/* Stock List */}
        <div className="bg-white rounded-lg shadow overflow-hidden">
          <div className="px-6 py-4 border-b border-gray-200">
            <h2 className="text-xl font-semibold text-gray-900">Stock Watchlist</h2>
          </div>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Symbol
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Name
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Price
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Change (%)
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {mockStocks.map((stock) => (
                  <tr key={stock.symbol} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      {stock.symbol}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                      {stock.name}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      ${stock.price}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm">
                      <span className={stock.change >= 0 ? 'text-green-600' : 'text-red-600'}>
                        {stock.change >= 0 ? '+' : ''}{stock.change}%
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm">
                      <button
                        onClick={() => setSelectedStock(stock.symbol)}
                        className="text-blue-600 hover:text-blue-800 font-medium"
                      >
                        View Details
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Prediction Section */}
        <div className="mt-8 bg-white rounded-lg shadow p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">
            AI Prediction for {selectedStock}
          </h2>
          <div className="bg-blue-50 border-l-4 border-blue-600 p-4">
            <p className="text-sm text-gray-700">
              Based on current market trends and historical data, our AI model predicts a{' '}
              <span className="font-semibold text-green-600">bullish trend</span> for{' '}
              {selectedStock} in the next 5 trading days with 87% confidence.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
