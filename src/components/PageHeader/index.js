import React from 'react';
import PropTypes from 'prop-types';
import { StatusBar } from 'react-native';
import ElevatedView from 'react-native-elevated-view';

import { Container, Header, PageTitle } from './styles';

export default function PageHeader({ title }) {
  return (
    <Container>
      <StatusBar barStyle="dark-content" backgroundColor="#fff" />
      <ElevatedView elevation={1}>
        <Header>
          <PageTitle>{title}</PageTitle>
        </Header>
      </ElevatedView>
    </Container>
  );
}

PageHeader.propTypes = {
  title: PropTypes.string.isRequired,
};
