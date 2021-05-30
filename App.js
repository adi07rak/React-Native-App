import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {
  return (
    <View >
      <View>
        <TextInput />
      </View>
      <View>
        <Button title="ADD" />
      </View>
    </View>
  );
}

