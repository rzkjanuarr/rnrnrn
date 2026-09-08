import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function Screen9() {
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
      </View>
    </SafeAreaView>
  );
}
