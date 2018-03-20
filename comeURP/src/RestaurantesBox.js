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
} from 'react-native';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class RestaurantesBox extends Component<Props> {
  render() {
    return (
      <View style={styles.restaurantesBox}>
          <View style={styles.image}>
            
          </View>
          <Text style={styles.name}>Nombre</Text>
        </View>
    );
  }
}

const styles = StyleSheet.create({
  restaurantesBox: {
    margin: 5,
    backgroundColor: 'white',
    //Solo para IOS
    shadowColor: 'black',
    shadowOpacity: .2,
    shadowOffset:{
      height: 1,
      width: -2,
    },
    //Solo para Android
    elevation: 3,
  },
  name: {
    textAlign: 'center',
    fontSize: 20,
    marginTop: 10,
  },
  image: {
    width: 130,
    height: 130,
  },
});
