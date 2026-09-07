import React from 'react';
import { Image, ScrollView, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function PropsDinamisScreen() {
  return (
    <SafeAreaView
      style={{
        flex: 1,
      }}>
      <ScrollView horizontal>
        <Story
          judul="Story 1"
          gambar="https://cdn.phototourl.com/free/2026-09-06-b2ec9893-1d82-4087-ab66-9a2637c58fb9.png"
        />
        <Story
          judul="Story 2"
          gambar="https://cdn.phototourl.com/free/2026-09-06-b2ec9893-1d82-4087-ab66-9a2637c58fb9.png"
        />
        <Story
          judul="Story 3"
          gambar="https://cdn.phototourl.com/free/2026-09-06-b2ec9893-1d82-4087-ab66-9a2637c58fb9.png"
        />
        <Story
          judul="Story 4"
          gambar="https://cdn.phototourl.com/free/2026-09-06-b2ec9893-1d82-4087-ab66-9a2637c58fb9.png"
        />
      </ScrollView>
    </SafeAreaView>
  );
}

const Story = (props) => {
  return (
    <View
      style={{
        width: 120,
        height: 160,
        borderWidth: 1,
        borderColor: 'transparent',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <Image
        source={{
          uri: props.gambar,
        }}
        width={80}
        height={80}
        style={{
          borderRadius: 120 / 2,
          marginBottom: 10,
        }}
      />
      <Text
        ellipsizeMode="tail"
        numberOfLines={2}
        style={{
          textAlign: 'center',
        }}>
        {props.judul}
      </Text>
    </View>
  );
};
