import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';

import HomeScreen from './src/screens/HomeScreen';
import GameScreen from './src/screens/GameScreen';
import LevelSelectScreen from './src/screens/LevelSelectScreen';
import ShopScreen from './src/screens/ShopScreen';
import SettingsScreen from './src/screens/SettingsScreen';
import DailyChallengeScreen from './src/screens/DailyChallengeScreen';

import { GestureHandlerRootView } from 'react-native-gesture-handler';

const Stack = createNativeStackNavigator();

function App() {
  //console.log('App is rendering');
  if (typeof window !== 'undefined') {
  }
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <NavigationContainer>
        <Stack.Navigator 
          initialRouteName="Home"
          screenOptions={{
            headerShown: false,
            animation: 'slide_from_right', // Horizontal slide
            animationDuration: 300,
          }}
        >
          <Stack.Screen 
            name="Home" 
            component={HomeScreen} 
            options={{ headerShown: false }}
          />
          <Stack.Screen 
            name="LevelSelect" 
            component={LevelSelectScreen} 
            options={{ headerShown: false }}
          />
          <Stack.Screen 
            name="Game" 
            component={GameScreen} 
            options={{ headerShown: false }}
          />
          <Stack.Screen 
            name="Shop" 
            component={ShopScreen} 
            options={{ headerShown: false }}
          />
          <Stack.Screen 
            name="Settings" 
            component={SettingsScreen} 
            options={{ headerShown: false }}
          />
          <Stack.Screen 
            name="DailyChallenge" 
            component={DailyChallengeScreen} 
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
        <StatusBar style="light" />
      </NavigationContainer>
    </GestureHandlerRootView>
  );
}

export default App;
