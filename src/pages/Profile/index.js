import React from 'react';
import { View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import PropTypes from 'prop-types';

// import { Container } from './styles';

export default function Profile() {
  return <View />;
}

function ColoredIcon({ tintColor }) {
  return <Icon name="person" size={20} color={tintColor} />;
}

Profile.navigationOptions = {
  tabBarLabel: 'Perfil',
  tabBarIcon: ColoredIcon,
};

ColoredIcon.propTypes = {
  tintColor: PropTypes.string.isRequired,
};
