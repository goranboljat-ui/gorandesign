# Blockwell Animation & Celebration Spec

This document provides technical specifications for all visual feedback, animations, and celebrations within Blockwell. Designed for implementation using `react-native-reanimated`.

## 1. Interaction Feedback

### Block Placement
- **Trigger:** Block dropped on a valid grid location.
- **Scale Animation:** Scale from 1.1x (drag state) to 1.0x over 150ms (`Easing.out(Easing.back(1.5))`).
- **Glow Effect:** A brief 200ms white inner-glow pulse (opacity 0 -> 0.4 -> 0).
- **Haptics:** Light impact.

### Invalid Placement
- **Trigger:** Block dropped on invalid location or blocked by existing pieces.
- **Shake Animation:** Horizontal shake (+/- 4dp) 3 times over 200ms.
- **Color Overlay:** Brief red tint (`#EF4444`) at 20% opacity.
- **Return:** Slide back to original slot over 250ms (`Easing.inOut(Easing.quad)`).

---

## 2. Line Clearing & Combos

### Standard Line Clear
- **Block Shatter:** Each block in the line scales to 0.4x while fading to 0 opacity over 200ms.
- **Particle Burst:** 12-16 particles per cell. 
  - **Shape:** Squares (2dp to 4dp).
  - **Color:** Match cleared block color.
  - **Physics:** Random velocity in 360 degrees, decelerating over 400ms.
- **Grid Flash:** The specific row/column background cells flash white (15% opacity) for 100ms.

### Combo Text Popup
- **Trigger:** Consecutive line clears.
- **Animation:** Text ("2x Combo!", etc.) scales from 0.5x to 1.2x then settles at 1.0x.
- **Timing:** 400ms duration.
- **Easing:** `withSpring` (damping: 12, stiffness: 100).
- **Visual:** Text has a drop shadow and a slight outer glow matching the combo level color (Indigo for 2x, Emerald for 3x, Amber for 5x+).

---

## 3. Special Block Effects

### Bomb Block
- **Trigger:** Bomb block placed.
- **Shockwave:** A circular stroke (`#F59E0B`) expands from the placement center to a 3-cell radius.
  - **Animation:** Radius 0 to 150dp, border-width 4 to 0.
  - **Duration:** 350ms.
- **Particles:** 40+ large firework-style particles (Amber/Orange).

### Lightning Block
- **Trigger:** Lightning block placed.
- **Bolt Arc:** A jagged white/cyan line flashes across the target row/column.
  - **Animation:** 2 frames of different jagged paths (total 100ms).
- **Screen Flash:** Entire screen flashes white (10% opacity) for 50ms.
- **Haptics:** Heavy vibration.

### Rainbow Block
- **Trigger:** Rainbow block placed.
- **Ripple Effect:** A color-cycling wave (Rainbow gradient) ripples outward from the block across all cleared pieces.
  - **Easing:** `Easing.bezier(0, 0.5, 0.5, 1)`.
  - **Duration:** 600ms.

---

## 4. Celebrations & Rewards

### Level Complete
- **Text:** "LEVEL COMPLETE" slides down from top with `Easing.bounce`.
- **Stars:** Stars (1-3) pop in one-by-one with 200ms delay between each.
  - **Animation:** Scale 0 to 1.1 then 1.0.
- **Confetti:** Continuous burst of Indigo and Emerald confetti from the top corners for 2 seconds.

### Daily Challenge Reward
- **Coin Shower:** 30+ coin icons (`#F59E0B`) fall from the top of the screen to the "Total Coins" HUD element.
  - **Path:** Slightly randomized arc.
  - **Timing:** Randomized start times over 1 second.
- **HUD Pulse:** The coin counter scale-pulses (1.2x) as each coin "hits" it.

---

## 5. Screen Navigation

### General Transitions
- **Slide & Fade:** New screen slides from Right to Left (300ms) while the old screen fades out and slides Left.
- **Easing:** `Easing.out(Easing.expo)`.

### Modal / Popup Overlay
- **Entrance:** Scale up from 0.8x to 1.0x with `withSpring`.
- **Background Dim:** Slate-900 overlay fades from 0 to 0.7 opacity over 300ms.
