import styled from 'styled-components/native';
import Img from '../../imgs/background-picture.jpg';

import logoImg from '~/imgs/burger.png';

export const ImageBackground = styled.ImageBackground.attrs({
  source: Img,
})`
  flex: 1;
  opacity: 0.1;
  justify-content: center;
  align-items: center;
`;

export const Container = styled.View`
  position: absolute;
  flex: 1;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
`;

export const Logo = styled.Image.attrs({
  source: logoImg,
})`
  width: 72px;
  height: 72px;
`;

export const BurgerApp = styled.Text`
  font-size: 28px;
  font-weight: bold;
  color: #ff9f1c;
`;

export const BemVindo = styled.Text`
  margin-top: 30px;
  font-size: 22px;
  font-weight: bold;
  color: #fff;
`;

export const LoginText = styled.Text`
  font-size: 14px;
  color: #fff;
`;

export const Form = styled.View`
  margin-top: 10px;
  align-items: center;
  justify-content: center;
`;

export const SignInText = styled.Text`
  margin-top: 30px;
  color: #ff9f1c;
`;
