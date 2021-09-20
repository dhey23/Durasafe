import React from 'react';
import { View, TouchableOpacity, Text, Image } from 'react-native';
import BackHome from './BackHome';
const styles = {
    $hide:{ display: 'none' },
    container: {
        height: 50,
        backgroundColor: '#fff0',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
    
    },
    button: {},
    buttonTitle: {
        color: '#f3661f',
        fontSize: 25,
        fontWeight: 'bold',
        backgroundColor: '#fff0',
    },
};

const NavigationView = ({
    onBackPress,
    onForwardPress,
    canGoBack,
    canGoForward,
}) => (
    <View style={[styles.container, (!canGoBack && !canGoForward) && styles.$hide]}>    
     { canGoBack && (
        <TouchableOpacity style={styles.button} onPress={onBackPress} >
            <Text style={styles.buttonTitle}>Back</Text>
        </TouchableOpacity>
        )}
        { canGoForward && (
        <TouchableOpacity style={styles.button} onPress={onForwardPress}>
            <Text style={styles.buttonTitle}>Forward</Text>
        </TouchableOpacity>
        )}
    </View>
);

export default NavigationView;

