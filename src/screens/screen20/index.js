import {
  SafeAreaView,
  View,
  Text,
  Button,
  TouchableOpacity,
} from 'react-native';

export default function Screen20({ navigation }) {
  const handleNavScreen21 = () => {
    navigation.navigate('Screen21', {
      fromScreen20: 'helo gue data dari screen20 bro!',
    });
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
        <Text>Screen 20 - FIRST</Text>
        <TouchableOpacity
          onPress={handleNavScreen21}
          style={{
            borderColor: 'red',
            borderWidth: 1,
            paddingVertical: 20,
            paddingHorizontal: 24,
          }}>
          <Text>Goto screen 21!</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
