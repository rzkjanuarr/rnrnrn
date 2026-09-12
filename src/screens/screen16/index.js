import { Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function Screen16({ navigation, route }) {
  const {
    dataFromScreen11,
    dataFromScreen12,
    datafromScreen13,
    dataFromScreen14,
    dataFromScreen15,
  } = route.params ?? {};

  return (
    <SafeAreaView
      style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <View style={{ alignItems: 'center' }}>
        <Text>
          {dataFromScreen11} - {dataFromScreen12} - {datafromScreen13} -{' '}
          {dataFromScreen14} - {dataFromScreen15}
        </Text>
      </View>
    </SafeAreaView>
  );
}
