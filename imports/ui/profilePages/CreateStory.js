import React from 'react';
import { withTracker } from 'meteor/react-meteor-data';
import CreateStoryLayout from './CreateStoryLayout';
import { Stories } from '../../api/stories';

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
let id = browserHistory.location.pathname.slice(7, browserHistory.location.pathname.length);
let story = Stories.findOne({ _id: id, storyType: 'drafted' });

if (!story) {
  return '404';
} else if (story.userId !== Meteor.userId()) {
  return '401';
}
}
getStoryId() {
  let id = browserHistory.location.pathname.slice(7, browserHistory.location.pathname.length);
  console.log('id', id);
  let story = Stories.findOne({ _id: id });
  console.log('story', story);
  if (story.storyType === 'drafted') {
  return id;
} else {
  return false;
}
}
renderNormalContent() {

  if (this.testStory() === '404') {
    return (
      <div>
      <Navbar route={'../'} users={this.state.users} storyId='404' />
      <DraftNotFound/>
      <Footer/>
     </div>
   )
  } else if (this.testStory() === '401') {
      return (
      <div>
      <Navbar route={'../'} users={this.state.users} storyId='401' />
      <DraftNotAuthorised/>
      <Footer/>
      </div>
    )
  } else {
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
          {this.state.users ?
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
