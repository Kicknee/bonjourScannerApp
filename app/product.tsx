import { useLocalSearchParams } from "expo-router";
import { Text, View } from "react-native";
import { StyleSheet } from "react-native";

export default function ProductScreen() {
  const params = useLocalSearchParams();
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Product Details</Text>
      <Text>Style: {params.STYLE}</Text>
      <Text>Type: {params.TYPE}</Text>
      <Text>Place: {params.PLACE}</Text>
      <Text>Left: {params.LEFT}</Text>
      <Text>Color: {params.COLOR}</Text>
      <Text>Brand: {params.BRAND}</Text>
      <Text>Shipping Company: {params.SHIPPING_COMPANY}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
});
