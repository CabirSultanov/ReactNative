import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

interface Props {
  text: string;
  time: string;
  catImg: string;
}

const PostItem: React.FC<Props> = ({ text, time, catImg }) => {
  return (
    <View style={styles.post}>
      <Image source={{ uri: catImg }} style={styles.postAvatar} />
      <View style={styles.postContent}>
        <View style={styles.postHeaderRow}>
          <Text style={styles.postHeader}>Header</Text>
          <Text style={styles.postTime}>{time}</Text>
        </View>
        <Text style={styles.postText}>{text}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  post: {
    flexDirection: "row",
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderColor: "#eee",
  },
  postAvatar: {
    width: 35,
    height: 40,
    borderRadius: 20,
    backgroundColor: "#ddd",
    marginRight: 12,
  },
  postContent: {
    flex: 1,
  },
  postHeaderRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 3,
  },
  postHeader: {
    fontWeight: "bold",
    fontSize: 14,
  },
  postTime: {
    fontSize: 12,
    color: "#999",
  },
  postText: {
    fontSize: 14,
    color: "#444",
  },
});

export default PostItem;
