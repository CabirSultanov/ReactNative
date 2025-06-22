import React, { useState } from "react";
import { View, Text, StyleSheet, Image, FlatList } from "react-native";
import ProfileTabButton from "../components/ProfileTabButton";
import PostItem from "../components/PostItem";
import styles from "./ProfileScreen.styles";
import { posts } from "./mockPosts";

const ProfileScreen = () => {
  const [tab, setTab] = useState<"Posts" | "Photos">("Posts");

  return (
    <View style={styles.container}>
      <View style={styles.greenHeader}>
        <View style={styles.headerRow}>
          <Text style={styles.headerText}>Settings</Text>
          <Text style={styles.headerTitle}>Profile</Text>
          <Text style={styles.headerText}>Logout</Text>
        </View>
        <Image
          source={{ uri: "https://i.pravatar.cc/300?img=12" }}
          style={styles.avatar}
        />
      </View>

      <View style={styles.profileInfo}>
        <Text style={styles.name}>Michael Jordan</Text>
        <Text style={styles.desc}>A mantra goes here</Text>
      </View>

      <View style={styles.tabs}>
        <ProfileTabButton
          title="Posts"
          active={tab === "Posts"}
          onPress={() => setTab("Posts")}
        />
        <ProfileTabButton
          title="Photos"
          active={tab === "Photos"}
          onPress={() => setTab("Photos")}
        />
      </View>

      {tab === "Posts" ? (
        <FlatList
          data={posts}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <PostItem text={item.text} time={item.time} catImg={item.catImg} />
          )}
          contentContainerStyle={styles.list}
        />
      ) : (
        <View style={styles.photosContainer}>
          <Image
            source={{ uri: "https://picsum.photos/200/200?random=1" }}
            style={styles.photo}
          />
          <Image
            source={{ uri: "https://picsum.photos/200/200?random=2" }}
            style={styles.photo}
          />
        </View>
      )}
    </View>
  );
};

export default ProfileScreen;
