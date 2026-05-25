import { useState } from 'react';

const gates = ['H', 'X', 'Y', 'Z', 'CNOT', 'RX', 'RY', 'RZ'];

export function QuantumSimulator() {
  const [circuit, setCircuit] = useState<string[]>([]);
  const [coherence, setCoherence] = useState(0.99997);
  const [purity, setPurity] = useState(0.99999);

  const addGate = (gate: string) => {
    setCircuit([...circuit, gate]);
    setCoherence(Math.max(0.98, coherence - 0.00001));
    setPurity(Math.max(0.99, purity - 0.000005));
  };

  return (
    <div style={{ padding: 24 }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 24 }}>
        <h1 style={{ fontSize: 28, fontWeight: 'bold' }}>⚛️ Quantum Simulator</h1>
        <div style={{ display: 'flex', gap: 16 }}>
          <span style={{ ...badgeStyle }}>Coherence: <span style={{ fontFamily: 'monospace', color: '#8b5cf6' }}>{coherence.toFixed(5)}</span></span>
          <span style={{ ...badgeStyle }}>Purity: <span style={{ fontFamily: 'monospace', color: '#8b5cf6' }}>{purity.toFixed(5)}</span></span>
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: 24 }}>
        <div style={cardStyle}>
          <h2 style={{ fontSize: 18, fontWeight: '600', marginBottom: 16 }}>Quantum Gates</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 12 }}>
            {gates.map((gate) => (
              <button
                key={gate}
                onClick={() => addGate(gate)}
                style={gateButtonStyle}
              >
                {gate}
              </button>
            ))}
          </div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
          <div style={cardStyle}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 16 }}>
              <h2 style={{ fontSize: 18, fontWeight: '600' }}>Circuit</h2>
              <button onClick={() => setCircuit([])} style={{ color: 'rgba(255,255,255,0.6)', background: 'none', border: 'none', cursor: 'pointer' }}>Clear</button>
            </div>
            <div style={{ minHeight: 80, padding: 16, backgroundColor: 'rgba(255,255,255,0.05)', borderRadius: 12 }}>
              {circuit.length === 0 ? (
                <p style={{ color: 'rgba(255,255,255,0.4)', textAlign: 'center' }}>Click gates to add them to the circuit</p>
              ) : (
                <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
                  {circuit.map((gate, i) => (
                    <span key={i} style={{ padding: '8px 16px', borderRadius: 8, backgroundColor: 'rgba(139,92,246,0.2)', border: '1px solid rgba(139,92,246,0.3)', fontFamily: 'monospace' }}>{gate}</span>
                  ))}
                </div>
              )}
            </div>
            <button style={{ ...runButtonStyle, marginTop: 16 }}>▶ Run Simulation</button>
          </div>

          <div style={cardStyle}>
            <h2 style={{ fontSize: 18, fontWeight: '600', marginBottom: 16 }}>Qubit Visualization</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 12 }}>
              {[1, 2, 3, 4].map((i) => (
                <div key={i} style={{ aspectRatio: '1', borderRadius: 12, background: 'linear-gradient(135deg, rgba(139,92,246,0.2), rgba(99,102,241,0.2))', border: '1px solid rgba(139,92,246,0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <span style={{ fontFamily: 'monospace' }}>|0⟩</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const cardStyle = { backgroundColor: 'rgba(255,255,255,0.05)', borderRadius: 16, padding: 20, border: '1px solid rgba(255,255,255,0.1)' };
const badgeStyle = { padding: '8px 16px', borderRadius: 12, backgroundColor: 'rgba(255,255,255,0.05)' };
const gateButtonStyle = { padding: 12, borderRadius: 12, backgroundColor: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', color: 'white', cursor: 'pointer', fontFamily: 'monospace', fontWeight: 'bold' };
const runButtonStyle = { padding: 12, borderRadius: 12, background: 'linear-gradient(135deg, #8b5cf6, #6366f1)', color: 'white', fontWeight: '600', border: 'none', cursor: 'pointer' };