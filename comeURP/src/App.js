/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  ViewPagerAndroid
} from 'react-native';

import {Scene, Router} from 'react-native-router-flux';

import WelcomeView from './WelcomeView'
import RestaurantesList from './RestaurantesList'
import RestauranteDetails from './RestauranteDetails'

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class App extends Component<Props> {
  render() {
    return <Router>
      <Scene key="root">
        <Scene key="welcome" component={WelcomeView} hideNavBar/>
        <Scene key="restaurantes" component={RestaurantesList} hideNavBar/>
        <Scene key="restauranteDetails" component={RestauranteDetails} />
      </Scene>
    </Router>
  }
}

