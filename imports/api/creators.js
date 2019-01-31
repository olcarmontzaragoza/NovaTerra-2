// import { Mongo } from 'meteor/mongo';
// import { Meteor } from 'meteor/meteor';
// import moment from 'moment';
// import SimpleSchema from 'simpl-schema';
//
// export const Creators = new Mongo.Collection('creators');
//
// if (Meteor.isServer) {
//     Meteor.publish('creators', function() {
//     return Creators.find();
// });
// }
//
// Creators.allow({
//    'insert': (userId) => true,
//    'update': (userId) => true,
//    'remove': (userId) => true,
//  });
//
// Meteor.methods({
//   'creators.insert'(details) {
//       // if (!this.userId) {
//       //   throw new Meteor.Error('not-authorized');
//       // }
//
//       return Creators.insert({
//
//       });
//     },
// });
