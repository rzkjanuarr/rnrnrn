import { Text, View, Button } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function Screen1({ navigation }) {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Screen 1</Text>
        <Button
          title="Button 1"
          onPress={() =>
            navigation.navigate('Screen2', { fromScreen1: 'hi from Screen 1!' })
          }
        />
      </View>
    </SafeAreaView>
  );
}
