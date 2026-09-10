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
  SelectedScreen,
  ScreenA,
  ScreenB,
  ScreenC,
  Screen1,
  Screen2,
  Screen3,
  Screen4,
  Screen5,
  Screen6,
  Screen7,
  Screen8,
  Screen9,
  Screen10,
  Screen11,
  Screen12,
  Screen13,
  Screen14,
  Screen15,
  Screen16,
} from '../screens';
import { BackFABComponent } from '../components';
import { View } from 'react-native';

const Stack = createNativeStackNavigator();

const RootNavigator = () => {
  return (
    <View style={{ flex: 1 }}>
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
        <Stack.Screen
          name="SelectedScreen"
          component={SelectedScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="ScreenA"
          component={ScreenA}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="ScreenB"
          component={ScreenB}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="ScreenC"
          component={ScreenC}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Screen1"
          component={Screen1}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Screen2"
          component={Screen2}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Screen3"
          component={Screen3}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Screen4"
          component={Screen4}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Screen5"
          component={Screen5}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Screen6"
          component={Screen6}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Screen7"
          component={Screen7}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Screen8"
          component={Screen8}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Screen9"
          component={Screen9}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Screen10"
          component={Screen10}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Screen11"
          component={Screen11}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Screen12"
          component={Screen12}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Screen13"
          component={Screen13}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Screen14"
          component={Screen14}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Screen15"
          component={Screen15}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Screen16"
          component={Screen16}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
      <BackFABComponent />
    </View>
  );
};

export default RootNavigator;
