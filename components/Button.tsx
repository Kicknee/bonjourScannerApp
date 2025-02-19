import { TouchableOpacity, StyleSheet, Text } from "react-native";

type Props = {
  label: string;
  onPress: () => void;
};
export default function Button({ label, onPress }: Props) {
  return (
    <TouchableOpacity onPress={onPress}>
      <Text>{label}</Text>
    </TouchableOpacity>
  );
}
