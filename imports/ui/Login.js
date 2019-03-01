import React from 'react';
import { withTracker } from 'meteor/react-meteor-data';
import OAuthLoginButtons from '../ui/Components/OAuthLoginButtons';
import { Link } from 'react-router-dom';

import Navbar from './Components/Navbar';
import Footer from './Components/Footer';

import ReCAPTCHA from "react-google-recaptcha";

import { browserHistory } from 'react-router';

import createBrowserHistory from 'history/createBrowserHistory';

browserHistory = createBrowserHistory();

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';

export class Login extends React.Component {
constructor(props) {
super(props);
this.state = {
error: ''
};
}
gitHubLogin() {
  Meteor.loginWithGithub({
      requestPermissions: ['user'],
      loginStyle: "popup",
  }, function (err) {

  });
}
twitterLogin() {
  Meteor.loginWithTwitter({
      requestPermissions: ['user'],
      loginStyle: "popup",
  }, function (err) {

  });
}
googleLogin() {
  Meteor.loginWithGoogle({
      requestPermissions: ['user'],
      loginStyle: "popup",
  }, function (err) {

  });
}
onSubmit(e) {
e.preventDefault();

let email = this.refs.email.value.trim();
let password = this.refs.password.value.trim();

Meteor.loginWithPassword( { email }, password, (err) => {
    if (err) {
      if (err.reason === 'Error, too many requests. Please slow down. You must wait 5 seconds before trying again.') {
        err.reason === 'Too many requests. Please wait 5 seconds.'
      }
        this.setState({error: 'Unable to log in. Check email and password' });
    }
    else {
        this.setState({error: ''});
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
    this.setScrollTop();
    document.title = `NovaTerra - Login`;
}
setScrollTop() {
  window.scrollTo(0, 530);
}
resetError() {
this.setState({ error: '' });
}
render() {
    return (
      <div>
      <meta name="viewport" content="initial-scale=1"></meta>
          {this.state.users ?
      <div>
        <Navbar route={''} users={this.state.users} />

        <div className="login__background">
        <div className="login__mobileView">

        <div className="floatLeft login__leftContainer" width="350">
        <div className="login__mobileInnerPadding">
        <div className="login__topTitleLogin">Log in <Link className="login__topTitleSignup" to="/signup"> / Sign up</Link></div>
        <hr className="flex login__hrTop"/>
        <br className="clearBoth"/>

        {/* <div onClick={() => this.googleLogin()} className="signup__loginWithGoogle"><FontAwesomeIcon icon={['fab', 'google-plus-g']} className={`signup__loginWithGoogleIcon`} /><div className="signup__loginWithGoogleText">Login With Google</div></div> */}
        <div onClick={() => this.twitterLogin()} className="signup__loginWithTwitter"><FontAwesomeIcon icon={['fab', 'twitter']} className={`signup__loginWithGoogleIcon`} /><div className="signup__loginWithGoogleText">Login With Twitter</div></div>
        <div onClick={() => this.gitHubLogin()} className="signup__loginWithGithub"><FontAwesomeIcon icon={['fab', 'github']} className={`signup__loginWithGoogleIcon`} /><div className="signup__loginWithGoogleText">Login With Github</div></div>

        {this.state.error ? <div className="login__errorBox"><p>{this.state.error}</p></div> : undefined}

        <form onSubmit={this.onSubmit.bind(this)} noValidate className="boxed-view__form">

        <label className="login__rightSubtitle">Email</label>
        <input type="email" ref="email" name="email" onChange={() => { this.resetError()}} className="login__mainAuthorTextArea floatLeft" />

        <div className="login__rightSubtitle">Password</div>
        <input type="password" ref="password" name="password" onChange={() => { this.resetError()}} className="login__mainAuthorTextArea floatLeft" />

        <div className="signup__recaptchaPositioning">
       <ReCAPTCHA sitekey="6LfMEpMUAAAAAAo_dmGQX26p_vFsLr_IdmTvzRC_" onChange={() => this.reChange.bind(this)} />
       </div>

        <br className="clearBoth"/>
        <button className="login__loginButton">Login</button>
        </form>

        <br/>
        <Link to="/forgot-password" className="link login__forgotPasword login__smalllBelowThings">Forgot Your Password?</Link>

        <hr className="flex login__hrBottom"/>
        <br className="clearBoth"/>
        <p className="login__smalllBelowThings">Don't Have an Account? <Link className="link" to="/signup">Sign up</Link></p>
        </div>

        <div className="clearBoth"></div>
        <div className="login__veryBottomSpacing"></div>
        </div></div>
        </div>

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
})(Login);
