import { Text, View, Image, StyleSheet, Button, Alert } from "react-native";
const logo = require("../assets/images/bonjour-logo.png");

export default function Index() {
  return (
    <View style={styles.container}>
      <Image alt="logo" source={logo} style={styles.logo} />
      <Button
        title="SCAN"
        onPress={() => {
          Alert.alert("SCAN");
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    backgroundColor: "black",
    alignItems: "center",
  },
  logo: {
    height: "40%",
    aspectRatio: "1 / 1",
    marginTop: 30,
  },
  scanButton: {
    color: "red",
    marginTop: 70,
  },
});
