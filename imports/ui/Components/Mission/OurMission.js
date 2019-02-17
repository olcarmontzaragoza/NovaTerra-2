import React from 'react';
import { withTracker } from 'meteor/react-meteor-data';
import { Link } from 'react-router-dom';

import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { far } from '@fortawesome/free-regular-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';

library.add(fas);
library.add(far);

export class OurMission extends React.Component {
  render() {
    return (
      <div>
        <div className="mission__ourMissionBox">

        <div className="mission__ourMissionBoxInnerMargins">

        <div className="mission__topContainerMarginTop"></div>

        <div className="mission__topContainers">
        <div className="mission__topContainerInnerMargins">

      <div className="mission__topContainerTopMargins"></div>
      <div className="mission__topContainerTitle">Our Mission <span role="img">🚀</span></div>
      <div className="mission__topContainerFirstSubHeader">NovaTerra has a vision for the future.</div>
      <div className="mission__topContainerSecondSubHeader">Instead of waiting forever for governments to start putting emission caps, we decided to put this into our own hands by creating a whole new age of social platforms.</div>

      </div></div>

      <div className="mission__ourVisionSpacingTop"></div>

      <div className="mission__ourVisionMargins">
      <div className="mission__ourVisionSubHeader">Our Vision</div>
      <div className="mission__ourVisionText">To create the next-generation social platform that promotes sustainability and activism.</div>
      </div>

      <div className="missionOurPrinciplesTopMargin"></div>

      <div className="mission__ourPrinciplesHeader">Our Principles</div>

      <div className="clearBoth"></div>

      <div className="ourPrinciplesHorizontalPositioning">
      <div className="mission__ourMissionLargeSideImageContainer">
      <div className="mission__ourMissionImageTextPositioning">
      <div className="mission__ourMissionLargeSideImageHeader">The secret of change is to focus all of your energy, not on fighting the old, but on building the new.</div>
      <div className="mission__ourMissionLargeSideImageSubHeader">Socrates</div>
      </div>
      <img className="mission__ourMissionLargeSideImage" src='images/missionPage/largeSideImage.jpg'/>
      </div>

      <div className="mission__sidePrinciple mission__sidePrinciple1">
      <div className="mission__sidePrincipleInnerMargins">
      <div className="mission__sidePrinciplePrinciple">Principle #1</div>
      <div className="mission__sidePrincipleHeader">Freedom of Expression.</div>
      <div className="mission__sidePrincripleDescription">NovaTerra is a worldwide community. Because of this, we are open to all perspectives and encourage personal expression.</div>
      </div></div>

      <div className="mission__sidePrinciple mission__sidePrinciple2">
      <div className="mission__sidePrincipleInnerMargins">
      <div className="mission__sidePrinciplePrinciple">Principle #2</div>
      <div className="mission__sidePrincipleHeader">Full Ownership Over Stories.</div>
      <div className="mission__sidePrincripleDescription">NovaTerra allows users to publish stories across multiple sites, allowing them to reach a larger audience.</div>
      </div></div>

      <div className="mission__sidePrinciple mission__sidePrinciple3">
      <div className="mission__sidePrincipleInnerMargins">
      <div className="mission__sidePrinciplePrinciple">Principle #3</div>
      <div className="mission__sidePrincipleHeader">100% of profits for the 100%.</div>
      <div className="mission__sidePrincripleDescription">NovaTerra is a non-profit social platform working to combat environmental issues that affect everyone, everywhere.</div>
      </div></div>
        </div>

      <div className="clearBoth"></div>

      <div className="missionHowItWorksTopMargin"></div>

      <div className="mission__howItWorksMainHeader">How it Works</div>

      <div className="mission__howItWorksText">Raise Money By Telling Stories</div>

      <div className="clearBoth"></div>

      <div className="mission__howItWorksPositioning">

      <div className="mission__howItWorksContainer">
      <div className="mission__howItWorksContainerInnerMargins">

      <div className="mission__howItWorksBiggerCircle"></div>

      <div className="mission__howItWorksCircle">
        <svg width="0" height="0">
        <radialGradient id="missionHowItWorksId" r="150%" cx="30%" cy="107%">
         <stop stopColor="#67b26f" offset="0.10" />,
         <stop stopColor="#4ca2cd" offset="0.8" />
        </radialGradient>
        </svg>
        <div className="missionHowItWorks">
        <FontAwesomeIcon icon={['fas', 'user-plus']} className="howItWorksIcon" aria-hidden="true" />
        </div>

      </div>

      <div className="mission__howItWorksSpacing"></div>

      <div className="mission__howItWorksHeader">1. Join The Community</div>

      <img src='images/missionPage/howItWorks1.png' className="mission__howItWorksSmallImage"/>

      <div className="mission__howItWorksDescription">Join the NovaTerra community by <Link to='/signup' className="link">creating an account</Link>.</div>

      </div>
      </div>

      <div className="mission__howItWorksContainer">
      <div className="mission__howItWorksContainerInnerMargins">

        <div className="mission__howItWorksBiggerCircle"></div>

        <div className="mission__howItWorksCircle">
          <svg width="0" height="0">
          <radialGradient id="missionHowItWorksId" r="150%" cx="30%" cy="107%">
           <stop stopColor="#67b26f" offset="0.10" />,
           <stop stopColor="#4ca2cd" offset="0.8" />
          </radialGradient>
          </svg>
          <div className="missionHowItWorks">
          <FontAwesomeIcon icon={['fas', 'plus']} className="howItWorksIcon" aria-hidden="true" />
          </div>
        </div>

        <div className="mission__howItWorksSpacing"></div>

        <div className="mission__howItWorksHeader">2. Create a Story</div>

        <img src='images/missionPage/howItWorks2.png' className="mission__howItWorksSmallImage"/>

        <div className="mission__howItWorksDescription">Create your first story by clicking on the '+' icon.</div>

      </div>
      </div>

      <div className="mission__howItWorksContainer">
      <div className="mission__howItWorksContainerInnerMargins">

        <div className="mission__howItWorksBiggerCircle"></div>

        <div className="mission__howItWorksCircle">
          <svg width="0" height="0">
          <radialGradient id="missionHowItWorksId" r="150%" cx="30%" cy="107%">
           <stop stopColor="#67b26f" offset="0.10" />,
           <stop stopColor="#4ca2cd" offset="0.8" />
          </radialGradient>
          </svg>
          <div className="missionHowItWorks">
          <FontAwesomeIcon icon={['fas', 'pencil-alt']} className="howItWorksIcon" aria-hidden="true" />
          </div>
        </div>

        <div className="mission__howItWorksSpacing"></div>

        <div className="mission__howItWorksHeader">3. Note Down Your Thoughts</div>

        <img src='images/missionPage/howItWorks3.png' className="mission__howItWorksSmallImage"/>

        <div className="mission__howItWorksDescription">Note down any of your thoughts or report any of your findings.</div>


      </div>
      </div>

      <div className="mission__howItWorksContainer">
      <div className="mission__howItWorksContainerInnerMargins">

        <div className="mission__howItWorksBiggerCircle"></div>

        <div className="mission__howItWorksCircle">
          <svg width="0" height="0">
          <radialGradient id="missionHowItWorksId" r="150%" cx="30%" cy="107%">
           <stop stopColor="#67b26f" offset="0.10" />,
           <stop stopColor="#4ca2cd" offset="0.8" />
          </radialGradient>
          </svg>
          <div className="missionHowItWorks">
          <FontAwesomeIcon icon={['fas', 'file-upload']} className="howItWorksIcon" aria-hidden="true" />
          </div>
        </div>

        <div className="mission__howItWorksSpacing"></div>

        <div className="mission__howItWorksHeader">4. Publish Your Story</div>

        <img src='images/missionPage/howItWorks4.png' className="mission__howItWorksSmallImage"/>

        <div className="mission__howItWorksDescription">Click on 'Publish' and wait for your story to be approved.</div>


      </div>
      </div>

      <div className="mission__howItWorksContainer">
      <div className="mission__howItWorksContainerInnerMargins">

        <div className="mission__howItWorksBiggerCircle"></div>

        <div className="mission__howItWorksCircle">
          <svg width="0" height="0">
          <radialGradient id="missionHowItWorksId" r="150%" cx="30%" cy="107%">
           <stop stopColor="#67b26f" offset="0.10" />,
           <stop stopColor="#4ca2cd" offset="0.8" />
          </radialGradient>
          </svg>
          <div className="missionHowItWorks">
          <FontAwesomeIcon icon={['fas', 'bullhorn']} className="howItWorksIcon" aria-hidden="true" />
          </div>
        </div>

        <div className="mission__howItWorksSpacing"></div>

        <div className="mission__howItWorksHeader">5. Spread The Word</div>

        <img src='images/missionPage/howItWorks5.png' className="mission__howItWorksSmallImage"/>

        <div className="mission__howItWorksDescription">Share your story on social media and spread the word.</div>


      </div>
      </div>

      <div className="mission__howItWorksContainer">
      <div className="mission__howItWorksContainerInnerMargins">

        <div className="mission__howItWorksBiggerCircle"></div>

        <div className="mission__howItWorksCircle">
          <svg width="0" height="0">
          <radialGradient id="missionHowItWorksId" r="150%" cx="30%" cy="107%">
           <stop stopColor="#67b26f" offset="0.10" />,
           <stop stopColor="#4ca2cd" offset="0.8" />
          </radialGradient>
          </svg>
          <div className="missionHowItWorks">
          <FontAwesomeIcon icon={['fas', 'donate']} className="howItWorksIcon" aria-hidden="true" />
          </div>
        </div>

        <div className="mission__howItWorksSpacing"></div>

        <div className="mission__howItWorksHeader">6. Raise Money For Charity</div>

        <img src='images/missionPage/howItWorks6.png' className="mission__howItWorksSmallImage"/>

        <div className="mission__howItWorksDescription">Raise money for charities through ad revenue.</div>

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
})(OurMission);
