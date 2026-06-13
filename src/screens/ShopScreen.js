import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity, SafeAreaView, Alert, Dimensions } from 'react-native';
import { COLORS, UI_SPECS } from '../utils/Constants';
import { ProgressionManager } from '../state/ProgressionManager';
import { AdManager } from '../monetization/AdManager';
import { LinearGradient } from 'expo-linear-gradient';
import { audioManager } from '../utils/AudioManager';
import { ShoppingBag, ArrowLeft, Check, Zap } from 'lucide-react-native';

const { width } = Dimensions.get('window');

export default function ShopScreen({ navigation }) {
  const [coins, setCoins] = useState(0);
  const [unlockedThemes, setUnlockedThemes] = useState(['classic']);
  const [activeTheme, setActiveTheme] = useState('classic');
  const [activeTab, setActiveTab] = useState('BLOCKS');

  useEffect(() => {
    loadShopData();
  }, []);

  const loadShopData = async () => {
    const progress = await ProgressionManager.getProgress();
    setCoins(progress.coins);
    setUnlockedThemes(progress.unlockedThemes);
    setActiveTheme(progress.activeTheme);
  };

  const handleBack = () => {
    audioManager.playSound('ui_click');
    navigation.goBack();
  };

  const handleBuy = async (item) => {
    if (coins >= item.price) {
      audioManager.playSound('purchase');
      await ProgressionManager.addCoins(-item.price);
      await ProgressionManager.unlockTheme(item.id);
      loadShopData();
      Alert.alert("UNLOCKED!", `${item.name} is now yours.`);
    } else {
      audioManager.playSound('ui_click');
      Alert.alert("NOT ENOUGH COINS", "Keep playing to earn more!");
    }
  };

  const handleSelect = async (themeId) => {
    audioManager.playSound('ui_click');
    await ProgressionManager.setActiveTheme(themeId);
    setActiveTheme(themeId);
  };

  const handleTabPress = (tab) => {
    audioManager.playSound('ui_click');
    setActiveTab(tab);
  };

  const handleAdWatch = () => {
    audioManager.playSound('ui_click');
    AdManager.showRewardedVideo(async () => {
      audioManager.playSound('purchase'); 
      await ProgressionManager.addCoins(50);
      loadShopData();
    });
  };

  const renderItem = (item) => {
    const isUnlocked = unlockedThemes.includes(item.id);
    const isActive = activeTheme === item.id;

    return (
      <TouchableOpacity 
        key={item.id}
        style={styles.itemCard}
        onPress={() => isUnlocked ? handleSelect(item.id) : handleBuy(item)}
      >
        <View style={styles.itemIconContainer}>
          <Zap size={32} color={item.id === 'neon' ? '#00f2ff' : COLORS.textPrimary} />
        </View>
        
        <View style={styles.itemFooter}>
          <Text style={styles.itemName}>{item.name}</Text>
          {isActive ? (
            <Check size={16} color={COLORS.secondary} />
          ) : isUnlocked ? (
            <Text style={styles.unlockedText}>USE</Text>
          ) : (
            <View style={styles.priceTag}>
              <Text style={styles.priceText}>{item.price}</Text>
              <Text style={styles.coinMini}>🪙</Text>
            </View>
          )}
        </View>
      </TouchableOpacity>
    );
  };

  const SHOP_ITEMS = [
    { id: 'neon', name: 'NEON CYBER', price: 500 },
    { id: 'candy', name: 'SWEET CANDY', price: 750 },
    { id: 'ocean', name: 'DEEP OCEAN', price: 1000 },
    { id: 'minimal', name: 'MINIMALIST', price: 300 },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
          <ArrowLeft size={24} color={COLORS.textPrimary} />
        </TouchableOpacity>
        <Text style={styles.title}>SHOP</Text>
        <View style={styles.coinBadge}>
          <Text style={styles.coinText}>{coins} 🪙</Text>
        </View>
      </View>

      <View style={styles.tabs}>
        {['BLOCKS', 'SKINS', 'SPECIAL'].map(tab => (
          <TouchableOpacity 
            key={tab} 
            onPress={() => setActiveTab(tab)}
            style={[styles.tab, activeTab === tab && styles.activeTab]}
          >
            <Text style={[styles.tabText, activeTab === tab && styles.activeTabText]}>{tab}</Text>
          </TouchableOpacity>
        ))}
      </View>

      <ScrollView contentContainerStyle={styles.scrollContent}>
        <LinearGradient
          colors={['#F59E0B', '#D97706']}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          style={styles.proBanner}
        >
          <View>
            <Text style={styles.proTitle}>GET PRO</Text>
            <Text style={styles.proSubtitle}>NO ADS & EXCLUSIVE THEMES</Text>
          </View>
          <TouchableOpacity 
            style={styles.proButton}
            onPress={() => Alert.alert("PRO UNLOCK", "This would trigger an IAP.")}
          >
            <Text style={styles.proButtonText}>$3.99</Text>
          </TouchableOpacity>
        </LinearGradient>

        <TouchableOpacity 
          style={styles.adRewardCard}
          onPress={() => AdManager.showRewardedVideo(async () => {
            await ProgressionManager.addCoins(50);
            loadShopData();
          })}
        >
          <Text style={styles.adRewardText}>📺 WATCH AD FOR 50 🪙</Text>
        </TouchableOpacity>

        <View style={styles.grid}>
          {SHOP_ITEMS.map(renderItem)}
        </View>
      </ScrollView>
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
    fontSize: 24,
    fontWeight: 'bold',
    color: COLORS.textPrimary,
  },
  coinBadge: {
    backgroundColor: COLORS.surface,
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 20,
  },
  coinText: {
    color: COLORS.accent,
    fontWeight: 'bold',
  },
  tabs: {
    flexDirection: 'row',
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  tab: {
    marginRight: 24,
    paddingVertical: 8,
  },
  activeTab: {
    borderBottomWidth: 2,
    borderBottomColor: COLORS.primary,
  },
  tabText: {
    color: COLORS.textSecondary,
    fontWeight: 'bold',
    fontSize: 14,
  },
  activeTabText: {
    color: COLORS.primary,
  },
  scrollContent: {
    padding: 20,
  },
  proBanner: {
    height: 100,
    borderRadius: 16,
    padding: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  proTitle: {
    color: 'white',
    fontSize: 20,
    fontWeight: '900',
  },
  proSubtitle: {
    color: 'rgba(255,255,255,0.8)',
    fontSize: 10,
    fontWeight: 'bold',
  },
  proButton: {
    backgroundColor: 'white',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 8,
  },
  proButtonText: {
    color: '#D97706',
    fontWeight: 'bold',
  },
  adRewardCard: {
    backgroundColor: COLORS.surface,
    padding: 16,
    borderRadius: 12,
    alignItems: 'center',
    marginBottom: 30,
    borderWidth: 1,
    borderColor: 'rgba(245, 158, 11, 0.3)',
  },
  adRewardText: {
    color: COLORS.accent,
    fontWeight: 'bold',
    fontSize: 14,
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  itemCard: {
    width: (width - 60) / 2,
    aspectRatio: 1,
    backgroundColor: COLORS.surface,
    borderRadius: 16,
    padding: 16,
    marginBottom: 20,
    justifyContent: 'space-between',
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.05)',
  },
  itemIconContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  itemFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  itemName: {
    color: COLORS.textSecondary,
    fontSize: 10,
    fontWeight: 'bold',
  },
  priceTag: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  priceText: {
    color: COLORS.accent,
    fontWeight: 'bold',
    fontSize: 12,
  },
  coinMini: {
    fontSize: 10,
    marginLeft: 2,
  },
  unlockedText: {
    color: COLORS.secondary,
    fontSize: 10,
    fontWeight: 'bold',
  },
});
