import React from 'react';
import { withTracker } from 'meteor/react-meteor-data';
import { Link } from 'react-router-dom';
// import sendReset from '../../server/sendResetEmail';
import { Meteor } from 'meteor/meteor';
import { Accounts } from 'meteor/accounts-base';

import Navbar from './Components/Navbar';
import Footer from './Components/Footer';

export class ForgotPassword extends React.Component {
constructor(props) {
super(props);
this.state = {
error: '',
success: ''
};
}
onSubmit() {

let email = this.refs.email.value.trim();

if (email) {

let user = Meteor.users.findOne({ email });

if (!user) {
this.setState({ error: 'Email Not Found' });
}

process.env.MAIL_URL = 'smtp://postmaster@www.novaterra.earth:cb9f81ffffb7ee1610a7a5c49b69832b-c8c889c9-bbf6cbca@smtp.mailgun.org:587';

Accounts.forgotPassword(email, () => {
  this.setState({ success: 'The Email Has Been Sent.' });
});


//
// if (Meteor.isServer) {
//   Meteor.startup(function() {
//     process.env.MAIL_URL="smtp:";
//
//     Accounts.config({
//       sendVerificationEmail:true
//     });
//   });
}
}
componentDidMount() {
    Meteor.subscribe('allUsers', () => {
      Tracker.autorun(() => {
        let findUser = Meteor.users;
        this.setState({ users: Meteor.users });
        });
      });
      document.title = `NovaTerra - Forgot Password`;
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

      <div className="floatLeft feedback__leftContainer">
      <div className="contact__topTitleLogin">Forgot Password</div>
      <hr className="flex feedback__hrTopFP"/>
      <br className="clearBoth"/>

      {this.state.error ? <div className="fp__positioningErrorBox"><div className="login__errorBox"><p>{this.state.error}</p></div></div> : undefined} {this.state.success ? <div className="contact__successBox"><div className="contact__successBoxInnerMargins">{this.state.success}</div></div> : undefined}
      {!this.state.error && !this.state.success ? <p className="forgotPasswordTopMessage"> Please enter your account's email to recover your password. </p> : undefined}

      {/* {this.renderMessage()} */}

      <div className={`login__rightSubtitle ${this.state.error === 'Did you forget your add your first name?' || this.state.error === "First Name shouldn't be more than characters" ? 'signup__redLabel' : ''}`}>Email</div>
      <input type="email" ref="email" name="email" onChange={() => { this.resetError()}} className={`settings__mainAuthorTextArea floatLeft ${this.state.error === 'Did you forget your add your first name?' || this.state.error === "First Name shouldn't be more than characters" ? 'signup__passwordRed' : ''}`} />
      <br className="clearBoth"/>

      <div className="fp__send" onClick={() => this.onSubmit()}>Send</div>

      <hr className="flex login__hrBottomFP"/>
      <br className="clearBoth"/>
      <p>Remember Your Password? <Link className="link" to="/login">Login</Link></p>
      <div className="forgotPasswordBottomSpacing"></div>
      </div></div></div>

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
})(ForgotPassword);
