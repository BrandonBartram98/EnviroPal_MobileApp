import 'react-native-gesture-handler';
import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, FlatList} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import NavBar from './components/NavBar';

export default function App() {
  return (
  <NavigationContainer>
    <NavBar />
  </NavigationContainer>
  );
}
  

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
});