import React from 'react';
import { withTracker } from 'meteor/react-meteor-data';
import { Link } from 'react-router-dom';
import { Meteor } from 'meteor/meteor';
import { Stories } from '../../../api/stories';
import moment from 'moment';
import { funcReplace } from '../../../routes/routes.js';
import LatestStory from './LatestStory';

var adBlockerEnabled = false;
var testAd = document.createElement('testingAdBlocker');
testAd.innerHTML = '&nbsp;';
testAd.className = 'adsbox';
document.body.appendChild(testAd);
window.setTimeout(function() {
  if (testAd.offsetHeight === 0) {
    adBlockerEnabled = true;
  }
  testAd.remove();
}, 100);

import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';

library.add(far);
library.add(fas);

export class LatestOnNovaTerra extends React.Component {
constructor(props) {
super(props);
this.state = {
adBlockerEnabled,
};

this.setTopContainerBottomLatest1 = this.setTopContainerBottomLatest1.bind(this);
this.setCategoryBottomLatest1 = this.setCategoryBottomLatest1.bind(this);
this.setAuthorNameBottomLatest1 = this.setAuthorNameBottomLatest1.bind(this);
this.setAuthorImageBottomLatest1 = this.setAuthorImageBottomLatest1.bind(this);

this.setTopContainerBottomLatest2 = this.setTopContainerBottomLatest2.bind(this);
this.setCategoryBottomLatest2 = this.setCategoryBottomLatest2.bind(this);
this.setAuthorNameBottomLatest2 = this.setAuthorNameBottomLatest2.bind(this);
this.setAuthorImageBottomLatest2 = this.setAuthorImageBottomLatest2.bind(this);

this.setTopContainerBottomLatest3 = this.setTopContainerBottomLatest3.bind(this);
this.setCategoryBottomLatest3 = this.setCategoryBottomLatest3.bind(this);
this.setAuthorNameBottomLatest3 = this.setAuthorNameBottomLatest3.bind(this);
this.setAuthorImageBottomLatest3 = this.setAuthorImageBottomLatest3.bind(this);

this.setTopContainerBottomLatest4 = this.setTopContainerBottomLatest4.bind(this);
this.setCategoryBottomLatest4 = this.setCategoryBottomLatest4.bind(this);
this.setAuthorNameBottomLatest4 = this.setAuthorNameBottomLatest4.bind(this);
this.setAuthorImageBottomLatest4 = this.setAuthorImageBottomLatest4.bind(this);

this.setTopContainerBottomLatest5 = this.setTopContainerBottomLatest5.bind(this);
this.setCategoryBottomLatest5 = this.setCategoryBottomLatest5.bind(this);
this.setAuthorNameBottomLatest5 = this.setAuthorNameBottomLatest5.bind(this);
this.setAuthorImageBottomLatest5 = this.setAuthorImageBottomLatest5.bind(this);

this.setTopContainerBottomLatest6 = this.setTopContainerBottomLatest6.bind(this);
this.setCategoryBottomLatest6 = this.setCategoryBottomLatest6.bind(this);
this.setAuthorNameBottomLatest6 = this.setAuthorNameBottomLatest6.bind(this);
this.setAuthorImageBottomLatest6 = this.setAuthorImageBottomLatest6.bind(this);

this.handleClickOutside = this.handleClickOutside.bind(this);
  }
  setCategoryBottomLatest1(node) {
      this.bottomLatestCategory1 = node;
  }
  setTopContainerBottomLatest1(node) {
      this.bottomLatestTopContainer1 = node;
  }
  setAuthorNameBottomLatest1(node) {
      this.bottomLatestAuthorName1 = node;
  }
  setAuthorImageBottomLatest1(node) {
      this.bottomLatestAuthorImage1 = node;
  }
  setCategoryBottomLatest2(node) {
      this.bottomLatestCategory2 = node;
  }
  setTopContainerBottomLatest2(node) {
      this.bottomLatestTopContainer2 = node;
  }
  setAuthorNameBottomLatest2(node) {
      this.bottomLatestAuthorName2 = node;
  }
  setAuthorImageBottomLatest2(node) {
      this.bottomLatestAuthorImage2 = node;
  }
  setCategoryBottomLatest3(node) {
      this.bottomLatestCategory3 = node;
  }
  setTopContainerBottomLatest3(node) {
      this.bottomLatestTopContainer3 = node;
  }
  setAuthorNameBottomLatest3(node) {
      this.bottomLatestAuthorName3 = node;
  }
  setAuthorImageBottomLatest3(node) {
      this.bottomLatestAuthorImage3 = node;
  }
  setCategoryBottomLatest4(node) {
      this.bottomLatestCategory3 = node;
  }
  setTopContainerBottomLatest4(node) {
      this.bottomLatestTopContainer3 = node;
  }
  setAuthorNameBottomLatest4(node) {
      this.bottomLatestAuthorName3 = node;
  }
  setAuthorImageBottomLatest4(node) {
      this.bottomLatestAuthorImage3 = node;
  }
  setCategoryBottomLatest5(node) {
      this.bottomLatestCategory3 = node;
  }
  setTopContainerBottomLatest5(node) {
      this.bottomLatestTopContainer3 = node;
  }
  setAuthorNameBottomLatest5(node) {
      this.bottomLatestAuthorName3 = node;
  }
  setAuthorImageBottomLatest5(node) {
      this.bottomLatestAuthorImage3 = node;
  }
  setCategoryBottomLatest6(node) {
      this.bottomLatestCategory3 = node;
  }
  setTopContainerBottomLatest6(node) {
      this.bottomLatestTopContainer3 = node;
  }
  setAuthorNameBottomLatest6(node) {
      this.bottomLatestAuthorName3 = node;
  }
  setAuthorImageBottomLatest6(node) {
      this.bottomLatestAuthorImage3 = node;
  }
  componentDidMount() {
      document.addEventListener('mousedown', this.handleClickOutside);
  }
  componentWillUnmount() {
      document.removeEventListener('mousedown', this.handleClickOutside);
  }
  handleClickOutside(e) {
    console.log('clicked');
    if (!this.bottomLatestAuthorImage3) {
      console.log('doesnt exist');
    }
    if (this.bottomLatestTopContainer1 && this.bottomLatestCategory1 && this.bottomLatestAuthorName1 && this.bottomLatestAuthorImage1 && this.bottomLatestTopContainer1.contains(e.target) && !this.bottomLatestCategory1.contains(e.target) && !this.bottomLatestAuthorName1.contains(e.target) && !this.bottomLatestAuthorImage1.contains(e.target)) {
      funcReplace(this.returnFindLatest()[0].link);
    } else if (this.bottomLatestTopContainer2 && this.bottomLatestCategory2 && this.bottomLatestAuthorName2 && this.bottomLatestAuthorImage2 && this.bottomLatestTopContainer2.contains(e.target) && !this.bottomLatestCategory2.contains(e.target) && !this.bottomLatestAuthorName2.contains(e.target) && !this.bottomLatestAuthorImage2.contains(e.target)) {
      funcReplace(this.returnFindLatest()[1].link);




    } else if (this.bottomLatestTopContainer3 && this.bottomLatestCategory3 && this.bottomLatestAuthorName3 && this.bottomLatestAuthorImage3 && this.bottomLatestTopContainer3.contains(e.target) && !this.bottomLatestCategory3.contains(e.target) && !this.bottomLatestAuthorName3.contains(e.target) && !this.bottomLatestAuthorImage3.contains(e.target)) {
      funcReplace(this.returnFindLatest()[2].link);
    } else if (this.bottomLatestTopContainer4 && this.bottomLatestCategory4 && this.bottomLatestAuthorName4 && this.bottomLatestAuthorImage4 && this.bottomLatestTopContainer4.contains(e.target) && !this.bottomLatestCategory4.contains(e.target) && !this.bottomLatestAuthorName4.contains(e.target) && !this.bottomLatestAuthorImage4.contains(e.target)) {
      funcReplace(this.returnFindLatest()[3].link);
    } else if (this.bottomLatestTopContainer5 && this.bottomLatestCategory5 && this.bottomLatestAuthorName5 && this.bottomLatestAuthorImage5 && this.bottomLatestTopContainer5.contains(e.target) && !this.bottomLatestCategory5.contains(e.target) && !this.bottomLatestAuthorName5.contains(e.target) && !this.bottomLatestAuthorImage5.contains(e.target)) {
      funcReplace(this.returnFindLatest()[4].link);
    } else if (this.bottomLatestTopContainer6 && this.bottomLatestCategory6 && this.bottomLatestAuthorName6 && this.bottomLatestAuthorImage6 && this.bottomLatestTopContainer6.contains(e.target) && !this.bottomLatestCategory6.contains(e.target) && !this.bottomLatestAuthorName6.contains(e.target) && !this.bottomLatestAuthorImage6.contains(e.target)) {
      funcReplace(this.returnFindLatest()[5].link);
    }
}
findUser(userId) {
    const user = this.props.users.findOne({ _id: userId });
    return user;
}
returnFindLatest() {
  let findLatest =  Stories.find({ storyType: 'published' }, {
      sort: {
        lastUpdated: -1
      }
  }).fetch();

  findLatest.map((story) => {

  if (story.id === this.props.story._id) {
    let index = findLatest.indexOf(story);
    findLatest.splice(index, 1);
  }
  });

  findLatest = findLatest.slice(0, 10);

  return findLatest;
}
userHasSeenStory(story) {
  if (Meteor.userId()) {
  let user = this.props.users.findOne({ _id: Meteor.userId() });
  if (user.storiesViewed.includes(story._id)) {
    return true;
  } else {
    return false;
}
}
return false;
}
redirectToStory(url) {
  window.location = `${url}`;
}
render() {
    return (
      <div>
  <div className="ab__topDivLatestOnNovaTerra">
  <div className="topSectionMoreContainer">

  <div className="ab__novaterraAdsMobileBottom">
  <h2 className="topHeaderTitleMoreAds">
    NovaTerra Ads
  </h2><hr className="topHeaderMoreLine"/>

  <div className="ab__mobileAdAbove">
  <div className="storyBottomMobile__adBanner"><div className="storyTop__adText">Ad</div></div>

  <div className="ad__mobileAbBottomBit">
  <div className="ab__sttre">
   Ad
 </div>
 <div className="sttrr" className="ab__advertisementBottomText">
   This is a NovaTerra Affiliate ad. 100% of all profit generated from this ad goes directly to charity. <Link to={'/mission'} className="eser">Click here</Link> to learn more.
   </div>
   </div>
   </div>

  </div>

   <h2 className="topHeaderTitleMore">
     Latest on NovaTerra
  </h2><hr className="topHeaderMoreLine"/>

  <div className="adsSectionBottomMarginLeft">
  <h2 className="topHeaderTitleMoreAds">
    NovaTerra Ads
 </h2><hr className="topHeaderMoreLineAds"/>
</div>
</div>

  <div className="spacingspacing"></div>
    <div className="stopReferencesHere"></div>


      <LatestStory users={this.props.users} refs={[this.setTopContainerBottomLatest1, this.setCategoryBottomLatest1, this.setAuthorNameBottomLatest1, this.setAuthorImageBottomLatest1]} story={this.returnFindLatest()[0]} />
      <LatestStory users={this.props.users} refs={[this.setTopContainerBottomLatest2, this.setCategoryBottomLatest2, this.setAuthorNameBottomLatest2, this.setAuthorImageBottomLatest2]} story={this.returnFindLatest()[1]} />
      <LatestStory users={this.props.users} refs={[this.setTopContainerBottomLatest3, this.setCategoryBottomLatest3, this.setAuthorNameBottomLatest3, this.setAuthorImageBottomLatest3]} story={this.returnFindLatest()[2]} />
      <LatestStory users={this.props.users} refs={[this.setTopContainerBottomLatest4, this.setCategoryBottomLatest4, this.setAuthorNameBottomLatest4, this.setAuthorImageBottomLatest4]} story={this.returnFindLatest()[3]} />
      <LatestStory users={this.props.users} refs={[this.setTopContainerBottomLatest5, this.setCategoryBottomLatest5, this.setAuthorNameBottomLatest5, this.setAuthorImageBottomLatest5]} story={this.returnFindLatest()[4]} />
      <LatestStory users={this.props.users} refs={[this.setTopContainerBottomLatest6, this.setCategoryBottomLatest6, this.setAuthorNameBottomLatest6, this.setAuthorImageBottomLatest6]} story={this.returnFindLatest()[5]} />

      <div className="relative">
       <div className="ab__advertisementTopPositioning">

      {/* <div className="ab__advertisementBlockMore">
        <div className="ab__advertisementInnerBlock">
          Advertisement
        </div>
      </div>
      */}

      <div className="storyTop__adBanner"><div className="storyTop__adText">Ad</div></div>

        {/* { this.state.adBlockEnabled ?
        <div className="ab__adBackground1">
        <div className="ab__adBackHead">
          Wish to see a brighter future for our planet?
        </div>
         <div className="ab__adBlockerText">
         In order to make our stories accessible to everyone and make an impact on the future of our planet, NovaTerra needs ads.
         <br/><div className="ab__betweenAdTextSpacing"></div>
         Turn off your ad blocker and together we'll make a difference.
           <div className="ab__adBlockerTextLogo">NovaTerra
           </div>
        </div>
           </div>
        */}

       <div className="ab__sttre">
        Ad
      </div>
      <div className="sttrr" className="ab__advertisementBottomText">
        This is a NovaTerra Affiliate ad. 100% of all profit generated from this ad goes directly to charity. <Link to={'/mission'} className="eser">Click here</Link> to learn more.
        </div>
         </div>

      <div className="ab__readMoreStoriesPositioning">
      <div className="firr readMoreTopDiv">
      <div className="ret ab__readMoreTitleAndHrPositioning">
       <h2 className="ab__readMoreTopTitle">
      Read More
      </h2><hr className="ab__readMoreMainHr" />
      </div>
        </div>

      <div className="ab__readMoreStories">

      {this.returnFindLatest()[6] ?
      <div className="firstReadMore">
      <div className="ab__readMoreTitle">
      <a onClick={() => this.redirectToStory(this.returnFindLatest()[6].link)} className={`kjs ${this.userHasSeenStory(this.returnFindLatest()[6]) ? 'title__grey' : ''}`}>{this.returnFindLatest()[6].title.length > 58 ? this.returnFindLatest()[6].title.slice(0, 58) + '...' : this.returnFindLatest()[6].title}</a>
      </div>
        <Link to={`/${this.returnFindLatest()[6].category}`} className="ab__qqra">
        {this.returnFindLatest()[6].category}
      </Link>
      <div className="ab__qqrb">
        {this.findUser(this.returnFindLatest()[6].userId).username} · {this.returnFindLatest()[6].minRead} min
      </div>
      </div>
      : <p>There</p> }

      {this.returnFindLatest()[7] ?
      <div className="secondReadMore">
      <div className="ab__readMoreTitle">
      <a onClick={() => this.redirectToStory(this.returnFindLatest()[7].link)} className={`kjs ${this.userHasSeenStory(this.returnFindLatest()[7]) ? 'title__grey' : ''}`}>{this.returnFindLatest()[7].title.length > 58 ? this.returnFindLatest()[7].title.slice(0, 58) + '...' : this.returnFindLatest()[7].title}</a>
      </div>
      <Link to={`/${this.returnFindLatest()[7].category}`} className="ab__qqra">
        {this.returnFindLatest()[7].category}
      </Link>
      <div className="ab__qqrb">
          {this.findUser(this.returnFindLatest()[7].userId).username} · {this.returnFindLatest()[7].minRead} min
      </div>
      </div>
      : undefined }

      {this.returnFindLatest()[8] ?
      <div className="thirdReadMore">
      <div className="ab__readMoreTitle">
      <a onClick={() => this.redirectToStory(this.returnFindLatest()[8].link)} className={`kjs ${this.userHasSeenStory(this.returnFindLatest()[8]) ? 'title__grey' : ''}`}>{this.returnFindLatest()[8].title.length > 58 ? this.returnFindLatest()[8].title.slice(0, 58) + '...' : this.returnFindLatest()[8].title}</a>
      </div>
      <Link to={`/${this.returnFindLatest()[8].category}`} className="ab__qqra">
        {this.returnFindLatest()[8].category}
      </Link>
      <div className="ab__qqrb">
          {this.findUser(this.returnFindLatest()[8].userId).username} · {this.returnFindLatest()[8].minRead} min
      </div>
      </div>
      : undefined }

      {this.returnFindLatest()[9] ?
      <div className="fourthReadMore">
      <div className="ab__readMoreTitle">
      <a onClick={() => this.redirectToStory(this.returnFindLatest()[9].link)} className={`kjs ${this.userHasSeenStory(this.returnFindLatest()[9]) ? 'title__grey' : ''}`}>{this.returnFindLatest()[9].title.length > 58 ? this.returnFindLatest()[9].title.slice(0, 58) + '...' : this.returnFindLatest()[9].title}</a>
      </div>
      <Link to={`/${this.returnFindLatest()[9].category}`} className="ab__qqra">
        {this.returnFindLatest()[9].category}
      </Link>
      <div className="ab__qqrb">
          {this.findUser(this.returnFindLatest()[9].userId).username} · {this.returnFindLatest()[9].minRead} min
      </div>
      </div>
       : undefined }

      </div>
</div></div>


</div>

<div className="latestOnNovaTerra__veryBottomSpacing"></div>
</div>
    );
  }
}

export default withTracker(() => {
return {

};
})(LatestOnNovaTerra);
