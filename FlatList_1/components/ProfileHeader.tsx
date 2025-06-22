import React from "react";
import { View, Text, Pressable, StyleSheet } from "react-native";

const ProfileHeader: React.FC = () => {
  return (
    <View style={styles.header}>
      <Pressable onPress={() => {}}>
        <Text style={styles.link}>Settings</Text>
      </Pressable>
      <Text style={styles.title}>Profile</Text>
      <Pressable onPress={() => {}}>
        <Text style={styles.link}>Logout</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
  },
  link: {
    color: "green",
    fontWeight: "bold",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
  },
});

export default ProfileHeader;
