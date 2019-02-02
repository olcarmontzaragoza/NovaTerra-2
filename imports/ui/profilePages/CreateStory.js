import React from 'react';
import { withTracker } from 'meteor/react-meteor-data';
import CreateStoryLayout from './CreateStoryLayout';
import { Stories } from '../../api/stories';
import { Session } from 'meteor/session';

import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';

import DraftNotFound from './DraftNotFound';
import DraftNotAuthorised from './DraftNotAuthorised';

import createBrowserHistory from 'history/createBrowserHistory';

browserHistory = createBrowserHistory();

export class CreateStory extends React.Component {
constructor(props) {
super(props);
this.state = {
currentPage: Session.get('currentPage')
};
}
componentDidMount() {
Meteor.subscribe('allUsers', () => {
  Tracker.autorun(() => {
     let findUser = Meteor.users.find({ _id: Meteor.userId() });
      this.setState({ users: Meteor.users });       // Meteor.users.find().fetch();
  });
});
}
testStory() {
let story = Stories.findOne({ link: this.state.currentPage, storyType: 'drafted' });

console.log('currentPage', this.state.currentPage)
console.log('story', story);

if (!story) {
  return '404';
} else if (story.userId !== Meteor.userId()) {
  return '401';
}
}
getStoryId() {
  let preUrl = this.state.currentPage; // .slice(7, browserHistory.location.pathname.length);
  preUrl = preUrl.trim();
  let story = Stories.findOne({ link: preUrl });
  console.log('story', story);
  if (story.storyType === 'drafted') {
  return story._id;
} else {
  return false;
}
}
renderNormalContent() {

  if (this.testStory() === '404') {
    document.title = `NovaTerra - Draft Not Found`;
    return (
      <div>
      <Navbar route={'../'} users={this.state.users} storyId='404' />
      <DraftNotFound/>
      <Footer/>
     </div>
   )
  } else if (this.testStory() === '401') {
    document.title = `NovaTerra - Not Authorised`;
      return (
      <div>
      <Navbar route={'../'} users={this.state.users} storyId='401' />
      <DraftNotAuthorised/>
      <Footer/>
      </div>
    )
  } else {
    document.title = `NovaTerra - ${Stories.findOne({ link: this.state.currentPage }).title ? Stories.findOne({ link: this.state.currentPage }).title : 'Untitled Draft'}`;
    return (
      <div>
      <Navbar route={'../'} users={this.state.users} storyId={this.getStoryId()} />
      <CreateStoryLayout storyId={this.getStoryId()} />
      <Footer/>
      </div>
    )
  }
}
render() {
    return (
      <div>
      <meta name="viewport" content="initial-scale=1"></meta>
          {this.state.users && Session.get('currentPage') ?
          <div>
            {this.renderNormalContent()}
          </div>
          : undefined}
      </div>
    );
  }
}

export default withTracker(() => {
Meteor.subscribe('stories');

return {

};
})(CreateStory);
