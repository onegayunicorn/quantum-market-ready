export interface Complex {
  re: number;
  im: number;
}

export interface QuantumGateDefinition {
  name: string;
  symbol: string;
  matrix: number[][];
  description: string;
}

export const GATES: Record<string, QuantumGateDefinition> = {
  H: {
    name: 'Hadamard',
    symbol: 'H',
    matrix: [[1, 1], [1, -1]].map(row => row.map(v => v / Math.SQRT2)),
    description: 'Creates superposition'
  },
  X: {
    name: 'Pauli-X (NOT)',
    symbol: 'X',
    matrix: [[0, 1], [1, 0]],
    description: 'Bit flip'
  },
  Y: {
    name: 'Pauli-Y',
    symbol: 'Y',
    matrix: [[0, -1], [1, 0]],
    description: 'Y rotation'
  },
  Z: {
    name: 'Pauli-Z',
    symbol: 'Z',
    matrix: [[1, 0], [0, -1]],
    description: 'Phase flip'
  },
  S: {
    name: 'S Gate (Phase)',
    symbol: 'S',
    matrix: [[1, 0], [0, 1]],
    description: 'Phase gate'
  },
  T: {
    name: 'T Gate (π/8)',
    symbol: 'T',
    matrix: [[1, 0], [0, 1]],
    description: 'π/8 rotation'
  }
};

export function tensorProduct(matrices: number[][][]): number[][] {
  let result = matrices[0];
  for (let i = 1; i < matrices.length; i++) {
    const newSize = result.length * matrices[i].length;
    const newMatrix: number[][] = Array(newSize).fill(null).map(() => Array(newSize).fill(0));
    
    for (let r1 = 0; r1 < result.length; r1++) {
      for (let c1 = 0; c1 < result[0].length; c1++) {
        for (let r2 = 0; r2 < matrices[i].length; r2++) {
          for (let c2 = 0; c2 < matrices[i][0].length; c2++) {
            const newRow = r1 * matrices[i].length + r2;
            const newCol = c1 * matrices[i][0].length + c2;
            newMatrix[newRow][newCol] = result[r1][c1] * matrices[i][r2][c2];
          }
        }
      }
    }
    result = newMatrix;
  }
  return result;
}

export function isUnitary(matrix: number[][]): boolean {
  const n = matrix.length;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      let sum = 0;
      for (let k = 0; k < n; k++) {
        sum += matrix[i][k] * matrix[j][k];
      }
      const expected = i === j ? 1 : 0;
      if (Math.abs(sum - expected) > 1e-10) return false;
    }
  }
  return true;
}