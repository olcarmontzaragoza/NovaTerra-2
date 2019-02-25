import React from 'react';
import { withTracker } from 'meteor/react-meteor-data';
import AuthorTooltip from '../Tooltips/AuthorTooltip';
import { Stories } from '../../../api/stories';
import { Link } from 'react-router-dom';
import moment from 'moment';
import { funcReplace } from '../../../routes/routes.js';

import {Image, Video, Transformation, CloudinaryContext} from 'cloudinary-react';

export class MiddleStory extends React.Component {
constructor(props) {
super(props);
this.state = {

};
this.setTopContainer1Ref = this.setTopContainer1Ref.bind(this);
this.setCategory1Ref = this.setCategory1Ref.bind(this);
this.setAuthorName1Ref = this.setAuthorName1Ref.bind(this);

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
componentDidMount() {
    document.addEventListener('mousedown', this.handleClickOutside);
}
componentWillUnmount() {
    document.removeEventListener('mousedown', this.handleClickOutside);
}
handleClickOutside(e) {

  if (this.topContainer1 && this.category1 && this.authorName1 && this.topContainer1.contains(e.target) && !this.category1.contains(e.target) && !this.authorName1.contains(e.target)) {
    funcReplace(this.props.story.link);
  }
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
        <div className="homeMiddle__moreIndividualContainers" ref={this.setTopContainer1Ref}>
        <div className="floatLeft">
            <div className="categoryAndTags__authorLargerDiv2HomeMiddle" ref={this.setCategory1Ref}><Link to={`/${this.props.story.category}`} className="homeMiddle__topMoreCat">
            {this.props.story.category}
            </Link></div>

        <div className="homeMiddle__moreStoryReTitle1">
          <Link to={this.props.story.link} className={`homeMiddle__moreArContainerTitle ${this.userHasSeenStory(this.props.story) ? 'title__grey' : ''}`}>{this.props.story.title.length > 68 ? this.props.story.title.slice(0, 68) + '...' : this.props.story.title}</Link>
        </div>
        <div className="homeMiddle__middleStorySpacing"></div>
        {this.props.story.title.length < 46 ?
        <div className="homeMiddle__storyAbout">
        {this.props.story.description.length > 49 ? this.props.story.description.slice(0, 49) + '...' :  this.props.story.description}
        </div> : undefined }

        <div className="homeMiddle__middleArticleAuthorTooltip" ref={this.setAuthorName1Ref}>
        <AuthorTooltip route='' userId={this.props.story.userId} users={this.props.users} />
        </div>
        <div className="homeMiddle__readTimeAndDate">
        <div> {moment(this.props.story.lastUpdated).format('DD MMM YYYY')} · {this.props.story.minRead} min read</div>
        </div>
        </div>
        <Link to={this.props.story.link}><Image cloud_name='novaterra' className="homeMiddle__moreStoryImages1" publicId={this.props.story.mainImage}><Transformation crop="thumb" /></Image></Link>

          <div className=""></div>
          <div className="clearBoth"></div>

      </div>
      </div>
    );
  }
}

export default withTracker(() => {
return {

};
})(MiddleStory);
