import { Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function Screen12({ navigation, route }) {
  const { dataFromScreen11 } = route.params;
  const handleNavScreen12 = () => {
    navigation.navigate('Screen13', {
      dataFromScreen11: dataFromScreen11,
      dataFromScreen12: 'halo gue dari screen 12!',
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
          style={{
            borderWidth: 1,
            borderColor: 'black',
            paddingVertical: 10,
            paddingHorizontal: 10,
          }}>
          <Text>goto screen13!</Text>
        </TouchableOpacity>
        <Text
          style={{
            paddingVertical: 10,
            paddingHorizontal: 10,
            borderWidth: 1,
            borderColor: 'red',
          }}>
          {dataFromScreen11}
        </Text>
      </View>
    </SafeAreaView>
  );
}
