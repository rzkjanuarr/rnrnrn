import { Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function Screen13({ navigation, route }) {
  const { dataFromScreen11, dataFromScreen12 } = route.params;
  const handleNavScreen13 = () => {
    navigation.navigate('Screen14', {
      dataFromScreen11: dataFromScreen11,
      dataFromScreen12: dataFromScreen12,
      datafromScreen13: 'helo gue dari screen 13!',
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
          onPress={handleNavScreen13}
          style={{
            paddingVertical: 10,
            paddingHorizontal: 10,
            borderWidth: 1,
            borderColor: 'black',
          }}>
          <Text>goto screen 14!</Text>
        </TouchableOpacity>
        <Text
          style={{
            paddingVertical: 10,
            paddingHorizontal: 10,
            borderWidth: 1,
            borderColor: 'red',
          }}>
          {dataFromScreen11} - {dataFromScreen12}
        </Text>
      </View>
    </SafeAreaView>
  );
}
