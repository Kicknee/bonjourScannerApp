import { Text, View, Image, StyleSheet, TouchableOpacity } from "react-native";
import { useCameraPermissions } from "expo-camera";
import ScannerQR from "./camera/ScannerQR";
import { useState } from "react";

const logo = require("../assets/images/bonjour-logo.png");

export default function Index() {
  const [permission, requestPermission] = useCameraPermissions();
  const [isEnabledScannerQR, setIsEnabledScannerQR] = useState(false);

  return (
    <View style={styles.container}>
      <Image alt="logo" source={logo} style={styles.logo} />
      {permission && !permission.granted ? (
        <TouchableOpacity
          style={styles.scanButtonContainer}
          onPress={requestPermission}
        >
          <Text style={styles.buttonText}>GRANT PERMISSION</Text>
        </TouchableOpacity>
      ) : (
        <TouchableOpacity
          style={styles.scanButtonContainer}
          onPress={() => {
            setIsEnabledScannerQR(true);
          }}
        >
          <Text style={styles.buttonText}>SCAN</Text>
        </TouchableOpacity>
      )}
      {!!isEnabledScannerQR && (
        <ScannerQR setIsEnabledScannerQR={setIsEnabledScannerQR} />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
  buttonText: {
    fontSize: 24,
    color: "#FFF",
  },
});
