import React from 'react';
import { withTracker } from 'meteor/react-meteor-data';
import { Link } from 'react-router-dom';

import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { far } from '@fortawesome/free-regular-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';

library.add(fas);
library.add(far);

import {Line, Pie} from 'react-chartjs-2';

const lineData = {
  labels: ['February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
  datasets: [
    {
      label: 'NRDC',
      data: [0],
    backgroundColor: ["#36A2EB",]
    }, {
    label: 'COTAP, The Good Food Institute',
    data: [0],
  backgroundColor: ["#FF6384"]
}, {
label: 'New Harvest',
data: [0],
backgroundColor: ["#FDEF6B"]
}, {
label: '350.org',
data: [0],
backgroundColor: ["#f19b2c"]
}, {
label: 'Stand For Trees',
data: [0],
backgroundColor: ["#68819E"]
}, {
label: 'Solar Aid',
data: [0],
backgroundColor: ["#736697"]
}, {
label: 'The Solutions Project',
data: [0],
backgroundColor: ["#8FB030"]
}, {
label: 'Just Diggit',
data: [0],
backgroundColor: ["#A18871"]
}
]
}


const lineOptions = {
tooltips: {
  backgroundColor: 'rgba(255, 255, 255, 1)',
  titleFontColor: 'rgba(0, 0, 0, 1)',
  bodyFontColor:  'rgba(0, 0, 0, 1)',
},
maintainAspectRatio: false,
}

const pieData = {
  labels: ['COTAP', 'The Good Food Institute', 'The Good Food Institute', 'New Harvest', '350.org', 'Stand For Trees', 'Solar Aid', 'The Solutions Project', 'Just Diggit'],
  datasets: [
    {
      data: [0, 3, 3, 5, 8, 12, 17, 23, 28],
    backgroundColor: [
      "#36A2EB", "#FF6384", "#FF6384", "#FDEF6B", "#f19b2c", "#68819E", "#736697", "#8FB030", "#A18871"]
    }]
}

const pieOptions = {
tooltips: {
  backgroundColor: 'rgba(255, 255, 255, 1)',
  titleFontColor: 'rgba(0, 0, 0, 1)',
  bodyFontColor:  'rgba(0, 0, 0, 1)',
},
maintainAspectRatio: false,
}
export class OurCharities extends React.Component {
constructor(props) {
super(props);
this.state = {

};
}



  render() {
    return (
      <div>
        <div className="mission__ourCharitiesBox">

          <div className="mission__ourMissionBoxInnerMargins">

          <div className="mission__topContainerMarginTop"></div>

          <div className="mission__topContainers">
          <div className="mission__topContainerInnerMargins">

          <div className="mission__topContainerTopMargins"></div>
          <div className="mission__topContainerTitleCharities">Our Charities <span role="img">🙏</span></div>
          <div className="mission__topContainerFirstSubHeader">We are raising funding for charities around the world.</div>
          <div className="mission__topContainerSecondSubHeader">Here are a list of charities that we are doanting or will donate in the near future.</div>

          </div></div>

          <div className="mission__firstCharityGraph">

          <div className="mission__firstCharityGraphSpacing"></div>

          <div className="mission__ourProgressHeader">Our Progress (€)</div>

          <div className="mission__charityColours">

          <div className="mission__justDiggitBox"></div> <div className="mission__charityColourText">Just Diggit (€{0})</div>
          <div className="mission__theSolutionsProjectBox"></div> <div className="mission__charityColourText">Solutions Project (€{0})</div>
          <div className="mission__solarAidBox"></div> <div className="mission__charityColourText">Solar Aid (€{0})</div>
          <div className="mission__standForTreesBox"></div> <div className="mission__charityColourText">Stand For Trees (€{0})</div>
          <div className="mission__350DotOrgBox"></div> <div className="mission__charityColourText">350.org (€{0})</div>
          <div className="mission__newHarvestBox"></div> <div className="mission__charityColourText">New Harvest (€{0})</div>
          <div className="mission__theGoodFoodInsituteBox"></div> <div className="mission__charityColourText">GFI (€{0})</div>
          <div className="mission__cotapBox"></div> <div className="mission__charityColourText">COTAP (€{0})</div>
          <div className="mission__nrdcBox"></div> <div className="mission__charityColourText">NRDC (€{0})</div>

          </div>

          <div className="mission__graphWidths">
          <Line className="missionWidths" data={lineData} options={lineOptions} />
          </div>
          <div className="clearBoth"></div>
          <div className="mission__charityColoursMobile">
          <div className="clearBoth"></div>
          <div className="floatLeft ourCharitiesMobileBox">
          <div className="mission__justDiggitBox"></div> <div className="mission__charityColourText">Just Diggit (€{0})</div>
          <div className="mission__theSolutionsProjectBox"></div> <div className="mission__charityColourText">Solutions Project (€{0})</div>
          <div className="mission__solarAidBox"></div> <div className="mission__charityColourText">Solar Aid (€{0})</div>
          </div>

          <div className="floatLeft ourCharitiesMobileBox">
          <div className="mission__standForTreesBox"></div> <div className="mission__charityColourText">Stand For Trees (€{0})</div>
          <div className="mission__350DotOrgBox"></div> <div className="mission__charityColourText">350.org (€{0})</div>
          <div className="mission__newHarvestBox"></div> <div className="mission__charityColourText">New Harvest (€{0})</div>
          </div>

          <div className="floatLeft ourCharitiesMobileBox2">
          <div className="mission__theGoodFoodInsituteBox"></div> <div className="mission__charityColourText">GFI (€{0})</div>
          <div className="mission__cotapBox"></div> <div className="mission__charityColourText">COTAP (€{0})</div>
          <div className="mission__nrdcBox"></div> <div className="mission__charityColourText">NRDC (€{0})</div>
          </div>
          </div>

          <div className="clearBoth"></div>
          <div className="mission__shareOfEarningsHeader">Share of Earnings (%)</div>
          <div className="ourCharities__pieChart">
          <Pie className="ourCharities__pieChartInner" data={pieData} options={pieOptions} />
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
})(OurCharities);
