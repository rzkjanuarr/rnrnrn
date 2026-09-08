import { Button, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function ScreenA({ navigation }) {
  return (
    <SafeAreaView>
      <View>
        <Text>screen a!</Text>
        <Button
          title="go to screen B!"
          onPress={() =>
            navigation.navigate('ScreenB', {
              fromScreenA: 'hi, data from Screen A ini!',
            })
          }
        />
      </View>
    </SafeAreaView>
  );
}
