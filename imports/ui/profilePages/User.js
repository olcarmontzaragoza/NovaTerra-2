import React from 'react';
import { withTracker } from 'meteor/react-meteor-data';
import { Link } from 'react-router-dom';
import moment from 'moment';
import { Stories } from '../../api/stories';
import { Tags } from '../../api/tags';
import { Categories } from '../../api/categories';
import { funcReplace } from '../../routes/routes.js';

import {Image, Video, Transformation, CloudinaryContext} from 'cloudinary-react';

export class User extends React.Component {
constructor(props) {
super(props);
this.state = {

};
this.setFollowingRef = this.setFollowingRef.bind(this);
this.setUserBoxRef = this.setUserBoxRef.bind(this);

this.handleClickOutside = this.handleClickOutside.bind(this);
}
setFollowingRef(node) {
    this.followingRef = node;
}
setUserBoxRef(node) {
    this.userBox = node;
}
componentDidMount() {
    this.renderFollowingButton();
    document.addEventListener('mousedown', this.handleClickOutside);

    if (Meteor.userId()) {
    Tracker.autorun(() => {
       let userFollowing = Meteor.users.findOne({ _id: Meteor.userId() }).following;
       this.renderFollowingButton();
    });
  }
}
componentWillUnmount() {
    document.removeEventListener('mousedown', this.handleClickOutside);
}
findStoriesLength(userId) {
let stories = [];
let findStories = Stories.find({ storyType: 'published' }, { sort: { lastUpdated: 1 }}).fetch().map((story) => {
if (story.userId === userId) {
    stories.push(story);
}
});
return stories.length;
}
getPostsFromCatOrTag() {
  let posts;
  if (this.findUser().type === 'category') {
    posts = Stories.find({ category: this.findUser().name }).count();
  } else if (this.findUser().type === 'tag') {
    posts = [];
    let tags = this.findUser().tags;
    Stories.find().fetch().map((story) => {
      story.tags.map((tag) => {
        if (tag === this.findUser().name) {
          posts.push(story._id);
        }
    });
    });
    console.log('posts', posts);
  }
  return posts;
}
renderFollowingButton() {

let user = Meteor.users.findOne({ _id: Meteor.userId() });
let otherUser = this.findUser();
let follow = user.following.includes(otherUser._id);

this.setState({ follow });
console.log('followButton', follow);
}
toggleIsFollowing() {

  if (Meteor.userId()) {

  let user = Meteor.users.findOne({ _id: Meteor.userId() });
  let otherUser = this.findUser();

  let currentFollowing = user.following;
  let currentFollowers = otherUser.followers;

  if (user.following.includes(this.findUser()._id)) {

  let newFollowing = currentFollowing;
  console.log('newFollowing', newFollowing);
  let index = newFollowing.indexOf(this.findUser()._id);
  console.log('index', index);
  newFollowing.splice(index, 1);
  console.log('newFollowing', newFollowing);

  let newFollowers = currentFollowers;
  let otherIndex = currentFollowers.indexOf(user._id);
  newFollowers.splice(index, 1);
  console.log('newFollowers', newFollowers);

  Meteor.call('users.update', Meteor.userId(), { following: newFollowing });
  if (this.findUser().type) {
    if (this.findUser().type === 'category') {
    Meteor.call('categories.update', otherUser._id, { followers: newFollowers });
    } else if (this.findUser().type === 'tag') {
    Meteor.call('tags.update', otherUser._id, { followers: newFollowers });
    }
  } else {
    Meteor.call('users.update', otherUser._id, { followers: newFollowers });
  }

  this.renderFollowingButton();
  // this.setState({ follow: false });
  console.log('newFollowing', newFollowing);
  } else {

  let newFollowing = currentFollowing;
  if (!(newFollowing.includes(otherUser._id))) {
  newFollowing.push(this.findUser()._id);
  }
  console.log('newFollowing', newFollowing);

  let newFollowers = currentFollowers;
  if (!(newFollowers.includes(user._id))) {
  newFollowers.push(user._id);
  }
  console.log('newFollowers', newFollowers);

  Meteor.call('users.update', Meteor.userId(), { following: newFollowing });
  if (this.findUser().type) {
    if (this.findUser().type === 'category') {
    Meteor.call('categories.update', otherUser._id, { followers: newFollowers });
    } else if (this.findUser().type === 'tag') {
    Meteor.call('tags.update', otherUser._id, { followers: newFollowers });
    }
  } else {
    Meteor.call('users.update', otherUser._id, { followers: newFollowers });
  }
  this.renderFollowingButton();
  // this.setState({ follow: true });
  console.log('newFollowing', newFollowing);
  }
} else {
  funcReplace('/login');
}
}
handleClickOutside(e) {
  if (this.followingRef && this.userBox && this.userBox.contains(e.target) && !this.followingRef.contains(e.target)) {
    funcReplace(this.props.user.profileUrl);
  }
  if (this.followingRef && this.userBox && this.userBox.contains(e.target) && this.followingRef.contains(e.target)) {
    console.log('they both existsssss');
  }
  if (this.followingRef && this.userBox && this.userBox.contains(e.target)) {
    console.log('they both existsssss12345');
  }


}
findUser() {
  console.log('id', this.props.user);
  let user;
  if (this.props.user === 'Climate' || this.props.user === 'Energy' || this.props.user === 'Future' || this.props.user === 'Tech' || this.props.user === 'World' || this.props.user === 'Economy' || this.props.user === 'Science' || this.props.user === 'Politics' || this.props.user === 'Health' || this.props.user === 'Media' || this.props.user === 'ArtAndFilm' || this.props.user === 'Environment') {
    console.log('climate ran');
    user = Categories.findOne({ _id: this.props.user });
    console.log('climate user', user);
  } else if (this.props.user === 'Renewables' || this.props.user === 'FossilFuels' || this.props.user === 'Transport' || this.props.user === 'Sustainability' || this.props.user === 'Agriculture' || this.props.user === 'ExtremeWeather' || this.props.user === 'Biodiversity' || this.props.user === 'Waste' || this.props.user === 'Nature' || this.props.user === 'Home' || this.props.user === 'Justice' || this.props.user === 'AirPollution' || this.props.user === 'Recycling' || this.props.user === 'Research') {
    user = Tags.findOne({ _id: this.props.user });
  } else {
    user = Meteor.users.findOne({ _id: this.props.user });
  }
  return user;
}
render() {
    return (
      <div>
        <Link to={this.findUser().profileUrl} ref={this.setUserBoxRef}><div className="profileStory__moreIndividualContainersUsers" >

        {this.findUser().profilePhoto  ? <div><div className="mpl__behindCircleUser"></div><Image className="profileUser__mainImageStoriesProfilePageImage" cloud_name='novaterra' publicId={this.findUser().profilePhoto }><Transformation crop="thumb" /></Image></div> :
        <img src={`${this.props.route}images/noImage.png`} className="profileUser__mainImageStoriesProfilePage"/>}

        <div className="floatLeft bottomContainerUserProfileUsers">
        {this.findUser().username ? <div className="user__mpl__mainAuthor floatLeft">{this.findUser().username.length > 35 ? this.findUser().username.slice(0, 35) + '...' : this.findUser().username}</div> : <div className="user__mpl__mainAuthor floatLeft">{this.findUser().name.length > 35 ? this.findUser().name.slice(0, 35) + '...' : this.findUser().name}</div>}
        {this.findUser()._id === Meteor.userId() ? undefined : <div>{this.state.follow ? <a ref={this.setFollowingRef} className="mpl__followingButtonLarge floatLeft" onClick={() => { this.toggleIsFollowing() }}>Following</a> : <a ref={this.setFollowingRef} className="mpl__followButtonLarge floatLeft" onClick={() => { this.toggleIsFollowing() }}>Follow</a>}</div>}
        <div className="clearBoth"></div>
        { this.findUser().type ? <div className={`mpl__mainStatUsers`}>{`${this.getPostsFromCatOrTag()} ${this.getPostsFromCatOrTag() === 1 ? 'story' : 'stories'}`}</div> : <div className={`mpl__mainStatUsers`}>{`${this.findStoriesLength(this.props.user._id)} ${this.findStoriesLength(this.props.user._id).length === 1 ? 'story' : 'stories'}`}</div>}
        <div className={`mpl__mainStatUsers`}>{`${this.findUser().followers.length} ${this.findUser().followers.length === 1 ? 'follower' : 'followers'}`}</div>
        {this.findUser().type ? undefined : <div className={`mpl__mainStatUsers`}>{`${this.findUser().following.length} following`}</div>}
        <div className="clearBoth"></div>
        <div className="mpl__mainDescriptionUser">{this.findUser().description.length > 46 ? this.findUser().description.slice(0, 46) + '...' : this.findUser().description}</div>

        </div>
        <div className="clearBoth"></div>

       </div></Link>
      </div>
    );
  }
}

export default withTracker(() => {
Meteor.subscribe('stories');
return {

};
})(User);
