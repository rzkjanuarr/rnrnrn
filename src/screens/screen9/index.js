import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function Screen9({ navigation, route }) {
  const { fromScreen6, fromScreen7, fromScreen8 } = route.params;
  const handleNavScreen9 = () => {
    navigation.navigate('Screen10', {
      fromScreen6: fromScreen6,
      fromScreen8: fromScreen8,
      fromScreen7: fromScreen7,
      fromScreen9: 'gue dari screen 9!',
    });
  };

  return (
    <SafeAreaView
      style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <View
        style={{
          alignItems: 'center',
          gap: 10,
        }}>
        <Text>screen9!</Text>
        <TouchableOpacity
          onPress={handleNavScreen9}
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: 'black',
            paddingVertical: 12,
            paddingHorizontal: 12,
          }}>
          <Text
            style={{
              color: 'white',
            }}>
            goto screen10!
          </Text>
        </TouchableOpacity>
        <View>
          <Text
            style={{
              backgroundColor: 'red',
              paddingVertical: 10,
              paddingHorizontal: 10,
              color: 'white',
            }}>
            {fromScreen6}
          </Text>
          <Text
            style={{
              backgroundColor: 'red',
              paddingVertical: 10,
              paddingHorizontal: 10,
              color: 'white',
            }}>
            {fromScreen7}
          </Text>
          <Text
            style={{
              backgroundColor: 'red',
              paddingVertical: 10,
              paddingHorizontal: 10,
              color: 'white',
            }}>
            {fromScreen8}
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
}
