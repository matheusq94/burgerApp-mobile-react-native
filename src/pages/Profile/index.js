import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Icon from 'react-native-vector-icons/MaterialIcons';
import PropTypes from 'prop-types';
import { signOut } from '~/store/modules/auth/actions';

import Header from '~/components/PageHeader';

import {
  Container,
  Label,
  ProfileText,
  ProfileInfoContainer,
  ProfileInfoLine,
  ChangeInfo,
  Info,
  LogOutButton,
  LogOutText,
} from './styles';

export default function Profile() {
  const dispatch = useDispatch();
  const profile = useSelector(state => state.user.profile);
  console.tron.log(profile);

  function handleSignOut() {
    dispatch(signOut());
  }

  return (
    <Container>
      <Header title="Perfil" />
      <ProfileInfoContainer>
        <ProfileInfoLine>
          <Info>
            <Label>Nome:</Label>
            <ProfileText>{profile.name}</ProfileText>
          </Info>
          <ChangeInfo>Alterar</ChangeInfo>
        </ProfileInfoLine>
        <ProfileInfoLine>
          <Info>
            <Label>Email:</Label>
            <ProfileText>{profile.email}</ProfileText>
          </Info>
          <ChangeInfo>Alterar</ChangeInfo>
        </ProfileInfoLine>
        <ProfileInfoLine>
          <Info>
            <Label>Telefone:</Label>
            <ProfileText>{profile.phone}</ProfileText>
          </Info>
          <ChangeInfo>Alterar</ChangeInfo>
        </ProfileInfoLine>
        <ProfileInfoLine>
          <Info>
            <Label>Endereço:</Label>
            <ProfileText>Av. Exemplo 732</ProfileText>
          </Info>
          <ChangeInfo>Alterar</ChangeInfo>
        </ProfileInfoLine>

        <LogOutButton onPress={() => handleSignOut()}>
          <LogOutText>LogOut</LogOutText>
        </LogOutButton>
      </ProfileInfoContainer>
    </Container>
  );
}

function ColoredIcon({ tintColor }) {
  return <Icon name="person" size={20} color={tintColor} />;
}

Profile.navigationOptions = {
  tabBarLabel: 'Perfil',
  tabBarIcon: ColoredIcon,
};

ColoredIcon.propTypes = {
  tintColor: PropTypes.string.isRequired,
};
