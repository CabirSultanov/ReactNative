import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  Pressable,
  ActivityIndicator,
} from "react-native";
import { useLocalSearchParams, useRouter } from "expo-router";

type User = {
  id: number;
  name: string;
  email: string;
  phone: string;
  website: string;
  address: {
    city: string;
  };
  company: {
    name: string;
  };
};

type Post = {
  id: number;
  title: string;
};

const UserProfileScreen = () => {
  const { id } = useLocalSearchParams<{ id: string }>();
  const [user, setUser] = useState<User | null>(null);
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const fetchUserAndPosts = async () => {
      const userRes = await fetch(
        `https://jsonplaceholder.typicode.com/users/${id}`
      );
      const userData = await userRes.json();

      const postsRes = await fetch(
        `https://jsonplaceholder.typicode.com/posts?userId=${id}`
      );
      const postsData = await postsRes.json();

      setUser(userData);
      setPosts(postsData);
      setLoading(false);
    };

    fetchUserAndPosts();
  }, [id]);

  if (loading || !user) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="gray" />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <View style={styles.userCard}>
        <Text style={styles.name}>{user.name}</Text>
        <Text style={styles.info}>{user.email}</Text>
        <Text style={styles.info}>{user.phone}</Text>
        <Text style={styles.info}>{user.website}</Text>
        <Text style={styles.info}>{user.address.city}</Text>
        <Text style={styles.info}>{user.company.name}</Text>
      </View>

      <Text style={styles.postsTitle}>Posts</Text>
      <FlatList
        data={posts}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <Pressable
            style={styles.postCard}
            onPress={() =>
              router.push({
                pathname: "/users/[id]/posts/[postId]",
                params: {
                  id: id!,
                  postId: item.id.toString(),
                },
              })
            }
          >
            <Text style={styles.postTitle}>{item.title}</Text>
          </Pressable>
        )}
      />
    </View>
  );
};

export default UserProfileScreen;

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
  userCard: {
    backgroundColor: "#f2f2f2",
    borderRadius: 8,
    padding: 14,
    marginBottom: 20,
    elevation: 1,
  },
  name: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 6,
    color: "#222",
  },
  info: {
    fontSize: 14,
    color: "#555",
    marginBottom: 2,
  },
  postsTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 8,
    color: "#222",
  },
  postCard: {
    backgroundColor: "#f9f9f9",
    borderRadius: 6,
    padding: 12,
    marginBottom: 10,
    elevation: 1,
  },
  postTitle: {
    fontSize: 15,
    color: "#333",
  },
});
