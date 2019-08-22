import React from 'react';
import { StatusBar, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';

import Icon from 'react-native-vector-icons/MaterialIcons';

import { Container, ProductImage, ImageBg } from './styles';

export default function Details({ navigation }) {
  const data = navigation.getParam('data');
  return (
    <Container>
      <StatusBar barStyle="dark-content" backgroundColor="transparent" />
      <ImageBg>
        <ProductImage source={{ uri: data.pic }} />
      </ImageBg>
    </Container>
  );
}

Details.navigationOptions = ({ navigation }) => ({
  title: navigation.getParam('data').name,
  tabBarVisible: false,

  headerLeft: () => (
    <TouchableOpacity onPress={() => navigation.goBack()}>
      <Icon name="chevron-left" size={20} color="#fff" />
    </TouchableOpacity>
  ),
});

Details.propTypes = {
  navigation: PropTypes.shape({
    getParam: PropTypes.func.isRequired,
  }).isRequired,
};
