import React from "react";
import { Pressable, Text, StyleSheet } from "react-native";

interface Props {
  title: string;
  active: boolean;
  onPress: () => void;
}

const ProfileTabButton: React.FC<Props> = ({ title, active, onPress }) => {
  return (
    <Pressable style={[styles.tab, active && styles.active]} onPress={onPress}>
      <Text style={[styles.tabText, active && styles.activeText]}>{title}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  tab: {
    flex: 1,
    paddingVertical: 8,
    paddingHorizontal: 30,
    marginHorizontal: 6,
    borderRadius: 30,
    borderWidth: 1,
    borderColor: "#ccc",
  },
  active: {
    backgroundColor: "#e0f2e9",
    borderColor: "green",
  },
  tabText: {
    textAlign: "center",
    color: "#666",
    fontWeight: "bold",
  },
  activeText: {
    color: "green",
  },
});

export default ProfileTabButton;
