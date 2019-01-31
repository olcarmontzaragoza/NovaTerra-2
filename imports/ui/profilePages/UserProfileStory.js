import React from 'react';
import { withTracker } from 'meteor/react-meteor-data';
import { Link } from 'react-router-dom';
import moment from 'moment';
import AuthorTooltip from '../Components/Tooltips/AuthorTooltip';
import { funcReplace } from '../../routes/routes.js';

import {Image, Video, Transformation, CloudinaryContext} from 'cloudinary-react';

import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { fas } from '@fortawesome/free-solid-svg-icons';

export class UserProfileStory extends React.Component {
constructor(props) {
super(props);
this.state = {

};
this.setTopContainer1Ref = this.setTopContainer1Ref.bind(this);
this.setCategory1Ref = this.setCategory1Ref.bind(this);
this.setAuthorName3Ref = this.setAuthorName3Ref.bind(this);
this.setAuthorImage3Ref = this.setAuthorImage3Ref.bind(this);

this.handleClickOutside = this.handleClickOutside.bind(this);
}
findUser(id) {
let user = this.props.users.findOne({ _id: id });
return user;
}
setCategory1Ref(node) {
    this.category1 = node;
}
setTopContainer1Ref(node) {
    this.topContainer1 = node;
}
setAuthorName3Ref(node) {
    this.authorName1 = node;
}
setAuthorImage3Ref(node) {
    this.authorImage1 = node;
}
componentDidMount() {
    document.addEventListener('mousedown', this.handleClickOutside);
}
componentWillUnmount() {
    document.removeEventListener('mousedown', this.handleClickOutside);
}
handleClickOutside(e) {

  if (this.topContainer1 && this.category1 && this.authorName1 && this.authorImage1 && this.topContainer1.contains(e.target) && !this.category1.contains(e.target) && !this.authorName1.contains(e.target)) {
    funcReplace(this.props.story.link);
  }
}
titleClick() {
  console.log('should replace');
    funcReplace(this.props.story.link);
}
render() {
    return (
      <div>
      <div ref={this.setTopContainer1Ref} className="profileStory__moreIndividualContainers" >

      <Link to={this.props.story.link}>{this.props.story.mainImage ? <Image cloud_name='novaterra' className="mainImageStoriesProfilePage" publicId={this.props.story.mainImage}><Transformation crop="thumb" /></Image> : <img src={'../images/noImage.png'} className="mainImageStoriesProfilePage" />}</Link>
      <div className="profile__categoryMarginTop"></div>

      <div className="profileStory__mainFloatLeft">
      <div className="profile__authorLargerDiv2" ref={this.setCategory1Ref}>
      <Link to={`/${this.props.story.category}`} className="profile__topMoreCat">
        {this.props.story.category}
    </Link>
     </div>

     <div className="profileUserStory__authorSection">

     <div ref={this.setAuthorImage3Ref} className="floatLeft"><Link to={this.findUser(this.props.story.userId).profileUrl}>{this.findUser(this.props.story.userId).profilePhoto ? <div><div className="profile__behindCircleUserProfileStory"></div><Image className="profile__popMainStoryImage2UserProfileStoryImage floatLeft" cloud_name='novaterra' publicId={this.findUser(this.props.story.userId).profilePhoto}><Transformation crop="thumb" /></Image></div> :
     <img src={`images/noImage.png`} className="profile__popMainStoryImage2UserProfileStory floatLeft"/>}</Link></div>

     <div className="floatLeft categoryAndTag__authorBelowStorySecondStory">
       <div className="profileserUStory__popContainerReadingText">
       <div className="floatLeft categoryAndTag__authorBelowStorySide" ref={this.setAuthorName3Ref}>
       <AuthorTooltip route='' userId={this.props.story.userId} users={this.props.users} />
       </div>
       <div className="categoryAndTag__authorBelowStorySideRead">
         {moment(this.props.story.lastUpdated).format('MMM DD')} · {this.props.story.minRead} min
       </div>
       </div>
     </div>

     </div>

     <div className="userprofile__bottomShareAndCommentsStory1">
         <FontAwesomeIcon icon={['far', 'comments']} className="profile__bottomCommentIconStory" />
      <div className="scFont profile__bottomCommentNumStory1">{this.props.story.comments}</div>

      <div className="profile__commentAndSharesLineStory1">
      </div>

      <FontAwesomeIcon icon={['fas', 'globe-americas']} className="profile__bottomShareIconStory" />
      <div className="scFont profile__bottomShareNumStory1">{this.props.story.likes.length}</div>
     </div>

      <div className="profile__moreArContainerTitleUserProfileStory" onClick={() => this.titleClick()}>{this.props.story.title}</div>


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
})(UserProfileStory);
