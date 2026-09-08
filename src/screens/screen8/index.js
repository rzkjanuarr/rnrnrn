import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function Screen8({ navigation, route }) {
  const { fromScreen6, fromScreen7 } = route.params;
  const handleNavScreen8 = () => {
    navigation.navigate('Screen9', {
      fromScreen6: fromScreen6,
      fromScreen7: fromScreen7,
      fromScreen8: 'gue dari screen 8 bro!',
    });
  };

  return (
    <SafeAreaView
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <View
        style={{
          alignItems: 'center',
          gap: 10,
        }}>
        <Text>screen8!</Text>
        <TouchableOpacity
          onPress={handleNavScreen8}
          style={{
            paddingVertical: 12,
            paddingHorizontal: 12,
            backgroundColor: 'black',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Text
            style={{
              color: 'white',
            }}>
            goto Screen9!
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
        </View>
      </View>
    </SafeAreaView>
  );
}
