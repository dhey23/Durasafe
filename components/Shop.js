import React, { useState, useRef } from 'react';
import { View, Dimensions, TouchableOpacity, Text, Image, } from 'react-native';
import { WebView } from 'react-native-webview';
import NavigationView from "./NavigationView";



const style = {
  container: {
    flex: 1,
    marginTop: 0,
    marginLeft: 5,
    marginRight: 5,
    width: Dimensions.get('window').width,
    // flexDirection: 'row',
    // flexWrap: 'wrap',

  },
  image: {
    width: 25,
    height: 25,
    marginLeft: 30,
    marginRight: 30,
    marginBottom: 5,
    marginTop: 10,
    alignSelf: 'flex-start',
  },
  allstyle: {
    flex: 0,
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItem: 'center',
    justifyContent: 'center',

  }
};

// const HTML = '<h1>Durasafe</h1>';
// const HTML_SIZE_ADJUSMENT = `<!DOCTYPE html><html><head><meta name="viewport" content="width=device-width, initial-scale=1.0"></head><body> ${HTML} </body></html>`;

const Shop = ({ history }) => {
  const webViewRef = useRef();
  const [canGoBack, setCanGoBack] = useState(false);
  const [canGoForward, setCanGoForward] = useState(false);


  const handleBackPress = () => {
    webViewRef.current.goBack();
  }
  const handleForwardPress = () => {
    webViewRef.current.goForward();
  }


  return (
    <View style={style.container}>
      <WebView
        ref={webViewRef}
        source={{ uri: 'https://www.durasafe.com.sg/shop' }}
        originWhitelist={['*']}
        onNavigationStateChange={state => {
          const back = state.canGoBack;
          const forward = state.canGoForward;
          setCanGoBack(back);
          setCanGoForward(forward);
        }} />
      <NavigationView onBackPress={handleBackPress} onForwardPress={handleForwardPress} canGoBack={canGoBack} canGoForward={canGoForward}>
      </NavigationView >
      <View style={style.allstyle}>
        <TouchableOpacity onPress={() => history.push("/")}>
             <Image source={require('../images/home.png')} style={style.image}></Image>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => history.push("/wheretofind")}>
          <Image source={require('../images/pin.png')} style={style.image}></Image>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => history.push("/chatnow")}>
          <Image source={require('../images/email.png')} style={style.image}></Image>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => history.push("/contactus")}>
          <Image source={require('../images/phone-call.png')} style={style.image}></Image>
        </TouchableOpacity>
      </View>
    </View>
  )
};


export default Shop;
