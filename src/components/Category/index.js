import React from 'react';
import PropTypes from 'prop-types';

import Product from '~/components/Product';

import { Container, Title, List } from './styles';

export default function Category({ data, navigation }) {
  return (
    <Container>
      <Title>{data.category}</Title>
      <List
        data={data.products}
        keyExtractor={item => String(item.id)}
        renderItem={({ item }) => (
          <Product data={item} navigation={navigation} />
        )}
      />
    </Container>
  );
}

Category.propTypes = {
  data: PropTypes.shape({
    category: PropTypes.string,
    products: PropTypes.array,
  }).isRequired,
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};
