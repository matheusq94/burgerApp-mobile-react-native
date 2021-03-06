import styled from 'styled-components/native';
import { TouchableOpacity } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled.SafeAreaView`
  background-color: #f5f5f7;
  flex: 1;
`;

export const List = styled.FlatList`
  padding-top: 10px;
`;

export const CartItemContainer = styled.View`
  flex-direction: row;
  background: #fff;
  padding: 20px;
  border-bottom-width: 1px;
  border-bottom-color: #f5f5f7;
  justify-content: space-between;
`;

export const AmountControllContainer = styled.View`
  flex-direction: row;

  align-items: center;
  justify-content: center;
`;

export const AmountControllButton = styled(TouchableOpacity)`
  border-radius: 13px;
  height: 26px;
  width: 26px;

  background: #b5bcc9;

  align-items: center;
  justify-content: center;
`;

export const Amount = styled.Text`
  font-size: 16px;
  margin-left: 10px;
  margin-right: 10px;

  align-items: center;
  justify-content: center;
`;

export const InfoContainer = styled.View`
  flex-direction: row;

  align-items: center;
  justify-content: center;
`;

export const Name = styled.Text`
  font-size: 16px;
`;

export const SubBadge = styled.View`
  padding: 5px;
  background: #ff9f1c;
  border-radius: 4px;
`;

export const Subtotal = styled.Text`
  font-size: 16px;
  font-weight: bold;
  color: #fff;
`;

export const RemoveButton = styled(TouchableOpacity)`
  border-radius: 13px;
  height: 26px;
  width: 26px;

  background: #e74c3c;

  align-items: center;
  justify-content: center;
`;

export const TotalAndSend = styled.View`
  padding: 20px;
  background: #fff;

  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;
export const Total = styled.Text`
  font-size: 22px;
  font-weight: bold;

  color: #badc58;
`;
export const SendOrderButton = styled(RectButton)`
  padding-left: 20px;
  padding-right: 20px;
  border-radius: 4px;
  background: #ff9f1c;
  height: 45px;
  align-items: center;
  justify-content: center;
`;

export const SendOrderButtonUnavailable = styled(RectButton)`
  padding-left: 20px;
  padding-right: 20px;
  border-radius: 4px;
  background: #aaa;
  height: 45px;
  align-items: center;
  justify-content: center;
`;

export const SendOrderText = styled.Text`
  font-size: 16px;
  font-weight: bold;
  color: #fff;
`;
