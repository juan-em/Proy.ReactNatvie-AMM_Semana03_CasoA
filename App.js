import React from "react";
import {StyleSheet, Text, View} from 'react-native';

import Header from './src/Header'
import Boxes from './src/Boxes'

const App = () => {
  return (
    <View style={styles.container}>
      <Header/>
      <Boxes/>
    </View>
  )
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
})