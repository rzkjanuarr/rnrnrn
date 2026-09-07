import React from 'react';
import { View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { Colors } from '../../constants';

const CircleIcon = ({
  name = 'home',
  size = 24,
  color = Colors.white,
  bgColor = Colors.primary,
  containerSize = 50,
}) => {
  return (
    <View
      style={{
        width: containerSize,
        height: containerSize,
        borderRadius: containerSize / 2,
        backgroundColor: bgColor,
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Icon name={name} size={size} color={color} />
    </View>
  );
};

export default CircleIcon;
