import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { Button, StyleSheet, Text, TextInput, View, ScrollView, FlatList } from "react-native";

import GoalItem from './components/GoalItem';
import GoalInput from "./components/GoalInput";

export default function App() {
  
  const [modalIsVisible, setModalIsVisible] = useState(false);
  const [courseGoals, setCourseGoals] = useState([]);

  const startAddGoalHandler = () => {
    setModalIsVisible(true);
  };

  const endAddGoalHandler = () => {
    setModalIsVisible(false);
  };

  const addGoalHandler = (enteredGoal) => {
    setCourseGoals([...courseGoals, 
      {uid: Math.random().toString(), value: enteredGoal}
    ]);
    setModalIsVisible(false);
  };

  function deleteGoalhandler(id) {
    setCourseGoals(currentCourseGoals => {
      return currentCourseGoals.filter((goal) => goal.uid !== id);
    });
  }

  return (
    <>
      <StatusBar style="light"/>
      <View style={styles.appContainer}>
        <Button title="Add New Goal"color="#a065ec" onPress={startAddGoalHandler}></Button>
        <GoalInput onAddGoal={addGoalHandler} visible={modalIsVisible} onCancel={endAddGoalHandler}/>
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
            <GoalItem id={item.item.uid}
              text={item.item.value} onDeleteItem={deleteGoalhandler}/>
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
    </>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 50,
  },
  appContainer: {
    flex:1,
    paddingTop: 50,
    paddingHorizontal: 16,
  },
});
