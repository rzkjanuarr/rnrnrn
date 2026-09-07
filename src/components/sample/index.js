import React, { Component } from 'react';
import { Image, Text, TextInput, View } from 'react-native';

const SampleComponent = () => {
  return (
    <View>
      <Text>hello!</Text>
      <Rizki />
      <View style={{ backgroundColor: '#000000', width: 80, height: 80 }} />
      <Photo />
      <TextInput style={{ borderWidth: 2 }} />
      <BoxGreen />
      <Profile />
    </View>
  );
};

const Rizki = () => {
  return <Text>Rizki Januar Irmansyah</Text>;
};

const Photo = () => {
  return (
    <Image
      source={{
        uri: 'https://plus.unsplash.com/premium_photo-1664203067979-47448934fd97?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      }}
      style={{ width: 100, height: 100 }}
    />
  );
};

class BoxGreen extends Component {
  render() {
    return <Text>Ini text dari class Component!</Text>;
  }
}

class Profile extends Component {
  render() {
    return (
      <View>
        <Image
          source={{
            uri: 'https://images.unsplash.com/photo-1616766098946-e4fabb7d6da0?q=80&w=774&auto=format&fiddt=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
          }}
          style={{ width: 100, height: 100, borderRadius: 50 }}
        />
        <Text>ini profile!</Text>
      </View>
    );
  }
}

export default SampleComponent;
