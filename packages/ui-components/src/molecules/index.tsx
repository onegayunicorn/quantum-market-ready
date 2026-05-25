import React from 'react';
import { Button } from '../atoms';
import { Card } from '../atoms';

interface MetricCardProps {
  title: string;
  value: string;
  change?: string;
  positive?: boolean;
}

export const MetricCard: React.FC<MetricCardProps> = ({ title, value, change, positive = true }) => (
  <Card className="p-6">
    <p className="text-white/60 text-sm mb-1">{title}</p>
    <p className="text-2xl font-bold mb-1">{value}</p>
    {change && <p className={`text-sm ${positive ? 'text-green-400' : 'text-red-400'}`}>{change}</p>}
  </Card>
);

interface StatusCardProps {
  label: string;
  value: string;
  status: 'operational' | 'degraded' | 'down';
}

export const StatusCard: React.FC<StatusCardProps> = ({ label, value, status }) => {
  const statusColors = {
    operational: 'bg-green-500/20 text-green-400',
    degraded: 'bg-yellow-500/20 text-yellow-400',
    down: 'bg-red-500/20 text-red-400',
  };

  return (
    <Card className="p-6 text-center">
      <div className={`w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3 ${statusColors[status]}`}>
        <span>{status === 'operational' ? '✓' : status === 'degraded' ? '⚠' : '✕'}</span>
      </div>
      <p className="text-sm text-white/60 mb-1">{label}</p>
      <p className="font-mono text-lg">{value}</p>
    </Card>
  );
};

interface GateButtonProps {
  name: string;
  symbol: string;
  onClick: () => void;
  disabled?: boolean;
}

export const GateButton: React.FC<GateButtonProps> = ({ name, symbol, onClick, disabled }) => (
  <Button variant="secondary" onClick={onClick} disabled={disabled} className="flex-col p-4 h-auto">
    <span className="font-mono font-bold text-lg">{symbol}</span>
    <span className="text-xs mt-1">{name}</span>
  </Button>
);