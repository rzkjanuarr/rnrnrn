import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function Screen7({ navigation, route }) {
  const { fromScreen6 } = route.params;
  const handleNavScreen7 = () => {
    navigation.navigate('Screen8', {
      fromScreen6: fromScreen6,
      fromScreen7: 'gue dari screen 7 bro!',
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
        <Text>screen7!</Text>
        <TouchableOpacity
          onPress={handleNavScreen7}
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
            goto screen8!
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
        </View>
      </View>
    </SafeAreaView>
  );
}
