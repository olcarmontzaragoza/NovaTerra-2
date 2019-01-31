import React from 'react';
import { withTracker } from 'meteor/react-meteor-data';
import { Link } from 'react-router-dom';
import moment from 'moment';
import AuthorTooltip from '../Tooltips/AuthorTooltip';
import { funcReplace } from '../../../routes/routes.js';

import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { fas } from '@fortawesome/free-solid-svg-icons';

import {Image, Video, Transformation, CloudinaryContext} from 'cloudinary-react';

export class StoryElement extends React.Component {
constructor(props) {
super(props);
this.state = {

};
this.setTopContainer1Ref = this.setTopContainer1Ref.bind(this);
this.setCategory1Ref = this.setCategory1Ref.bind(this);
this.setAuthorName1Ref = this.setAuthorName1Ref.bind(this);
this.setAuthorImage1Ref = this.setAuthorImage1Ref.bind(this);

this.handleClickOutside = this.handleClickOutside.bind(this);
}
setCategory1Ref(node) {
    this.category1 = node;
}
setTopContainer1Ref(node) {
    this.topContainer1 = node;
}
setAuthorName1Ref(node) {
    this.authorName1 = node;
}
setAuthorImage1Ref(node) {
    this.authorImage1 = node;
}
componentDidMount() {
    document.addEventListener('mousedown', this.handleClickOutside);
}
componentWillUnmount() {
    document.removeEventListener('mousedown', this.handleClickOutside);
}
handleClickOutside(e) {

  if (this.topContainer1 && this.category1 && this.authorName1 && this.authorImage1 && this.topContainer1.contains(e.target) && !this.category1.contains(e.target) && !this.authorName1.contains(e.target) && !this.authorImage1.contains(e.target)) {
    funcReplace(this.props.story.link);
  }
}
findUser(id) {
let user = this.props.users.findOne({ _id: id });
return user;
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
render() {
    return (
      <div>
        <div ref={this.setTopContainer1Ref} className="search__moreIndividualContainers" >

        <Image cloud_name='novaterra' className="categoryAndTags__bottomContainerImage" publicId={this.props.story.mainImage}><Transformation crop="thumb" /></Image>
        <div className="profile__categoryMarginTop"></div>
        <div className="search__authorLargerDiv2" ref={this.setCategory1Ref}><div className="search_a search__topMoreCat">
          Story
      </div></div>

        <div className={`search__moreArContainerTitleStories ${this.userHasSeenStory(this.props.story) ? 'title__grey' : ''}`}>{this.props.story.title.length > 55 ? this.props.story.title.slice(0, 55) + '...' : this.props.story.title}</div>

        {/* <div className="clearBoth"></div> */}

        <div className="search__categoryMarginBottom"></div>

        <div ref={this.setAuthorImage1Ref}><Link to={this.findUser(this.props.story.userId).profileUrl}>{this.findUser(this.props.story.userId).profilePhoto ? <div><div className="search__behindCircle"></div><Image className="search__bottomStoriesAuthorImage floatLeft" cloud_name='novaterra' publicId={this.findUser(this.props.story.userId).profilePhoto}><Transformation crop="thumb" /></Image></div> :
        <img src={`images/noImage.png`} className="search__bottomStoriesAuthorImage floatLeft"/>}</Link></div>

          <div className="floatLeft search__bottomStoriesSpacingBelowAuthorImage">
              <div className="search__popContainerReadingText">
              <div className="search__authorToolTipPositioning" ref={this.setAuthorName1Ref}>
                <AuthorTooltip route='' userId={this.props.story.userId} users={this.props.users} />
                </div>
                <div>{moment(this.props.story.lastUpdated).format('MMM DD')} · {this.props.story.minRead} min</div>

                </div>
            </div>
            <div className="search__mobileStylesBottomHeightStory"></div>
       </div>
      </div>
            );
          }
        }

export default withTracker(() => {
Meteor.subscribe('stories');
return {

};
})(StoryElement);
