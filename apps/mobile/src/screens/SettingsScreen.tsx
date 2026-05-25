import { View, Text, Switch, StyleSheet, ScrollView } from 'react-native';
import { useState } from 'react';

export function SettingsScreen() {
  const [darkMode, setDarkMode] = useState(true);
  const [notifications, setNotifications] = useState(true);
  const [quantumSimulation, setQuantumSimulation] = useState(true);

  return (
    <ScrollView style={styles.container}>
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Preferences</Text>
        
        <View style={styles.settingItem}>
          <Text style={styles.settingLabel}>Dark Mode</Text>
          <Switch value={darkMode} onValueChange={setDarkMode} trackColor={{ false: '#767577', true: '#8b5cf6' }} />
        </View>
        
        <View style={styles.settingItem}>
          <Text style={styles.settingLabel}>Notifications</Text>
          <Switch value={notifications} onValueChange={setNotifications} trackColor={{ false: '#767577', true: '#8b5cf6' }} />
        </View>
        
        <View style={styles.settingItem}>
          <Text style={styles.settingLabel}>Quantum Simulation</Text>
          <Switch value={quantumSimulation} onValueChange={setQuantumSimulation} trackColor={{ false: '#767577', true: '#8b5cf6' }} />
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>About</Text>
        <Text style={styles.aboutText}>Quantum Market Ready App v1.0.0</Text>
        <Text style={styles.copyright}>© 2024 Sovereign Core Research Pty Ltd</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#0f0a1e', padding: 16 },
  section: { marginBottom: 24, backgroundColor: 'rgba(255,255,255,0.05)', borderRadius: 16, padding: 16 },
  sectionTitle: { fontSize: 18, fontWeight: '600', color: '#fff', marginBottom: 16 },
  settingItem: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingVertical: 12, borderBottomWidth: 1, borderBottomColor: 'rgba(255,255,255,0.1)' },
  settingLabel: { fontSize: 16, color: '#fff' },
  aboutText: { color: 'rgba(255,255,255,0.6)', marginBottom: 8 },
  copyright: { color: 'rgba(255,255,255,0.4)', fontSize: 12 },
});