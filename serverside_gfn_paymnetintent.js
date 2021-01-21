/* eslint-disable */
const functions = require('firebase-functions');
const stripe = require('stripe')(
  'sk_test_51I9mNxJLyDwdU00v8kXs6ZJgZuI5ai3Ouo9znxWRNsYtu1N4HdbqAU4ELUpDlNo0ZsV0kYuk8OU2CFoqJMrhDh7700EZh3mCLB');

  
exports.paymentIntent = functions.https.onRequest((request, response) => {
    const paymentIntent = await stripe.paymentIntents.create({
        amount: 10,
        currency: 'usd',
        payment_method_types: ['card'],
      });
      response.send(paymentIntent);
    
//   stripe.paymentIntents
//     .create({
//       amount: '200',
//       currency: 'usd',
//       payment_method_types: ['card'],
//     })

    // .then((charge) => {
    //   response.send(charge);
    // })

    // .catch((error) => {
    //   console.log(error);
    // });
});
