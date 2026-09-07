import React, { useState } from 'react';
import {
  ActivityIndicator,
  Alert,
  Button,
  Image,
  KeyboardAvoidingView,
  Linking,
  Modal,
  Share,
  StyleSheet,
  Switch,
  Text,
  TextInput,
  ToastAndroid,
  TouchableOpacity,
  View,
} from 'react-native';
import logo from '../../../logo.png';
import { SafeAreaView } from 'react-native-safe-area-context';
import LinearGradient from 'react-native-linear-gradient';
import { PackageCheck } from 'lucide-react-native';
import { Pressable } from 'react-native-gesture-handler';

const ELogin1Screen = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <RenderHeader />
        <RenderInput />
        <RenderButtonForgot />
        <RenderButtonSignInAndSignUp />
        {/* <Ngulik /> */}
      </View>
    </SafeAreaView>
  );
};

const Ngulik = () => {
  const [visible, setVisible] = useState(false);

  const onPressTwoOptionsAlert = () => {
    Alert.alert('Title', 'Subtitle', [
      {
        text: 'OK',
        onPress: () => console.log('OK!'),
      },
      {
        text: 'CANCEL!',
        onPress: () => console.log('CANCEL!'),
      },
    ]);
  };

  const onPressThreeOptionsAlert = () => {
    Alert.alert('Title', 'Subtitle', [
      {
        text: 'JANCOK 1',
        onPress: () => console.log('JANCOK 1'),
      },
      {
        text: 'JANCOK 2',
        onPress: () => console.log('JANCOK 2'),
      },
      {
        text: 'JANCOK 3',
        onPress: () => console.log('JANCOK 3'),
      },
    ]);
  };

  const showToast = () => {
    ToastAndroid.show('hello!', ToastAndroid.CENTER, ToastAndroid.SHORT);
  };
  return (
    <View style={{}}>
      <Pressable onPress={onPressTwoOptionsAlert}>
        <Text> 2 alert!</Text>
      </Pressable>
      <Pressable onPress={onPressThreeOptionsAlert}>
        <Text> 3 alert!</Text>
      </Pressable>

      <Pressable onPress={() => setVisible(true)}>
        <Text> custom alert!</Text>
      </Pressable>

      <Modal
        visible={visible}
        transparent
        animationType="fade"
        onRequestClose={() => setVisible(false)}>
        <View
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: 'rgba(0,0,0,0.3)',
          }}>
          <View
            style={{
              width: 300,
              padding: 20,
              borderRadius: 12,
              backgroundColor: '#fff',
            }}>
            <Text style={{ fontSize: 18, fontWeight: 'bold', marginBottom: 8 }}>
              Title
            </Text>
            <Text style={{ marginBottom: 20 }}>Subtitle</Text>

            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'flex-end',
                gap: 12,
              }}>
              <Pressable onPress={() => setVisible(false)}>
                <Text style={{ color: 'red' }}>CANCEL</Text>
              </Pressable>
              <Pressable
                onPress={() => {
                  console.log('OK!');
                  setVisible(false);
                }}>
                <Text style={{ color: '#1479ca' }}>OK</Text>
              </Pressable>
            </View>
          </View>
        </View>
      </Modal>
      {/*  divider */}
      <View>
        <Button title="Hello!" onPress={() => showToast()} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  ok: {
    color: 'red',
    backgroundColor: 'black',
  },
});
const RenderButtonSignInAndSignUp = () => {
  const onCOK = () => console.log('hello!');

  const onShare = async () => {
    try {
      await Share.share({
        message: 'Sharing Method!',
        url: 'www.google.com',
      });
    } catch (error) {
      Alert.alert(error.message);
    }
  };

  const onPressURL = async () => {
    const URL = 'rzkjanuarr-com.vercel.app/';
    const supportedURL = await Linking.canOpenURL(URL);
    if (supportedURL) {
      await Linking.openURL(URL);
    } else {
      Alert.alert('gak bisa buka URL!');
    }
  };

  const makeCall = async () => {
    const phoneNumber = '085749463854';
    const URL = `tel:${phoneNumber}`;
    const supportedURL = await Linking.canOpenURL(URL);

    if (supportedURL) {
      await Linking.openURL(URL);
      console.log('suc!');
    } else {
      Alert.alert('gak bisa buka URL!');
    }
  };

  const onPressEmail = async () => {
    const email = 'rizkijanuar.work@gmail.com';
    const subject = encodeURIComponent('title');
    const body = encodeURIComponent('body');
    const URL = `mailto:${email}?subject=${subject}&body=${body}`;
    const supported = await Linking.canOpenURL(URL);

    if (supported) {
      await Linking.openURL(URL);
      console.log('suc!');
    } else {
      Alert.alert('gak bisa buka url!');
      console.log('gagal!');
    }
  };

  const onPressSetting = async () => {
    await Linking.openSettings();
  };

  return (
    <View
      style={{
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        paddingHorizontal: 24,
      }}>
      <TouchableOpacity
        style={{
          paddingVertical: 12,
          paddingHorizontal: 20,
          backgroundColor: '#1479ca',
          width: '100%',
        }}>
        <Text
          style={{
            fontSize: 12,
            color: 'white',
            textAlign: 'center',
            fontWeight: 'bold',
          }}>
          Login
        </Text>
      </TouchableOpacity>

      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'row',
          marginTop: 20,
        }}>
        <Text
          style={{
            fontSize: 12,
            color: 'black',
            fontWeight: 'bold',
            marginRight: 2,
          }}>
          Dont have an account?{' '}
        </Text>
        <TouchableOpacity onPress={onCOK}>
          <Text
            style={{
              color: '#1479ca',
              fontSize: 12,
              fontWeight: 'bold',
            }}>
            Sign Up!
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const RenderButtonForgot = () => {
  const onCOK = () => console.log('hello!');
  return (
    <View
      style={{
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
        width: '100%',
        padding: 20,
      }}>
      <TouchableOpacity
        style={{
          backgroundColor: 'transparent',
        }}
        onPress={onCOK}>
        <Text
          style={{
            color: '#1479ca',
            fontSize: 12,
            fontWeight: '500',
          }}>
          Forgot Password?
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const RenderInput = () => {
  return (
    <View
      style={{
        alignItems: 'flex-start',
        paddingHorizontal: 20,
        width: '100%',
        marginTop: 50,
      }}>
      <Text
        style={{
          marginBottom: 10,
        }}>
        Email<Text style={{ color: 'red' }}> *</Text>
      </Text>
      <TextInput
        style={{
          borderWidth: 1,
          borderColor: 'grey',
          width: '100%',
          height: 40,
          paddingVertical: 12,
          paddingHorizontal: 10,
        }}
        keyboardType="email-address"
        placeholder="Email"
        placeholderTextColor="grey"
      />
      <Text
        style={{
          marginBottom: 10,
          marginTop: 10,
        }}>
        Password<Text style={{ color: 'red' }}> *</Text>
      </Text>
      <TextInput
        style={{
          borderWidth: 1,
          borderColor: 'grey',
          width: '100%',
          paddingVertical: 12,
          paddingHorizontal: 10,
        }}
        secureTextEntry={true}
        placeholder="Password"
        placeholderTextColor="grey"
      />
    </View>
  );
};

const RenderHeader = () => {
  return (
    <View style={{ alignItems: 'center' }}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
        }}>
        <LinearGradient
          colors={['#1479ca', '#ffffff']}
          start={{ x: 1, y: 0 }}
          end={{ x: 0, y: 1 }}
          style={{
            width: 80,
            height: 80,
            borderRadius: 80 / 2,
            marginRight: 10,
          }}
        />
        <Text
          style={{
            fontSize: 20,
            fontWeight: 'bold',
          }}>
          Pixels {'\n'}Community
        </Text>
      </View>
      <View
        style={{
          marginTop: 20,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text style={{ fontSize: 24, fontWeight: 'bold', color: 'black' }}>
          Welcome Back!
        </Text>
        <Text
          style={{
            fontSize: 14,
            color: 'black',
            fontWeight: '200',
            textAlign: 'center',
            marginTop: 10,
          }}>
          Please enter your email and password to access Pixels Comunnity
          Dashboard
        </Text>
      </View>
    </View>
  );
};

export default ELogin1Screen;
