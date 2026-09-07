import { Text, View, TextInput } from 'react-native';

export default function SearchCompoennt() {
  return (
    <View style={{ paddingHorizontal: 24, paddingVertical: 10 }}>
      <View
        style={{
          width: '100%',
          borderWidth: 1,
          borderColor: 'red',
          padding: 20,
        }}>
        <TextInput placeholder="Masukan Query disini!" keyboardType="default" />
      </View>
    </View>
  );
}
