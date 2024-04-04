import 'react-native-gesture-handler';
import React, {useEffect} from 'react';
import {StyleSheet, Text, LogBox} from 'react-native';
// Navigation
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
// Screen
import {SplashScreen, Home, DetailHome, Setting} from './Screen';
import {navigationRef} from '../src/Function/Nav';
const Stack = createStackNavigator();

const Root = () => {
  useEffect(() => {
    LogBox.ignoreLogs(['VirtualizedLists should never be nested']);
  }, []);

  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator
        initialRouteName="SplashScreen"
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="SplashScreen" component={SplashScreen} />
        <Stack.Screen
          screenOptions={{
            headerShown: false,
          }}
          name="HomeScreen"
          component={Home}
        />
        <Stack.Screen name="DetailHome" component={DetailHome} />
        <Stack.Screen name="SettingScreen" component={Setting} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Root;
