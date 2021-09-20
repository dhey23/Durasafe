// Example to Send WhatsApp Message from React Native App
// https://aboutreact.com/send-whatsapp-message/

// import React in our code
import React, {useState} from 'react';
import { render } from 'react-dom';

// import all the components we are going to use
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  TextInput,
  Linking,
  Dimensions, Image, ScrollView
} from 'react-native';

const App = ({history}) => {
  const [mobileNumber, setMobileNumber] = useState('');
  const [whatsAppMsg, setWhatsAppMsg] = useState(
    '',
  );

  const initiateWhatsApp = () => {
    // Check for perfect 10 digit length
    if (mobileNumber.length != 10) {
      alert('Please insert correct WhatsApp number');
      return;
    }
    // Using 91 for India
    // You can change 91 with your country code
    let url =
      'whatsapp://send?text=' + 
       whatsAppMsg +
      '&phone=91' + mobileNumber;
    Linking.openURL(url)
      .then((data) => {
        console.log('WhatsApp Opened');
      })
      .catch(() => {
        alert('Make sure Whatsapp installed on your device');
      });
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={{ width: Dimensions.get('window').width -30}}>
        <Image source={require('../images/Whatsapp-logo.png')} style={{ width:300, height: 60, alignSelf: 'center', marginTop: 30}}></Image>
        <Text style={styles.titleTextsmall} ></Text>
        <TextInput value={mobileNumber} onChangeText={ (mobileNumber) => setMobileNumber(mobileNumber)} placeholder={'Enter Number'} keyboardType="numeric" style={styles.textNumber}
        />
        <Text style={styles.titleTextsmall}>
        </Text>
        <TextInput
          value={whatsAppMsg}
          onChangeText={
            (whatsAppMsg) => setWhatsAppMsg(whatsAppMsg)
          }
          placeholder={'Message'}
          style={styles.textInput}
        ></TextInput>
        <TouchableOpacity
          activeOpacity={0.7}
          style={styles.buttonStyle}
          onPress={initiateWhatsApp}>
          <Text style={styles.buttonTextStyle}>
            Send WhatsApp Message
          </Text>
        </TouchableOpacity>
      </ScrollView>
      <View style={styles.allstyle}>
        <TouchableOpacity onPress={() => history.push("/")}>
             <Image source={require('../images/home.png')} style={styles.image}></Image>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => history.push("/wheretofind")}>
          <Image source={require('../images/pin.png')} style={styles.image}></Image>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => history.push("/chatnow")}>
          <Image source={require('../images/email.png')} style={styles.image}></Image>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => history.push("/contactus")}>
          <Image source={require('../images/phone-call.png')} style={styles.image}></Image>
        </TouchableOpacity>
      </View>
    </SafeAreaView>

  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    padding: 0,
    marginTop: 0,
    width: Dimensions.get('window').width -30,
    justifyContent: 'center',
    alignItems: 'center'
  },
  titleText: {
    fontSize: 22,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  titleTextsmall: {
    marginVertical: 8,
    fontSize: 16,
  },
  buttonStyle: {
    justifyContent: 'center',
    marginTop: 15,
    padding: 10,
    backgroundColor: 'green',
  },
  buttonTextStyle: {
    color: '#fff',
    textAlign: 'center',
  },
  textNumber: {
    
    height: 50,
    borderColor: 'gray',
    borderWidth: 1,
    width: '100%',
    paddingHorizontal: 10,
  },
  textInput: {
    height:180,
    borderColor: 'gray',
    borderWidth: 1,
    width: '100%',
    paddingHorizontal: 10,
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
    justifyContent: 'center',
    alignItems: 'center'

  }
});