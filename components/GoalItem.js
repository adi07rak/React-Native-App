import React from "react";
import { StyleSheet, View, Text } from 'react-native';

function GoalItem(props) {
    return (
        <View style={styles.listItem}>
            <Text style={styles.ListText}>{props.text}</Text>
        </View>
    );
} 

export default GoalItem;

const styles = StyleSheet.create({
    listItem: {
        padding: 10,
        backgroundColor: '#5e0acc',
        borderColor: "black",
        borderWidth: 1,
        marginVertical: 5,
        borderRadius:6,
      },
    ListText: {
        color:'white',
    }
});