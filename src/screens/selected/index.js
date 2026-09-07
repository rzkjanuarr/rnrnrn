import React, { useState } from 'react';
import { Text, TouchableOpacity, View, FlatList } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function SelectedScreen() {
  const [selected, setSelected] = useState('expanses');
  const [pilih, setPilih] = useState('arab');

  const KategoriFinance = () => {
    return (
      <View
        style={{
          paddingHorizontal: 24,
          paddingTop: 24,
        }}>
        <View
          style={{
            flexDirection: 'row',
            backgroundColor: '#D9F2E3',
            padding: 4,
            borderRadius: 999,
          }}>
          <TouchableOpacity
            onPress={() => setSelected('expanses')}
            style={{
              width: '50%',
              backgroundColor:
                selected === 'expanses' ? '#3E9B5C' : 'transparent',
              paddingVertical: 12,
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: 999,
            }}>
            <Text
              style={{
                fontSize: 14,
                fontWeight: 'bold',
                color: selected === 'expanses' ? 'white' : '#3E9B5C',
              }}>
              Expanses!
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => setSelected('subscribtions')}
            style={{
              width: '50%',
              backgroundColor:
                selected === 'subscribtions' ? '#3E9B5C' : 'transparent',
              paddingVertical: 12,
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: 999,
            }}>
            <Text
              style={{
                fontSize: 14,
                fontWeight: 'bold',
                color: selected === 'subscribtions' ? 'white' : '#3E9B5C',
              }}>
              Subscribtions
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  const menuData = [
    {
      id: '1',
      name: 'arab',
    },
    {
      id: '2',
      name: 'susu',
    },
    {
      id: '3',
      name: 'americano',
    },
    {
      id: '4',
      name: 'cappuccino',
    },
    {
      id: '5',
      name: 'latte',
    },
  ];
  const KategoriKopi = ({ item }) => {
    return (
      <View
        style={{
          paddingTop: 24,
          marginLeft: 24,
        }}>
        <View>
          <TouchableOpacity
            onPress={() => setPilih(item.name)}
            style={{
              paddingVertical: 12,
              backgroundColor: pilih === item.name ? 'black' : 'white',
              width: 100,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text
              style={{
                fontSize: 12,
                color: pilih === item.name ? 'white' : 'black',
                fontWeight: 'bold',
              }}>
              {item.name}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  return (
    <SafeAreaView>
      <KategoriFinance />
      <FlatList
        showsHorizontalScrollIndicator={false}
        horizontal={true}
        data={menuData}
        keyExtractor={(item) => item.id.toString()}
        renderItem={KategoriKopi}
      />
    </SafeAreaView>
  );
}
