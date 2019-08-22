import React, { useState, useEffect } from 'react';
import { StatusBar } from 'react-native';
import ElevatedView from 'react-native-elevated-view';

import api from '~/services/api';

import Category from '~/components/Category';
import { Container, List, Header, PageTitle } from './styles';

export default function Dashboard({ navigation }) {
  const [products, setProducts] = useState([]);
  // console.tron.log(props);

  useEffect(() => {
    async function loadProducts() {
      const response = await api.get('products', {
        headers: {
          Authorization:
            'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwiaWF0IjoxNTY2MzM4NjYzLCJleHAiOjE1NjY5NDM0NjN9.lUMlXlsaI5ogbawMWfA_wkeu7BXsTQdxTZtjvTz0NPM',
        },
      });

      setProducts(response.data);
    }
    loadProducts();
  }, []);

  return (
    <Container>
      <StatusBar barStyle="dark-content" backgroundColor="#fff" />
      <ElevatedView elevation={1}>
        <Header>
          <PageTitle>Cardápio</PageTitle>
        </Header>
      </ElevatedView>

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

Dashboard.navigationOptions = ({ navigation }) => ({
  header: null,
});
