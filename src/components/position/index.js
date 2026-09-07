import { View, Text, Image } from 'react-native';
import React from 'react';

export default function PositionReactNative() {
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <View
        style={{
          borderWidth: 1,
          borderColor: 'blue',
          width: 100,
          height: 100,
          borderRadius: 100 / 2,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Image
          source={{
            uri: 'https://cdn-icons-png.flaticon.com/128/3737/3737173.png',
          }}
          style={{ width: 50, height: 50 }}
        />
        <Text
          style={{
            fontSize: 12,
            fontWeight: 'bold',
            backgroundColor: 'red',
            color: 'white',
            padding: 4,
            borderRadius: 25,
            position: 'absolute',
            top: 0,
            right: 0,
          }}>
          10
        </Text>
      </View>
      <Text
        style={{
          fontSize: 18,
          fontWeight: 'bold',
          marginTop: 10,
        }}>
        Keranjang
      </Text>
    </View>
  );
}
