import { StyleSheet, TextInput, Button, Text, View, Alert } from "react-native";
import React, { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <View>
      <View style={styles.container}>
        <Text style={styles.title}>Log Into Study1st</Text>
      </View>

      <View style={styles.container}>
        <TextInput 
          placeholder="Email" 
          value={email} 
          onChangeText={setEmail} 
        />

        <TextInput
          placeholder="Password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />

        <Button
          title="Log In"
          onPress={() => {
            console.log("Email:", email);
            console.log("Password:", password);
          }}
        />

        <Text
          style={{ color: "blue", textDecorationLine: "underline" }}
          onPress={() => Alert.alert("Text Clicked!")}
        >
          Forgot Password?
        </Text>

        <Button
          title="Create new account"
          onPress={() => {
            console.log("Creating account with:", email, password);
          }}
        />
      </View>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
  },
  title: {
    fontSize: 24,
    marginVertical: 20,
  },
});
