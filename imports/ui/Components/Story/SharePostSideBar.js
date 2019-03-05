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
fixedSideBar: true,
reactOpen: false,
};
this.trackScrolling = this.trackScrolling.bind(this);
this.handleClickOutside = this.handleClickOutside.bind(this);
this.setReactBar = this.setReactBar.bind(this);
this.setReactIcon = this.setReactIcon.bind(this);
}
renderReactButton() {

let user = Meteor.users.findOne({ _id: Meteor.userId() });
let reactions = this.props.story.reactions.includes(Meteor.userId());

let reacted = '';

if (reactions) {
  let currentHearts = this.props.story.heartReactions;
  let currentSurprised = this.props.story.suprisedReactions;
  let currentLaughs = this.props.story.laughReactions;
  let currentAngry = this.props.story.angryReactions;
  let currentSad = this.props.story.sadReactions;

  if (currentHearts.includes(Meteor.userId())) {
    reacted = 'heart';
  } else if (currentSurprised.includes(Meteor.userId())) {
    reacted = 'surprise';
  } else if (currentLaughs.includes(Meteor.userId())) {
    reacted = 'laugh';
  } else if (currentAngry.includes(Meteor.userId())) {
    reacted = 'angry';
  } else if (currentSad.includes(Meteor.userId())) {
    reacted = 'sad';
  }
}

this.setState({ reacted });
}
returnMainIcon() {

  if (this.state.reacted) {

  if (this.state.reacted === 'heart') {

    return 'grin-hearts';

  } else if (this.state.reacted === 'surprise') {

    return 'surprise';

  } else if (this.state.reacted === 'laugh') {

    return 'grin-squint-tears';

  } else if (this.state.reacted === 'angry') {

    return 'angry';

  } else if (this.state.reacted === 'sad') {

    return 'sad-cry';

  }
} else {
  return 'grin-hearts';
}

}
clickedReactionsButton(clicked) {
// Meteor.call('stories.update', this.props.story._id, { likes: ['1', '2', '3'] });

let user = Meteor.users.findOne({ _id: Meteor.userId() });

let currentReactions = this.props.story.reactions;

let currentHearts = this.props.story.heartReactions;
let currentSurprised = this.props.story.suprisedReactions;
let currentLaughs = this.props.story.laughReactions;
let currentAngry = this.props.story.angryReactions;
let currentSad = this.props.story.sadReactions;

if (this.props.story.reactions.includes(Meteor.userId())) {

if (currentHearts.includes(Meteor.userId())) {

  let reacted = '';

  let newHeartReactions = currentHearts;
  let otherIndex = newHeartReactions.indexOf(Meteor.userId());
  newHeartReactions.splice(otherIndex, 1);

  if (!(clicked === 'heart')) {

  if (clicked === 'surprise') {

    let newSurprised = currentSurprised;
    newSurprised.push(Meteor.userId());

    reacted = 'surprise';

    Meteor.call('stories.update', this.props.story._id, { suprisedReactions: newSurprised, heartReactions: newHeartReactions });
    // Meteor.call('notifications.insert', this.props.story._id, { likes: newLikes });

  } else if (clicked === 'laugh') {

    let newLaughs = currentLaughs;
    newLaughs.push(Meteor.userId());

    reacted = 'laugh';

    Meteor.call('stories.update', this.props.story._id, { laughReactions: newLaughs, heartReactions: newHeartReactions });
    // Meteor.call('notifications.insert', this.props.story._id, { likes: newLikes });

  } else if (clicked === 'angry') {

    let newAngry = currentAngry;
    newAngry.push(Meteor.userId());

    reacted = 'angry';

    Meteor.call('stories.update', this.props.story._id, { angryReactions: newAngry, heartReactions: newHeartReactions });
    // Meteor.call('notifications.insert', this.props.story._id, { likes: newLikes });

  } else if (clicked === 'sad') {

    let newSad = currentSad;
    newSad.push(Meteor.userId());

    reacted = 'sad';

    Meteor.call('stories.update', this.props.story._id, { sadReactions: newSad, heartReactions: newHeartReactions });
    // Meteor.call('notifications.insert', this.props.story._id, { likes: newLikes });

  }

} else {
  let newReactions = currentReactions;
  let index = newReactions.indexOf(Meteor.userId());
  newReactions.splice(index, 1);

  Meteor.call('stories.update', this.props.story._id, { reactions: newReactions, heartReactions: newHeartReactions });
  // Meteor.call('notifications.insert', this.props.story._id, { likes: newLikes });
}
    this.setState({ reacted });
  }
else if (currentSurprised.includes(Meteor.userId())) {

  let reacted = '';

  let newSurprisedReactions = currentSurprised;
  let otherIndex = newSurprisedReactions.indexOf(Meteor.userId());
  newSurprisedReactions.splice(otherIndex, 1);

  if (!(clicked === 'surprise')) {

  if (clicked === 'heart') {

    let newHearts = currentHearts;
    newHearts.push(Meteor.userId());

    reacted = 'heart';

    Meteor.call('stories.update', this.props.story._id, { heartReactions: newHearts, suprisedReactions: newSurprisedReactions });
    // Meteor.call('notifications.insert', this.props.story._id, { likes: newLikes });

  } else if (clicked === 'laugh') {

    let newLaughs = currentLaughs;
    newLaughs.push(Meteor.userId());

    reacted = 'laugh';

    Meteor.call('stories.update', this.props.story._id, { laughReactions: newLaughs, suprisedReactions: newSurprisedReactions });
    // Meteor.call('notifications.insert', this.props.story._id, { likes: newLikes });

  } else if (clicked === 'angry') {

    let newAngry = currentAngry;
    newAngry.push(Meteor.userId());

    reacted = 'angry';

    Meteor.call('stories.update', this.props.story._id, { angryReactions: newAngry, suprisedReactions: newSurprisedReactions });
    // Meteor.call('notifications.insert', this.props.story._id, { likes: newLikes });

  } else if (clicked === 'sad') {

    let newSad = currentSad;
    newSad.push(Meteor.userId());

    reacted = 'sad';

    Meteor.call('stories.update', this.props.story._id, { sadReactions: newSad, suprisedReactions: newSurprisedReactions });
    // Meteor.call('notifications.insert', this.props.story._id, { likes: newLikes });

  }

} else {
  let newReactions = currentReactions;
  let index = newReactions.indexOf(Meteor.userId());
  newReactions.splice(index, 1);

  Meteor.call('stories.update', this.props.story._id, { reactions: newReactions, suprisedReactions: newSurprisedReactions });
  // Meteor.call('notifications.insert', this.props.story._id, { likes: newLikes });
}
    this.setState({ reacted });
}
else if (currentLaughs.includes(Meteor.userId())) {

    let reacted = '';

    let newLaughReactions = currentLaughs;
    let otherIndex = newLaughReactions.indexOf(Meteor.userId());
    newLaughReactions.splice(otherIndex, 1);

    if (!(clicked === 'laugh')) {

    if (clicked === 'heart') {

      let newHearts = currentHearts;
      newHearts.push(Meteor.userId());

      reacted = 'heart';

      Meteor.call('stories.update', this.props.story._id, { heartReactions: newHearts, laughReactions: newLaughReactions });
      // Meteor.call('notifications.insert', this.props.story._id, { likes: newLikes });

    } else if (clicked === 'surprise') {

      let newSurprised = currentSurprised;
      newSurprised.push(Meteor.userId());

      reacted = 'surprise';

      Meteor.call('stories.update', this.props.story._id, { suprisedReactions: newSurprised, laughReactions: newLaughReactions });
      // Meteor.call('notifications.insert', this.props.story._id, { likes: newLikes });

    } else if (clicked === 'angry') {

      let newAngry = currentAngry;
      newAngry.push(Meteor.userId());

      reacted = 'angry';

      Meteor.call('stories.update', this.props.story._id, { angryReactions: newAngry, laughReactions: newLaughReactions });
      // Meteor.call('notifications.insert', this.props.story._id, { likes: newLikes });

    } else if (clicked === 'sad') {

      let newSad = currentSad;
      newSad.push(Meteor.userId());

      reacted = 'sad';

      Meteor.call('stories.update', this.props.story._id, { sadReactions: newSad, laughReactions: newLaughReactions });
      // Meteor.call('notifications.insert', this.props.story._id, { likes: newLikes });

    }

  } else {
    let newReactions = currentReactions;
    let index = newReactions.indexOf(Meteor.userId());
    newReactions.splice(index, 1);

    Meteor.call('stories.update', this.props.story._id, { reactions: newReactions, laughReactions: newLaughReactions });
    // Meteor.call('notifications.insert', this.props.story._id, { likes: newLikes });
  }
      this.setState({ reacted });
}
else if (currentAngry.includes(Meteor.userId())) {

      let reacted = '';

      let newAngryReactions = currentAngry;
      let otherIndex = newAngryReactions.indexOf(Meteor.userId());
      newAngryReactions.splice(otherIndex, 1);

      if (!(clicked === 'angry')) {

      if (clicked === 'heart') {

        let newHearts = currentHearts;
        newHearts.push(Meteor.userId());

        reacted = 'heart';

        Meteor.call('stories.update', this.props.story._id, { heartReactions: newHearts, angryReactions: newAngryReactions });
        // Meteor.call('notifications.insert', this.props.story._id, { likes: newLikes });

      } else if (clicked === 'surprise') {

        let newSurprised = currentSurprised;
        newSurprised.push(Meteor.userId());

        reacted = 'surprise';

        Meteor.call('stories.update', this.props.story._id, { suprisedReactions: newSurprised, angryReactions: newAngryReactions });
        // Meteor.call('notifications.insert', this.props.story._id, { likes: newLikes });

      } else if (clicked === 'laugh') {

        let newLaughs = currentLaughs;
        newLaughs.push(Meteor.userId());

        reacted = 'laugh';

        Meteor.call('stories.update', this.props.story._id, { laughReactions: newLaughs, angryReactions: newAngryReactions });
        // Meteor.call('notifications.insert', this.props.story._id, { likes: newLikes });

      } else if (clicked === 'sad') {

        let newSad = currentSad;
        newSad.push(Meteor.userId());

        reacted = 'sad';

        Meteor.call('stories.update', this.props.story._id, { sadReactions: newSad, angryReactions: newAngryReactions });
        // Meteor.call('notifications.insert', this.props.story._id, { likes: newLikes });

      }

    } else {
      let newReactions = currentReactions;
      let index = newReactions.indexOf(Meteor.userId());
      newReactions.splice(index, 1);

      Meteor.call('stories.update', this.props.story._id, { reactions: newReactions, angryReactions: newAngryReactions });
      // Meteor.call('notifications.insert', this.props.story._id, { likes: newLikes });
    }
        this.setState({ reacted });
}
else if (currentSad.includes(Meteor.userId())) {
  let reacted = '';

  let newSadReactions = currentSad;
  let otherIndex = newSadReactions.indexOf(Meteor.userId());
  newSadReactions.splice(otherIndex, 1);

  if (!(clicked === 'sad')) {

  if (clicked === 'heart') {

    let newHearts = currentHearts;
    newHearts.push(Meteor.userId());

    reacted = 'heart';

    Meteor.call('stories.update', this.props.story._id, { heartReactions: newHearts, sadReactions: newSadReactions });
    // Meteor.call('notifications.insert', this.props.story._id, { likes: newLikes });

  } else if (clicked === 'surprise') {

    let newSurprised = currentSurprised;
    newSurprised.push(Meteor.userId());

    reacted = 'surprise';

    Meteor.call('stories.update', this.props.story._id, { suprisedReactions: newSurprised, sadReactions: newSadReactions });
    // Meteor.call('notifications.insert', this.props.story._id, { likes: newLikes });

  } else if (clicked === 'laugh') {

    let newLaughs = currentLaughs;
    newLaughs.push(Meteor.userId());

    reacted = 'laugh';

    Meteor.call('stories.update', this.props.story._id, { laughReactions: newLaughs, sadReactions: newSadReactions });
    // Meteor.call('notifications.insert', this.props.story._id, { likes: newLikes });

  } else if (clicked === 'angry') {

    let newAngry = currentAngry;
    newAngry.push(Meteor.userId());

    reacted = 'angry';

    Meteor.call('stories.update', this.props.story._id, { angryReactions: newAngry, sadReactions: newSadReactions });
    // Meteor.call('notifications.insert', this.props.story._id, { likes: newLikes });

  }

} else {
  let newReactions = currentReactions;
  let index = newReactions.indexOf(Meteor.userId());
  newReactions.splice(index, 1);

  Meteor.call('stories.update', this.props.story._id, { reactions: newReactions, sadReactions: newSadReactions });
  // Meteor.call('notifications.insert', this.props.story._id, { likes: newLikes });
}
    this.setState({ reacted });
}
} else {

let reacted = '';

let newReactions = currentReactions;
newReactions.push(Meteor.userId());

if (clicked === 'heart') {

  let newHearts = currentHearts;
  newHearts.push(Meteor.userId());

  reacted = 'heart';
  Meteor.call('stories.update', this.props.story._id, { reactions: newReactions, heartReactions: newHearts });

} else if (clicked === 'surprise') {

  let newSurprised = currentSurprised;
  newSurprised.push(Meteor.userId());

  reacted = 'surprise';
  Meteor.call('stories.update', this.props.story._id, { reactions: newReactions, suprisedReactions: newSurprised });

} else if (clicked === 'laugh') {

  let newLaughs = currentLaughs;
  newLaughs.push(Meteor.userId());

  reacted = 'laugh';
  Meteor.call('stories.update', this.props.story._id, { reactions: newReactions, laughReactions: newLaughs });

} else if (clicked === 'angry') {

  let newAngry = currentAngry;
  newAngry.push(Meteor.userId());

  reacted = 'angry';
  Meteor.call('stories.update', this.props.story._id, { reactions: newReactions, angryReactions: newAngry });

} else if (clicked === 'sad') {

  let newSad = currentSad;
  newSad.push(Meteor.userId());

  reacted = 'sad';
  Meteor.call('stories.update', this.props.story._id, { reactions: newReactions, sadReactions: newSad });
}
this.setState({ reacted });
}
}
componentDidMount() {
  this.renderReactButton();
  document.addEventListener('scroll', this.trackScrolling);
  document.addEventListener('mousedown', this.handleClickOutside);
}
componentWillUnmount() {
  document.removeEventListener('scroll', this.trackScrolling);
  document.removeEventListener('mousedown', this.handleClickOutside);
}
setReactBar(node) {
      this.reactBar = node;
}
setReactIcon(node) {
      this.reactIcon = node;
}
  handleClickOutside(e) {
  if (this.reactBar && this.reactIcon && !this.reactBar.contains(e.target) && !this.reactIcon.contains(e.target)) {
    console.log("hasn't actually clicked it");
    this.setState({ reactOpen: false });
  }
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
openReactionBar() {
  this.setState({ reactOpen: !this.state.reactOpen });
}
render() {
    return (
      <div>
        { !this.state.fixedSideBar ?
        <div id="storyBody__sidebar" className="storyBody__topDivFixed storySocialSidebarTop">


        <div className="socialSidebar__earthLeft" onClick={() => this.openReactionBar()} ref={this.setReactIcon}>
        <FontAwesomeIcon icon={['far', 'grin-hearts']} className="story__actualMainReactionIcon" />
        <div className="story__reactionsShownUnder">{this.props.story.reactions}</div>
        </div>

        <div ref={this.setReactBar} className={`story__reactionSidenav story__socialSideBarReactions ${this.state.reactOpen ? 'story__fullWidth' : 'story__noWidth'}`} id="referencesSideBar">

        </div>

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
        <a target="_blank" href={this.props.story.facebookLink}>
        <div className="divSocialHovtt">
        <FontAwesomeIcon icon={['fab', 'facebook-f']} className="storyBody__facebookHover" aria-hidden="true" />
        </div></a>
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
        <a target="_blank" href={this.props.story.twitterLink}>
        <div className="divSocialHovtts">
        <FontAwesomeIcon icon={['fab', 'twitter']} className="storyBody__twitterHover" aria-hidden="true" />
        </div>
        </a>
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
        <a target="_blank" href={this.props.story.redditLink}>
        <div className="divSocialHovttk">
        <FontAwesomeIcon icon={['fab', 'reddit-alien']} className="storyBody__redditIconSide" aria-hidden="true" />
        </div>
        </a>
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
        <a target="_blank" href={this.props.story.pinterestLink}>
        <div className="divSocialHovttrw">
        <FontAwesomeIcon icon={['fab', 'pinterest-p']} className="storyBody__pinterestIcon" aria-hidden="true" />
        </div></a>
        <br/>

        <hr className="storyBody__socialSidebarHr" />

        {/* <a className="sideSharesHov">
        <FontAwesomeIcon icon={['fas', 'globe-americas']} className="shareImageSide"/><div className="shareNumSide">{this.props.story.reactions.length}</div>
        </a>

        <a className="sideCommentsHov">
        <FontAwesomeIcon icon={['far', 'comments']} className="commentImageSide"/><div className="commentNumSide">72</div>
        </a>
          */}
        </div>


        :
        <div className="storyBody__topDiv">

        <div className="socialSidebar__earthLeft" onClick={() => this.openReactionBar()} ref={this.setReactIcon}>
        <FontAwesomeIcon icon={['far', this.returnMainIcon()]} className={this.state.reacted ? 'story__actualMainReactionIconSelected' : 'story__actualMainReactionIcon'} />
        <div className="story__reactionsShownUnder">{this.props.story.reactions.length}</div>
        </div>

        <div ref={this.setReactBar} className={`story__reactionSidenav story__socialSideBarReactions ${this.state.reactOpen ? 'story__fullWidth' : 'story__noWidth'}`} id="referencesSideBar">
          <div className="story__insideReactionMargins">

            <div className="story__invidiualReactionsTooltip">
            <FontAwesomeIcon icon={['far', 'grin-hearts']} onClick={() => this.clickedReactionsButton('heart')} className={`${this.state.reacted === 'heart' ? "story__smallMainReactionIconSelected" : "story__smallMainReactionIcon"}`} />
            <div className="story__reactionsSmallShownUnder">{this.props.story.heartReactions.length}</div>
            </div>

            <div className="story__invidiualReactionsTooltip">
            <FontAwesomeIcon icon={['far', 'surprise']} onClick={() => this.clickedReactionsButton('surprise')} className={`${this.state.reacted === 'surprise' ? "story__smallMainReactionIconSelected" : "story__smallMainReactionIcon"}`} />
            <div className="story__reactionsSmallShownUnder">{this.props.story.suprisedReactions.length}</div>
            </div>

            <div className="story__invidiualReactionsTooltip">
            <FontAwesomeIcon icon={['far', 'grin-squint-tears']} onClick={() => this.clickedReactionsButton('laugh')} className={`${this.state.reacted === 'laugh' ? "story__smallMainReactionIconSelected" : "story__smallMainReactionIcon"}`} />
            <div className="story__reactionsSmallShownUnder">{this.props.story.laughReactions.length}</div>
            </div>

            <div className="story__invidiualReactionsTooltip">
            <FontAwesomeIcon icon={['far', 'angry']} onClick={() => this.clickedReactionsButton('angry')} className={`${this.state.reacted === 'angry' ? "story__smallMainReactionIconSelected" : "story__smallMainReactionIcon"}`} />
            <div className="story__reactionsSmallShownUnder">{this.props.story.angryReactions.length}</div>
            </div>

            <div className="story__invidiualReactionsTooltip">
            <FontAwesomeIcon icon={['far', 'sad-cry']} onClick={() => this.clickedReactionsButton('sad')} className={`${this.state.reacted === 'sad' ? "story__smallMainReactionIconSelected" : "story__smallMainReactionIcon"}`} />
            <div className="story__reactionsSmallShownUnder">{this.props.story.sadReactions.length}</div>
            </div>

          </div>
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
      {/*  <div className="storyBody__sharseAndCommments">
        <a className="sideSharesHov">
        <FontAwesomeIcon icon={['fas', 'globe-americas']} className="shareImageSide"/><div className="shareNumSide">{this.props.story.reactions.length}</div>
        </a>

        <a className="sideCommentsHov">
        <FontAwesomeIcon icon={['far', 'comments']} className="commentImageSide"/><div className="commentNumSide">0</div>
        </a>
      </div>
      */}
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
