export function Dashboard() {
  return (
    <div style={{ padding: 24 }}>
      <div style={{ marginBottom: 24 }}>
        <h1 style={{ fontSize: 32, fontWeight: 'bold' }}>⚛️ Quantum Market Ready</h1>
        <p style={{ color: 'rgba(255,255,255,0.6)' }}>Sovereign Core Research</p>
      </div>
      
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 16, marginBottom: 24 }}>
        <div style={cardStyle}>
          <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: 12 }}>Portfolio Value</p>
          <p style={{ fontSize: 24, fontWeight: 'bold' }}>$124,532.89</p>
          <p style={{ color: '#22c55e', fontSize: 14 }}>+2.34%</p>
        </div>
        <div style={cardStyle}>
          <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: 12 }}>Today's P&L</p>
          <p style={{ fontSize: 24, fontWeight: 'bold' }}>$2,847.32</p>
          <p style={{ color: '#22c55e', fontSize: 14 }}>+1.82%</p>
        </div>
        <div style={cardStyle}>
          <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: 12 }}>Quantum Coherence</p>
          <p style={{ fontSize: 24, fontWeight: 'bold', color: '#8b5cf6' }}>0.99997</p>
          <p style={{ color: '#22c55e', fontSize: 14 }}>+0.00002</p>
        </div>
        <div style={cardStyle}>
          <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: 12 }}>Active Positions</p>
          <p style={{ fontSize: 24, fontWeight: 'bold' }}>12</p>
          <p style={{ color: '#ef4444', fontSize: 14 }}>-3</p>
        </div>
      </div>

      <div style={{ ...cardStyle, padding: 24 }}>
        <h2 style={{ fontSize: 18, fontWeight: '600', marginBottom: 16 }}>Quantum Engine Status</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 16 }}>
          {['Core Engine', 'Gate Ops', 'State Vectors', 'Entanglement'].map((item) => (
            <div key={item} style={{ textAlign: 'center' }}>
              <div style={{ width: 48, height: 48, borderRadius: '50%', backgroundColor: 'rgba(34,197,94,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 8px' }}>
                <span style={{ color: '#22c55e' }}>✓</span>
              </div>
              <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.6)' }}>{item}</p>
              <p style={{ fontFamily: 'monospace', color: '#8b5cf6' }}>0.9999+</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

const cardStyle = {
  backgroundColor: 'rgba(255,255,255,0.05)',
  borderRadius: 16,
  padding: 16,
  border: '1px solid rgba(255,255,255,0.1)',
};