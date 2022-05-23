import React from "react";
import { StyleSheet, View, Text, Pressable } from 'react-native';

function GoalItem(props) {
    return (
            <View style={styles.listItem}>
                <Pressable style={({pressed}) => pressed && styles.pressedItem}
                    android_ripple={{color:'#210644'}} 
                    onPress={props.onDeleteItem.bind(this, props.id)}>
                    <Text style={styles.ListText}>{props.text}</Text>
                </Pressable>
            </View>
    );
} 

export default GoalItem;

const styles = StyleSheet.create({
    listItem: {
        backgroundColor: '#5e0acc',
        borderColor: "black",
        borderWidth: 1,
        marginVertical: 5,
        borderRadius:6,
      },
    ListText: {
        color:'white',
        padding:10
    },
    pressedItem: {
        opacity: 0.5
    }
});