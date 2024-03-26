import { useState } from "react";
import React from "react";
import { View, StyleSheet, Button, TextInput } from "react-native";

function GoalInput(props) {
  const [enteredGoalText, setEnteredGoalText] = useState("");

  function goalInputHandler(enteredText) {
    setEnteredGoalText(enteredText);
  }

  function addGoalHandler() {
    props.onAddGoal(enteredGoalText);
    setEnteredGoalText("");
  }

  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.textInput}
        placeholder="Enter a goal"
        onChangeText={goalInputHandler}
        value={enteredGoalText}
      />
      <Button title="Submit" onPress={addGoalHandler} />
    </View>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 24, // Corrected property name
    borderBottomWidth: 1,
    borderBottomColor: "gray",
  },
  textInput: {
    borderWidth: 1,
    borderColor: "black",
    padding: 8,
    marginRight: 8,
    width: "70%",
    borderRadius: 100,
  },
});

export default GoalInput;
