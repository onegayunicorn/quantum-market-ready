import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { QuantumStatus } from '../components/quantum/QuantumStatus';

const marketData = [
  { time: '09:00', btc: 45230, eth: 2450, sp500: 4780 },
  { time: '10:00', btc: 45350, eth: 2470, sp500: 4792 },
  { time: '11:00', btc: 45100, eth: 2440, sp500: 4785 },
  { time: '12:00', btc: 45500, eth: 2480, sp500: 4800 },
  { time: '13:00', btc: 45400, eth: 2475, sp500: 4798 },
  { time: '14:00', btc: 45600, eth: 2490, sp500: 4810 },
];

export function Dashboard() {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <MetricCard title="Portfolio Value" value="$124,532.89" change="+2.34%" positive />
        <MetricCard title="Today's P&L" value="$2,847.32" change="+1.82%" positive />
        <MetricCard title="Quantum Coherence" value="0.99997" change="+0.00002" positive />
        <MetricCard title="Active Positions" value="12" change="-3" positive={false} />
      </div>
      
      <div className="quantum-card p-6">
        <h3 className="text-lg font-semibold mb-4">Market Overview</h3>
        <div className="h-80">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={marketData}>
              <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
              <XAxis dataKey="time" stroke="rgba(255,255,255,0.5)" />
              <YAxis stroke="rgba(255,255,255,0.5)" />
              <Tooltip />
              <Line type="monotone" dataKey="btc" stroke="#f59e0b" strokeWidth={2} dot={false} />
              <Line type="monotone" dataKey="eth" stroke="#6366f1" strokeWidth={2} dot={false} />
              <Line type="monotone" dataKey="sp500" stroke="#10b981" strokeWidth={2} dot={false} />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
      
      <QuantumStatus />
    </div>
  );
}

function MetricCard({ title, value, change, positive }: { title: string; value: string; change: string; positive: boolean }) {
  return (
    <div className="quantum-card p-6">
      <p className="text-white/60 text-sm mb-1">{title}</p>
      <p className="text-2xl font-bold mb-1">{value}</p>
      <p className={`text-sm ${positive ? 'text-green-400' : 'text-red-400'}`}>
        {change}
      </p>
    </div>
  );
}