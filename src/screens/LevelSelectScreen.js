import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity, SafeAreaView } from 'react-native';
import { ProgressionManager } from '../state/ProgressionManager';
import { LEVELS } from '../game/LevelData';
import { COLORS, UI_SPECS } from '../utils/Constants';
import { audioManager } from '../utils/AudioManager';
import { ArrowLeft, Star, Lock } from 'lucide-react-native';

export default function LevelSelectScreen({ navigation }) {
  const [progress, setProgress] = useState(null);

  useEffect(() => {
    loadProgress();
  }, []);

  const loadProgress = async () => {
    const p = await ProgressionManager.getProgress();
    setProgress(p);
  };

  const handleBack = () => {
    audioManager.playSound('ui_click');
    navigation.goBack();
  };

  const handleLevelPress = (item) => {
    audioManager.playSound('ui_click');
    navigation.navigate('Game', { level: item });
  };

  const renderLevelNode = (item, index) => {
    const levelProgress = progress?.completedLevels[item.id];
    const isCompleted = !!levelProgress;
    const isUnlocked = index === 0 || progress?.completedLevels[LEVELS[index - 1].id];
    
    // Alternating offset
    const horizontalOffset = index % 2 === 0 ? 20 : -20;

    let nodeColor = COLORS.surface; // Locked
    if (isCompleted) nodeColor = COLORS.secondary;
    else if (isUnlocked) nodeColor = COLORS.primary;

    return (
      <View key={item.id} style={[styles.nodeWrapper, { transform: [{ translateX: horizontalOffset }] }]}>
        <TouchableOpacity 
          style={[styles.node, { backgroundColor: nodeColor }]}
          disabled={!isUnlocked}
          onPress={() => handleLevelPress(item)}
        >
          {isUnlocked ? (
            <Text style={styles.nodeText}>{item.id}</Text>
          ) : (
            <Lock size={20} color="rgba(255,255,255,0.3)" />
          )}
        </TouchableOpacity>
        
        {isUnlocked && (
          <View style={styles.starsOverlay}>
            {[1, 2, 3].map(s => (
              <Star 
                key={s} 
                size={12} 
                color={s <= (levelProgress?.stars || 0) ? '#FFD700' : 'rgba(255,255,255,0.1)'} 
                fill={s <= (levelProgress?.stars || 0) ? '#FFD700' : 'transparent'}
              />
            ))}
          </View>
        )}
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={handleBack} style={styles.backButton}>
          <ArrowLeft size={24} color={COLORS.textPrimary} />
        </TouchableOpacity>
        <Text style={styles.title}>LEVELS</Text>
        <View style={{ width: 40 }} /> {/* Spacer */}
      </View>
      
      <FlatList
        data={LEVELS}
        renderItem={({ item, index }) => renderLevelNode(item, index)}
        keyExtractor={item => item.id.toString()}
        contentContainerStyle={styles.listContent}
        showsVerticalScrollIndicator={false}
      />
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
    fontSize: 32,
    fontWeight: 'bold',
    color: COLORS.textPrimary,
    letterSpacing: 2,
  },
  listContent: {
    paddingVertical: 60,
    alignItems: 'center',
  },
  nodeWrapper: {
    height: 120, // 120dp vertical spacing
    alignItems: 'center',
    justifyContent: 'center',
  },
  node: {
    width: 64,
    height: 64,
    borderRadius: 32,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 6,
    elevation: 8,
  },
  nodeText: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
  starsOverlay: {
    position: 'absolute',
    top: -20,
    flexDirection: 'row',
  },
});
