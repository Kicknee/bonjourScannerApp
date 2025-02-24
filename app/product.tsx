import { useState } from "react";
import { FlatList, Text, View, Pressable, StyleSheet } from "react-native";
import { useRouter, useLocalSearchParams } from "expo-router";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";

import Logo from "@/components/Logo";
import Button from "@/components/Button";
import ProductPicker from "@/components/ProductPicker";
import NumberInput from "@/components/NumberInput";
import updateProductQuantity from "../utils/updateProductQuantity";
import { UpdateProductType } from "../utils/updateProductQuantity";
import { examineEntry } from "../utils/examineEntry";

export default function ProductScreen() {
  const [isModalVisible, setIsModalVisible] = useState<boolean>(false);
  const [numberOfProduct, setNumberOfProduct] = useState(0);

  const increaseNumberOfProduct = () => setNumberOfProduct((prev) => prev + 1);
  const decreaseNumberOfProduct = () =>
    setNumberOfProduct((prev) => Math.max(0, prev - 1));

  const product = useLocalSearchParams();
  const router = useRouter();

  delete product.__EXPO_ROUTER_key;

  const onTakeProduct = () => {
    setIsModalVisible(true);
  };

  const onModalClose = () => {
    setIsModalVisible(false);
  };

  const onNumberOfProduct = (value: number) => {
    setNumberOfProduct(value);
  };
  const onClose = () => {
    router.push("/");
  };

  const handleSubmit = async () => {
    if (numberOfProduct > 1) {
      const newNumberOfProduct = Number(product.LEFT) - numberOfProduct;
      const newObj: UpdateProductType = {
        STYLE: product.STYLE as string,
        LEFT: newNumberOfProduct,
      };
      const response = await updateProductQuantity(newObj);
      if (!response) {
        alert("coulnt update");
      } else {
        onClose();
      }
    }
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
        data={Object.entries(product)}
        renderItem={({ item }) => (
          <View style={styles.productInfo}>
            <Text style={styles.text}>{examineEntry(item[0])}</Text>
            <Text style={[styles.text, { width: "50%" }]}>
              {examineEntry(item[1] as string | number)}
            </Text>
          </View>
        )}
        keyExtractor={(product) => product[0]}
      />
      <Button label="TAKE" onPress={onTakeProduct} />
      <ProductPicker isVisible={isModalVisible} onClose={onModalClose}>
        <NumberInput
          value={numberOfProduct}
          setValue={onNumberOfProduct}
          increase={increaseNumberOfProduct}
          decrease={decreaseNumberOfProduct}
        />
        <Button label="Accept" onPress={handleSubmit} />
      </ProductPicker>
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
