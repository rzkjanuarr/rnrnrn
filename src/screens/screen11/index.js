import { Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function Screen11({ navigation }) {
  const handleNavScreen11 = () => {
    navigation.navigate('Screen12', {
      dataFromScreen11: 'helo gue dari screen 11!',
    });
  };

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
        <TouchableOpacity
          onPress={handleNavScreen11}
          style={{
            borderWidth: 1,
            borderColor: 'black',
            paddingVertical: 10,
            paddingHorizontal: 10,
          }}>
          <Text>goto screen12!</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
