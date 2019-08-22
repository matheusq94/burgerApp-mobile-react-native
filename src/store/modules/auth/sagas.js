import { Alert } from 'react-native';
import { takeLatest, call, put, all, delay } from 'redux-saga/effects';
import api from '~/services/api';
import { signInSuccess, signFailure } from './actions';

export function* signIn({ payload }) {
  try {
    const { email, password } = payload;

    const response = yield call(api.post, 'sessions', {
      email,
      password,
    });

    const { token, user } = response.data;

    api.defaults.headers.Authorization = `Bearer ${token}`;

    yield delay(3000);
    yield put(signInSuccess(token, user));
  } catch (err) {
    Alert.alert('Falha na autenticação', 'Verifique seus dados.');
  }
}

export function* signUp({ payload }) {
  try {
    const { email, name, phone, password } = payload;

    yield call(api.post, 'users', {
      email,
      name,
      phone,
      password,
    });

    yield delay(3000);
    yield put(signFailure());
    Alert.alert('Registro completo', 'Usuário cadastrado com sucesso.');
  } catch (err) {
    Alert.alert('Falha no cadastro', 'verifique seus dados.');
  }
}

export default all([
  takeLatest('@auth/SIGN_IN_REQUEST', signIn),
  takeLatest('@auth/SIGN_UP_REQUEST', signUp),
]);
