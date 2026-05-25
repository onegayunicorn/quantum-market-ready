import { useAuthStore } from '../../store/auth';

export function Header() {
  const { user, logout } = useAuthStore();
  
  return (
    <header className="h-16 bg-white/5 backdrop-blur-xl border-b border-white/10 px-6 flex items-center justify-between">
      <div>
        <h2 className="text-xl font-semibold">Welcome back, {user?.name}</h2>
      </div>
      
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-quantum-glow/10 border border-quantum-glow/30">
          <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
          <span className="text-sm text-white/80">System Online</span>
        </div>
        
        <button
          onClick={logout}
          className="px-4 py-2 rounded-xl bg-white/5 hover:bg-white/10 transition-colors"
        >
          Logout
        </button>
      </div>
    </header>
  );
}