import React from 'react';
import { withTracker } from 'meteor/react-meteor-data';
import { Stories } from '../../../api/stories';
import { Link } from 'react-router-dom';
import moment from 'moment';
import ShareIconsAndDropDown from './ShareIconsAndDropDown';
import AuthorTooltip from '../Tooltips/AuthorTooltip';
import SharePostSideBar from './SharePostSideBar';
import { funcReplace } from '../../../routes/routes.js';

import {Image, Video, Transformation, CloudinaryContext} from 'cloudinary-react';

import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// import { facebook } from '@fortawesome/free-solid-svg-icons';

// import { facebook } from '@fortawesome/free-brands-svg-icons';
// import { twitter } from '@fortawesome/free-brands-svg-icons';
// import { medium } from '@fortawesome/free-brands-svg-icons';

var adBlockerEnabled = false;
var testAd = document.createElement('testingAdBlocker');
testAd.innerHTML = '&nbsp;';
testAd.className = 'adsbox';
document.body.appendChild(testAd);
window.setTimeout(function() {
  if (testAd.offsetHeight === 0) {
    adBlockerEnabled = true;
  }
  testAd.remove();
}, 100);

export class Top extends React.Component {
constructor(props) {
super(props);
this.state = {
adBlockerEnabled,
};
}
renderAuthor() {
let authorName = Meteor.users.find({ userId: this.props.story.userId }) ? Meteor.users.find({ userId: this.props.story.userId }).username : 'not found';
return <p>{authorName}</p>;
}
findUser(userId) {
    const user = this.props.users.findOne({ _id: userId });
    return user;
}
componentDidMount() {
if (!!Meteor.userId()) {
this.renderFollowingButton();
}

if (!!Meteor.userId()) {
Tracker.autorun(() => {
   let userFollowing = Meteor.users.findOne({ _id: Meteor.userId() }).following;
   this.renderFollowingButton();
});
}
}
renderFollowingButton() {

let user = Meteor.users.findOne({ _id: Meteor.userId() });
let profileFollow = Meteor.users.findOne({ _id: this.props.story.userId }).following.includes(user._id);

// console.log('author tooltip id', this.props.userId);

this.setState({ profileFollow });
}
toggleIsFollowing() {
  // this.renderFollowingButton();

  if (!!Meteor.userId()) {

  let user = Meteor.users.findOne({ _id: Meteor.userId() });
  let otherUser = Meteor.users.findOne({ _id: this.props.story.userId });

  let currentFollowing = user.following;
  let currentFollowers = otherUser.followers;

  if (user.following.includes(otherUser._id)) {
  let newFollowing = currentFollowing;
  let index = newFollowing.indexOf(otherUser._id);
  newFollowing.splice(index, 1);

  let newFollowers = currentFollowers;
  let otherIndex = currentFollowers.indexOf(user._id);
  newFollowers.splice(index, 1);

  Meteor.call('users.update', Meteor.userId(), { following: newFollowing });
  Meteor.call('users.update', otherUser._id, { followers: newFollowers });
  this.setState({ profileFollow: false });
  // this.renderFollowingButton();
  // this.setState({ follow: false });
  // this.renderFollowingButton();



  } else {
  let newFollowing = currentFollowing;
  if (!(newFollowing.includes(otherUser._id))) {
  newFollowing.push(otherUser._id);
  }

  let newFollowers = currentFollowers;
  if (!(newFollowers.includes(user._id))) {
  newFollowers.push(user._id);
  }


  // console.log('follow', this.state.profileFollow);

  Meteor.call('users.update', Meteor.userId(), { following: newFollowing });
  Meteor.call('users.update', otherUser._id, { followers: newFollowers });
  this.setState({ profileFollow: true });

  // this.renderFollowingButton();

  // this.renderFollowingButton();
  //
  // this.renderFollowingButton();

  // this.renderFollowingButton();

    // console.log('follow value', this.state.profileFollow);


  }
} else {
  funcReplace('/login');
}
  // this.renderFollowingButton();
}
render() {
    return (
<div>
<div className="homeTop__veryTopSpacing"></div>
<div className="showFixedNavHere"></div>
<div className="titleContainElm">
<div className="titleContainElmLower">
<Link to={`/${this.props.story.category}`}>
<div className="top__topCategoryBox">
    <div className="top__titleStoryCat">
    <div className="storyTop__posStoryCat">
  {this.props.story.category}
  </div></div></div>
</Link>
  </div>
<div className="titleMainTitleHeader">
{this.props.story.title.length > 60 ? this.props.story.title.slice(0, 60) + '...' : this.props.story.title}
</div>
<hr className="homeTop__titleVerticalLine" />
<div className="titleImageToolTip">{this.findUser(this.props.story.userId).profilePhoto ? <div><div className="storyTop__behindCircle"></div><Image className="titleAuthorImageHoverImage" cloud_name='novaterra' publicId={this.findUser(this.props.story.userId).profilePhoto}><Transformation crop="thumb" /></Image></div> : <img src={`../images/noImage.png`} className="titleAuthorImageHover"/>}
</div>

<div className="stsyst">
<div className="homeTop__titleStoryMainDateAndTime">
<div className="storyTop__authorToolTipPositioning">
<div className="floatLeft"><AuthorTooltip route='../' userId={this.props.story.userId} users={this.props.users} outsideClassName='storyTop__firstAuthorToolTipStyles' /></div>
{Meteor.userId() === this.props.story.userId ? undefined : <a className="floatLeft followingToStoryAdj">{this.state.profileFollow ? <div className="top__followingButtonLarge story__topFollowButtonPositioning" onClick={() => { this.toggleIsFollowing() }}>Following</div> : <div className="top__followButtonLarge story__topFollowButtonPositioning" onClick={() => { this.toggleIsFollowing() }}>Follow</div>}</a>}
</div>
<div className="top__readTimeTop">{moment(this.props.story.lastUpdated).format('DD MMM YYYY')} · {this.props.story.minRead} min read</div>
</div>
 </div>


<div className="clearBoth homeTop__elimateSpacing"></div>

<div className="story__topPositionShareIcons">
<ShareIconsAndDropDown/>
</div>

</div>

<div className="floatLeft homeTop__marginLeftMainImage">
<Image className="homeTop__mainImage" cloud_name='novaterra' publicId={this.props.story.mainImage}><Transformation crop="thumb" /></Image>

{/*}<div className="homeTop__storyImageSubtitle">
  Fresh Water Pouring Off Large Glaciers in Nordaustlandet, Norway. Source: National Geographic {this.props.story.mainImageSubtitle}
</div>*/}

<SharePostSideBar story={this.props.story} users={this.props.users} />

</div>

<div className="floatLeft homeTop__marginBottomAdvertising">

{/*
{ this.state.adBlockerEnabled ?

<div>
<div className="homeTop__advertisementTopDiv">
  <div className="homeTop__advertisementInnerDiv">
    Advertisement
  </div>
</div>
<div className="largeAd">

</div>
<div className="homeTop__adBackground">
  <div className="adBackHead">
    I'm not a big fan of advertise- <br/>ments either.
  </div>
   <div className="homeTop__advertisementBodyText">
    NovaTerra donates 100% of all of our profits to combat the world's most critical environmental issues. But without advertisements there are no profits.
     <br/>
     <br/>
   Turn off your ad blocker and together we'll make a difference.
     <br/>
     <div className="homeTop__advertismentLogo">NovaTerra</div>
  </div>
  </div>
  </div>

*/}


<div className="storyTop__adBanner"><div className="storyTop__adText">Ad</div></div>
<div className="bottomAdTop">
<div className="ab__sttre">
 Ad
</div>
<div className="sttrr" className="ab__advertisementBottomText">
 This is a NovaTerra Affiliate ad. 100% of all profit generated from this ad goes directly to charity. <Link to={'/mission'} className="eser">Click here</Link> to learn more.
 </div>
</div>
</div>

<div className="homeTop__veryBottomSpacing"></div>

</div>
    );
  }
}

export default withTracker(() => {
return {

};
})(Top);
