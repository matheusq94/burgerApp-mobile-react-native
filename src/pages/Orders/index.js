import React from 'react';
import { View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

// import { Container } from './styles';

export default function Orders() {
  return <View />;
}

Orders.navigationOptions = {
  tabBarLabel: 'Pedidos',
  tabBarIcon: ({ tintColor }) => (
    <Icon name="receipt" size={20} color={tintColor} />
  ),
};
