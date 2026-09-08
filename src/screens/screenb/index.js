import { Text, View, Button } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function ScreenB({ navigation, route }) {
  const { fromScreenA } = route.params;
  console.log(fromScreenA);

  return (
    <SafeAreaView>
      <View>
        <Text>screenb!</Text>
        <Text>data from screen A : {fromScreenA}</Text>
        <Button
          title="goto Screen C"
          onPress={() =>
            navigation.navigate('ScreenC', {
              fromScreenA: fromScreenA,
              fromScreenB: 'helo helo dari from B',
            })
          }
        />
      </View>
    </SafeAreaView>
  );
}
