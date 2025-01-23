import {
  Text,
  View,
  Image,
  StyleSheet,
  Button,
  Alert,
  TouchableOpacity,
} from "react-native";
const logo = require("../assets/images/bonjour-logo.png");

export default function Index() {
  return (
    <View style={styles.container}>
      <Image alt="logo" source={logo} style={styles.logo} />
      <TouchableOpacity
        style={styles.scanButtonContainer}
        onPress={() => {
          Alert.alert("SCAN");
        }}
      >
        <Text style={styles.scanButtonText}>SCAN</Text>
      </TouchableOpacity>
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
  scanButtonContainer: {
    marginTop: 70,
    paddingVertical: 10,
    paddingHorizontal: 50,
    borderRadius: 3,
    alignItems: "center",
    backgroundColor: "#D9D9D9B3", // 70% opacity
  },
  scanButtonText: {
    fontSize: 24,
    color: "#FFF",
  },
});
