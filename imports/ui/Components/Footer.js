import React from 'react';
import { withTracker } from 'meteor/react-meteor-data';
import { Link } from 'react-router-dom';

import { Stories } from '../../api/stories';

import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { fab } from '@fortawesome/free-brands-svg-icons';

library.add(fab);

// import { twitter } from '@fortawesome/free-solid-svg-icons';
// import { googlePlus } from '@fortawesome/free-solid-svg-icons';

export class Footer extends React.Component {
constructor(props) {
super(props);
this.state = {

};
}
createNewStory() {
if (Meteor.userId()) {
let numStories = Stories.find().count();
let newId = `${numStories + 1}`;
console.log('newId', newId);

let details = {
  title: "",
  unCapTitle: "",
  category: '',
  description: '',
  tags: [],
  mainImage: '',
  userId: Meteor.userId(),
  lastUpdated: moment().valueOf(),
  minRead: 0,
  likes: [],
  comments: 0,
  shares: 0,
  storyType: 'drafted',
  _id: `${newId}`,
  link: `draft/${newId}`,
  references: [],
  type: 'story',
}

  Meteor.call('stories.insert', newId, details);
  funcReplace(`draft/${newId}`);
} else {
  funcReplace(`/login`);
}
}
render() {
    return (
      <div className="footer_width">
        <div className="topFooter">
<div className="positioningTopFooter">


<img src={`${this.props.route}images/organizationImages/whiteLogo.png`} className="imageBottomFooter" />
<div className="footerTitle">
  Novaterra
</div>
<div className="clearBoth"></div>

  <div className="footer__aboutUsContainer">
  <div className="footer__AboutUsHeader">
  ABOUT US
</div>
  <hr className="footer__belowHeaderHr" />
<div className="aboutText">
  Novaterra is an organization working to raise awareness and funding to combat one of the most crucial environmental issues of our time; climate change. 100% of all profits made on this site will be donated to offset carbon from the atmosphere and support sustainable practises globally.
</div>
</div>

<div className="mediaClearBoth"></div>

  {/* <!---- ARTICLE LINKS: --> */}
  <div className="footer__categoriesContainer">
  <div className="mainFooterLink">STORIES</div>
  <div className="allStoryLinks">
  <Link to="/now" className="footerLink">Now</Link>
<div className="clearBoth footerLinkSpacing"></div>
 <Link to="/future" className="footerLink">Future</Link>
<div className="clearBoth footerLinkSpacing"></div>
 <Link to="/economy" className="footerLink">Economy</Link>
<div className="clearBoth footerLinkSpacing"></div>
 <Link to="/tech" className="footerLink">Tech</Link>
<div className="clearBoth footerLinkSpacing"></div>
 <Link to="/environment" className="footerLink">Environment</Link>
<div className="clearBoth footerLinkSpacing"></div>
 <Link to="/explore" className="footerLink">Explore</Link>
<div className="clearBoth footerLinkSpacing"></div>
</div></div>

{/* <!---- ABOUT LINKS: --> */}
<div className="footer__aboutContainer">
 <div href="" className="mainFooterLink">ABOUT</div>
  <div className="allAboutLinks">
  <Link to="/mission" className="footerLink">Our Mission</Link>
<div className="clearBoth footerLinkSpacing"></div>
  <Link to="/faq" className="footerLink">FAQ</Link>
<div className="clearBoth footerLinkSpacing"></div>
  <Link to="/contact" className="footerLink">Contact Us</Link>
<div className="clearBoth footerLinkSpacing"></div>
</div></div>

 {/* <!---- Get Involved LINKS: --> */}
 <div className="footer__getInvolvedeContainer">
 <div className="mainFooterLink">GET INVOLVED</div>
 <div className="allGetInvolvedLinks">
 <div className="marginBottom4Dot15">
 </div>
  <Link to="/get-involved" className="footerLink">Get Involved</Link>
<div className="clearBoth footerLinkSpacing"></div>
  <a onClick={() => this.createNewStory()} className="footerLink createAStoryCursor">Create a Story</a>
<div className="clearBoth footerLinkSpacing"></div>
  <Link to="/feedback" className="footerLink">Tell us Your Thoughts</Link>
<div className="clearBoth footerLinkSpacing"></div>
  <Link to="/donate" className="footerLink">Donate</Link>
<div className="clearBoth footerLinkSpacing"></div>
</div></div>

<div className="clearBoth"></div>

<div className="footer__socialMediaTopDiv">
<a href="https://www.facebook.com/NovaTerra.earth/"><div className="kpebFooter socialHoverrs">
<FontAwesomeIcon icon={['fab', 'facebook-f']} className="tuers1 footer__facebookWidthHeight" />
</div></a>
<a href="https://twitter.com/NovaTerra_earth"><div className="ypebFooter socialHoverrs">
<FontAwesomeIcon icon={['fab', 'twitter']} className="tuers2 footer__twitterWidthHeight" />
</div></a>
<div className="tpebFooter socialHoverrs">
<FontAwesomeIcon icon={['fab', 'medium-m']} className="tuers3 footer__mediumWidthHeight" />
</div>
</div>

</div>
</div>
<div className="clearBoth"></div>
<div className="footer__bottomFooter">

  <div className="bottomFooter">
    <div className="footerCopyright">
      ©NovaTerra 2018. All Rights Reserved.
    </div>
        </div>

    <div className="positionFooterLinks">
       <Link to="/privacy-policy" className="footerLink1">Privacy Policy</Link><a className="middleBar"> | </a><Link to="/contact" className="footerLink2">Contact</Link><a className="middleBar"> | </a><Link to="/faq" className="footerLink3">FAQ</Link>
    </div>



</div>
</div>
    );
  }
}

export default withTracker(() => {
return {

};
})(Footer);
