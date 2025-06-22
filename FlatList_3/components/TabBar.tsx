import React from "react";
import { View, StyleSheet } from "react-native";

const TabBar = () => (
  <View style={styles.tabBar}>
    <View style={[styles.dot, { backgroundColor: "green" }]} />
    <View style={styles.dot} />
    <View style={styles.dot} />
    <View style={styles.dot} />
    <View style={styles.dot} />
  </View>
);

const styles = StyleSheet.create({
  tabBar: {
    flexDirection: "row",
    justifyContent: "space-around",
    paddingVertical: 12,
    borderTopWidth: 1,
    borderTopColor: "#eee",
  },
  dot: {
    width: 12,
    height: 12,
    borderRadius: 6,
    backgroundColor: "#ccc",
  },
});

export default TabBar;
