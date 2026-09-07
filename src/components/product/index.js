import React from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';

const ProductComponent = (props) => {
  return (
    <View
      style={{
        paddingHorizontal: 24,
        paddingVertical: 10,
      }}>
      <View
        style={{
          borderWidth: 1,
          borderColor: 'red',
          flexDirection: 'row',
        }}>
        <View>
          <Image
            source={{ uri: props.productImage }}
            style={{ width: 100, height: 100 }}
          />
          <View
            style={{
              backgroundColor: 'red',
              paddingVertical: 2,
              position: 'absolute',
              paddingHorizontal: 8,
              top: 0,
              left: 0,
            }}>
            <Text
              numberOfLines={1}
              ellipsizeMode="tail"
              style={{
                fontSize: 10,
                color: 'white',
              }}>
              {props.productCategory}
            </Text>
          </View>
        </View>
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'flex-start',
            marginLeft: 20,
            gap: 2,
            flex: 1,
          }}>
          <Text
            numberOfLines={1}
            ellipsizeMode="tail"
            style={{
              fontSize: 18,
              color: 'black',
              fontWeight: 'bold',
            }}>
            {props.productTitle}
          </Text>
          <Text
            numberOfLines={1}
            ellipsizeMode="tail"
            style={{
              fontSize: 14,
              color: 'black',
              fontWeight: '300',
            }}>
            {props.productDescription}
          </Text>
          <Text
            numberOfLines={1}
            ellipsizeMode="tail"
            style={{
              fontSize: 14,
              color: 'black',
              fontWeight: '300',
            }}>
            {props.productPrice}
          </Text>
        </View>
        <TouchableOpacity
          onPress={props.onClickProduct}
          style={{
            backgroundColor: 'black',
            width: 32,
            height: 32,
            borderRadius: 16,
            justifyContent: 'center',
            alignItems: 'center',
            alignSelf: 'center',
            marginRight: 24,
          }}>
          <Text
            style={{
              fontSize: 18,
              color: 'white',
              fontWeight: 'bold',
            }}>
            +
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ProductComponent;
