import { Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function Screen5({ route }) {
  const { fromScreen3 } = route.params;
  const { fromScreen4 } = route.params;
  return (
    <SafeAreaView
      style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <View style={{ alignItems: 'center', gap: 10 }}>
        <Text>Screen5!</Text>
        <View>
          <Text>{fromScreen3}</Text>
          <Text>{fromScreen4}</Text>
        </View>
        <TouchableOpacity>
          <Text>button!</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
