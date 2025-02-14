import {
  Text,
  View,
  Image,
  StyleSheet,
  TouchableOpacity,
  Alert,
  Linking,
} from "react-native";
import { useCameraPermissions } from "expo-camera";
import CameraQR from "../components/CameraQR";
import { useState } from "react";

const logo = require("../assets/images/bonjour-logo.png");

export default function Index() {
  const [permission, requestPermission] = useCameraPermissions();
  const [isEnabledScannerQR, setIsEnabledScannerQR] = useState(false);
  const [scannedData, setScannedData] = useState(undefined);

  const handleRequestPermission = () => {
    if (!permission?.granted) {
      requestPermission();
    } else {
      Alert.alert(
        "Camera access required",
        "You need to manually enable camera access in the app settings.",
        [
          { text: "Cancel", style: "cancel" },
          { text: "Open Settings", onPress: () => Linking.openSettings() },
        ]
      );
    }
  };

  const onCloseCameraQR = () => {
    setIsEnabledScannerQR(false);
  };

  const onSaveScannedData = (data) => {
    setScannedData(data);
  };

  return (
    <View style={styles.container}>
      <Image alt="logo" source={logo} style={styles.logo} />
      {permission && !permission.granted ? (
        <TouchableOpacity
          style={styles.scanButtonContainer}
          onPress={handleRequestPermission}
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
        <CameraQR
          isVisible={isEnabledScannerQR}
          onCloseCameraQR={onCloseCameraQR}
          saveData={onSaveScannedData}
        />
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
