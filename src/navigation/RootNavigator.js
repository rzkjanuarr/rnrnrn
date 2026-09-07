import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {
  HomeScreen,
  EDashboard1Screen,
  SplashScreen,
  ELogin1Screen,
  ELogin2Screen,
  LatihanScreen,
  Latihan2Screen,
  PropsDinamisScreen,
  CommunicationScreen,
  Communication2Screen,
} from '../screens';

const Stack = createNativeStackNavigator();

const RootNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="SplashScreen">
      <Stack.Screen
        name="SplashScreen"
        component={SplashScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="EDashboard1Screen"
        component={EDashboard1Screen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="ELogin1Screen"
        component={ELogin1Screen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="ELogin2Screen"
        component={ELogin2Screen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="LatihanScreen"
        component={LatihanScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Latihan2Screen"
        component={Latihan2Screen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Latihan3Screen"
        component={Latihan2Screen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="PropsDinamisScreen"
        component={PropsDinamisScreen}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name="CommunicationScreen"
        component={CommunicationScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Communication2Screen"
        component={Communication2Screen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default RootNavigator;
