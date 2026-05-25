export interface QuantumState {
  id: string;
  qubits: number;
  stateVector: Complex[];
  coherence: number;
  purity: number;
  createdAt: string;
}

export interface Circuit {
  id: string;
  name: string;
  description: string;
  gates: GateOperation[];
  qubitCount: number;
}

export interface GateOperation {
  name: string;
  target: number;
  angle?: number;
  control?: number;
}

export interface MeasurementResult {
  outcome: string;
  decimal: number;
  probability: number;
  coherence: number;
  purity: number;
}

export interface Complex {
  re: number;
  im: number;
}

export interface AuthToken {
  accessToken: string;
  refreshToken: string;
  expiresIn: number;
}

export interface User {
  id: string;
  email: string;
  name: string;
  role: 'admin' | 'user' | 'guest';
  createdAt: string;
}

export interface ApiResponse<T> {
  success: boolean;
  data?: T;
  error?: string;
  timestamp: string;
}