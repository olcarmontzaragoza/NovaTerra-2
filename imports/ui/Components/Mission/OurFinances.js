import React from 'react';
import { withTracker } from 'meteor/react-meteor-data';
import { Link } from 'react-router-dom';

import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { far } from '@fortawesome/free-regular-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';

library.add(fas);
library.add(far);

export class OurFinances extends React.Component {
// componentDidMount() {
// this.updateCanvas();
// }
// updateCanvas() {
//   let ctx = this.refs.financesFirst.getContext("2d");
//   var gradient = ctx.createLinearGradient(0, 0, 170, 0);
//   gradient.addColorStop("0", "magenta");
//   gradient.addColorStop("0.5" ,"blue");
//   gradient.addColorStop("1.0", "red");
//   ctx.strokeStyle = gradient;
//   ctx.lineWidth = 8;
//   ctx.beginPath();
//   ctx.arc(100, 75, 50, 0, 2 * 2.826);
//   ctx.stroke();
// }
render() {
    return (
      <div>
      <div className="mission__ourFinancesBox">

        <div className="mission__ourMissionBoxInnerMargins">

        <div className="mission__topContainerMarginTop"></div>

        <div className="mission__topContainers">
        <div className="mission__topContainerInnerMargins">

        <div className="mission__topContainerTopMargins"></div>
        <div className="mission__topContainerTitle">Our Finances <span role="img">💰</span></div>
        <div className="mission__topContainerFirstSubHeader">We are a non-profit organization.</div>
        <div className="mission__topContainerSecondSubHeader">All our money goes to our 2020 Goal and to improving our website.</div>

        </div></div>

        <div className="mission__ourFinancesBackground">

        <div className="mission__ourTeamTopSpacing"></div>

        <div className="mission__ourFinancesMainHeader">Our Revenue Model</div>

        <div className="mission__sustainableAds">
        <img src='images/missionPage/ourFinances/ourRevenueModel.png' className="mission__revenueModelImage"/>
        <div className="mission__ourFinancesTextRight">
        <div className="mission__ourFinancesTitle">
        Sustainable Ads <span role="img">♻️</span>
        </div>
        <div className="mission__ourFinancesDescription">
        We don’t take donations or payments. All our money comes organically from ads which promote good causes.
        </div>
        </div>
        </div>

        <div className="clearBoth"></div>

        <div className="mission__ourSpendingModelSpacing"></div>

          <div className="mission__ourFinancesMainHeader">Our Spending Model</div>

          <div className="mission__sustainableAds">
          <img src='images/missionPage/ourFinances/achievingOurGoal.png' className="mission__revenueModelImageRightAbove"/>
          <div className="mission__ourFinancesTextRight">
          <div className="mission__ourFinancesTitle">
          Achieving Our Goal <span role="img">🎯</span>
          </div>
          <div className="mission__ourFinancesDescription">
          Our goal for 2020 is to raise £50,000 to combat climate change and environmetal degradation. 90% off all revenue recieved from our adverts will go straight to achieving this goal.
          </div>
          </div>
          <img src='images/missionPage/ourFinances/achievingOurGoal.png' className="mission__revenueModelImageRight"/>
          </div>

          <div className="clearBoth"></div>
          <div className="mission__ourSpendingModelInnerSpacing"></div>

          <div className="mission__sustainableAds">
          <img src='images/missionPage/ourFinances/improvingNovaTerra.png' className="mission__revenueModelImage"/>
          <div className="mission__ourFinancesTextRight">
          <div className="mission__ourFinancesTitle">
          Improving NovaTerra <span role="img">🔝</span>
          </div>
          <div className="mission__ourFinancesDescription">
          This includes website costs, hiring people to improve NovaTerra's user experience and advertising. These are all featured in our yearly finance spreadsheet.
          </div>
          </div>
          </div>

        {/* <canvas ref="financesFirst" width="300" height="150"></canvas> */}



        </div></div></div>
      </div>
    );
  }
}

export default withTracker(() => {
return {

};
})(OurFinances);
