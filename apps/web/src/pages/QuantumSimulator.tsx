import { useState } from 'react';
import { QuantumGate } from '../components/quantum/QuantumGate';

const availableGates = [
  { id: 'H', name: 'Hadamard', symbol: 'H', description: 'Creates superposition' },
  { id: 'X', name: 'Pauli-X', symbol: 'X', description: 'Bit flip' },
  { id: 'Y', name: 'Pauli-Y', symbol: 'Y', description: 'Y rotation' },
  { id: 'Z', name: 'Pauli-Z', symbol: 'Z', description: 'Phase flip' },
  { id: 'CNOT', name: 'CNOT', symbol: 'CX', description: 'Controlled-NOT' },
  { id: 'RX', name: 'RX', symbol: 'Rx', description: 'X rotation' },
  { id: 'RY', name: 'RY', symbol: 'Ry', description: 'Y rotation' },
  { id: 'RZ', name: 'RZ', symbol: 'Rz', description: 'Z rotation' },
];

export function QuantumSimulator() {
  const [qubits, setQubits] = useState(4);
  const [circuit, setCircuit] = useState<string[]>([]);
  const [coherence, setCoherence] = useState(0.99997);
  const [purity, setPurity] = useState(0.99999);
  
  const addGate = (gateId: string) => {
    setCircuit([...circuit, gateId]);
    // Simulate coherence decay
    setCoherence(Math.max(0.98, coherence - 0.00001));
    setPurity(Math.max(0.99, purity - 0.000005));
  };
  
  const runSimulation = async () => {
    // Simulate quantum computation
    console.log('Running simulation with gates:', circuit);
    alert('Quantum simulation complete! Coherence: ' + coherence.toFixed(5));
  };
  
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold">Quantum Simulator</h2>
        <div className="flex items-center gap-4">
          <span className="px-4 py-2 rounded-xl bg-white/5">
            Coherence: <span className="text-primary-400 font-mono">{coherence.toFixed(5)}</span>
          </span>
          <span className="px-4 py-2 rounded-xl bg-white/5">
            Purity: <span className="text-primary-400 font-mono">{purity.toFixed(5)}</span>
          </span>
        </div>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="quantum-card p-6">
          <h3 className="text-lg font-semibold mb-4">Quantum Gates</h3>
          <div className="grid grid-cols-2 gap-3">
            {availableGates.map((gate) => (
              <QuantumGate key={gate.id} gate={gate} onClick={() => addGate(gate.id)} />
            ))}
          </div>
        </div>
        
        <div className="lg:col-span-2 space-y-4">
          <div className="quantum-card p-6">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-semibold">Quantum Circuit</h3>
              <button onClick={() => setCircuit([])} className="text-sm text-white/60 hover:text-white">
                Clear
              </button>
            </div>
            
            <div className="flex gap-2 flex-wrap min-h-[60px] p-4 bg-white/5 rounded-xl">
              {circuit.length === 0 ? (
                <p className="text-white/40">Click gates to add them to the circuit</p>
              ) : (
                circuit.map((gate, index) => (
                  <span key={index} className="px-3 py-2 rounded-lg bg-primary-500/20 border border-primary-500/30 font-mono">
                    {gate}
                  </span>
                ))
              )}
            </div>
            
            <div className="mt-4 flex gap-4">
              <div>
                <label className="text-sm text-white/60 mb-2 block">Qubits</label>
                <input
                  type="number"
                  min="1"
                  max="20"
                  value={qubits}
                  onChange={(e) => setQubits(parseInt(e.target.value))}
                  className="w-24 px-4 py-2 rounded-xl bg-white/5 border border-white/10"
                />
              </div>
              
              <button onClick={runSimulation} className="quantum-button mt-auto">
                ▶ Run Simulation
              </button>
            </div>
          </div>
          
          <div className="quantum-card p-6">
            <h3 className="text-lg font-semibold mb-4">Qubit Visualization</h3>
            <div className="grid grid-cols-4 gap-4">
              {Array.from({ length: qubits }).map((_, i) => (
                <div key={i} className="aspect-square rounded-xl bg-gradient-to-br from-primary-500/20 to-quantum-accent/20 border border-primary-500/30 flex items-center justify-center">
                  <span className="font-mono text-sm">|0⟩</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}