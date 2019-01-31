import React from 'react';
import { withTracker } from 'meteor/react-meteor-data';
import { Meteor } from 'meteor/meteor';

export class EmailVerificationMessage extends React.Component {
constructor(props) {
super(props);
  this.state = {
show: true,
};
}
checkIfVerified() {
  if (!!Meteor.userId()) {
  let user = this.props.users.findOne({ _id: Meteor.userId() });
  console.log('user verified', user.emails[0].verified);
  return !user.emails[0].address.verified;
  }
  return false;
}
renderVerifiedMessage() {
  console.log('ran');
  if (Meteor.userId) {
    console.log('logged in logged in');
    // if (!Meteor.user().emails[0].verified) {
    return <p>Thank you for joining NovaTerra. In order to make use of your account, however, you will need to verify it first.</p>;
    // }

    // if (Meteor.isClient) {
    //   Template.SendAnyEmail.onCreated(function() {
    //     if (Accounts._verifyEmailToken) {
    //       Accounts.verifyEmail(Accounts._verifyEmailToken, function(err) {
    //         if (err != null) {
    //           if (err.message = 'Verify email link expired [403]') {
    //             console.log('Sorry this verification link has expired.')
    //           }
    //         } else {
    //           console.log('Thank you! Your email address has been confirmed.')
    //         }
    //       });
    //     }
    //   });
    // }
    //
    // if (Meteor.isServer) {
    //   Meteor.startup(function () {
    //     smtp = {
    //       username: 'user@example.com',
    //       password: 'password',
    //       server: 'mail.example.com',
    //       port: 465
    //     };
    //
    //     process.env.MAIL_URL = 'smtp://' + encodeURIComponent(smtp.username) + ':' + encodeURIComponent(smtp.password) + '@' + encodeURIComponent(smtp.server) + ':' + smtp.port;
    //
    //     Accounts.emailTemplates = {
    //       from: 'Administrator <user@example.com>',
    //       siteName: 'YourSite',
    //       verifyEmail: {
    //         subject: function(user) {
    //           return 'Verification email from Example.com';
    //         },
    //         text: function(user, url) {
    //           return 'Hi,\n' +
    //             'Please open the link below to verify your account on Example.com:\n' + url;
    //         }
    //       }
    //     };
    //   });
    //
    //   Accounts.onCreateUser(function(options, user) {
    //     Meteor.setTimeout(function() {
    //       Accounts.sendVerificationEmail(user._id);
    //     }, 2 * 1000);
    //     return user;
    //   });
    // }


  }
  return undefined;
}
  render() {
    return (
      <div>
        {this.checkIfVerified() ?
          <div>
          {this.state.show ?
            <div className="emailVerificationMessage">
                <div className="floatLeft emailVerificationMessage__text">{this.renderVerifiedMessage()}</div>
                <div className="emailVerification__closebtn" onClick={() => { this.setState({ show: false }) }}>&times;</div>
            </div>
          :  undefined }
          </div>
      : undefined }
        <div className="clearBoth"></div>
    </div>
    );
  }
}

export default withTracker(() => {
return {

};
})(EmailVerificationMessage);
