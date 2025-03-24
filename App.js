import { useContext, useState } from "react";
import { View, ScrollView, StyleSheet, Text, TextInput, Platform, TouchableOpacity, KeyboardAvoidingView } from "react-native";
import GoalItem from "./components/GoalItem";
import { TaskContext, TaskProvider } from "./components/TaskContext";

export default function App() {
  return (
    <TaskProvider>
      <MainApp />
    </TaskProvider>
  );
}

function MainApp() {
  const [task, setTask] = useState("");
  const { tasks, addTask, deleteTask, updateTask } = useContext(TaskContext);

  function handleAddTask() {
    if (task.trim().length === 0) return;
    addTask(task);
    setTask("");
  }

  return (
    <View style={styles.appContainer}>
      <View style={styles.taskWrapper}>
        <Text style={styles.sectionTitle}>Lei's To Do List</Text>
      </View>

      <ScrollView style={styles.taskItems}>
        {tasks.map((task) => (
          <GoalItem key={task.id} id={task.id} text={task.text} onDeleteItem={deleteTask} onEditItem={updateTask} />
        ))}
      </ScrollView>

      <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"} style={styles.writeTask}>
        <TextInput
          style={styles.inputTask}
          placeholder={"Write a task"}
          value={task}
          onChangeText={setTask}
        />
        <TouchableOpacity onPress={handleAddTask}>
          <View style={styles.addWrapper}>
            <Text style={styles.addText}>+</Text>
          </View>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
  },
  taskWrapper: {
    justifyContent: "center",
    alignItems: "center",
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
  },
  taskItems: {
    marginTop: 20,
  },
  writeTask: {
    position: "absolute",
    bottom: 60,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  inputTask: {
    paddingVertical: 15,
    paddingHorizontal: 15,
    backgroundColor: "#FFF",
    borderRadius: 60,
    borderColor: "#C0C0C0",
    borderWidth: 1,
    width: 250,
  },
  addWrapper: {
    width: 60,
    height: 60,
    backgroundColor: "#FFF",
    borderRadius: 60,
    justifyContent: "center",
    alignItems: "center",
    borderColor: "#C0C0C0",
    borderWidth: 1,
  },
  addText: {
    fontSize: 24,
  },
});
