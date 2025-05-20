import { StyleSheet, Text, View, Button } from "react-native";
import React from "react";
import { useRouter } from "expo-router";

const LockApp = () => {
  const router = useRouter();

  return (
    <View>
      <Text>Lock App</Text>
      <Button
        title="Lock by Task"
        onPress={() => router.push("/lock_by_task")}
      />
      <Button
        title="Lock by Time"
        onPress={() => router.push("/lock_by_time")}
      />
    </View>
  );
};

export default LockApp;

const styles = StyleSheet.create({});
