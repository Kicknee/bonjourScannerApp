import React from "react";
import { View, StyleSheet } from "react-native";

export default function Overlay() {
  return (
    <View style={styles.container}>
      <View style={[styles.mask, styles.topMask]} />
      <View style={styles.middleContainer}>
        <View style={[styles.mask, styles.leftMask]} />
        <View style={styles.scannerArea} />
        <View style={[styles.mask, styles.rightMask]} />
      </View>
      <View style={[styles.mask, styles.bottomMask]} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
  },
  mask: {
    backgroundColor: "rgba(0, 0, 0, 0.6)",
  },
  topMask: {
    width: "100%",
    height: "32.5%",
  },
  bottomMask: {
    width: "100%",
    height: "32.5%",
  },
  middleContainer: {
    width: "100%",
    height: "35%",
    flexWrap: "wrap",
  },
  leftMask: {
    width: "20%",
    height: "100%",
  },
  rightMask: {
    width: "20%",
    height: "100%",
  },

  scannerArea: {
    width: "60%",
    height: "100%",
    backgroundColor: "transparent",
    borderWidth: 2,
    borderColor: "#00FF00",
    borderRadius: 5,
  },
});
