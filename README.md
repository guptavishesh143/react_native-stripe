# React_native_stripe_config



Create Project Using **npx react-native init  <Project_name>**


Dependency Link TIPSI-STRIPE  : https://tipsi.github.io/tipsi-stripe/docs/index.html     **yarn add tipsi-stripe**



**IOS CONFIGURATION**

Goto ProjectFolder/ios/Podfile and initialize  

**pod 'stripe','~> 14.0.0'<br/>

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


