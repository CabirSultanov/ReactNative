import React from "react";
import { View, Text, StyleSheet, TextInput, FlatList } from "react-native";

const DATA = [
  { id: "1", title: "Search result" },
  { id: "2", title: "Search result" },
  { id: "3", title: "Search result" },
  { id: "4", title: "Search result" },
  { id: "5", title: "Search result" },
  { id: "6", title: "Search result" },
];

const SearchApp = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Back</Text>

        <Text style={styles.headerTitle}>Content</Text>

        <Text style={styles.headerText}>Filter</Text>
      </View>

      <TextInput
        style={styles.searchInput}
        placeholder="Search"
        placeholderTextColor="#999"
      />

      <FlatList
        data={DATA}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.resultItem}>
            <Text style={styles.resultText}>{item.title}</Text>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
    backgroundColor: "#fff",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 24,
    paddingHorizontal: 8,
  },
  headerText: {
    fontSize: 16,
    color: "green",
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: "bold",
  },
  searchInput: {
    height: 50,
    borderRadius: 25,
    backgroundColor: "#f0f0f0",
    paddingHorizontal: 20,
    marginBottom: 24,
  },
  resultItem: {
    borderBottomWidth: 1,
    borderBottomColor: "#e0e0e0",
    paddingVertical: 16,
    paddingHorizontal: 8,
  },
  resultText: {
    fontSize: 16,
  },
});

export default SearchApp;
