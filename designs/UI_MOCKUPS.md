# Blockwell Pixel-Perfect UI Mockups & Layout Specs

This document provides exact dimensions, spacing, and alignment for the developer to implement the UI.

## 1. Global Metrics
- **Base Unit:** 4dp
- **Standard Padding:** 16dp (4 units)
- **Safe Area:** Top 44dp, Bottom 34dp (approx. for modern mobile displays)

---

## 2. Screen: Home
- **Container:** Flex Column, Center Alignment.
- **Title (`BLOCKWELL`):** 
  - Font Size: 48pt
  - Weight: 700
  - Margin Top: 64dp
- **Daily Challenge Card:**
  - Width: 320dp
  - Height: 120dp
  - Background: Slate 800
  - Radius: 12dp
  - Content: Center aligned icon (48x48) + Text (16pt).
- **Play Button:**
  - Width: 200dp
  - Height: 64dp
  - Margin Top: 48dp
  - Font Size: 24pt, Bold.
- **Icon Row (Shop, Settings, Stats):**
  - Spacing: 24dp between icons.
  - Icon Size: 56dp circle.

---

## 3. Screen: Level Select
- **Header (Title + Back):**
  - Height: 56dp
  - Title Center Aligned.
- **Level Grid/Path:**
  - Level Node Size: 72dp circle.
  - Spacing: 100dp vertical gap between node centers.
  - Horizontal Offset: Alternate +/- 32dp from center line.
- **Star Rating:**
  - 3 stars (16x16dp each) arranged in an arc above the node.

---

## 4. Screen: Gameplay HUD
- **Top Bar:**
  - Height: 80dp.
  - Content Padding: 16dp horizontal.
- **Score Display:**
  - Label: 12pt, Slate 400.
  - Value: 24pt, Slate 50.
- **Progress Bar:**
  - Width: 180dp.
  - Height: 12dp.
  - Radius: 6dp.
- **Grid (8x8):**
  - Cell Size: 44x44dp.
  - Cell Gap: 2dp.
  - Border: 2dp Slate 700.
- **Next Piece Slots:**
  - 3 Slots: 96x96dp each.
  - Scaling: Pieces are scaled down to 50% until picked up.
  - Horizontal Spacing: 12dp gap.

---

## 5. Screen: Shop
- **Tab Bar:**
  - Height: 48dp.
  - Text: 14pt, Medium.
- **Grid Item Card:**
  - 150x150dp square.
  - Radius: 8dp.
  - Padding: 12dp.
- **Pro Banner:**
  - Height: 100dp.
  - Radius: 0 (Full width).
  - Background: Amber-600 to Amber-700 Gradient (Linear 45deg).

---

## 6. Daily Challenge
- **Title:** "DAILY CHALLENGE", 32pt.
- **Icon Section:** 120dp height image/icon centered.
- **Description:** 18pt, Center aligned, max-width 280dp.
- **Button:** 240dp width, 56dp height.

---

## 7. Interaction States
- **Scale Pulse (Buttons):** 1.0 -> 0.95 -> 1.0 on tap.
- **Drag Lift:** Scale up to 1.15x immediately on touch start.
- **Row Clear Flash:** 100ms pure white overlay at 40% opacity on the entire row before particles burst.
