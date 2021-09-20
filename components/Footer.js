import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';


export default class Footer extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.text}>Durasafe Pte Ltd</Text>
            </View>
        );
    }
}




const styles = StyleSheet.create({
    footer: {
        flex: 1,
        height: 25,
        alignItems: 'center', 
        justifyContent: 'center',
        backgroundColor: 'red',

    },
    text: {
        color: 'white',
        fontSize: 15,
        fontWeight: 'bold',
        backgroundColor: 'red',
        width: '100%'

    }
});
