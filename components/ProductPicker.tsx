import { Modal, StyleSheet, Text, View, Pressable } from "react-native";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";

type Props = {
  isVisible: boolean;
  onClose: () => void;
};
export default function ProductPicker({ isVisible, onClose }: Props) {
  return (
    <Modal animationType="slide" visible={isVisible} transparent={true}>
      <View style={styles.modalContent}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>How many products?</Text>
          <Pressable onPress={onClose}>
            <MaterialIcons name="close" color="#fff" size={22} />
          </Pressable>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  modalContent: {
    height: "25%",
    width: "100%",
    backgroundColor: "#433c3a",
    borderTopRightRadius: 18,
    borderTopLeftRadius: 18,
    position: "absolute",
    bottom: 0,
  },
  titleContainer: {
    height: "17%",
    backgroundColor: "#1f1e1d",
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
  },
});
