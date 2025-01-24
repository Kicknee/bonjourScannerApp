import {
  Text,
  View,
  Image,
  StyleSheet,
  Button,
  Alert,
  TouchableOpacity,
} from "react-native";
import { CameraView, CameraType, useCameraPermissions } from "expo-camera";

const logo = require("../assets/images/bonjour-logo.png");

export default function Index() {
  const [permission, requestPermission] = useCameraPermissions();

  if (!permission) {
    // Camera permissions are still loading.
    return <View />;
  }

  if (!permission.granted) {
    // Camera permissions are not granted yet.
    return (
      <View style={styles.container}>
        <Text>We need your permission to show the camera</Text>
        <Button onPress={requestPermission} title="grant permission" />
      </View>
    );
  }

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
      <CameraView style={styles.camera} facing={"back"}>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.text}>Close</Text>
          </TouchableOpacity>
        </View>
      </CameraView>
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
    minHeight: "40%",
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
  camera: {
    flex: 1,
    position: "fixed",
    top: 0,
    left: 0,
    height: "100%",
    width: "100%",
  },
  buttonContainer: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: "transparent",
    margin: 64,
  },
  button: {
    flex: 1,
    alignSelf: "flex-end",
    alignItems: "center",
  },
  text: {
    fontSize: 24,
    fontWeight: "bold",
    color: "white",
  },
});
