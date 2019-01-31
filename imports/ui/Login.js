import React from 'react';
import { withTracker } from 'meteor/react-meteor-data';
import OAuthLoginButtons from '../ui/Components/OAuthLoginButtons';
import { Link } from 'react-router-dom';

import Navbar from './Components/Navbar';
import Footer from './Components/Footer';

import { browserHistory } from 'react-router';

import createBrowserHistory from 'history/createBrowserHistory';

browserHistory = createBrowserHistory();

export class Login extends React.Component {
constructor(props) {
super(props);
this.state = {
error: ''
};
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
          {this.state.users ?
      <div>
        <Navbar route={''} users={this.state.users} />

        <div className="login__background">
        <div className="login__mobileView">

        <div className="floatLeft login__leftContainer" width="350">
        <div className="login__topTitleLogin">Log in <Link className="login__topTitleSignup" to="/signup"> / Sign up</Link></div>
        <hr className="flex login__hrTop"/>
        <br className="clearBoth"/>

        <span onClick={Meteor.loginWithFacebook}><img src="images/loginButtons/facebook.svg" className="floatLeft" height="18" width="18"/><p>Login With Facebook</p></span>
        <span onClick={Meteor.loginWithGoogle}><img src="images/loginButtons/google.svg" className="floatLeft" height="18" width="18"/><p>Login With Google</p></span>

        {this.state.error ? <div className="login__errorBox"><p>{this.state.error}</p></div> : undefined}

        <form onSubmit={this.onSubmit.bind(this)} noValidate className="boxed-view__form">
        <div className="login__rightSubtitle">Email</div>
        <input type="email" ref="email" name="email" onChange={() => { this.resetError()}}className="settings__mainAuthorTextArea floatLeft" />

        <div className="login__rightSubtitle">Password</div>
        <input type="password" ref="password" name="password" onChange={() => { this.resetError()}} className="settings__mainAuthorTextArea floatLeft" />

        <br className="clearBoth"/>
        <button className="login__loginButton">Login</button>
        </form>

        <br/>
        <Link to="/forgot-password" className="link login__forgotPasword">Forgot Your Password?</Link>

        <hr className="flex login__hrBottom"/>
        <br className="clearBoth"/>
        <p>Don't Have an Account? <Link className="link" to="/signup">Sign up</Link></p>
        </div>

        <div className="clearBoth"></div>
        <div className="login__veryBottomSpacing"></div>
        </div></div>

        <Footer/>
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
