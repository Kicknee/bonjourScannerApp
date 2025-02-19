import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Alert,
  Linking,
} from "react-native";
import { useCameraPermissions } from "expo-camera";
import CameraQR from "../components/CameraQR";
import { useEffect, useState } from "react";
import { useRouter } from "expo-router";
import Logo from "@/components/Logo";
import Button from "@/components/Button";

export type QRDATA = {
  STYLE: string;
  TYPE: string;
  PLACE: string;
  LEFT: number;
  COLOR: string;
  BRAND: string;
  SHIPPING_COMPANY: string;
};
const sample: QRDATA = {
  STYLE: "P2Q3R",
  TYPE: "T-SHIRT",
  PLACE: "Z4",
  LEFT: Number("170"),
  COLOR: "POMARANCZOWY",
  BRAND: "LEVI’S",
  SHIPPING_COMPANY: "MAERSK LINE",
};

export default function Index() {
  const [permission, requestPermission] = useCameraPermissions();
  const [isEnabledScannerQR, setIsEnabledScannerQR] = useState(false);
  const [scannedData, setScannedData] = useState<QRDATA | undefined>(sample);
  const router = useRouter();

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

  useEffect(() => {
    console.log("SCANNED", scannedData);
  }, [scannedData]);

  const onSaveScannedData = (data: QRDATA) => {
    setScannedData(data);
    router.push({
      pathname: "/product",
      params: sample,
    });
  };

  return (
    <View style={styles.container}>
      <Logo height={30} />
      {permission && !permission.granted ? (
        <Button label={"GRANT PERMISSION"} onPress={handleRequestPermission} />
      ) : (
        <Button
          label={"SCAN"}
          onPress={() => {
            // setIsEnabledScannerQR(true);
            router.push({
              pathname: "/product",
              params: sample,
            });
          }}
        />
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
});
