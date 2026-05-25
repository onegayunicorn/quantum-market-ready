export function MarketAnalysis() {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold">Market Analysis</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="quantum-card p-6">
          <h3 className="text-lg font-semibold mb-4">Top Movers</h3>
          <div className="space-y-3">
            <div className="flex justify-between items-center p-3 bg-white/5 rounded-xl">
              <span>BTC/USD</span>
              <span className="text-green-400">+3.42%</span>
            </div>
            <div className="flex justify-between items-center p-3 bg-white/5 rounded-xl">
              <span>ETH/USD</span>
              <span className="text-green-400">+2.18%</span>
            </div>
            <div className="flex justify-between items-center p-3 bg-white/5 rounded-xl">
              <span>SPY/USD</span>
              <span className="text-red-400">-0.34%</span>
            </div>
          </div>
        </div>
        
        <div className="quantum-card p-6">
          <h3 className="text-lg font-semibold mb-4">Quantum Predictions</h3>
          <div className="text-center py-8">
            <div className="w-24 h-24 rounded-full bg-gradient-to-br from-primary-500 to-quantum-accent mx-auto mb-4 flex items-center justify-center">
              <span className="text-4xl">⚛️</span>
            </div>
            <p className="text-white/60">Quantum analysis engine processing...</p>
          </div>
        </div>
      </div>
    </div>
  );
}