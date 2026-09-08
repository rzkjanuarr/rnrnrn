import { Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function Screen2({ navigation, route }) {
  const { fromScreen1 } = route.params;
  console.log(fromScreen1);

  return (
    <SafeAreaView
      style={{
        flex: 1,
      }}>
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Screen 2</Text>
        <Text>{fromScreen1}</Text>
      </View>
    </SafeAreaView>
  );
}
