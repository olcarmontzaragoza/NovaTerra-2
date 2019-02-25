import React from 'react';
import { Link } from 'react-router-dom';
import { withTracker } from 'meteor/react-meteor-data';
// import { Accounts } from 'meteor/accounts-base'
import Blaze from 'meteor/gadicc:blaze-react-component';
import OAuthLoginButtons from '../ui/Components/OAuthLoginButtons';
import moment from 'moment';
import { funcReplace } from '../routes/routes.js';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';

import FacebookLogin from 'react-facebook-login';

import Navbar from './Components/Navbar';
import Footer from './Components/Footer';

// import { Meteor } from 'meteor/meteor';

// import ServiceConfiguration from 'meteor/service-configuration';

// import Recaptcha from 'reaptcha';

import ReCAPTCHA from "react-google-recaptcha";

Meteor.subscribe('allUsers');
//
// ServiceConfiguration.configurations.upsert(
//   { service: "google" },
//   { $set: { clientId: "177612273728-bjmjnubs1o8iu4fv4279k6asn0egpi4j.apps.googleusercontent.com", secret: "hKHJ1DDgZz-VhQV7WT4iCB_j" } }
// );

// Accounts.loginServiceConfiguration.remove({
//   service: "google"
// });
// Accounts.loginServiceConfiguration.insert({
//   service: "google",
//   clientId: "177612273728-bjmjnubs1o8iu4fv4279k6asn0egpi4j.apps.googleusercontent.com",
//   secret: "hKHJ1DDgZz-VhQV7WT4iCB_j"
// });

export class Signup extends React.Component {
constructor(props) {
super(props);
this.state = {
error: '',
termsOfUse: false,
recaptcha: false,
};
this.onVerify = this.onVerify.bind(this);
}
onVerify() {

}
gitHubLogin() {

  // Accounts.createUser({ email, password, username, joinDate: moment().valueOf() }, (err) => {
  Meteor.loginWithGithub({
      requestPermissions: ['user'],
  }, function (err) {
    console.log('is there an error?', err);
  });
}
twitterLogin() {
  Meteor.loginWithTwitter({
      requestPermissions: ['user'],
  }, function (err) {

  });
}
googleLogin() {
  Meteor.loginWithGoogle({
  }, function (err) {

  });
}
findUsersWithUrl(url) {
  console.log('count', this.state.users.find({ profileUrl: url }).count());
  return this.state.users.find({ profileUrl: url }).count();
}
onSubmit(e) {
e.preventDefault();

let firstName = this.refs.firstName.value.trim();
let lastName = this.refs.lastName.value.trim();
let username = `${firstName} ${lastName}`;

let email = this.refs.email.value.trim();
let password = this.refs.password.value.trim();

let termsAccepted = this.refs.termsAccepted.checked;
let passwordConfirmation = this.refs.passwordConfirmation.value.trim();

let recaptcha = this.state.recaptcha;

if (!recaptcha) {
this.setErrorScrollTop();
return this.setState({ error: 'Please complete the Recaptcha' });
}

if (firstName.length < 1) {
this.setErrorScrollTop();
return this.setState({ error: 'Did you forget your add your first name?' });
}

if (lastName.length < 1) {
this.setErrorScrollTop();
return this.setState({ error: 'Did you forget to add your last name?' });
}

if (firstName.length > 15) {
this.setErrorScrollTop();
return this.setState({ error: "First Name shouldn't be more than characters" });
}

if (lastName.length > 15) {
this.setErrorScrollTop();
return this.setState({ error: "Last Name shouldn't be more than 15 characters" });
}

if (password.length < 6)  {
this.setErrorScrollTop();
return this.setState({ error: 'Try making your password least 6 characters' });
}

if (password !== passwordConfirmation)  {
this.setErrorScrollTop();
return this.setState({ error: "Make sure your passwords match" });
}

if (!termsAccepted)  {
this.setErrorScrollTop();
return this.setState({ error: `Make sure you accept our Privacy Policy` });

}

// let following = [], followers = [], bookmarks: [], messageShow: [], description:'', profilePhoto:'';

Accounts.createUser({ email, password, username, joinDate: moment().valueOf() }, (err) => {
    if (err) {
      console.log('err', err);
      if (err.reason === 'Email must be a valid email address [400]') {
        err.reason = 'Are you sure your email Address is correct?';
      }  else if (err.reason === 'Email must be a valid email address') {
        err.reason = 'Are you sure your email Address is correct?';
      }
      else if (err.reason === 'Internal server error') {
        err.reason = 'Are you sure your email Address is correct?';
      } else if (err.reason === 'Error, too many requests. Please slow down. You must wait 5 seconds before trying again.') {
        err.reason === 'Too many requests. Please wait 5 seconds.'
      }
      if (err.reason === 'Email already exists.') {
        err.reason = "I'm afraid this email already exists";
      }
        this.setErrorScrollTop();
        this.setState({error: err.reason});
    } else {
        this.setState({error: ''});

        let user = this.state.users.findOne({ _id: Meteor.userId() });

        let profileUsername = user.username.replace(/\s+/g, '-').toLowerCase();

        let profileUrl = `/profile/${profileUsername}`;

        if (this.findUsersWithUrl(profileUrl) !== 0) {
          let count = 0;
          while (this.findUsersWithUrl(profileUrl) === 1) {
            count += 1;
            profileUrl = `/profile/${profileUsername}-${count}}`;
          }
        }

        let followers = [], following = [], storiesViewed = [];
        let description = '';

        Meteor.call('users.update', user._id, { profileUrl, followers, following, description, firstName, lastName, storiesViewed });

        let details = {
          description: "Welcome to NovaTerra! Click 'learn more' to learn more about us.",
          thisUserId: user._id,
          created: moment().valueOf(),
          type: 'featureEvent',
          messageTitle: "Welcome to NovaTerra!",
          messageBody: "We are very glad that you decided to join the NovaTerra community! If you are not familiar with NovaTerra, NovaTerra is a social media platform where anyone can share stories, which can be ideas, experiences or anything they may want to share. All of this contributes to our goal of raising 50,000 euros for environmental charities by 2020.",
          messageImage: 'novaterraSignup'
        };

        Meteor.call('notifications.insert', details);

        setTimeout(
          function() {
          console.log(profileUrl, this.state.users.findOne({ _id: Meteor.userId() }).profileUrl);
          }
          .bind(this),
          50
        );

        // Accounts.sendVerificationEmail(this.userId, Meteor.user.emails[0].address);
    }
});
}
componentDidMount() {

  Meteor.subscribe('allUsers', () => {
    Tracker.autorun(() => {
      let findUser = Meteor.users;
      this.setState({ users: Meteor.users });
      });
    });
    document.title = `NovaTerra - Signup`;
}
setPageScrollTop() {
  console.log('ran window scroll');
  window.scrollTo(0, 185);
}
setErrorScrollTop() {
  window.scrollTo(0, 550);
}
resetError() {
this.setState({ error: '' });
}
continueWithFacebook() {

}
reChange(e) {
  this.setState({ recaptcha: e });
}
render() {
    return (
      <div>
      <meta name="viewport" content="initial-scale=1"></meta>
      {this.state.users ?
      <div>
      <Navbar route={''} users={this.state.users}/>

      <div className="login__background">
      <div className="login__mobileView">

      <div className="floatLeft login__leftContainer" width="350">
      <div className="login__topTitleLogin">Sign up <Link className="login__topTitleSignup" to="/login"> / Log in</Link></div>
      <hr className="flex login__hrTop"/>
      <br className="clearBoth"/>

    {/*  <FacebookLogin
   appId="1593752047396482"
   autoLoad={true}
   fields="name,email,picture"
   callback={this.continueWithFacebook()}
 />*/}

 {/*
   cssClass=""
   icon="fa-facebook"
 */}

      {/*
      <span><img src="images/loginButtons/facebook.svg" className="floatLeft" height="18" width="18"/><p>Signup With Facebook</p></span>
      <span><img src="images/loginButtons/google.svg" className="floatLeft" height="18" width="18"/><p>Signup With Google</p></span>

      <Blaze template="loginButtons" />
  */}

      {/* <div onClick={() => this.googleLogin()} className="signup__loginWithGoogle"><FontAwesomeIcon icon={['fab', 'google-plus-g']} className={`signup__loginWithGoogleIcon`} /><div className="signup__loginWithGoogleText">Sign in With Google</div></div> */}
      <div onClick={() => this.twitterLogin()} className="signup__loginWithTwitter"><FontAwesomeIcon icon={['fab', 'twitter']} className={`signup__loginWithGoogleIcon`} /><div className="signup__loginWithGoogleText">Sign in With Twitter</div></div>
      <div onClick={() => this.gitHubLogin()} className="signup__loginWithGithub"><FontAwesomeIcon icon={['fab', 'github']} className={`signup__loginWithGoogleIcon`} /><div className="signup__loginWithGoogleText">Sign in With Github</div></div>

      {this.state.error ? <div className="login__errorBox signup__errorMarginTop"><p>{this.state.error}</p></div> : undefined}

      <form onSubmit={this.onSubmit.bind(this)} noValidate className="boxed-view__form">


         <div className={`login__rightSubtitle ${this.state.error === 'Did you forget your add your first name?' || this.state.error === "First Name shouldn't be more than characters" ? 'signup__redLabel' : ''}`}>First Name</div>
         <input type="name" ref="firstName" name="first-name" maxLength="15" onChange={() => { this.resetError()}} className={`floatLeft ${this.state.error === 'Did you forget your add your first name?' || this.state.error === "First Name shouldn't be more than characters" ? 'login__mainAuthorTextAreaError' : 'login__mainAuthorTextArea'}`} />

         <div className={`login__rightSubtitle ${this.state.error === 'Did you forget to add your last name?' || this.state.error === "Last Name shouldn't be more than 15 characters" ? 'signup__redLabel' : ''}`}>Last Name</div>
         <input type="name" ref="lastName" name="last-name" maxLength="15" onChange={() => { this.resetError()}} className={`floatLeft ${this.state.error === 'Did you forget to add your last name?' || this.state.error === "Last Name shouldn't be more than 15 characters" ? 'login__mainAuthorTextAreaError' : 'login__mainAuthorTextArea'}`} />

         <div className={`login__rightSubtitle ${this.state.error === 'Are you sure your email Address is correct?' || this.state.error === "I'm afraid this email already exists" ? 'signup__redLabel' : ''}`}>Email</div>
         <input type="email" ref="email" name="email" onChange={() => { this.resetError()}} className={`floatLeft ${this.state.error === 'Are you sure your email Address is correct?' || this.state.error === "I'm afraid this email already exists" ? 'login__mainAuthorTextAreaError' : 'login__mainAuthorTextArea'}`} />

          <div className={`login__rightSubtitle ${this.state.error === 'Try making your password least 6 characters' ? 'signup__redLabel' : ''}`}>Password</div>
         <input type="password" ref="password" name="password" onChange={() => { this.resetError()}} className={`floatLeft ${this.state.error === 'Try making your password least 6 characters' ? 'login__mainAuthorTextAreaError' : 'login__mainAuthorTextArea'}`} />

         <div className={`login__rightSubtitle ${this.state.error === 'Make sure your passwords match' ? 'signup__redLabel' : ''}`}>Password Confirmation</div>
         <input type="password" ref="passwordConfirmation" name="password" onChange={() => { this.resetError()}} className={`floatLeft ${this.state.error === 'Make sure your passwords match' ? 'login__mainAuthorTextAreaError' : 'login__mainAuthorTextArea'}`} />

         <div className="signup__recaptchaPositioning">
        <ReCAPTCHA sitekey="6LfMEpMUAAAAAAo_dmGQX26p_vFsLr_IdmTvzRC_" onChange={() => this.reChange.bind(this)} />
        </div>

      <div className="signup__privacyPolicyMargins">
      <div className="checkmark_container"><div onClick={() => { this.setState({ termsOfUse: !this.state.termsOfUse })}} className="floatLeft inputSignupPage cursorDefault">I accept NovaTerra's <br className="signupPrivacyBr"/> <Link className="signupTermsLink" to="/privacy-policy">Privacy Policy</Link><input onClick={() => { this.setState({ termsOfUse: !this.state.termsOfUse })}} checked={this.state.termsOfUse} className="signUpPageMarginRight" ref="termsAccepted" type="checkbox" name="acceptedTerms"/><span className={`checkmark ${this.state.error === "Make sure you accept our Privacy Policy" ? 'signup__checkboxRed' : ''}`}></span></div></div>
      </div>

      <br className="clearBoth"/>
      <button className="login__loginButton signup__belowSubmitButtonMarginBottom">Sign up</button>
      </form>

      <hr className="flex login__hrBottom"/>
      <br className="clearBoth"/>
      <p className="login__smalllBelowThings">Already Have an Account? <Link className="link" to="/login">Log in</Link></p>
      </div>

      <div className="clearBoth"></div>
      <div className="login__veryBottomSpacing"></div>
      </div></div>

      <Footer route='' />
      </div>
      : undefined }
    </div>
    );
  }
}


export default withTracker(() => {
return {

};
})(Signup);
