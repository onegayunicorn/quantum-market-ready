import React from 'react';
import { Card, Badge } from '../atoms';
import { MetricCard, StatusCard } from '../molecules';

interface QuantumDashboardProps {
  coherence: number;
  purity: number;
  qubits: number;
  operations: number;
}

export const QuantumDashboard: React.FC<QuantumDashboardProps> = ({
  coherence,
  purity,
  qubits,
  operations,
}) => (
  <div className="space-y-6">
    <div className="flex justify-between items-center">
      <h2 className="text-2xl font-bold">Quantum Engine Status</h2>
      <Badge variant="success">Operational</Badge>
    </div>
    
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      <StatusCard label="Core Engine" value={coherence.toFixed(5)} status="operational" />
      <StatusCard label="Gate Operations" value={purity.toFixed(5)} status="operational" />
      <MetricCard title="Qubits Active" value={qubits.toString()} />
      <MetricCard title="Operations" value={operations.toString()} />
    </div>
  </div>
);

export { Card, Badge, Button, ProgressBar } from './atoms';
export { MetricCard, StatusCard, GateButton } from './molecules';