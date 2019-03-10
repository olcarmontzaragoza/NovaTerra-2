import React from 'react';
import { withTracker } from 'meteor/react-meteor-data';
import { Link } from 'react-router-dom';
import ReactDOM from 'react-dom';
import { Meteor } from 'meteor/meteor';
import { Session } from 'meteor/session';
import { Stories } from '../../../api/stories';
import { Notifications } from '../../../api/notifications';
import moment from 'moment';
import UserEventNotification from './UserEventNotification';
import NavModal from './NavModal';

import {Image, Video, Transformation, CloudinaryContext} from 'cloudinary-react';

import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { plus } from '@fortawesome/free-solid-svg-icons';
import { search } from '@fortawesome/free-solid-svg-icons';
import { heart } from '@fortawesome/free-solid-svg-icons';
import { circle } from '@fortawesome/free-solid-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';

library.add(far);
library.add(fas);

import EmailVerificationMessage from '../EmailVerificationMessage';
import { funcReplace } from '../../../routes/routes.js';
import MessageTooltipClick from '../Tooltips/MessageTooltipClick';
import MessageTooltipClickNot from '../Tooltips/MessageTooltipClickNot';
import MessageTooltipClickPro from '../Tooltips/MessageTooltipClickPro';
import MessageTooltipClickPublish from '../Tooltips/MessageTooltipClickPublish';

Meteor.subscribe('notifications');

import { browserHistory } from 'react-router';

import createBrowserHistory from 'history/createBrowserHistory';

// import createBrowserHistory from 'react-router/node_modules/history/imports/api/createBrowserHistory';
browserHistory = createBrowserHistory();

// const browserHistory = useRouterHistory(createBrowserHistory)({
//   parseQueryString: function () {
//     try {
//       return queryString.parse.apply(null, arguments);
//     } catch (e) {
//       return qs.parse.apply(null, arguments);
//     }
//   }
// });

let loginStatus;

let getTotalRevenue;

export const setTotalRevenue = (totalRevenue) => {
  getTotalRevenue = totalRevenue;
}

export const renderImageOrButton = (isLoggedIn) => {
if (isLoggedIn === true || isLoggedIn === false) {
console.log('isLoggedIn', isLoggedIn);
loginStatus = isLoggedIn;
if (isLoggedIn) {
console.log('should return a author photo');
} else {
console.log('should return a button');
}
return isLoggedIn;
}
}

export class Nav extends React.Component {
  constructor(props) {
  super(props);
  this.state = {
  pError: '',
  loginStatus: Session.get('loginStatus'),
  searchValue: Session.get('searchValue'),
  showInput: false,
  selectedIcon: '',
  notificationsMessage: false,
  currentPage: Session.get('currentPage'),
  // projectCompletion: projectCompletion
};
this.setSearchIcon = this.setSearchIcon.bind(this);
this.setSearchIconInput = this.setSearchIconInput.bind(this);

this.handleClickOutside = this.handleClickOutside.bind(this);
}
setSearchIcon(node) {
    this.searchIconPush = node;
}
setSearchIconInput(node) {
    this.searchIconInput = node;
}
getProjectCompletion() {
return Session.get('projectCompletion');
}
renderCompletionImage() {
  if (Session.get('projectCompletion') > 100) {
  return `${this.props.route}images/goalCompletionImages/navbar/100.png`;
  } else {
  return `${this.props.route}images/goalCompletionImages/navbar/${Session.get('projectCompletion')}.png`;
  }
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
  handleLogout() {
  Accounts.logout();
  funcReplace('/login');
  }
  hasNotifications() {
  let unSeenNotifications = Notifications.find({ thisUserId: Meteor.userId(), seen:false }).fetch();
  console.log('unseen', unSeenNotifications);
  if (unSeenNotifications.length > 0) {
  return <FontAwesomeIcon icon="circle" className="floatLeft notificationsCircle" />;
  }
  }
  renderNotificationsOrMessage() {

  if (!!Meteor.userId()) {

  let jsx = [];
  let notificationNum = -1;

    // console.log('NOTIFICATIONS', Notifications.find({ thisUserId: Meteor.userId() }).count());
    //
    // console.log('NOTIFICATION USER', Meteor.userId());
    //
    // console.log('NOTIFICATION USER', Notifications.find().count());
    // console.log('NOTIFICATION USER', Notifications.findOne({ description : "Your story is now waiting." }));

  if (Notifications.find().count() >= 1) {

  Notifications.find({ thisUserId: Meteor.userId() }, {
    sort: {
      created: -1
    }
  }).fetch().map((notification) => {

    notificationNum++;

    if (notification.type === 'userEvent') {

    jsx.push((<UserEventNotification notificationNum={notificationNum} key={notification._id} notification={notification} users={this.props.users} route={this.props.route} />));

    } else if (notification.type === 'storyEvent') {

      let story = Stories.findOne({ _id: notification.storyId });

      jsx.push((<div key={notification._id} className={`nav__notificationsTopPadding`}>
        <div className="nav__belowHrMargin1"></div>
        { notificationNum > 0 ? <hr className="clearBoth flex nav__hrSeperator"/> : undefined }
        <div className="nav__belowHrMargin"></div>
        {notification.published ? <Link to={story.link} className="nav__notificationsPostImagePositioning"><div className="nav__notificationsFollow nav__visit">Visit</div></Link> : <div className="nav__notificationsPostImagePositioning"><div className="nav__notificationsFollow nav__learnWhy" onClick={() => { this.setState({ notificationsMessage: notification}) }}>Learn</div></div>}
        <div className={`${notification.published ? 'nav__userEventElimateSpacingFollow' : 'nav__userEventElimateSpacingFollow'}`}></div>
        <Link to={story.link} className="floatLeft"><Image className="notification__storyImage" cloud_name='novaterra' publicId={story.mainImage}><Transformation crop="thumb" /></Image></Link>
        <div className="nav__notificationsText nav__notificationsWidth">{notification.description}&nbsp;<br/><Link to={story.link} className="nav__notificationsStoryTitle">{story.title}.</Link>
        <a className="nav__notificationsFromNow">&nbsp;{this.returnTime(notification.created)}</a>
        </div>
        <div className="clearBoth"></div>
        </div>));

    } else if (notification.type === 'featureEvent') {

      jsx.push((<div key={notification._id} className="nav__notificationsTopPadding">
        <div className="nav__belowHrMargin1"></div>
        { notificationNum > 0 ? <hr className="clearBoth flex nav__hrSeperator"/> : undefined }
        <div className="nav__belowHrMargin"></div>
        <div className="nav__notificationsPostImagePositioning"><div className="nav__notificationsFollow nav__learnMore" onClick={() => { this.setState({ notificationsMessage: notification}) }}>Learn</div></div>
        <div className="nav__userEventElimateSpacing1"></div>
        <a className="floatLeft"><Image className="notification__storyImage" cloud_name='novaterra' publicId={notification.messageImage}><Transformation crop="thumb" /></Image></a>
        <div className="nav__notificationsText nav__notificationsWidth">{notification.description.length > 145 ? notification.description.slice(0, 145) + '...' : notification.description}.&nbsp;
        <a className="nav__notificationsFromNow">&nbsp;{this.returnTime(notification.created)}{/* moment(notification.created).fromNow() */}</a>
        </div>
        <div className="clearBoth"></div>
        </div>))

    }

    });

    return jsx;

  } else {
    return <div className="nav__noNotificationsMessage"><FontAwesomeIcon icon={['far', 'compass']} className='nav__noNotficationsIcon' /><div className="nav__noNotificationsMessageText">Sorry, we couldn't find any notifications.</div></div>;
  }
  } else {
    return <div className="nav__noNotificationsMessage"><p>Sorry, I can't find any notifications if you're not logged in.</p></div>;
  }
  }
  createNewStory() {
    let numStories = Stories.find().count();
    let newId = `${numStories + 1}`;
    console.log('newId', newId);

    let details = {
      title: "",
      unCapTitle: "",
      category: '',
      description: '',
      tags: [],
      mainImage: '',
      userId: Meteor.userId(),
      lastUpdated: moment().valueOf(),
      lastUpdatedTime: moment(moment().valueOf()).format('LLLL'),
      minRead: 0,
      reactions: 0,
      heartReactions: [],
      suprisedReactions: [],
      laughReactions: [],
      angryReactions: [],
      sadReactions: [],
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
  renderPlusIcon() {
  if (Session.get('loginStatus')) {

  const outsideJsx = <FontAwesomeIcon icon="plus" className={`floatLeft plusIconMarginTop nav__mainIcons2`} />;
  const insideJsx = (
    <div>
    <div className="nav_plusMarginTopAndBottom"></div>
    <a className="navLinks navLinks1" onClick={() => this.createNewStory()}>Create Story</a>
    {/* }<br/>
    <div className="navlinks_plusMarginTopAndBottom"></div>
    <Link className="navLinks navLinks1" to="/import-story">Import Story</Link> */}
    <br/>
    <div className="navlinks_plusMarginTopAndBottom"></div>
    <Link className="navLinks navLinks1" to="/profile">My Stories</Link>
    <div className="nav_plusMarginTopAndBottom"></div>
    </div>
  );
  return <MessageTooltipClick inside={insideJsx} outside={outsideJsx} insideClassName={'width120'} />;
  }
  }
  renderNotificationsIcon() {
  if (Session.get('loginStatus')) {
  return (
  <div>
  <div>
  {this.hasNotifications()}
  <FontAwesomeIcon icon={['far', 'heart']} onClick={() => this.setNotificationsSeen()} className={`floatLeft nav__mainIcons1 ${!!Meteor.userId() ? 'nav__notificationsIcon' : 'nav__searchIconNotLoggedIn'}`} aria-hidden="true" />
  </div>
  </div>
  );
  } else {
  return undefined;
  }
  }
  findUser(userId) {
      try {
      const user = this.props.users.findOne({ _id: userId });
      return user;
    } catch(e) {

    }
  }
  renderAdminIcon() {
  let user = Meteor.users.findOne({ _id: Meteor.userId() });

  if (user.emails[0].address === 'olcarmontzaragoza@gmail.com') {
    return (
      <div>
      <div className="clearBoth"></div>
        <div className="nav__profileLock"><FontAwesomeIcon icon={['fas', 'lock']} className={`${this.state.currentPage === 'faq' ? 'nav__currentProfileIcon' : 'nav__profileIcon'}`} /><Link className={`${this.state.currentPage === 'faq' ? 'nav__currentProfileLink' : 'nav__profileLink'}`} to="/admin">Admin</Link></div>
      </div>
    )
  }
  }
  renderSmallDescription() {
    console.log();
    if (this.findUser(Meteor.userId()).username.length > 20) {
    return <div className="nav__profileUsername">{this.findUser(Meteor.userId()).firstName}</div>;
  } else {
    return <div className="nav__profileUsernameSmall">{this.findUser(Meteor.userId()).username}</div>;
  }
  }
  renderActualImageOrButton() {
    if (!!Meteor.userId()) {
    let width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
    console.log('width', width);
    try {
    const outsideJsx = (
      <div>
      {this.findUser(Meteor.userId()).profilePhoto ? <div><div className="nav__behindCircleNav"></div><Image className="mpl__topImage" cloud_name='novaterra' className="nav__authorImage" publicId={this.findUser(Meteor.userId()).profilePhoto}><Transformation crop="thumb" /></Image></div> :
      <img src={`${this.props.route}images/noImage.png`} className="nav__authorImage"/>}
      </div>
    );
    if (width > 900) {

    const insideJsx = (
      <div>
      <div className="nav__profileTopContainer"></div>
      <div className="nav__profileImageAndUserMargins">
      {this.findUser(Meteor.userId()).profilePhoto ? <Image cloud_name='novaterra' className="nav__profileMainImage" publicId={this.findUser(Meteor.userId()).profilePhoto}><Transformation crop="thumb" /></Image> : <img src={`${this.props.route}images/noImage.png`} className="nav__profileMainImage"/>}
      <div className="nav__profileUsernameAndDate">
      {this.findUser(Meteor.userId()).username.length > 18 ? this.renderSmallDescription() : <div className="nav__profileUsername">{this.findUser(Meteor.userId()).username}</div>}
      <div className="nav__profileJoinedDate">{`Joined ${moment(this.findUser(Meteor.userId())).format('MMMM YYYY')}`}</div>
      </div>
      </div>
      <div className="clearBoth"></div>
      <div className="nav__profileBottomLinks">
      <div className="nav__profileSettings"><FontAwesomeIcon icon={['fas', 'home']} className={`${this.state.currentPage === '' ? 'nav__currentProfileIcon' : 'nav__profileIcon'}`}/><Link className={`${this.state.currentPage === '' ? 'nav__currentProfileLink' : 'nav__profileLink'}`} to="/">Home</Link></div>
      <div className="clearBoth"></div>
      <div className="nav__profileExplore"><FontAwesomeIcon icon={['fas', 'compass']} className={`${this.state.currentPage === 'explore' ? 'nav__currentProfileIcon' : 'nav__profileIcon'}`} /><Link className={`${this.state.currentPage === 'explore' ? 'nav__currentProfileLink' : 'nav__profileLink'}`} to="/explore">Explore</Link></div>
      <div className="clearBoth"></div>
      <div className="nav__profileProfile"><FontAwesomeIcon icon={['fas', 'user-circle']} className={`${this.state.currentPage === 'profile'  ? 'nav__currentProfileIcon' : 'nav__profileIcon'}`} /><Link className={`${this.state.currentPage === 'profile' ? 'nav__currentProfileLink' : 'nav__profileLink'}`} to="/profile">Profile</Link></div>
      <div className="clearBoth"></div>
      <div className="nav__profileHelp"><FontAwesomeIcon icon={['fas', 'question-circle']} className={`${this.state.currentPage === 'faq' ? 'nav__currentProfileIcon' : 'nav__profileIcon'}`} /><Link className={`${this.state.currentPage === 'faq' ? 'nav__currentProfileLink' : 'nav__profileLink'}`} to="/faq">Help</Link></div>
      {this.renderAdminIcon()}
      </div>

      {/* <div className="navlinks_plusMarginTopAndBottom1"></div>
      <Link className="navLinks" to="/bookmarks">Bookmarks</Link>
      <br/> */}
      <div className="navlinks_plusMarginTopAndBottom1"></div>
      <div className="nav__logoutButton" onClick={() => {this.handleLogout()}}>Logout</div>
      </div>
    );
    return <MessageTooltipClickPro inside={insideJsx} outside={outsideJsx} insideClassName={'nav__profileOutsideClassNameTooltip'} />;

    } else {

    return <NavModal width={width} users={this.props.users} route={this.props.route} className="" />;

    }


  } catch(e) {

  }

  } else {
    console.log('session', Session.get('loginStatus'));
    return <div className="nav__loginAndSignup"><Link className="nav__loginButton" to="/login">Log in</Link><Link to="/signup" className="nav__getStartededButton"><div className="getStartedButton">Get Started</div></Link></div>;
    }
  }
  handleSearchInput(e) {
  let searchValue = e.target.value;
  Session.set({ searchValue });
  }
  renderSearchIcon() {

  const pathname = browserHistory.location.pathname;
  const path = pathname.toString();

  }
  handleSearchSubmit(e) {
let width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
console.log('width', width);
if (width > 1020) {
    console.log('width on', width)
  const pathname = browserHistory.location.pathname;
  if (this.props.onSearch) {
    console.log('onSearch', true);
  } else {
  console.log('onSearch', false);
  this.setState({ showInput: !this.state.showInput });
}
} else {
  funcReplace('/search');
}
}
  componentDidMount() {

    document.addEventListener('mousedown', this.handleClickOutside);



    Session.set({ searchValue: '' });

  if (!(this.state.currentPage.slice(0, 5) === 'draft')) {
    this.searchIconInput.addEventListener("keyup", function(e) {
      if (e.key === "Enter") {
        let searchValue = e.target.value;
        Session.set({ searchValue });
        funcReplace('/search');
  }
  });
}

  // ReactDOM.findDOMNode(

    // const node = document.getElementsByClassName("nav__searchIcon");
    // node.addEventListener("keyup", function(event) {
    //     if (event.key === "Enter") {
    //         // Do work
    //     }
  // });

  }
  componentWillUnmount() {
      document.removeEventListener('mousedown', this.handleClickOutside);
  }
  handleClickOutside(e) {
    console.log('has clicked');

    if (this.searchIconPush && this.searchIconInput && !this.searchIconPush.contains(e.target) && !this.searchIconInput.contains(e.target)) {
      this.setState({ showInput: false });
    }
  }
  renderNotificationsMessage() {

    let notification = this.state.notificationsMessage;

    let story = Stories.findOne({ _id: notification.storyId });

    return (
      <div>
        <FontAwesomeIcon icon={['fas', 'arrow-left']} className="nav__notificationsMessageBackButton" onClick={() => { this.setState({ notificationsMessage: false }) }} />

        <div className="notificationsMessageTopMargins clearBoth"></div>


      {notification.isStoryEvent ? <Link to={story.link} className="floatLeft"><Image cloud_name='novaterra' className="nav__notificationsMessageImage" publicId={story.mainImage}><Transformation crop="thumb" /></Image></Link> : <a className="floatLeft"><Image cloud_name='novaterra' className="nav__notificationsMessageImage" publicId={notification.messageImage}><Transformation crop="thumb" /></Image></a>} <h2 className="nav__notificationsMessageTitle">{notification.messageTitle}</h2>

        <div className="clearBoth"></div>

        <p className="nav__notificationsMessageBody">{notification.messageBody}</p>
        {notification.published === false ? <p className="nav__notificationsSecondLastSentence">If you have any other questions, please don't hestiate in <Link to="/contact" className="link">contacting us</Link></p> : <p className="nav__notificationsSecondLastSentence">Thank you for your support,</p> }
        <p className="nav__notificationsLastSentence">The NovaTerra Team</p>
    </div>
  );
  }
  setNotificationsSeen() {
  console.log('setNotificationsSeen ran');
  Notifications.find({ thisUserId: Meteor.userId(), seen:false }).fetch().map((notification) => {
    console.log('setNotificationsSeen ran and updated');
    Meteor.call('notifications.update', notification._id, { seen: true });
  });
  }
  renderPublishTooltip() {

    let story = Stories.findOne({ _id: this.props.storyId });

    return (
      <div className="nav__InnerContentPublishTooltip">
      <FontAwesomeIcon icon={['fas', 'times-circle']} onClick={() => this.setState({ publishOpen: false })} className='nav__publishTooltipX' />
      <div className="nav__publishTooltipText">{this.state.pError}</div>
      </div>
    )
}
  publishStory() {

  console.log('ran publish story');

  let story = Stories.findOne({ _id: this.props.storyId });

  if (story.title.length === 0) {

    this.setState({ pError: 'Make sure to include a title for your story!'});

    this.setState({ publishOpen: true });

  } else if (story.category.length === 0) {

    this.setState({ pError: 'Make sure to include a category for your story!'});

    this.setState({ publishOpen: true });

  } else if (story.mainImage.length === 0) {

    this.setState({ pError: 'Make sure to include an image for your story!'});

    console.log("ran image doesn't exist");

    this.setState({ publishOpen: true });

  } else {

    Meteor.call('stories.update', this.props.storyId, { storyType: 'waiting' });

    let story = Stories.findOne({ _id: this.props.storyId });

    let user = Meteor.users.findOne({ _id: Meteor.userId() });

    let details = {
      description: "Your story is now waiting.",
      thisUserId: user._id,
      created: moment().valueOf(),
      type: 'featureEvent',
      messageTitle: "Your story is now waiting.",
      messageBody: "This is a quick check we make of each story to make sure it doesn't contain spam, advertising or misinformation. Don't worry, we aren't judging your story ;)",
      messageImage: story.mainImage,
      storyId: story._id
    };

    if (Notifications.find({ storyId: story._id })) {
      Notifications.find({ storyId: story._id }).fetch().map((story) => {
        Meteor.call('notifications.remove', story._id);
      });
    }

    console.log('notification inserted...')

    Meteor.call('notifications.insert', details);


    funcReplace('/profile');

  }

  }
  checkPublishButton() {
  if (this.props.storyId) {
    if (this.props.storyId === '404' || this.props.storyId === '401') {
      return true;
    }
  }
  return false;
  }
  render() {
    return (
      <div>
      {console.log('LOCATIONNNN', browserHistory.location.pathname)}
      {/*  <EmailVerificationMessage users={this.props.users} width="90vw" height="40px" /> */} {/* THIS PART SHOULD NOT FLOAT - SHOULD NOT MOVE WITH NAV */}

        {console.log(this.state.currentPage.slice(0, 5))}

        <div className={this.state.currentPage === 'signup' || this.state.currentPage === 'login' || this.state.currentPage.slice(0, 5) === 'draft' ? 'nav__navNotFixed': 'nav__navFixed'}>

        <div className="nav__mainBox" width="90vw" height="200px">

          <div className="nav__leftSide">
          <div className="floatLeft">
          <div className="nav__missionLeft">
          <Link to="/mission"><img src={this.renderCompletionImage()} className="floatLeft nav__completionImageLeft"/></Link>
          <div className="nav__marginTopProjectCompletion">
          <Link to="/mission"><div className="nav__renderCompletionImagePercentage">{`${this.getProjectCompletion()}% complete`}</div></Link>
          </div>
          </div>
          </div>
          <Link to="/mission" className="floatLeft hoverGreen nav__ourMissionMarginTop">Our Mission</Link>
          {/* <Link to="/get-involved" className="floatLeft hoverGreen">Get Involved</Link> */}
          </div>

            <Link to="/" className="nav__brandImagePositioning">
            <img src={`${this.props.route}images/organizationImages/mainImage.png`} className="nav__mainBrandImage"/>
            </Link>


          {this.state.currentPage.slice(0, 5) === 'draft' && !this.checkPublishButton() ? <div><Link to='/profile' className="nav__publishProfileLink link">Profile</Link><MessageTooltipClickPublish inside={this.renderPublishTooltip()} open={this.state.publishOpen} outside={<div className="nav__publishButton" onClick={() => this.publishStory()}>Publish</div>}/></div> :
            <div>
           <div className={`floatLeft ${!!Meteor.userId() ? 'rightSideBarMarginTop' : 'notLoggedIn__rightSideBarMarginTop'}`}>
          <div className="floatLeft plusIconPositioning">
          {this.renderPlusIcon()}
        </div>
          <div className={`floatLeft ${!Meteor.userId() ? 'nav__loggedInSearch' : 'nav_searchSection'} `}>

        <div className={`floatLeft`} onClick={this.handleSearchSubmit.bind(this)} ref={this.setSearchIcon}><FontAwesomeIcon icon="search" className={`floatLeft nav__mainIcons nav__searchIcon`} /></div>
        <div className={`floatLeft`}><input autoFocus type="text" ref={this.setSearchIconInput} placeholder="Search" onChange={this.handleSearchInput.bind(this)} maxLength="100" className={`nav__searchInputMainStyles ${this.state.showInput ? 'nav__fullWidth' : 'width0'}`}/></div>

        </div>


        <div className="floatLeft notificationsMarginLeft">
          <MessageTooltipClickNot inside={<div className="nav__container1"><div className="nav__container2">
            <div className="nav__notificationsMargin">{this.state.notificationsMessage ? this.renderNotificationsMessage() : this.renderNotificationsOrMessage()}</div>
          </div></div>} outside={this.renderNotificationsIcon()} insideClassName={'nav__notificationsTooltip'}/>
        </div>

        <div className="floatLeft">
        {this.renderActualImageOrButton()}
        </div>


        </div>
        </div>}

        </div>
        </div>

      </div>
    );
  }
}

export default withTracker(() => {
return {

};
})(Nav);
