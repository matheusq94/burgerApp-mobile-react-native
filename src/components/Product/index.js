import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import PropTypes from 'prop-types';

import {
  Container,
  Left,
  Picture,
  Info,
  Name,
  Description,
  Price,
  Button,
} from './styles';

export default function Product({ data, navigation }) {
  return (
    <Container>
      <Left>
        <Picture
          source={{
            uri: data.pic,
          }}
        />

        <Info>
          <Name>{data.name}</Name>
          <Description>{data.description}</Description>
          <Price>R${data.price}0</Price>
        </Info>
      </Left>

      <Button onPress={() => navigation.navigate('Details', { data })}>
        <Icon name="keyboard-arrow-right" size={20} color="#727C8E" />
      </Button>
    </Container>
  );
}

Product.propTypes = {
  data: PropTypes.shape({
    pic: PropTypes.string,
    name: PropTypes.string,
    description: PropTypes.string,
    price: PropTypes.number,
  }).isRequired,
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};
