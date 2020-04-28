import React, {useState} from 'react';
import { View, TextInput, Button, StyleSheet, Modal } from 'react-native';

const GoalInput = props => {
    const [enteredGoal, setEnteredGoal] = useState('');

    const goalInputHandler = (enteredText) => {
        setEnteredGoal(enteredText);
    };

    const addGoalHandler = () => {
        props.onAddGoal(enteredGoal);
        setEnteredGoal('')
    };

    return (
        <Modal visible={props.visible}animationType="slide">
            <View style={styles.inputContainer}> 
                <TextInput 
                    placeholder="Plant Name"
                    style={styles.txtInput}
                    onChangeText={goalInputHandler}
                    value={enteredGoal}
                />
                <View style={styles.listButtons}>
                    <Button title="Cancel" color="red" onPress={props.onCancel} />
                    <Button title="Add" color='green' onPress={addGoalHandler} />
                </View>
            </View>
        </Modal>
    );
};

const styles = StyleSheet.create({
    inputContainer: {
        flex: 1,
        justifyContent: 'center', 
        alignItems:'center'
    },
    txtInput: {
        width: '80%',
        borderBottomColor: 'black',
        borderWidth: 1, 
        padding: 10,
        marginBottom: 10
    },
    listButtons: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    }
});

export default GoalInput;