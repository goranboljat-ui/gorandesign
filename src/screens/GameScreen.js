import React, { useState, useCallback, useRef, useEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Alert, Dimensions, SafeAreaView, Modal } from 'react-native';
import { GameEngine } from '../game/GameEngine';
import Grid from '../components/Grid';
import { COLORS, UI_SPECS, GRID_SIZE, CELL_SIZE, GRID_PADDING, THEMES, GRID_SKINS } from '../utils/Constants';
import DraggableShape from '../components/DraggableShape';
import { ProgressionManager } from '../state/ProgressionManager';
import { DailyChallengeManager } from '../game/DailyChallengeManager';
import { LEVELS } from '../game/LevelData';
import { audioManager } from '../utils/AudioManager';
import { hapticManager } from '../utils/HapticManager';
import Animated, { 
  useAnimatedStyle, 
  withSpring, 
  useSharedValue, 
  withSequence, 
  withTiming,
  withRepeat
} from 'react-native-reanimated';
import { Pause } from 'lucide-react-native';

const { width } = Dimensions.get('window');

export default function GameScreen({ route, navigation }) {
  const { level: levelParam, mode } = route.params || {};
  const [level, setLevel] = useState(levelParam);
  const [engine] = useState(new GameEngine(GRID_SIZE));
  const [gameState, setGameState] = useState(engine.getState());
  const [objectiveProgress, setObjectiveProgress] = useState(0);
  const [activeTheme, setActiveTheme] = useState('classic');
  const [activeSkin, setActiveSkin] = useState('slate');
  
  const scoreScale = useSharedValue(1);
  const comboScale = useSharedValue(0);
  const gridShake = useSharedValue(0);
  const gridRef = useRef(null);

  useEffect(() => {
    loadSettings();
    if (mode === 'daily') {
      const challenge = DailyChallengeManager.getDailyChallenge();
      setLevel(challenge);
      updateObjectiveProgress(engine.getState(), challenge);
    } else if (levelParam) {
      setLevel(levelParam);
      updateObjectiveProgress(engine.getState(), levelParam);
    }
  }, [mode, levelParam]);

  const loadSettings = async () => {
    const progress = await ProgressionManager.getProgress();
    setActiveTheme(progress.activeTheme || 'classic');
    setActiveSkin(progress.activeGridSkin || 'slate');
  };

  const updateObjectiveProgress = (state, currentLevel = level) => {
    if (!currentLevel) return;
    
    let progress = 0;
    switch (currentLevel.objective.type) {
      case 'score':
        progress = state.score / currentLevel.objective.target;
        break;
      case 'lines':
        progress = state.totalLinesCleared / currentLevel.objective.target;
        break;
      default:
        break;
    }
    setObjectiveProgress(Math.min(1, progress));
  };

  const triggerShake = (intensity) => {
    gridShake.value = withSequence(
      withRepeat(withTiming(intensity, { duration: 50 }), 4, true),
      withTiming(0, { duration: 50 })
    );
  };

  const handleDrop = useCallback((shape, x, y) => {
    gridRef.current.measureInWindow((gridX, gridY, gridW, gridH) => {
      const relativeX = x - gridX - GRID_PADDING;
      const relativeY = y - gridY - GRID_PADDING;

      const col = Math.round(relativeX / (CELL_SIZE + 2));
      const row = Math.round(relativeY / (CELL_SIZE + 2));

      if (engine.placeBlock(shape, row, col)) {
        const newState = engine.getState();
        setGameState(newState);
        
        audioManager.playVaryingSound('block_place');
        hapticManager.impact();

        // Check for special block effects
        if (shape.id === 'bomb') {
          audioManager.playSound('bomb');
          hapticManager.notification();
        }
        if (shape.id === 'lightning') {
          audioManager.playSound('lightning');
          hapticManager.notification();
        }
        if (shape.id === 'rainbow') {
          audioManager.playSound('rainbow');
          hapticManager.notification();
        }

        scoreScale.value = withSequence(withTiming(1.2, { duration: 100 }), withSpring(1));

        if (newState.comboCount > 1) {
          comboScale.value = withSequence(
            withSpring(1.5, { damping: 10, stiffness: 100 }),
            withSpring(1)
          );
          // Trigger shake based on combo
          triggerShake(Math.min(8, newState.comboCount * 2));
          
          // Play combo sounds
          if (newState.comboCount === 2) audioManager.playSound('combo_1');
          else if (newState.comboCount === 3) audioManager.playSound('combo_2');
          else if (newState.comboCount >= 4) audioManager.playSound('combo_3');

          hapticManager.notification();
        } else {
          comboScale.value = 0;
          // Standard line clear sound if any lines cleared
          if (newState.totalLinesCleared > gameState.totalLinesCleared) {
            audioManager.playSound('line_clear');
            hapticManager.impact();
          }
        }

        if (level) {
          updateObjectiveProgress(newState);
          checkLevelComplete(newState);
        }

        if (newState.gameOver) {
          handleGameOver(newState);
        }
      }
    });
  }, [engine, navigation, level]);

  const checkLevelComplete = (state) => {
    let complete = false;
    switch (level.objective.type) {
      case 'score':
        if (state.score >= level.objective.target) complete = true;
        break;
      case 'lines':
        if (state.totalLinesCleared >= level.objective.target) complete = true;
        break;
    }

    if (complete) {
      if (mode === 'daily') {
        audioManager.playSound('daily_complete');
        hapticManager.notification();
        ProgressionManager.saveDailyChallengeProgress(level.id);
        ProgressionManager.addCoins(level.reward.amount);
        Alert.alert("DAILY COMPLETE!", `You earned ${level.reward.amount} coins!`, [
          { text: "MENU", onPress: () => navigation.navigate('Home') }
        ]);
      } else {
        audioManager.playSound('level_complete');
        hapticManager.notification();
        const stars = calculateStars(state.score);
        ProgressionManager.saveLevelProgress(level.id, state.score, stars);
        if (level.reward.type === 'coins') {
          ProgressionManager.addCoins(level.reward.amount);
        } else if (level.reward.type === 'theme') {
          ProgressionManager.unlockTheme(level.reward.id);
        }
        Alert.alert("LEVEL COMPLETE!", `You earned ${stars} stars!`, [
          { text: "LEVEL SELECT", onPress: () => navigation.navigate('LevelSelect') },
          { text: "NEXT LEVEL", onPress: () => {
            const nextLevel = LEVELS.find(l => l.id === level.id + 1);
            if (nextLevel) {
              navigation.replace('Game', { level: nextLevel });
            } else {
              navigation.navigate('LevelSelect');
            }
          }}
        ]);
      }
    }
  };

  const calculateStars = (score) => {
    if (!level || !level.stars) return 0;
    if (score >= level.stars[2]) return 3;
    if (score >= level.stars[1]) return 2;
    if (score >= level.stars[0]) return 1;
    return 0;
  };

  const handleGameOver = (state) => {
    audioManager.playSound('game_over');
    hapticManager.notification('error');
    Alert.alert("GAME OVER", `Final Score: ${state.score}`, [
      { text: "RETRY", onPress: () => resetGame() },
      { text: "MENU", onPress: () => navigation.navigate('Home') }
    ]);
  };

  const resetGame = () => {
    navigation.replace('Game', { level, mode });
  };

  const animatedComboStyle = useAnimatedStyle(() => ({
    transform: [{ scale: comboScale.value }],
    opacity: comboScale.value > 0 ? 1 : 0
  }));

  const animatedScoreStyle = useAnimatedStyle(() => ({
    transform: [{ scale: scoreScale.value }]
  }));

  const animatedGridStyle = useAnimatedStyle(() => ({
    transform: [{ translateX: gridShake.value }]
  }));

  const [isPaused, setIsPaused] = useState(false);

  const togglePause = () => setIsPaused(!isPaused);

  return (
    <SafeAreaView style={styles.container}>
      {/* Top Bar HUD */}
      <View style={styles.topBar}>
        <View style={styles.scoreContainer}>
          <Text style={styles.scoreLabel}>SCORE</Text>
          <Animated.Text style={[styles.scoreValue, animatedScoreStyle]}>
            {gameState.score}
          </Animated.Text>
        </View>

        {level && (
          <View style={styles.progressContainer}>
            <View style={styles.progressBarBg}>
              <View 
                style={[
                  styles.progressBarFill, 
                  { width: `${objectiveProgress * 100}%` }
                ]} 
              />
            </View>
          </View>
        )}

        <TouchableOpacity 
          style={styles.pauseButton}
          onPress={togglePause}
        >
          <Pause size={24} color={COLORS.textPrimary} fill={COLORS.textPrimary} />
        </TouchableOpacity>
      </View>

      {/* Grid Area */}
      <View style={styles.gridWrapper}>
        <Animated.View 
          ref={gridRef}
          style={[styles.gridContainer, animatedGridStyle]}
        >
          <Grid grid={gameState.grid} skinId={activeSkin} />
        </Animated.View>

        {/* Combo Overlay */}
        <View style={styles.comboOverlay} pointerEvents="none">
          <Animated.View style={[styles.comboBadge, animatedComboStyle]}>
            <Text style={styles.comboMultiplier}>X{gameState.comboCount}</Text>
            <Text style={styles.comboText}>
              {gameState.comboCount >= 4 ? 'MEGA COMBO!' : 'COMBO'}
            </Text>
          </Animated.View>
        </View>
      </View>

      {/* Bottom Shapes Tray */}
      <View style={styles.trayContainer}>
        <View style={styles.trayBg} />
        <View style={styles.shapesTray}>
          {gameState.currentShapes.map((shape) => (
            <View key={shape.instanceId} style={styles.shapeSlot}>
              <DraggableShape 
                shape={shape}
                onDrop={handleDrop}
                themeId={activeTheme}
              />
            </View>
          ))}
        </View>
      </View>

      {/* Pause Modal */}
      <Modal
        visible={isPaused}
        transparent={true}
        animationType="fade"
      >
        <View style={styles.modalOverlay}>
          <View style={styles.pauseModal}>
            <Text style={styles.pauseTitle}>PAUSED</Text>
            
            <TouchableOpacity 
              style={styles.resumeButton}
              onPress={togglePause}
            >
              <Text style={styles.resumeButtonText}>RESUME</Text>
            </TouchableOpacity>

            <TouchableOpacity 
              style={styles.menuButton}
              onPress={() => {
                setIsPaused(false);
                navigation.navigate('Home');
              }}
            >
              <Text style={styles.menuButtonText}>MAIN MENU</Text>
            </TouchableOpacity>

            <TouchableOpacity 
              style={styles.restartButton}
              onPress={() => {
                setIsPaused(false);
                resetGame();
              }}
            >
              <Text style={styles.restartButtonText}>RESTART</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  topBar: {
    height: 80,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
  },
  scoreContainer: {
    flex: 1,
  },
  scoreLabel: {
    color: COLORS.textSecondary,
    fontSize: 10,
    fontWeight: 'bold',
    letterSpacing: 1,
  },
  scoreValue: {
    color: COLORS.textPrimary,
    fontSize: 24,
    fontWeight: '700',
  },
  progressContainer: {
    flex: 2,
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  progressBarBg: {
    width: '100%',
    height: 8,
    backgroundColor: COLORS.surface,
    borderRadius: 4,
    overflow: 'hidden',
  },
  progressBarFill: {
    height: '100%',
    backgroundColor: COLORS.primary,
  },
  pauseButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: COLORS.surface,
    alignItems: 'center',
    justifyContent: 'center',
  },
  gridWrapper: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: 100,
  },
  gridContainer: {
  },
  comboOverlay: {
    ...StyleSheet.absoluteFillObject,
    alignItems: 'center',
    justifyContent: 'center',
  },
  comboBadge: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  comboMultiplier: {
    fontSize: 64,
    fontWeight: '900',
    color: COLORS.accent,
    textShadowColor: 'rgba(0,0,0,0.5)',
    textShadowOffset: { width: 0, height: 4 },
    textShadowRadius: 8,
  },
  comboText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: COLORS.accent,
    letterSpacing: 2,
    marginTop: -10,
  },
  trayContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 180,
    alignItems: 'center',
    justifyContent: 'center',
  },
  trayBg: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(15, 23, 42, 0.8)',
  },
  shapesTray: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  shapeSlot: {
    width: width / 3.5,
    height: 120,
    alignItems: 'center',
    justifyContent: 'center',
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.7)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  pauseModal: {
    width: '80%',
    backgroundColor: COLORS.surface,
    borderRadius: 24,
    padding: 30,
    alignItems: 'center',
  },
  pauseTitle: {
    fontSize: 32,
    fontWeight: 'bold',
    color: COLORS.textPrimary,
    marginBottom: 30,
  },
  resumeButton: {
    backgroundColor: COLORS.primary,
    width: '100%',
    padding: 16,
    borderRadius: 12,
    alignItems: 'center',
    marginBottom: 12,
  },
  resumeButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  menuButton: {
    backgroundColor: 'rgba(255,255,255,0.05)',
    width: '100%',
    padding: 16,
    borderRadius: 12,
    alignItems: 'center',
    marginBottom: 12,
  },
  menuButtonText: {
    color: COLORS.textPrimary,
    fontSize: 18,
    fontWeight: 'bold',
  },
  restartButton: {
    width: '100%',
    padding: 16,
    alignItems: 'center',
  },
  restartButtonText: {
    color: COLORS.textSecondary,
    fontSize: 16,
    fontWeight: '600',
  },
});
