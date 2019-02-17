import React from 'react';
import { withTracker } from 'meteor/react-meteor-data';

import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';

export class TermsOfUse extends React.Component {
constructor(props) {
super(props);
this.state = {

};
}
componentDidMount() {
    Meteor.subscribe('allUsers', () => {
      Tracker.autorun(() => {
        let findUser = Meteor.users;
        this.setState({ users: Meteor.users });
        });
      });
document.title = `NovaTerra - Terms of Use`;
  }
render() {
    return (
      <div>
      <meta name="viewport" content="initial-scale=1"></meta>
      {this.state.users ?
      <div>
      <Navbar route={''} users={this.state.users} />

      <div className="login__background">
      <div className="privacyP__mobileView">

      <div className="floatLeft privacyP__leftContainer">
      <div className="contact__topTitleLogin">Privacy Policy</div>
      <hr className="flex privacyPolicy__hrTop"/>
      <br className="clearBoth"/>

<div className="privacyPolicy__body">

    </div></div>      </div></div>

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
})(TermsOfUse);
