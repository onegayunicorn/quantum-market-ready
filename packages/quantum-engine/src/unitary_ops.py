"""
Unitary Operations for Quantum Computing
Matrix operations and transformations
"""

import numpy as np
from typing import Tuple, List

class UnitaryOperations:
    """Collection of unitary matrix operations."""
    
    # Standard rotation matrices
    @staticmethod
    def rot_x(theta: float) -> np.ndarray:
        return np.array([
            [np.cos(theta/2), -1j*np.sin(theta/2)],
            [-1j*np.sin(theta/2), np.cos(theta/2)]
        ], dtype=complex)
    
    @staticmethod
    def rot_y(theta: float) -> np.ndarray:
        return np.array([
            [np.cos(theta/2), -np.sin(theta/2)],
            [np.sin(theta/2), np.cos(theta/2)]
        ], dtype=complex)
    
    @staticmethod
    def rot_z(theta: float) -> np.ndarray:
        return np.array([
            [np.exp(-1j*theta/2), 0],
            [0, np.exp(1j*theta/2)]
        ], dtype=complex)
    
    # T gate (π/8 gate)
    @staticmethod
    def t_gate() -> np.ndarray:
        return np.array([
            [1, 0],
            [0, np.exp(1j*np.pi/4)]
        ], dtype=complex)
    
    # S gate (Phase gate)
    @staticmethod
    def s_gate() -> np.ndarray:
        return np.array([
            [1, 0],
            [0, 1j]
        ], dtype=complex)
    
    # Swap gate
    @staticmethod
    def swap() -> np.ndarray:
        return np.array([
            [1, 0, 0, 0],
            [0, 0, 1, 0],
            [0, 1, 0, 0],
            [0, 0, 0, 1]
        ], dtype=complex)
    
    # Toffoli gate (CCNOT)
    @staticmethod
    def toffoli() -> np.ndarray:
        dim = 8
        matrix = np.eye(dim, dtype=complex)
        matrix[6, 6] = 0
        matrix[6, 7] = 1
        matrix[7, 6] = 1
        matrix[7, 7] = 0
        return matrix
    
    # Fredkin gate (CSWAP)
    @staticmethod
    def fredkin() -> np.ndarray:
        dim = 8
        matrix = np.zeros((dim, dim), dtype=complex)
        for i in range(dim):
            if i < 4 or i % 2 == 0:
                matrix[i, i] = 1
            elif i == 5:
                matrix[6, 5] = 1
            elif i == 6:
                matrix[5, 6] = 1
        return matrix
    
    @staticmethod
    def tensor_product(*matrices: np.ndarray) -> np.ndarray:
        """Compute tensor product of multiple matrices."""
        result = matrices[0]
        for m in matrices[1:]:
            result = np.kron(result, m)
        return result
    
    @staticmethod
    def controlled_unitary(unitary: np.ndarray, num_controls: int = 1) -> np.ndarray:
        """Create a controlled version of a unitary matrix."""
        dim = unitary.shape[0] * (2 ** num_controls)
        matrix = np.zeros((dim, dim), dtype=complex)
        
        # Identity for control states
        for i in range(2 ** num_controls):
            matrix[i, i] = 1
        
        # Apply unitary for |1...1⟩ control state
        for i in range(unitary.shape[0]):
            for j in range(unitary.shape[1]):
                matrix[2**num_controls + i, 2**num_controls + j] = unitary[i, j]
        
        return matrix
    
    @staticmethod
    def is_unitary(matrix: np.ndarray) -> bool:
        """Check if a matrix is unitary."""
        return np.allclose(np.eye(matrix.shape[0]), matrix @ matrix.conj().T)
    
    @staticmethod
    def validate_gate(gate_name: str, matrix: np.ndarray) -> bool:
        """Validate a gate matrix."""
        if not UnitaryOperations.is_unitary(matrix):
            return False
        
        det = np.linalg.det(matrix)
        if not np.isclose(np.abs(det), 1.0):
            return False
        
        return True