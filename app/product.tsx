import { useLocalSearchParams } from "expo-router";
import { FlatList, Text, View, Pressable } from "react-native";
import { StyleSheet } from "react-native";
import Logo from "@/components/Logo";
import Button from "@/components/Button";
import { useRouter } from "expo-router";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";

export default function ProductScreen() {
  const params = useLocalSearchParams();
  const router = useRouter();

  const onClose = () => {
    router.push("/");
  };
  return (
    <View style={styles.container}>
      <Logo height={20} />
      <View style={styles.buttonContainer}>
        <Pressable onPress={onClose}>
          <MaterialCommunityIcons name="close-thick" color="red" size={34} />
        </Pressable>
      </View>
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
              <Text style={[styles.text, { width: "50%" }]}>{item[1]}</Text>
            </View>
          ) : null
        }
        keyExtractor={(product) => product[0]}
      />
      <Button label="TAKE" onPress={onClose} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 15,
    paddingBottom: 30,
    width: "100%",
    height: "100%",
    backgroundColor: "black",
    alignItems: "center",
    justifyContent: "space-around",
  },
  buttonContainer: {
    alignSelf: "flex-end",
    marginRight: 15,
  },
  productSection: {
    width: "100%",
    maxHeight: "50%",
  },
  productInfo: {
    flex: 1,
    justifyContent: "space-between",
    flexDirection: "row",
    paddingVertical: 10,
  },
  text: {
    color: "#fff",
    fontSize: 19,
    textAlign: "left",
  },
});
