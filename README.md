# React_native_stripe_config

**Create Project Using**

```npx react-native init Project_name```
<br>

**Install Tipsi Stripe dependencies**
<br>
```npm install tipsi-stripe```

<br>

**IOS CONFIGURATION**

Goto ProjectFolder/ios/Podfile and initialize  
```
pod 'Stripe','~> 19.4.0'

  pod 'Firebase/Core'                   
  pod 'Firebase/Auth'                       
  pod 'Firebase/Crashlytics'               
  pod 'Firebase/Database'                  
  pod 'Firebase/Firestore'                 
  pod 'Firebase/Messaging'                 
  pod 'Firebase/Performance'              
  pod 'Firebase/Storage'                    

```
**Go-to cd ios  && pod install**

#Paste your key from Stripe Dashboard: 

Go to **stripe.com** >> **login/create-your-account** >> **dashboard**
<br>

<img width="100%" height="500" src="https://user-images.githubusercontent.com/55517509/105467927-56838900-5cbc-11eb-97c8-0007f80b522f.png">
<br>
<img width="100%" height="500" src="https://user-images.githubusercontent.com/55517509/105468149-a7937d00-5cbc-11eb-8ec4-ba6a5af33341.png">

**Add this to App.js**
<br>

```
import React from 'react';
import { SafeAreaView,StyleSheet,ScrollView,View, Button, Text, StatusBar} from 'react-native';
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
    'your_key_from_stripe_dashboard',
});

const App = () => {
return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <View style={{alignItems: 'center',paddingHorizontal:"30%",paddingVertical:"80%"}}>
          <Text>hello</Text>
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

```
<br>
**Run the App Using npx react-native run-ios**

<br>
Output of the simulator will be 
<br>
<img width="100" height="300" src="https://user-images.githubusercontent.com/55517509/105469008-a57dee00-5cbd-11eb-88fb-6c079d9734b0.png">


**Now create Butoons in the App.js**
<br>
```
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
   
   ```
   <br>
**Output will be**   
<br>
<img width="100" height="300" src="https://user-images.githubusercontent.com/55517509/105472004-66ea3280-5cc1-11eb-9c2c-fb05125621ba.png">
 <br>
   
**Steps you need to follow for 3D SCA Payment**
<br>
1.Create Token Method (Client-Side)
<br>
1.Create Payment Method (Client-Side)
<br>
1.Create Payment Intent (Server Side)
<br>
1.Confirm Payment Intent (Client-Side)
<br>

For Firebase Function 


We have to install Firebase tool 


**npm install -g firebase-tools**

if we are not logged in we have to login the firebase Cli
using <br>

**firebase login**
<br>
**firebase init**
<br>
choose the option of cloud function with arrow down and for selecting use spacebar

<br>
<br>
![Screenshot 2021-01-20 at 10 30 04 AM](https://user-images.githubusercontent.com/55517509/105137164-e12b8300-5b18-11eb-89ca-2f70c2e4b340.png)

Now we have sucessfully installed the functions and now we will install stripe in the function modules 

for that **cd functions**
and install stripe **npm install stripe**

firebase Function

const functions = require('firebase-functions');

const stripe = require("stripe")("sk_test_51I9mNxJLyDwdU00v8kXs6ZJgZuI5ai3Ouo9znxWRNsYtu1N4HdbqAU4ELUpDlNo0ZsV0kYuk8OU2CFoqJMrhDh7700EZh3mCLB"); // eslint-disable

exports.completePaymentWithStripe = functions.https.onRequest((request, response) => {
    
    stripe.charges.create({
        amount: request.body.amount,
        currency: request.body.currency,
        source: request.body.token,
    }).then((charge) => {
            response.send(charge);
        })
        .catch(err =>{
            console.log(err);
        });

       
});




