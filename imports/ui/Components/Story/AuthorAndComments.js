import React from 'react';
import { withTracker } from 'meteor/react-meteor-data';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import AuthorTooltip from '../Tooltips/AuthorTooltip';
import { Link } from 'react-router-dom';

import {Image, Video, Transformation, CloudinaryContext} from 'cloudinary-react';

import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
import { faAngleUp } from '@fortawesome/free-solid-svg-icons';

import { fas } from '@fortawesome/free-solid-svg-icons';

library.add(fas);

import ShareIconsAndDropDown from './ShareIconsAndDropDown';

let count = 1;

export class AuthorAndComments extends React.Component {
constructor(props) {
super(props);
this.state = {
showMore: false
};
}
findUser(id) {
let user = this.props.users.findOne({ _id: id });
return user;
}
componentDidMount() {
if (!!Meteor.userId()) {
this.renderFollowingButton();
}
if (Meteor.userId()) {
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
renderUserDescription() {
  if (this.findUser(this.props.story.userId).description.length > 110) {
    return this.findUser(this.props.story.userId).description.slice(0, 110) + '...';
  } else {
    return this.findUser(this.props.story.userId).description;
  }
}
toggleReferencesSide() {

this.setState({ showMore: !this.state.showMore });

// $("#mySidenav").hide();
//
// function showSide() {
//     $("#mySidenav").show();
//     document.getElementById("mySidenav").style.width = "385px";
//     $("#e").hide();
//     $("#s").show();
// }
//
// function hideSide() {
//
//   var bottomSideBar = $(".sidenav");
//
//     $("#e").show();
//     $("#s").hide();
//     document.getElementById("mySidenav").style.width = "0";
//     setTimeout(function() {
//     document.getElementById("mySidenav").scrollTop = 0;
//     /* bottomSideBar.scrollTo(0, 0); */
//     /*.scrollTop = 0;*/
//     $("#mySidenav").hide();
//     /* $("#containerDiv").animate({ scrollTop: 0 }, "fast"); */
//     }, 400);
// }
}
insertShowMoreLinks() {
  return (
    <div>

    </div>
  );
}
render() {
    return (
      <div className="centerOfBrowser">

<hr className="bottomSeperatingLine" />

<hr className="titleVerticalLine"/>

<div className="captionBottomStory">Make a Difference by Sharing This Post</div>

<div className="captionBelowBottomStory">You are helping us raise funding and awareness to combat environmental degradation</div>

<div className="authorAndComments__shareIconsMarginLeft">
<ShareIconsAndDropDown/>
</div>
<div className="ab__shareAndCommentsStory2">
  <FontAwesomeIcon icon={['fas', 'comments']} className="commentIconStory2" />
  <div className="scFont refNumCom">0</div>

  <div className="commentAndSharesLineStory1">
  </div>

  <FontAwesomeIcon icon={['fas', 'globe-americas']} className="shareIconStory2" />
  <div className="scFont refNumShare">{this.props.story.likes.length}</div>
        </div>

<div className="toolStartRef"></div>

<div className="authorAndComments__topReferencingSpacing"></div>

<hr className="bottomSeperatingLineBottom" />

<div className="authorAndComments__aboutTheAuthorTopSpacing"></div>

<div className="ac__mobileMarginLeft">

<div className="referencesAndAuthorTopDiv">

<div className="floatLeft">
<div className="authorAndComments__aboutTheAuthor">
 <h2 className="authorAndComments__aboutTheAuthorInnerDiv">
About The Author
</h2><hr className="authorAndComments__topHrs" />
</div>

<div className="authorsAndComments__referencesTPositioningDiv">

<div className="floatLeft">
<Link to={this.findUser(this.props.story.userId).profileUrl}>{this.findUser(this.props.story.userId).profilePhoto ? <div><div className="bottomStory__behindCircleAAC"></div><Image className="titleAuthorImageHoverAboutImage refContainerAuthorImage refAuthorImgHovTooltip" cloud_name='novaterra' publicId={this.findUser(this.props.story.userId).profilePhoto}><Transformation crop="thumb" /></Image></div> :
<img src={`../images/noImage.png`} className="titleAuthorImageHoverAbout refContainerAuthorImage refAuthorImgHovTooltip"/>}</Link>

</div>

<div className="authorAndComments__stsyst">

<div className="authorAndComments__aboutTheAuthorDescription">
<AuthorTooltip route='../' userId={this.props.story.userId} users={this.props.users} outsideClassName='authorAndComments__firstAuthorToolTipStyles' />
<div className="authorAndComments__descriptionMarginTop">{this.findUser(this.props.story.userId).description ? this.renderUserDescription() : ''}</div>
</div>
 </div>

 <div className="clearBoth"></div>

{Meteor.userId() === this.props.story.userId ? undefined : <div> {this.state.profileFollow ? <div className="top__followingButtonLargeBottom story__bottomFollowButtonPositioning" onClick={() => { this.toggleIsFollowing() }}>Following</div> : <div className="top__followButtonLargeBottom story__bottomFollowButtonPositioning" onClick={() => { this.toggleIsFollowing() }}>Follow</div>}</div>}

</div>

</div>


<div className="authorsAndComments__referencesTopPositioningDiv">

<div className="authorAndComments__referencesSection">
 <h2 className="authorAndComments__referencesSectionInnerDiv">
References
</h2><hr className="authorAndComments__topHrs" />
</div>

<div className="authorAndComments__referencesTopDiv">

{ this.props.story.references ?
<div>
 <div className="authorAndComments__outsideReferenceOuterDiv" dangerouslySetInnerHTML={{ __html: this.props.story.references.slice(0, 100) }}></div>
</div>
: undefined }
</div>
</div>

<div className="clickShareRef">
    <div className="authorAndComments__referencesShowMoreTopDiv">
      {!this.props.story.references < 2 ? this.insertShowMoreLinks() : undefined }
</div>
</div>
</div></div>

          <div className={`mySidenav sidenav ${this.state.showMore ? 'width385' : 'width0'}`}>
            <div className="closebtn" onClick={() => { this.toggleReferencesSide()}}>&times;</div>

          <hr className="titleVerticalLine referencesSideTopHr" />

          <h2 className="referencesSideTopH2">
          References
          </h2>
          <hr className="referencesSideSecondHr" />

          {this.props.story.references.length > 0 ? <div>
          {this.props.story.references}

            {/* .map((reference) => {
            count++;
            if (count === 0) {
              return (
                <div className="authorAndComments__referencesDiv"><div className="authorAndComments__relative">1. </div> <div className="authorAndComments__referencesInnerDiv">
                {reference.citation}
              </div>*/}</div> : undefined}

          {/*   } else {
              return (
                <div>
                <hr className="authorAndComments__referencesHr" />
                <div className="authorAndComments__referencesDiv"><div className="authorAndComments__relative">1. </div> <div className="authorAndComments__referencesInnerDiv">
                {reference.citation}
              </div></div>
              </div>
              );
            }
          })}
          </div>
          : undefined } */}
          <a className="e ekes" onClick={() => { this.toggleReferencesSide() }}><div className={`${this.props.story.references.length < 5 ? 'referencesSideBottomCloseBottom' : 'referencesSideBottomClose'}`}>Close </div><div className={`${this.props.story.references.length < 5 ? 'referencesSideBottomCloseXBottom' : 'referencesSideBottomCloseX'}`}>&times;</div></a>

          </div>
<div className="toolEndRef"></div>
<div className="authorAndComments__veryBottomSpacing"></div>

</div>
    );
  }
}

export default withTracker(() => {
return {

};
})(AuthorAndComments);
