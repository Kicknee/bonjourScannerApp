import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
import { CameraView, CameraType, useCameraPermissions } from "expo-camera";
import { SafeAreaView } from "react-native-safe-area-context";
import Overlay from "./Overlay";

export default function ScannerQR({ setEnableScanner }) {
  return (
    <SafeAreaView style={StyleSheet.absoluteFillObject}>
      <CameraView
        style={StyleSheet.absoluteFillObject}
        facing="back"
        barcodeScannerSettings={{ barcodeTypes: ["qr"] }}
        onBarcodeScanned={({ data }) => {
          console.log("data", data);
        }}
      >
        <Overlay />
        <TouchableOpacity
          style={styles.buttonContainer}
          onPress={() => {
            setEnableScanner(false);
          }}
        >
          <Text style={styles.text}>Close</Text>
        </TouchableOpacity>
      </CameraView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    position: "absolute",
    bottom: 20,
    alignSelf: "center",
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
