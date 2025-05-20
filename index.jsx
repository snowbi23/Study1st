import { StyleSheet, Text, View, Button } from "react-native";
import React from "react";
import { useRouter } from "expo-router";

export default function Home() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Text>This is the Home</Text>
      <Button title="Go to Lock" onPress={() => router.push("/lock_app")} />
      <Button title="Go to Profile" onPress={() => router.push("/profile")} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
