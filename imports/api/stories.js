import { Mongo } from 'meteor/mongo';
import { Meteor } from 'meteor/meteor';
import moment from 'moment';
import SimpleSchema from 'simpl-schema';

export const Stories = new Mongo.Collection('stories');

let route = 'images/tagImages/';

let Story1 = {
title: "Cape Town's Recent Water Crisis And What This Means For The Rest of The World",
// unCapTitle: "CAPETOWN'SWATERCRISISANDWHATHISMEANSFORTHERESTOFTHEWORLD",
category: 'Environment',
description: 'The crisis in South Africa could turn into a global trend.',
tags: ['Waste', 'Biodiversity', 'Work'],
mainImage: 'buvqycusrj8qkugguhnw',
userId: 'PoDLdr9YuZNPcLbKR',
// username: this.user().username,
lastUpdated: moment().valueOf(),
minRead: `7`, // Find out how to calcualte this
likes: ['1', '2', '3'],
comments: '2',
shares: 0,
storyType: 'published', // Change this to drafted soon
_id: '1',
link: "/story/cape-town's-water-crisis-and-what-this-means-for-the-rest-of-the-world",
references: [],
type: 'story',
}

let Story2 = {
title: "China's Recent Ban on Foreign Waste And What This Means For Emissions",
// unCapTitle: "CHINA'SRECENTBANONFOREIGNWASTEANDWHATTHISMEANSFORTHERESTOFTHEWORLD",
category: 'Environment',
description: 'The crisis in China could turn into a global trend.',
tags: ['Waste', 'Biodiversity', 'Work'],
mainImage: 'buvqycusrj8qkugguhnw',
userId: 'PoDLdr9YuZNPcLbKR',
// username: this.user().username,
lastUpdated: moment().valueOf(),
minRead: `3`, // Find out how to calcualte this
likes: ['1', '2'],
comments: '10',
shares: 0,
storyType: 'published', // Change this to drafted soon
_id: '2',
link: "/story/china's-recent-ban-on-foreign-waste-and-what-this-means-for-the-rest-of-the-world",
references: [],
type: 'story',
}

let Story3 = {
title: "Could The Recovering Ozone Layer Make Climate Change Worse?",
// unCapTitle: "COULDTHERECOVERINGOZONELAYERMAKEJUSTICEWORSE",
category: 'Environment',
description: 'The crisis in the ozone could turn into a global trend.',
tags: ['Waste', 'Biodiversity', 'Work'],
mainImage: 'buvqycusrj8qkugguhnw',
userId: 'PoDLdr9YuZNPcLbKR',
// username: this.user().username,
lastUpdated: moment().valueOf(),
minRead: `5`, // Find out how to calcualte this
likes: ['1', '2', '3', '4', '5'],
comments: '6',
shares: 0,
storyType: 'published', // Change this to drafted soon
_id: '3',
link: '/story/could-the-recovering-ozone-make-climate-change-worse',
references: [],
type: 'story',
}

let Story4 = {
title: "Can America Still Enter The Paris Climate Agreement?",
// unCapTitle: "CANAMERICASTILLENTERTHEPARISCLIMATEAGREEMENT",
category: 'Environment',
description: 'The crisis in America could turn into a global trend.',
tags: ['Waste', 'Biodiversity', 'Work'],
mainImage: 'buvqycusrj8qkugguhnw',
userId: 'PoDLdr9YuZNPcLbKR',
// username: this.user().username,
lastUpdated: moment().valueOf(),
minRead: `14`, // Find out how to calcualte this
likes: ['1'],
comments: '17',
shares: 0,
storyType: 'published', // Change this to drafted soon
_id: '4',
link: '/story/can-america-still-enter-the-paris-climate-agreement',
references: [],
type: 'story',
}

let Story5 = {
title: "What a Zero Waste Society Might Look Like",
// unCapTitle: "WHATAZEROWASTESOCIETYWILLLOOKLIKE",
category: 'Environment',
description: 'The worldwide crisis could turn into a global trend.',
tags: ['Waste', 'Biodiversity', 'Work'],
mainImage: 'buvqycusrj8qkugguhnw',
userId: 'PoDLdr9YuZNPcLbKR',
// username: this.user().username,
lastUpdated: moment().valueOf(),
minRead: `7`, // Find out how to calcualte this
likes: ['1', '2', '3', '4', '5', '6', '7', '8', '9'],
comments: '22',
shares: 0,
storyType: 'published', // Change this to drafted soon
_id: '5',
link: '/story/what-a-zero-waste-society-will-look-like',
references: [],
type: 'story',
}

let Story6 = {
title: "How To Design Cities to Withstand Wildfires",
// unCapTitle: "HOWTODESIGNCITIESTOWITHSTANDWILDFIRES",
category: 'Environment',
description: 'The Californian crisis could turn into a global trend.',
tags: ['Waste', 'Biodiversity', 'Work'],
mainImage: 'buvqycusrj8qkugguhnw',
userId: 'PoDLdr9YuZNPcLbKR',
// username: this.user().username,
lastUpdated: moment().valueOf(),
minRead: `13`, // Find out how to calcualte this
likes: ['1', '2', '3', '4', '5'],
comments: '22',
shares: 0,
storyType: 'published', // Change this to drafted soon
_id: '6',
link: '/story/how-to-design-cities-to-withstand-wildfires',
references: [],
type: 'story',
}

let Story7 = {
title: "How to Live Plastic-Free Lifestyle",
// unCapTitle: "HOWTOLIVEAPLASTICFREELIFESTYLE",
category: 'Environment',
description: 'The world crisis could turn into a global trend.',
tags: ['Waste', 'Biodiversity', 'Work'],
mainImage: 'buvqycusrj8qkugguhnw',
userId: 'PoDLdr9YuZNPcLbKR',
// username: this.user().username,
lastUpdated: moment().valueOf(),
minRead: `5`, // Find out how to calcualte this
likes: ['1', '2', '3', '4', '5', '6', '7'],
comments: '17',
shares: 0,
storyType: 'published', // Change this to drafted soon
_id: '7',
link: '/story/how-to-live-a-plastic-free-lifestyle',
references: [],
type: 'story',
}

let Story8 = {
title: "Where Have All The Berries Gone?",
// unCapTitle: "WHEREHAVEALLTHEBERRIESGONE?",
category: 'Environment',
description: 'The world crisis could turn into a global trend.',
tags: ['Justice', 'Air Pollution', 'Biodiversity'],
mainImage: 'buvqycusrj8qkugguhnw',
userId: 'PoDLdr9YuZNPcLbKR',
// username: this.user().username,
lastUpdated: moment().valueOf(),
minRead: `3`, // Find out how to calcualte this
likes: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'],
comments: '30',
shares: 0,
storyType: 'published', // Change this to drafted soon
_id: '8',
link: '/story/where-have-all-the-berries-gone',
references: [],
type: 'story',
}

let Story9 = {
title: "Where Have All The Berries Gonee?",
  // unCapTitle: "WHEREHAVEALLTHEBERRIESGONE?",
category: 'Environment',
description: 'The world crisis could turn into a global trend.',
tags: ['Waste', 'Biodiversity', 'Work'],
mainImage: 'buvqycusrj8qkugguhnw',
userId: 'PoDLdr9YuZNPcLbKR',
// username: this.user().username,
lastUpdated: moment().valueOf(),
minRead: `3`, // Find out how to calcualte this
likes: ['1', '2', '3', '4'],
comments: '1',
shares: 0,
storyType: 'published', // Change this to drafted soon
_id: '9',
link: '/story/where-have-all-the-berries-gonee',
references: [],
type: 'story',
}

let Story10 = {
title: "Where Have All The Berries Goneee?",
// unCapTitle: "WHEREHAVEALLTHEBERRIESGONEEE?",
category: 'Environment',
description: 'The world crisis could turn into a global trend.',
tags: ['Waste', 'Biodiversity', 'Work'],
mainImage: 'buvqycusrj8qkugguhnw',
userId: 'PoDLdr9YuZNPcLbKR',
// username: this.user().username,
lastUpdated: moment().valueOf(),
minRead: `3`, // Find out how to calcualte this
likes: ['1', '2', '3', '4', '5', '6'],
comments: '4',
shares: 0,
storyType: 'published', // Change this to drafted soon
_id: '10',
link: '/story/where-have-all-the-berries-goneee',
references: [],
type: 'story',
}

if (Meteor.isServer) {
  Meteor.publish('stories', function() {
    return Stories.find();
  });
}

function adminUser(userId) {
  var adminUser = Meteor.users.findOne({ username: "admin" });
  return (userId && adminUser && userId === adminUser._id);
}

Stories.allow({
   'insert': (userId) => true,
   'update': (userId) => adminUser(userId),
   'remove': (userId) => true,
 });

Meteor.methods({
  'stories.insert'(_id, details) {
      if (!this.userId) {
        throw new Meteor.Error('not-authorized');
      }

      Stories.insert({
              ...details
    });
},
'stories.update'(_id, updates) {
  if (!this.userId) {
    throw new Meteor.Error('not-authorized');
  }

    Stories.update({
    _id,
    }, {
        $set: {
            ...updates
        }
    });

//   if (Stories.find().fetch({ _id }).type !== 'published') {
//     throw new Meteor.Error('must be a draft to be updated');
//   }
//
// const storiesByUser = Stories.find().fetch({ userId: this.userId });
//
// storiesByUser.map((story) => {
//
// if (story.title === this.title) {
//   throw new Meteor.Error('You already have an story published under this title. In order to avoid confusion, please choose another title.');
// }
// });
//
//   Stories.update({
//     _id,
//     userId: this.userId
//   }, {
//     $set: {
//       updatedAt: moment().valueOf(),
//       ...updates
//     }
//   });
},
'stories.remove'(_id) {
  if (!this.userId) {
    throw new Meteor.Error('not-authorized');
  }

  new SimpleSchema({
    _id: {
    type: String,
    min: 1
    }
  }).validate({ _id });

  Stories.remove({ _id, userId: this.userId });
  },

});

// if (Stories.find().count() === 0) {
// if (Stories.find({ title: "Cape Town's Water Crisis And What This Means For The Rest of The World" }).count() === 0) Stories.insert({ ...Story1 });
// // if (Stories.find({ title: "China's Recent Ban on Foreign Waste And What This Means For The Rest of The World" }).count() === 0) Stories.insert({ ...Story2 });
// // if (Stories.find({ title: "Could The Recovering Ozone Make Justice Worse?" }).count() === 0) Stories.insert({ ...Story3 });
// // if (Stories.find({ title: "Can America Still Enter The Paris Climate Agreement?" }).count() === 0) Stories.insert({ ...Story4 });
// // if (Stories.find({ title: "What a Zero Waste Society Will Look Like" }).count() === 0) Stories.insert({ ...Story5 });
// // if (Stories.find({ title: "How to Design Cities to Withstand Wildfires" }).count() === 0) Stories.insert({ ...Story6 });
// // if (Stories.find({ title: "How to Live a Plastic Free Lifestyle" }).count() === 0) Stories.insert({ ...Story7 });
// // if (Stories.find({ title: "Where Have All The Berries Gone?" }).count() === 0) Stories.insert({ ...Story8 });
// // if (Stories.find({ title: "Where Have All The Berries Gonee?" }).count() === 0) Stories.insert({ ...Story9 });
// if (Stories.find({ title: "Where Have All The Berries Goneee?" }).count() === 0) Stories.insert({ ...Story10 });
// }
