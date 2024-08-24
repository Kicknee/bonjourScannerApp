import React from 'react';
import {Image, SafeAreaView, StyleSheet, Text} from 'react-native';

function App(): React.JSX.Element {
  return (
    <SafeAreaView style={{backgroundColor: 'black'}}>
      <Image source={require('./assets/bonjour-logo.png')} />
      <Text>Hello!</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {},
  title: {},
});

export default App;
