import { Modal, View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { CameraView } from "expo-camera";
import CameraOverlay from "./CameraOverlay";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";

type Props = {
  isVisible: boolean;
  onCloseCameraQR: () => void;
  saveData: (data) => void;
};

export default function CameraQR({
  isVisible,
  onCloseCameraQR,
  saveData,
}: Props) {
  return (
    <Modal animationType="slide" transparent={true} visible={isVisible}>
      <View style={styles.modalContent}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>SCAN QR</Text>
          <TouchableOpacity onPress={onCloseCameraQR}>
            <MaterialIcons name="close" color="#fff" size={24} />
          </TouchableOpacity>
        </View>

        <CameraView
          style={styles.cameraContainer}
          facing="back"
          barcodeScannerSettings={{ barcodeTypes: ["qr"] }}
          onBarcodeScanned={({ data }) => {
            console.log("data", data);
            saveData(data);
            onCloseCameraQR();
          }}
        >
          <CameraOverlay />
        </CameraView>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  cameraContainer: {
    ...StyleSheet.absoluteFillObject,
  },
  modalContent: {
    height: "90%",
    width: "100%",
    position: "absolute",
    bottom: 0,
    borderTopLeftRadius: 18,
    borderTopRightRadius: 18,
    backgroundColor: "rgba(0, 0, 0, 0)",
  },
  titleContainer: {
    zIndex: 1,
    position: "relative",
    top: 10,
    height: "5%",
    width: "100%",
    borderTopRightRadius: 18,
    borderTopLeftRadius: 18,
    paddingHorizontal: 20,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  title: {
    color: "#fff",
    fontSize: 19,
    flex: 1,
    textAlign: "center",
  },
});
