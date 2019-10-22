/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import MainScreenNavigator from '@config/route';
import {Provider} from 'react-redux';
import configureStore from '@app/redux/store';
import {createAppContainer} from 'react-navigation';
const Appindex = createAppContainer (MainScreenNavigator);

const store = configureStore ();

if (__DEV__) {
  /* eslint no-undef: 0 */
  XMLHttpRequest = GLOBAL.originalXMLHttpRequest
    ? GLOBAL.originalXMLHttpRequest
    : GLOBAL.XMLHttpRequest;
}

class App extends Component {
  constructor () {
    super ();

    this.state = {};
  }

  componentDidMount () {}

  componentWillUnmount () {}
  render () {
    return (
      <Provider store={store}>

        <Appindex />

      </Provider>
    );
  }
}

export default App;
