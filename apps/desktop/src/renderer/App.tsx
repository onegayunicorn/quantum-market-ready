import { Routes, Route, HashRouter } from 'react-router-dom';
import { Dashboard } from '../pages/Dashboard';
import { QuantumSimulator } from '../pages/QuantumSimulator';

export default function App() {
  return (
    <HashRouter>
      <div style={{ backgroundColor: '#0f0a1e', minHeight: '100vh', color: 'white' }}>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/simulator" element={<QuantumSimulator />} />
        </Routes>
      </div>
    </HashRouter>
  );
}