import React, { useState } from "react";
import { View, TextInput, Pressable, Text } from "react-native";
import styles from "./AuthInput.styles";

interface AuthInputProps {
  placeholder: string;
  isPassword?: boolean;
}

const AuthInput: React.FC<AuthInputProps> = ({
  placeholder,
  isPassword = false,
}) => {
  const [secure, setSecure] = useState(isPassword);

  return (
    <View style={styles.inputContainer}>
      <TextInput
        placeholder={placeholder}
        secureTextEntry={secure}
        style={styles.input}
      />
      {isPassword && (
        <Pressable onPress={() => setSecure(!secure)}>
          <Text style={styles.showText}>{secure ? "Show" : "Hide"}</Text>
        </Pressable>
      )}
    </View>
  );
};

export default AuthInput;
