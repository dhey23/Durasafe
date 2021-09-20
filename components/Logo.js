import React from 'react';
import { StyleSheet, Text, View, ScrollView, Image, Dimensions, TouchableOpacity } from 'react-native';

const Logo = ({ history }) => {
  return (
    <View style={{ borderBottomColor: '#ccc', borderBottomWidth: 1, width: '100%', paddingBottom: 10, justifyContent: 'center', alignItems: 'center' }}>
      <TouchableOpacity>
        <Image source={require('../images/dura-logo-v2.png')} style={styles.container} ></Image>
      </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 0,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 0,
    width: 130,
    height: 90,
    padding: 0,
  },
});
export default Logo