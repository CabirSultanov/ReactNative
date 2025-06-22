import React from "react";
import { View, Text, StyleSheet, Image, FlatList } from "react-native";
import hotDeals from "../data/hotDeals";
import DealItem from "../components/DealItem";

const MarketScreen = () => (
  <View style={styles.container}>
    <View style={styles.greenBackground}>
      <View style={styles.header}>
        <Text style={styles.back}>Back</Text>
        <Text style={styles.title}>Market</Text>
        <Text style={styles.filter} />
      </View>

      {/* Фото */}
      <Image
        source={{
          uri: "https://images.unsplash.com/photo-1500534623283-312aade485b7?w=800",
        }}
        style={styles.banner}
        resizeMode="cover"
      />
    </View>

    <Text style={styles.sectionTitle}>Hot deals</Text>
    <FlatList
      data={hotDeals}
      horizontal
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => <DealItem item={item} />}
      contentContainerStyle={styles.list}
      showsHorizontalScrollIndicator={false}
    />

    <Text style={styles.sectionTitle}>Trending</Text>
    <FlatList
      data={hotDeals}
      horizontal
      keyExtractor={(item) => item.id + "-trending"}
      renderItem={({ item }) => <DealItem item={item} />}
      contentContainerStyle={styles.list}
      showsHorizontalScrollIndicator={false}
    />
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  greenBackground: {
    width: "100%",
    height: 320,
    backgroundColor: "#rgb(93, 176, 117)",
  },
  header: {
    position: "absolute",
    top: 30,
    left: 16,
    width: 343,
    height: 36,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  back: {
    color: "#fff",
    fontSize: 13,
  },
  title: {
    color: "#fff",
    fontSize: 23,
    fontWeight: "bold",
  },
  filter: {
    width: 16,
  },
  banner: {
    position: "absolute",
    top: 100,
    left: 22,
    width: 343,
    height: 200,
    borderRadius: 8,
    backgroundColor: "#eee",
  },
  sectionTitle: {
    marginLeft: 16,
    marginTop: 12,
    fontSize: 25,
    fontWeight: "bold",
  },
  list: {
    paddingLeft: 16,
    paddingVertical: 8,
  },
});

export default MarketScreen;
