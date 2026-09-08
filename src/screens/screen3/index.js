import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function Screen3({ navigation }) {
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
        <Text>screen 3!</Text>
        <TouchableOpacity
          onPress={() =>
            navigation.navigate('Screen4', { fromScreen3: 'hi fromScreen3' })
          }
          style={{
            paddingVertical: 8,
            borderWidth: 1,
            borderColor: 'black',
            paddingHorizontal: 12,
          }}>
          <Text>goto screen 4!</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
