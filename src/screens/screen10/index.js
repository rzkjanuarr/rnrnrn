import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function Screen10() {
  return (
    <SafeAreaView
      style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <View
        styule={{
          gap: 10,
          alignItems: 'center',
        }}>
        <Text>screen 10!</Text>
        <TouchableOpacity
          style={{
            paddingVertical: 12,
            paddingHorizontal: 12,
            backgroundColor: 'red',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text style={{ color: 'white' }}>done!!!</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
