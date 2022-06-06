import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Modal, Image } from 'react-native';

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
        <Modal visible={props.visible} animationType="slide">
            <View style={styles.headers}>
                <Image source={require('../assets/images/goal.png')} style={styles.image}/>
                <TextInput
                    placeholder="Course Goal"
                    style={styles.input_container}
                    onChangeText={goalInputHandler}
                    value={enteredGoal}
                />
                <View style={styles.buttonContainer}>
                    <View style={styles.button}>
                        <Button title="Add Goal" onPress={addGoalHandler} />
                    </View>
                    <View style={styles.button}>
                        <Button title="Cancel" onPress={props.onCancel}/>
                    </View>
                </View>
            </View>
        </Modal>
    );
}

export default GoalInput;

const styles = StyleSheet.create({
    input_container: {
        borderColor: '#cccccc',
        width:'100%',
        borderWidth: 1,
        padding: 8,
    },
    headers: {
        flex:1,
        justifyContent: "center",
        alignItems: "center",
        padding: 16,
        paddingBottom:10,
        borderBottomWidth: 1,
        backgroundColor:'#311b6b',
    },
    buttonContainer: {
        marginTop:16,
        flexDirection:'row',
    },
    button:{
        width:100,
        marginHorizontal: 8,
    },
    image: {
        width:100,
        height: 100,
        margin: 20,
    }
});