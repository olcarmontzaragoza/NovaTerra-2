import { Mongo } from 'meteor/mongo';
import { Meteor } from 'meteor/meteor';
import moment from 'moment';
import SimpleSchema from 'simpl-schema';

let route = '/images/categoryImages';

// const Climate = {
// lastUpdated: moment().valueOf(), // Fix this issue
// name: 'Climate',
// profilePhoto: `${route}/Climate.png`,
// link: '/climate',
// followers: [],
// _id: 'Climate',
// type: 'category',
// description: 'a climate forever changed.',
// }
//
// const Energy = {
// lastUpdated: moment().valueOf(),
// name: 'Energy',
// profilePhoto: `${route}/Energy.jpg`,
// link: '/energy',
// followers: 4,
// _id: 'Energy',
// type: 'category',
// description: "we are what we consume.",
// }

const Future = {
lastUpdated: moment().valueOf(),
name: 'Future',
profilePhoto: `${route}/Future.jpg`,
link: '/future',
followers: [],
_id: 'Future',
type: 'category',
description: "it's in our hands.",
}

const Technology = {
lastUpdated: moment().valueOf(),
name: 'Technology',
profilePhoto: `${route}/Technology.jpg`,
link: '/technology',
followers: [],
_id: 'Technology',
type: 'category',
description: "have we lost our touch?",
}
//
// const World = {
// lastUpdated: moment().valueOf(),
// name: 'World',
// profilePhoto: `${route}/World.jpg`,
// link: '/world',
// followers: [],
// _id: 'World',
// type: 'category',
// description: "citizens of Earth.",
// }

const Economy = {
lastUpdated: moment().valueOf(),
name: 'Economy',
profilePhoto: `${route}/Economy.jpg`,
link: '/economy',
followers: [],
_id: 'Economy',
type: 'category',
description: "climate change vs capitalism.",
}

// const Science = {
// lastUpdated: moment().valueOf(),
// name: 'Science',
// profilePhoto: `${route}/Science.jpg`,
// link: '/science',
// followers: [],
// _id: 'Science',
// type: 'category',
// description: "what can it tell us?",
// }

// const Politics = {
// lastUpdated: moment().valueOf(),
// name: 'Politics',
// profilePhoto: `${route}/Politics.jpg`,
// link: '/politics',
// followers: [],
// _id: 'Politics',
// type: 'category',
// description: "is this fair?",
// }

const Health = {
lastUpdated: moment().valueOf(),
name: 'Health',
profilePhoto: `${route}/Health.jpg`,
link: '/health',
followers: [],
_id: 'Health',
type: 'category',
description: 'what does it mean to be healthy?',
}

const Now = {
lastUpdated: moment().valueOf(),
name: 'Now',
profilePhoto: `${route}/Now.jpg`,
link: '/now',
followers: [],
_id: 'Now',
type: 'category',
description: 'in the moment.',
}

// const Media = {
// lastUpdated: moment().valueOf(),
// name: 'Media',
// profilePhoto: `${route}/Media.jpg`,
// link: '/media',
// followers: [],
// _id: 'Media',
// type: 'category',
// description: "is this the full picture?",
// }
//
// const ArtAndFilm = {
// lastUpdated: moment().valueOf(),
// name: 'Art & Film',
// profilePhoto: `${route}/art-and-film.jpg`,
// link: '/art-and-film',
// followers: [],
// _id: 'ArtAndFilm',
// type: 'category',
// description: '...',
// }

const Environment = {
lastUpdated: moment().valueOf(),
name: 'Environment',
profilePhoto: `${route}/Environment.jpg`,
link: '/Environment',
followers: [],
_id: 'Environment',
type: 'category',
description: "forces of nature.",
}

export const Categories = new Mongo.Collection('categories');

// Categories.insert({ text: 'Hello, world!' });

if (Meteor.isServer) {
    Meteor.publish('categories', function() {
    return Categories.find();
    });
}

function adminUser(userId) {
  var adminUser = Meteor.users.findOne({ username: "admin" });
  return (userId && adminUser && userId === adminUser._id);
}

Categories.allow({
  'insert': (userId) => true,
  'update': (userId) => adminUser(userId),
  'remove': (userId) => adminUser(userId),
});

Meteor.methods({
  'categories.insert'(details) {
      // if (!this.userId) {
      //   throw new Meteor.Error('not-authorized');
      // }

      return Categories.insert({
        ...details
      });
    }, 'categories.update'(_id, details) {
      if (!this.userId) {
        throw new Meteor.Error('not-authorized');
      }

        Categories.update({
        _id,
        }, {
            $set: {
                ...details
            }
        });
      },
});

// if (Categories.find().count() === 0) {
// if (Categories.find({ name: 'Future' }).count() === 0) Categories.insert({ ...Future });
// if (Categories.find({ name: 'Technology' }).count() === 0) Categories.insert({ ...Technology });
// if (Categories.find({ name: 'Economy' }).count() === 0) Categories.insert({ ...Economy });
// if (Categories.find({ name: 'Now' }).count() === 0) Categories.insert({ ...Now });
// if (Categories.find({ name: 'Health' }).count() === 0) Categories.insert({ ...Health });
// if (Categories.find({ name: 'Environment' }).count() === 0) Categories.insert({ ...Environment });
// }
