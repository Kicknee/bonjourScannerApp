import React from "react";
import { View, TextInput, Pressable, StyleSheet } from "react-native";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";

type Props = {
  value: number;
  setValue: (value: number) => void;
  increase: () => void;
  decrease: () => void;
};

export default function NumberInput({
  value,
  setValue,
  increase,
  decrease,
}: Props) {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        value={String(value)}
        onChangeText={(text) => setValue(Number(text) || 0)}
      />
      <View style={styles.buttonContainer}>
        <Pressable style={styles.button} onPress={increase}>
          <MaterialIcons name="keyboard-arrow-up" size={25} color="black" />
        </Pressable>
        <Pressable style={styles.button} onPress={decrease}>
          <MaterialIcons name="keyboard-arrow-down" size={25} color="black" />
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    width: 140,
    paddingHorizontal: 10,
    backgroundColor: "white",
  },
  input: {
    flex: 1,
    fontSize: 40,
    textAlign: "center",
    paddingVertical: 6,
  },
  buttonContainer: {
    flexDirection: "column",
    borderLeftWidth: 1,
    borderLeftColor: "#ccc",
    paddingLeft: 10,
  },
  button: {
    alignItems: "center",
    paddingVertical: 7,
  },
});
