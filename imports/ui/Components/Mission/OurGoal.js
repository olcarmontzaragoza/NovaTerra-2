import React from 'react';
import { withTracker } from 'meteor/react-meteor-data';
import { Link } from 'react-router-dom';
import { Session } from 'meteor/session';

import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { far } from '@fortawesome/free-regular-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';

library.add(fas);
library.add(far);

export class OurGoal extends React.Component {
  render() {
    return (
      <div>
        <div className="mission__ourGoalBox">

        <div className="mission__ourMissionBoxInnerMargins">

        <div className="mission__topContainerMarginTop"></div>

        <div className="mission__topContainers">
        <div className="mission__topContainerInnerMargins">

        <div className="mission__topContainerTopMargins"></div>
        <div className="mission__topContainerTitle">Our Goal <span role="img">🎯</span></div>
        <div className="mission__topContainerFirstSubHeader">NovaTerra has ambitious goals for the future</div>
        <div className="mission__topContainerSecondSubHeader">Our goal for 2020 is to raise 50,000 euros for environmental charities. This is our current progress on this goal:</div>

        </div></div>

        <div className="mission__ourGoalBackground">

        <img src={`images/goalCompletionImages/missionPage/${Session.get('projectCompletion')}.png`} className="mission__goalMainImage"/>

        {/* <p className="mission__goalAmountDonated">${Session.get('moneyRaised')}</p> */}

        <div className="mission__ourGoalOur2020Mission">Our 2020 Goal</div>
        <div className="mission__ourGoalPercentageComplete">{Session.get('projectCompletion')}% Complete </div>

        <div className="mission__center">
        <div className="mission__ourGoalBottomGoal">
        <img src='images/missionPage/bottomGoal.png' className="mission__ourGoalBottomGoalImage"/>
        <div className="mission__ourGoalBottomText">Goal: Raise €50,000 for Environmental Causes</div>
        </div>

        </div>
        </div>


        </div>
        </div>
      </div>
    );
  }
}

export default withTracker(() => {
return {

};
})(OurGoal);
