import React from "react";
import { View, Text, StyleSheet, Image, Pressable } from "react-native";
import {
  FontAwesome,
  MaterialCommunityIcons,
  Ionicons,
} from "@expo/vector-icons";
import restaurantImage from "@/assets/images/common.jpg";
type Props = {
  restaurant: {
    name: string;
    rating: number;
    delivery: string;
    time: string;
    categories: string[];
    image: any;
  };
  onPress: () => void;
};

export default function RestaurantCard({ restaurant, onPress }: Props) {
  return (
    <View style={styles.card}>
      <Image source={restaurantImage} style={styles.image} />

      <View style={styles.info}>
        <Text style={styles.name}>{restaurant.name}</Text>

        <Text style={styles.categories}>
          {restaurant.categories.join(" - ")}
        </Text>

        <View style={styles.row}>
          <View style={styles.iconText}>
            <FontAwesome name="star-o" size={18} color="orange" />
            <Text style={styles.boldText}>{restaurant.rating}</Text>
          </View>

          <View style={styles.iconText}>
            <MaterialCommunityIcons
              name="truck-delivery"
              size={18}
              color="orange"
            />
            <Text style={styles.text}>{restaurant.delivery}</Text>
          </View>

          <View style={styles.iconText}>
            <Ionicons name="time-outline" size={18} color="orange" />
            <Text style={styles.text}>{restaurant.time}</Text>
          </View>
        </View>

        <Pressable onPress={onPress} style={styles.button}>
          <Text style={styles.buttonText}>Подробнее</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    marginBottom: 16,
    backgroundColor: "#f9f9f9",
    borderRadius: 12,
    overflow: "hidden",
  },
  image: {
    width: "100%",
    height: 160,
  },
  info: {
    padding: 12,
  },
  name: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 4,
  },
  categories: {
    fontSize: 14,
    color: "#888",
    marginBottom: 8,
  },
  row: {
    flexDirection: "row",
    gap: 12,
    alignItems: "center",
    marginBottom: 8,
  },
  iconText: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
  },
  text: {
    fontSize: 14,
  },
  boldText: {
    fontSize: 14,
    fontWeight: "bold",
  },
  button: {
    marginTop: 6,
    backgroundColor: "#4CAF50",
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 8,
    alignSelf: "flex-start",
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
  },
});
