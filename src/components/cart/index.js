import React from 'react';
import { Text, View } from 'react-native';

import { Cuboid } from 'lucide-react-native';

const CartComponent = (props) => {
  return (
    <View
      style={{
        paddingHorizontal: 24,
        paddingVertical: 10,
      }}>
      <View
        style={{
          borderWidth: 1,
          borderColor: 'transparent',
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text
          style={{ flex: 1, fontSize: 18, fontWeight: 'bold', color: 'black' }}>
          {' '}
          Keranjang Anda!
        </Text>
        <View>
          <Cuboid size={60} color="black" />
          <View
            style={{
              backgroundColor: 'red',
              width: 30,
              height: 30,
              position: 'absolute',
              top: 0,
              right: 0,
              borderRadius: 30 / 2,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text
              style={{
                color: 'white',
                fontSize: 14,
                fontWeight: 'bold',
              }}>
              {props.quantityProduct}
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default CartComponent;
