// Server entry point, imports all server code

import '/imports/startup/server';
import '/imports/startup/both';
import {HTTP} from 'meteor/http';

// HTTP.call("POST", "https://api.twitter.com/oauth/request_token", {
//   content: "json",
//   headers: {
//     Authorization: 'OAuth oauth_consumer_key="HOvTG1Y5ju72jYsZH5yJSw869",oauth_token="3148221236-tsoUmvcLvxgSGzYdirhCekwnEvUlnjog5mhoHHf",oauth_signature_method="HMAC-SHA1",oauth_timestamp="1527771194",oauth_nonce="aIeGeuW6s39",oauth_version="1.0",oauth_signature="rV5rgWR1TlxtqsQLDxPGfa2JEro%3D"'
//   }
// }, function (err,response) {
//   console.log(err,response.content)
// });
