import React, { Component } from 'react';
import { Text, View, ActivityIndicator, Image, FlatList } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import UserDTO from './UserDTO';

class Latihan2Screen extends Component {
  constructor(props) {
    super(props);
    console.log('=> constructor!');
    this.state = {
      isLoading: true,
      users: [],
    };
  }

  async componentDidMount() {
    console.log('=> did mount!');

    try {
      const url = await fetch('https://randomuser.me/api/?results=99');
      const json = await url.json();
      const mappingResponse = json.results.map(UserDTO.fromJson);
      console.log(mappingResponse);

      setTimeout(() => {
        this.setState({
          users: mappingResponse,
          isLoading: false,
        });
      }, 2000);
    } catch (error) {
      console.log('Err fetch: ', error);
      this.setState({
        isLoading: false,
      });
    }
  }

  renderLoading = () => {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size="large" color="red" />
      </View>
    );
  };

  renderEmptyData = () => {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text
          style={{
            fontSize: 16,
            color: 'black',
            fontWeight: 'bold',
          }}>
          Yah, maaf data belum ditemukan!
        </Text>
      </View>
    );
  };

  renderDataItem = ({ item }) => {
    /** @type {UserDTO} */
    const user = item;
    return (
      <View style={{ paddingHorizontal: 24 }}>
        <View
          style={{
            width: '100%',
            borderWidth: 1,
            borderColor: 'red',
            flexDirection: 'row',
            padding: 12,
          }}>
          <Image
            source={{
              uri: user.avatarThumbnail,
            }}
            width="80"
            height="80"
          />
          <View
            style={{
              marginLeft: 12,
              alignItems: 'flex-start',
              justifyContent: 'center',
            }}>
            <Text
              style={{
                fontSize: 20,
                fontWeight: 'bold',
              }}
              ellipsizeMode="tail">
              {user.fullName}
            </Text>
            <Text style={{ fontSize: 16, fontWeight: '500' }}>{user.age}</Text>
          </View>
        </View>
      </View>
    );
  };

  render() {
    console.log('=> render!');

    if (this.state.isLoading) {
      return this.renderLoading();
    }

    if (this.state.users.length === 0) {
      return this.renderEmptyData();
    }

    return (
      <SafeAreaView style={{ flex: 1 }}>
        <FlatList
          horizontal={false}
          data={this.state.users}
          keyExtractor={(item) => item.id.toString()}
          renderItem={this.renderDataItem}
        />
      </SafeAreaView>
    );
  }
}

export default Latihan2Screen;
