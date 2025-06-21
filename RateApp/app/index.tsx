import React from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";

const RateApp = () => {
  const handlePositive = () => {
    console.log("User loves the app!");
  };

  const handleNegative = () => {
    console.log("User does not like the app.");
  };

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.stars}>⭐ ⭐ ⭐ ⭐ ⭐</Text>

        <Text style={styles.title}>Rate our app</Text>

        <Text style={styles.description}>
          Consequat velit qui adipisicing sunt do reprehenderit ad laborum
          tempor ullamco exercitation. Ullamco tempor adipisicing et voluptate
          duis sit esse aliqua esse ex dolore esse. Consequat velit qui
          adipisicing sunt.
        </Text>

        <Pressable style={styles.button} onPress={handlePositive}>
          <Text style={styles.buttonText}>I love it!</Text>
        </Pressable>

        <Pressable onPress={handleNegative}>
          <Text style={styles.linkText}>Don’t like the app? Let us know.</Text>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#5CBF7B",
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
  },
  card: {
    width: 343,
    paddingVertical: 32,
    paddingHorizontal: 24,
    backgroundColor: "#fff",
    borderRadius: 12,
    alignItems: "center",
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 4,
  },
  stars: {
    fontSize: 24,
    color: "#F5A623",
    marginBottom: 16,
  },
  title: {
    fontSize: 30,
    fontWeight: "600",
    fontFamily: "Inter",
    marginBottom: 12,
    textAlign: "center",
    color: "#000",
  },
  description: {
    fontSize: 16,
    fontWeight: "500",
    fontFamily: "Inter",
    color: "#666",
    textAlign: "center",
    marginBottom: 24,
    width: 311,
  },
  button: {
    width: 307,
    height: 51,
    backgroundColor: "rgb(93, 176, 117)",
    borderRadius: 100,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 16,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
    fontFamily: "Inter",
  },
  linkText: {
    fontSize: 16,
    fontWeight: "600",
    fontFamily: "Inter",
    color: "#5CBF7B",
  },
});

export default RateApp;
