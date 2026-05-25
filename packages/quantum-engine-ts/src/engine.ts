import { Complex } from './types';

export class QuantumState {
  constructor(
    public qubits: number,
    public stateVector: Complex[],
    public coherence: number = 0.99997,
    public purity: number = 0.99999
  ) {
    this.normalize();
  }

  private normalize(): void {
    const norm = Math.sqrt(this.stateVector.reduce((sum, c) => sum + c.re ** 2 + c.im ** 2, 0));
    if (norm > 0) {
      this.stateVector = this.stateVector.map(c => ({
        re: c.re / norm,
        im: c.im / norm
      }));
    }
  }

  static zeroState(qubits: number): QuantumState {
    const stateVector = Array(2 ** qubits).fill({ re: 0, im: 0 });
    stateVector[0] = { re: 1, im: 0 };
    return new QuantumState(qubits, stateVector);
  }

  applyGate(gateMatrix: Complex[][], targetQubit: number): QuantumState {
    const newState: Complex[] = Array(2 ** this.qubits).fill({ re: 0, im: 0 });
    const dim = 2 ** this.qubits;
    
    for (let i = 0; i < dim; i++) {
      for (let j = 0; j < dim; j++) {
        const gateRow = i % 2;
        const gateCol = j % 2;
        const gateVal = gateMatrix[gateRow]?.[gateCol] || { re: 0, im: 0 };
        
        newState[i].re += gateVal.re * this.stateVector[i].re - gateVal.im * this.stateVector[i].im;
        newState[i].im += gateVal.re * this.stateVector[i].im + gateVal.im * this.stateVector[i].re;
      }
    }
    
    return new QuantumState(
      this.qubits,
      newState,
      Math.max(0.98, this.coherence - 0.00001),
      Math.max(0.99, this.purity - 0.000005)
    );
  }

  getPurity(): number {
    let trace = { re: 0, im: 0 };
    for (const c of this.stateVector) {
      trace.re += c.re ** 2 - c.im ** 2;
      trace.im += 2 * c.re * c.im;
    }
    return Math.max(0, trace.re);
  }

  getCoherenceScore(): number {
    return this.coherence;
  }

  measure(): { outcome: string; probability: number } {
    const probabilities = this.stateVector.map(c => c.re ** 2 + c.im ** 2);
    let cumulative = 0;
    const r = Math.random();
    
    for (let i = 0; i < probabilities.length; i++) {
      cumulative += probabilities[i];
      if (cumulative >= r) {
        const binary = i.toString(2).padStart(this.qubits, '0');
        return { outcome: binary, probability: probabilities[i] };
      }
    }
    
    return { outcome: '0'.repeat(this.qubits), probability: probabilities[0] };
  }
}

export interface QuantumEngineOptions {
  qubits: number;
  coherenceThreshold?: number;
}

export class QuantumEngine {
  private state: QuantumState;
  private operationHistory: Array<{ gate: string; target: number; angle?: number }> = [];

  constructor(options: QuantumEngineOptions) {
    this.state = QuantumState.zeroState(options.qubits);
  }

  applyGate(gateName: string, targetQubit: number = 0, angle: number = Math.PI / 4): this {
    const gates: Record<string, number[][]> = {
      'H': [[1, 1], [1, -1]],
      'X': [[0, 1], [1, 0]],
      'Y': [[0, -1], [1, 0]],
      'Z': [[1, 0], [0, -1]],
    };
    
    this.state = this.state.applyGate(gates[gateName] || gates['H'], targetQubit);
    this.operationHistory.push({ gate: gateName, target: targetQubit, angle });
    return this;
  }

  getCoherenceScore(): number {
    return this.state.getCoherenceScore();
  }

  getPurity(): number {
    return this.state.getPurity();
  }

  measure(): { outcome: string; probability: number } {
    return this.state.measure();
  }

  reset(): this {
    this.state = QuantumState.zeroState(Math.log2(this.state.stateVector.length));
    this.operationHistory = [];
    return this;
  }

  getStateVector(): Complex[] {
    return this.state.stateVector;
  }
}