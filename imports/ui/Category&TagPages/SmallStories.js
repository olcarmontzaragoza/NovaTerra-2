import React from 'react';
import { withTracker } from 'meteor/react-meteor-data';
import { Link } from 'react-router-dom';
import moment from 'moment';
import AuthorTooltip from '../Components/Tooltips/AuthorTooltip';

import {Image, Video, Transformation, CloudinaryContext} from 'cloudinary-react';

export class SmallStories extends React.Component {
constructor(props) {
super(props);
this.state = {

};
}
findUser(userId) {
    const user = this.props.users.findOne({ _id: userId });
    return user;
}
userHasSeenStory(story) {
if (Meteor.userId()) {
let user = this.props.users.findOne({ _id: Meteor.userId() });
console.log(story);
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
        <div ref={this.props.refs[0]} className="categoryAndTag__largerContainerStories1BottomSmallStories">
        <div className="containerStory1">
        <Link to={this.props.collection.link}><Image cloud_name='novaterra' className="categoryAndTags__bottomContainerImageSmallStories" publicId={this.props.collection.mainImage}><Transformation crop="thumb" /></Image></Link>
        <hr className="categoriesAndTags__popularImageLineBelow1"/>
        <div className="popularContainerHeightsAndShadowBelow">
        <div className="popularContainerInnerMargins">

          <div className="categoriesAndTags__bottomStoriesSpacing"></div>

        <div ref={this.props.refs[1]} className="categoryAndTags__authorLargerDiv4"><Link to={`/${this.props.collection.category}`} className="categoryAndTag__popularStoryCategoriesSmall categoryAndTag__firstBottomContainerCategory">
        {this.props.collection.category}
        </Link></div>
       <div className="popArtTitleHover">
          <div className={`popularMainStoryTitlesBottom categoryAndTag__bottomContainerTitle ${this.userHasSeenStory(this.props.collection) ? 'title__grey' : ''}`}>{this.props.collection.title.length > 48 ? this.props.collection.title.slice(0, 48) + '...' : this.props.collection.title}</div>
          </div>

        <div ref={this.props.refs[2]}><Link to={this.findUser(this.props.collection.userId).profileUrl}>{this.findUser(this.props.collection.userId).profilePhoto ? <div><div className="catAndTag__behindCircle4"></div><Image className="categoryAndTag__bottomStoriesAuthorImage floatLeft" cloud_name='novaterra' publicId={this.findUser(this.props.collection.userId).profilePhoto}><Transformation crop="thumb" /></Image></div> :
        <img src={`images/noImage.png`} className="categoryAndTag__bottomStoriesAuthorImage floatLeft"/>}</Link></div>

        <div className="floatLeft categoryAndTag__authorBelowStorySecondStoryBottom">
        <div className="categoryAndTag__popContainerReadingText">
        <div className="floatLeft categoryAndTag__authorBelowStorySide" ref={this.props.refs[3]}>
        <AuthorTooltip route='' userId={this.props.collection.userId} users={this.props.users} />
        </div>
        <div className="categoryAndTag__authorBelowStorySideRead">
            {moment(this.props.collection.lastUpdated).format('MMM DD')} · {this.props.collection.minRead} min
          </div>
        </div>
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
})(SmallStories);
