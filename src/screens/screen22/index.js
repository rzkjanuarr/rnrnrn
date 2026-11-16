import {
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
  ToastAndroid,
} from 'react-native';

export default function Screen22({ navigation, route }) {
  const { fromScreen20, fromScreen21 } = route.params ?? {};
  const handleNavScreen23 = () => {
    navigation.navigate('Screen23', {
      fromScreen23: 'halo bro ini data dari screen 23!',
    });
  };

  const showToastNormal = () => {
    ToastAndroid.show('normal!', ToastAndroid.SHORT, ToastAndroid.TOP);
  };

  const handlePressButton = () => {
    showToastNormal();
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          gap: 10,
        }}>
        <Text>SCREEN 22</Text>
        <Text>
          {fromScreen20 ?? '-'} - {fromScreen21 ?? '-'}
        </Text>
        <TouchableOpacity
          onPress={handlePressButton}
          style={{
            borderWidth: 1,
            borderColor: 'red',
            paddingHorizontal: 24,
            paddingVertical: 20,
          }}>
          <Text>Goto screen 23!</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
