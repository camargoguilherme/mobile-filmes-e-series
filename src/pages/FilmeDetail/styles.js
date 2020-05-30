import styled from 'styled-components/native';

import {Dimensions} from 'react-native';

const {width} = Dimensions.get('screen');
const {height} = Dimensions.get('screen');

export const Container = styled.ScrollView`
  flex: 1;
`;

export const Poster = styled.Image`
  width: ${width}px;
  height: ${height * 0.25}px;
`;

export const Content = styled.View`
  flex-direction: column;
`;

export const Title = styled.Text`
  font-size: 25px;
  color: #fff;
  font-weight: bold;
  text-align: left;
  margin: 4px 8px;
`;

export const Resume = styled.Text`
  font-size: 16px;
  color: #fff;
  text-align: left;
  margin: 0 8px;
  margin-bottom: 12px;
`;

export const Infos = styled.Text`
  font-size: 14px;
  color: #fff;
  text-align: left;
  margin: 0 8px;
`;
