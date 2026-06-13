import { Alert } from 'react-native';
import { ProgressionManager } from '../state/ProgressionManager';

export class AdManager {
  static async showRewardedVideo(onReward) {
    const progress = await ProgressionManager.getProgress();
    
    // If Pro version is unlocked, skip the ad and give reward immediately
    if (progress.unlockedThemes.includes('all_pro')) {
      onReward();
      return;
    }

    Alert.alert(
      "Watch Ad",
      "Watch a short video to earn 50 coins?",
      [
        { text: "No thanks", style: "cancel" },
        { text: "Watch", onPress: () => {
          // Mock ad delay
          setTimeout(() => {
            Alert.alert("Reward Earned!", "You've earned 50 coins.");
            onReward();
          }, 2000);
        }}
      ]
    );
  }

  static async showInterstitialAd() {
    const progress = await ProgressionManager.getProgress();
    if (progress.unlockedThemes.includes('all_pro')) return;

    console.log("Mock Interstitial Ad Shown");
  }
}
