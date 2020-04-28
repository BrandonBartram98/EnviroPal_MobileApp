import 'react-native-gesture-handler';
import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, FlatList} from 'react-native';
import GoalItem from '../components/GoalItem';
import GoalInput from '../components/GoalInput';
import Header from '../components/Header';
import ImageUploader from '../components/ImageUploader'

function PlantTracker() {
    const [courseGoals, setCourseGoals] = useState([]);
    const [isAddMode, setIsAddMode] = useState(false);

  const addGoalHandler = goalTitle => {
    setCourseGoals(currentGoals => [...currentGoals,
    {id: Math.random().toString(), value: goalTitle}
    ]);
    setIsAddMode(false);
  };

  const removeGoalHandler = goalId => {
    setCourseGoals(currentGoals => {
      return currentGoals.filter((goal) => goal.id !== goalId);
    });
  };
    const cancelGoalAddition = () => {
    setIsAddMode(false)
  }
  
  return (
      <View style={styles.screen}>
        <Header title="Plant Tracker" />
        <Button title="Add New Plant" color='green' onPress={() => setIsAddMode(true)}/>
        <GoalInput visible={isAddMode} onAddGoal={addGoalHandler} onCancel={cancelGoalAddition} />
        <FlatList
          keyExtractor={(item, index) => item.id}
          data={courseGoals}
          renderItem={itemData => (
            <GoalItem 
              id={itemData.item.id}
              onDelete={removeGoalHandler} 
              title={itemData.item.value} 
            />
          )}>
        </FlatList>
      </View> 
  );
}

const styles = StyleSheet.create({
    screen: {
      flex: 1,
    },
  });

export default PlantTracker;