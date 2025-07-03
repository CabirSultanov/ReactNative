import { View, Text, StyleSheet, ActivityIndicator } from "react-native";
import { useLocalSearchParams } from "expo-router";
import { useEffect, useState } from "react";

type Comment = {
  id: number;
  name: string;
  email: string;
  body: string;
};

export default function CommentScreen() {
  const { commentId } = useLocalSearchParams<{ commentId: string }>();
  const [comment, setComment] = useState<Comment | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/comments/${commentId}`)
      .then((res) => res.json())
      .then((data) => {
        setComment(data);
        setLoading(false);
      });
  }, []);

  if (loading || !comment) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="gray" />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.title}>{comment.name}</Text>
        <Text style={styles.email}>{comment.email}</Text>
        <Text style={styles.body}>{comment.body}</Text>
      </View>
    </View>
  );
}

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
  card: {
    backgroundColor: "#f2f2f2",
    borderRadius: 8,
    padding: 14,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#222",
    marginBottom: 8,
  },
  email: {
    fontSize: 14,
    color: "#555",
    marginBottom: 6,
  },
  body: {
    fontSize: 15,
    color: "#333",
  },
});
