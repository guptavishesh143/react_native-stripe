/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Button,
  Text,
  StatusBar,
} from 'react-native';
import {axios} from 'axios';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import stripe from 'tipsi-stripe';
stripe.setOptions({
  publishableKey:
    'pk_test_51I9mNxJLyDwdU00vtTCSRCZwklRXCe9ZmUIkfASbeUkdr6J583lo9fS0z5wmMG84drNTMUDrlRBsd1K30CbzFH2y00jH98SrLp',
});

const App = () => {
  const params = {
    // mandatory
    number: '4242424242424242',
    expMonth: 11,
    expYear: 22,
    cvc: '223',
    // optional
    name: 'Test User',
    currency: 'usd',
    addressLine1: '123 Test Street',
    addressLine2: 'Apt. 5',
    addressCity: 'Test City',
    addressState: 'Test State',
    addressCountry: 'Test Country',
    addressZip: '55555',
    amount: '300',
  };

  const handlepaypress = async () => {
    try {
      console.log('---------------------');
      console.log('starts');
      const token = await stripe.createTokenWithCard(params);
      // console.log(token);
      console.log(token.tokenId);
      createPaymentMethod(token);
    } catch (error) {
      console.log(error);
    }
  };

  const createPaymentMethod = async (token) => {
    try {
      console.log('paymentMethod started');

      const paymentMethod = await stripe.createPaymentMethod({
        card: {
          token: token.tokenId,
        },
      });
   //   console.log(paymentMethod);
      //console.log(paymentMethod.id);
     paymentMethodUid = paymentMethod.id
     console.log(paymentMethodUid);
    //  confirmPaymentIntented(client_secret,paymentMethodUid);
    console.log('---------------------');
    } catch (error) {
      console.log('Token Not generated');
    }
  };

  // const confirmPaymentIntented = async (client_secret,paymentMethodUid) => {
  //   try {
  //    // console.log(client_secret);
  //     console.log(paymentMethodUid);

  //     const confirmPaymentIntent = await stripe.confirmPaymentIntent({
  //       clientSecret: client_secret,
  //       paymentMethodId: paymentMethodUid,
  //     })
  //     console.log(clientSecret);
  //     console.log(paymentMethodId);
      
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };



  const cnfrmFunction = async (paymentMethodUid) => {
    try {
      confirmPaymentIntented();
      const confirmPaymentIntent = await stripe.confirmPaymentIntent({ 
        clientSecret:client_secret,
        paymentMethodId:paymentMethodUid
      })
      
    } catch (error) {
      
    }
  }

  

 const confirmPaymentIntented = () => {
  const axios = require('axios');
  axios.get('https://us-central1-morrow-beta.cloudfunctions.net/paymentIntents')
  .then(res => {
    
    //console.log(client_secret);
    console.log('res' + res);
  })

  .catch(err => {
    // handle error
    console.log(err);
  })
 };

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <View style={{alignItems: 'center'}}>
          <Text>hello</Text>
          <Button
            style={{fontSize: 20, color: 'green'}}
            styleDisabled={{color: 'red'}}
            onPress={() => handlepaypress()}
            title="Press Me">
            Press Me
          </Button>

          <Button
            onPress={() => confirmPaymentIntented()}
            title="Confirm Payment">
            Press Me
          </Button>
        </View>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});

export default App;
