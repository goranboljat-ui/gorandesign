import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, SafeAreaView, ScrollView, Switch, Alert } from 'react-native';
import { COLORS, UI_SPECS } from '../utils/Constants';
import { audioManager } from '../utils/AudioManager';
import { hapticManager } from '../utils/HapticManager';
import { ProgressionManager } from '../state/ProgressionManager';
import { ArrowLeft, Volume2, Bell, Shield, Info, Trash2, Smartphone } from 'lucide-react-native';

export default function SettingsScreen({ navigation }) {
  const [soundEnabled, setSoundEnabled] = useState(true);
  const [hapticsEnabled, setHapticsEnabled] = useState(true);
  const [notificationsEnabled, setNotificationsEnabled] = useState(false);

  useEffect(() => {
    loadSettings();
  }, []);

  const loadSettings = async () => {
    const progress = await ProgressionManager.getProgress();
    setSoundEnabled(progress.soundEnabled !== false);
    setHapticsEnabled(progress.hapticsEnabled !== false);
    setNotificationsEnabled(progress.notificationsEnabled === true);
  };

  const toggleSound = async (value) => {
    setSoundEnabled(value);
    audioManager.setEnabled(value);
    const progress = await ProgressionManager.getProgress();
    progress.soundEnabled = value;
    await ProgressionManager.saveProgress(progress); // I need to add saveProgress to ProgressionManager
    if (value) audioManager.playSound('ui_click');
  };

  const toggleHaptics = async (value) => {
    setHapticsEnabled(value);
    hapticManager.setEnabled(value);
    const progress = await ProgressionManager.getProgress();
    progress.hapticsEnabled = value;
    await ProgressionManager.saveProgress(progress);
    if (value) hapticManager.impact();
  };

  const handleBack = () => {
    audioManager.playSound('ui_click');
    navigation.goBack();
  };

  const renderSetting = (Icon, label, component) => (
    <View style={styles.settingRow}>
      <View style={styles.settingLeft}>
        <Icon size={24} color={COLORS.textSecondary} />
        <Text style={styles.settingLabel}>{label}</Text>
      </View>
      {component}
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={handleBack} style={styles.backButton}>
          <ArrowLeft size={24} color={COLORS.textPrimary} />
        </TouchableOpacity>
        <Text style={styles.title}>SETTINGS</Text>
        <View style={{ width: 40 }} />
      </View>

      <ScrollView contentContainerStyle={styles.scrollContent}>
        <Text style={styles.sectionTitle}>PREFERENCES</Text>
        {renderSetting(Volume2, "Sound Effects", (
          <Switch 
            value={soundEnabled} 
            onValueChange={toggleSound}
            trackColor={{ false: '#334155', true: COLORS.primary }}
          />
        ))}
        {renderSetting(Smartphone, "Haptic Feedback", (
          <Switch 
            value={hapticsEnabled} 
            onValueChange={toggleHaptics}
            trackColor={{ false: '#334155', true: COLORS.primary }}
          />
        ))}
        {renderSetting(Bell, "Notifications", (
          <Switch 
            value={notificationsEnabled} 
            onValueChange={setNotificationsEnabled}
            trackColor={{ false: '#334155', true: COLORS.primary }}
          />
        ))}

        <Text style={[styles.sectionTitle, { marginTop: 40 }]}>ABOUT</Text>
        {renderSetting(Shield, "Privacy Policy", (
          <TouchableOpacity onPress={() => audioManager.playSound('ui_click')}>
            <Text style={styles.link}>VIEW</Text>
          </TouchableOpacity>
        ))}
        {renderSetting(Info, "Version", (
          <Text style={styles.version}>1.0.0 (Public Beta)</Text>
        ))}

        <View style={styles.dangerZone}>
          <Text style={styles.dangerTitle}>DANGER ZONE</Text>
          <TouchableOpacity 
            style={styles.resetButton}
            onPress={() => {
              audioManager.playSound('ui_click');
              Alert.alert("RESET PROGRESS", "Are you sure? This cannot be undone.", [
                { text: "CANCEL", style: "cancel" },
                { text: "RESET", style: "destructive", onPress: () => ProgressionManager.resetProgress() }
              ]);
            }}
          >
            <Trash2 size={20} color="#EF4444" />
            <Text style={styles.resetText}>RESET PROGRESS</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  header: {
    padding: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  backButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: COLORS.surface,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: COLORS.textPrimary,
  },
  scrollContent: {
    padding: 20,
  },
  sectionTitle: {
    color: COLORS.primary,
    fontSize: 12,
    fontWeight: 'bold',
    letterSpacing: 2,
    marginBottom: 20,
  },
  settingRow: {
    height: 64,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(255,255,255,0.05)',
  },
  settingLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  settingLabel: {
    color: COLORS.textPrimary,
    fontSize: 16,
    marginLeft: 16,
  },
  link: {
    color: COLORS.primary,
    fontWeight: 'bold',
  },
  version: {
    color: COLORS.textSecondary,
    fontSize: 14,
  },
  dangerZone: {
    marginTop: 80,
    padding: 20,
    borderRadius: 12,
    backgroundColor: 'rgba(239, 68, 68, 0.05)',
    borderWidth: 1,
    borderColor: 'rgba(239, 68, 68, 0.2)',
  },
  dangerTitle: {
    color: '#EF4444',
    fontSize: 12,
    fontWeight: 'bold',
    marginBottom: 16,
    textAlign: 'center',
  },
  resetButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  resetText: {
    color: '#EF4444',
    fontWeight: 'bold',
    marginLeft: 8,
  }
});
