import React from 'react';
import { StyleSheet, Text, View, ScrollView, Image, Dimensions, TouchableOpacity } from 'react-native';

export default ({ history }) => ( 
      <TouchableOpacity onPress={() => history.push("/")}>
        <Image source={require('../images/home.png')} style={styles.container} ></Image>
      </TouchableOpacity>
  );
const styles = StyleSheet.create({
  container: {
    flex: 0,
    backgroundColor: '#fff',
    // justifyContent: 'center',
    // alignItems: 'center',
    marginTop: 0,
    marginBottom: 0,
    width: 30,
    height: 30,
    padding: 0,
    
  },
});
