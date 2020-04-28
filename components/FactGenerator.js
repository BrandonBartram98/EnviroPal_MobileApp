import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Button } from 'react-native';

class FactGenerator extends React.Component {
    render() {
        return (
            <View style={styles.factbox}>
                <View className = "fadeIn" key={Math.random()}/>
                <Text style={styles.factText}>{this.props.fact}</Text>
                <Button color="green" title=" New Fact" style={StyleSheet.factButton} onPress={this.props.handleClick}
                 />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    factbox: {
        backgroundColor: 'white',
        height: 'auto',
        width: '100%',
        marginTop: '2%',
        justifyContent: "center",
        alignItems: 'center'
    },
    factText: {
        textAlign: 'center',
        padding: '5%'
    }
})

export default FactGenerator;