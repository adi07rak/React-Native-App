import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';

function GoalInput(props) {
    const [enteredGoal, setEnteredGoal] = useState('');

    function goalInputHandler(enteredText) {
        setEnteredGoal(enteredText);
    };

    function addGoalHandler() {
        props.onAddGoal(enteredGoal);
        setEnteredGoal('');
    }

    return (
        <View style={styles.headers}>
            <TextInput
                placeholder="Course Goal"
                style={styles.input_container}
                onChangeText={goalInputHandler}
                value={enteredGoal}
            />
            <Button title="ADD" onPress={addGoalHandler} />
        </View>
    );
}

export default GoalInput;

const styles = StyleSheet.create({
    input_container: {
        borderColor: '#cccccc',
        borderWidth: 1,
        width: "70%",
        marginRight:8,
        padding: 8,
    },
    headers: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: 24,
        paddingBottom:10,
        borderBottomWidth: 1,
        borderBottomColor: '#cccccc',
    },
});