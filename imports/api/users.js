import { Meteor } from 'meteor/meteor';
import SimpleSchema from 'simpl-schema';
import { Accounts } from 'meteor/accounts-base';
import { Session } from 'meteor/session';

export const validateNewUser = (user) => {
const email = user.emails[0].address;

  new SimpleSchema ({
      email: {
          type: String,
          regEx: SimpleSchema.RegEx.Email
  }
}).validate({ email })

return true;

};

Meteor.methods({
  'users.update'(_id, details) {

    if (!this.userId) {
      throw new Meteor.Error('not authorised')
    }

      Meteor.users.update({
      _id,
      }, {
          $set: {
              ...details
          }
      });

},
'users.validateEmail'(email) {

  // if (!this.userId) {
  //   throw new Meteor.Error('not authorised')
  // }

  try {
    new SimpleSchema ({
        email: {
            type: String,
            regEx: SimpleSchema.RegEx.Email
    }
  }).validate({ email });
    } catch (e) {
      throw new Meteor.Error('error', e.message );
    }
},

});

if (Meteor.isServer) {
  Accounts.validateNewUser(validateNewUser);
}

Meteor.publish("allUsers", function () {
  return Meteor.users.find({});
});

Meteor.publish('currentUser', function() {
    return Meteor.users.findOne({_id: this.userId});
});
