import React, { useState, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { StatusBar, Alert } from 'react-native';

import PropTypes from 'prop-types';

import Background from '~/components/Background';

import Input from '~/components/Input';
import Button from '~/components/Button';

import { signInRequest } from '~/store/modules/auth/actions';

import {
  Container,
  ImageBackground,
  BurgerApp,
  BemVindo,
  LoginText,
  Logo,
  Form,
  SignUpText,
} from './styles';

export default function SignIn({ navigation }) {
  const dispatch = useDispatch();
  const passwordRef = useRef();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const loading = useSelector(state => state.auth.loading);

  async function handleSubmit() {
    if (!email || !password) {
      return Alert.alert(
        'Preencha todos os campos',
        'Por favor, para continuar com o login, preencha todos os campos.'
      );
    }

    return dispatch(signInRequest(email, password));
  }

  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#1d2126" />
      <Background>
        <ImageBackground />
        <Container>
          <Logo />
          <BurgerApp>BurgerApp</BurgerApp>
          <BemVindo>Bem Vindo!</BemVindo>
          <LoginText>Efetue o login para continuar</LoginText>
          <Form>
            <Input
              style={{ marginTop: 10 }}
              autoCorrect={false}
              autoCapitalize="none"
              icon="mail-outline"
              placeholder="Seu E-mail"
              returnKeyType="next"
              onSubmitEditing={() => {
                passwordRef.current.focus();
              }}
              value={email}
              onChangeText={setEmail}
            />
            <Input
              style={{ marginTop: 10 }}
              secureTextEntry
              icon="lock-outline"
              placeholder="Sua senha secreta"
              ref={passwordRef}
              returnKetType="send"
              onSubmitEditing={handleSubmit}
              value={password}
              onChangeText={setPassword}
            />
            <Button
              loading={loading}
              style={{ marginTop: 10 }}
              onPress={handleSubmit}
            >
              Entrar
            </Button>
          </Form>
          <SignUpText onPress={() => navigation.navigate('SignUp')}>
            Criar conta gratuita
          </SignUpText>
        </Container>
      </Background>
    </>
  );
}

SignIn.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func,
  }),
};

SignIn.defaultProps = {
  navigation: PropTypes.shape,
};
