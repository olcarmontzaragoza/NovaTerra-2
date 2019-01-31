import { Meteor } from 'meteor/meteor';
import React from 'react';
import Modal from 'react-modal';
import { Notifications } from '../../../api/notifications';
import { Stories } from '../../../api/stories';
import moment from 'moment';
import UserEventNotificationModal from './UserEventNotificationModal';
import { Link } from 'react-router-dom';
import { funcReplace } from '../../../routes/routes.js';

import {Image, Video, Transformation, CloudinaryContext} from 'cloudinary-react';

import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';

Modal.setAppElement('#app');

export default class NavModal extends React.Component {
constructor(props) {
  super(props);
  this.state = {
    url: '',
    isOpen: false,
    currentPage: Session.get('currentPage'),
  };
}
onSubmit (e) {
    const { url } = this.state;

    e.preventDefault();

  this.handleModalClose();
}
onChange(e) {
  this.setState({
    url: e.target.value
  });
}
handleModalClose() {
this.setState({ isOpen: false,
                url: '',
                error: ''
                });
}
findUser(userId) {
    try {
    const user = this.props.users.findOne({ _id: userId });
    return user;
  } catch(e) {

  }
}
handleLogout() {
Accounts.logout();
funcReplace('/login');
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
hasNotifications() {
let unSeenNotifications = Notifications.find({ thisUserId: Meteor.userId(), seen:false }).fetch();
console.log('unseen', unSeenNotifications);
if (unSeenNotifications.length > 0) {
return <FontAwesomeIcon icon="circle" className="floatLeft notificationsCircle" />;
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
renderNotificationsOrMessage() {

if (!!Meteor.userId()) {

let jsx = [];
let notificationNum = -1;

if (Notifications.find().count() >= 1) {

Notifications.find({ thisUserId: Meteor.userId() }, {
  sort: {
    created: -1
  }
}).fetch().map((notification) => {

  notificationNum++;

  if (notification.type === 'userEvent') {

  jsx.push((<UserEventNotificationModal notificationNum={notificationNum} key={notification._id} notification={notification} users={this.props.users} route={this.props.route} />));

  } else if (notification.type === 'storyEvent') {

    let story = Stories.findOne({ _id: notification.storyId });

    jsx.push((<div key={notification._id} className={`nav__notificationsTopPadding`}>
      <div className="nav__belowHrMargin1"></div>
      { notificationNum > 0 ? <hr className="clearBoth flex nav__hrSeperator"/> : undefined }
      <div className="nav__belowHrMargin"></div>
      {notification.published ? <Link to={story.link} className="nav__notificationsPostImagePositioning"><button className="nav__notificationsFollow nav__visit">Visit</button></Link> : <div className="nav__notificationsPostImagePositioning"><button className="nav__notificationsFollow nav__learnWhy" onClick={() => { this.setState({ notificationsMessage: notification}) }}>Learn</button></div>}
      <div className={`${notification.published ? 'nav__userEventElimateSpacingFollow' : 'nav__userEventElimateSpacingFollow'}`}></div>
      <Link to={story.link} className="floatLeft"><Image className="notification__storyImage" cloud_name='novaterra' publicId={story.mainImage}><Transformation crop="thumb" /></Image></Link>
      <div className="nav__notificationsText nav__notificationsWidth">{notification.description}&nbsp;<br/><Link to={story.link} className="nav__notificationsStoryTitle" dangerouslySetInnerHTML={{ __html:
      story.title }}></Link>
      <a className="nav__notificationsFromNow">&nbsp;{this.returnTime(notification.created)}{/* moment(notification.created).fromNow() */}</a>
      </div>
      <div className="clearBoth"></div>
      </div>));

  } else if (notification.type === 'featureEvent') {

    jsx.push((<div key={notification._id} className="nav__notificationsTopPadding">
      <div className="nav__belowHrMargin1"></div>
      { notificationNum > 0 ? <hr className="clearBoth flex nav__hrSeperator"/> : undefined }
      <div className="nav__belowHrMargin"></div>
      <div className="nav__notificationsPostImagePositioning"><button className="nav__notificationsFollow nav__learnMore" onClick={() => { this.setState({ notificationsMessage: notification}) }}>Learn</button></div>
      <div className="nav__userEventElimateSpacing1"></div>
      <a className="floatLeft"><img src={notification.messageImage} className="notification__storyImage"/></a>
      <div className="nav__notificationsText nav__notificationsWidth">{notification.description.length > 145 ? notification.description.slice(0, 145) + '...' : notification.description}&nbsp;
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
renderNotificationsMessage() {

  let notification = this.state.notificationsMessage;

  let story = Stories.findOne({ _id: notification.storyId });

  return (
    <div>
      <FontAwesomeIcon icon={['fas', 'arrow-left']} className="nav__notificationsMessageBackButton" onClick={() => { this.setState({ notificationsMessage: false }) }} />

      <div className="notificationsMessageTopMargins clearBoth"></div>


    {notification.isStoryEvent ? <Link to={story.link} className="floatLeft"><img src={story.mainImage} className="nav__notificationsMessageImage"/></Link> : <a className="floatLeft"><img src={notification.messageImage} className="nav__notificationsMessageImage"/></a> } <h2 className="nav__notificationsMessageTitle">{notification.messageTitle}</h2>

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
notificationsLeftToSee() {
  return Notifications.find({ thisUserId: Meteor.userId(), seen:false }).count();
}
turnOffNotifications() {
  this.setState({ notificationsOn: false });
  this.setNotificationsSeen();
}
render () {
  return (
    <div>
    {this.findUser(Meteor.userId()).profilePhoto ? <div><div className="nav__behindCircleNavModal"></div><Image onClick={() => this.setState({ isOpen: !this.state.isOpen })} className="mpl__topImage" cloud_name='novaterra' className="nav__authorImageModal" publicId={this.findUser(Meteor.userId()).profilePhoto}><Transformation crop="thumb" /></Image></div> :
    <img onClick={() => this.setState({ isOpen: !this.state.isOpen })} src={`${this.props.route}images/noImage.png`} className="nav__authorImageModal"/>}
    <Modal isOpen={this.state.isOpen}
           contentLabel=''
           onRequestClose={this.handleModalClose.bind(this)}
           className="boxed-view__boxNav"
           overlayClassName="boxed-viewNav boxed-view--modalNav">

           {this.state.notificationsOn ?

             <div>
             <div className="nav__profileTopContainerModal"></div>
             <div className="nav__notificationsTitle">Notifications</div>

            <div className="nav__notificationsModalContainer">

            {this.state.notificationsMessage ? this.renderNotificationsMessage() : this.renderNotificationsOrMessage()}

            </div>


             <div className="nav__backButtonModal" onClick={() => this.turnOffNotifications()}>Back</div>
             </div>
             :

           <div>
           <div className="nav__profileTopContainerModal"></div>
           <div className="nav__profileImageAndUserMarginsModal">
           {this.findUser(Meteor.userId()).profilePhoto ? <Image className="mpl__topImage" cloud_name='novaterra' className="nav__profileMainImageModal" publicId={this.findUser(Meteor.userId()).profilePhoto}><Transformation crop="thumb" /></Image> :
           <img src={`${this.props.route}images/noImage.png`} className="nav__profileMainImageModal"/>}
           <div className="nav__profileUsernameAndDateModal">
           {this.findUser(Meteor.userId()).username.length > 18 ? this.renderSmallDescription() : <div className="nav__profileUsernameModal">{this.findUser(Meteor.userId()).username}</div>}
           <div className="nav__profileJoinedDateModal">{`Joined ${moment(this.findUser(Meteor.userId())).format('MMMM YYYY')}`}</div>
           </div>
           </div>
           <div className="clearBoth"></div>
           <div className="nav__profileBottomLinksModal">
           <div className="floatLeft nav__modalFloatLeftSpacing">
           <div className="nav__profileExplore"><FontAwesomeIcon icon={['fas', 'book-reader']} className={`${this.state.currentPage === 'explore' ? 'nav__currentProfileIcon' : 'nav__profileIcon'}`} /><Link className={`${this.state.currentPage === 'explore' ? 'nav__currentProfileLink' : 'nav__profileLink'}`} to="/explore">Explore</Link></div>
           <div className="clearBoth"></div>
           <div className="nav__profileProfile"><FontAwesomeIcon icon={['fas', 'user-circle']} className={`${this.state.currentPage === 'profile'  ? 'nav__currentProfileIcon' : 'nav__profileIcon'}`} /><Link className={`${this.state.currentPage === 'profile' ? 'nav__currentProfileLink' : 'nav__profileLink'}`} to="/profile">Profile</Link></div>
           <div className="clearBoth"></div>
           <div className="nav__profileProfile"><FontAwesomeIcon icon={['fas', 'search']} className={`${this.state.currentPage === 'search'  ? 'nav__currentProfileIcon' : 'nav__profileIcon'}`} /><Link className={`${this.state.currentPage === 'search' ? 'nav__currentProfileLink' : 'nav__profileLink'}`} to="/search">Search</Link></div>
           <div className="clearBoth"></div>
           </div>
           <div className="floatLeft">

           <div className="nav__profileExplore" onClick={() => this.setState({ notificationsOn: true })}><FontAwesomeIcon icon={['fas', 'heart']} className='nav__profileIcon' /><a className='nav__profileLink'>Notifications</a>{this.notificationsLeftToSee() > 0 ? <div><FontAwesomeIcon icon={['fas', 'circle']} className={`nav__profileNotificationSmallIcon`} /><div className={`${this.notificationsLeftToSee() > 9 ? 'nav__notificationModalNumLarge' : 'nav__notificationModalNum'}`}>{this.notificationsLeftToSee() > 99 ? '99' : `${this.notificationsLeftToSee()}` }</div></div> : undefined}</div>
           <div className="clearBoth"></div>
           <div className="nav__profileSettings"><FontAwesomeIcon icon={['fas', 'cogs']} className={`${this.state.currentPage === 'settings' ? 'nav__currentProfileIcon' : 'nav__profileIcon'}`}/><Link className={`${this.state.currentPage === 'settings' ? 'nav__currentProfileLink' : 'nav__profileLink'}`} to="/settings">Settings</Link></div>
           <div className="clearBoth"></div>
           <div className="nav__profileHelp"><FontAwesomeIcon icon={['fas', 'question-circle']} className={`${this.state.currentPage === 'faq' ? 'nav__currentProfileIcon' : 'nav__profileIcon'}`} /><Link className={`${this.state.currentPage === 'faq' ? 'nav__currentProfileLink' : 'nav__profileLink'}`} to="/faq">Help</Link></div>
           </div>
           {this.renderAdminIcon()}
           <div className="clearBoth"></div>
           </div>

           {/* <div className="navlinks_plusMarginTopAndBottom1"></div>
           <Link className="navLinks" to="/bookmarks">Bookmarks</Link>
           <br/> */}
           <div className="navlinks_plusMarginTopAndBottom1"></div>
           <div className="nav__logoutButton" onClick={() => {this.handleLogout()}}>Logout</div>
           </div>
         }


    </Modal>
    </div>
  );
}
}
