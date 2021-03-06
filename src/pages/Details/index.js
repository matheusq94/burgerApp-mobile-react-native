import React, { useState } from 'react';

import { useDispatch } from 'react-redux';
import {
  Alert,
  StatusBar,
  TouchableWithoutFeedback,
  TouchableOpacity,
} from 'react-native';

import ImageView from 'react-native-image-view';

import PropTypes from 'prop-types';

import Icon from 'react-native-vector-icons/MaterialIcons';
import { addToCart } from '~/store/modules/cart/actions';

import {
  Container,
  ProductImage,
  ImageBg,
  InfoContainer,
  NameAndPrice,
  Name,
  Price,
  PriceContainer,
  DescriptionContainer,
  Description,
  QtdAndButton,
  QtdContainer,
  MinusQtdButton,
  QtdText,
  AddToCart,
  AddToCartText,
} from './styles';

export default function Details({ navigation }) {
  const dispatch = useDispatch();
  const data = navigation.getParam('data');
  const images = [
    {
      source: { uri: data.image_url },
      title: data.name,
      width: 800,
      height: 600,
    },
  ];

  const [visible, setVisible] = useState(false);
  const [quantity, setQuantity] = useState(1);

  function handleSetQuantity(bool) {
    if (bool) {
      return setQuantity(quantity + 1);
    }

    if (quantity > 1) {
      return setQuantity(quantity - 1);
    }
    return null;
  }

  function addItemToCart(product) {
    product.amount = quantity;
    // console.tron.log(product);

    dispatch(addToCart(product));

    Alert.alert(
      'Produto adcionado ao carrinho',
      `${product.name} from adcionado ao carrinho`
    );

    return navigation.navigate('Dashboard');
  }

  return (
    <Container>
      <StatusBar barStyle="dark-content" backgroundColor="transparent" />
      <ImageBg>
        <TouchableWithoutFeedback onPress={() => setVisible(true)}>
          <ProductImage source={{ uri: data.image_url }} />
        </TouchableWithoutFeedback>
        {visible && (
          <ImageView
            images={images}
            imageIndex={0}
            isVisible={visible}
            onClose={() => setVisible(false)}
          />
        )}
      </ImageBg>

      <InfoContainer>
        <NameAndPrice>
          <Name>{data.name}</Name>
          <PriceContainer>
            <Price>R${data.price}0</Price>
          </PriceContainer>
        </NameAndPrice>
        <DescriptionContainer>
          <Description>{data.description}</Description>
        </DescriptionContainer>
      </InfoContainer>

      <QtdAndButton>
        <QtdContainer>
          <MinusQtdButton onPress={() => handleSetQuantity(false)}>
            <Icon name="remove" size={15} color="#727C8E" />
          </MinusQtdButton>
          <QtdText> {quantity} </QtdText>
          <MinusQtdButton onPress={() => handleSetQuantity(true)}>
            <Icon name="add" size={15} color="#727C8E" />
          </MinusQtdButton>
        </QtdContainer>
        <AddToCart onPress={() => addItemToCart(data)}>
          <AddToCartText>Adicionar ao carrinho</AddToCartText>
        </AddToCart>
      </QtdAndButton>
    </Container>
  );
}

Details.navigationOptions = ({ navigation }) => ({
  title: navigation.getParam('data').name,
  tabBarVisible: false,

  headerLeft: () => (
    <TouchableOpacity onPress={() => navigation.goBack()}>
      <Icon name="chevron-left" size={30} color="#fff" />
    </TouchableOpacity>
  ),
});

Details.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
    getParam: PropTypes.func.isRequired,
  }).isRequired,
};
