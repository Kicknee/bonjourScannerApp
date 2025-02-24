import { View, StyleSheet, Alert, Linking } from "react-native";
import { useCameraPermissions } from "expo-camera";
import CameraQR from "../components/CameraQR";
import { useEffect, useState } from "react";
import { useRouter } from "expo-router";
import Logo from "@/components/Logo";
import Button from "@/components/Button";
import Separator from "@/components/Separator";

export type QRDATA = {
  STYLE: string;
  TYPE: string;
  PLACE: string;
  LEFT: number;
  COLOR: string;
  BRAND: string;
  SHIPPING_COMPANY: string;
};

export default function Index() {
  const [permission, requestPermission] = useCameraPermissions();
  const [isEnabledScannerQR, setIsEnabledScannerQR] = useState(false);
  const [scannedData, setScannedData] = useState<QRDATA | undefined>(undefined);
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

  useEffect(() => {}, [scannedData]);

  const onSaveScannedData = (data: QRDATA) => {
    setScannedData(data);
    router.push({
      pathname: "/product",
      params: data,
    });
  };

  return (
    <View style={styles.container}>
      <Logo height={30} />
      <Separator marginVertical={40} />
      {permission && !permission.granted ? (
        <Button label="GRANT PERMISSION" onPress={handleRequestPermission} />
      ) : (
        <Button
          label="SCAN"
          onPress={() => {
            setIsEnabledScannerQR(true);
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
