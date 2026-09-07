import React, { Component } from 'react';
import { Image, Text, View } from 'react-native';

class FlexboxComponent extends Component {
  render() {
    return (
      <View style={{ flexDirection: 'column' }}>
        <View
          style={{
            flexDirection: 'row',
            backgroundColor: 'grey',
            alignItems: 'flex-start',
            justifyContent: 'space-between',
          }}>
          <View
            style={{
              backgroundColor: 'red',
              width: 50,
              height: 50,
            }}
          />
          <View
            style={{
              backgroundColor: 'blue',
              width: 50,
              height: 50,
            }}
          />
          <View
            style={{
              backgroundColor: 'orange',
              width: 50,
              height: 50,
            }}
          />
          <View
            style={{
              backgroundColor: 'black',
              width: 50,
              height: 50,
            }}
          />
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-around',
          }}>
          <Text>Beranda</Text>
          <Text>Video</Text>
          <Text>Playist</Text>
          <Text>Komunitas</Text>
          <Text>Pengaturan</Text>
        </View>
        <View
          style={{
            marginTop: 20,
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <Image
            source={{
              uri: 'https://yt3.ggpht.com/CcYAnA7yMZnX5DE0EMjsoSxdv3KOa_CCSxRTAncwK9XR4a8X9HyZWMWluzb_Z_P1zVlBSTJPkQ8=s88-c-k-c0x00ffffff-no-rj',
            }}
            style={{
              width: 100,
              height: 100,
              borderRadius: 100,
            }}
          />
          <View style={{ marginLeft: 10, flex: 1 }}>
            <Text
              style={{ fontSize: 18, fontWeight: 'bold' }}>
              Ikyy Jancok!
            </Text>
            <Text>10rb Subscriber</Text>
          </View>
          <View
            style={{
              backgroundColor: 'red',
              padding: 8,
              borderRadius: 8,
            }}>
            <Text
              style={{
                fontWeight: 'bold',
                color: 'white',
              }}>
              Subscribe!
            </Text>
          </View>
        </View>
      </View>
    );
  }
}

export default FlexboxComponent;
