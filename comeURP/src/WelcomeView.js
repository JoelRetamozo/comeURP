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
  ViewPagerAndroid,
  Button,
  Image,
} from 'react-native';

import { Actions } from 'react-native-router-flux'

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class WelcomeView extends Component<Props> {
  
  onPressEmpecemos(){
    Actions.restaurantes()
  }

  render() {
    return (
      
        <ViewPagerAndroid style={styles.viewPager} initialPage={0}>
          <View style={[styles.container, styles.pageStyle]} key="1">
            <Image
            style={{width: 400, height: 400}}
            source={{uri: 'https://s3.us-east-2.amazonaws.com/imgcomeurp/Come.png'}}
            />
          </View>

          <View style={[styles.container, styles.pageStyle]} key="2">
            <Text style={styles.instructions}>Los restaurantes más cercanos a la URP en un solo lugar!</Text>
            <Button onPress={this.onPressEmpecemos} title="Dale Click Aquí!" color="#841584" accessibilityLabel="Learn more about this purple button" />
          </View>
    
<View style={[styles.container, styles.pageStyle]} key="2">
            <Text style={styles.instructions}>Los restaurantes más cercanos a la URP en un solo lugar!</Text>
            <Button onPress={this.onPressEmpecemos} title="SI LE DAS CLICK TE CAGAS LA PROGRA !" color="#841584" accessibilityLabel="Learn more about this purple button" />
          </View>
    

    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  viewPager: {
    flex: 1,
  },
  pageStyle:{
    alignItems: 'center',
    padding: 10,
  },
});
