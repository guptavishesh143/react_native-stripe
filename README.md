# React_native_stripe_config



Create Project Using **npx react-native init  <Project_name>**


Dependency Link TIPSI-STRIPE  : https://tipsi.github.io/tipsi-stripe/docs/index.html     **yarn add tipsi-stripe**



**IOS CONFIGURATION**

Goto ProjectFolder/ios/Podfile and initialize  

**pod 'Stripe','~> 14.0.0'<br/>

  pod 'Firebase/Core'                       <br/>
  pod 'Firebase/Auth'                       <br/> 
  pod 'Firebase/Crashlytics'                <br/> 
  pod 'Firebase/Database'                   <br/> 
  pod 'Firebase/Firestore'                  <br/>
  pod 'Firebase/Messaging'                  <br/>
  pod 'Firebase/Performance'                <br/> 
  pod 'Firebase/Storage'                    <br/>

** and goto cd ios  && pod install

Goto ProjectFolder/ios/stripe_config/AppDelegate.m    and initialize  #import <Stripe/Stripe.h>


below line [self.window makeKeyAndVisible];  //**Line Around 46** 

Add  **[Stripe setDefaultPublishableKey: @"pk_test_key_XXXXXX];** 





paste your key from Stripe Dashboard 

https://www.mindbowser.com/stripe-payment-in-react-native-app-using-firebase-cloud-function/


pk_test_51I9mNxJLyDwdU00vtTCSRCZwklRXCe9ZmUIkfASbeUkdr6J583lo9fS0z5wmMG84drNTMUDrlRBsd1K30CbzFH2y00jH98SrLp
sk_test_51I9mNxJLyDwdU00v8kXs6ZJgZuI5ai3Ouo9znxWRNsYtu1N4HdbqAU4ELUpDlNo0ZsV0kYuk8OU2CFoqJMrhDh7700EZh3mCLB






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




