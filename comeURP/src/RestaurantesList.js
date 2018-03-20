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
  TouchableOpacity,
} from 'react-native';

import RestaurantesBox from './RestaurantesBox'
import { Actions } from 'react-native-router-flux'

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class RestaurantesList extends Component<Props> {

  RestaurantePress() {
    Actions.restauranteDetails()
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.inicio}>Restaurantes cerca a la URP</Text>
        <View style={styles.listas}>
          <TouchableOpacity 
             onPress={() => this.RestaurantePress()}>
            <RestaurantesBox /> 
          </TouchableOpacity>
          <TouchableOpacity 
             onPress={() => this.RestaurantePress()}>
            <RestaurantesBox /> 
          </TouchableOpacity>
          <TouchableOpacity 
             onPress={() => this.RestaurantePress()}>
            <RestaurantesBox /> 
          </TouchableOpacity>
          <TouchableOpacity 
             onPress={() => this.RestaurantePress()}>
            <RestaurantesBox /> 
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
  inicio: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  listas: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 30,
    marginTop: 20,
    flexWrap: 'wrap',
  }
});
