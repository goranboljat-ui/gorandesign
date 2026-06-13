# Blockwell Combo & Feedback Effects Spec

This document details the visual and kinetic feedback for high-impact gameplay moments.

## 1. Row/Column Clear
- **Animation:** Blocks in the cleared line scale down to 0% and fade out over 150ms.
- **Particles:** A burst of 12-16 small squares (matching the block's color) explodes from the center of each cleared cell.
- **Sound (Reference):** High-pitched "pop" or "ping".

## 2. Combo System (Consecutive Clears)
The intensity of effects scales with the combo multiplier.

### Level 1 (Initial Clear)
- **Visual:** Standard row clear effects.
- **UI:** Small "+100" text floats up from the cleared line.

### Level 2-3 (x2, x3 Combo)
- **Visual:** Subtle screen shake (2px magnitude).
- **UI:** "X2" or "X3" appears in the center of the grid using a **Spring Animation** (Overshoot).
- **Color:** Text glows with the color of the last block placed.

### Level 4-5 (x4, x5 Combo)
- **Visual:** Medium screen shake (5px). White radial flash originating from the center of the grid (10% opacity).
- **UI:** "MEGA COMBO!" text below the multiplier. Text scales up 1.5x.
- **Particles:** Golden "sparkle" particles added to the standard block clear burst.

### Level 6+ (Ultimate Combo)
- **Visual:** Heavy screen shake (8px). Chromatic aberration effect briefly applied to the whole screen (50ms).
- **UI:** Multiplier text pulses with a rainbow gradient.
- **Feedback:** Device haptic vibration (heavy).

## 3. Placement Feedback
- **Ghosting:** When a block is held over a valid spot, a "ghost" version (20% opacity white) appears on the grid.
- **Impact:** Upon release, the grid cells occupied by the block pulse once (scale 1.05x) to acknowledge the placement.
- **Invalid:** If dropped in an invalid spot, the block "shakes" (red tint) and returns to its original slot with a 200ms slide.

## 4. Level Complete / High Score
- **Celebration:** Full-screen confetti burst using the Primary (Indigo) and Secondary (Emerald) brand colors.
- **Overlay:** Background dims to 80% Slate-900.
- **Score Ticker:** The final score count-up animation over 1 second.
