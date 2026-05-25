import { useState } from 'react';

export function Settings() {
  const [settings, setSettings] = useState({
    darkMode: true,
    notifications: true,
    quantumSimulation: true,
    highPerformance: false,
  });
  
  return (
    <div className="space-y-6 max-w-2xl">
      <h2 className="text-2xl font-bold">Settings</h2>
      
      <div className="quantum-card p-6 space-y-4">
        <h3 className="text-lg font-semibold">Preferences</h3>
        
        <label className="flex items-center justify-between p-4 bg-white/5 rounded-xl cursor-pointer">
          <span>Dark Mode</span>
          <input
            type="checkbox"
            checked={settings.darkMode}
            onChange={(e) => setSettings({ ...settings, darkMode: e.target.checked })}
            className="w-5 h-5"
          />
        </label>
        
        <label className="flex items-center justify-between p-4 bg-white/5 rounded-xl cursor-pointer">
          <span>Notifications</span>
          <input
            type="checkbox"
            checked={settings.notifications}
            onChange={(e) => setSettings({ ...settings, notifications: e.target.checked })}
            className="w-5 h-5"
          />
        </label>
        
        <label className="flex items-center justify-between p-4 bg-white/5 rounded-xl cursor-pointer">
          <span>Quantum Simulation Mode</span>
          <input
            type="checkbox"
            checked={settings.quantumSimulation}
            onChange={(e) => setSettings({ ...settings, quantumSimulation: e.target.checked })}
            className="w-5 h-5"
          />
        </label>
        
        <label className="flex items-center justify-between p-4 bg-white/5 rounded-xl cursor-pointer">
          <span>High Performance Mode</span>
          <input
            type="checkbox"
            checked={settings.highPerformance}
            onChange={(e) => setSettings({ ...settings, highPerformance: e.target.checked })}
            className="w-5 h-5"
          />
        </label>
      </div>
      
      <div className="quantum-card p-6">
        <h3 className="text-lg font-semibold mb-4">About</h3>
        <p className="text-white/60">Quantum Market Ready App v1.0.0</p>
        <p className="text-white/60 text-sm mt-2">© 2024 Sovereign Core Research Pty Ltd</p>
      </div>
    </div>
  );
}