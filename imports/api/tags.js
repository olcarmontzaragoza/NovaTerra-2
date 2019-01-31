import { Mongo } from 'meteor/mongo';
import { Meteor } from 'meteor/meteor';
import moment from 'moment';
import SimpleSchema from 'simpl-schema';

let route = 'images/tagImages/';

const ClimateChange = {
lastUpdated: moment().valueOf(), // Fix this issue
name: 'Climate Change',
profilePhoto: `${route}/ClimateChange.jpg`,
link: '/climate-change',
followers: [],
_id: 'ClimateChange',
type: 'tag',
description: "are these effects irreversible?",
}

const Energy = {
lastUpdated: moment().valueOf(),
name: 'Energy',
profilePhoto: `${route}/Energy.jpg`,
link: '/energy',
followers: 4,
_id: 'Energy',
type: 'tag',
description: 'when do we move forward?',
}

const Innovation = {
lastUpdated: moment().valueOf(),
name: 'Innovation',
profilePhoto: `${route}/Innovation.jpg`,
link: '/innovation',
followers: [],
_id: 'Innovation',
type: 'tag',
description: "it's about time.",
}

const Transport = {
lastUpdated: moment().valueOf(),
name: 'Transport',
profilePhoto: `${route}/Transport.jpg`,
link: '/transport',
followers: [],
_id: 'Transport',
type: 'tag',
description: 'where does it go next?',
}

const Research = {
lastUpdated: moment().valueOf(),
name: 'Research',
profilePhoto: `${route}/Research.jpg`,
link: '/research',
followers: [],
_id: 'Research',
type: 'tag',
description: 'were we wrong?',
}

const Waste = {
lastUpdated: moment().valueOf(),
name: 'Waste',
profilePhoto: `${route}/Waste.jpg`,
link: '/waste',
followers: [],
_id: 'Waste',
type: 'tag',
description: 'how do we redefine waste?',
}

const Science = {
lastUpdated: moment().valueOf(),
name: 'Science',
profilePhoto: `${route}/Science.jpg`,
link: '/science',
followers: [],
_id: 'Science',
type: 'tag',
description: 'what can it tells us?',
}

const Cities = {
lastUpdated: moment().valueOf(),
name: 'Cities',
profilePhoto: `${route}/Cities.jpg`,
link: '/cities',
followers: [],
_id: 'Cities',
type: 'tag',
description: "how can we run most effeciently?",
}

const Self = {
lastUpdated: moment().valueOf(),
name: 'Self',
profilePhoto: `${route}/Self.jpg`,
link: '/self',
followers: [],
_id: 'Self',
type: 'tag',
description: 'how to invest in yourself.',
}

const Food = {
lastUpdated: moment().valueOf(),
name: 'Food',
profilePhoto: `${route}/Food.jpg`,
link: '/food',
followers: [],
_id: 'Food',
type: 'tag',
description: 'should we rethink food?',
}

const Politics = {
lastUpdated: moment().valueOf(),
name: 'Politics',
profilePhoto: `${route}/Politics.jpg`,
link: '/politics',
followers: [],
_id: 'Politics',
type: 'tag',
description: "what's your say?",
}

const Biodiversity = {
lastUpdated: moment().valueOf(),
name: 'Biodiversity',
profilePhoto: `${route}/Biodiversity.jpg`,
link: '/biodiversity',
followers: [],
_id: 'Biodiversity',
type: 'tag',
description: 'can we live side by side?',
}

const PersonalFinance = {
lastUpdated: moment().valueOf(),
name: 'Personal Finance',
profilePhoto: `${route}/PersonalFinance.jpg`,
link: '/personal-finance',
followers: [],
_id: 'PersonalFinance',
type: 'tag',
description: "in the age of consumerism.",
}

const Work = {
lastUpdated: moment().valueOf(),
name: 'Work',
profilePhoto: `${route}/Work.jpg`,
link: '/work',
followers: [],
_id: 'Work',
type: 'tag',
description: "where does it from here?",
}

const Equality = {
lastUpdated: moment().valueOf(),
name: 'Equality',
profilePhoto: `${route}/Equality.jpg`,
link: '/equality',
followers: [],
_id: 'Equality',
type: 'tag',
description: "is this really fair?",
}

export const Tags = new Mongo.Collection('tags');

// Tags.insert({ text: 'Hello, world!' });

if (Meteor.isServer) {
    Meteor.publish('tags', function() {
    return Tags.find();
    });
}

function adminUser(userId) {
  var adminUser = Meteor.users.findOne({ username: "admin" });
  return (userId && adminUser && userId === adminUser._id);
}

Tags.allow({
  'insert': (userId) => true,
  'update': (userId) => adminUser(userId),
  'remove': (userId) => adminUser(userId),
});

Meteor.methods({
  'tags.insert'(details) {
      // if (!this.userId) {
      //   throw new Meteor.Error('not-authorized');
      // }

      return Tags.insert({
        ...details
      });
    }, 'tags.update'(_id, details) {
      if (!this.userId) {
        throw new Meteor.Error('not-authorized');
      }

        Tags.update({
        _id,
        }, {
            $set: {
                ...details
            }
        });
      },
});

// if (Tags.find().count() < 16) {
// if (Tags.find().count() === 0) {
// if (Tags.find({ name: 'Climate Change' }).count() === 0) Tags.insert({ ...ClimateChange });
// if (Tags.find({ name: 'Energy' }).count() === 0) Tags.insert({ ...Energy });
// if (Tags.find({ name: 'Innovation' }).count() === 0) Tags.insert({ ...Innovation });
// if (Tags.find({ name: 'Transport' }).count() === 0) Tags.insert({ ...Transport });
// if (Tags.find({ name: 'Biodiversity' }).count() === 0) Tags.insert({ ...Biodiversity });
// if (Tags.find({ name: 'Cities' }).count() === 0) Tags.insert({ ...Cities });
// if (Tags.find({ name: 'Food' }).count() === 0) Tags.insert({ ...Food });
// if (Tags.find({ name: 'Science' }).count() === 0) Tags.insert({ ...Science });
// if (Tags.find({ name: 'Waste' }).count() === 0) Tags.insert({ ...Waste });
// if (Tags.find({ name: 'Self' }).count() === 0) Tags.insert({ ...Self });
// if (Tags.find({ name: 'Research' }).count() === 0) Tags.insert({ ...Research });
// if (Tags.find({ name: 'Politics' }).count() === 0) Tags.insert({ ...Politics });
// if (Tags.find({ name: 'Personal Finance' }).count() === 0) Tags.insert({ ...PersonalFinance });
// if (Tags.find({ name: 'Work' }).count() === 0) Tags.insert({ ...Work });
// if (Tags.find({ name: 'Equality' }).count() === 0) Tags.insert({ ...Equality });
// }
// }
