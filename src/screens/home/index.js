import React, { useState } from 'react';
import { FlatList, Text, TouchableOpacity, View, Button } from 'react-native';
import { ArrowRight } from 'lucide-react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const data = [
  {
    id: 1,
    name: 'Dashboard 1',
    screen: 'EDashboard1Screen',
  },
  {
    id: 2,
    name: 'Login 1',
    screen: 'ELogin1Screen',
  },
  {
    id: 3,
    name: 'Login 2',
    screen: 'ELogin2Screen',
  },
  {
    id: 4,
    name: 'Latihan',
    screen: 'LatihanScreen',
  },
  {
    id: 5,
    name: 'Latihan2',
    screen: 'Latihan2Screen',
  },
  {
    id: 6,
    name: 'Latihan3',
    screen: 'Latihan3Screen',
  },
  {
    id: 7,
    name: 'PropsDinamis',
    screen: 'PropsDinamisScreen',
  },
  {
    id: 8,
    name: 'ComunicationScreen',
    screen: 'CommunicationScreen',
  },
  {
    id: 9,
    name: 'Comunication2Screen',
    screen: 'Communication2Screen',
  },
  {
    id: 10,
    name: 'SelectedScreen',
    screen: 'SelectedScreen',
  },
  {
    id: 11,
    name: 'ScreenA',
    screen: 'ScreenA',
  },
  {
    id: 12,
    name: 'ScreenB',
    screen: 'ScreenB',
  },
  {
    id: 13,
    name: 'ScreenC',
    screen: 'ScreenC',
  },
  {
    id: 14,
    name: 'Screen1',
    screen: 'Screen1',
  },
  {
    id: 15,
    name: 'Screen2',
    screen: 'Screen2',
  },
  {
    id: 16,
    name: 'Screen3',
    screen: 'Screen3',
  },
  {
    id: 17,
    name: 'Screen4',
    screen: 'Screen4',
  },
  {
    id: 18,
    name: 'Screen5',
    screen: 'Screen5',
  },
];

const HomeScreen = ({ navigation }) => {
  return (
    <SafeAreaView>
      <View style={{}}>
        <FlatList
          horizontal={false}
          showsVerticalScrollIndicator={false}
          data={data}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item: item }) => (
            <TouchableOpacity
              onPress={() => navigation.navigate(item.screen)}
              style={{
                flexDirection: 'row',
                padding: 20,
                backgroundColor: 'black',
                alignItems: 'center',
                marginLeft: 24,
                marginRight: 24,
                marginBottom: 10,
              }}>
              <Text
                style={{
                  color: 'white',
                  fontSize: 16,
                  fontWeight: 'bold',
                  backgroundColor: 'red',
                  paddingVertical: 4,
                  paddingHorizontal: 8,
                  borderRadius: 100,
                  marginRight: 10,
                }}>
                {item.id}
              </Text>
              <Text
                style={{
                  fontSize: 16,
                  color: 'white',
                  fontWeight: 'bold',
                  flex: 1,
                }}>
                {item.name}
              </Text>
              <ArrowRight size={24} color="white" />
            </TouchableOpacity>
          )}
        />
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
