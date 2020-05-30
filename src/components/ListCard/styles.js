import styled from 'styled-components/native';
import {Dimensions} from 'react-native';

const {width} = Dimensions.get('screen');
const {height} = Dimensions.get('screen');

export const Container = styled.SafeAreaView`
  flex: 1;
  align-items: center;
`;

export const Card = styled.TouchableOpacity`
  align-items: center;
  flex-flow: column;
  margin: 4px 4px;
  padding-bottom: 10px;
`;

export const Image = styled.ImageBackground`
  width: ${width * 0.3}px;
  height: ${height * 0.23}px;
  background-color: #eee;
`;
