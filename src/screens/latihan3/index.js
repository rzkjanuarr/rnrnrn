import React, { useEffect, useState } from 'react';
import { View, Text, ActivityIndicator, Image, FlatList } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import UserDTO from '../latihan2/UserDTO';

export default function Latihan3Screen() {
  const [isLoading, setIsLoading] = useState(true);
  const [users, setUsers] = useState([]);

  const fetchUsers = async () => {
    try {
      const url = await fetch('https://randomuser.me/api/?results=99');
      const json = await url.json();
      const mappingResponse = json.results.map(UserDTO.fromJson);
      console.log(mappingResponse);

      setUsers(mappingResponse);
      setIsLoading(false);
    } catch (error) {
      console.log('failed fetch:', error);
      setIsLoading(false);
    }
  };

  function useLoadUsers(setIsLoading, setUsers) {
    console.log('=> DID MOUNT!!!');

    useEffect(() => {
      fetchUsers();
    }, []);
  }

  useLoadUsers(setIsLoading, setUsers);

  const renderLoading = () => {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size="large" color="red" />
      </View>
    );
  };

  const renderEmptyData = () => {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text
          style={{
            fontSize: 16,
            fontWeight: 'bold',
            color: 'black',
          }}>
          Yah, data belum ditemukan!
        </Text>
      </View>
    );
  };

  const renderDataItem = ({ item }) => {
    /** @type {UserDTO} */
    const user = item;
    return (
      <View
        style={{
          paddingHorizontal: 24,
        }}>
        <View
          style={{
            borderWidth: 1,
            borderColor: 'red',
            width: '100%',
            flexDirection: 'row',
            justifyContent: 'flex-start',
            alignItems: 'center',
            padding: 20,
          }}>
          <Image
            style={{ width: 80, height: 80 }}
            source={{
              uri: user.avatarThumbnail,
            }}
          />
          <View
            style={{
              marginLeft: 20,
            }}>
            <Text
              style={{
                fontSize: 16,
                fontWeight: 'bold',
                color: 'black',
              }}>
              {user.fullName}
            </Text>
            <Text
              style={{
                fontSize: 14,
                fontWeight: '500',
                color: 'black',
              }}>
              {user.age}
            </Text>
          </View>
        </View>
      </View>
    );
  };

  if (isLoading) {
    return renderLoading();
  }

  if (users.length === 0) {
    return renderEmptyData();
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <FlatList
        horizontal={false}
        data={users}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderDataItem}
      />
    </SafeAreaView>
  );
}
