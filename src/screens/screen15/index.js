import { Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function Screen15({ navigation, route }) {
  console.log('masuk screen!');
  const {
    dataFromScreen11,
    dataFromScreen12,
    datafromScreen13,
    dataFromScreen14,
  } = route.params;
  console.log('rut.params : screen 15', route.params);

  const handleNavScreen15 = () => {
    navigation.navigate('Screen16', {
      dataFromScreen11: dataFromScreen11,
      dataFromScreen12: dataFromScreen12,
      datafromScreen13: datafromScreen13,
      dataFromScreen14: dataFromScreen14,
      dataFromScreen15: 'gue dari 15!',
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
          style={{
            borderWidth: 1,
            borderColor: 'black',
            paddingVertical: 10,
            paddingHorizontal: 10,
          }}>
          <Text>goto screen 16!</Text>
        </TouchableOpacity>
        <Text>test!</Text>
        <Text
          style={{
            borderWidth: 1,
            borderColor: 'red',
          }}>
          DEBUG: {JSON.stringify(route.params)}
        </Text>
        <Text>
          {dataFromScreen11} - {dataFromScreen12} - {datafromScreen13} -
          {dataFromScreen14}
        </Text>
      </View>
    </SafeAreaView>
  );
}
