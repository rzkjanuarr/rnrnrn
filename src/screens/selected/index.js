import React, { useState } from 'react';
import { Text, TouchableOpacity, View, FlatList } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ChevronRight } from 'lucide-react-native';

export default function SelectedScreen() {
  const [selected, setSelected] = useState('expanses');
  const [pilih, setPilih] = useState('arab');
  const [g, setG] = useState('surya');
  const [chose, setChose] = useState('Urban Hoddie');

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

  const menuDataRokok = [
    {
      id: '1',
      name: 'surya',
    },
    {
      id: '2',
      name: 'essei',
    },
    {
      id: '3',
      name: 'juara filter',
    },
    {
      id: '4',
      name: 'juara kretek',
    },
    {
      id: '5',
      name: 'camel',
    },
    {
      id: '6',
      name: 'malboro',
    },
  ];

  const KategoriRokok = ({ item }) => {
    return (
      <View
        style={{
          paddingTop: 24,
          marginLeft: 24,
        }}>
        <TouchableOpacity
          onPress={() => setG(item.name)}
          style={{
            backgroundColor: 'transparent',
            borderWidth: 1,
            borderColor: g === item.name ? 'red' : 'grey',
            paddingVertical: 12,
            width: 80,
            paddingHorizontal: 12,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text
            numberOfLines={1}
            ellipsizeMode="tail"
            style={{
              fontSize: 12,
              color: g === item.name ? 'red' : 'grey',
              fontWeight: 'bold',
            }}>
            {item.name}
          </Text>
        </TouchableOpacity>
      </View>
    );
  };

  const dataHodie = [
    {
      id: '1',
      name: 'Urban Hoddie',
      price: '$99',
    },
    {
      id: '2',
      name: 'Kanban Hoddie',
      price: '$15',
    },
    {
      id: '3',
      name: 'Bodie Hoddie',
      price: '$10',
    },
    {
      id: '4',
      name: 'Dono Hoddie',
      price: '$10',
    },
    {
      id: '5',
      name: 'Doni Hoddie',
      price: '$10',
    },
  ];

  const KategoriHodie = ({ item }) => {
    return (
      <View
        style={{
          marginLeft: 24,
          marginTop: 24,
        }}>
        <TouchableOpacity
          onPress={() => setChose(item.name)}
          style={{
            paddingVertical: 24,
            borderWidth: 1,
            backgroundColor: chose === item.name ? '#484948' : 'grey',
            borderRadius: 999,
            width: 200,
            flexDirection: 'row',
            padding: 20,
          }}>
          <View
            style={{
              flex: 1,
            }}>
            <Text
              numberOfLines={1}
              ellipsizeMode="tail"
              style={{
                color: 'white',
                fontSize: 16,
                fontWeight: 'bold',
              }}>
              {item.name}
            </Text>
            <Text
              numberOfLines={1}
              ellipsizeMode="tail"
              style={{
                color: 'white',
                marginTop: 2,
                fontSize: 12,
                fontWeight: 'normal',
              }}>
              {item.price}
            </Text>
          </View>
          <View
            style={{
              backgroundColor: chose == item.name ? '#bcff5f' : 'grey',
              padding: 8,
              borderRadius: 99,
            }}>
            <ChevronRight size="24" color="black" />
          </View>
        </TouchableOpacity>
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
      {/* <KategoriRokok /> */}
      <FlatList
        showsHorizontalScrollIndicator={false}
        horizontal={true}
        data={menuDataRokok}
        keyExtractor={(item) => item.id.toString()}
        renderItem={KategoriRokok}
      />
      {/* <KategoriHodie /> */}
      <FlatList
        showsHorizontalScrollIndicator={false}
        horizontal={true}
        data={dataHodie}
        keyExtractor={(item) => item.id.toString()}
        renderItem={KategoriHodie}
      />
    </SafeAreaView>
  );
}
