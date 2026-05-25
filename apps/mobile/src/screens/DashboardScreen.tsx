import { View, Text, ScrollView, StyleSheet } from 'react-native';

export function DashboardScreen() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Dashboard</Text>
        <Text style={styles.subtitle}>Quantum Market Ready</Text>
      </View>

      <View style={styles.metricsGrid}>
        <View style={styles.metricCard}>
          <Text style={styles.metricLabel}>Portfolio Value</Text>
          <Text style={styles.metricValue}>$124,532.89</Text>
          <Text style={styles.metricChange}>+2.34%</Text>
        </View>

        <View style={styles.metricCard}>
          <Text style={styles.metricLabel}>Quantum Coherence</Text>
          <Text style={styles.metricValue}>0.99997</Text>
          <Text style={styles.metricChange}>+0.00002</Text>
        </View>
      </View>

      <View style={styles.quantumStatus}>
        <Text style={styles.sectionTitle}>Quantum Engine Status</Text>
        <View style={styles.statusGrid}>
          <View style={styles.statusItem}>
            <View style={[styles.statusDot, { backgroundColor: '#22c55e' }]} />
            <Text style={styles.statusLabel}>Core Engine</Text>
          </View>
          <View style={styles.statusItem}>
            <View style={[styles.statusDot, { backgroundColor: '#22c55e' }]} />
            <Text style={styles.statusLabel}>Gate Ops</Text>
          </View>
          <View style={styles.statusItem}>
            <View style={[styles.statusDot, { backgroundColor: '#22c55e' }]} />
            <Text style={styles.statusLabel}>State Vectors</Text>
          </View>
          <View style={styles.statusItem}>
            <View style={[styles.statusDot, { backgroundColor: '#22c55e' }]} />
            <Text style={styles.statusLabel}>Entanglement</Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#0f0a1e', padding: 16 },
  header: { marginBottom: 24 },
  title: { fontSize: 28, fontWeight: 'bold', color: '#fff' },
  subtitle: { fontSize: 14, color: 'rgba(255,255,255,0.6)', marginTop: 4 },
  metricsGrid: { flexDirection: 'row', flexWrap: 'wrap', gap: 12 },
  metricCard: { flex: 1, minWidth: '45%', backgroundColor: 'rgba(255,255,255,0.05)', borderRadius: 16, padding: 16 },
  metricLabel: { fontSize: 12, color: 'rgba(255,255,255,0.6)', marginBottom: 4 },
  metricValue: { fontSize: 24, fontWeight: 'bold', color: '#fff' },
  metricChange: { fontSize: 14, color: '#22c55e', marginTop: 4 },
  quantumStatus: { marginTop: 24, backgroundColor: 'rgba(255,255,255,0.05)', borderRadius: 16, padding: 16 },
  sectionTitle: { fontSize: 18, fontWeight: '600', color: '#fff', marginBottom: 16 },
  statusGrid: { flexDirection: 'row', flexWrap: 'wrap', gap: 12 },
  statusItem: { flexDirection: 'row', alignItems: 'center', gap: 8 },
  statusDot: { width: 8, height: 8, borderRadius: 4 },
  statusLabel: { fontSize: 14, color: 'rgba(255,255,255,0.8)' },
});