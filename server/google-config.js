const google = {

  // Use oAuth credentials of web application/client here, for oAuth from web browser.
  // see https://github.com/sujith3g/meteor-g-plus/blob/master/public/screnshots/create.png

  clientId: "com.googleusercontent.apps.825480306969-uglck4esst2m4urn33fl92qb5mjkbiih",
  clientSecret: "nbOQex6czCH-pZZw4WJsvE8I"

};

Meteor.startup(() => {

  Accounts.loginServiceConfiguration.remove({
    service: "google"
  });

  Accounts.loginServiceConfiguration.insert({
    service: "google",
    clientId: google.clientId,
    secret: google.clientSecret
  });

  Accounts.loginServiceConfiguration.remove({
    service: "twitter"
  });

  Accounts.loginServiceConfiguration.insert({
    service: "twitter",
    consumerKey: "HOvTG1Y5ju72jYsZH5yJSw869",
    secret: "3cYwguzD5HPaA8RLtzdqnQrM0WSX0UJOzsbLMTkaKXnIDhQV35"
  });

});

Accounts.config({
  // forbidClientAccountCreation: true,
  loginExpirationInDays: 0,
  // restrictCreationByEmailDomain(emailId) {
  //     return true;
  // },
  // sendVerificationEmail: true
});