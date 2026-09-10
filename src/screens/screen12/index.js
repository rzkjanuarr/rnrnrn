import { Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function Screen12() {
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
      </View>
    </SafeAreaView>
  );
}
