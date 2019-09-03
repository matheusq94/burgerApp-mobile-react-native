import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled.View``;

export const ProfileInfoContainer = styled.View`
  justify-content: center;

  margin-top: 30px;
  padding: 10px;

  background: #fff;
`;

export const ProfileInfoLine = styled.View`
  flex-direction: row;
  padding-top: 20px;
  padding-bottom: 20px;
  border-bottom-width: 1px;
  border-bottom-color: #eee;
  justify-content: space-between;
`;
export const Info = styled.View`
  flex-direction: row;
`;

export const Label = styled.Text`
  font-weight: bold;
  font-size: 18px;
  color: #999;
`;

export const ProfileText = styled.Text`
  font-weight: bold;
  font-size: 18px;

  margin-left: 10px;
`;

export const ChangeInfo = styled.Text`
  font-size: 18px;
  color: #3498db;
`;

export const LogOutButton = styled(RectButton)`
  margin-top: 30px;

  align-items: center;
  justify-content: center;
  border-radius: 4px;
  height: 45px;

  background: #e74c3c;
`;

export const LogOutText = styled.Text`
  font-weight: bold;
  color: #fff;
`;
