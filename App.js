import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { NativeRouter, Switch, Route } from 'react-router-native';

import Body from './components/Body';
import Logo from './components/Logo';
import Shop from './components/Shop';
import WhereToFind from './components/WhereToFind';
import ChatNow from './components/ChatNow';
import ContactUs from './components/ContactUs';


export default class App extends React.Component {

  
  render() {
    return (
      <NativeRouter>
        <View style={styles.container} ListFooter={ListFooter} ListHeader={ListHeader} >
          <ListHeader />
          <Logo style={styles.logo}></Logo>
          <Switch>
            <Route exact path="/" component={Body}></Route>
            <Route exact path="/shop" component={Shop}></Route>
            <Route exact path="/wheretofind" component={WhereToFind}></Route>
            <Route exact path="/chatnow" component={ChatNow}></Route>
            <Route exact path="/contactus" component={ContactUs}></Route>
          </Switch>
          <ListFooter />
        </View>
      </NativeRouter>
    );
  }
}


const ListHeader = () => {
  //View to set in Header
  return (
    <View style={styles.headerStyle}>
      <Text style={styles.textStyle}></Text>
    </View>
  );
};
const ListFooter = () => {
  //View to set in Footer
  return (
    <View style={styles.footerStyle}>
      <Text style={styles.textStyle}>Durasafe V.018.32s</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center'

  },
  logo: {
    flex: 1,
    padding: 0,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    height: 50

  },
  headerStyle: {
    width: '100%',
    height: 50,
    backgroundColor: '#f3661f',
  },
  footerStyle: {
    width: '100%',
    height: 30,
    backgroundColor: '#f3661f',
    borderTopWidth: 1,
    borderTopColor: '#ccc',

  },
  textStyle: {
    textAlign: 'center',
    color: '#fff',
    fontSize: 12,
    padding: 7,
    fontStyle: 'italic'
  },
});
