import React from 'react';
import { withTracker } from 'meteor/react-meteor-data';
import { Meteor } from 'meteor/meteor';
import { Accounts } from 'meteor/accounts-base';

export class ResetPasswordLink extends React.Component {

  onSubmit(e) {
  e.preventDefault();


  // Accounts.resetPassword(token, newPassword, () => {
  //
  // });
  // }
componentDidMount() {
  document.title = `NovaTerra - Reset Password`;
}
  render() {
    return (
      <div>
          <h1>This is the a reset password page page</h1>

      </div>
    );
  }
}

export default withTracker(() => {
return {

};
})(ResetPasswordLink);
