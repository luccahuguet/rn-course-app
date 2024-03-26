import React from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";

function GoalItem(props) {
  return (
    <Pressable
      onPress={props.onDeleteItem}
      style={({ pressed }) => pressed && styles.pressedItem}
    >
      <View style={styles.goalItem}>
        <Text style={styles.goalText}>{props.text}</Text>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  goalItem: {
    margin: 8,
    padding: 8,
    paddingHorizontal: 12,
    backgroundColor: "purple",
    borderRadius: 100,
  },
  pressedItem: {
    opacity: 0.5,
  },
  goalText: {
    color: "white",
  },
});

export default GoalItem;
