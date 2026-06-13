# Blockwell Sound Design & Music Specification

## Art Direction: "Tactile, Satisfying & Focused"
The audio for Blockwell should feel premium, clean, and responsive. Every interaction should provide "juicy" feedback that rewards the player without being over-stimulating. The aesthetic is "Modern Minimalist" with a touch of "Magical Lo-fi".

---

## 1. Background Music (BGM)
- **Style:** Calm Lo-fi / Focus Puzzle Music.
- **Instrumentation:** 
    - Soft Electric Piano (Fender Rhodes style).
    - Muted, jazzy guitar pluck (reverb-heavy).
    - Minimalist, organic beats (soft kicks, wooden rimshots).
    - Sub-bass for warmth.
- **Tempo:** 80–90 BPM.
- **Behavior:** 
    - Seamless loop.
    - Volume should be low enough to allow SFX to "pop".
    - Ducking: Music volume should dip by 15% momentarily when high-score or combo SFX trigger.

---

## 2. Gameplay Sound Effects (SFX)

### Core Interactions
- **sfx_block_pickup:** A short, high-frequency "tink" or "pop". (0.1s)
- **sfx_block_place:** A solid, low-mid frequency "thud" or "wood-block tap". Feels like a piece snapping into place. (0.2s)
- **sfx_block_invalid:** A soft, dual-tone "thud" with a slight buzz or haptic feel. Discouraging but not harsh. (0.2s)

### Clearing Mechanics
- **sfx_line_clear:** A crisp, glass-like "shimmer" or "ping". 
- **sfx_combo_1 (x2):** The line clear sound, but pitched up a minor third.
- **sfx_combo_2 (x3):** Pitched up a perfect fifth.
- **sfx_combo_3 (x5+):** Pitched up an octave with added sparkle/reverb.

### Special Blocks
- **sfx_bomb_exec:** A muffled, deep "boom". More bass than noise. (0.5s)
- **sfx_lightning_exec:** A sharp "zap" followed by a quick static crackle. (0.3s)
- **sfx_rainbow_exec:** A magical, ascending harp or chime sweep. (0.8s)

---

## 3. Feedback & UI
- **sfx_level_complete:** A short (2s) triumphant major-chord melody played on a soft synth.
- **sfx_daily_complete:** A longer version of Level Complete, ending with a "chest opening" wooden creak.
- **sfx_ui_click:** A neutral, very short "blip".
- **sfx_purchase:** A pleasant "cha-ching" or a high-frequency coin chime.
- **sfx_game_over:** A soft, descending minor scale ending in a dampened thud.

---

## 4. Implementation Guidelines (for Developer)
- **Engine:** Use `expo-av` for audio playback.
- **Variation:** For `sfx_block_place`, use 3 slightly different pitch variations to avoid "ear fatigue".
- **Haptics:** Sync strong haptics with `sfx_line_clear` and `sfx_bomb_exec`. Use light haptics for `sfx_block_place`.
