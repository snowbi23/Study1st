import { StyleSheet, TextInput, Text, View, Button, Alert } from "react-native";
import React, { useState } from "react";
import { useRouter } from "expo-router";

const LockAppByTask = () => {
  const [taskname, setTaskName] = useState("");
  const [task, setTask] = useState("");

  const handleSubmit = () => {
    if (task.trim() === "") {
      Alert.alert("Input Required", "Please enter a task before locking.");
    } else {
      Alert.alert("Success", `Task submitted: ${task}`);
      setTask("");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Lock an App</Text>

      <Text>Task Name</Text>
      <TextInput
        placeholder="Input Task Name"
        value={taskname}
        onChangeText={setTaskName}
        style={styles.input}
      />

      <Text>Task</Text>
      <TextInput
        placeholder="Input Task"
        value={task}
        onChangeText={setTask}
        style={styles.input}
      />

      <View style={styles.buttonContainer}>
        <Button title="Lock" onPress={handleSubmit} />
      </View>
    </View>
  );
};

export default LockAppByTask;

const styles = StyleSheet.create({
  container: {
    padding: 20,
    marginTop: 50,
  },
  heading: {
    fontSize: 24,
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
  },
  buttonContainer: {
    marginTop: 10,
  },
});
