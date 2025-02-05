import React from "react";
import { View, StyleSheet } from "react-native";
import Svg, { Defs, ClipPath, Polygon, Rect } from "react-native-svg";

const Overlay = () => {
  return (
    <View style={styles.container}>
      <Svg style={StyleSheet.absoluteFill} viewBox="0 0 100 100">
        <Defs>
          <ClipPath id="clipShape">
            <Polygon points="0,0 0,100 25,100 25,25 75,25 75,75 25,75 25,100 100,100 100,0" />
          </ClipPath>
        </Defs>
        {/* Czarna maska */}
        <Rect
          width="100%"
          height="100%"
          fill="rgba(0, 0, 0, 0.7)"
          clipPath="url(#clipShape)"
        />
      </Svg>

      {/* Kwadratowa ramka skanera */}
      <View style={styles.scannerFrame} />
    </View>
  );
};
//clip-path: polygon(0% 0%, 0% 100%, 25% 100%, 25% 25%, 75% 25%, 75% 75%, 25% 75%, 25% 100%, 100% 100%, 100% 0%);
export default Overlay;

const SCANNER_SIZE = 250; // Rozmiar kwadratu do skanowania

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: "center",
    alignItems: "center",
  },
  scannerFrame: {
    width: SCANNER_SIZE,
    height: SCANNER_SIZE,
    borderWidth: 2,
    borderColor: "#00FF00", // Zielona ramka
    borderRadius: 8,
    position: "absolute",
  },
});
