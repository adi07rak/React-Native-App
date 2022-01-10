import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { Button, StyleSheet, Text, TextInput, View, ScrollView, FlatList } from "react-native";

export default function App() {
  const [enteredGoal, setEnteredGoal] = useState('');
  const [courseGoals, setCourseGoals] = useState([]);

  function goalInputHandler(enteredText) {
    setEnteredGoal(enteredText);
  };

  const addGoalHandler = () => {
    setCourseGoals([...courseGoals, 
      {uid: Math.random().toString(), value: enteredGoal}
    ]);
    setEnteredGoal('');
  };

  return (
    <View style={styles.screen}>
      <View style={styles.headers}>
        <TextInput
          placeholder="Course Goal"
          style={styles.input_container}
          onChangeText={goalInputHandler}
          value={enteredGoal}
        />
        <Button title="ADD" onPress={addGoalHandler} />
      </View>
      <FlatList
      keyExtractor={(item, index) => item.uid}
        data={courseGoals}
        renderItem={ item => (
          <View style={styles.listItem}>
            <Text>{item.item.value}</Text>
          </View>
        )}
      />
      {/* <ScrollView>
        {courseGoals.map((goal, i) => (
          <View style={styles.listItem} key={goal + i}>
            <Text>{goal}</Text>
          </View>
        ))}
      </ScrollView> */}
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 50,
  },
  headers: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  input_container: {
    borderColor: "black",
    borderWidth: 1,
    width: "80%",
    padding: 10,
  },
  listItem: {
    padding: 10,
    backgroundColor: "#ccc",
    borderColor: "black",
    borderWidth: 1,
    marginVertical: 5,
  },
});
