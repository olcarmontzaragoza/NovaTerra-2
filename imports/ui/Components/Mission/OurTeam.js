import React from 'react';
import { withTracker } from 'meteor/react-meteor-data';
import { Link } from 'react-router-dom';

import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { far } from '@fortawesome/free-regular-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';

library.add(fas);
library.add(far);

export class OurTeam extends React.Component {
  render() {
    return (
      <div>
      <div className="mission__ourTeamBox">

        <div className="mission__ourMissionBoxInnerMargins">

        <div className="mission__topContainerMarginTop"></div>

        <div className="mission__topContainers">
        <div className="mission__topContainerInnerMargins">

        <div className="mission__topContainerTopMargins"></div>
        <div className="mission__topContainerTitle">Our Team <span role="img">👥</span></div>
        <div className="mission__topContainerFirstSubHeader">We are a small organisation.</div>
        <div className="mission__topContainerSecondSubHeader">But that doesn’t stop us from wanting to change the world.</div>

        </div></div>

        <div className="mission__ourTeamBackground">

        <div className="mission__ourTeamTopSpacing"></div>

        <div className="mission__ourTeamMember">
        <div className="mission__ourTeamImageLeft">
        <div className="mission__ourTeamBiggerCircle"></div>
        <img src='images/missionPage/ourTeam/oliverCarmont.png' className="mission__ourTeamImageCircle"/>
        </div>
        <div className="mission__ourTeamTextRight">
        <div className="mission__ourTeamMemberName">
        Oliver Carmont
        </div>
        <div className="mission__ourTeamMemberTitle">
        Co-founder
        </div>
        <div className="mission__ourTeamMemberDescription">
        Social entrepreneur 🚀 High school student 👨‍🎓, Full-stack developer, Environmentalist 🌲 and a driver of change.
        </div>
        </div>
        </div>

        <div className="clearBoth"></div>
        <div className="mission__betweenMemberSpacing"></div>

        <div className="mission__ourTeamMember">
        <div className="mission__ourTeamImageLeft">
        <div className="mission__ourTeamBiggerCircle"></div>
        <img src='images/missionPage/ourTeam/nicolasCarmont.jpg' className="mission__ourTeamImageCircle"/>
        </div>
        <div className="mission__ourTeamTextRight">
        <div className="mission__ourTeamMemberName">
        Nicolas Carmont
        </div>
        <div className="mission__ourTeamMemberTitle">
        Co-founder
        </div>
        <div className="mission__ourTeamMemberDescription">
        Social entrepreneur 🚀 Co-founder of Silicon Valet - AI Car Parking App in Cal Hacks Berkeley Startup incubator 🚘 | Co-launched One Cherry - the UK's first e-commerce Charity Platform 🍒
        </div>
        </div>
        </div>
        </div>


        </div></div>
      </div>
    );
  }
}

export default withTracker(() => {
return {

};
})(OurTeam);
