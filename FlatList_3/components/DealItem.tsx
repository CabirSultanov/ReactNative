import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

type DealItemProps = {
  item: {
    id: string;
    name: string;
    price: string;
    image: string;
  };
};

const DealItem = ({ item }: DealItemProps) => (
  <View style={styles.card}>
    <Image source={{ uri: item.image }} style={styles.image} />
    <Text style={styles.name}>{item.name}</Text>
    <Text style={styles.price}>{item.price}</Text>
  </View>
);

const styles = StyleSheet.create({
  card: {
    width: 100,
    marginRight: 12,
  },
  image: {
    width: "100%",
    height: 100,
    borderRadius: 8,
    backgroundColor: "#eee",
  },
  name: {
    marginTop: 4,
    fontSize: 12,
  },
  price: {
    fontSize: 12,
    fontWeight: "bold",
  },
});

export default DealItem;
