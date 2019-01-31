import React from 'react';
import { withTracker } from 'meteor/react-meteor-data';
import { Link } from 'react-router-dom';
// import sendReset from '../../server/sendResetEmail';
import { Meteor } from 'meteor/meteor';
import { Accounts } from 'meteor/accounts-base';

export class ForgotPassword extends React.Component {
constructor(props) {
super(props);
this.state = {
error: '',
success: ''
};
}
onSubmit(e) {
e.preventDefault();

// let email = this.refs.email.value.trim();
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
  render() {
    return (
      <div>
        <div className="floatLeft" width="350">
        <h2>Pasword Reset</h2>
        <hr className="flex"/>
        <br className="clearBoth"/>


        {this.state.error ? <p>{this.state.error}</p>: undefined} {this.state.success ? <p>{this.state.success}</p> : undefined}
        {!this.state.error && !this.state.success ? <p> Please enter your account's email to recover your password </p> : undefined}

        {/* {this.renderMessage()} */}

        <form onSubmit={this.onSubmit.bind(this)} noValidate className="boxed-view__form">
        <p>Email</p>
        <input type="email" ref="email" name="email"/>

        <br className="clearBoth"/>
        <button className="button">Send</button>
        </form>

        <hr className="flex"/>
        <br className="clearBoth"/>
        <p>Remember Your Password? <Link to="/login">Login</Link></p>
        </div>
      </div>
    );
  }
}

export default withTracker(() => {

return {

};
})(ForgotPassword);
