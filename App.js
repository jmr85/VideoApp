import React, {Component} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import CardSet from './components/CardSet';
import cards from './data';
import Constants from 'expo-constants';

export default class App extends React.Component {
  render (){
    return (
      <View style={styles.container}>
        <Text>Open up App.js to start working on your app!</Text>
        <CardSet items={cards}></CardSet>    
      </View>
    );
  }
  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: Constants.statusBarHeight,
  },
});
