import { Meteor } from 'meteor/meteor';
import { WebApp } from 'meteor/webapp';
import { ServiceConfiguration } from 'meteor/service-configuration';

import '../imports/api/users';
import '../imports/api/stories';
import '../imports/api/tags';
import '../imports/api/creators';
import '../imports/api/notifications';
import '../imports/api/submissions';
import '../imports/api/categories';
import '../imports/api/faq';

import { Stories } from '../imports/api/stories';

import '../imports/startup/simple-schema-configuration.js';

// import ServiceConfiguration from 'meteor/service-configuration';

// const mongoose = require('mongoose');

// mongoose.connect('mongod://localhost/', { useNewUrlParser: true });

// mongoose.connect('mongodb://localhost:3000', { useNewUrlParser: true })

ServiceConfiguration.configurations.remove({
  service: "github"
});
ServiceConfiguration.configurations.insert({
service: "github" ,
loginStyle: "popup",
clientId: "e390bb150e92fd7811c3",
secret: "45f4a090c07e299cd7da7af7ab7c8e373229d143"
});


ServiceConfiguration.configurations.remove({
  service: "google"
});
ServiceConfiguration.configurations.insert({
  service: "google",
  loginStyle: "popup",
  clientId: "177612273728-bjmjnubs1o8iu4fv4279k6asn0egpi4j.apps.googleusercontent.com",
  secret: "hKHJ1DDgZz-VhQV7WT4iCB_j"
});

ServiceConfiguration.configurations.remove({
  service: "twitter"
});
ServiceConfiguration.configurations.insert({
  service: "twitter",
  loginStyle: "popup",
  clientId: "oitStzvFkRbGleJ7LHZwUmwXS",
  secret: "07qi57ZbwqA88L8pe1ksD5PusI9lfNd9YrlGR70PWPJG3vEbu4"
});

Meteor.startup(() => {

});



// Accounts.onCreateUser(function (options, user) {
//
// if (user.services.github) {
//     var accessToken = user.services.github.accessToken,
//         result,
//         profile;
//     result = Meteor.http.get("https://api.github.com/user", {
//         params: {
//             access_token: accessToken
//         }
//     });
//     if (result.error)
//         throw result.error;
//
//     profile = _.pick(result.data,
//         "login",
//         "name",
//         "avatar_url",
//         "location",
//         "email",
//         "bio",
//         "html_url");
//
//     user.profile = profile;
//
//     return user;
//   }
// });

// Meteor.startup(() => {
//   ServiceConfiguration.configurations.insert(
//     { service: 'google'},
//     {
//         $set: {
//             clientId: "177612273728-bjmjnubs1o8iu4fv4279k6asn0egpi4j.apps.googleusercontent.com",
//             loginStyle: 'popup',
//             secret: "hKHJ1DDgZz-VhQV7WT4iCB_j"
//         }
//     });
// });
