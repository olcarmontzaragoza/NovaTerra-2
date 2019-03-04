import React from 'react';
import { withTracker } from 'meteor/react-meteor-data';
import { Link } from 'react-router-dom';
import { Session } from 'meteor/session';
import moment from 'moment';
import { Stories } from '../../api/stories';
import { Notifications } from '../../api/notifications';
import { funcReplace } from '../../routes/routes.js';
import ProfileModal from './ProfileModal';
import ProfileModalEditProfile from './ProfileModalEditProfile';
import MessageTooltipClick from '../Components/Tooltips/MessageTooltipClick';
import QuestionCircleTooltipClick from '../Components/Tooltips/QuestionCircleTooltipClick';
// import { TextInput, Platform } from 'react-native';

import {Image, Video, Transformation, CloudinaryContext} from 'cloudinary-react';

import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';

import { fab } from '@fortawesome/free-brands-svg-icons';

import Modal from 'react-modal';
Modal.setAppElement('#app');

import ProfileStory from './ProfileStory';
import UserProfileStory from './UserProfileStory';
import User from './User';

Meteor.subscribe('allUsers');

export class MainProfileLayout extends React.Component {
constructor(props) {
super(props);
this.state = {
profileBottom: 'posts',
selectedOption: 2,
sortOption: 'popular',
stories: !this.props.route ? this.props.drafted : this.props.popular,
newAuthorName: 'James Carlson',
modal: false,
descriptionLength: this.props.user.description ? this.props.user.description.length : 0,
usernameLength: this.props.user.username.length,
error: '',
followersAndFollowing: this.props.user.followers,
// draftedStories: !this.props.route ? this.props.drafted : undefined,
// waitingStories: !this.props.route ? this.props.waiting : undefined,
// publishedStories: !this.props.route ? this.props.published : undefined,

profileUser: this.props.route ? Meteor.users.find({ _id: this.props.id }) : undefined,
toggleDropDown: 'dropdown-content',
};
this.setWrapperRef = this.setWrapperRef.bind(this);
this.setWrapperRef2 = this.setWrapperRef2.bind(this);
this.setStoriesBottom = this.setStoriesBottom.bind(this);
this.handleClickOutside = this.handleClickOutside.bind(this);
}
setWrapperRef(node) {
    this.wrapperRef = node;
}
setWrapperRef2(node) {
    this.wrapperRef2 = node;
}
setStoriesBottom(node) {
    this.storiesBottom = node;
}
handleClickOutside(e) {
    if (this.wrapperRef && this.wrapperRef2 && !this.wrapperRef.contains(e.target) && !this.wrapperRef2.contains(e.target)) {
      this.setState({ toggleDropDown: 'dropdown-content' });
    } else if (this.storiesBottom && this.storiesBottom.contains(e.target)) {

      console.log('handled click outside');

if (!(this.props.route)) {

      setTimeout(
        function() {

      if (this.state.selectedOption === 1) {
      let publishedStories = [];
        Stories.find({ storyType: 'published' }).fetch().map((story) => {
        if (story.userId === this.props.user._id) {
          publishedStories.push(story);
        }
        this.setState({ stories: publishedStories });
      });
    }

      if (this.state.selectedOption === 2) {
      let draftedStories = [];
        Stories.find({ storyType: 'drafted' }).fetch().map((story) => {
        if (story.userId === this.props.user._id) {
          draftedStories.push(story);
        }
        this.setState({ stories: draftedStories });
      });
    }

      if (this.state.selectedOption === 3) {
      let waitingStories = [];
        Stories.find({ storyType: 'waiting' }).fetch().map((story) => {
        if (story.userId === this.props.user._id) {
          waitingStories.push(story);
        }
        });
        this.setState({ stories: waitingStories });
      }

    }
    .bind(this),
    5
  );
}

      setTimeout(
        function() {
        console.log('stories', this.state.stories);
        this.updateStories();
        }
        .bind(this),
        5
      );
    }
}
changeSortOptions(sort) {
if (sort === 'popular') {
this.setState({ sortOption: 'popular' });
this.setState({ stories: this.props.popular });
} else if (sort === 'newest') {
this.setState({ sortOption: 'newest' });
this.setState({ stories: this.props.latest });
} else if (sort === 'oldest') {
this.setState({ sortOption: 'oldest' });
this.setState({ stories: this.props.oldest });
}
}
toggleDropDown() {
if (this.state.toggleDropDown === 'dropdown-content') {
this.setState({ 'toggleDropDown': 'dropdown-content1' });
} else {
this.setState({ toggleDropDown: 'dropdown-content' });
}
}
toggleStoriesSort(num) {

if (num === 1) {
this.setState({ stories: this.props.published });
} else if (num === 2) {
this.setState({ stories: this.props.drafted });
} else if (num === 3) {
this.setState({ stories: this.props.waiting });
}

setTimeout(
  function() {
  this.updateStories();
  }
  .bind(this),
  5
);

// setTimeout(
//   function() {
  this.setState({ selectedOption: num });
//   }
//   .bind(this),
//   5
// );

}
toggleUsersSort(num) {
this.setState({ selectedOption: num });

if (num === 1) {
this.changeProfileBottom('followers');
} else if (num === 2) {
this.changeProfileBottom('following');
}
}
returnInsideQuestionTooltip() {
  return (
    <div>
    <p className="mpl__textInsideQuestionMark">These are your waiting stories. At NovaTerra, we make a quick, 24-hour check of each story before publishing it to ensure that it does not contain spam, misinformation or advertising. Don't worry about this, most stories are perfectly fine!</p>
    </div>
  )
}
showNoStoriesMessage() {
if (!this.props.route) {
  if (this.state.selectedOption === 1) {
    return (
      <div className="notFound__container">
      <div className="notFound__topSection">
      <svg width="0" height="0">
      <radialGradient id="notFoundColor" r="150%" cx="30%" cy="107%">
      <stop stopColor="#67B26F" offset="0.28" />
      <stop stopColor="#4ca2cd" offset="0.65" />
      </radialGradient>
      </svg>
      <div className="notFound__iconHover">
      <FontAwesomeIcon icon={['far', 'edit']} className='notFound__icon' />
      </div>
      </div>

      <div className="notFound__bottomMargins">
      <div className="notFound__bottomMessage">
        <div className="notFound__publishedNoText"><p className="notFound__noStoriesFound">You haven't published any stories yet. <a className="link notFound__noPublishedStoriesMarginLeft" onClick={() => { this.toggleStoriesSort(2) }}>Start by creating a draft!</a></p></div>
      </div>
      </div>
      <div className="notFound__positionButtonMobile">
      <div onClick={() => { this.toggleStoriesSort(2) }} className="notFound__actionButton">Create a Draft</div>
      </div>

      </div>
    )

  } else if (this.state.selectedOption === 2) {
    return (
      <div className="notFound__containerDraft">
      <div className="notFound__topSection">
      <svg width="0" height="0">
      <radialGradient id="notFoundColor" r="150%" cx="30%" cy="107%">
      <stop stopColor="#67B26F" offset="0.28" />
      <stop stopColor="#4ca2cd" offset="0.65" />
      </radialGradient>
      </svg>
      <div className="notFound__iconHover">
      <FontAwesomeIcon icon={['fas', 'plus-circle']} className='notFound__icon' />
      </div>
      </div>

      <div className="notFound__bottomMargins">
      <div className="notFound__bottomMessage">
        <div className="notFound__publishedNoText"><p className="notFound__noStoriesFound">You haven't created any drafts yet. Click the button below to create your first draft!</p></div>
      </div>
      </div>
      <div className="notFound__positionButtonMobile">
      <div onClick={() => this.createNewStory()} className="notFound__actionButtonDraft">Create a new Story</div>
      </div>
      </div>
    )
  } else {
    return (
      <div className="notFound__container">
      <div className="notFound__topSection">
      <svg width="0" height="0">
      <radialGradient id="notFoundColor" r="150%" cx="30%" cy="107%">
      <stop stopColor="#67B26F" offset="0.28" />
      <stop stopColor="#4ca2cd" offset="0.65" />
      </radialGradient>
      </svg>
      <div className="notFound__iconHover">
      <FontAwesomeIcon icon={['fas', 'search']} className='notFound__icon' />
      </div>
      </div>

      <div className="notFound__bottomMargins">
      <div className="notFound__bottomMessage">
        <div className="notFound__publishedNoText"><p className="notFound__noStoriesFound">You don't have any stories in review at the moment.<QuestionCircleTooltipClick inside={this.returnInsideQuestionTooltip()} outside={<FontAwesomeIcon className="mpl__questionCircle" icon={['far', 'question-circle']} />} outsideClassName="mpl__waitingTooltip" insideClassName='mpl__questionCircleInside' /></p></div>
      </div>
      </div>
      <div className="notFound__positionButtonMobile">
      <div onClick={() => this.toggleStoriesSort(2)} className="notFound__actionButton">Publish a Story</div>
      </div>
      </div>
    )
  }

} else {
return (
  <div className={this.props.user._id === Meteor.userId() ? 'notFound__containerProfileUser2' : 'notFound__containerProfileUser'}>
  <div className="notFound__topSection">
  <svg width="0" height="0">
  <radialGradient id="notFoundColor" r="150%" cx="30%" cy="107%">
  <stop stopColor="#67B26F" offset="0.28" />
  <stop stopColor="#4ca2cd" offset="0.65" />
  </radialGradient>
  </svg>
  <div className="notFound__iconHover">
  <FontAwesomeIcon icon={['fas', 'search']} className='notFound__icon' />
  </div>
  </div>

  <div className="notFound__bottomMargins">
  <div className="notFound__bottomMessage">
    <div className="notFound__publishedNoText"><p className="notFound__noStoriesFound">{this.props.user._id === Meteor.userId() ? <p>You haven't published any stories yet. <Link to="/profile" className="link notFound__noPublishedStoriesMarginLeft">Start by creating a draft!</Link></p> : "Hmm... This user doesn't seem to have posted any stories yet."}</p></div>
  </div>
  </div>
  {this.props.user._id === Meteor.userId() ? <div className="notFound__positionButtonMobile">
  <Link to="/profile"><div className="notFound__actionButton">Profile</div></Link>
  </div> : undefined }
  </div>
)
}
}
returnNoFollowersMessage() {
if (this.props.user.followers.length === 0) {
if (this.props.route) {
  return (
    <div className="notFound__containerProfileUserFollow">
    <div className="notFound__topSection">
    <svg width="0" height="0">
    <radialGradient id="notFoundColor" r="150%" cx="30%" cy="107%">
    <stop stopColor="#67B26F" offset="0.28" />
    <stop stopColor="#4ca2cd" offset="0.65" />
    </radialGradient>
    </svg>
    <div className="notFound__iconHover">
    <FontAwesomeIcon icon={['fas', 'user-friends']} className='notFound__icon' />
    </div>
    </div>

    <div className="notFound__bottomMargins">
    <div className="notFound__bottomMessage">
      <div className="notFound__publishedNoText"><p className="notFound__noStoriesFound">{this.props.user._id === Meteor.userId() ? "You don't have any followers at the moment. Try inviting some of your friends over to NovaTerra!" : "This user doesn't have any followers. Click 'follow' to become their first follower!"}</p></div>
    </div>
    </div>
    <div className="notFound__positionButtonMobile">
    {this.props.user._id !== Meteor.userId() ? <div onClick={() => { this.toggleIsFollowing() }} className="notFound__actionButtonFollow">{this.state.profileFollow ? "Following" : "Follow"}</div> : <div className="notFound__positionButtonMobileSocial">

    <a href="https://www.facebook.com" className="notFound__oopeb notFound__socialHover">
     <div className="homeTop__heightOne"></div>
     <FontAwesomeIcon icon={['fab', 'facebook-f']} className="tue notFound__firstShareIcon" />
      </a>
    <a href="https://www.twitter.com" className="notFound__aapeb notFound__socialHover">
     <FontAwesomeIcon icon={['fab', 'twitter']} className="tue notFound__secondShareIcon" />
      </a>
    <a href="https://www.instagram.com" className="notFound__mmpeb notFound__socialHover">
     <FontAwesomeIcon icon={['fab', 'instagram']} className="tue notFound__thirdShareIcon" />
      </a>
    <a href="https://www.pinterest.com" className="notFound__mmpeb notFound__socialHover">
    <FontAwesomeIcon icon={['fab', 'pinterest']} className="tue notFound__fourthShareIcon" />
      </a>
      <a href="https://www.reddit.com" className="notFound__mmpeb notFound__socialHover">
      <FontAwesomeIcon icon={['fab', 'reddit']} className="tue notFound__fifthShareIcon" />
        </a>
    </div>}

    </div>
    </div>
  )
} else {
  return (
    <div className="notFound__containerProfileUserFollow2">
    <div className="notFound__topSection">
    <svg width="0" height="0">
    <radialGradient id="notFoundColor" r="150%" cx="30%" cy="107%">
    <stop stopColor="#67B26F" offset="0.28" />
    <stop stopColor="#4ca2cd" offset="0.65" />
    </radialGradient>
    </svg>
    <div className="notFound__iconHover">
    <FontAwesomeIcon icon={['fas', 'user-friends']} className='notFound__icon' />
    </div>
    </div>

    <div className="notFound__bottomMargins">
    <div className="notFound__bottomMessage">
      <div className="notFound__publishedNoText"><p className="notFound__noStoriesFound">You don't have any followers at the moment. Why not invite some of your friends over to NovaTerra?</p></div>
    </div>
    </div>
    <div className="notFound__positionButtonMobileSocial">

    <a href="https://www.facebook.com" className="notFound__oopeb notFound__socialHover">
     <div className="homeTop__heightOne"></div>
     <FontAwesomeIcon icon={['fab', 'facebook-f']} className="tue notFound__firstShareIcon" />
      </a>
    <a href="https://www.twitter.com" className="notFound__aapeb notFound__socialHover">
     <FontAwesomeIcon icon={['fab', 'twitter']} className="tue notFound__secondShareIcon" />
      </a>
    <a href="https://www.instagram.com" className="notFound__mmpeb notFound__socialHover">
     <FontAwesomeIcon icon={['fab', 'instagram']} className="tue notFound__thirdShareIcon" />
      </a>
    <a href="https://www.pinterest.com" className="notFound__mmpeb notFound__socialHover">
    <FontAwesomeIcon icon={['fab', 'pinterest']} className="tue notFound__fourthShareIcon" />
      </a>
      <a href="https://www.reddit.com" className="notFound__mmpeb notFound__socialHover">
      <FontAwesomeIcon icon={['fab', 'reddit']} className="tue notFound__fifthShareIcon" />
        </a>
    </div>
    </div>
  )
}
}
return undefined;
}
returnNoFollowingMessage() {
if (this.props.user.following.length === 0) {
if (this.props.route) {
  return (
    <div className={this.props.user._id === Meteor.userId() ? 'notFound__containerProfileUserFollow2' : 'notFound__containerProfileUserFollow3'}>
    <div className="notFound__topSection">
    <svg width="0" height="0">
    <radialGradient id="notFoundColor" r="150%" cx="30%" cy="107%">
    <stop stopColor="#67B26F" offset="0.28" />
    <stop stopColor="#4ca2cd" offset="0.65" />
    </radialGradient>
    </svg>
    <div className="notFound__iconHover">
    <FontAwesomeIcon icon={['fas', 'users']} className='notFound__icon' />
    </div>
    </div>

    <div className="notFound__bottomMargins">
    <div className="notFound__bottomMessage">
      <div className="notFound__publishedNoText"><p className="notFound__noStoriesFound">{this.props.user._id === Meteor.userId() ? <div>You don't seem to be following any creators at the moment. Check out our <Link to='/explore' className="link">Explore page</Link> to find creators to follow!</div> : "This user doesn't seem to be following any creators at the moment."}</p></div>
    </div>
    </div>
    {this.props.user._id === Meteor.userId() ? <div className="notFound__positionButtonMobile">
      <Link to="/explore"><div className="notFound__actionButtonFollow">Explore</div></Link>
      </div> : undefined }
    </div>
  )
}
  return (
    <div className='notFound__containerProfileUserFollow2'>
    <div className="notFound__topSection">
    <svg width="0" height="0">
    <radialGradient id="notFoundColor" r="150%" cx="30%" cy="107%">
    <stop stopColor="#67B26F" offset="0.28" />
    <stop stopColor="#4ca2cd" offset="0.65" />
    </radialGradient>
    </svg>
    <div className="notFound__iconHover">
    <FontAwesomeIcon icon={['fas', 'users']} className='notFound__icon' />
    </div>
    </div>

    <div className="notFound__bottomMargins">
    <div className="notFound__bottomMessage">
      <div className="notFound__publishedNoText"><p className="notFound__noStoriesFound">You don't seem to be following any creators at the moment. Check out our <Link to="/explore" className="link">Explore page</Link> to find creators to follow!</p></div>
    </div>
    </div>
    <div className="notFound__positionButtonMobile">
    <Link to="/explore"><div className="notFound__actionButtonFollow">Explore</div></Link>
    </div>
    </div>
  )
}
return undefined;
}
createNewStory() {
  let numStories = Stories.find().count();
  let newId = `${numStories + 1}`;
  console.log('newId', newId);

  let details = {
    title: "",
    category: '',
    description: '',
    tags: [],
    mainImage: '',
    userId: Meteor.userId(),
    lastUpdated: moment().valueOf(),
    minRead: 0,
    likes: [],
    comments: 0,
    shares: 0,
    storyType: 'drafted',
    _id: `${newId}`,
    link: `draft/${newId}`,
    references: "",
    type: 'story',
  }

  Meteor.call('stories.insert', newId, details);
  funcReplace(`draft/${newId}`);
}
updateStories() {

  if (!(this.props.route)) {

  if (this.state.selectedOption === 1) {
  let publishedStories = [];
    Stories.find({ storyType: 'published' }).fetch().map((story) => {
    if (story.userId === this.props.user._id) {
      publishedStories.push(story);
    }
    this.setState({ stories: publishedStories });
  });
  }

  if (this.state.selectedOption === 2) {
  let draftedStories = [];
    Stories.find({ storyType: 'drafted' }).fetch().map((story) => {
    if (story.userId === this.props.user._id) {
      draftedStories.push(story);
    }
    this.setState({ stories: draftedStories });
  });
  }

  if (this.state.selectedOption === 3) {
  let waitingStories = [];
    Stories.find({ storyType: 'waiting' }).fetch().map((story) => {
    if (story.userId === this.props.user._id) {
      waitingStories.push(story);
    }
    });
    this.setState({ stories: waitingStories });
  }
  }
  //
  // setTimeout(
  //   function() {
console.log('ROUTTTTE', this.props.route);

if (this.props.route) {
let userProfileStoryArray = [];

  this.state.stories.map((story) => {
  userProfileStoryArray.push(<UserProfileStory key={story._id} story={story} users={this.props.users} refs={[this.setTopContainer1Ref, this.setCategory1Ref, this.setAuthorImage1Ref, this.setAuthorName1Ref]} />);
});

this.setState({ renderStories: userProfileStoryArray });

} else {
let profileStoryArray = [];

this.state.stories.map((story) => {
  profileStoryArray.push(<ProfileStory key={story._id} story={story} refs={[this.setTopContainer1Ref, this.setCategory1Ref, this.setAuthorImage1Ref, this.setAuthorName1Ref]} />);
});
console.log('profileStoryArray', profileStoryArray);
this.setState({ renderStories: profileStoryArray });

}
// }
// .bind(this),
// 5
// );
}
setProfileBottomUsers() {

  return (
  <div>
  <div className="floatLeft marginBottomUsers">
  <div className={`mpl__mainOption ${this.state.selectedOption === 1 ? 'mpl__selectedOption' : ''}`} onClick={() => { this.toggleUsersSort(1) }}>Followers</div>
  <div className="mpl__mainOptionSlash">/</div>
  <div className={`mpl__mainOption ${this.state.selectedOption === 2 ? 'mpl__selectedOption' : ''}`} onClick={() => {  this.toggleUsersSort(2) }}>Following</div>
  </div>

  <hr className="mpl__hr"/>

  <div className="profile__bottomUsersMargins">
  {console.log('users users state', this.state.users)}
  {this.state.selectedOption === 1 ? this.props.user.followers.map((userMap) => {
  return <User key={userMap} route={this.props.route} user={userMap} />;
}) : undefined}
  {this.state.selectedOption === 2 ? this.props.user.following.map((userMap) => {
  return <User key={userMap} route={this.props.route} user={userMap} />;
}) : undefined}
  {this.state.selectedOption === 1 ? this.returnNoFollowersMessage() : undefined }
  {this.state.selectedOption === 2 ? this.returnNoFollowingMessage() : undefined }
  <div className="profile__followersBottomSpacing"></div>

  </div>

  </div>
);
}
setProfileBottomPosts() {

  return (
  <div>
  { !this.props.route ?
  <div className="floatLeft profile__aboveHrDiv">
  <div className={`mpl__mainOption ${this.state.selectedOption === 1 ? 'mpl__selectedOption' : '' }`} onClick={() => { this.toggleStoriesSort(1) }}>Published</div>
  <div className="mpl__mainOptionSlash">/</div>
  <div className={`mpl__mainOption ${this.state.selectedOption === 2 ? 'mpl__selectedOption' : '' }`} onClick={() => {  this.toggleStoriesSort(2) }}>Drafted</div>
  <div className="mpl__mainOptionSlash">/</div>
  <div className={`mpl__mainOption ${this.state.selectedOption === 3 ? 'mpl__selectedOption' : '' }`} onClick={() => {  this.toggleStoriesSort(3) }}>Waiting</div>
  </div>
  :
  <div className="mpl__onlyOptionPosts">Posts</div>
  }

  { this.props.route ?
    <div className="sort__marginLeftProfile">
    <div className="sort__buttonMarginLeftProfile">
      <div className="dropdown">
        <div ref={this.setWrapperRef} onClick={this.toggleDropDown.bind(this)} className="sort__sortByButton dropbtn"><FontAwesomeIcon icon={['fas', 'sort-amount-up']} className="sort__mainIcon"/><div className="sort__mainText">Sort by</div></div>
        <div ref={this.setWrapperRef2} className={this.state.toggleDropDown}>
        <div className="dropdown-content__innerLargerMargins">
        <div className="dropdown-content__innerMargins">
          <div onClick={() => { this.changeSortOptions('popular') }} className="sort__popularContainer"><FontAwesomeIcon icon={['fas', 'fire']} className={`${this.state.sortOption === 'popular' ? 'sort__greenIconPop' : 'sort__popularIcon'}`}  /><div className={`${this.state.sortOption === 'popular' ? 'sort__greenText' : 'sort__popularText'}`}>Popular</div></div>
          <div className="clearBoth"></div>
          <div onClick={() => { this.changeSortOptions('newest') }} className="sort__newestContainer"><FontAwesomeIcon icon={['fas', 'hourglass-start']} className={`${this.state.sortOption === 'newest' ? 'sort__greenIcon' : 'sort__newestIcon'}`} /><div className={`${this.state.sortOption === 'newest' ? 'sort__greenText' : 'sort__newestText'}`}>Newest</div></div>
          <div className="clearBoth"></div>
          <div onClick={() => { this.changeSortOptions('oldest') }} className="sort__oldestContainer"><FontAwesomeIcon icon={['fas', 'hourglass-end']} className={`${this.state.sortOption === 'oldest' ? 'sort__greenIcon' : 'sort__oldestIcon'}`} /><div className={`${this.state.sortOption === 'oldest' ? 'sort__greenText' : 'sort__oldestText'}`}>Oldest</div></div>
        </div></div>
      </div></div>
      </div></div>
      : undefined }

  <div className="clearBoth"></div>

  <hr className="mpl__hr"/>

  {!this.props.route ?

  <div ref={this.setStoriesBottom} className="storiesBelowMainProfile">
  {this.state.stories.length > 0 ? this.state.renderStories : this.showNoStoriesMessage()}
  </div>
  :

  <div ref={this.setStoriesBottom} className="storyUserBelowMainProfile">
  {this.state.stories.length > 0 ? this.state.renderStories : this.showNoStoriesMessage()}
  </div>

  }

  {this.state.selectedOption ===  1 ? <div className="profile__firstBottomSpacing"></div> : undefined  }

  {this.state.selectedOption ===  3 ? <div className="profile__thirdBottomSpacing"></div> : undefined }

  {!this.props.route && this.state.selectedOption === 2 && this.state.stories.length > 0 ?
    <div>
    <a onClick={() => this.createNewStory()}>
    <div className="profile__largerDivShowMore profilePagePositioning">
    <div className="profile__showMoreBottomContainer">Create a new story</div>
    </div>
    </a>
    <div className="profile__showMoreTopSpacing"></div>
    </div>
  : undefined }

  </div>
);
}
changeProfileBottom(newState) {

  if (newState === 'posts') {
    this.setState({ stories: !this.props.route ? this.props.drafted : this.props.popular });
    this.updateStories();

  }  if (newState === 'followers') {
    this.setState({ followersAndFollowing: this.props.user.followers });
    this.toggleStoriesSort(1);

  } else if (newState === 'following') {
    this.setState({ followersAndFollowing: this.props.user.following });
    this.toggleStoriesSort(2);
  }

  setTimeout(
    function() {
    this.setState({ profileBottom: newState });
    }
    .bind(this),
    5
  );
}
makeProfileEditable() {
this.setState({ profileEditable: true });
this.setState({ error: '' });
}
resetError() {
this.setState({ error: '' });
}
componentDidMount() {
  Meteor.subscribe('allUsers', () => {
    Tracker.autorun(() => {
       let findUser = Meteor.users;           // Meteor.users.find().fetch();
      this.setState({ users: Meteor.users });
      if (this.props.route && this.state.users) {
        this.renderFollowingButton();
      }
      });
    });
      document.addEventListener('mousedown', this.handleClickOutside);

      Tracker.autorun(() => {
         let stories = Stories.find().fetch();
           this.updateStories();
      });

      if (Meteor.userId()) {
      Tracker.autorun(() => {
        if (this.state.users) {
         let userFollowing = this.state.users.findOne({ _id: Meteor.userId() }).following;
         // console.log('this ran');
         this.renderFollowingButton();
        }
      });
    }
}
componentWillUnmount() {
  document.removeEventListener('mousedown', this.handleClickOutside);
}
findUsersWithUrl(url) {
  console.log('count', this.props.users.find({ profileUrl: url }).count());
  return this.props.users.find({ profileUrl: url }).count();
}
saveEditProfile() {
  let firstName = this.refs.authorFirstName.value.trim();
  let lastName = this.refs.authorLastName.value.trim();
  let username = `${firstName} ${lastName}`;
  let description = this.refs.authorDescription.value.trim();

  let profileUsername = username.replace(/\s+/g, '-').toLowerCase();

  let profileUrl = `/profile/${profileUsername}`;

  if (this.findUsersWithUrl(profileUrl) !== 0) {
    let count = 0;
    while (this.findUsersWithUrl(profileUrl) === 1) {
      count += 1;
      profileUrl = `/profile/${profileUsername}-${count}`;
    }
  }

  console.log('profileUrl', profileUrl);

  if (firstName.length < 1) {
  return this.setState({ error: 'Did you forget your add your first name?' });
  }

  if (lastName.length < 1) {
  return this.setState({ error: 'Did you forget to add your last name?' });
  }

  if (firstName.length > 15) {
  return this.setState({ error: "First Name shouldn't be more than characters" });
  }

  if (lastName.length > 15) {
  return this.setState({ error: "Last Name shouldn't be more than 15 characters" });
  }

  if (description.length > 300) {
  return this.setState({ error: "Description shouldn't be more than 300 characters" });
  }

  console.log(Meteor.users.find({ _id: this.props.user._id }));
  Meteor.call('users.update', this.props.user._id, { username, lastName, firstName, description, profileUrl });

  setTimeout(
    function() {
        this.setState({profileEditable: false});
    }
    .bind(this),
    100
);
  // setTimeout(this.setState({ profileEditable: false }), 5000);
}
cancelEditProfile() {
  this.setState({ profileEditable: false });
}
linkToSettingsPage() {

  funcReplace('/settings');
  // if (confirm('Are you sure you want to leave this page? Your changes will not be saved.')) {
  //
  // } else {
  // }
}
renderMainProfileImage() {
  if (this.props.user.profilePhoto) {
    return `${this.props.route}${this.props.user.profilePhoto}`;
  } else {
    return `${this.props.route}images/noImage.png`;
  }
}
returnDescriptionCharactersLeft(e) {
  this.resetError();
  this.setState({ descriptionLength: e.target.value.length });
}
// returnUsernameCharactersLeft(e) {
//   this.setState({ usernameLength: e.target.value.length });
// }
limitInputToFiveLines(e) {
      var lines = 7;

      let newLines = e.target.value.split("\n").length;

      if (e.key === 'Enter' && newLines >= lines) {
          e.preventDefault();
      }
}
renderFollowingButton() {

console.log('renderFollowingButton ran');

let user = Meteor.users.findOne({ _id: Meteor.userId() });
let profileFollow = user.following.includes(this.props.user._id);

console.log('userId1', user._id);
console.log('userId1', this.props.user._id);

if (user._id === this.props.user._id) {
  this.setState({ isPerson: true });
}

if (!(user._id === this.props.user._id)) {
  this.setState({ profileFollow });
  console.log('followButton', profileFollow);
}
}
toggleIsFollowing() {

  if (Meteor.userId()) {
  let user = Meteor.users.findOne({ _id: Meteor.userId() });
  let otherUser = Meteor.users.findOne({ _id: this.props.user._id });

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

  if (Notifications.findOne({ description: 'started following you', userIdEventCauser: user._id, thisUserId: otherUser._id, })) {

  let notification = Notifications.findOne({ description: 'started following you', userIdEventCauser: user._id, thisUserId: otherUser._id, });

  console.log('removed notification....')
  Meteor.call('notifications.remove', notification._id);
  }

  // this.setState({ profileFollow: false });
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

  Meteor.call('users.update', Meteor.userId(), { following: newFollowing });
  Meteor.call('users.update', otherUser._id, { followers: newFollowers });

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

  // this.setState({ profileFollow: true });
  console.log('newFollowing', newFollowing);
  console.log('newFollowers', newFollowers);
  }

} else {
  funcReplace('/login');
}
}
returnFollowingButtons() {
if (this.props.user.username.length < 19) {
return <div className="mpl__topFollowMobileHide">{this.state.profileFollow ? <a className="mpl__followingButtonLargeTop floatLeft" onClick={() => { this.toggleIsFollowing() }}>Following</a> : <a className="mpl__followButtonLarge floatLeft" onClick={() => { this.toggleIsFollowing() }}>Follow</a>}</div>;
}
else {
return (
  <div>
  <div className="mpl__profileSmallerFollowingButtons">{this.state.profileFollow ? <div ref={this.setFollowingRef} className="mpl__followingButtonLargeMobileProfile floatLeft" onClick={() => { this.toggleIsFollowing() }}><FontAwesomeIcon icon={['fas', 'plus']} className='mpl__mobileFollowingIcon' /></div> : <div ref={this.setFollowingRef} className="mpl__followButtonLargeMobileProfile floatLeft" onClick={() => { this.toggleIsFollowing() }}><FontAwesomeIcon icon={['fas', 'plus']}  className='mpl__mobileFollowIcon' /></div>}</div>
  <div className="mpl__profileLargerFollowingButtons">{this.state.profileFollow ? <a className="mpl__followingButtonLargeTop floatLeft" onClick={() => { this.toggleIsFollowing() }}>Following</a> : <a className="mpl__followButtonLarge floatLeft" onClick={() => { this.toggleIsFollowing() }}>Follow</a>}</div>
  </div>
)
}
}
redirectToProfile() {
  window.location = `/profile`;
}
render() {
    return (
      <div>
        {/* {Session.get('active') ? */}
        <meta name="viewport" content="initial-scale=1"></meta>
        {!this.state.profileEditable ?
        <div className="mpl__topMargins">

        <div className="mpl__topSectionMargins">
        {!this.props.route ? <ProfileModal route={this.props.route} imageSrc={this.renderMainProfileImage()} /> : this.props.user.profilePhoto ? <div><div className="profileModal__profileModalBehindCircleTRY"></div><Image className="mpl__topImage" cloud_name='novaterra' className="mpl__topImage" publicId={this.props.user.profilePhoto}><Transformation crop="thumb" /></Image></div> : <img src={`${this.props.route}images/noImage.png`} className="mpl__topImage"/>}

        <div className="floatLeft mpl__authorRightContainer">
        <div className="mpl__mainAuthor floatLeft">{this.props.user.username}</div> {this.props.route && this.props.user._id !== Meteor.userId() ? this.returnFollowingButtons() : undefined }
        <div className="clearBoth"></div>
        <div className="mpl__mainStatsDesktop">
        <div className={`mpl__mainStat ${this.state.profileBottom === 'posts'  ? 'mpl__selectedStat' : ''}`} onClick={() => { this.changeProfileBottom('posts') }}>{`${this.props.published.length} ${this.props.published.length === 1 ? 'story' : 'stories'}`}</div>
        <div className={`mpl__mainStat ${this.state.profileBottom === 'followers' ? 'mpl__selectedStat' : ''}`} onClick={ () => { this.changeProfileBottom('followers') }}>{`${this.props.user.followers.length} ${this.props.user.followers.length === 1 ? 'follower' : 'followers'}`}</div>
        <div className={`mpl__mainStat ${this.state.profileBottom === 'following' ? 'mpl__selectedStat' : ''}`} onClick={ () => { this.changeProfileBottom('following') }}>{`${this.props.user.following.length} following`}</div>
        </div>
        <div className="mpl__mainStatsMobile">
        <div className="floatLeft mpl__mobileStatTopDivs" onClick={() => { this.changeProfileBottom('posts') }}>
        <div className={`mpl__mainNumberStatMobile ${this.state.profileBottom === 'posts'  ? 'mpl__selectedStat' : ''}`}>{this.props.published.length}</div>
        <div className={`mpl__mainStatMobile ${this.state.profileBottom === 'posts'  ? 'mpl__selectedStat' : ''}`}>{`${this.props.published.length === 1 ? 'story' : 'stories'}`}</div>
        </div>
        <div className="floatLeft mpl__mobileStatTopDivs" onClick={ () => { this.changeProfileBottom('followers') }}>
        <div className={`mpl__mainNumberStatMobile ${this.state.profileBottom === 'followers' ? 'mpl__selectedStat' : ''}`}>{this.props.user.followers.length}</div>
        <div className={`mpl__mainStatMobile ${this.state.profileBottom === 'followers' ? 'mpl__selectedStat' : ''}`}>{`${this.props.user.followers.length === 1 ? 'follower' : 'followers'}`}</div>
        </div>
        <div className="floatLeft mpl__mobileStatTopDivs" onClick={ () => { this.changeProfileBottom('following') }}>
        <div className={`mpl__mainNumberStatMobile ${this.state.profileBottom === 'following' ? 'mpl__selectedStat' : ''}`}>{this.props.user.followers.length}</div>
        <div className={`mpl__mainStatMobile ${this.state.profileBottom === 'following' ? 'mpl__selectedStat' : ''}`}>{`following`}</div>
        </div>
        </div>
        <div className="clearBoth"></div>

        <div className="mpl__mainDescription">{this.props.user.description ? this.props.user.description : ''}</div>

        { !this.props.route ? <a onClick={() => { this.makeProfileEditable() }} className="mpl__editProfile">Edit Profile</a> : undefined}
        {!this.props.route ? <a onClick={() => { this.makeProfileEditable() }} className="mpl__editProfileMobile">Edit Profile</a> : <div>{this.props.user._id !== Meteor.userId() ? <a onClick={() => { this.toggleIsFollowing() }} className="mpl__editProfileMobile">{this.state.profileFollow ? 'Following' : 'Follow'}</a> : <a onClick={() => { this.redirectToProfile() }} className="mpl__editProfileMobile">Profile</a>}</div>}


      </div>
        <div className="mpl__mainDescriptionMobile"><div className="trytrytry">{this.props.user.username}</div>{this.props.user.description ? this.props.user.description : ''}</div>
      </div>
        <div className="clearBoth mpl__profileTopHeight"></div>

        <div className="bottomProfileMargins">

        { this.state.profileBottom === 'posts' ? this.setProfileBottomPosts() : undefined }

        { this.state.profileBottom === 'followers' ? this.setProfileBottomUsers() : undefined }

        { this.state.profileBottom === 'following' ? this.setProfileBottomUsers() : undefined }

        </div>

        </div>
        :

        <div className="mpl__topMargins">

        <div className="mpl__topSectionMarginsEditProfile">

        <ProfileModalEditProfile route={this.props.route} imageSrc={this.renderMainProfileImage()} />

        <div className="floatLeft mpl__editProfileRightSection">
        <div className="floatLeft">
        <div className={`profile__rightSubtitle  ${this.state.error === 'Did you forget your add your first name?' || this.state.error === "First Name shouldn't be more than characters" ? 'signup__redLabel' : ''}`}>First Name</div>
        <input ref='authorFirstName' defaultValue={this.props.user.firstName} onChange={() => { this.resetError() }} maxLength="15" className={`mpl__mainAuthorTextArea floatLeft ${this.state.error === 'Did you forget your add your first name?' || this.state.error === "First Name shouldn't be more than characters" ? 'signup__passwordRed' : ''}`} />
        </div>

        <div className="floatLeft">
        <div className={`profile__rightSubtitle1_5 ${this.state.error === 'Did you forget to add your last name?' || this.state.error === "Last Name shouldn't be more than 15 characters" ? 'signup__redLabel' : ''}`}>Last Name</div>
        <input ref='authorLastName' defaultValue={this.props.user.lastName} onChange={() => { this.resetError() }} maxLength="15" className={`mpl__mainAuthorTextArea2 floatLeft ${this.state.error === 'Did you forget to add your last name?' || this.state.error === "Last Name shouldn't be more than 15 characters" ? 'signup__passwordRed' : ''}`} />
        </div>

        <FontAwesomeIcon icon={['fas', 'cogs']} onClick={() => { this.linkToSettingsPage() }} className="profile__settingsIcon" aria-hidden="true" />
        <div className="clearBoth"></div>

        <div className={`profile__rightSubtitle2 ${this.state.error === "Description shouldn't be more than 300 characters" ? 'signup__redLabel' : ''}`}>Description</div>
        <textarea ref='authorDescription' rows="7" onKeyDown={this.limitInputToFiveLines.bind(this)} onChange={this.returnDescriptionCharactersLeft.bind(this)} className={`mpl__mainAuthorDescriptionTextArea ${this.state.error === "Description shouldn't be more than 300 characters" ? 'signup__passwordRed' : ''}`} defaultValue={this.props.user.description} placeholder={this.props.user.description.length !== 0 ? '' : 'Enter your own description here!'} maxLength='300' />
        <div className="profile__descriptionMessageMaxCharacters">{`${300 - this.state.descriptionLength} Characters Left`}</div>

        <div className="profile__positioningErrorBox">
       {this.state.error ? <div className="profile__errorBox"><p>{this.state.error}</p></div> : undefined}
        </div>

        <div className="clearBoth"></div>
       <a onClick={() => { this.saveEditProfile() }} className="mpl__saveProfile saveCancelMargin">Save</a><a className="slashSaveCancel saveCancelMargin">/</a><a onClick={() => { this.cancelEditProfile() }} className="mpl__cancelProfile">Cancel</a>

      </div></div>
        <div className="clearBoth"></div>

        <div className="editProfile__bottomHeight">

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
})(MainProfileLayout);
