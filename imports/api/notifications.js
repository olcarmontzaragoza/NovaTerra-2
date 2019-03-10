import { Mongo } from 'meteor/mongo';
import { Meteor } from 'meteor/meteor';
import moment from 'moment';
import SimpleSchema from 'simpl-schema';

export const Notifications = new Mongo.Collection('notifications');

let Notification1 = {
description: "has liked your post",
userIdEventCauser: 'KnrTL4bsA74H4pGjQ',
thisUserId: 'KnrTL4bsA74H4pGjQ',
created: moment().valueOf(),
_id: 'not1',
type: 'userEvent',
postImage: 'images/storyImages/main.jpg',
postUrl: "/story/cape-town's-water-crisis-and-what-this-means-for-the-rest-of-the-world",
follow: false,
}

let Notification2 = {
description: "has liked your post",
userIdEventCauser: 'KnrTL4bsA74H4pGjQ',
thisUserId: 'KnrTL4bsA74H4pGjQ',
created: moment().valueOf(),
_id: 'not2',
type: 'userEvent',
postImage: 'images/storyImages/main1.jpg',
postUrl: "/story/cape-town's-water-crisis-and-what-this-means-for-the-rest-of-the-world",
follow: false,
}

let Notification3 = {
description: "Your story has been published:",
thisUserId: 'KnrTL4bsA74H4pGjQ',
created: moment().valueOf(),
_id: 'not3',
type: 'storyEvent',
storyId: '2',
published:true,
link: "/story/cape-town's-water-crisis-and-what-this-means-for-the-rest-of-the-world",
}

let Notification4 = {
description: "Your story has not been published:",
thisUserId: 'KnrTL4bsA74H4pGjQ',
created: moment().valueOf(),
_id: 'not4',
type: 'storyEvent',
storyId: '3',
published: false,
messageTitle: "We found a small bug in your story.",
messageBody: "We have noticed that your story says 'Top Five Reasons', yet the story has only four paragraph points. Is a section of the story missing? Apart from this, your story is perfect, feel free to publish it again after making this small tweak.",
isStoryEvent: true,
}

let Notification5 = {
description: "We've introduced bookmarks, a new feature that will help you keep all your favourite stories",
thisUserId: 'KnrTL4bsA74H4pGjQ',
created: moment().valueOf(),
_id: 'not5',
type: 'featureEvent',
messageTitle: "We've introcued bookmarks!",
messageBody: "Bookmarks is our newest feature on NovaTerra. We just want to explain quickly what they are used for and how you can use them. On the sidebar of every story as well as on the title of each story you can see this icon. Click it and the story will come up on your profile under a collection with all your other bookmarks to read later or keep as a memory.",
messageImage: 'images/getInvolved/createAory.jpg'
}

let Notification6 = {
description: "started following you",
userIdEventCauser: 'KnrTL4bsA74H4pGjQ',
thisUserId: 'KnrTL4bsA74H4pGjQ',
created: moment().valueOf(),
_id: 'not6',
type: 'userEvent',
follow: true,
}

if (Meteor.isServer) {
    Meteor.publish('notifications', function() {
    return Notifications.find();
});
}

function adminUser(userId) {
  var adminUser = Meteor.users.findOne({ username: "admin" });
  return (userId && adminUser && userId === adminUser._id);
}

Notifications.allow({
  insert: (userId) => adminUser(userId),
  remove: (userId) => adminUser(userId),
});

Meteor.methods({
  'notifications.insert'(details) {
      if (!this.userId) {
        throw new Meteor.Error('not-authorized');
      }

      return Notifications.insert({
        ...details
      });
    }, 'notifications.update'(_id, details) {
        if (!this.userId) {
          throw new Meteor.Error('not-authorized');
        }

        Notifications.update({
        _id,
        }, {
            $set: {
                ...details
            }
        });
      },
      'notifications.remove'(_id) {
        if (!this.userId) {
          throw new Meteor.Error('not-authorized');
        }

        Notifications.remove({ _id });
        },
      'notifications.removeStoryId'(_id) {

        Notifications.remove({ storyId: _id });
      }
});

// if (Notifications.find().count() === 0) {
// if (Notifications.find({ _id: '1' }).count() === 0) Notifications.insert({ ...Notification1 });
// if (Notifications.find({ _id: '2' }).count() === 0) Notifications.insert({ ...Notification2 });
// if (Notifications.find({ _id: '3' }).count() === 0) Notifications.insert({ ...Notification3 });
// if (Notifications.find({ _id: '4' }).count() === 0) Notifications.insert({ ...Notification4 });
// if (Notifications.find({ _id: '5' }).count() === 0) Notifications.insert({ ...Notification5 });
// if (Notifications.find({ _id: '6' }).count() === 0) Notifications.insert({ ...Notification6 });
// }
