import { SafeAreaView, TouchableOpacity, View, Text } from 'react-native';

export default function Screen21({ navigation, route }) {
  const { fromScreen20 } = route.params ?? {};
  const handleNavScreen22 = () => {
    navigation.navigate('Screen22', {
      fromScreen20: fromScreen20,
      fromScreen21: 'Helo ini data dari Screen 21!',
    });
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          gap: 10,
        }}>
        <Text>Screen 21</Text>
        <Text>{fromScreen20 ?? '-'}</Text>
        <TouchableOpacity
          onPress={handleNavScreen22}
          style={{
            borderWidth: 1,
            borderColor: 'red',
            paddingVertical: 20,
            paddingHorizontal: 24,
          }}>
          <Text>Goto screen 22!</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
