import React from 'react';
import { StyleSheet, Text, View, ScrollView, ImageBackground, Dimensions, TouchableOpacity } from 'react-native';

export default ({ history }) => (
<ScrollView style={styles.container}>
        <TouchableOpacity onPress={() => history.push("/shop")}>
            <ImageBackground style={styles.image} source={require('../images/image1.png')}>
                <Text style={styles.styletext}>SHOP NOW</Text>
            </ImageBackground>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => history.push("/wheretofind")}>
            <ImageBackground style={styles.image} source={require('../images/image2.png')}>
                <Text style={styles.styletext}>WHERE TO FIND US</Text>
            </ImageBackground>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => history.push("/chatnow")}>
            <ImageBackground style={styles.image} source={require('../images/image3.png')}>
                <Text style={styles.styletext}>CHAT NOW</Text>
            </ImageBackground>
        </TouchableOpacity >
        {/* <TouchableOpacity onPress={() => history.push("/checkout")}>
            <ImageBackground style={styles.image} source={require('../images/image5.png')}>
                <Text style={styles.styletext}>CHECK OUT</Text>
            </ImageBackground>
        </TouchableOpacity > */}

        <TouchableOpacity onPress={() => history.push("/contactu")}>
            <ImageBackground style={styles.image} source={require('../images/image4.png')}>
                <Text style={styles.styletext} onPress={() => history.push("/contactus")}>CONTACT US</Text>
            </ImageBackground>
        </TouchableOpacity>
    </ScrollView>
    
);

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    image: {
        width: Dimensions.get('window').width - 30,
        height: 100,
        marginTop: 20,
        flex: 1,
        marginLeft: 10,
        marginRight: 10,
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center'
    },
    styletext: {
        color: '#fff',
        fontSize: 25,
        fontWeight: 'bold',

    },
});
