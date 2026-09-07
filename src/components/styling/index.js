import React from 'react';
import macbook from '../../../mac.jpg';
import {
  Image,
  StyleSheet,
  Text,
  View,
} from 'react-native';

const StylingReactNativeComponent = () => {
  return (
    <View>
      <Text style={styles.textContainer}>
        Styling Component!
      </Text>
      <View
        style={{
          width: 80,
          height: 80,
          backgroundColor: '#000000',
          borderWidth: 2,
          borderColor: '#E63946',
          marginTop: 20,
          marginLeft: 20,
        }}
      />

      <View
        style={{
          padding: 12,
          backgroundColor: '#F2F2F2',
          width: 212,
          borderWidth: 1,
          borderColor: '#E63946',
          borderRadius: 12,
        }}>
        <Image
          source={macbook}
          style={{
            width: 188,
            height: 107,
            borderRadius: 12,
          }}
        />
        <Text
          style={{
            fontSize: 14,
            marginTop: 16,
            fontWeight: 'bold',
          }}>
          New Macbook Pro 2026
        </Text>
        <Text
          style={{
            fontSize: 14,
            marginTop: 5,
            fontWeight: 'bold',
            color: '#BE1A1A',
          }}>
          Rp. 25.000.000
        </Text>
        <Text
          style={{
            fontSize: 14,
            marginTop: 5,
            fontWeight: '300',
          }}>
          Jakarta Barat
        </Text>
        <View
          style={{
            backgroundColor: 'green',
            paddingVertical: 6,
            marginTop: 5,
            borderRadius: 8,
          }}>
          <Text
            style={{
              fontSize: 14,
              fontWeight: 'bold',
              color: 'white',
              textAlign: 'center',
            }}>
            BELI
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  textContainer: {
    color: '#D90000',
    fontSize: 24,
    fontWeight: '900',
    marginLeft: 20,
    marginTop: 40,
  },
});

export default StylingReactNativeComponent;
