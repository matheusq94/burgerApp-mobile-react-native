import React from 'react';
import { View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

// import { Container } from './styles';

export default function Cart() {
  return <View />;
}

Cart.navigationOptions = {
  tabBarLabel: 'Meu Carrinho',
  tabBarIcon: ({ tintColor }) => (
    <Icon name="shopping-cart" size={20} color={tintColor} />
  ),
};
