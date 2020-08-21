import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {createSwitchNavigator,createAppContainer} from 'react-navigation';
import HomeScreen from './Screens/HomeScreen';
import TaskScreen from './Screens/TaskScreen';
export default class App extends Component {
  render(){
  return (
    <View style={styles.container}>
      <AppContainer></AppContainer>
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

const MySwitchNavigator=createSwitchNavigator({
  HomeScreen:{screen:HomeScreen},
  TaskScreen:{screen:TaskScreen},
});
const AppContainer=createAppContainer(MySwitchNavigator)