import React from 'react';
import { withTracker } from 'meteor/react-meteor-data';
import { Link } from 'react-router-dom';
import { Meteor } from 'meteor/meteor';
import moment from 'moment';
import { funcReplace } from '../../../routes/routes.js';
import AuthorTooltip from '../Tooltips/AuthorTooltip';

import {Image, Video, Transformation, CloudinaryContext} from 'cloudinary-react';

import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';

library.add(far);
library.add(fas);

export class LatestStory extends React.Component {
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
        <div ref={this.props.refs[0]} className="bottomMoreIndividualContainers">
        <div ref={this.props.refs[1]} className="db__categoryMarginTop"><Link to={`/${this.props.story.category}`} className="db__topMoreCat">
          {this.props.story.category}
        </Link></div>

        <a className={`db__latestMoreArContainerTitle ${this.userHasSeenStory(this.props.story) ? 'title__grey' : ''}`}>{this.props.story.title.length > 59 ? this.props.story.title.slice(0, 59) + '...' : this.props.story.title}</a>
        <Link to={this.props.story.link}><Image cloud_name='novaterra' className="db__bottomMoreStoryImages" publicId={this.props.story.mainImage}><Transformation crop="thumb" /></Image></Link>

        <div className="db__bottomLatestElimateSpacing"></div>

        <div ref={this.props.refs[2]} className="floatLeft"><Link to={this.findUser(this.props.story.userId).profileUrl}>{this.findUser(this.props.story.userId).profilePhoto ? <div><div className="ab__behindCircleLatest"></div><Image className="ab__bottomMainStoryImage1Image" cloud_name='novaterra' publicId={this.findUser(this.props.story.userId).profilePhoto}><Transformation crop="thumb" /></Image></div> :
        <img src={`../images/noImage.png`} className="ab__bottomMainStoryImage1"/>}</Link></div>

         <div className="floatLeft ab__latestMarginLeftAuthor">
         <div className="popContainerReadingText bottomPositionReadTextStory1">
         <div className="storyBottom__authorBelowStoryVeryBottom">
             <AuthorTooltip route='../' userId={this.props.story.userId} users={this.props.users} />
        </div></div>
        <div className="popContainerReadingText bottomPositionReadTextStory1">
        <div className="storyBottom__dateAndReadBelowStoryVeryBottom">
        {moment(this.props.story.lastUpdated).format('DD MMM')} · {this.props.story.minRead} min
        </div>
        </div>
        </div>

        <div className="bottomShareAndCommentsStory1">
            <FontAwesomeIcon icon={['far', 'comments']} className="bottomCommentIconStory" />
         <div className="scFont bottomCommentNumStory1">{this.props.story.comments}</div>

         <div className="storyBottom__commentAndSharesLineStory1">
         </div>

         <FontAwesomeIcon icon={['fas', 'globe-americas']} className="bottomShareIconStory" />
         <div className="scFont bottomShareNumStory1">{this.props.story.likes.length}</div>
        </div></div>

     </div>
    );
  }
}

export default withTracker(() => {
return {

};
})(LatestStory);
