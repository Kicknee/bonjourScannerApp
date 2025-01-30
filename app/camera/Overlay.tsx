import React from "react";
import { View, StyleSheet } from "react-native";

const Overlay = () => {
  return (
    <View style={styles.container}>
      <View style={styles.mask} />
      <View style={styles.scannerFrameContainer}>
        <View style={styles.scannerFrame} />
      </View>
      <View style={styles.mask} />
    </View>
  );
};

export default Overlay;

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    flexDirection: "column",
  },
  mask: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  scannerFrameContainer: {
    height: 270,
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
  },
  // scannerFrame: {
  //   width: 270,
  //   height: 270,
  //   borderWidth: 2,
  //   borderColor: "#00FF00",
  //   borderRadius: 8,
  // },
});
