export interface Complex {
  re: number;
  im: number;
}

export interface QuantumState {
  id: string;
  qubits: number;
  stateVector: Complex[];
  coherence: number;
  purity: number;
  timestamp: string;
}

export interface GateOperation {
  name: string;
  symbol: string;
  target: number;
  control?: number;
  angle?: number;
}

export interface QuantumCircuit {
  id: string;
  name: string;
  description: string;
  gates: GateOperation[];
  qubitCount: number;
  createdAt: string;
}

export interface MeasurementResult {
  outcome: string;
  decimal: number;
  probability: number;
  coherence: number;
  purity: number;
  timestamp: string;
}

export interface EntanglementMetrics {
  entropy: number;
  concurrence: number;
  tangle: number;
}

export interface QuantumEngineStatus {
  coherence: number;
  purity: number;
  qubits: number;
  operations: number;
  uptime: number;
}

export type SimulationMode = 'pure' | 'noisy' | 'hybrid';
export type GateType = 'single' | 'two-qubit' | 'three-qubit';