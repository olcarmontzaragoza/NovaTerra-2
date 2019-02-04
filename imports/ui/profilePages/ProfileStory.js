import React from 'react';
import { withTracker } from 'meteor/react-meteor-data';
import { Link } from 'react-router-dom';
import moment from 'moment';
import { funcReplace } from '../../routes/routes.js';

import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { fas } from '@fortawesome/free-solid-svg-icons';

import {Image, Video, Transformation, CloudinaryContext} from 'cloudinary-react';

library.add(fas);

export class Story extends React.Component {
constructor(props) {
super(props);
this.state = {

};
this.setTopContainer1Ref = this.setTopContainer1Ref.bind(this);
this.setCategory1Ref = this.setCategory1Ref.bind(this);
this.setTopRight1Ref = this.setTopRight1Ref.bind(this);

this.handleClickOutside = this.handleClickOutside.bind(this);
}
setCategory1Ref(node) {
    this.category1 = node;
}
setTopContainer1Ref(node) {
    this.topContainer1 = node;
}
setTopRight1Ref(node) {
    this.topRight1 = node;
}
componentDidMount() {
    document.addEventListener('mousedown', this.handleClickOutside);
}
componentWillUnmount() {
    document.removeEventListener('mousedown', this.handleClickOutside);
}
handleClickOutside(e) {

  if (this.topContainer1 && this.category1 && this.topRight1 && this.topContainer1.contains(e.target) && !this.category1.contains(e.target) && !this.topRight1.contains(e.target)) {
    funcReplace(this.props.story.link);
  }
}
titleClick() {
  if (this.props.story.storyType === 'drafted') {
    funcReplace(this.props.story.link);
  }
}
pressedCancelOrDraft() {
Meteor.call('stories.update', this.props.story._id, { storyType: 'drafted', link: `/draft/${this.props.story._id}`, });
}
deleteDraft() {
console.log('should delete story');
Meteor.call('stories.remove', this.props.story._id);
}
getSliceNum() {
  let width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
  console.log("deeeed width", width);
  if (width > 450) {
    console.log('REEEETURNED', 36);
    return 72;
  } else {
    console.log('REEEETURNED', 25);
    return 57;
  }
}
returnTitle() {
  if (this.props.story.title.length > this.getSliceNum()) {
    return this.props.story.title.slice(0, this.getSliceNum()) + '...';
  } else {
    return this.props.story.title;
  }
}
render() {
    return (
        <div>
        <div ref={this.setTopContainer1Ref} className="profileStory__moreIndividualContainers" >

        {this.props.story.storyType === 'drafted' ?  <div><FontAwesomeIcon onClick={() => funcReplace(this.props.story.link)} ref={this.setTopRight1Ref} icon={['fas', 'pen-square']} className="profile__editIcon" aria-hidden="true" /><div className="profile__mobileDraftDeleteIcon" onClick={() => this.deleteDraft()} ><FontAwesomeIcon icon={['fas', 'trash']} className="mobile__mobileDeleteIconIcon" /></div></div> : undefined }
        {this.props.story.storyType === 'published' ?  <div ref={this.setTopRight1Ref}><div className="profile__mobileDraftIcon"><FontAwesomeIcon icon={['fas', 'pencil-alt']} onClick={() => this.pressedCancelOrDraft()} className="mobile__mobileDraftIconIcon" /></div></div> : undefined }
        {this.props.story.storyType === 'waiting' ?  <div className="profile__mobileDraftIcon"><FontAwesomeIcon icon={['fas', 'stopwatch']} onClick={() => this.pressedCancelOrDraft()} className="mobile__mobileCancelIconIcon" /></div> : undefined }

        <Link to={this.props.story.link}>{this.props.story.mainImage ? <Image cloud_name='novaterra' className="mainImageStoriesProfilePage" publicId={this.props.story.mainImage}><Transformation crop="thumb" /></Image> : <img src={'images/noImage.png'} className="mainImageStoriesProfilePage" />}</Link>
        <div className="profile__categoryMarginTop"></div>

        <div className="profileStory__mainFloatLeft">
        <div className="profile__authorLargerDiv2" ref={this.setCategory1Ref}>
        {this.props.story.category.length > 0 ? <Link to={`/${this.props.story.category}`} className="profile__topMoreCat">
          {this.props.story.category}
      </Link>
      : <a className="profile__topMoreCat">
        Uncategorised
    </a>}
       </div>

       {this.props.story.storyType === 'drafted' ?

       <div className="profile__popContainerReadingText">
         {this.props.story.minRead} min read
       </div>

       : undefined }

       {this.props.story.storyType === 'published' ?

       <div className="profile__bottomShareAndCommentsStory1">
           <FontAwesomeIcon icon={['far', 'comments']} className="profile__bottomCommentIconStory" />
        <div className="scFont profile__bottomCommentNumStory1">{this.props.story.comments}</div>

        <div className="profile__commentAndSharesLineStory1">
        </div>

        <FontAwesomeIcon icon={['fas', 'globe-americas']} className="profile__bottomShareIconStory" />
        <div className="scFont profile__bottomShareNumStory1">{this.props.story.likes.length}</div>
       </div>

       : undefined }

       {this.props.story.storyType === 'waiting' ?

       <div className="profile__popContainerReadingTextWaiting">
         this could take up to 24 hours...
       </div>

       : undefined }

      <div className="profile__moreArContainerTitle" onClick={() => this.titleClick()}>{this.props.story.title ? this.returnTitle() : "Untitled Draft"}</div>

        </div>
       </div>
      </div>
    );
  }
}

export default withTracker(() => {
Meteor.subscribe('stories');
return {

};
})(Story);
