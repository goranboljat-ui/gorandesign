import AsyncStorage from '@react-native-async-storage/async-storage';

const PROGRESS_KEY = 'blockwell_progress';

export class ProgressionManager {
  static async getProgress() {
    try {
      const jsonValue = await AsyncStorage.getItem(PROGRESS_KEY);
      const data = jsonValue != null ? JSON.parse(jsonValue) : this.getDefaultProgress();
      
      // Ensure all required fields exist
      return { ...this.getDefaultProgress(), ...data };
    } catch (e) {
      console.error("Error reading progress", e);
      return this.getDefaultProgress();
    }
  }

  static getDefaultProgress() {
    return {
      completedLevels: {},
      completedDailyChallenges: {},
      unlockedThemes: ['classic'],
      activeTheme: 'classic',
      activeGridSkin: 'slate',
      coins: 0,
      soundEnabled: true,
      hapticsEnabled: true,
      notificationsEnabled: false,
    };
  }

  static async saveProgress(progress) {
    try {
      await AsyncStorage.setItem(PROGRESS_KEY, JSON.stringify(progress));
    } catch (e) {
      console.error("Error saving progress", e);
    }
  }

  static async resetProgress() {
    try {
      await AsyncStorage.removeItem(PROGRESS_KEY);
    } catch (e) {
      console.error("Error resetting progress", e);
    }
  }

  static async saveDailyChallengeProgress(challengeId) {
    try {
      const progress = await this.getProgress();
      progress.completedDailyChallenges[challengeId] = true;
      await this.saveProgress(progress);
    } catch (e) {
      console.error("Error saving daily challenge progress", e);
    }
  }

  static async isChallengeCompleted(challengeId) {
    const progress = await this.getProgress();
    return !!progress.completedDailyChallenges[challengeId];
  }

  static async saveLevelProgress(levelId, score, stars) {
    try {
      const progress = await this.getProgress();
      const currentLevelProgress = progress.completedLevels[levelId] || { bestScore: 0, stars: 0 };
      
      progress.completedLevels[levelId] = {
        bestScore: Math.max(currentLevelProgress.bestScore, score),
        stars: Math.max(currentLevelProgress.stars, stars),
      };

      await this.saveProgress(progress);
    } catch (e) {
      console.error("Error saving progress", e);
    }
  }

  static async addCoins(amount) {
    try {
      const progress = await this.getProgress();
      progress.coins += amount;
      await this.saveProgress(progress);
    } catch (e) {
      console.error("Error adding coins", e);
    }
  }

  static async unlockTheme(themeId) {
    try {
      const progress = await this.getProgress();
      if (!progress.unlockedThemes.includes(themeId)) {
        progress.unlockedThemes.push(themeId);
        await this.saveProgress(progress);
      }
    } catch (e) {
      console.error("Error unlocking theme", e);
    }
  }

  static async setActiveTheme(themeId) {
    try {
      const progress = await this.getProgress();
      progress.activeTheme = themeId;
      await this.saveProgress(progress);
    } catch (e) {
      console.error("Error setting active theme", e);
    }
  }

  static async setActiveGridSkin(skinId) {
    try {
      const progress = await this.getProgress();
      progress.activeGridSkin = skinId;
      await this.saveProgress(progress);
    } catch (e) {
      console.error("Error setting active grid skin", e);
    }
  }
}
