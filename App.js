import { useState } from "react";
import {
  Button,
  StyleSheet,
  Text,
  View,
  TextInput,
  ScrollView,
} from "react-native";

export default function App() {
  const [enteredGoalText, setEnteredGoalText] = useState("");
  const [courseGoals, setCourseGoals] = useState([]);

  function goalInputHandler(enteredText) {
    setEnteredGoalText(enteredText);
  }

  function addGoalHandler() {
    setCourseGoals((currentCourseGoals) => [
      ...currentCourseGoals,
      { id: Math.random().toString(), text: enteredGoalText },
    ]);
    setEnteredGoalText("");
  }

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          placeholder="Enter a goal"
          onChangeText={goalInputHandler}
          value={enteredGoalText}
        />
        <Button title="Submit" onPress={addGoalHandler} />
      </View>
      <View style={styles.goalsContainer}>
        <ScrollView>
          {courseGoals.map((goal) => (
            <View key={goal.id} style={styles.goalItem}>
              <Text style={styles.goalText}>{goal.text}</Text>
            </View>
          ))}
        </ScrollView>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
    paddingBottom: 24, // Corrected property name
  },
  inputContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 24, // Corrected property name
    borderBottomWidth: 1,
    borderBottomColor: "gray",
  },
  goalsContainer: {
    flex: 4,
  },
  textInput: {
    borderWidth: 1,
    borderColor: "black",
    padding: 8,
    marginRight: 8,
    width: "70%",
    borderRadius: 100,
  },
  goalItem: {
    // flex: 1,
    // flexDirection: "row",
    // justifyContent: "space-between",
    // alignItems: "center",
    margin: 8,
    padding: 8,
    paddingHorizontal: 12,
    backgroundColor: "purple",
    borderRadius: 100,
  },
  goalText: {
    color: "white",
  },
});
