import { Image, StyleSheet } from "react-native";

const LogoSource = require("../assets/images/bonjour-logo.png");

type Props = {
  height: number;
};

export default function Logo({ height }: Props) {
  return (
    <Image
      alt="logo"
      source={LogoSource}
      style={[styles.logo, { height: `${height}%` }]}
    />
  );
}

const styles = StyleSheet.create({
  logo: {
    aspectRatio: "1 / 1",
    marginTop: "20%",
  },
});
