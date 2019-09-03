import React from 'react';
import { Alert } from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';

import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart, updateQuantity } from '~/store/modules/cart/actions';

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
  TotalAndSend,
  Total,
  SendOrderButton,
  SendOrderText,
  SendOrderButtonUnavailable,
} from './styles';

export default function Cart() {
  const dispatch = useDispatch();
  const items = useSelector(state => state.cart);

  const totalPrice = items.reduce((total, item) => {
    const formatted = Number(total) + Number(item.subtotal);
    return formatted.toFixed(2);
  }, 0);

  console.tron.log(totalPrice);

  function handleRemoveFromCart(id) {
    return dispatch(removeFromCart(id));
  }
  function handleUpdateQuantity(id, increment) {
    return dispatch(updateQuantity(id, increment));
  }
  function handleSubmitOrder() {
    if (items.length <= 0) {
      Alert.alert(
        'Carrinho vazio',
        'Escolha pelo menos um item para continuar.'
      );
    }
    console.tron.log(items);
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
              <AmountControllButton
                onPress={() => handleUpdateQuantity(item.id, false)}
              >
                <Icon name="remove" size={15} color="#727C8E" />
              </AmountControllButton>
              <Amount>{item.amount}</Amount>
              <AmountControllButton
                onPress={() => handleUpdateQuantity(item.id, true)}
              >
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

      <TotalAndSend>
        <Total>Total: R${totalPrice}</Total>
        {items.length !== 0 ? (
          <SendOrderButton onPress={() => handleSubmitOrder()}>
            <SendOrderText>Finalizar Pedido</SendOrderText>
          </SendOrderButton>
        ) : (
          <SendOrderButtonUnavailable onPress={() => handleSubmitOrder()}>
            <SendOrderText>Finalizar Pedido</SendOrderText>
          </SendOrderButtonUnavailable>
        )}
      </TotalAndSend>
    </Container>
  );
}

Cart.navigationOptions = {
  tabBarLabel: 'Meu Carrinho',
  tabBarIcon: ({ tintColor }) => (
    <Icon name="shopping-cart" size={20} color={tintColor} />
  ),
};
