import React from "react";
import { View, Text, StyleSheet, Modal, Image, Pressable } from "react-native";
import restaurantImage from "@/assets/images/common.jpg";
type Props = {
  visible: boolean;
  restaurant: {
    name: string;
    image: any;
  };
  onClose: () => void;
  onReserve: () => void;
};

export default function RestaurantModal({
  visible,
  restaurant,
  onClose,
  onReserve,
}: Props) {
  return (
    <Modal visible={visible} animationType="slide" transparent>
      <View style={styles.overlay}>
        <View style={styles.modal}>
          <Image source={restaurantImage} style={styles.image} />

          <Text style={styles.name}>{restaurant.name}</Text>

          <Text style={styles.description}>
            A great place to enjoy delicious food with friends and family. Cozy
            atmosphere and fast service!
          </Text>

          <Pressable style={styles.button} onPress={onReserve}>
            <Text style={styles.buttonText}>Забронировать</Text>
          </Pressable>

          <Pressable onPress={onClose}>
            <Text style={styles.closeText}>Закрыть</Text>
          </Pressable>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.3)",
    justifyContent: "center",
    alignItems: "center",
  },
  modal: {
    width: "90%",
    backgroundColor: "#fff",
    borderRadius: 12,
    padding: 16,
    alignItems: "center",
  },
  image: {
    width: "100%",
    height: 180,
    borderRadius: 8,
    marginBottom: 12,
  },
  name: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 8,
  },
  description: {
    textAlign: "center",
    color: "#555",
    fontSize: 14,
    marginBottom: 16,
  },
  button: {
    backgroundColor: "#4CAF50",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
    marginBottom: 12,
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
  },
  closeText: {
    color: "#888",
    marginTop: 6,
  },
});
