import React, {Component} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import CardSet from './components/CardSet';


const cardData = {
  title: 'AVENGERS INFINITY WAR',
  image: 'https://tecreview.tec.mx/wp-content/uploads/2019/04/avengers-526x420.jpg',
  description: 'Avengers: Infinity War es una película estadounidense de superhéroes de 2018 basada en el equipo de superhéroes de Marvel Comics Los Vengadores, producida por Marvel Studios y distribuida por Walt Disney Studios Motion Pictures.',
  url: 'https://www.youtube.com/watch?v=PhUMUr1q22c',
};

export default class App extends React.Component {
  render (){
    return (
      <View style={styles.container}>
        <Text>Open up App.js to start working on your app!</Text>
        <CardSet></CardSet>    
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
  },
});
