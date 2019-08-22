import styled from 'styled-components/native';

export const Container = styled.View``;

export const Title = styled.Text`
  margin-left: 15px;
  margin-bottom: 15px;

  font-weight: bold;
  font-size: 20px;
  font-style: italic;
  color: #d8dce3;
`;

export const List = styled.FlatList.attrs({
  showsVerticalScrollIndicator: false,
  contentContainerStyle: { padding: 10 },
})``;
