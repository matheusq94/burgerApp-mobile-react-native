import React from 'react';

import Icon from 'react-native-vector-icons/MaterialIcons';

import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart } from '~/store/modules/cart/actions';

import PageHeader from '~/components/PageHeader';

import {
  Container,
  List,
  CartItemContainer,
  Amount,
  Name,
  AmountControllContainer,
  AmountControllButton,
  InfoContainer,
  SubBadge,
  Subtotal,
  RemoveButton,
} from './styles';

export default function Cart() {
  const dispatch = useDispatch();
  const items = useSelector(state => state.cart);

  function handleRemoveFromCart(id) {
    return dispatch(removeFromCart(id));
  }

  return (
    <Container>
      <PageHeader title="Meu Carrinho" />

      <List
        data={items}
        keyExtractor={item => String(item.id)}
        renderItem={({ item }) => (
          <CartItemContainer>
            <AmountControllContainer>
              <AmountControllButton>
                <Icon name="remove" size={15} color="#727C8E" />
              </AmountControllButton>
              <Amount>{item.amount}</Amount>
              <AmountControllButton>
                <Icon name="add" size={15} color="#727C8E" />
              </AmountControllButton>
            </AmountControllContainer>
            <InfoContainer>
              <Name>{item.name}</Name>
            </InfoContainer>
            <SubBadge>
              <Subtotal>R${item.subtotal}</Subtotal>
            </SubBadge>
            <RemoveButton onPress={() => handleRemoveFromCart(item.id)}>
              <Icon name="close" size={15} color="#fff" />
            </RemoveButton>
          </CartItemContainer>
        )}
      />
    </Container>
  );
}

Cart.navigationOptions = {
  tabBarLabel: 'Meu Carrinho',
  tabBarIcon: ({ tintColor }) => (
    <Icon name="shopping-cart" size={20} color={tintColor} />
  ),
};
