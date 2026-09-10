import { Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function Screen14({ navigation, route }) {
  const { dataFromScreen11, dataFromScreen12, datafromScreen13 } = route.params;
  const handleNavScreen14 = () => {
    navigation.navigate('Screen15', {
      dataFromScreen11: dataFromScreen11,
      dataFromScreen12: dataFromScreen12,
      datafromScreen13: datafromScreen13,
      dataFromScreen14: 'helo gue data screen 14!',
    });
  };

  return (
    <SafeAreaView
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <View style={{ alignItems: 'center', gap: 10 }}>
        <TouchableOpacity
          onPress={handleNavScreen14}
          style={{
            borderWidth: 1,
            borderColor: 'black',
            paddingVertical: 10,
            paddingHorizontal: 10,
          }}>
          <Text>goto screen 15!</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
