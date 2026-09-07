import React from 'react';
import { Text, View } from 'react-native';

export default function EmptyDataComponent() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>yah, maaf data tidak ditemukan!</Text>
    </View>
  );
}
