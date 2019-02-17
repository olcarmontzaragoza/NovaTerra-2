import React from 'react';
import { withTracker } from 'meteor/react-meteor-data';
import MainProfileLayout from './MainProfileLayout';
import { Stories } from '../../api/stories';
import { Tracker } from 'meteor/tracker';
import { Session } from 'meteor/session';

import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';

export class Profile extends React.Component {
constructor(props) {
super(props);
this.state = {

};
}
componentDidMount() {

  Meteor.subscribe('allUsers', () => {
    Tracker.autorun(() => {
       let findUser = Meteor.users.find({ _id: Meteor.userId() });
       this.setState({ users: Meteor.users });       // Meteor.users.find().fetch();
      });
    });
  document.title = `NovaTerra - Profile`;
}
returnUserArticles(type) {

  let thisUser = this.state.users.findOne({ _id: Meteor.userId() });

  if (type === 'drafted') {

    let drafted = [];

    let draftedBefore = Stories.find({ storyType: 'drafted' }).fetch().map((story) => {
    if (story.userId === thisUser._id) {
      drafted.push(story);
    }
    });

    return drafted;

  } else if (type === 'waiting') {

  let waiting = [];

  let waitingBefore = Stories.find({ storyType: 'waiting' }).fetch().map((story) => {
  if (story.userId === thisUser._id) {
    waiting.push(story);
  }
  });

  return waiting;
  }

  let published = [];

  let publishedBefore = Stories.find({ storyType: 'published' }).fetch().map((story) => {
  if (story.userId === thisUser._id) {
    published.push(story);
  }
  });

  return published;
}
render() {
    return (
      <div>
      <meta name="viewport" content="initial-scale=1"></meta>
          {this.state.users ?

          <div>
          <Navbar route={''} users={this.state.users} />
          {console.log('drafted', this.returnUserArticles('drafted'))}
          {console.log('waiting', this.returnUserArticles('waiting'))}
          {console.log('published', this.returnUserArticles('published'))}
          <MainProfileLayout route={''} user={this.state.users.findOne({ _id: Meteor.userId() })} users={this.state.users} drafted={this.returnUserArticles('drafted')} waiting={this.returnUserArticles('waiting')} published={this.returnUserArticles('published')} />
          <div className="profileBottomHeight"></div>
          <Footer route='' />
          </div>
          : undefined }

      </div>
    );
  }
}

export default withTracker(() => {
return {

};
})(Profile);
