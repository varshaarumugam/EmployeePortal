/* jshint ignore:start */

import React, {PureComponent} from 'react';
import {
  View,
  Image,
  TouchableOpacity,
  Dimensions,
  StyleSheet,
  Platform,
  Text,
} from 'react-native';

import {Icon} from 'react-native-elements';
import {createStackNavigator} from 'react-navigation-stack';
import LoginScreen from '@components/StartupComponent/Login';
import DashboardScreen from '@components/Dashboard/Employee';
export const MainScreenNavigator = createStackNavigator (
  {
    Login: LoginScreen,
    Dashboard: DashboardScreen,
  },
  {
    initialRouteName: 'Login',
  }
);
export default MainScreenNavigator;
