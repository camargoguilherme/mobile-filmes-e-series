import React from 'react';
import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {
  createBottomTabNavigator,
  createMaterialTopTabNavigator,
} from 'react-navigation-tabs';

import {createStackNavigator} from 'react-navigation-stack';

import Icon from 'react-native-vector-icons/FontAwesome';

import Profile from './pages/Profile';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';

import Serie from './pages/Serie';
import SerieDetail from '~/pages/SerieDetail';

import Filme from './pages/Filme';
import FilmeDetail from '~/pages/FilmeDetail';

const SwitchNavigator = createSwitchNavigator({
  SignIn,
  SignUp,
});

const StackSerie = createStackNavigator(
  {
    Serie,
    SerieDetail,
  },
  {headerMode: 'none'}
);

const StackFilme = createStackNavigator(
  {
    Filme,
    FilmeDetail,
  },
  {headerMode: 'none'}
);

const TopTabNavigator = createMaterialTopTabNavigator(
  {
    Serie: {
      screen: StackSerie,
      navigationOptions: {
        tabBarLabel: 'Series',
      },
    },
    Filme: {
      screen: StackFilme,
      navigationOptions: {
        tabBarLabel: 'Filmes',
      },
    },
  },
  {
    tabBarOptions: {
      contentContainerStyle: {
        justifyContent: 'space-evenly',
      },
      indicatorStyle: {
        backgroundColor: 'transparent',
      },
      activeTintColor: '#FFF',
      inactiveTintColor: 'rgba(255, 255, 255, .4)',
      labelStyle: {
        fontSize: 12,
      },
      tabStyle: {
        justifyContent: 'center',
        backgroundColor: 'transparent',
        width: 100,
      },
      style: {
        alignContent: 'stretch',
        backgroundColor: 'rgba(51,51,51, 1)',
      },
    },
  }
);

const BottomTabNavigator = createBottomTabNavigator(
  {
    Home: {
      screen: TopTabNavigator,
      navigationOptions: {
        tabBarLabel: 'Inicio',
        tabBarIcon: ({tintColor}) => (
          <Icon name="home" size={25} color={tintColor} />
        ),
      },
    },
    Profile,
  },
  {
    tabBarOptions: {
      keyboardHidesTabBar: true,
      activeTintColor: '#FFF',
      style: {
        backgroundColor: 'rgba(51, 51, 51, 1)',
      },
      inactiveTintColor: 'rgba(255,255,255, .4)',
    },
  }
);

export default (isSigned = false) =>
  createAppContainer(
    createSwitchNavigator(
      {
        Sign: SwitchNavigator,
        App: BottomTabNavigator,
      },
      {
        initialRouteName: isSigned ? 'App' : 'Sign',
      }
    )
  );
