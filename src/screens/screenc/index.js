import { Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function ScreenC({ navigation, route }) {
  const { fromScreenA, fromScreenB } = route.params;

  console.log('screenC');
  console.log(fromScreenA);
  console.log(fromScreenB);

  return (
    <SafeAreaView>
      <View>
        <Text>screenc</Text>
        <Text>data from screen A : {fromScreenA}</Text>
        <Text>data from screen B : {fromScreenB}</Text>
      </View>
    </SafeAreaView>
  );
}
