import React, { useState } from "react";
import {
  View,
  FlatList,
  StyleSheet,
  ActivityIndicator,
  Alert,
} from "react-native";
import { restaurants } from "@/data/restaurants";
import RestaurantCard from "@/components/RestaurantCard";
import RestaurantModal from "@/components/RestaurantModal";

export default function HomeScreen() {
  const [selectedRestaurant, setSelectedRestaurant] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);
  const [loading, setLoading] = useState(false);

  const openModal = (restaurant: any) => {
    setSelectedRestaurant(restaurant);
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  const handleBook = () => {
    closeModal();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      Alert.alert("Готово!", "Ваш столик забронирован");
    }, 2000);
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={restaurants}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <RestaurantCard restaurant={item} onPress={() => openModal(item)} />
        )}
      />

      {selectedRestaurant && (
        <RestaurantModal
          restaurant={selectedRestaurant}
          visible={modalVisible}
          onClose={closeModal}
          onReserve={handleBook}
        />
      )}

      {loading && (
        <View style={styles.loadingOverlay}>
          <ActivityIndicator size="large" color="#000" />
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#fff",
  },
  loadingOverlay: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.2)",
  },
});
