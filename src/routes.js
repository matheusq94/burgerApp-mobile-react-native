import React from 'react';

import {
  createAppContainer,
  createSwitchNavigator,
  createBottomTabNavigator,
  createStackNavigator,
  getActiveChildNavigationOptions,
} from 'react-navigation';

import Icon from 'react-native-vector-icons/MaterialIcons';

import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';

import Dashboard from './pages/Dashboard';
import Details from './pages/Details';
import Cart from './pages/Cart';
import Orders from './pages/Orders';
import Profile from './pages/Profile';

export default (isSigned = false) =>
  createAppContainer(
    createSwitchNavigator(
      {
        Sign: createSwitchNavigator({
          SignIn,
          SignUp,
        }),
        App: createBottomTabNavigator(
          {
            Menu: createStackNavigator(
              {
                Dashboard,
                Details,
              },
              {
                headerLayoutPreset: 'center',
                navigationOptions: ({ navigation, screenProps }) => ({
                  tabBarVisible: true,
                  tabBarLabel: 'Cardápio',
                  tabBarIcon: ({ tintColor }) => (
                    <Icon
                      name="format-list-bulleted"
                      size={20}
                      color={tintColor}
                    />
                  ),
                  ...getActiveChildNavigationOptions(navigation, screenProps),
                }),
                defaultNavigationOptions: {
                  headerTransparent: true,
                  headerTitleStyle: {
                    fontWeight: 'bold',
                    color: '#fff',
                  },
                  headerLeftContainerStyle: { marginLeft: 20 },
                },
              }
            ),
            Cart,
            Orders,
            Profile,
          },
          {
            tabBarOptions: {
              keyboardHidesTabBar: true,
              activeTintColor: '#ff9f1c',
              inactiveTintColor: '#727C8E',
              style: {
                height: 70,
                paddingBottom: 10,
                paddingTop: 10,
                backgroundColor: '#fff',
                borderTopColor: '#fff',
                elevation: 50,
              },
            },
          }
        ),
      },
      {
        initialRouteName: isSigned ? 'App' : 'Sign',
      }
    )
  );
