import React from 'react';
import { View, Text, TextInput, TouchableOpacity, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const ELogin2Screen = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ justifyContent: 'center', alignItems: 'center', flex: 1 }}>
        <RenderHeader />
        <RenderInputContent />
      </View>
    </SafeAreaView>
  );
};

const RenderHeader = () => {
  return (
    <View>
      <Text style={{ fontSize: 20, fontWeight: 'bold' }}>LOGIN</Text>
    </View>
  );
};

const RenderInputContent = () => {
  return (
    <View
      style={{
        width: '100%',
        paddingHorizontal: 24,
        flexDirection: 'column',
        gap: 12,
        marginTop: 50,
      }}>
      <Text>
        Email <Text style={{ color: 'red' }}>*</Text>
      </Text>
      <TextInput
        keyboardType="email-address"
        placeholder="doe@gmail.com"
        placeholderTextColor="grey"
        style={{
          borderWidth: 1,
          borderColor: 'black',
          width: '100%',
          paddingHorizontal: 20,
          paddingVertical: 10,
        }}
      />
      <Text>
        Password <Text style={{ color: 'red' }}>*</Text>
      </Text>
      <TextInput
        secureTextEntry={true}
        placeholder="pass1word!"
        placeholderTextColor="grey"
        style={{
          borderWidth: 1,
          borderColor: 'black',
          width: '100%',
          paddingHorizontal: 20,
          paddingVertical: 10,
        }}
      />
      <TouchableOpacity onPress={() => console.log('test!')}>
        <Text style={{ color: 'black', fontWeight: '300', fontSize: 14 }}>
          Remember me?
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          backgroundColor: '#00a8cd',
          width: '100%',
          justifyContent: 'center',
          alignItems: 'center',
          paddingVertical: 10,
        }}>
        <Text
          style={{
            fontSize: 16,
            fontWeight: 'bold',
            color: 'white',
          }}>
          LOGIN
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => console.log('hi!')}
        style={{
          backgroundColor: 'transparent',
          width: '100%',
          alignItems: 'flex-end',
        }}>
        <Text
          style={{
            fontSize: 12,
            fontWeight: 'bold',
            color: 'black',
          }}>
          Forgot Password?
        </Text>
      </TouchableOpacity>
      <View
        style={{
          backgroundColor: '#DFE4EA',
          width: '100%',
          paddingVertical: 1,
          borderRadius: 100,
        }}
      />
      <View
        style={{
          marginTop: 20,
          flexDirection: 'row',
          gap: 12,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Image
          source={{
            uri: 'https://cdn-icons-png.flaticon.com/128/281/281764.png',
          }}
          width={30}
          height={30}
        />
        <Image
          source={{
            uri: 'https://cdn-icons-png.flaticon.com/128/5968/5968764.png',
          }}
          width={30}
          height={30}
        />
        <Image
          source={{
            uri: 'https://cdn-icons-png.flaticon.com/128/5969/5969020.png',
          }}
          width={30}
          height={30}
        />
      </View>
      <TouchableOpacity
        onPress={() => console.log('!')}
        style={{
          marginTop: 20,
          alignItems: 'center',
          backgroundColor: 'transparent',
        }}>
        <Text
          style={{
            fontSize: 14,
            fontWeight: '300',
            color: 'black',
          }}>
          Need an account?
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default ELogin2Screen;
