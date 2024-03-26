import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, StyleSheet, Text, View, TextInput } from 'react-native';

export default function App() {

  const [enteredGoalText, setEnteredGoalText] = useState('')

  function goalInputHandler(enteredText) {
    setEnteredGoalText(enteredText)
  }

  function addGoalHandler() {
    console.log(enteredGoalText);

  }

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          placeholder="Enter a goal"
          onChangeText={goalInputHandler}
        />
        <Button
          title='Submit'
          onPress={addGoalHandler}
        />
      </View>
      <View style={styles.goalsContainer}>
        <Text> List of Goals </Text>
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
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 24, // Corrected property name
    borderBottomWidth: 1,
    borderBottomColor: 'gray'
  },
  goalsContainer: {
    flex: 4,
  },
  textInput: {
    borderWidth: 1,
    borderColor: 'black',
    padding: 8,
    marginRight: 8,
    width: '70%',
    borderRadius: 100
  },
});
