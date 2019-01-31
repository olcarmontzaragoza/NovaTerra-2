import React from 'react';
import { withTracker } from 'meteor/react-meteor-data';
import { Stories } from '../api/stories';
import { Meteor } from 'meteor/meteor';
import { Session } from 'meteor/session';

import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import Top from './Components/Story/Top';
import Body from './Components/Story/Body';
import AuthorAndComments from './Components/Story/AuthorAndComments';
import SharePostSideBar from './Components/Story/SharePostSideBar';
import StoryBottom from './Components/Story/StoryBottom';
import StoryNotFound from './Components/Story/StoryNotFound';

import createBrowserHistory from 'history/createBrowserHistory';

browserHistory = createBrowserHistory();

Meteor.subscribe('allUsers');

export class Story extends React.Component {
constructor(props) {
super(props);
this.state = {
percentage: 0,
currentPage: Session.get('currentPage'),
};
this.handleStoryScroll = this.handleStoryScroll.bind(this);
}
findStory() {
let preUrl = this.state.currentPage; // .slice(7, browserHistory.location.pathname.length);
preUrl = preUrl.trim();
let story = Stories.findOne({ link: `/` + preUrl });
console.log('story', story);
return story;
}
addStoryToUserViewed() {
let viewed = this.state.users.findOne({ _id: Meteor.userId() }).storiesViewed;

if (!(viewed.includes(this.findStory()._id))) {
let newViewed = viewed;
newViewed.push(this.findStory()._id);
Meteor.call('users.update', Meteor.userId(), { storiesViewed: newViewed });
}
}
componentDidMount() {
  console.log('ran the story page');
  Meteor.subscribe('allUsers', () => {
    Tracker.autorun(() => {
      console.log('story page tracker ran');
      let findUser = Meteor.users;
      this.setState({ users: Meteor.users });
      console.log('users', this.state.users.findOne());
      if (this.state.users) {
      if (this.findStory()) {
      console.log('added to viewed');
      this.addStoryToUserViewed();
      }
      }
      });
    });
    document.addEventListener('scroll', this.handleStoryScroll);
}
handleStoryScroll() {
     var winHeight = window.innerHeight;

     // Annoying to compute doc height due to browser inconsistency
     var body = document.body;
     var html = document.documentElement;
     var docHeight = Math.max( body.scrollHeight, body.offsetHeight,
                     html.clientHeight, html.scrollHeight, html.offsetHeight );

     var value = document.body.scrollTop;

     let newValue = window.pageYOffset / docHeight;
     newValue = newValue * 100;
     if (newValue > 0) {
     newValue = newValue + 15.1;
    }
     console.log(newValue);
     this.setState({ percentage: newValue });
}
componentWillUnmount() {
    document.removeEventListener('scroll', this.handleStoryScroll);
}
renderNormalContent() {
  if (this.findStory()) {
    return (
      <div>
      <div className="filler" style={{ width: `${this.state.percentage}%`}}></div>
      <Top story={this.findStory()} users={this.state.users} />
      <SharePostSideBar story={this.findStory()} users={this.state.users} />
      <Body story={this.findStory()} />
      <div className="story__veryBottomSpacing"></div>
      <AuthorAndComments story={this.findStory()} users={this.state.users} />
      <StoryBottom story={this.findStory()} users={this.state.users} />
      </div>
    )
  } else {
    return <StoryNotFound/>;
  }
}
render() {
    return (
      <div>
      {console.log("tried rendering ---")}
      {console.log('users defined', !!this.state.users)}
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
})(Story);
