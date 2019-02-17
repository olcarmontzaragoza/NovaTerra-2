import { Mongo } from 'meteor/mongo';
import { Meteor } from 'meteor/meteor';
import moment from 'moment';
import SimpleSchema from 'simpl-schema';

export const Submissions = new Mongo.Collection('submissions');

if (Meteor.isServer) {
    Meteor.publish('submissions', function() {
    return Submissions.find();
});
}

// let Submission1 = {
//   reason: 'FEEDBACK',
//   time: moment(moment().valueOf()).format('LLLL'),
//   // user: Meteor.userId() ? Meteor.userId() : 'Not Signed In',
//   // username: Meteor.userId() ? Meteor.users.findOne({ _id: Meteor.userId() }).username : 'Not Signed in',
// }

function adminUser(userId) {
  var adminUser = Meteor.users.findOne({ username: "admin" });
  return (userId && adminUser && userId === adminUser._id);
}

Submissions.allow({
   'insert': (userId) => true,
   'update': (userId) => adminUser(userId),
   'remove': (userId) => true,
 });

Meteor.methods({
  'submissions.insert'(details) {
      // if (!this.userId) {
      //   throw new Meteor.Error('not-authorized');
      // }

      return Submissions.insert({
        ...details
      });
    }, 'submissions.update'(_id, details) {
        if (!this.userId) {
          throw new Meteor.Error('not-authorized');
        }

        Submissions.update({
        _id,
        }, {
            $set: {
                ...details
            }
        });
      },
      'submissions.remove'(_id) {
        // if (!this.userId) {
        //   throw new Meteor.Error('not-authorized');
        // }

        Submissions.remove({ _id });
        },
});

// if (Submissions.find().count() === 0) {
//   Submissions.insert({ ...Submission1 })
// }
