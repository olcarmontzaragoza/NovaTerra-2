import React from 'react';
import { withTracker } from 'meteor/react-meteor-data';
import { Link } from 'react-router-dom';

import Navbar from './Components/Navbar';
import Footer from './Components/Footer';

import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { far } from '@fortawesome/free-regular-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';

library.add(fas);
library.add(far);

import OurCharities from './Components/Mission/OurCharities';
import OurMission from './Components/Mission/OurMission';
import OurGoal from './Components/Mission/OurGoal';
import OurTeam from './Components/Mission/OurTeam';
import OurFinances from './Components/Mission/OurFinances';

export class Mission extends React.Component {
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
document.title = `NovaTerra - Mission`;
}
render() {
    return (
      <div>
      <meta name="viewport" content="initial-scale=1"></meta>
          {this.state.users ?
            <div>
            <Navbar route={''} users={this.state.users} />
            <OurMission/>
            <OurGoal/>
            <OurCharities/>
            <OurFinances/>
            <OurTeam/>
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
})(Mission);
