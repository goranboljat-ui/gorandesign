import { Platform } from "react-native";

const isWeb = Platform.OS === "web";

let Audio, AudioModule;
if (!isWeb) {
  Audio = require("expo-av").Audio;
} else {
  AudioModule = { Sound: { createAsync: () => Promise.resolve({ sound: { setOnPlaybackStatusUpdate: () => {}, unloadAsync: () => {} } }) } };
  Audio = { Sound: AudioModule.Sound };
}

import { ProgressionManager } from "../state/ProgressionManager";

const SOUNDS = {};
if (!isWeb) {
  try {
    const s = {
      block_pickup: require("../assets/audio/sfx_block_pickup.ogg"),
      block_place: require("../assets/audio/sfx_block_place.ogg"),
      bomb: require("../assets/audio/sfx_bomb.ogg"),
      combo_1: require("../assets/audio/sfx_combo_1.ogg"),
      combo_2: require("../assets/audio/sfx_combo_2.ogg"),
      combo_3: require("../assets/audio/sfx_combo_3.ogg"),
      daily_complete: require("../assets/audio/sfx_daily_complete.ogg"),
      game_over: require("../assets/audio/sfx_game_over.ogg"),
      level_complete: require("../assets/audio/sfx_level_complete.ogg"),
      lightning: require("../assets/audio/sfx_lightning.ogg"),
      line_clear: require("../assets/audio/sfx_line_clear.ogg"),
      purchase: require("../assets/audio/sfx_purchase.ogg"),
      rainbow: require("../assets/audio/sfx_rainbow.ogg"),
      ui_click: require("../assets/audio/sfx_ui_click.ogg"),
    };
    Object.assign(SOUNDS, s);
  } catch (e) {
    console.log("Audio file load skipped (web):", e.message);
  }
}

class AudioManager {
  constructor() {
    this.enabled = true;
    this.soundObjects = {};
    if (!isWeb) {
      this.init();
    } else {
      this.enabled = false;
    }
  }

  async init() {
    try {
      const progress = await ProgressionManager.getProgress();
      this.enabled = progress.soundEnabled !== false;
    } catch (e) {
      this.enabled = false;
    }
  }

  setEnabled(enabled) {
    this.enabled = enabled;
  }

  async playSound(soundKey, pitch = 1.0) {
    if (!this.enabled || !SOUNDS[soundKey] || isWeb) return;
    try {
      const { sound } = await Audio.Sound.createAsync(
        SOUNDS[soundKey],
        { shouldPlay: true, pitch, shouldCorrectPitch: true }
      );
      sound.setOnPlaybackStatusUpdate((status) => {
        if (status.didJustFinish) sound.unloadAsync();
      });
    } catch (error) {
      console.error("Error playing sound " + soundKey + ":", error);
    }
  }

  playVaryingSound(soundKey) {
    const randomPitch = 0.9 + Math.random() * 0.2;
    this.playSound(soundKey, randomPitch);
  }
}

export const audioManager = new AudioManager();
