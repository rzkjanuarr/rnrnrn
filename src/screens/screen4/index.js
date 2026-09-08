import React from 'react';
import { SafeAreaView, Text, TouchableOpacity, View } from 'react-native';

export default function Screen4({ navigation, route }) {
  const { fromScreen3 } = route.params;

  return (
    <SafeAreaView
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <View style={{ alignItems: 'center', gap: 10 }}>
        <Text>Screen4!</Text>
        <Text style={{ backgroundColor: 'red', color: 'white' }}>
          {fromScreen3}
        </Text>
        <TouchableOpacity
          onPress={() =>
            navigation.navigate('Screen5', {
              fromScreen3: fromScreen3,
              fromScreen4: 'helo ini from Screen4!',
            })
          }
          style={{
            paddingVertical: 8,
            borderWidth: 1,
            borderColor: 'black',
            paddingHorizontal: 24,
          }}>
          <Text>goto Screen5!</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
