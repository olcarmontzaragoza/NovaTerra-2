import React from 'react';
import { withTracker } from 'meteor/react-meteor-data';
import { Link } from 'react-router-dom';

import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
import { faAngleUp } from '@fortawesome/free-solid-svg-icons';
// import { fasFacebook } from '@fortawesome/free-solid-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';

library.add(fab);
library.add(fas);

export class ShareIconsAndDropDown extends React.Component {
constructor(props) {
super(props);
this.state = {
shareToolTip: false,

};
this.setHideShareTooltip = this.setHideShareTooltip.bind(this);
this.setArrowOne = this.setArrowOne.bind(this);
this.setArrowTwo = this.setArrowTwo.bind(this);
this.setTitleShareButton = this.setTitleShareButton.bind(this);

this.hideShareTooltipFunction = this.hideShareTooltipFunction.bind(this);
}
  componentDidMount() {
      document.addEventListener('mousedown', this.hideShareTooltipFunction);
  }
  componentWillUnmount() {
      document.removeEventListener('mousedown', this.hideShareTooltipFunction);
  }
  setHideShareTooltip(node) {
    this.hideShareTooltip = node;
  }
  setArrowOne(node) {
    this.arrowOne = node;
  }
  setArrowTwo(node) {
    this.arrowTwo = node;
  }
  setTitleShareButton(node) {
    this.titleShareButton = node;
  }
  toggleShareTooltip() {

  if (this.state.shareTooltip) {
  this.setState({ shareTooltip: false });
  } else {
  this.setState({ shareTooltip: true });
  }
  }
  hideShareTooltipFunction(e) {

  if (this.hideShareTooltip && this.arrowOne && this.arrowTwo && this.titleShareButton && !this.hideShareTooltip.contains(e.target) && !this.arrowOne.contains(e.target) && !this.arrowTwo.contains(e.target) && !this.titleShareButton.contains(e.target)) {
  this.setState({ shareTooltip: false });
  }
}
copyToClipboard() {
  var copyText = this.refs.clipboardCopy;

  copyText.select();

  document.execCommand("copy");
}
render() {
    return (
      <div>

<div display="flex">
<div className="homeTop__shareIconsTopDiv">
<a target="_blank" href={this.props.story.facebookLink}>
<div className="oopeb socialHover">
 <div className="homeTop__heightOne"></div>
 <FontAwesomeIcon icon={['fab', 'facebook-f']} className="tue homeTop__firstShareIcon" />
  </div></a>
<a target="_blank" href={this.props.story.twitterLink}><div className="aapeb socialHover">
 <FontAwesomeIcon icon={['fab', 'twitter']} className="tue homeTop__secondShareIcon" />
  </div></a>
<a target="_blank" href={this.props.story.redditLink}><div className="mmpeb socialHover">
 <FontAwesomeIcon icon={['fab', 'reddit-alien']} className="tue homeTop__thirdShareIconReddit" />
  </div></a>
  </div>

  <input ref="clipboardCopy" value={`www.novaterra.earth/${this.props.story.link}`} className="top__clipboardHidden"/>

  <div className="homeTop__mainShareButtonTopDiv">
  <div className="drop1">
 <div ref={this.setHideShareTooltip} onClick={() =>{ this.toggleShareTooltip() }} className="titleToolTip">
{ this.state.shareTooltip ?
<div><div className="homeTop__shareText shareHovered">Share</div><FontAwesomeIcon icon={faAngleUp} className="floatLeft homeTop__shareTooltipArrow shareSlideUp" /></div>
: <div><div className="homeTop__shareText shareHover">Share</div><FontAwesomeIcon icon={faAngleDown} className="floatLeft homeTop__shareTooltipArrow shareDropDown" /></div> }
</div>
  </div></div>
</div>

{ this.state.shareTooltip ?

  <div>
  <div ref={this.setArrowOne} className="shareArrow1">
  </div>
  <div ref={this.setArrowTwo} className="shareArrow2">
  </div>

  <div ref={this.setTitleShareButton} className="titleShareButton">
    <div className="dropShareLinks">

<a target="_blank" href={this.props.story.facebookLink}><div className="slideDownFacebook">
             <svg width="0" height="0">
 <radialGradient id="xjxj" r="150%" cx="30%" cy="107%">
   <stop stopColor="#7797d4" offset="0" />
   <stop stopColor="#81a1de" offset="0.2" />
   <stop stopColor="#8babe8" offset="0.25" />
 <stop stopColor="#8bb5f2" offset="0.35" />
   <stop stopColor="#b9e2ff" offset="0.7" />
   <stop stopColor="#c3ecf5" offset="0.78" />
 <stop stopColor="#cdf6ff" offset="0.81" />
  </radialGradient>
</svg>
<div className="divSocialHovjsetsrTitle">
  <div className="flex">
<a className="shareShare hovFacebookTitleL2">Facebook</a>
<FontAwesomeIcon icon={['fab', 'facebook-f']} className="shareIconTop shareFacebook" />
</div>
<div className="clearBoth"></div>
</div></div></a>

      <hr className="titleShareLine titleShareLine1"/>

<a target="_blank" href={this.props.story.twitterLink}><div className="slideDownTwitter">
       <svg width="0" height="0">
 <radialGradient id="jzx" r="150%" cx="30%" cy="107%">
   <stop stopColor="#2aa3f0" offset="0.10" />
   <stop stopColor="#c4d6f1" offset="0.5" />
   <stop stopColor="#d1e4f1" offset="0.6" />
   <stop stopColor="#e0edf1" offset="0.7" />
   <stop stopColor="#e0edf1" offset="0.8" />
   <stop stopColor="#d9f5ff" offset="0.9" />
  </radialGradient>
</svg>
<div className="hoverThisDiv divSocialHovjsTitle">
<a className="shareShare hovTwitterTitleL">Twitter</a>
<FontAwesomeIcon icon={['fab', 'twitter']} className="shareIconTop shareTwitter" />
<div className="clearBoth"></div>
</div>
    </div></a>

    <hr className="titleShareLine titleShareLine2"/>

<a target="_blank" href={this.props.story.redditLink}><div className="slideDownReddit">
 <svg width="0" height="0">
 <radialGradient id="redditGradient" r="150%" cx="30%" cy="107%">
 <stop stopColor="#ff6f46" offset="0.15" />
  <stop stopColor="#ff8364" offset="0.4" />
    <stop stopColor="#ff9782" offset="0.5" />
    <stop stopColor="#ffab96" offset="0.6" />
    <stop stopColor="#ffbfaa" offset="0.7" />
    <stop stopColor="#ffd3be" offset="0.8" />
    <stop stopColor="#ffe7dc" offset="0.85" />
  </radialGradient>
  </svg>
<div className="hoverThisDiv divSocialHovRedditTitle">
<div className="flex">
<a className="shareShare hovRedditTitleL4">Reddit</a>
<FontAwesomeIcon icon={['fab', 'reddit']} className="shareIconTop shareReddit" />
</div>
<div className="clearBoth"></div>
</div>
    </div></a>

    <hr className="titleShareLine titleShareLine3"/>

<a target="_blank" href={this.props.story.pinterestLink}><div className="slideDownPinterest">
      <svg width="0" height="0">
 <radialGradient id="sxjs2" r="150%" cx="30%" cy="107%">
  <stop stopColor="#bd232b" offset="0.10" />
   <stop stopColor="#f97251" offset="0.4" />
  <stop stopColor="#ff9d85" offset="0.5" />
   <stop stopColor="#ffccb9" offset="0.65" />
   <stop stopColor="#ffeee8" offset="0.85" />

  </radialGradient>
</svg>
<div className="hoverThisDiv divSocialHovjsetsrt2Title">
  <div className="flex">
<a className="shareShare hovRedditTitleL22">Pinterest</a>
<FontAwesomeIcon icon={['fab', 'pinterest']} className="shareIconTop sharePinterest" />
</div>
<div className="clearBoth"></div>
</div>
    </div></a>

    <hr className="titleShareLine titleShareLine4"/>

<a target="_blank" href={this.props.story.tumblrLink}><div className="slideDownTumblr">
      <svg width="0" height="0">
 <radialGradient id="tumblrGradient" r="150%" cx="30%" cy="107%">
   <stop stopColor="#324357" offset="0.10" />
   <stop stopColor="#5a6b7f" offset="0.4" />
  <stop stopColor="#647589" offset="0.5" />
   <stop stopColor="#aabbcf" offset="0.6" />
   <stop stopColor="#dcf7ff" offset="0.75" />
  </radialGradient>
</svg>
<div className="divSocialHovTumblrTitle">
  <div className="flex">
<a className="shareShare hovTumblrTitleL">Tumblr</a>
<FontAwesomeIcon icon={['fab', 'tumblr']} className="shareIconTop shareTumblr" />
</div>
<div className="clearBoth"></div>
</div>
      </div></a>

    <hr className="titleShareLine titleShareLine5"/>

<div onClick={() => this.copyToClipboard()} className="slideDownMail">
      <svg width="0" height="0">
 <radialGradient id="mailGradient" r="150%" cx="30%" cy="107%">
     <stop stopColor="#1174c3" offset="0.1" />
   <stop stopColor="#c4d6f1" offset="0.5" />
   <stop stopColor="#d1e4f1" offset="0.6" />
   <stop stopColor="#e0edf1" offset="0.7" />
   <stop stopColor="#e0edf1" offset="0.8" />
   <stop stopColor="#d9f5ff" offset="0.9" />
  </radialGradient>
</svg>
<div className="divSocialHovMailTitle">
  <div className="flex">
<a className="shareShare hovMailTitleLL">Copy Url</a>
<FontAwesomeIcon icon={['fas', 'copy']} className="shareIconTop shareMail" />
</div>
<div className="clearBoth"></div>
</div>
</div>
</div>
</div>
</div>
: undefined }
<div className="clearBoth"></div>

</div>
);
}
}

export default withTracker(() => {
return {

};
})(ShareIconsAndDropDown);
