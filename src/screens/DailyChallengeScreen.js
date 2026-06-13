import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, SafeAreaView, Dimensions } from 'react-native';
import { COLORS, UI_SPECS } from '../utils/Constants';
import { ProgressionManager } from '../state/ProgressionManager';
import { DailyChallengeManager } from '../game/DailyChallengeManager';
import { ArrowLeft, Trophy, Calendar, Clock, Star } from 'lucide-react-native';

const { width } = Dimensions.get('window');

export default function DailyChallengeScreen({ navigation }) {
  const [challenge, setChallenge] = useState(null);
  const [completed, setCompleted] = useState(false);
  const [timeLeft, setTimeLeft] = useState("");

  useEffect(() => {
    loadChallenge();
    const timer = setInterval(updateTimer, 1000);
    return () => clearInterval(timer);
  }, []);

  const loadChallenge = async () => {
    const c = DailyChallengeManager.getDailyChallenge();
    setChallenge(c);
    const isDone = await ProgressionManager.isChallengeCompleted(c.id);
    setCompleted(isDone);
  };

  const updateTimer = () => {
    const now = new Date();
    const end = new Date();
    end.setHours(24, 0, 0, 0);
    const diff = end - now;
    const h = Math.floor(diff / 3600000);
    const m = Math.floor((diff % 3600000) / 60000);
    const s = Math.floor((diff % 60000) / 1000);
    setTimeLeft(`${h}h ${m}m ${s}s`);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
          <ArrowLeft size={24} color={COLORS.textPrimary} />
        </TouchableOpacity>
        <Text style={styles.title}>DAILY CHALLENGE</Text>
        <View style={{ width: 40 }} />
      </View>

      <View style={styles.content}>
        <View style={styles.calendarHeader}>
          <Calendar size={20} color={COLORS.textSecondary} />
          <Text style={styles.dateText}>{new Date().toDateString().toUpperCase()}</Text>
        </View>

        <View style={styles.goalCard}>
          <Trophy size={48} color={COLORS.accent} style={styles.trophyIcon} />
          <Text style={styles.goalTitle}>TODAY'S GOAL</Text>
          <Text style={styles.goalDescription}>
            {challenge?.objective.type === 'score' 
              ? `Reach ${challenge.objective.target} points`
              : `Clear ${challenge.objective.target} lines`}
          </Text>
          <View style={styles.rewardBadge}>
            <Text style={styles.rewardText}>REWARD: {challenge?.reward.amount} 🪙</Text>
          </View>
        </View>

        <View style={styles.timerRow}>
          <Clock size={16} color={COLORS.textSecondary} />
          <Text style={styles.timerText}>RESETS IN: {timeLeft}</Text>
        </View>

        <TouchableOpacity 
          style={[styles.startButton, completed && styles.completedButton]}
          disabled={completed}
          onPress={() => navigation.navigate('Game', { mode: 'daily' })}
        >
          <Text style={styles.startButtonText}>
            {completed ? 'CHALLENGE COMPLETED' : 'START CHALLENGE'}
          </Text>
        </TouchableOpacity>

        {completed && (
          <View style={styles.completedBadge}>
            <Star size={24} color={COLORS.accent} fill={COLORS.accent} />
            <Text style={styles.completedText}>COME BACK TOMORROW!</Text>
          </View>
        )}
      </View>
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
    fontSize: 20,
    fontWeight: 'bold',
    color: COLORS.textPrimary,
  },
  content: {
    flex: 1,
    padding: 20,
    alignItems: 'center',
  },
  calendarHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 30,
  },
  dateText: {
    color: COLORS.textSecondary,
    fontSize: 14,
    fontWeight: 'bold',
    marginLeft: 8,
    letterSpacing: 1,
  },
  goalCard: {
    width: '100%',
    backgroundColor: COLORS.surface,
    borderRadius: 24,
    padding: 40,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.05)',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.3,
    shadowRadius: 20,
    elevation: 10,
  },
  trophyIcon: {
    marginBottom: 20,
  },
  goalTitle: {
    color: COLORS.textSecondary,
    fontSize: 12,
    fontWeight: 'bold',
    letterSpacing: 2,
    marginBottom: 10,
  },
  goalDescription: {
    color: COLORS.textPrimary,
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 24,
  },
  rewardBadge: {
    backgroundColor: 'rgba(245, 158, 11, 0.1)',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: 'rgba(245, 158, 11, 0.2)',
  },
  rewardText: {
    color: COLORS.accent,
    fontWeight: 'bold',
    fontSize: 14,
  },
  timerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 40,
  },
  timerText: {
    color: COLORS.textSecondary,
    fontSize: 12,
    fontWeight: 'bold',
    marginLeft: 6,
  },
  startButton: {
    backgroundColor: COLORS.secondary,
    width: '100%',
    height: 64,
    borderRadius: 32,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 40,
    shadowColor: COLORS.secondary,
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.4,
    shadowRadius: 12,
    elevation: 8,
  },
  completedButton: {
    backgroundColor: COLORS.surface,
    shadowOpacity: 0,
    elevation: 0,
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.1)',
  },
  startButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    letterSpacing: 1,
  },
  completedBadge: {
    alignItems: 'center',
    marginTop: 40,
  },
  completedText: {
    color: COLORS.textSecondary,
    fontSize: 12,
    fontWeight: 'bold',
    marginTop: 10,
    letterSpacing: 1,
  }
});
