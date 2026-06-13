# Blockwell UI Components & Specs

## 1. Global Styles
- **Corner Radius:**
  - Standard (Buttons, Cards): `8px`
  - Blocks: `4px` (Classic) to `12px` (Candy)
  - Modals/Sheets: `24px` (Top corners only for bottom sheets)
- **Shadows:**
  - `shadow-sm`: `0 1px 2px 0 rgba(0, 0, 0, 0.05)`
  - `shadow-md`: `0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)`
  - `shadow-lg`: `0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)`

## 2. Core Screens
### Navigation Flow
- **Startup:** Splash Screen (Logo) -> Home Screen.
- **Home:** -> Level Select, Shop, Settings, Daily Challenge.
- **Level Select:** -> Gameplay HUD (selected level).
- **Gameplay:** -> Pause Menu, Level Complete/Fail Screen.
- **Shop/Settings/Daily Challenge:** -> Back to Home.

### Home Screen
- **Title:** `BLOCKWELL`, 48pt, Bold, Indigo 500. Margin top: 60dp.
- **Center Section:** Daily Challenge Preview Card (Surface color, 8px rounded, shows today's goal snippet).
- **Primary Action:** `PLAY` (Large, Indigo 600, Rounded 8px). Margin top: 40dp.
- **Secondary Actions:** Row of icons for `Shop`, `Settings`, `Leaderboard` (Slate 800 circles).

### Level Select Screen
- **Header:** Title "LEVELS", 32pt, Bold. Back button (Top Left).
- **Scrollable Area:** Vertical path with nodes.
- **Level Node:** 64x64dp circle. Slate 800 if locked, Indigo 600 if playable, Emerald 600 if completed.
- **Stars:** 1-3 tiny golden stars above completed nodes.
- **Spacing:** Nodes spaced 120dp apart vertically, alternating left/right alignment by 20dp.

### Gameplay HUD
- **Top Bar (Height: 80dp):**
  - Left: Score (Value in Slate 50, Label in Slate 400).
  - Center: Level Progress Bar (Indigo fill, Slate 700 background).
  - Right: Pause Button (Slate 800 icon button, 40x40dp).
- **Grid (Aspect Ratio 1:1):**
  - 8x8 squares.
  - Centered on screen. Padding from edge: 16dp.
- **Combo Meter:** Floating text/gauge near the top of the grid that appears during combo chains.
- **Upcoming Blocks (Bottom Area):**
  - 3 slots, horizontally aligned. Center of slots is 120dp from screen bottom.
  - Scale blocks down to 60% of original size until dragged.

### Shop
- **Header:** Title "SHOP", Tabs: `BLOCKS`, `SKINS`, `SPECIAL`.
- **Pro Unlock Banner:** Amber 600 gradient background, "GET PRO: NO ADS & EXCLUSIVE THEMES", height 80dp.
- **Card Design:** 1:1 square cards, Slate 800, 8px rounded, centered icon of the theme. Price tag at bottom right of card.

### Daily Challenge Screen
- **Title:** "DAILY CHALLENGE", 32pt, Bold.
- **Goal Card:** Large centered card with icon, "Clear 50 rows using only 3 shapes!".
- **Rewards:** Progress bar showing "Coins x100" at 50% and "Special Theme" at 100%.
- **Action:** `START CHALLENGE` button (Emerald 600).
- **Timer:** "Resets in: 14h 22m" (Slate 400 text).

### Settings Screen
- **List Items:** 64dp height each, full width.
- **Layout:** Icon (Left), Label (Center), Toggle/Action (Right).
- **Danger Zone:** `RESET PROGRESS` (Text Red 500, bordered button).

## 3. Interaction & Transitions
- **Screen Transitions:** Horizontal slide (300ms, ease-out-expo).
- **Popups:** Scale-in spring (400ms).
- **Button Hover/Tap:** Darken background by 10%, scale down to 0.98x.
- **Block Drag:** Scale up block to 1.1x, set opacity to 80%.
- **Valid Placement Shadow:** When a block is held over valid cells, highlight cells with a subtle 20% opacity white overlay.

## 4. Theme-Specific Color Tables

### Theme: Neon Cyber
- **Grid Line:** `#22D3EE` (Cyan 400) at 20% opacity.
- **Block Border:** 2px solid neon variant.
- **Glow:** Outer glow 4px spread.

### Theme: Candy
- **Colors:** Vibrant pastels.
- **Highlights:** 4px semi-transparent white "bubble" highlight at top-left of each block.

### Theme: Minimal
- **Colors:** Flat Matte.
- **Grid:** No background cells, just 1px Slate 700 lines.
