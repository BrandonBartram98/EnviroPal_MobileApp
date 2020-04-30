import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { ifIphoneX } from 'react-native-iphone-x-helper'

const Header = props => {
    return (
        <View style={styles.header}>
            <Text style={styles.headerTitle}>{props.title}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    header: {
        width: '100%',
        height: 70,
        paddingTop: 20,
        backgroundColor: 'green',
        alignItems: 'center',
        justifyContent: 'center',
        ...ifIphoneX({
            paddingTop: 30
        }, {
            paddingTop: 20
        })
    },
    headerTitle: {
        color: 'white',
        fontSize: 18
    }
})

export default Header;