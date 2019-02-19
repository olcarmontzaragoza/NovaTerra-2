import React from 'react';
import { withTracker } from 'meteor/react-meteor-data';
import { Link } from 'react-router-dom';
import { Stories } from '../../../api/stories';
import moment from 'moment';
import { Notifications } from '../../../api/notifications';
import {Image, Video, Transformation, CloudinaryContext} from 'cloudinary-react';

let top = ['topTooltip', 'topTooltiptext', 'topBelowTooltipborder', 'topTooltipborder'];
let middle = ['middleTooltip', 'middleTooltiptext', 'middleBelowTooltipborder', 'middleTooltipborder'];
let bottom = ['bottomTooltip', 'bottomTooltiptext', 'bottomBelowTooltipborder', 'bottomTooltipborder'];

export class AuthorTooltip extends React.Component {
constructor(props) {
super(props);
this.state = {
tooltipArray: middle,
};
// this.handleScroll = this.handleScroll.bind(this);
}
getScrooll() {
  return 400;
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

if (Meteor.userId()) {
Tracker.autorun(() => {
   let userFollowing = Meteor.users.findOne({ _id: Meteor.userId() }).following;
   this.renderFollowingButton();
});
}

// window.addEventListener("scroll", this.handleScroll);
}
// handleScroll(e) {
//
//   let toolTipOffsetTop = this.refs.tooltipScroll.offsetTop;
//
//   // console.log('toolTipOffsetTop', toolTipOffsetTop)
//
//   let tooltipAbove = toolTipOffsetTop - 439;
//
//   let tooltipBelow = toolTipOffsetTop - 400;
//
//   let tooltipOffsetConstant = 100;
//   let windowOffsetConstant = window.pageYOffset + tooltipOffsetConstant;
//   let tooltipConstant = windowOffsetConstant - 280.5;
//   let belowBorderTooltipConstant = windowOffsetConstant  - 296;
//   let borderTooltipConstant = windowOffsetConstant - 299;
//
//   this.setState({ tooltipTop: tooltipConstant + 'px' });

  // console.log(this.state.tooltipTop);

  // if (window.pageYOffset < tooltipAbove) {
  //
  //   this.setState({ tooltipArray: top });
  //
  // } else if (window.pageYOffset > tooltipAbove && window.pageYOffset < tooltipBelow) {
  //
  //   this.setState({ tooltipArray: middle });
  //
  // } else if (window.pageYOffset > tooltipBelow) {
  //
  //   this.setState({ tooltipArray: bottom });
  //
  // }

  // console.log('state state', this.state.tooltipArray);
//   else if ($(window).scrollTop() > currentShowHomeTooltipAbove1 && $(window).scrollTop() <= currentShowHomeTooltipBelow1) {
//
//   $(".topHomeTooltiptext").css("top", middleTooltipAddedConstant);
//   $(".topHomeTooltiptext").css("left", "68.8%");
//   $(".topHomeBelowTooltipborder").css("top", middleTooltipAddedConstantArrow1);
//   $(".topHomeBelowTooltipborder").css("left", "79.9%");
//   $(".topHomeBelowTooltipborder").css("border-color", "transparent transparent #ffffff transparent");
//   $(".topHomeTooltipborder").css("top", middleTooltipAddedConstantArrow2);
//   $(".topHomeTooltipborder").css("left", "79.7%");
//   $(".topHomeTooltipborder").css("border-color", "transparent transparent #dcdcdc transparent");
//   }
//   else if ($(window).scrollTop() > currentShowHomeTooltipBelow1)  {
//
//   $(".topHomeTooltiptext").css("top", "432px");
//   $(".topHomeTooltiptext").css("left", "68.8%");
//   $(".topHomeBelowTooltipborder").css("top", "87.1%");
//   $(".topHomeBelowTooltipborder").css("left", "79.9%");
//   $(".topHomeBelowTooltipborder").css("border-color", "transparent transparent #ffffff transparent");
//   $(".topHomeTooltipborder").css("top", "86.5%");
//   $(".topHomeTooltipborder").css("left", "79.7%");
//   $(".topHomeTooltipborder").css("border-color", "transparent transparent #dcdcdc transparent");
// }
// });


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
renderUserDescription(userId) {
  if (this.findUser(userId).description.length > 185) {
    return this.findUser(userId).description.slice(0, 185) + '...';
  } else {
    return this.findUser(userId).description;
  }
}
renderFollowingButton() {
console.log('renderFollowingButton ran');

let user = Meteor.users.findOne({ _id: Meteor.userId() });
let profileFollow = user.following.includes(this.props.userId);
let followers = Meteor.users.findOne({ _id: this.props.userId }).followers;

  this.setState({ followers });
  this.setState({ profileFollow });
  console.log('followButton', this.state.profileFollow);

// console.log('author tooltip id', this.props.userId);
}
toggleIsFollowing() {
  // this.renderFollowingButton();

  if (!!Meteor.userId()) {

  let user = Meteor.users.findOne({ _id: Meteor.userId() });
  let otherUser = Meteor.users.findOne({ _id: this.props.userId });

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
  this.setState({ followers: Meteor.users.findOne({ _id: this.props.userId }).followers });

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
  this.setState({ followers: Meteor.users.findOne({ _id: this.props.userId }).followers });

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
  // this.renderFollowingButton();

    // console.log('follow value', this.state.profileFollow);


      console.log('followers', this.state.followers);
  }
} else {
  funcReplace('/login');
}
  // this.renderFollowingButton();
}
goToStoryPage(story) {
  let storyLink = story.link;
  storyLink = storyLink.slice(5, storyLink.length);
  console.log('sssstory link', storyLink);
  window.location = `/story${storyLink}`;
}
  render() {
    return (
        <div ref='tooltipScroll' style={{top: `${this.state.tooltipTop}` }} className={`${this.state.tooltipArray[0]} tooltipScroll`}>
        <div style={{top: this.state.tooltipTop}} className={`${this.state.tooltipArray[0]} popUpAuthor`}>
         <div className="titleAuthorHovContainer1">
         <div className={`hoverAuthorName authorNameTooltipTop ${`${this.props.outsideClassName}`}`}>
         {console.log(this.props.userId)}
         {console.log(this.findUser(this.props.userId))}
              <Link to={this.findUser(this.props.userId).profileUrl}>{this.findUser(this.props.userId).username}</Link>
              </div>
                </div>
               <div className="tooltip__zIndex">
               <span className={`${this.state.tooltipArray[3]}`}></span>
               <span className={`${this.state.tooltipArray[2]}`}></span>
               <span className={`${this.state.tooltipArray[1]}`}>
               <div className="authorTooltip__titleAuthorHovContainer1">
               <Link to={this.findUser(this.props.userId).profileUrl} className="authorTooltip__hoverOverToolTipMainAuthor">
                  {this.findUser(this.props.userId).username.length > 20 ? this.findUser(this.props.userId).username.slice(0, 20) + '...' : this.findUser(this.props.userId).username}
               </Link>
              </div>

              {this.findUser(this.props.userId).profilePhoto ? <div><div className="authorTooltip__behindCircle"></div><Image className="authorTooltip__toolTipAuthorImage floatLeft" cloud_name='novaterra' publicId={this.findUser(this.props.userId).profilePhoto}><Transformation crop="thumb" /></Image></div> :
              <img src={`${this.props.route}images/noImage.png`} className="authorTooltip__toolTipAuthorImage floatLeft"/>}

               <div className="aboutTextFont authorTooltip__toolTipAboutTheAuthor">
                    {this.findUser(this.props.userId).description ? this.renderUserDescription(this.props.userId) : ''}
                    {this.findUser(this.props.userId).description.length === 0 ? <div className="authorTooltip__noDescriptionSpacing"></div> : undefined }
               </div>

               <hr className="toolTipHigherHr" />

                <div className="authorTooltip__toolTipPopularStories">
                  Popular Stories
                </div>
                <div className="clearBoth"></div>
                <div className="popularStoriesList">

                 <div className="authorTooltip__toolTipPopularStoriesN">1. </div>{Session.get('currentPage').slice(0, 5) ? <a onClick={() => this.goToStoryPage(this.returnUserStories()[0])} className="authorTooltip__toolTipPopularStory">{this.returnUserStories()[0].title}</a> : <Link to={this.returnUserStories()[0].link} className="authorTooltip__toolTipPopularStory">{this.returnUserStories()[0].title}</Link>}

                 <div className="tooltipStoriesSpacing">
                 </div>

                 {this.returnUserStories().length > 1 ?
                   <div>
                   <div className="authorTooltip__toolTipPopularStoriesN"> 2. </div>{Session.get('currentPage').slice(0, 5) ? <a onClick={() => this.goToStoryPage(this.returnUserStories()[1])} className="authorTooltip__toolTipPopularStory">{this.returnUserStories()[1].title}</a> : <Link to={this.returnUserStories()[1].link} className="authorTooltip__toolTipPopularStory">{this.returnUserStories()[1].title}</Link>}
                   <div className="tooltipStoriesSpacing">
                   </div>

                   </div>

                   : undefined
                 }

                 {this.returnUserStories().length > 2 ?
                 <div>
                 <div className="authorTooltip__toolTipPopularStoriesN" id="fontThirdStoryTooltip"> 3. </div>{Session.get('currentPage').slice(0, 5) ? <a onClick={() => this.goToStoryPage(this.returnUserStories()[2])} className="authorTooltip__toolTipPopularStory">{this.returnUserStories()[2].title}</a> : <Link to={this.returnUserStories()[2].link} className="authorTooltip__toolTipPopularStory">{this.returnUserStories()[2].title}</Link>}
                 </div>

                 : undefined
                }
                </div>

               <div className="toolTipAboveLowerHrSpacing"></div>

               <hr className="toolTipLowerHr" />

               <div className="joinedDateLower">
                {this.state.followers && this.state.followers.length > 0 ? <p className="authorTooltip__followers">Followed by <span className="authorTooltip__followersNumber">{this.state.followers.length}</span> {this.state.followers.length === 1 ? 'other' : 'others'}</p> : <p className="authorTooltip__joinDate">{`Joined ${moment(this.findUser(this.props.userId).joinDate).format('MMMM YYYY')}`}</p>}
                </div>

               {Meteor.userId() === this.props.userId ? undefined : <div>{this.state.profileFollow ? <div className="authorTooltip__followingButtonLarge floatLeft" onClick={() => { this.toggleIsFollowing() }}>Following</div> : <div className="authorTooltip__followButtonLarge floatLeft" onClick={() => { this.toggleIsFollowing() }}>Follow</div>}</div>}
                       </span>
                  </div></div>
      </div>
    );
  }
}

export default withTracker(() => {
  Meteor.subscribe('stories');
  Meteor.subscribe('creators');
  return {

  };
})(AuthorTooltip);
