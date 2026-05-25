import { Routes, Route } from 'react-router-dom';
import { Layout } from './components/common/Layout';
import { Dashboard } from './pages/Dashboard';
import { QuantumSimulator } from './pages/QuantumSimulator';
import { MarketAnalysis } from './pages/MarketAnalysis';
import { Settings } from './pages/Settings';
import { Login } from './pages/Login';
import { ProtectedRoute } from './components/auth/ProtectedRoute';
import { useAuthStore } from './store/auth';

function App() {
  const isAuthenticated = useAuthStore((state) => state.isAuthenticated);
  
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route
        path="/"
        element={
          <ProtectedRoute>
            <Layout />
          </ProtectedRoute>
        }
      >
        <Route index element={<Dashboard />} />
        <Route path="simulator" element={<QuantumSimulator />} />
        <Route path="analysis" element={<MarketAnalysis />} />
        <Route path="settings" element={<Settings />} />
      </Route>
    </Routes>
  );
}

export default App;