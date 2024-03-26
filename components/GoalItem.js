import React from "react";
import { View, Text, StyleSheet } from "react-native";

function GoalItem(props) {
  return (
    <View style={styles.goalItem}>
      <Text style={styles.goalText}>{props.text}</Text>
    </View>
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
  goalText: {
    color: "white",
  },
});

export default GoalItem;
