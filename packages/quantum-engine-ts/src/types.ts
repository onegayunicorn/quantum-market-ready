export interface Complex {
  re: number;
  im: number;
}

export interface QuantumState {
  qubits: number;
  stateVector: Complex[];
  coherence: number;
  purity: number;
}

export interface MeasurementResult {
  outcome: string;
  decimal: number;
  probability: number;
  coherence: number;
  purity: number;
}

export interface EngineConfig {
  qubits: number;
  coherenceThreshold?: number;
  simulationMode?: 'pure' | 'noisy' | 'hybrid';
}