import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

type TrendingItemProps = {
  item: {
    id: string;
    name: string;
    image: string;
  };
};

const TrendingItem = ({ item }: TrendingItemProps) => (
  <View style={styles.card}>
    <Image source={{ uri: item.image }} style={styles.image} />
    <Text style={styles.name}>{item.name}</Text>
  </View>
);

const styles = StyleSheet.create({
  card: {
    width: 80,
    marginRight: 12,
    alignItems: "center",
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 8,
    backgroundColor: "#eee",
  },
  name: {
    marginTop: 4,
    fontSize: 10,
  },
});

export default TrendingItem;
