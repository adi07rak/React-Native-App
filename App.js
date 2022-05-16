import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { Button, StyleSheet, Text, TextInput, View, ScrollView, FlatList } from "react-native";

import GoalItem from './components/GoalItem';
import GoalInput from "./components/GoalInput";

export default function App() {
  
  const [courseGoals, setCourseGoals] = useState([]);

  const addGoalHandler = (enteredGoal) => {
    setCourseGoals([...courseGoals, 
      {uid: Math.random().toString(), value: enteredGoal}
    ]);
  };

  return (
    <View style={styles.screen}>
      <GoalInput onAddGoal={addGoalHandler} />
      {/* <View style={styles.headers}>
        <TextInput
          placeholder="Course Goal"
          style={styles.input_container}
          onChangeText={goalInputHandler}
          value={enteredGoal}
        />
        <Button title="ADD" onPress={addGoalHandler} />
      </View> */}
      <FlatList
        keyExtractor={(item, index) => item.uid}
        data={courseGoals}
        renderItem={ item => (
          <GoalItem text={item.item.value}/>
        )}
      />
    {/* [REASON:: because flatlist render only visible list and render further on scroll; while ScrollView don't] 
      <ScrollView>
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
});
