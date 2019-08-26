import styled from 'styled-components/native';
import { RectButton, TouchableOpacity } from 'react-native-gesture-handler';

export const Container = styled.View`
  flex: 1;
  background: #f5f5f7;
`;

export const ImageBg = styled.View`
  background: #000;
  border-bottom-right-radius: 25px;
`;

export const ProductImage = styled.Image`
  height: 250px;
  border-bottom-right-radius: 25px;

  opacity: 0.5;
`;

export const InfoContainer = styled.View`
  flex-direction: column;

  padding-left: 30px;
  padding-right: 30px;
`;

export const NameAndPrice = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  margin-top: 30px;

  padding-bottom: 5px;
  border-bottom-width: 1px;
  border-bottom-color: #ddd;
`;

export const Name = styled.Text`
  font-weight: bold;
  color: #333;
  font-size: 22px;
`;

export const PriceContainer = styled.View`
  border-radius: 4px;
  background: #ff9f1c;
  padding: 5px;
`;

export const Price = styled.Text`
  font-weight: bold;
  font-size: 16px;

  color: #fff;
`;

export const DescriptionContainer = styled.View`
  margin-top: 10px;
  padding-bottom: 5px;
`;

export const Description = styled.Text`
  color: #999;
  font-size: 18px;
`;

export const QtdAndButton = styled.View`
  margin-top: 30px;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;

  padding-left: 20px;
  padding-right: 20px;
`;

export const QtdContainer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  height: 45px;

  padding-left: 15px;
  padding-right: 15px;

  background: #fff;
  border-radius: 4px;
`;

export const MinusQtdButton = styled(TouchableOpacity)`
  border-radius: 13px;
  height: 26px;
  width: 26px;

  background: #b5bcc9;

  align-items: center;
  justify-content: center;
`;

export const DecreaseText = styled.Text`
  font-weight: bold;
  font-size: 20px;
`;

export const QtdText = styled.Text`
  font-size: 20px;
  margin: 20px;

  text-align: center;
  justify-content: center;
`;

export const AddToCart = styled(RectButton)`
  background: #ff9f1c;
  border-radius: 4px;

  height: 45px;
  padding-left: 10px;
  padding-right: 10px;

  align-items: center;
  justify-content: center;
`;

export const AddToCartText = styled.Text`
  color: #fff;
  font-weight: bold;
`;
