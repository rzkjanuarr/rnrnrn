import React from 'react';
import { SafeAreaView, Text, TouchableOpacity, View } from 'react-native';

export default function Screen6({ navigation }) {
  const handleNav = () => {
    navigation.navigate('Screen7', {
      fromScreen6: 'gue dari screen6 bro!',
    });
  };

  return (
    <SafeAreaView
      style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <View style={{ alignItems: 'center', gap: 10 }}>
        <Text>screen6!</Text>
        <TouchableOpacity
          onPress={handleNav}
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
            goto screen7!
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
