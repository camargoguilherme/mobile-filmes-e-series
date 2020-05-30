import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';

import Background from '~/components/Background';
// import { Container } from './styles';

export default function Profile() {
  return <Background />;
}

Profile.navigationOptions = {
  tabBarLabel: 'Perfil',
  tabBarIcon: ({tintColor}) => <Icon name="user" size={25} color={tintColor} />,
};
