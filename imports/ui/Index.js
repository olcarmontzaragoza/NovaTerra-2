import React from 'react';
import { withTracker } from 'meteor/react-meteor-data';
import { Meteor } from 'meteor/meteor';
import moment from 'moment';

import Navbar from './Components/Navbar';
import HomeTop from './Components/Homepage/HomeTop';
import HomeMiddle from './Components/Homepage/HomeMiddle';
import HomeBottom from './Components/Homepage/HomeBottom';
import Footer from './Components/Footer';

const oneWeekAgo = moment().subtract(7, 'days');
const oneMonthAgo = moment().subtract(30, 'days');
const threeMonthsAgo = moment().subtract(90, 'days');

let homeTopArray = [];

let user = Meteor.users.findOne({ _id: this.userId }); // FIX THIS

// FIX THIS - PERSONALISED CONTENT
// if (!!Meteor.userId) {
//
// let homeAndMiddleStories = [];
//
// let categories = ['Climate, ']
//
// let tags = [];
//
// let findTags = Tags.find().fetch().map((tag) => {
//   tags.push(tag.name);
// });
//
// let authors = [];
//
// let findAuthors = Stories.find({ storyType: 'published' }, {
// }).fetch().map((story) => {
//
//   let user = Meteor.users.findOne({ _id: story.userId }); // FIX THIS
//   if (user) {
//
//   let alreadyAdded = false;
//   authors.map((author) => {
//     if (author._id === user._id) {
//       alreadyAdded = true;
//     }
//   });
//
//   if (!alreadyAdded) {
//     authors.push(user);
//   }
// }
// });
//
// let following = this;
//
// categories.map((category) => {
//   if (following.includes(category)) {
//     Stories.find({ category, type: 'published'}).fetch().map((story) => {
//
//       if (moment(story.lastUpdated).isAfter(oneMonthAgo)) {
//       homeAndMiddleStories.push(story);
//     }
//     });
//   }
// });
//
// tag.map((tag) => {
//   if (following.includes(tag)) {
//     Stories.find({ storyType: 'published' }).fetch().map((story) => {
//
//       if (tags.includes(tag)) {
//       if (moment(story.lastUpdated).isAfter(oneMonthAgo)) {
//       homeAndMiddleStories.push(story);
//       }
//       }
//     });
//   }
// });
//
// Meteor.users.map((user) => {
// if (following.includes(user._id)) {
//
// Stories.find({ storyType: 'published' }).fetch().map((story) => {
//
//   if (story.userId === user._id) {
//   if (moment(story.lastUpdated).isAfter(oneMonthAgo)) {
//   homeAndMiddleStories.push(story);
//   }
//   }
// });
// }
// });
//
// if (homeAndMiddleStories.length >= 21) {
//
// homeTopArray = homeAndMiddleStories.find({}, { sort: { likes: -1 }}).fetch().slice(0, 5);
// homeTopArray.map((story) => {
// if (homeAndMiddleStories.includes(story)) {
// let index = homeAndMiddleStories.indexOf(story);
// homeAndMiddleStories.splice(index, 1);
// }
// });
// homeMiddleArray = homeAndMiddleStories;
//
// } else if (homeAndMiddleStories.length >= 5) {
//
// homeTopArray = homeAndMiddleStories.find({}, { sort: { likes: -1 }}).fetch().slice(0, 5);;
// if (homeAndMiddleStories.includes(story)) {
// let index = homeAndMiddleStories.indexOf(story);
// homeAndMiddleStories.splice(index, 1);
// }
// homeMiddleArray = homeAndMiddleStories;
// }
// }

export class Index extends React.Component {
constructor(props) {
super(props);
this.state = {
// homeTopStories:homeTopStories,
// middleContainers:middleStories,
// showMoreContainers: this.props.showMoreContainers,

// moreStoriesToShow: showMoreStories.length || lastThreeMonthsStoriesEdited.length
};
}
componentDidMount() {

  Meteor.subscribe('allUsers', () => {
    Tracker.autorun(() => {
      let findUser = Meteor.users;
      this.setState({ users: Meteor.users });
      });
    });
  document.title = `NovaTerra - Home`;
}
  render() {
    return (
      <div>
      <meta name="viewport" content="initial-scale=1"></meta>
      {this.state.users ?
          <div>
          <script src="https://cloud.tinymce.com/stable/tinymce.min.js?apiKey=nse1whm3t8e17mkpjs3qjw32oezqwhmmxp13sx6tlukjjflx"></script>
          <Navbar route={''} users={this.state.users} />
          <HomeTop users={this.state.users} />
          <HomeMiddle users={this.state.users} /> { /* middleStories={this.state.middleContainers} showMoreContainers={this.state.showMoreContainers} */}
          <Footer route='' />
          </div>
          : undefined }
      </div>
    );
  }
}

export default withTracker(() => {
Meteor.subscribe('stories');
return {

};
})(Index);
