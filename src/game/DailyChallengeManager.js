import { ProgressionManager } from '../state/ProgressionManager';

export class DailyChallengeManager {
  static getDailyChallenge(date = new Date()) {
    const seed = date.getFullYear() * 10000 + (date.getMonth() + 1) * 100 + date.getDate();
    const random = this.seedRandom(seed);
    
    const objectives = [
      { type: 'score', target: 1000 + Math.floor(random() * 2000) },
      { type: 'lines', target: 20 + Math.floor(random() * 30) },
    ];
    
    const objective = objectives[Math.floor(random() * objectives.length)];
    
    return {
      id: `daily_${seed}`,
      name: `Challenge ${date.toLocaleDateString()}`,
      objective,
      reward: { type: 'coins', amount: 200 },
      stars: [500, 1000, 2000], // For HUD consistency
    };
  }

  static seedRandom(seed) {
    return function() {
      seed = (seed * 9301 + 49297) % 233280;
      return seed / 233280;
    };
  }

  static async isChallengeCompleted(challengeId) {
    return await ProgressionManager.isChallengeCompleted(challengeId);
  }

  static async completeChallenge(challengeId, reward) {
    await ProgressionManager.saveDailyChallengeProgress(challengeId);
    if (reward?.amount) {
      await ProgressionManager.addCoins(reward.amount);
    }
  }
}
