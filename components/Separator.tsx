import React from "react";
import { View } from "react-native";

type Props = {
  marginVertical: number;
};

export default function Separator({ marginVertical }: Props) {
  return <View style={{ marginVertical }} />;
}
