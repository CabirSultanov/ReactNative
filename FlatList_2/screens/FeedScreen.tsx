import React from "react";
import {
  View,
  Text,
  TextInput,
  FlatList,
  StyleSheet,
  Image,
} from "react-native";
import PostItem from "../components/PostItem";
import posts from "../data";

const FeedScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.topBar}>
        <Text style={styles.back}>Back</Text>
        <Text style={styles.title}>Feed</Text>
        <Text style={styles.filter}>Filter</Text>
      </View>

      <TextInput style={styles.searchInput} placeholder="Search" />

      <View style={styles.flatListWrapper}>
        <FlatList
          data={posts}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => <PostItem item={item} />}
          contentContainerStyle={styles.listContent}
          showsVerticalScrollIndicator={false}
          ItemSeparatorComponent={() => <View style={styles.separator} />}
        />
      </View>
      <Image
        source={{
          uri: "https://picsum.photos/200/200?random=1",
        }}
        style={styles.fixedImage}
        resizeMode="cover"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    position: "relative",
  },
  topBar: {
    position: "absolute",
    top: 60,
    left: 16,
    width: 343,
    height: 36,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  back: {
    color: "green",
    fontSize: 16,
  },
  separator: {
    height: 1,
    backgroundColor: "#ddd",
    marginVertical: 8,
  },
  title: {
    fontSize: 25,
    fontWeight: "bold",
  },
  filter: {
    color: "green",
    fontSize: 16,
  },
  searchInput: {
    position: "absolute",
    top: 128,
    left: 16,
    width: 343,
    height: 50,
    backgroundColor: "#f0f0f0",
    paddingHorizontal: 12,
    fontSize: 16,
    borderRadius: 20,
  },
  flatListWrapper: {
    position: "absolute",
    top: 194,
    left: 16,
    width: 343,
    height: 356,
    borderRadius: 8,
    overflow: "hidden",
    backgroundColor: "#fff",
  },
  listContent: {
    padding: 8,
  },
  fixedImage: {
    position: "absolute",
    top: 566,
    left: 16,
    width: 343,
    height: 227.98,
    borderRadius: 8,
  },
});

export default FeedScreen;
