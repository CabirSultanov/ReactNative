import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  FlatList,
  Pressable,
  StyleSheet,
  ActivityIndicator,
} from "react-native";
import { useLocalSearchParams, router } from "expo-router";

const PostDetailScreen = () => {
  const { id, postId } = useLocalSearchParams<{ id: string; postId: string }>();
  const [post, setPost] = useState<{ title: string; body: string } | null>(
    null
  );
  const [comments, setComments] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const postRes = await fetch(
        `https://jsonplaceholder.typicode.com/posts/${postId}`
      );
      const postData = await postRes.json();

      const commentsRes = await fetch(
        `https://jsonplaceholder.typicode.com/comments?postId=${postId}`
      );
      const commentsData = await commentsRes.json();

      setPost(postData);
      setComments(commentsData);
      setLoading(false);
    };
    fetchData();
  }, []);

  if (loading || !post) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="gray" />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <View style={styles.postCard}>
        <Text style={styles.title}>{post.title}</Text>
        <Text style={styles.body}>{post.body}</Text>
      </View>

      <Text style={styles.sectionTitle}>Comments</Text>
      <FlatList
        data={comments}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <Pressable
            onPress={() =>
              router.push({
                pathname: "/users/[id]/posts/[postId]/comments/[commentId]",
                params: {
                  id: id!,
                  postId: postId!,
                  commentId: item.id.toString(),
                },
              })
            }
            style={styles.commentCard}
          >
            <Text style={styles.commentName}>{item.name}</Text>
            <Text style={styles.commentEmail}>{item.email}</Text>
            <Text style={styles.commentBody}>{item.body}</Text>
          </Pressable>
        )}
      />
    </View>
  );
};

export default PostDetailScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#fff",
  },
  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  postCard: {
    backgroundColor: "#f2f2f2",
    padding: 14,
    borderRadius: 8,
    marginBottom: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#222",
    marginBottom: 6,
  },
  body: {
    fontSize: 15,
    color: "#444",
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
    color: "#222",
  },
  commentCard: {
    backgroundColor: "#f9f9f9",
    padding: 12,
    borderRadius: 6,
    marginBottom: 12,
  },
  commentName: {
    fontSize: 15,
    fontWeight: "bold",
    color: "#111",
    marginBottom: 4,
  },
  commentEmail: {
    fontSize: 13,
    color: "#555",
    marginBottom: 4,
  },
  commentBody: {
    fontSize: 14,
    color: "#333",
  },
});
