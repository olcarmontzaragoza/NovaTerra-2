import React from 'react';
import { withTracker } from 'meteor/react-meteor-data';
import { Link } from 'react-router-dom';

import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';

library.add(fab);
library.add(far);
library.add(fas);


Meteor.subscribe('currentUser');

// function findUser(user) {
//   if (user) {
//     return user.storiesLiked.includes(this.props.story._id);
//   } else {
//     return false;
//   }
// }

export class SharePostSideBar extends React.Component {
constructor(props) {
super(props);
this.state = {
// liked: Session.get('currentUser') ? Session.get('currentUser').storiesLiked.includes(this.props.story._id) : false,
fixedSideBar: true
};
this.trackScrolling = this.trackScrolling.bind(this);
}
renderLikeButton() {

let user = Meteor.users.findOne({ _id: Meteor.userId() });
let liked = this.props.story.likes.includes(Meteor.userId());

this.setState({ liked });
}
clickedLikeButton() {
// Meteor.call('stories.update', this.props.story._id, { likes: ['1', '2', '3'] });

let user = Meteor.users.findOne({ _id: Meteor.userId() });

let currentLikes = this.props.story.likes;

if (this.props.story.likes.includes(Meteor.userId())) {
let newLikes = currentLikes;
let index = newLikes.indexOf(Meteor.userId());
newLikes.splice(index, 1);
Meteor.call('stories.update', this.props.story._id, { likes: newLikes });
// Meteor.call('notifications.insert', this.props.story._id, { likes: newLikes });
this.setState({ liked: false });
} else {
let newLikes = currentLikes;
newLikes.push(Meteor.userId());
Meteor.call('stories.update', this.props.story._id, { likes: newLikes });
this.setState({ liked: true });
}
}
componentDidMount() {
  this.renderLikeButton();
  document.addEventListener('scroll', this.trackScrolling);
}
componentWillUnmount() {
  document.removeEventListener('scroll', this.trackScrolling);
}
trackScrolling(e) {

const fixedElement = document.getElementById('storyBody__sidebar');

  // function fixDivingt() {
  // var fadeTop1 = $('#fadeOutInStart').offset().top;
  // var fadeTop2 = fadeTop1 - 115;
  // var fadeTopOut = fadeTop1 - 116;
  // var fadeTopHide = fadeTop1 - 145;
  //     if ($(window).scrollTop() > fadeTop2) {
  //     $('#socialSideBar1').fadeIn();
  //     console.log('firstFuncFade');
  //     }
  //     else if ($(window).scrollTop() < fadeTopOut) {
  //    $("#socialSideBar1").hide();
  //    console.log("$windowScroll1"); // $("#socialSideBar1").fadeIn();
  //    }
  //    else if ($(window).scrollTop() < fadeTopHide) {
  //    $("#socialSideBar1").fadeOut();
  //     console.log("$windowScroll2");
  //    }
  //   }
  //     $(window).scroll(fixDivingt);
  //     fixDivingt();
  // });

  //
  // console.log(target.scrollHeight, target.scrollTop);
}
render() {
    return (
      <div>
        { !this.state.fixedSideBar ?
        <div id="storyBody__sidebar" className="storyBody__topDivFixed storySocialSidebarTop">


        <div className="socialSidebar__earthLeft" onClick={() => { this.clickedLikeButton() }}>
        <FontAwesomeIcon icon={['fas', 'globe-americas']} className={`${this.state.liked ? 'storyBody__topLikeButtonLiked' : 'storyBody__topLikeButton' }`} />
        </div>

        <hr className="storyBody__socialSidebarHrTop" />
        <svg width="0" height="0">
        <radialGradient id="rgyt" r="150%" cx="30%" cy="107%">
        <stop stopColor="#7797d4" offset="0" />
         <stop stopColor="#81a1de" offset="0.2" />
         <stop stopColor="#8babe8" offset="0.25" />
        <stop stopColor="#8bb5f2" offset="0.35" />
         <stop stopColor="#b9e2ff" offset="0.7" />
         <stop stopColor="#c3ecf5" offset="0.77" />
        <stop stopColor="#cdf6ff" offset="0.82" />
        </radialGradient>
        </svg>
        <div className="divSocialHovtt">
        <FontAwesomeIcon icon={['fab', 'facebook-f']} className="storyBody__facebookHover" aria-hidden="true" />
        </div>
        <br/>
        <svg width="0" height="0">
        <radialGradient id="rgys" r="150%" cx="30%" cy="107%">
         <stop stopColor="#2aa3f0" offset="0.10" />
         <stop stopColor="#c4d6f1" offset="0.5" />
         <stop stopColor="#d1e4f1" offset="0.6" />
         <stop stopColor="#e0edf1" offset="0.7" />
         <stop stopColor="#e0edf1" offset="0.8" />
         <stop stopColor="#d9f5ff" offset="0.9" />

        </radialGradient>
        </svg>
        <div className="divSocialHovtts">
        <FontAwesomeIcon icon={['fab', 'twitter']} className="storyBody__twitterHover" aria-hidden="true" />
        </div>
        <br/>
        <svg width="0" height="0">
        <radialGradient id="rgyl" r="150%" cx="30%" cy="107%">
              <stop stopColor="#ff6f46" offset="0.15" />
        <stop stopColor="#ff8364" offset="0.25" />
          <stop stopColor="#ff9782" offset="0.35" />
          <stop stopColor="#ffab96" offset="0.45" />
          <stop stopColor="#ffbfaa" offset="0.55" />
          <stop stopColor="#ffd3be" offset="0.7" />
          <stop stopColor="#ffe7dc" offset="0.8" />
        </radialGradient>
        </svg>
        <div className="divSocialHovttk">
        <FontAwesomeIcon icon={['fab', 'reddit-alien']} className="storyBody__redditIconSide" aria-hidden="true" />
        </div>
        <br/>
        <svg width="0" height="0">
        <radialGradient id="rgysy" r="150%" cx="30%" cy="107%">
         <stop stopColor="#bd232b" offset="0.10" />
         <stop stopColor="#f97251" offset="0.4" />
        <stop stopColor="#ff9d85" offset="0.5" />
         <stop stopColor="#ffccb9" offset="0.6" />
         <stop stopColor="#ffeee8" offset="0.75" />
        </radialGradient>
        </svg>
        <div className="divSocialHovttrw">
        <FontAwesomeIcon icon={['fab', 'pinterest-p']} className="storyBody__pinterestIcon" aria-hidden="true" />
        </div>
        <br/>

        <hr className="storyBody__socialSidebarHr" />

        <a className="sideSharesHov">
        <FontAwesomeIcon icon={['fas', 'globe-americas']} className="shareImageSide"/><div className="shareNumSide">{this.props.story.likes.length}</div>
        </a>

        <a className="sideCommentsHov">
        <FontAwesomeIcon icon={['far', 'comments']} className="commentImageSide"/><div className="commentNumSide">72</div>
        </a>
        </div>
        :
        <div className="storyBody__topDiv">

          <div onClick={() => { this.clickedLikeButton() }}>
          <FontAwesomeIcon icon={['fas', 'globe-americas']} className={`${this.state.liked ? 'storyBody__topLikeButtonStaticLiked' : 'storyBody__topLikeButtonStatic' }`} />
          </div>

        <hr className="storyBody__socialSidebarHrTop" />

        <svg width="0" height="0">
        <radialGradient id="rgyt" r="150%" cx="30%" cy="107%">
        <stop stopColor="#7797d4" offset="0" />
         <stop stopColor="#81a1de" offset="0.2" />
         <stop stopColor="#8babe8" offset="0.25" />
        <stop stopColor="#8bb5f2" offset="0.35" />
         <stop stopColor="#b9e2ff" offset="0.7" />
         <stop stopColor="#c3ecf5" offset="0.77" />
        <stop stopColor="#cdf6ff" offset="0.82" />
        </radialGradient>
        </svg>
        <div className="divSocialHovtt">
        <FontAwesomeIcon icon={['fab', 'facebook-f']} className="storyBody__facebookHover" aria-hidden="true" />
        </div>
        <br/>
        <svg width="0" height="0">
        <radialGradient id="rgys" r="150%" cx="30%" cy="107%">
         <stop stopColor="#2aa3f0" offset="0.10" />
         <stop stopColor="#c4d6f1" offset="0.5" />
         <stop stopColor="#d1e4f1" offset="0.6" />
         <stop stopColor="#e0edf1" offset="0.7" />
         <stop stopColor="#e0edf1" offset="0.8" />
         <stop stopColor="#d9f5ff" offset="0.9" />

        </radialGradient>
        </svg>
        <div className="divSocialHovtts">
        <FontAwesomeIcon icon={['fab', 'twitter']} className="storyBody__twitterHover" aria-hidden="true" />
        </div>
        <br/>
        <svg width="0" height="0">
        <radialGradient id="rgyl" r="150%" cx="30%" cy="107%">
              <stop stopColor="#ff6f46" offset="0.15" />
        <stop stopColor="#ff8364" offset="0.25" />
          <stop stopColor="#ff9782" offset="0.35" />
          <stop stopColor="#ffab96" offset="0.45" />
          <stop stopColor="#ffbfaa" offset="0.55" />
          <stop stopColor="#ffd3be" offset="0.7" />
          <stop stopColor="#ffe7dc" offset="0.8" />
        </radialGradient>
        </svg>
        <div className="divSocialHovttk">
        <FontAwesomeIcon icon={['fab', 'reddit-alien']} className="storyBody__redditIconSide" aria-hidden="true" />
        </div>
        <br/>
        <svg width="0" height="0">
        <radialGradient id="rgysy" r="150%" cx="30%" cy="107%">
         <stop stopColor="#bd232b" offset="0.10" />
         <stop stopColor="#f97251" offset="0.4" />
        <stop stopColor="#ff9d85" offset="0.5" />
         <stop stopColor="#ffccb9" offset="0.6" />
         <stop stopColor="#ffeee8" offset="0.75" />
        </radialGradient>
        </svg>
        <div className="divSocialHovttrw">
        <FontAwesomeIcon icon={['fab', 'pinterest-p']} className="storyBody__pinterestIcon" aria-hidden="true" />
        </div>
        <br/>


        <hr className="storyBody__socialSidebarHr" />
        <div className="storyBody__sharseAndCommments">
        <a className="sideSharesHov">
        <FontAwesomeIcon icon={['fas', 'globe-americas']} className="shareImageSide"/><div className="shareNumSide">{this.props.story.likes.length}</div>
        </a>

        <a className="sideCommentsHov">
        <FontAwesomeIcon icon={['far', 'comments']} className="commentImageSide"/><div className="commentNumSide">0</div>
        </a>
      </div>
        </div>
      }
      </div>
    );
  }
}

export default withTracker(() => {
return {

};
})(SharePostSideBar);
