import * as Haptics from 'expo-haptics';
import { Platform } from 'react-native';
import { ProgressionManager } from '../state/ProgressionManager';

class HapticManager {
  constructor() {
    this.enabled = true;
    this.init();
  }

  async init() {
    const progress = await ProgressionManager.getProgress();
    this.enabled = progress.hapticsEnabled !== false;
  }

  setEnabled(enabled) {
    this.enabled = enabled;
  }

  async impact(style = Haptics.ImpactFeedbackStyle.Medium) {
    if (!this.enabled || Platform.OS === 'web') return;
    try {
      await Haptics.impactAsync(style);
    } catch (e) {}
  }

  async notification(type = Haptics.NotificationFeedbackStyle.Success) {
    if (!this.enabled || Platform.OS === 'web') return;
    try {
      await Haptics.notificationAsync(type);
    } catch (e) {}
  }

  async selection() {
    if (!this.enabled || Platform.OS === 'web') return;
    try {
      await Haptics.selectionAsync();
    } catch (e) {}
  }
}

export const hapticManager = new HapticManager();
