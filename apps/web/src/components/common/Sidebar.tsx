import { Link, useLocation } from 'react-router-dom';
import { clsx } from 'clsx';

const navItems = [
  { path: '/', label: 'Dashboard', icon: '📊' },
  { path: '/simulator', label: 'Quantum Sim', icon: '⚛️' },
  { path: '/analysis', label: 'Analysis', icon: '📈' },
  { path: '/settings', label: 'Settings', icon: '⚙️' }
];

export function Sidebar() {
  const location = useLocation();
  
  return (
    <aside className="w-64 bg-white/5 backdrop-blur-xl border-r border-white/10">
      <div className="p-6">
        <div className="flex items-center gap-3 mb-8">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary-500 to-quantum-accent flex items-center justify-center">
            <span className="text-xl">⚛️</span>
          </div>
          <div>
            <h1 className="font-bold text-lg">Quantum Market</h1>
            <p className="text-xs text-white/60">Sovereign Core</p>
          </div>
        </div>
        
        <nav className="space-y-2">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={clsx(
                'flex items-center gap-3 px-4 py-3 rounded-xl transition-all',
                location.pathname === item.path
                  ? 'bg-primary-500/20 text-primary-400 border border-primary-500/30'
                  : 'text-white/70 hover:bg-white/5 hover:text-white'
              )}
            >
              <span>{item.icon}</span>
              <span>{item.label}</span>
            </Link>
          ))}
        </nav>
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 p-6 border-t border-white/10">
        <div className="text-xs text-white/40">
          <p>Coherence: <span className="text-primary-400 font-mono">0.99997</span></p>
          <p>Purity: <span className="text-primary-400 font-mono">0.99999</span></p>
        </div>
      </div>
    </aside>
  );
}