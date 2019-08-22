import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  background-color: #f5f5f7;
  flex: 1;
`;

export const List = styled.FlatList.attrs({
  showsVerticalScrollIndicator: false,
})``;

export const Header = styled.View`
  justify-content: center;
  align-items: center;
  padding: 20px;
  background: #fff;
`;

export const PageTitle = styled.Text`
  font-weight: bold;
  font-size: 16px;
`;
