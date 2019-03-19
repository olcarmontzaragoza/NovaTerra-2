import React from 'react';
import { withTracker } from 'meteor/react-meteor-data';
import { Stories } from '../../../api/stories';
import { Link } from 'react-router-dom';
import moment from 'moment';
import { Notifications } from '../../../api/notifications';
import ShareIconsAndDropDown from './ShareIconsAndDropDown';
import MessageTooltipClickPublishReact from '../Tooltips/MessageTooltipClickPublishReact';
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
reactOpen: false,
};
this.trackScrolling = this.trackScrolling.bind(this);
this.handleClickOutside = this.handleClickOutside.bind(this);
this.setReactBar = this.setReactBar.bind(this);
this.setReactIcon = this.setReactIcon.bind(this);
this.setReactMessage = this.setReactMessage.bind(this);
this.setReactMessage1 = this.setReactMessage1.bind(this);
this.setReactMessage2 = this.setReactMessage2.bind(this);
this.setReactMessage3 = this.setReactMessage3.bind(this);
this.setReactMessage4 = this.setReactMessage4.bind(this);
}
renderReactButton() {

let user = Meteor.users.findOne({ _id: Meteor.userId() });
let reactions = this.props.story.reactions.includes(Meteor.userId());

if (user._id === this.props.story.userId) {
  this.setState({ isUser: true });
}

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

if (Meteor.userId()) {

if (!(this.props.story.userId === Meteor.userId())) {

let user = Meteor.users.findOne({ _id: Meteor.userId() });

let currentReactions = this.props.story.reactions;

let currentHearts = this.props.story.heartReactions;
let currentSurprised = this.props.story.suprisedReactions;
let currentLaughs = this.props.story.laughReactions;
let currentAngry = this.props.story.angryReactions;
let currentSad = this.props.story.sadReactions;

if (this.props.story.reactions.includes(Meteor.userId())) {

if (currentHearts.includes(Meteor.userId())) {

  let details = {
  description: "has reacted to your post",
  userIdEventCauser: Meteor.userId(),
  thisUserId: this.props.story.userId,
  created: moment().valueOf(),
  type: 'userEventReact',
  reactType: clicked,
  postImage: this.props.story.mainImage,
  postUrl: this.props.story.link,
  seen: false,
  }

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

    let user = Meteor.users.findOne({ _id: this.props.story.userId });

    let notification = Notifications.findOne({ postUrl: this.props.story.link, description: 'has reacted to your post', userIdEventCauser: Meteor.userId(), thisUserId: user._id, });

    if (notification) {
    Meteor.call('notifications.remove', notification._id);
  }

    Meteor.call('notifications.insert', details);

  } else if (clicked === 'laugh') {

    let newLaughs = currentLaughs;
    newLaughs.push(Meteor.userId());

    reacted = 'laugh';

    Meteor.call('stories.update', this.props.story._id, { laughReactions: newLaughs, heartReactions: newHeartReactions });

    let user = Meteor.users.findOne({ _id: this.props.story.userId });

    let notification = Notifications.findOne({ postUrl: this.props.story.link, description: 'has reacted to your post', userIdEventCauser: Meteor.userId(), thisUserId: user._id, });

    if (notification) {
    Meteor.call('notifications.remove', notification._id);
  }

    Meteor.call('notifications.insert', details);

  } else if (clicked === 'angry') {

    let newAngry = currentAngry;
    newAngry.push(Meteor.userId());

    reacted = 'angry';

    Meteor.call('stories.update', this.props.story._id, { angryReactions: newAngry, heartReactions: newHeartReactions });

    let user = Meteor.users.findOne({ _id: this.props.story.userId });

    let notification = Notifications.findOne({ postUrl: this.props.story.link, description: 'has reacted to your post', userIdEventCauser: Meteor.userId(), thisUserId: user._id, });

    if (notification) {
    Meteor.call('notifications.remove', notification._id);
  }

    Meteor.call('notifications.insert', details);

  } else if (clicked === 'sad') {

    let newSad = currentSad;
    newSad.push(Meteor.userId());

    reacted = 'sad';

    Meteor.call('stories.update', this.props.story._id, { sadReactions: newSad, heartReactions: newHeartReactions });

    let user = Meteor.users.findOne({ _id: this.props.story.userId });

    let notification = Notifications.findOne({ postUrl: this.props.story.link, description: 'has reacted to your post', userIdEventCauser: Meteor.userId(), thisUserId: user._id, });

    if (notification) {
    Meteor.call('notifications.remove', notification._id);
  }

    Meteor.call('notifications.insert', details);

  }

} else {

  let newReactions = currentReactions;
  let index = newReactions.indexOf(Meteor.userId());
  newReactions.splice(index, 1);

  Meteor.call('stories.update', this.props.story._id, { reactions: newReactions, heartReactions: newHeartReactions });

  let user = Meteor.users.findOne({ _id: this.props.story.userId });

  let notification = Notifications.findOne({ postUrl: this.props.story.link, description: 'has reacted to your post', userIdEventCauser: Meteor.userId(), thisUserId: user._id, });

  if (notification) {
  Meteor.call('notifications.remove', notification._id);
}
}
    this.setState({ reacted });
  }
else if (currentSurprised.includes(Meteor.userId())) {

  let details = {
  description: "has reacted to your post",
  userIdEventCauser: Meteor.userId(),
  thisUserId: this.props.story.userId,
  created: moment().valueOf(),
  type: 'userEventReact',
  reactType: clicked,
  postImage: this.props.story.mainImage,
  postUrl: this.props.story.link,
  seen: false,
  }

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

    let user = Meteor.users.findOne({ _id: this.props.story.userId });

    let notification = Notifications.findOne({ postUrl: this.props.story.link, description: 'has reacted to your post', userIdEventCauser: Meteor.userId(), thisUserId: user._id, });

    if (notification) {
    Meteor.call('notifications.remove', notification._id);
  }

    Meteor.call('notifications.insert', details);

  } else if (clicked === 'laugh') {

    let newLaughs = currentLaughs;
    newLaughs.push(Meteor.userId());

    reacted = 'laugh';

    Meteor.call('stories.update', this.props.story._id, { laughReactions: newLaughs, suprisedReactions: newSurprisedReactions });

    let user = Meteor.users.findOne({ _id: this.props.story.userId });

    let notification = Notifications.findOne({ postUrl: this.props.story.link, description: 'has reacted to your post', userIdEventCauser: Meteor.userId(), thisUserId: user._id, });

    if (notification) {
    Meteor.call('notifications.remove', notification._id);
  }

    Meteor.call('notifications.insert', details);

  } else if (clicked === 'angry') {

    let newAngry = currentAngry;
    newAngry.push(Meteor.userId());

    reacted = 'angry';

    Meteor.call('stories.update', this.props.story._id, { angryReactions: newAngry, suprisedReactions: newSurprisedReactions });

    let user = Meteor.users.findOne({ _id: this.props.story.userId });

    let notification = Notifications.findOne({ postUrl: this.props.story.link, description: 'has reacted to your post', userIdEventCauser: Meteor.userId(), thisUserId: user._id, });

    if (notification) {
    Meteor.call('notifications.remove', notification._id);
  }

    Meteor.call('notifications.insert', details);

  } else if (clicked === 'sad') {

    let newSad = currentSad;
    newSad.push(Meteor.userId());

    reacted = 'sad';

    Meteor.call('stories.update', this.props.story._id, { sadReactions: newSad, suprisedReactions: newSurprisedReactions });

    let user = Meteor.users.findOne({ _id: this.props.story.userId });

    let notification = Notifications.findOne({ postUrl: this.props.story.link, description: 'has reacted to your post', userIdEventCauser: Meteor.userId(), thisUserId: user._id, });

    if (notification) {
    Meteor.call('notifications.remove', notification._id);
  }

    Meteor.call('notifications.insert', details);

  }

} else {
  let newReactions = currentReactions;
  let index = newReactions.indexOf(Meteor.userId());
  newReactions.splice(index, 1);

  Meteor.call('stories.update', this.props.story._id, { reactions: newReactions, suprisedReactions: newSurprisedReactions });

  let user = Meteor.users.findOne({ _id: this.props.story.userId });

  let notification = Notifications.findOne({ postUrl: this.props.story.link, description: 'has reacted to your post', userIdEventCauser: Meteor.userId(), thisUserId: user._id, });

  if (notification) {
  Meteor.call('notifications.remove', notification._id);
}
}
    this.setState({ reacted });
}
else if (currentLaughs.includes(Meteor.userId())) {

  let details = {
  description: "has reacted to your post",
  userIdEventCauser: Meteor.userId(),
  thisUserId: this.props.story.userId,
  created: moment().valueOf(),
  type: 'userEventReact',
  reactType: clicked,
  postImage: this.props.story.mainImage,
  postUrl: this.props.story.link,
  seen: false,
  }

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

      let user = Meteor.users.findOne({ _id: this.props.story.userId });

      let notification = Notifications.findOne({ postUrl: this.props.story.link, description: 'has reacted to your post', userIdEventCauser: Meteor.userId(), thisUserId: user._id, });

      if (notification) {
      Meteor.call('notifications.remove', notification._id);
    }

      Meteor.call('notifications.insert', details);

    } else if (clicked === 'surprise') {

      let newSurprised = currentSurprised;
      newSurprised.push(Meteor.userId());

      reacted = 'surprise';

      Meteor.call('stories.update', this.props.story._id, { suprisedReactions: newSurprised, laughReactions: newLaughReactions });

      let user = Meteor.users.findOne({ _id: this.props.story.userId });

      let notification = Notifications.findOne({ postUrl: this.props.story.link, description: 'has reacted to your post', userIdEventCauser: Meteor.userId(), thisUserId: user._id, });

      if (notification) {
      Meteor.call('notifications.remove', notification._id);
    }

      Meteor.call('notifications.insert', details);

    } else if (clicked === 'angry') {

      let newAngry = currentAngry;
      newAngry.push(Meteor.userId());

      reacted = 'angry';

      Meteor.call('stories.update', this.props.story._id, { angryReactions: newAngry, laughReactions: newLaughReactions });
      let user = Meteor.users.findOne({ _id: this.props.story.userId });

      let notification = Notifications.findOne({ postUrl: this.props.story.link, description: 'has reacted to your post', userIdEventCauser: Meteor.userId(), thisUserId: user._id, });

      if (notification) {
      Meteor.call('notifications.remove', notification._id);
    }

      Meteor.call('notifications.insert', details);

    } else if (clicked === 'sad') {

      let newSad = currentSad;
      newSad.push(Meteor.userId());

      reacted = 'sad';

      Meteor.call('stories.update', this.props.story._id, { sadReactions: newSad, laughReactions: newLaughReactions });

      let user = Meteor.users.findOne({ _id: this.props.story.userId });

      let notification = Notifications.findOne({ postUrl: this.props.story.link, description: 'has reacted to your post', userIdEventCauser: Meteor.userId(), thisUserId: user._id, });

      if (notification) {
      Meteor.call('notifications.remove', notification._id);
    }

      Meteor.call('notifications.insert', details);

    }

  } else {
    let newReactions = currentReactions;
    let index = newReactions.indexOf(Meteor.userId());
    newReactions.splice(index, 1);

    Meteor.call('stories.update', this.props.story._id, { reactions: newReactions, laughReactions: newLaughReactions });

    let user = Meteor.users.findOne({ _id: this.props.story.userId });

    let notification = Notifications.findOne({ postUrl: this.props.story.link, description: 'has reacted to your post', userIdEventCauser: Meteor.userId(), thisUserId: user._id, });

    if (notification) {
    Meteor.call('notifications.remove', notification._id);
  }
  }
      this.setState({ reacted });
}
else if (currentAngry.includes(Meteor.userId())) {

  let details = {
  description: "has reacted to your post",
  userIdEventCauser: Meteor.userId(),
  thisUserId: this.props.story.userId,
  created: moment().valueOf(),
  type: 'userEventReact',
  reactType: clicked,
  postImage: this.props.story.mainImage,
  postUrl: this.props.story.link,
  seen: false,
  }

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

        let user = Meteor.users.findOne({ _id: this.props.story.userId });

        let notification = Notifications.findOne({ postUrl: this.props.story.link, description: 'has reacted to your post', userIdEventCauser: Meteor.userId(), thisUserId: user._id, });

        if (notification) {
        Meteor.call('notifications.remove', notification._id);
      }

        Meteor.call('notifications.insert', details);

      } else if (clicked === 'surprise') {

        let newSurprised = currentSurprised;
        newSurprised.push(Meteor.userId());

        reacted = 'surprise';

        Meteor.call('stories.update', this.props.story._id, { suprisedReactions: newSurprised, angryReactions: newAngryReactions });

        let user = Meteor.users.findOne({ _id: this.props.story.userId });

        let notification = Notifications.findOne({ postUrl: this.props.story.link, description: 'has reacted to your post', userIdEventCauser: Meteor.userId(), thisUserId: user._id, });

        if (notification) {
        Meteor.call('notifications.remove', notification._id);
      }

        Meteor.call('notifications.insert', details);

      } else if (clicked === 'laugh') {

        let newLaughs = currentLaughs;
        newLaughs.push(Meteor.userId());

        reacted = 'laugh';

        Meteor.call('stories.update', this.props.story._id, { laughReactions: newLaughs, angryReactions: newAngryReactions });

        let user = Meteor.users.findOne({ _id: this.props.story.userId });

        let notification = Notifications.findOne({ postUrl: this.props.story.link, description: 'has reacted to your post', userIdEventCauser: Meteor.userId(), thisUserId: user._id, });

        if (notification) {
        Meteor.call('notifications.remove', notification._id);
      }

        Meteor.call('notifications.insert', details);

      } else if (clicked === 'sad') {

        let newSad = currentSad;
        newSad.push(Meteor.userId());

        reacted = 'sad';

        Meteor.call('stories.update', this.props.story._id, { sadReactions: newSad, angryReactions: newAngryReactions });

        let user = Meteor.users.findOne({ _id: this.props.story.userId });

        let notification = Notifications.findOne({ postUrl: this.props.story.link, description: 'has reacted to your post', userIdEventCauser: Meteor.userId(), thisUserId: user._id, });

        if (notification) {
        Meteor.call('notifications.remove', notification._id);
      }

        Meteor.call('notifications.insert', details);

      }

    } else {
      let newReactions = currentReactions;
      let index = newReactions.indexOf(Meteor.userId());
      newReactions.splice(index, 1);

      Meteor.call('stories.update', this.props.story._id, { reactions: newReactions, angryReactions: newAngryReactions });

      let user = Meteor.users.findOne({ _id: this.props.story.userId });

      let notification = Notifications.findOne({ postUrl: this.props.story.link, description: 'has reacted to your post', userIdEventCauser: Meteor.userId(), thisUserId: user._id, });

      if (notification) {
      Meteor.call('notifications.remove', notification._id);
    }

    }
        this.setState({ reacted });
}
else if (currentSad.includes(Meteor.userId())) {

  let details = {
  description: "has reacted to your post",
  userIdEventCauser: Meteor.userId(),
  thisUserId: this.props.story.userId,
  created: moment().valueOf(),
  type: 'userEventReact',
  reactType: clicked,
  postImage: this.props.story.mainImage,
  postUrl: this.props.story.link,
  seen: false,
  }

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


    let user = Meteor.users.findOne({ _id: this.props.story.userId });

    let notification = Notifications.findOne({ postUrl: this.props.story.link, description: 'has reacted to your post', userIdEventCauser: Meteor.userId(), thisUserId: user._id, });

    if (notification) {
    Meteor.call('notifications.remove', notification._id);
  }

    Meteor.call('notifications.insert', details);

  } else if (clicked === 'surprise') {

    let newSurprised = currentSurprised;
    newSurprised.push(Meteor.userId());

    reacted = 'surprise';

    Meteor.call('stories.update', this.props.story._id, { suprisedReactions: newSurprised, sadReactions: newSadReactions });

    let user = Meteor.users.findOne({ _id: this.props.story.userId });

    let notification = Notifications.findOne({ postUrl: this.props.story.link, description: 'has reacted to your post', userIdEventCauser: Meteor.userId(), thisUserId: user._id, });

    if (notification) {
    Meteor.call('notifications.remove', notification._id);
  }

    Meteor.call('notifications.insert', details);

  } else if (clicked === 'laugh') {

    let newLaughs = currentLaughs;
    newLaughs.push(Meteor.userId());

    reacted = 'laugh';

    Meteor.call('stories.update', this.props.story._id, { laughReactions: newLaughs, sadReactions: newSadReactions });

    let user = Meteor.users.findOne({ _id: this.props.story.userId });

    let notification = Notifications.findOne({ postUrl: this.props.story.link, description: 'has reacted to your post', userIdEventCauser: Meteor.userId(), thisUserId: user._id, });

    if (notification) {
    Meteor.call('notifications.remove', notification._id);
  }

    Meteor.call('notifications.insert', details);

  } else if (clicked === 'angry') {

    let newAngry = currentAngry;
    newAngry.push(Meteor.userId());

    reacted = 'angry';

    Meteor.call('stories.update', this.props.story._id, { angryReactions: newAngry, sadReactions: newSadReactions });

    let user = Meteor.users.findOne({ _id: this.props.story.userId });

    let notification = Notifications.findOne({ postUrl: this.props.story.link, description: 'has reacted to your post', userIdEventCauser: Meteor.userId(), thisUserId: user._id, });

    if (notification) {
    Meteor.call('notifications.remove', notification._id);
  }

    Meteor.call('notifications.insert', details);

  }

} else {
  let newReactions = currentReactions;
  let index = newReactions.indexOf(Meteor.userId());
  newReactions.splice(index, 1);

  Meteor.call('stories.update', this.props.story._id, { reactions: newReactions, sadReactions: newSadReactions });

  let user = Meteor.users.findOne({ _id: this.props.story.userId });

  let notification = Notifications.findOne({ postUrl: this.props.story.link, description: 'has reacted to your post', userIdEventCauser: Meteor.userId(), thisUserId: user._id, });

  if (notification) {
  Meteor.call('notifications.remove', notification._id);
}
}
    this.setState({ reacted });
}
} else {

  let details = {
  description: "has reacted to your post",
  userIdEventCauser: Meteor.userId(),
  thisUserId: this.props.story.userId,
  created: moment().valueOf(),
  type: 'userEventReact',
  reactType: clicked,
  postImage: this.props.story.mainImage,
  postUrl: this.props.story.link,
  seen: false,
  }

let reacted = '';

let newReactions = currentReactions;
newReactions.push(Meteor.userId());

if (clicked === 'heart') {

  let newHearts = currentHearts;
  newHearts.push(Meteor.userId());

  reacted = 'heart';
  Meteor.call('stories.update', this.props.story._id, { reactions: newReactions, heartReactions: newHearts });

  let user = Meteor.users.findOne({ _id: this.props.story.userId });

  let notification = Notifications.findOne({ postUrl: this.props.story.link, description: 'has reacted to your post', userIdEventCauser: Meteor.userId(), thisUserId: user._id, });

  if (notification) {
  Meteor.call('notifications.remove', notification._id);
}

  Meteor.call('notifications.insert', details);

} else if (clicked === 'surprise') {

  let newSurprised = currentSurprised;
  newSurprised.push(Meteor.userId());

  reacted = 'surprise';
  Meteor.call('stories.update', this.props.story._id, { reactions: newReactions, suprisedReactions: newSurprised });

  let user = Meteor.users.findOne({ _id: this.props.story.userId });

  let notification = Notifications.findOne({ postUrl: this.props.story.link, description: 'has reacted to your post', userIdEventCauser: Meteor.userId(), thisUserId: user._id, });

  if (notification) {
  Meteor.call('notifications.remove', notification._id);
}

  Meteor.call('notifications.insert', details);

} else if (clicked === 'laugh') {

  let newLaughs = currentLaughs;
  newLaughs.push(Meteor.userId());

  reacted = 'laugh';
  Meteor.call('stories.update', this.props.story._id, { reactions: newReactions, laughReactions: newLaughs });

  let user = Meteor.users.findOne({ _id: this.props.story.userId });

  let notification = Notifications.findOne({ postUrl: this.props.story.link, description: 'has reacted to your post', userIdEventCauser: Meteor.userId(), thisUserId: user._id, });

  if (notification) {
  Meteor.call('notifications.remove', notification._id);
}

  Meteor.call('notifications.insert', details);

} else if (clicked === 'angry') {

  let newAngry = currentAngry;
  newAngry.push(Meteor.userId());

  reacted = 'angry';
  Meteor.call('stories.update', this.props.story._id, { reactions: newReactions, angryReactions: newAngry });

  let user = Meteor.users.findOne({ _id: this.props.story.userId });

  let notification = Notifications.findOne({ postUrl: this.props.story.link, description: 'has reacted to your post', userIdEventCauser: Meteor.userId(), thisUserId: user._id, });

  if (notification) {
  Meteor.call('notifications.remove', notification._id);
}

  Meteor.call('notifications.insert', details);

} else if (clicked === 'sad') {

  let newSad = currentSad;
  newSad.push(Meteor.userId());

  reacted = 'sad';
  Meteor.call('stories.update', this.props.story._id, { reactions: newReactions, sadReactions: newSad });

  let user = Meteor.users.findOne({ _id: this.props.story.userId });

  let notification = Notifications.findOne({ postUrl: this.props.story.link, description: 'has reacted to your post', userIdEventCauser: Meteor.userId(), thisUserId: user._id, });

  if (notification) {
  Meteor.call('notifications.remove', notification._id);
}

  Meteor.call('notifications.insert', details);
}
this.setState({ reacted });
}
} else {
  this.checkOpen(clicked);
}
} else {
  window.location="/login";
}
}
setReactBar(node) {
      this.reactBar = node;
}
setReactMessage(node) {
      this.reactMessage = node;
}
setReactMessage1(node) {
      this.reactMessage1 = node;
}
setReactMessage2(node) {
      this.reactMessage2 = node;
}
setReactMessage3(node) {
      this.reactMessage3 = node;
}
setReactMessage4(node) {
      this.reactMessage4 = node;
}

setReactIcon(node) {
      this.reactIcon = node;
}
  handleClickOutside(e) {
  if (this.reactBar && this.reactIcon && !this.reactBar.contains(e.target) && !this.reactIcon.contains(e.target)) {
    console.log("hasn't actually clicked it");
    this.setState({ reactOpen: false });
  }

  if (this.reactMessage && !this.reactMessage.contains(e.target)) {
    this.setState({ publishOpen: false });
  }
  if (this.reactMessage && !this.reactMessage1.contains(e.target)) {
    this.setState({ publishOpen1: false });
  }
  if (this.reactMessage && !this.reactMessage2.contains(e.target)) {
    this.setState({ publishOpen2: false });
  }
  if (this.reactMessage && !this.reactMessage3.contains(e.target)) {
    this.setState({ publishOpen3: false });
  }
  if (this.reactMessage && !this.reactMessage4.contains(e.target)) {
    this.setState({ publishOpen4: false });
  }
}
trackScrolling(e) {

let page = window.pageYOffset;
let topElement = document.getElementById('sidebar__topElement').offsetTop;
let bottomElement = document.getElementById('sidebar__bottomElement').offsetTop;

console.log("top element", topElement);
console.log("bottom element", bottomElement);

let topOffset = topElement + 318;
let bottomOffset = bottomElement - 569;

console.log('page', page);
console.log('top', topElement);
console.log('bottom', bottomElement);

if (page < topOffset) {
  this.setState({ bottomSideBarTop: "0px" });
  this.setState({ trackClassName: 'sidebar__top' });
} else if (page >= topOffset && page <= bottomOffset) {
  console.log('fixedddd');
  this.setState({ bottomSideBarTop: "24.5%" });
  this.setState({ trackClassName: 'sidebar__fixed' });
} else if (page > bottomOffset) {
  console.log('botttomed');
  let bottomTopPositioning = bottomOffset - 785;
  this.setState({ bottomSideBarTop: `${bottomTopPositioning + "px"}` });
  this.setState({ trackClassName: 'sidebar__bottom' });
}
}
openReactionBar() {
  this.setState({ reactOpen: !this.state.reactOpen });
}
findUser(id) {
let user = this.props.users.findOne({ _id: id });
return user;
}
componentDidMount() {
  this.renderReactButton();
  document.addEventListener('scroll', this.trackScrolling);
  document.addEventListener('mousedown', this.handleClickOutside);

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
componentWillUnmount() {
  document.removeEventListener('scroll', this.trackScrolling);
  document.removeEventListener('mousedown', this.handleClickOutside);
}
renderAuthor() {
let authorName = Meteor.users.find({ userId: this.props.story.userId }) ? Meteor.users.find({ userId: this.props.story.userId }).username : 'not found';
return <p>{authorName}</p>;
}
findUser(userId) {
    const user = this.props.users.findOne({ _id: userId });
    return user;
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
renderReactTooltip() {

  return (
    <div className="nav__InnerContentPublishTooltip">
    <FontAwesomeIcon icon={['fas', 'times-circle']} onClick={() => this.setState({ publishOpen: false })} className='nav__publishTooltipX' />
    <div className="nav__publishTooltipText">You cannot react to your own post.</div>
    </div>
  )
}
renderReactTooltip1() {

  return (
    <div className="nav__InnerContentPublishTooltip">
    <FontAwesomeIcon icon={['fas', 'times-circle']} onClick={() => this.setState({ publishOpen1: false })} className='nav__publishTooltipX' />
    <div className="nav__publishTooltipText">You cannot react to your own post.</div>
    </div>
  )
}
renderReactTooltip2() {

  return (
    <div className="nav__InnerContentPublishTooltip">
    <FontAwesomeIcon icon={['fas', 'times-circle']} onClick={() => this.setState({ publishOpen2: false })} className='nav__publishTooltipX' />
    <div className="nav__publishTooltipText">You cannot react to your own post.</div>
    </div>
  )
}
renderReactTooltip3() {

  return (
    <div className="nav__InnerContentPublishTooltip">
    <FontAwesomeIcon icon={['fas', 'times-circle']} onClick={() => this.setState({ publishOpen3: false })} className='nav__publishTooltipX' />
    <div className="nav__publishTooltipText">You cannot react to your own post.</div>
    </div>
  )
}
renderReactTooltip4() {

  return (
    <div className="nav__InnerContentPublishTooltip">
    <FontAwesomeIcon icon={['fas', 'times-circle']} onClick={() => this.setState({ publishOpen4: false })} className='nav__publishTooltipX' />
    <div className="nav__publishTooltipText">You cannot react to your own post.</div>
    </div>
  )
}
checkOpen(clicked) {
    if (clicked === 'sad') {

      this.setState({ publishOpen4: true });

    } else if (clicked === 'angry') {

      this.setState({ publishOpen3: true });

    } else if (clicked === 'laugh') {

      this.setState({ publishOpen2: true });

    } else if (clicked === 'heart') {

      this.setState({ publishOpen: true });

    } else if (clicked === 'surprise') {

      this.setState({ publishOpen1: true });

    }

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
{this.props.story.title} {/* this.props.story.title.length > 60 ? this.props.story.title.slice(0, 60) + '...' : } */}
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

<div className="top__earthLeft" onClick={() => this.openReactionBar()} ref={this.setReactIcon}>
<FontAwesomeIcon icon={['far', this.returnMainIcon()]} className={this.state.reacted ? 'ac__actualMainReactionIconSelected' : 'ac__actualMainReactionIcon'} />
<div className="ac__reactionsShownUnder"><p className="reactionShowUnderDarkerTone">{this.props.story.reactions.length}</p> {this.props.story.reactions.length === 1 ? 'reaction' : 'reactions'}</div>
</div>

<div ref={this.setReactBar} className={`top__reactionSide ${this.state.reactOpen ? 'ac__fullWidth' : 'ac__noWidth'}`} id="referencesSideBar">
  <div className="top__insideReactionMargins">

    <div ref={this.setReactMessage}><MessageTooltipClickPublishReact open={this.state.publishOpen} insideClassName="top__insideReactTooltipClassName" inside={this.renderReactTooltip()} storyUserId={this.props.story.userId} outside={<div className="story__invidiualReactionsTooltip">
    <FontAwesomeIcon icon={['far', 'grin-hearts']} onClick={() => this.clickedReactionsButton('heart')} className={`${this.state.reacted === 'heart' ? "ac__smallMainReactionIconSelected" : "ac__smallMainReactionIcon"}`} />
    <div className="story__reactionsSmallShownUnder">{this.props.story.heartReactions.length}</div>
    </div>}/></div>
    <div ref={this.setReactMessage1}><MessageTooltipClickPublishReact open={this.state.publishOpen1} insideClassName="top__insideReactTooltipClassName" inside={this.renderReactTooltip1()} storyUserId={this.props.story.userId} outside={<div className="story__invidiualReactionsTooltip">
    <FontAwesomeIcon icon={['far', 'surprise']} onClick={() => this.clickedReactionsButton('surprise')} className={`${this.state.reacted === 'surprise' ? "ac__smallMainReactionIconSelected" : "ac__smallMainReactionIcon"}`} />
    <div className="story__reactionsSmallShownUnder">{this.props.story.suprisedReactions.length}</div>
    </div>}/></div>

    <div ref={this.setReactMessage2}><MessageTooltipClickPublishReact open={this.state.publishOpen2} insideClassName="top__insideReactTooltipClassName" inside={this.renderReactTooltip2()} storyUserId={this.props.story.userId} outside={<div className="story__invidiualReactionsTooltip">
    <FontAwesomeIcon icon={['far', 'grin-squint-tears']} onClick={() => this.clickedReactionsButton('laugh')} className={`${this.state.reacted === 'laugh' ? "ac__smallMainReactionIconSelected" : "ac__smallMainReactionIcon"}`} />
    <div className="story__reactionsSmallShownUnder">{this.props.story.laughReactions.length}</div>
    </div>}/></div>

    <div ref={this.setReactMessage3}><MessageTooltipClickPublishReact open={this.state.publishOpen3} insideClassName="top__insideReactTooltipClassName" inside={this.renderReactTooltip3()} storyUserId={this.props.story.userId} outside={<div className="story__invidiualReactionsTooltip">
    <FontAwesomeIcon icon={['far', 'angry']} onClick={() => this.clickedReactionsButton('angry')} className={`${this.state.reacted === 'angry' ? "ac__smallMainReactionIconSelected" : "ac__smallMainReactionIcon"}`} />
    <div className="story__reactionsSmallShownUnder">{this.props.story.angryReactions.length}</div>
    </div>}/></div>

    <div ref={this.setReactMessage4}><MessageTooltipClickPublishReact open={this.state.publishOpen4} insideClassName="top__insideReactTooltipClassName" inside={this.renderReactTooltip4()} storyUserId={this.props.story.userId} outside={<div className="story__invidiualReactionsTooltip">
    <FontAwesomeIcon icon={['far', 'sad-cry']} onClick={() => this.clickedReactionsButton('sad')} className={`${this.state.reacted === 'sad' ? "ac__smallMainReactionIconSelected" : "ac__smallMainReactionIcon"}`} />
    <div className="story__reactionsSmallShownUnder">{this.props.story.sadReactions.length}</div>
    </div>}/></div>

  </div>
</div>

<div className="story__topPositionShareIcons">
<ShareIconsAndDropDown story={this.props.story} />
</div>

</div>

<div className="floatLeft homeTop__marginLeftMainImage" id="sidebar__topElement">
<Image className="homeTop__mainImage" cloud_name='novaterra' publicId={this.props.story.mainImage}><Transformation crop="thumb" /></Image>

{/*}<div className="homeTop__storyImageSubtitle">
  Fresh Water Pouring Off Large Glaciers in Nordaustlandet, Norway. Source: National Geographic {this.props.story.mainImageSubtitle}
</div>*/}

<div className="storyMiddle__sidebarHeight">
<SharePostSideBar story={this.props.story} users={this.props.users} />
</div>

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
