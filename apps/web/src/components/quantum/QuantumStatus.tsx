export function QuantumStatus() {
  return (
    <div className="quantum-card p-6">
      <h3 className="text-lg font-semibold mb-4">Quantum Engine Status</h3>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="p-4 bg-white/5 rounded-xl text-center">
          <div className="w-12 h-12 rounded-full bg-green-500/20 mx-auto mb-2 flex items-center justify-center">
            <span className="text-green-400">✓</span>
          </div>
          <p className="text-sm text-white/60">Core Engine</p>
          <p className="font-mono text-green-400">0.99997</p>
        </div>
        
        <div className="p-4 bg-white/5 rounded-xl text-center">
          <div className="w-12 h-12 rounded-full bg-green-500/20 mx-auto mb-2 flex items-center justify-center">
            <span className="text-green-400">✓</span>
          </div>
          <p className="text-sm text-white/60">Gate Ops</p>
          <p className="font-mono text-green-400">0.99995</p>
        </div>
        
        <div className="p-4 bg-white/5 rounded-xl text-center">
          <div className="w-12 h-12 rounded-full bg-green-500/20 mx-auto mb-2 flex items-center justify-center">
            <span className="text-green-400">✓</span>
          </div>
          <p className="text-sm text-white/60">State Vectors</p>
          <p className="font-mono text-green-400">0.99992</p>
        </div>
        
        <div className="p-4 bg-white/5 rounded-xl text-center">
          <div className="w-12 h-12 rounded-full bg-green-500/20 mx-auto mb-2 flex items-center justify-center">
            <span className="text-green-400">✓</span>
          </div>
          <p className="text-sm text-white/60">Entanglement</p>
          <p className="font-mono text-green-400">0.99990</p>
        </div>
      </div>
    </div>
  );
}