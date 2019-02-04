import React from 'react';
import { withTracker } from 'meteor/react-meteor-data';
import { Link } from 'react-router-dom';
import { funcReplace } from '../../routes/routes.js';
import SimpleSchema from 'simpl-schema';
import { Accounts } from 'meteor/accounts-base';

import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { fas } from '@fortawesome/free-solid-svg-icons';

import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';

Meteor.subscribe('allUsers');

export class Settings extends React.Component {
constructor(props) {
  super(props);
  this.state = {
    selected: 1,
    error: '',
    success: '',
  };
}
getTitle() {
  if (this.state.selected === 1) {
    return 'Profile';
  } else if (this.state.selected === 2) {
    return 'Privacy';
  } else if (this.state.selected === 3) {
    return 'Help';
  }
}
handleLogout() {
Accounts.logout();
funcReplace('/login');
}
componentDidMount() {
  Meteor.subscribe('allUsers', () => {
    Tracker.autorun(() => {
       let findUser = Meteor.users.findOne({ _id: Meteor.userId() });           // Meteor.users.find().fetch();
       let findUsers = Meteor.users;
      this.setState({ user: Meteor.users.findOne({ _id: Meteor.userId() }) });
      this.setState({ users: Meteor.users });
      });
    });
document.title = `NovaTerra - Settings`;
}
findUsersWithUrl(url) {
  console.log('count', this.state.users.find({ profileUrl: url }).count());
  return this.state.users.find({ profileUrl: url }).count();
}
saveProfileChanges() {

this.setState({ error: '' });
this.setState({ success: '' });

let firstName = this.refs.firstName.value.trim();
let lastName = this.refs.lastName.value.trim();
let username = `${firstName} ${lastName}`;
let email = this.refs.userEmail.value.trim();

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

// let password = this.refs.userPassword.value;

if (firstName.length < 1) {
return this.setState({ error: 'Did you forget your add your first name?' });
}

if (lastName.length < 1) {
return this.setState({ error: 'Did you forget to add your last name?' });
}

if (firstName.length > 15) {
return this.setState({ error: "First Name shouldn't be more than 15 characters" });
}

if (lastName.length > 15) {
return this.setState({ error: "Last Name shouldn't be more than 15 characters" });
}

console.log('ttt', this.state.users.findOne({ _id: Meteor.userId() }).emails[0].address);


// if (this.state.users.findOne({ email }))

// if (password.length !== 0) {
// if (password.length < 6)  {
// return this.setState({ error: 'Try making your password least 6 characters' });
// }
// }

Meteor.call('users.validateEmail', email, (err) => {
    if (err) {
      if (err.reason === 'Email must be a valid email address [400]') {
        err.reason = 'Are you sure your email Address is correct?';
      }  else if (err.reason === 'Internal server error') {
        err.reason = 'Are you sure your email Address is correct?';
      } else if (err.reason === 'Email already exists.') {
        err.reason = "I'm afraid this email already exists";
      }
      this.setState({error: err.reason });
    } else {
        this.setState({error: '' });
    }
});

setTimeout(
  function() {
    if (!this.state.error) {
    //   if (password.length === 0) {
    //   Meteor.call('users.update', Meteor.userId(), { username, email, firstName, lastName });
    //   this.setState({ success: 'Your changes have been successfully saved'});
    // } else {

      // if (this.refs.userEmail.value !== this.state.user.emails[0].address) {
      //   Accounts.removeEmail(Meteor.userId(), this.state.user.emails[0].address);
      //   Accounts.addEmail(Meteor.userId(), email);
      // }

      Meteor.call('users.update', Meteor.userId(), { username, firstName, lastName });
      this.setState({ success: 'Your changes have been successfully saved'});
    }
    // }
  }
  .bind(this),
  100
);

}
resetSucessAndError() {
this.setState({ success: '' });
this.setState({ error: '' });
}
cancelProfileChanges() {

this.refs.firstName.value = this.state.user.firstName;
this.refs.lastName.value = this.state.user.lastName;
this.refs.userEmail.value = this.state.user.emails[0].address;
// this.refs.userPassword.value = '';

this.resetSucessAndError();

}
checkIfVerified() {
  let user = this.state.users.findOne({ _id: Meteor.userId() });
  console.log('user verified', user.emails[0].address.verified);
  return !user.emails[0].address.verified;
}
returnNormalRender() {
  return (
    <div>
    <meta name="viewport" content="initial-scale=1"></meta>
    <Navbar route={''} users={this.state.users} />

    <div className="settings__mainMargins"></div>

    <div className="settings__centeringTopDiv">

    <div className="settings__leftBox">
    <button onClick={() => { this.setState({ selected: 1 }) }} className={`settings__boxButton ${this.state.selected === 1 ? `settings__boxButtonSelected` : ''}`}><FontAwesomeIcon icon={['fas', 'user-circle']} className="settings__sideIcon" aria-hidden="true" /><div className="settings__boxText">Profile</div></button>
    <div className="settings__boxclearBoth"></div>
    <button onClick={() => { this.setState({ selected: 2 }) }} className={`settings__boxButton ${this.state.selected === 2 ? `settings__boxButtonSelected` : ''}`}><FontAwesomeIcon icon={['fas', 'user-secret']} className="settings__sideIcon" aria-hidden="true" /><div className="settings__boxText">Privacy</div></button>
    <div className="settings__boxclearBoth"></div>
    <button onClick={() => { this.setState({ selected: 3 }) }} className={`settings__boxButton ${this.state.selected === 3 ? `settings__boxButtonSelected` : ''}`}><FontAwesomeIcon icon={['fas', 'question-circle']} className="settings__sideIconHelp" aria-hidden="true" /><div className="settings__boxText">Help</div></button>
    <div className="settings__boxclearBoth"></div>
    <button onClick={() => { this.handleLogout() }} className={`settings__boxButton ${this.state.selected === 4 ? `settings__boxButtonSelected` : ''}`}><FontAwesomeIcon icon={['fas', 'sign-out-alt']} className="settings__sideIconLogout" aria-hidden="true" /><div className="settings__boxText">Log out</div></button>
    </div>

    <div className="settings__leftMobileBox">
    <button onClick={() => { this.setState({ selected: 1 }) }} className={`settings__boxButton ${this.state.selected === 1 ? `settings__boxButtonSelected` : ''}`}><FontAwesomeIcon icon={['fas', 'user-circle']} className="settings__sideIcon" aria-hidden="true" /><div className="settings__boxText">Profile</div></button>
    <div className="settings__boxclearBoth"></div>
    <button onClick={() => { this.setState({ selected: 2 }) }} className={`settings__boxButton ${this.state.selected === 2 ? `settings__boxButtonSelected` : ''}`}><FontAwesomeIcon icon={['fas', 'user-secret']} className="settings__sideIcon" aria-hidden="true" /><div className="settings__boxText">Privacy</div></button>
    <div className="settings__boxclearBoth"></div><div className="settings__boxclearBothMobile"></div>
    <button onClick={() => { this.setState({ selected: 3 }) }} className={`settings__boxButton settings__boxclearLeft ${this.state.selected === 3 ? `settings__boxButtonSelected` : ''}`}><FontAwesomeIcon icon={['fas', 'question-circle']} className="settings__sideIconHelp" aria-hidden="true" /><div className="settings__boxText">Help</div></button>
    <div className="settings__boxclearBoth"></div>
    <button onClick={() => { this.handleLogout() }} className={`settings__boxButton ${this.state.selected === 4 ? `settings__boxButtonSelected` : ''}`}><FontAwesomeIcon icon={['fas', 'sign-out-alt']} className="settings__sideIconLogout" aria-hidden="true" /><div className="settings__boxText">Log out</div></button>
    </div>

    {/* Meteor.users.update({_id:Meteor.user()._id}, { $set: {what you want to update} }); */}


    <div className="settings__rightBox">
    <div className="settings__mainTitle">{this.getTitle()}</div>
    <hr className="settings__mainHr"/>


    { this.state.selected === 1 ?

    <div>
    <div className={`settings__rightSubtitle  ${this.state.error === 'Did you forget your add your first name?' || this.state.error === "First Name shouldn't be more than characters" ? 'signup__redLabel' : ''}`}>First Name</div>
    <input ref='firstName' onChange={() => { this.resetSucessAndError()}} defaultValue={this.state.user.firstName} maxLength="15" className={`settings__mainAuthorTextArea floatLeft ${this.state.error === 'Did you forget your add your first name?' || this.state.error === "First Name shouldn't be more than characters" ? 'signup__passwordRed' : ''}`} />

    <div className="clearBoth"></div>

    <div className={`settings__rightSubtitle ${this.state.error === 'Did you forget to add your last name?' || this.state.error === "Last Name shouldn't be more than 15 characters" ? 'signup__redLabel' : ''}`}>Last Name</div>
    <input ref='lastName' onChange={() => { this.resetSucessAndError()}} defaultValue={this.state.user.lastName} maxLength="15" className={`settings__mainAuthorTextArea floatLeft ${this.state.error === 'Did you forget to add your last name?' || this.state.error === "Last Name shouldn't be more than 15 characters" ? 'signup__passwordRed' : ''}`}/>

    <div className="clearBoth"></div>

    <div className="floatLeft">
    <div className={`settings__rightSubtitle ${this.state.error === 'Are you sure your email Address is correct?' || this.state.error === "I'm afraid this email already exists" ? 'signup__redLabel' : ''}`}>Email Address</div>
    <input ref='userEmail' onChange={() => { this.resetSucessAndError()}} readOnly defaultValue={this.state.user.emails[0].address} maxLength="50" className={`settings__mainAuthorTextArea floatLeft ${this.state.error === 'Are you sure your email Address is correct?' || this.state.error === "I'm afraid this email already exists" ? 'signup__passwordRed' : ''}`} />
    </div>
    { this.checkIfVerified() ?
    <div className="settings__floatLeftVerify">
    <div className="settings__verifyButton">Verify</div>
    </div>
    : undefined }
    <div className="clearBoth"></div>

    {/* <div className={`settings__rightSubtitle ${this.state.error === 'Try making your password least 6 characters' ? 'signup__redLabel' : ''}`}>Password</div>
    <input ref='userPassword' onChange={() => { this.resetSucessAndError()}} type="password" placeholder='Enter a new password here.' maxLength="50" className={`settings__mainAuthorTextArea floatLeft ${this.state.error === 'Try making your password least 6 characters' ? 'signup__passwordRed' : ''}`} /> */}

    <div className="clearBoth settings__marginBottomAboveSave"></div>

    <div className="settings__positioningErrorBox">
   {this.state.error ? <div className="login__errorBox"><p>{this.state.error}</p></div> : undefined}
   {this.state.success ? <div className="login__successBox"><p>{this.state.success}</p></div> : undefined}
    </div>

     <a onClick={() => { this.saveProfileChanges() }} className="settings__editProfile saveCancelMargin">Save</a><a className="settings__slashSaveCancel saveCancelMargin">/</a><a onClick={() => { this.cancelProfileChanges() }} className="settings__cancelProfile">Cancel</a>

  </div>
    : undefined }

    {this.state.selected === 2 ?
    <div className="settings__privacyParagraph">Novaterra only uses the data you enter to enhance your experience. We are completely transparent in all our operations. <br/><br/>Still unsure? Check out our <Link to='/privacy-policy' className="link">privacy policy</Link> or <Link to='/contact' className="link">contact us</Link>.</div>
    : undefined }

    {this.state.selected === 3 ?
    <div className="settings__privacyParagraph">If you have any questions please check out our <Link to='/privacy-policy' className="link">FAQ</Link> to help resolve any issues you may encounter. <br/><br/> However, if you cannot find your question/issue in our FAQ, please don’t hesitate in <Link to='/contact' className="link">contacting us</Link>.</div>
    : undefined }

    </div>

    </div>

    <div className="clearBoth"></div>
    <div className="settings__mainMargins"></div>
    <Footer route='' />
    </div>
  );
}
render() {
    return (
      <div>
      {console.log('state user', this.state.user)}
      {this.state.users ?
        this.returnNormalRender()
        : undefined }
      </div>
    );
  }
}

export default withTracker(() => {
Meteor.subscribe('stories');
return {

};
})(Settings);
