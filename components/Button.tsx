import { TouchableOpacity, StyleSheet, Text } from "react-native";

type Props = {
  label: string;
  onPress: () => void;
};
export default function Button({ label, onPress }: Props) {
  return (
    <TouchableOpacity style={styles.scanButtonContainer} onPress={onPress}>
      <Text style={styles.buttonText}>{label}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  scanButtonContainer: {
    paddingVertical: 10,
    paddingHorizontal: 30,
    borderRadius: 3,
    alignItems: "center",
    backgroundColor: "#D9D9D9B3", // 70% opacity
  },
  buttonText: {
    fontSize: 21,
    color: "#FFF",
  },
});
