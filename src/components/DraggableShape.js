import React from 'react';
import { View, StyleSheet } from 'react-native';
import { GestureDetector, Gesture } from 'react-native-gesture-handler';
import Animated, { 
  useAnimatedStyle, 
  useSharedValue, 
  withSpring, 
  withTiming,
  runOnJS 
} from 'react-native-reanimated';
import { audioManager } from '../utils/AudioManager';
import { hapticManager } from '../utils/HapticManager';
import { COLORS, CELL_SIZE, UI_SPECS, THEMES } from '../utils/Constants';
import { LinearGradient } from 'expo-linear-gradient';

const playPickupSound = () => {
  audioManager.playVaryingSound('block_pickup');
  hapticManager.selection();
};

const DraggableShape = ({ shape, onDrop, themeId = 'classic' }) => {
  const theme = THEMES[themeId] || THEMES.classic;
  const translateX = useSharedValue(0);
  const translateY = useSharedValue(0);
  const scale = useSharedValue(0.6);
  const isDragging = useSharedValue(false);
  const opacity = useSharedValue(1);

  const startX = useSharedValue(0);
  const startY = useSharedValue(0);

  const gesture = Gesture.Pan()
    .onStart((event) => {
      runOnJS(playPickupSound)();
      isDragging.value = true;
      scale.value = withSpring(1.1);
      opacity.value = withTiming(theme.opacity * 0.8);
      startX.value = event.x;
      startY.value = event.y;
    })
    .onUpdate((event) => {
      translateX.value = event.translationX;
      translateY.value = event.translationY - 60;
    })
    .onEnd((event) => {
      const dropX = event.absoluteX - startX.value;
      const dropY = event.absoluteY - startY.value - 60;

      runOnJS(onDrop)(shape, dropX, dropY);
      
      translateX.value = withSpring(0);
      translateY.value = withSpring(0);
      scale.value = withSpring(0.6);
      opacity.value = withTiming(1);
      isDragging.value = false;
    });

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [
      { translateX: translateX.value },
      { translateY: translateY.value },
      { scale: scale.value },
    ],
    zIndex: isDragging.value ? 100 : 1,
    opacity: opacity.value,
  }));

  return (
    <GestureDetector gesture={gesture}>
      <Animated.View style={[styles.container, animatedStyle]}>
        {shape.matrix.map((row, r) => (
          <View key={r} style={styles.row}>
            {row.map((cell, c) => (
              <View
                key={`${r}-${c}`}
                style={[
                  styles.cell,
                  { 
                    backgroundColor: cell === 1 ? (shape.color === 'rainbow' ? 'transparent' : shape.color) : 'transparent',
                    borderRadius: theme.borderRadius,
                    borderWidth: cell === 1 ? theme.borderWidth : 0,
                    borderColor: theme.borderColor === 'currentColor' ? shape.color : theme.borderColor,
                  }
                ]}
              >
                {cell === 1 && theme.highlight && (
                  <View style={styles.highlight} />
                )}
                {cell === 1 && shape.color === 'rainbow' && (
                  <LinearGradient
                    colors={['#FF0000', '#FF7F00', '#FFFF00', '#00FF00', '#0000FF', '#4B0082', '#8B00FF']}
                    style={[StyleSheet.absoluteFill, { borderRadius: theme.borderRadius }]}
                  />
                )}
              </View>
            ))}
          </View>
        ))}
      </Animated.View>
    </GestureDetector>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 2,
  },
  row: {
    flexDirection: 'row',
  },
  cell: {
    width: CELL_SIZE,
    height: CELL_SIZE,
    margin: 1,
    position: 'relative',
    overflow: 'hidden',
  },
  highlight: {
    position: 'absolute',
    top: 4,
    left: 4,
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: 'rgba(255,255,255,0.4)',
  }
});

export default DraggableShape;
