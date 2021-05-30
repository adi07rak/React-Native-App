import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {
  return (
    <View style={{padding:50}}>
      <View>
        <TextInput 
          placeholder="Course Goal"
          style={{
            borderColor:"black",
            borderWidth:1,
            padding:10
          }} 
        />
      </View>
      <View>
        <Button title="ADD" />
      </View>
    </View>
  );
}

