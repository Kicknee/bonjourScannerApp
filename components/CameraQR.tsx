import { Modal, View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { CameraView } from "expo-camera";
import { SafeAreaView } from "react-native-safe-area-context";
import CameraOverlay from "./CameraOverlay";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";

type Props = {
  isVisible: boolean;
  onCloseCameraQR: () => void;
};

export default function CameraQR({ isVisible, onCloseCameraQR }: Props) {
  return (
    <Modal animationType="slide" transparent={true} visible={isVisible}>
      <View style={styles.modalContent}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>SCAN QR</Text>
          <TouchableOpacity onPress={onCloseCameraQR}>
            <MaterialIcons name="close" color="#fff" size={22} />
          </TouchableOpacity>
        </View>
        <CameraView
          style={{
            height: "100%",
            width: "100%",
          }}
          facing="back"
          barcodeScannerSettings={{ barcodeTypes: ["qr"] }}
          onBarcodeScanned={({ data }) => {
            console.log("data", data);
          }}
        >
          <CameraOverlay />
        </CameraView>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  modalContent: {
    height: "90%",
    width: "100%",
    borderTopLeftRadius: 18,
    borderTopRightRadius: 18,
    position: "absolute",
    bottom: 0,
  },
  titleContainer: {
    zIndex: 10,
    position: "absolute",
    top: 0,
    height: "5%",
    width: "100%",
    backgroundColor: "#464C55",
    borderTopRightRadius: 18,
    borderTopLeftRadius: 18,
    paddingHorizontal: 20,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  title: {
    color: "#fff",
    fontSize: 16,
    flex: 1,
    textAlign: "center",
  },
});

// const styles = StyleSheet.create({
//   buttonContainer: {
//     position: "absolute",
//     zIndex: 11,
//     bottom: 20,
//     alignSelf: "center",
//     paddingVertical: 10,
//     paddingHorizontal: 50,
//     borderRadius: 3,
//     alignItems: "center",
//     backgroundColor: "#D9D9D9B3", // 70% opacity
//   },
//   scanButtonText: {
//     fontSize: 24,
//     color: "#FFF",
//   },
//   // button: {
//   //   flex: 1,
//   //   alignSelf: "flex-end",
//   //   alignItems: "center",
//   // },
//   text: {
//     fontSize: 24,
//     fontWeight: "bold",
//     color: "white",
//   },
// });
