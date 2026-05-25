import { View, Text, Button, StyleSheet, ScrollView } from 'react-native';
import { useState } from 'react';

const gates = ['H', 'X', 'Y', 'Z', 'CNOT', 'RX', 'RY', 'RZ'];

export function QuantumSimulatorScreen() {
  const [circuit, setCircuit] = useState<string[]>([]);
  const [coherence, setCoherence] = useState(0.99997);
  const [purity, setPurity] = useState(0.99999);

  const addGate = (gate: string) => {
    setCircuit([...circuit, gate]);
    setCoherence(Math.max(0.98, coherence - 0.00001));
    setPurity(Math.max(0.99, purity - 0.000005));
  };

  const runSimulation = () => {
    alert(`Simulation complete!\nCoherence: ${coherence.toFixed(5)}\nPurity: ${purity.toFixed(5)}`);
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Quantum Simulator</Text>
        <View style={styles.statsRow}>
          <View style={styles.stat}>
            <Text style={styles.statLabel}>Coherence</Text>
            <Text style={styles.statValue}>{coherence.toFixed(5)}</Text>
          </View>
          <View style={styles.stat}>
            <Text style={styles.statLabel}>Purity</Text>
            <Text style={styles.statValue}>{purity.toFixed(5)}</Text>
          </View>
        </View>
      </View>

      <View style={styles.gatesGrid}>
        {gates.map((gate) => (
          <Button key={gate} title={gate} onPress={() => addGate(gate)} color="#8b5cf6" />
        ))}
      </View>

      <View style={styles.circuitSection}>
        <Text style={styles.sectionTitle}>Circuit</Text>
        <View style={styles.circuit}>
          {circuit.length === 0 ? (
            <Text style={styles.emptyText}>Click gates to add them</Text>
          ) : (
            <Text style={styles.circuitText}>{circuit.join(' → ')}</Text>
          )}
        </View>
        <Button title="Clear" onPress={() => setCircuit([])} color="#ef4444" />
        <Button title="▶ Run Simulation" onPress={runSimulation} color="#22c55e" />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#0f0a1e', padding: 16 },
  header: { marginBottom: 24 },
  title: { fontSize: 24, fontWeight: 'bold', color: '#fff', marginBottom: 16 },
  statsRow: { flexDirection: 'row', gap: 16 },
  stat: { flex: 1, backgroundColor: 'rgba(255,255,255,0.05)', borderRadius: 12, padding: 12 },
  statLabel: { fontSize: 12, color: 'rgba(255,255,255,0.6)' },
  statValue: { fontSize: 18, fontWeight: 'bold', color: '#8b5cf6' },
  gatesGrid: { flexDirection: 'row', flexWrap: 'wrap', gap: 8, marginBottom: 24 },
  circuitSection: { backgroundColor: 'rgba(255,255,255,0.05)', borderRadius: 16, padding: 16 },
  sectionTitle: { fontSize: 18, fontWeight: '600', color: '#fff', marginBottom: 12 },
  circuit: { minHeight: 60, padding: 12, backgroundColor: 'rgba(255,255,255,0.05)', borderRadius: 12, marginBottom: 12 },
  emptyText: { color: 'rgba(255,255,255,0.4)', textAlign: 'center' },
  circuitText: { color: '#8b5cf6', fontFamily: 'monospace' },
});