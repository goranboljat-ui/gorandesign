import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, SafeAreaView } from 'react-native';
import { COLORS, UI_SPECS } from '../utils/Constants';
import { ProgressionManager } from '../state/ProgressionManager';
import { DailyChallengeManager } from '../game/DailyChallengeManager';
import { audioManager } from '../utils/AudioManager';
import { ShoppingBag, Settings, Trophy, Play } from 'lucide-react-native';

export default function HomeScreen({ navigation }) {
  const [progress, setProgress] = useState(null);
  const [challenge, setChallenge] = useState(null);
  const [challengeCompleted, setChallengeCompleted] = useState(false);

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      loadData();
    });
    return unsubscribe;
  }, [navigation]);

  const loadData = async () => {
    const p = await ProgressionManager.getProgress();
    setProgress(p);

    const c = DailyChallengeManager.getDailyChallenge();
    setChallenge(c);
    const completed = await ProgressionManager.isChallengeCompleted(c.id);
    setChallengeCompleted(completed);
  };

  const handlePress = (target, params) => {
    audioManager.playSound('ui_click');
    navigation.navigate(target, params);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.topBar}>
        <View style={styles.coinBadge}>
          <Text style={styles.coinCount}>{progress?.coins || 0} 🪙</Text>
        </View>
      </View>

      <View style={styles.content}>
        <Text style={styles.title}>BLOCKWELL</Text>
        
        {/* Daily Challenge Preview Card */}
        <TouchableOpacity 
          style={styles.challengeCard}
          onPress={() => handlePress('DailyChallenge')}
        >
          <View style={styles.challengeHeader}>
            <Trophy size={16} color={COLORS.accent} />
            <Text style={styles.challengeTitle}>DAILY CHALLENGE</Text>
          </View>
          <Text style={styles.challengeGoal}>
            {challengeCompleted ? 'CHALLENGE COMPLETED ✅' : (
              challenge?.objective.type === 'score' 
                ? `Reach ${challenge.objective.target} points`
                : `Clear ${challenge.objective.target} lines`
            )}
          </Text>
        </TouchableOpacity>

        <TouchableOpacity 
          style={styles.playButton}
          onPress={() => handlePress('LevelSelect')}
        >
          <Play size={32} color="white" fill="white" />
          <Text style={styles.playButtonText}>PLAY</Text>
        </TouchableOpacity>

        <View style={styles.secondaryActions}>
          <TouchableOpacity 
            style={styles.iconButton}
            onPress={() => handlePress('Shop')}
          >
            <ShoppingBag size={24} color={COLORS.textPrimary} />
          </TouchableOpacity>
          
          <TouchableOpacity 
            style={styles.iconButton}
            onPress={() => handlePress('Settings')}
          >
            <Settings size={24} color={COLORS.textPrimary} />
          </TouchableOpacity>

          <TouchableOpacity 
            style={styles.iconButton}
            onPress={() => { /* Leaderboard */ }}
          >
            <Trophy size={24} color={COLORS.textPrimary} />
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  topBar: {
    padding: 20,
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  coinBadge: {
    backgroundColor: COLORS.surface,
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 20,
  },
  coinCount: {
    fontSize: 16,
    fontWeight: 'bold',
    color: COLORS.accent,
  },
  content: {
    flex: 1,
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 48,
    fontWeight: 'bold',
    marginTop: 60,
    marginBottom: 40,
    color: COLORS.primary,
    letterSpacing: 4,
  },
  challengeCard: {
    width: '100%',
    backgroundColor: COLORS.surface,
    borderRadius: UI_SPECS.cornerRadius,
    padding: 16,
    marginBottom: 40,
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.05)',
  },
  challengeHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  challengeTitle: {
    color: COLORS.textSecondary,
    fontSize: 12,
    fontWeight: 'bold',
    marginLeft: 8,
    letterSpacing: 1,
  },
  challengeGoal: {
    color: COLORS.textPrimary,
    fontSize: 18,
    fontWeight: '500',
  },
  playButton: {
    backgroundColor: COLORS.primary,
    width: 120,
    height: 120,
    borderRadius: 60,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
    shadowColor: COLORS.primary,
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.4,
    shadowRadius: 12,
    elevation: 10,
  },
  playButtonText: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 4,
  },
  secondaryActions: {
    flexDirection: 'row',
    marginTop: 60,
    width: '100%',
    justifyContent: 'space-evenly',
  },
  iconButton: {
    backgroundColor: COLORS.surface,
    width: 56,
    height: 56,
    borderRadius: 28,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.05)',
  },
});
