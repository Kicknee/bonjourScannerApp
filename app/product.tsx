import { useLocalSearchParams } from "expo-router";
import { FlatList, Text, View } from "react-native";
import { StyleSheet } from "react-native";
import Logo from "@/components/Logo";
import Button from "@/components/Button";

export default function ProductScreen() {
  const params = useLocalSearchParams();
  return (
    <View style={styles.container}>
      <Logo height={20} />
      <FlatList
        alwaysBounceVertical={true}
        style={styles.productSection}
        data={Object.entries(params)}
        renderItem={({ item }) =>
          item[0] !== "__EXPO_ROUTER_key" ? (
            <View style={styles.productInfo}>
              <Text style={styles.text}>
                {item[0] === "SHIPPING_COMPANY" ? "SHIPPING CO." : item[0]}
              </Text>
              <Text style={styles.text}>{item[1]}</Text>
            </View>
          ) : null
        }
        keyExtractor={(product) => product[0]}
      />
      <Button label="TAKE" onPress={() => {}} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 15,
    width: "100%",
    height: "100%",
    backgroundColor: "black",
    alignItems: "center",
    justifyContent: "space-around",
  },
  productSection: {
    width: "100%",
    maxHeight: "40%",
  },
  productInfo: {
    flex: 1,
    justifyContent: "space-between",
    flexDirection: "row",
    paddingVertical: 10,
  },
  text: {
    width: "auto",
    color: "#fff",
    fontSize: 19,
  },
});
