import React from 'react';
import { withTracker } from 'meteor/react-meteor-data';
import { Link } from 'react-router-dom';

import { Notifications } from '../../../api/notifications';
import MessageTooltipClickPublishReact from '../Tooltips/MessageTooltipClickPublishReact';

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
bottomSideBarTop: "0px"
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
returnTopStyle() {


}
renderReactTooltip() {

  return (
    <div className="nav__InnerContentPublishTooltip">
    <FontAwesomeIcon icon={['fas', 'times-circle']} onClick={() => this.setState({ publishOpen: false })} className='nav__publishTooltipX' />
    <div className="nav__publishTooltipText">You can't react to your own post.</div>
    </div>
  )
}
renderReactTooltip1() {

  return (
    <div className="nav__InnerContentPublishTooltip">
    <FontAwesomeIcon icon={['fas', 'times-circle']} onClick={() => this.setState({ publishOpen1: false })} className='nav__publishTooltipX' />
    <div className="nav__publishTooltipText">You can't react to your own post.</div>
    </div>
  )
}
renderReactTooltip2() {

  return (
    <div className="nav__InnerContentPublishTooltip">
    <FontAwesomeIcon icon={['fas', 'times-circle']} onClick={() => this.setState({ publishOpen2: false })} className='nav__publishTooltipX' />
    <div className="nav__publishTooltipText">You can't react to your own post.</div>
    </div>
  )
}
renderReactTooltip3() {

  return (
    <div className="nav__InnerContentPublishTooltip">
    <FontAwesomeIcon icon={['fas', 'times-circle']} onClick={() => this.setState({ publishOpen3: false })} className='nav__publishTooltipX' />
    <div className="nav__publishTooltipText">You can't react to your own post.</div>
    </div>
  )
}
renderReactTooltip4() {

  return (
    <div className="nav__InnerContentPublishTooltip">
    <FontAwesomeIcon icon={['fas', 'times-circle']} onClick={() => this.setState({ publishOpen4: false })} className='nav__publishTooltipX' />
    <div className="nav__publishTooltipText">You can't react to your own post.</div>
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

        <div className="storyBody__topDiv" style={{"top" : this.state.bottomSideBarTop}} className={this.state.trackClassName}>

        <div className="socialSidebar__earthLeft" onClick={() => this.openReactionBar()} ref={this.setReactIcon}>
        <FontAwesomeIcon icon={['far', this.returnMainIcon()]} className={this.state.reacted ? 'story__actualMainReactionIconSelected' : 'story__actualMainReactionIcon'} />
        <div className="story__reactionsShownUnder">{this.props.story.reactions.length}</div>
        </div>

        <div ref={this.setReactBar} className={`${this.state.trackClassName === "sidebar__fixed" ? "story__reactionSidenav" : "story__reactionSidenavAbs"} story__socialSideBarReactions ${this.state.reactOpen ? 'story__fullWidth' : 'story__noWidth'}`} id="referencesSideBar">
          <div className="story__insideReactionMargins2">

          <div ref={this.setReactMessage}><MessageTooltipClickPublishReact open={this.state.publishOpen} insideClassName="top__insideReactTooltipClassNameSide" inside={this.renderReactTooltip()} storyUserId={this.props.story.userId} outside={<div className="story__invidiualReactionsTooltip">
          <FontAwesomeIcon icon={['far', 'grin-hearts']} onClick={() => this.clickedReactionsButton('heart')} className={`${this.state.reacted === 'heart' ? "ac__smallMainReactionIconSelected" : "ac__smallMainReactionIcon"}`} />
          <div className="story__reactionsSmallShownUnder">{this.props.story.heartReactions.length}</div>
          </div>}/></div>

          <div ref={this.setReactMessage1}><MessageTooltipClickPublishReact open={this.state.publishOpen1} insideClassName="top__insideReactTooltipClassNameSide" inside={this.renderReactTooltip1()} storyUserId={this.props.story.userId} outside={<div className="story__invidiualReactionsTooltip">
          <FontAwesomeIcon icon={['far', 'surprise']} onClick={() => this.clickedReactionsButton('surprise')} className={`${this.state.reacted === 'surprise' ? "ac__smallMainReactionIconSelected" : "ac__smallMainReactionIcon"}`} />
          <div className="story__reactionsSmallShownUnder">{this.props.story.suprisedReactions.length}</div>
          </div>}/></div>

          <div ref={this.setReactMessage2}><MessageTooltipClickPublishReact open={this.state.publishOpen2} insideClassName="top__insideReactTooltipClassNameSide" inside={this.renderReactTooltip2()} storyUserId={this.props.story.userId} outside={<div className="story__invidiualReactionsTooltip">
          <FontAwesomeIcon icon={['far', 'grin-squint-tears']} onClick={() => this.clickedReactionsButton('laugh')} className={`${this.state.reacted === 'laugh' ? "ac__smallMainReactionIconSelected" : "ac__smallMainReactionIcon"}`} />
          <div className="story__reactionsSmallShownUnder">{this.props.story.laughReactions.length}</div>
          </div>}/></div>

          <div ref={this.setReactMessage3}><MessageTooltipClickPublishReact open={this.state.publishOpen3} insideClassName="top__insideReactTooltipClassNameSide" inside={this.renderReactTooltip3()} storyUserId={this.props.story.userId} outside={<div className="story__invidiualReactionsTooltip">
          <FontAwesomeIcon icon={['far', 'angry']} onClick={() => this.clickedReactionsButton('angry')} className={`${this.state.reacted === 'angry' ? "ac__smallMainReactionIconSelected" : "ac__smallMainReactionIcon"}`} />
          <div className="story__reactionsSmallShownUnder">{this.props.story.angryReactions.length}</div>
          </div>}/></div>

          <div ref={this.setReactMessage4}><MessageTooltipClickPublishReact open={this.state.publishOpen4} insideClassName="top__insideReactTooltipClassNameSide" inside={this.renderReactTooltip4()} storyUserId={this.props.story.userId} outside={<div className="story__invidiualReactionsTooltip">
          <FontAwesomeIcon icon={['far', 'sad-cry']} onClick={() => this.clickedReactionsButton('sad')} className={`${this.state.reacted === 'sad' ? "ac__smallMainReactionIconSelected" : "ac__smallMainReactionIcon"}`} />
          <div className="story__reactionsSmallShownUnder">{this.props.story.sadReactions.length}</div>
          </div>}/></div>

          </div>
        </div>

        <hr className={this.state.trackClassName === 'sidebar__fixed' ? "storyBody__socialSidebarHrTop" : "storyBody__socialSidebarHrTopAbs"} />

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
        </div></a>
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
        </div></a>
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

{/*
        <hr className="storyBody__socialSidebarHr" />
        <div className="storyBody__sharseAndCommments">
        <a className="sideSharesHov">
        <FontAwesomeIcon icon={['fas', 'globe-americas']} className="shareImageSide"/><div className="shareNumSide">{this.props.story.reactions.length}</div>
        </a>

        <a className="sideCommentsHov">
        <FontAwesomeIcon icon={['far', 'comments']} className="commentImageSide"/><div className="commentNumSide">0</div>
        </a>
      </div>
      */}
        </div>

      </div>
    );
  }
}

export default withTracker(() => {
return {

};
})(SharePostSideBar);
