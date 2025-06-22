import React from "react";
import { View, Text, StyleSheet } from "react-native";

type PostItemProps = {
  item: {
    id: string;
    header: string;
    text: string;
    time: string;
  };
};

const PostItem = ({ item }: PostItemProps) => {
  return (
    <View style={styles.itemContainer}>
      <View style={styles.avatarPlaceholder} />
      <View style={styles.textContainer}>
        <View style={styles.headerRow}>
          <Text style={styles.header}>{item.header}</Text>
          <Text style={styles.time}>{item.time}</Text>
        </View>
        <Text style={styles.text}>{item.text}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  itemContainer: {
    flexDirection: "row",
    marginBottom: 16,
  },
  avatarPlaceholder: {
    width: 40,
    height: 40,
    borderRadius: 8,
    backgroundColor: "#eee",
    marginRight: 12,
  },
  textContainer: {
    flex: 1,
  },
  headerRow: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  header: {
    fontWeight: "bold",
    fontSize: 14,
  },
  time: {
    fontSize: 12,
    color: "#999",
  },
  text: {
    fontSize: 14,
    marginTop: 4,
    color: "#333",
  },
});

export default PostItem;
