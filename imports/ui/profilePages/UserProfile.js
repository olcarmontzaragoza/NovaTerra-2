import React from 'react';
import { withTracker } from 'meteor/react-meteor-data';
import MainProfileLayout from './MainProfileLayout';
import { Stories } from '../../api/stories';

import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';

import UserNotFound from './UserNotFound.js';

import createBrowserHistory from 'history/createBrowserHistory';

browserHistory = createBrowserHistory();

export class UserProfile extends React.Component {
constructor(props) {
  super(props);
  this.state = {
    currentPage: Session.get('currentPage')
  };
}
componentDidMount() {

// let profileUrl = browserHistory.location.pathname;

Meteor.subscribe('allUsers', () => {
  Tracker.autorun(() => {
    let findUser = Meteor.users;
    this.setState({ users: Meteor.users });
    });
    });
}
returnUserStories(type) {
  if (type === 'popular') {
    let popular = [];

    let popularBefore = Stories.find({ storyType: 'published' }, { sort: { likes: -1 }}).fetch().map((story) => {
    if (story.userId === this.state.users.findOne({ profileUrl: `/` + this.state.currentPage })._id) {
      popular.push(story);
    }
    });

    return popular;

  } else if (type === 'latest') {
    let latest = [];

    let latestBefore = Stories.find({ storyType: 'published' }, { sort: { lastUpdated: 1 }}).fetch().map((story) => {
    if (story.userId === this.state.users.findOne({ profileUrl: `/` + this.state.currentPage })._id) {
      latest.push(story);
    }
    });

    return latest;

  } else if (type === 'oldest') {
    let oldest = [];

  let oldestBefore = Stories.find({ storyType: 'published' }, { sort: { lastUpdated: -1 }}).fetch().map((story) => {
  if (story.userId === this.state.users.findOne({ profileUrl: `/` + this.state.currentPage })._id) {
    oldest.push(story);
  }
  });

  return oldest;

  }
}
renderNormalContent() {
  console.log('USSSSSSSERS', this.state.users);
  console.log('USSSSSSSSERS', this.state.users.findOne({ profileUrl: `/` + this.state.currentPage }));
  console.log('browserHistory', `/` + this.state.currentPage);


  if (this.state.users.findOne({ profileUrl: `/` + this.state.currentPage })) {
    document.title = `NovaTerra - ${this.state.users.findOne({ profileUrl: `/` + this.state.currentPage }).username}`;
    return <MainProfileLayout route={'../'} users={this.state.users} published={this.returnUserStories('popular')} popular={this.returnUserStories('popular')} latest={this.returnUserStories('latest')} oldest={this.returnUserStories('oldest')} user={this.state.users.findOne({ profileUrl: `/` + this.state.currentPage })}  />;
  } else {
    document.title = `NovaTerra - Profile Not Found`;
    return (
    <UserNotFound user={this.state.users} />
    )
  }

}
render() {
    return (
      <div>
      <meta name="viewport" content="initial-scale=1"></meta>
      {this.state.users ?
      <div>
      <Navbar route={'../'} users={this.state.users} />
      {this.renderNormalContent()}
      <Footer/>
      </div>
      : undefined }
      </div>
    );
  }
}

export default withTracker(() => {
return {

};
})(UserProfile);
