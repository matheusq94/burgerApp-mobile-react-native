import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

import PropTypes from 'prop-types';

import api from '~/services/api';

import Category from '~/components/Category';
import PageHeader from '~/components/PageHeader';
import { Container, List } from './styles';

export default function Dashboard({ navigation }) {
  const [products, setProducts] = useState([]);
  const token = useSelector(state => state.auth.token);
  api.defaults.headers.Authorization = `Bearer ${token}`;

  useEffect(() => {
    async function loadProducts() {
      const response = await api.get('products');

      setProducts(response.data);
      console.tron.log(response);
    }
    loadProducts();
  }, []);

  return (
    <Container>
      <PageHeader title="Cardápio" />

      <List
        data={products}
        keyExtractor={item => String(item.id)}
        renderItem={({ item }) => (
          <Category data={item} navigation={navigation} />
        )}
        navigation={navigation}
      />
    </Container>
  );
}

Dashboard.navigationOptions = {
  header: null,
};

Dashboard.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};
