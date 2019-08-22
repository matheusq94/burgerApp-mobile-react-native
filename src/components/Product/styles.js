import styled from 'styled-components/native';
import { TouchableOpacity } from 'react-native';

export const Container = styled.View`
  margin-bottom: 15px;
  margin-left: 10px;
  margin-right: 10px;
  padding: 10px;
  border-radius: 4px;
  background: #fff;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const Left = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const Picture = styled.Image`
  width: 70px;
  height: 70px;
  border-radius: 4px;
`;

export const Info = styled.View`
  margin-left: 15px;
`;

export const Name = styled.Text`
  font-weight: bold;
  font-size: 14px;
  color: #333;
`;

export const Description = styled.Text`
  color: #999;
  font-size: 13px;
  margin-top: 2px;

  max-width: 200px;
`;

export const Price = styled.Text`
  color: #ff9f1c;
  font-weight: bold;
  font-size: 14px;
  margin-top: 2px;
`;

export const Button = styled(TouchableOpacity)`
  width: 26px;
  height: 26px;
  border-radius: 13px;
  background: #b5bcc9;

  align-items: center;
  justify-content: center;
`;
