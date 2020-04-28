import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import ImageUploader from '../components/ImageUploader'

const GoalItem = props => {
    return (
        <TouchableOpacity onPress={props.onDelete.bind(this, props.id)}>
            <View style={styles.listItem}>
                <Text>{props.title}</Text>
                <ImageUploader></ImageUploader>
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    listItem: {
    padding:10,
    marginVertical: 10,
    backgroundColor: '#ccc',
    borderColor: 'black',
    borderWidth: 1
  }})

export default GoalItem;