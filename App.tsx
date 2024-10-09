import React from 'react';
import {
  Alert,
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
} from 'react-native';

function App(): React.JSX.Element {
  return (
    <SafeAreaView style={styles.container}>
      <Image
        style={styles.logo}
        source={require('./assets/bonjour-logo.png')}
      />
      <TouchableOpacity
        onPress={() => {
          Alert.alert('swew');
        }}>
        <Text style={styles.scanButton}>SCAN</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    backgroundColor: 'black',
    alignItems: 'center',
  },
  logo: {
    height: '40%',
    aspectRatio: '1 / 1',
    marginTop: 30,
  },
  scanButton: {
    color: 'red',
    marginTop: 70,
  },
});

export default App;
