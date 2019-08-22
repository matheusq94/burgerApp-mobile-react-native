import React, { useState, useRef } from 'react';
import { Alert } from 'react-native';

import { useDispatch, useSelector } from 'react-redux';

import PropTypes from 'prop-types';
import { signUpRequest } from '~/store/modules/auth/actions';

import Background from '~/components/Background';

import Input from '~/components/Input';
import Button from '~/components/Button';

import {
  Container,
  ImageBackground,
  BurgerApp,
  BemVindo,
  LoginText,
  Logo,
  Form,
  SignInText,
} from './styles';

export default function SignUp({ navigation }) {
  const dispatch = useDispatch();
  const loading = useSelector(state => state.auth.loading);

  const nameRef = useRef();
  const phoneRef = useRef();
  const passwordRef = useRef();
  const confirmPasswordRef = useRef();

  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  function handleSubmit() {
    if (!email || !name || !phone || !password || !confirmPassword) {
      return Alert.alert(
        'Preencha todos os campos',
        'Por favor, preencha todos os campos para continuar com o cadastro.'
      );
    }
    if (password !== confirmPassword) {
      return Alert.alert(
        'Senhas não coincidem',
        'Por favor, confirme a senha corretamente.'
      );
    }
    return dispatch(signUpRequest(email, name, phone, password));
  }

  return (
    <Background>
      <ImageBackground />
      <Container>
        <Logo />
        <BurgerApp>BurgerApp</BurgerApp>
        <BemVindo>Cadastro</BemVindo>
        <LoginText>Preencha os dados abaixo</LoginText>
        <Form>
          <Input
            style={{ marginTop: 10 }}
            icon="mail-outline"
            autoCorrect={false}
            autoCapitalize="none"
            placeholder="Seu e-mail"
            returnKeyType="next"
            onSubmitEditing={() => nameRef.current.focus()}
            value={email}
            onChangeText={setEmail}
          />
          <Input
            style={{ marginTop: 10 }}
            icon="person-outline"
            placeholder="Seu nome"
            returnKeyType="next"
            ref={nameRef}
            onSubmitEditing={() => phoneRef.current.focus()}
            value={name}
            onChangeText={setName}
          />
          <Input
            style={{ marginTop: 10 }}
            icon="phone"
            placeholder="Seu numero de telefone"
            keyboardType="phone-pad"
            returnKeyType="next"
            ref={phoneRef}
            onSubmitEditing={() => passwordRef.current.focus()}
            value={phone}
            onChangeText={setPhone}
            maxLength={9}
          />
          <Input
            style={{ marginTop: 10 }}
            secureTextEntry
            icon="lock-outline"
            placeholder="Sua senha secreta"
            returnKeyType="next"
            ref={passwordRef}
            onSubmitEditing={() => confirmPasswordRef.current.focus()}
            value={password}
            onChangeText={setPassword}
          />
          <Input
            style={{ marginTop: 10 }}
            secureTextEntry
            icon="lock"
            placeholder="Confirmação de senha secreta"
            returnKetType="send"
            ref={confirmPasswordRef}
            onSubmitEditing={handleSubmit}
            value={confirmPassword}
            onChangeText={setConfirmPassword}
          />
          <Button
            loading={loading}
            style={{ marginTop: 10 }}
            onPress={handleSubmit}
          >
            Cadastrar
          </Button>
        </Form>
        <SignInText onPress={() => navigation.navigate('SignIn')}>
          Ja sou cadastrado
        </SignInText>
      </Container>
    </Background>
  );
}

SignUp.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func,
  }),
};

SignUp.defaultProps = {
  navigation: PropTypes.shape,
};
