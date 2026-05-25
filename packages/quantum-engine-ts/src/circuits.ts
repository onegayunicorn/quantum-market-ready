import { QuantumEngine } from './engine';
import { Complex } from './types';

export interface QuantumCircuit {
  name: string;
  gates: Array<{ name: string; target: number; angle?: number }>;
  description?: string;
}

export class QuantumCircuitBuilder {
  private gates: Array<{ name: string; target: number; angle?: number }> = [];
  private engine: QuantumEngine | null = null;

  addGate(name: string, target: number = 0, angle?: number): this {
    this.gates.push({ name, target, angle });
    return this;
  }

  hadamard(target: number = 0): this {
    return this.addGate('H', target);
  }

  pauliX(target: number = 0): this {
    return this.addGate('X', target);
  }

  pauliY(target: number = 0): this {
    return this.addGate('Y', target);
  }

  pauliZ(target: number = 0): this {
    return this.addGate('Z', target);
  }

  cnot(control: number, target: number): this {
    this.gates.push({ name: 'CNOT', target: control, angle: target as unknown as number });
    return this;
  }

  rotation(gateName: string, angle: number, target: number = 0): this {
    return this.addGate(gateName, target, angle);
  }

  build(qubits: number = 2): QuantumEngine {
    this.engine = new QuantumEngine({ qubits });
    for (const gate of this.gates) {
      this.engine.applyGate(gate.name, gate.target, gate.angle);
    }
    return this.engine;
  }

  reset(): this {
    this.gates = [];
    this.engine = null;
    return this;
  }
}

export const PRESET_CIRCUITS: Record<string, QuantumCircuit> = {
  bellState: {
    name: 'Bell State',
    description: 'Creates maximally entangled Bell state',
    gates: [
      { name: 'H', target: 0 },
      { name: 'CNOT', target: 0 }
    ]
  },
  ghzState: {
    name: 'GHZ State',
    description: 'Greenberger-Horne-Zeilinger state',
    gates: [
      { name: 'H', target: 0 },
      { name: 'CNOT', target: 0 },
      { name: 'CNOT', target: 1 }
    ]
  },
  teleportation: {
    name: 'Quantum Teleportation',
    description: 'Standard teleportation circuit',
    gates: [
      { name: 'H', target: 1 },
      { name: 'CNOT', target: 1 },
      { name: 'CNOT', target: 0 },
      { name: 'H', target: 0 }
    ]
  }
};