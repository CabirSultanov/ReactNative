import React, { useState } from "react";
import { View, Text, Pressable } from "react-native";
import AuthButton from "../components/AuthButton";
import AuthInput from "../components/AuthInput";
import styles from "./AuthScreen.styles";

const AuthScreen: React.FC = () => {
  const [isLogin, setIsLogin] = useState(false);

  return (
    <View style={styles.container}>
      <View style={styles.topBar}>
        {!isLogin && (
          <Pressable onPress={() => {}}>
            <Text style={styles.closeIcon}>✕</Text>
          </Pressable>
        )}

        <Text style={styles.headerTitle}>{isLogin ? "Log In" : "Sign Up"}</Text>

        {!isLogin && (
          <Pressable onPress={() => setIsLogin(!isLogin)}>
            <Text style={styles.switchText}>Login</Text>
          </Pressable>
        )}
      </View>

      <View style={styles.content}>
        {!isLogin && <AuthInput placeholder="Name" />}
        <AuthInput placeholder="Email" />
        <AuthInput placeholder="Password" isPassword />

        {!isLogin && (
          <View style={styles.checkboxRow}>
            <Text style={styles.checkbox}>☐</Text>
            <Text style={styles.checkboxLabel}>
              I would like to receive your newsletter and other promotional
              information.
            </Text>
          </View>
        )}

        <AuthButton
          title={isLogin ? "Log In" : "Sign Up"}
          onPress={() => {
            console.log(isLogin ? "Log In pressed" : "Sign Up pressed");
          }}
        />

        <Pressable style={styles.forgotButton} onPress={() => {}}>
          <Text style={styles.forgotText}>Forgot your password?</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default AuthScreen;
