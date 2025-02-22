import React, { useState } from "react";
import { View, TextInput, Pressable, StyleSheet } from "react-native";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";

export default function NumberInput() {
  const [value, setValue] = useState(5);

  const increase = () => setValue((prev) => prev + 1);
  const decrease = () => setValue((prev) => Math.max(0, prev - 1)); // Nie pozwala zejść poniżej 0

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
          <MaterialIcons name="keyboard-arrow-up" size={18} color="black" />
        </Pressable>
        <Pressable style={styles.button} onPress={decrease}>
          <MaterialIcons name="keyboard-arrow-down" size={18} color="black" />
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
    width: 120,
    paddingHorizontal: 10,
    backgroundColor: "white",
  },
  input: {
    flex: 1,
    fontSize: 18,
    textAlign: "center",
    paddingVertical: 6,
  },
  buttonContainer: {
    flexDirection: "column",
    borderLeftWidth: 1,
    borderLeftColor: "#ccc",
  },
  button: {
    alignItems: "center",
    paddingVertical: 4,
  },
});
