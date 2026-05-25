"""
Purity Check Module
Verifies quantum state purity and decoherence monitoring
"""

import numpy as np
from typing import Dict, Tuple

class PurityCheck:
    """Quantum state purity verification and monitoring."""
    
    def __init__(self, threshold: float = 0.999):
        self.threshold = threshold
        self.history = []
    
    def calculate_purity(self, state_vector: np.ndarray) -> float:
        """Calculate the purity of a quantum state. Purity = Tr(ρ²)"""
        rho = np.outer(state_vector, np.conj(state_vector))
        purity = np.real(np.trace(rho @ rho))
        return float(purity)
    
    def calculate_fidelity(self, state1: np.ndarray, state2: np.ndarray) -> float:
        """Calculate quantum fidelity between two states."""
        overlap = np.vdot(state1, state2)
        return float(np.abs(overlap) ** 2)
    
    def measure_decoherence(self, initial_state: np.ndarray, current_state: np.ndarray) -> Dict[str, float]:
        """Measure decoherence by comparing states."""
        purity_loss = 1 - (self.calculate_purity(current_state) / max(1e-10, self.calculate_purity(initial_state)))
        fidelity = self.calculate_fidelity(initial_state, current_state)
        return {
            'purity_loss': purity_loss,
            'fidelity': fidelity,
            'coherence_remaining': fidelity
        }
    
    def is_pure(self, state_vector: np.ndarray) -> Tuple[bool, float]:
        """Check if state is pure (purity close to 1)."""
        purity = self.calculate_purity(state_vector)
        return purity > self.threshold, purity
    
    def spectral_decomposition(self, state_vector: np.ndarray) -> Dict[str, any]:
        """Perform spectral decomposition of density matrix."""
        rho = np.outer(state_vector, np.conj(state_vector))
        eigenvalues, eigenvectors = np.linalg.eig(rho)
        return {
            'eigenvalues': eigenvalues,
            'eigenvectors': eigenvectors,
            'rank': int(np.sum(np.abs(eigenvalues) > 1e-10))
        }
    
    def detect_decoherence(self, state_vector: np.ndarray) -> Dict[str, any]:
        """Detect and report decoherence events."""
        is_pure, _ = self.is_pure(state_vector)
        spectral = self.spectral_decomposition(state_vector)
        return {
            'is_pure': is_pure,
            'rank_deficiency': 1 - (spectral['rank'] / len(state_vector)),
            'recommendation': 'reset' if not is_pure else 'continue'
        }


if __name__ == '__main__':
    checker = PurityCheck(threshold=0.99)
    pure_state = np.array([1, 0], dtype=complex)
    is_pure, purity = checker.is_pure(pure_state)
    print(f"Pure state |0⟩: Purity={purity:.5f}, Pure={is_pure}")
    
    mixed_state = np.array([0.8, 0.6], dtype=complex)
    mixed_state = mixed_state / np.linalg.norm(mixed_state)
    is_pure, purity = checker.is_pure(mixed_state)
    print(f"Mixed state: Purity={purity:.5f}, Pure={is_pure}")