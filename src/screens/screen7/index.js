import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function Screen7() {
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
      </View>
    </SafeAreaView>
  );
}
