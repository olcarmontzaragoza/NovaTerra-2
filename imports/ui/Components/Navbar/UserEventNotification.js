import React from 'react';
import { withTracker } from 'meteor/react-meteor-data';
import { Link } from 'react-router-dom';
import { Stories } from '../../../api/stories';
import { Notifications } from '../../../api/notifications';
import moment from 'moment';

import {Image, Video, Transformation, CloudinaryContext} from 'cloudinary-react';

export class UserEventNotification extends React.Component {
constructor(props) {
super(props);
this.state = {

};
}
componentDidMount() {
  // Meteor.subscribe('allUsers', () => {
  //   Tracker.autorun(() => {
  //     console.log('did this run????');
  //      let findUser = Meteor.users;           // Meteor.users.find().fetch();
  //     this.setState({ users: Meteor.users });
  //     if (this.props.route && this.state.users) {
  //       this.renderFollowingButton();
  //     }
  //     });
  //   });

    // Tracker.autorun(() => {
    //   console.log('did this run????');
    //    let findUser = Meteor.users;           // Meteor.users.find().fetch();
    //   this.setState({ users: Meteor.users });
    //   if (this.props.route && this.state.users) {
    //     this.renderFollowingButton();
    //   }
    //   });

// this.renderFollowingButton();

if (Meteor.userId()) {
Tracker.autorun(() => {
   let userFollowing = this.props.users.findOne({ _id: Meteor.userId() }).following;
   this.renderFollowingButton();
});
}
}
returnUserStories() {
let userStories = [];
Stories.find({ storyType: 'published' }, { sort: { likes: -1 }}).fetch().map((story) => {
  if (story.userId === this.props.userId) {
    userStories.push(story);
  }
});
return userStories;
}
findUser(userId) {
    const user = this.props.users.findOne({ _id: userId });
    return user;
}
renderFollowingButton() {
console.log('renderFollowingButton ran');

let user = Meteor.users.findOne({ _id: Meteor.userId() });
let profileFollow = user.following.includes(this.findUserAction()._id);
let followers = this.findUserAction().followers;

// console.log('author tooltip id', this.props.userId);

this.setState({ followers });
this.setState({ profileFollow });
console.log('followButton', this.state.profileFollow);
}
toggleIsFollowing() {
  // this.renderFollowingButton();

  if (!!Meteor.userId()) {

  let user = Meteor.users.findOne({ _id: Meteor.userId() });
  let otherUser = this.findUserAction();
  console.log('USSSER ACTION', this.findUserAction());

  let currentFollowing = user.following;
  let currentFollowers = otherUser.followers;

  if (user.following.includes(otherUser._id)) {
  let newFollowing = currentFollowing;
  console.log('newFollowing', newFollowing);
  let index = newFollowing.indexOf(otherUser._id);
  console.log('index', index);
  newFollowing.splice(index, 1);
  console.log('newFollowing', newFollowing);

  let newFollowers = currentFollowers;
  let otherIndex = currentFollowers.indexOf(user._id);
  newFollowers.splice(index, 1);
  console.log('newFollowers', newFollowers);

  Meteor.call('users.update', Meteor.userId(), { following: newFollowing });
  Meteor.call('users.update', otherUser._id, { followers: newFollowers });
  this.setState({ profileFollow: false });
  this.setState({ followers: this.findUserAction().followers });

  if (Notifications.findOne({ description: 'started following you', userIdEventCauser: user._id, thisUserId: otherUser._id, })) {

  let notification = Notifications.findOne({ description: 'started following you', userIdEventCauser: user._id, thisUserId: otherUser._id, });

  console.log('removed notification....')
  Meteor.call('notifications.remove', notification._id);
  }

  console.log('newFollowing', newFollowing);
  console.log('newFollowers', newFollowers);


  } else {
  let newFollowing = currentFollowing;

  if (!(newFollowing.includes(otherUser._id))) {
  newFollowing.push(otherUser._id);
  }
  console.log('newFollowing', newFollowing);

  let newFollowers = currentFollowers;
  if (!(newFollowers.includes(user._id))) {
  newFollowers.push(user._id);
  }
  console.log('newFollowers', newFollowers);

  // console.log('follow', this.state.profileFollow);

  Meteor.call('users.update', Meteor.userId(), { following: newFollowing });
  Meteor.call('users.update', otherUser._id, { followers: newFollowers });
  this.setState({ profileFollow: true });
  this.setState({ followers: this.findUserAction().followers });

  console.log('notification', Notifications.findOne({ userIdEventCauser: user._id}));
  if (Notifications.findOne({ description: 'started following you', userIdEventCauser: user._id, thisUserId: otherUser._id, })) {

  let notification = Notifications.findOne({ description: 'started following you', userIdEventCauser: user._id, thisUserId: otherUser._id, });

  console.log('updated notification....')
  Meteor.call('notifications.update', notification._id, { created: moment().valueOf() });

  } else {

    let details = {
    description: "started following you",
    userIdEventCauser: user._id,
    thisUserId: otherUser._id,
    created: moment().valueOf(),
    type: 'userEvent',
    follow: true,
    seen: false,
    };
    console.log('inserted notification....')
    Meteor.call('notifications.insert', details);

  }

  console.log('newFollowing', newFollowing);
  console.log('newFollowers', newFollowers);


      console.log('followers', this.state.followers);
  }
} else {
  funcReplace('/login');
}
  // this.renderFollowingButton();
}
returnTime(time) {
  let oneMinuteAgo = moment().subtract(60, 'seconds');
  let oneHourAgo = moment().subtract(60, 'minutes');
  let oneDayAgo = moment().subtract(24, 'hours');
  let oneMonthAgo = moment().subtract(30, 'days');
  let oneYearAgo = moment().subtract(12, 'months');
  let twentyYearsAgo = moment().subtract(20, 'years');

  let fromNow = moment(time).fromNow(true);


  fromNow = fromNow.replace("a few seconds", "5s");
  fromNow = fromNow.replace("a minute", "1min");
  fromNow = fromNow.replace("an hour", "1h");
  fromNow = fromNow.replace("an hour", "1d");
  fromNow = fromNow.replace("a day", "1d");
  fromNow = fromNow.replace("a year", "1y");
  fromNow = fromNow.replace("seconds", "s");
  fromNow = fromNow.replace("minutes", "min");
  fromNow = fromNow.replace("hours", "h");
  fromNow = fromNow.replace("days", "d");
  fromNow = fromNow.replace("months", "m");
  fromNow = fromNow.replace("years", "y");
  fromNow = fromNow.replace(" ", "");

  return fromNow;
}
findUserAction() {
let userAction = this.props.users.findOne({ _id: this.props.notification.userIdEventCauser });
return userAction;
}
  render() {
    return (
      <div className={`nav__notificationsTopPadding ${!this.props.notification.seen ? 'nav__notificationNotSeenBackground' : ''}`}>
          <div className="nav__belowHrMargin1"></div>
          { this.props.notificationNum > 0 ? <hr className="clearBoth flex nav__hrSeperator"/> : undefined }
          <div className="nav__belowHrMargin"></div>
          <div className="notifications__topInnermargins">
          <div className={`clearBoth ${this.props.notification.follow ? 'nav__userEventElimateSpacingFollow' : 'nav__userEventElimateSpacing'}`}></div>
          <Link to={this.findUserAction().profileUrl} className="floatLeft">{this.findUserAction().profilePhoto ? <div><Image className="notification__userImageImage floatLeft" cloud_name='novaterra' publicId={this.findUserAction().profilePhoto}><Transformation crop="thumb" /></Image><div className="navNot__behindCircle"></div></div> :
            <img src={`${this.props.route}images/noImage.png`} className="notification__userImage"/>}</Link>
          {this.state.profileFollow ? <div className="nav__followingButtonLarge floatLeft" onClick={() => { this.toggleIsFollowing() }}>Following</div> : <div className="nav__followButtonLarge floatLeft" onClick={() => { this.toggleIsFollowing() }}>Follow</div>}
          { this.props.notification.postImage ? <Link to={this.props.notification.postUrl} className="nav__notificationsPostImagePositioning"><img className="nav__notificationsStoryImage" src={this.props.notification.postImage}/></Link> : undefined}
          <div className="flex nav__notificationsText"><Link to={this.findUserAction().profileUrl} className="link nav__notificationsTextMarginTop">{this.findUserAction().username}</Link><p className="nav__notificationsTextMarginTop">&nbsp;{this.props.notification.description}.</p>
          <p className="nav__notificationsFromNow nav__notificationsTextMarginTop">&nbsp;{this.returnTime(this.props.notification.created)}{/* moment(notification.created).fromNow() */}</p>

          </div>
          </div>

          <div className="clearBoth"></div>
          </div>
    );
  }
}

export default withTracker(() => {
return {

  };
})(UserEventNotification);
