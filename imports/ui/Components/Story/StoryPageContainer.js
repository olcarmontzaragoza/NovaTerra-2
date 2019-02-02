import React from 'react';
import { withTracker } from 'meteor/react-meteor-data';
import { Link } from 'react-router-dom';
import { Meteor } from 'meteor/meteor';
import moment from 'moment';
import { funcReplace } from '../../../routes/routes.js';
import AuthorTooltip from '../Tooltips/AuthorTooltip';

import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';

import {Image, Video, Transformation, CloudinaryContext} from 'cloudinary-react';

library.add(far);
library.add(fas);

export class Contact extends React.Component {
constructor(props) {
super(props);
this.state = {

};
this.setTopContainerBottom1Ref = this.setTopContainerBottom1Ref.bind(this);
this.setCategoryBottom1Ref = this.setCategoryBottom1Ref.bind(this);
this.setAuthorNameBottom1Ref = this.setAuthorNameBottom1Ref.bind(this);
this.setAuthorImageBottom1Ref = this.setAuthorImageBottom1Ref.bind(this);

this.setTopContainerBottom2Ref = this.setTopContainerBottom2Ref.bind(this);
this.setCategoryBottom2Ref = this.setCategoryBottom2Ref.bind(this);
this.setAuthorNameBottom2Ref = this.setAuthorNameBottom2Ref.bind(this);
this.setAuthorImageBottom2Ref = this.setAuthorImageBottom2Ref.bind(this);

this.setTopContainerBottom3Ref = this.setTopContainerBottom3Ref.bind(this);
this.setCategoryBottom3Ref = this.setCategoryBottom3Ref.bind(this);
this.setAuthorNameBottom3Ref = this.setAuthorNameBottom3Ref.bind(this);
this.setAuthorImageBottom3Ref = this.setAuthorImageBottom3Ref.bind(this);

this.handleClickOutside = this.handleClickOutside.bind(this);
}
setCategoryBottom1Ref(node) {
    this.bottomCategory1 = node;
}
setTopContainerBottom1Ref(node) {
    this.bottomTopContainer1 = node;
}
setAuthorNameBottom1Ref(node) {
    this.bottomAuthorName1 = node;
}
setAuthorImageBottom1Ref(node) {
    this.bottomAuthorImage1 = node;
}
setCategoryBottom2Ref(node) {
    this.bottomCategory2 = node;
}
setTopContainerBottom2Ref(node) {
    this.bottomTopContainer2 = node;
}
setAuthorNameBottom2Ref(node) {
    this.bottomAuthorName2 = node;
}
setAuthorImageBottom2Ref(node) {
    this.bottomAuthorImage2 = node;
}
setCategoryBottom3Ref(node) {
    this.bottomCategory3 = node;
}
setTopContainerBottom3Ref(node) {
    this.bottomTopContainer3 = node;
}
setAuthorNameBottom3Ref(node) {
    this.bottomAuthorName3 = node;
}
setAuthorImageBottom3Ref(node) {
    this.bottomAuthorImage3 = node;
}
componentDidMount() {
    document.addEventListener('mousedown', this.handleClickOutside);
}
componentWillUnmount() {
    document.removeEventListener('mousedown', this.handleClickOutside);
}
handleClickOutside(e) {
  console.log('IS HANDLING CLICK');
  if (this.bottomTopContainer1 && this.bottomCategory1 && this.bottomAuthorName1 && this.bottomAuthorImage1 && this.bottomTopContainer1.contains(e.target) && !this.bottomCategory1.contains(e.target) && !this.bottomAuthorName1.contains(e.target) && !this.bottomAuthorImage1.contains(e.target)) {
  window.location = `${this.props.stories[0].link}`;
    console.log('CLICKED THE FIIIIIIRST');
  } else if (this.bottomTopContainer2 && this.bottomCategory2 && this.bottomAuthorName2 && this.bottomAuthorImage2 && this.bottomTopContainer2.contains(e.target) && !this.bottomCategory2.contains(e.target) && !this.bottomAuthorName2.contains(e.target) && !this.bottomAuthorImage2.contains(e.target)) {
    window.location = `${this.props.stories[1].link}`;      // funcReplace(this.props.stories[1].link);
  } else if (this.bottomTopContainer3 && this.bottomCategory3 && this.bottomAuthorName3 && this.bottomAuthorImage3 && this.bottomTopContainer3.contains(e.target) && !this.bottomCategory3.contains(e.target) && !this.bottomAuthorName3.contains(e.target) && !this.bottomAuthorImage3.contains(e.target)) {
    window.location = `${this.props.stories[2].link}`;        // funcReplace(this.props.stories[2].link);
}
}
findUser(userId) {
    const user = this.props.users.findOne({ _id: userId });
    return user;
}
render() {
    return (
      <div>
        <div className={`largerContainerStories1 ${this.props.topClassName}`}>
        <div className="smallerContainerStories1">

        <div ref={this.setTopContainerBottom1Ref} className="bottomContainerStory1">
        <Link to={this.props.stories[0].link}><Image cloud_name='novaterra' className="imageid popMainImageStyle" publicId={this.props.stories[0].mainImage}><Transformation crop="thumb" /></Image></Link>

            <hr className="popularImageLineBelow" />
        <div className="popularContainerHeightsAndShadow">
        <div className="popularContainerInnerMargins">
          <div ref={this.setCategoryBottom1Ref}><Link to={`/${this.props.stories[0].category}`} className="popularStoryCategories">
            {this.props.stories[0].category}
         </Link></div>
           <div className="popArtTitleHover">
          <a className="popularMainStoryTitles">{this.props.stories[0].title.length > 56 ? this.props.stories[0].title.slice(0, 56) + '...' : this.props.stories[0].title}</a>
          </div>
        <div className="popContainersLower">

        <div ref={this.setAuthorImageBottom1Ref}><Link to={this.findUser(this.props.stories[0].userId).profileUrl}>{this.findUser(this.props.stories[0].userId).profilePhoto ? <div><div className="ab__behindCircleContainerr"></div><Image className="ab__popMainStoryImage1Image" cloud_name='novaterra' publicId={this.findUser(this.props.stories[0].userId).profilePhoto}><Transformation crop="thumb" /></Image></div> :
        <img src={`../images/noImage.png`} className="ab__popMainStoryImage1"/>}</Link></div>

              <div className="floatLeft positionAbAuthorContainer">
              <div className="popContainerReadingText positionReadTextStory1">
              <div className="storyBottom__authorBelowStory" ref={this.setAuthorNameBottom1Ref}>
                  <AuthorTooltip route='../' userId={this.props.stories[0].userId} users={this.props.users} />
              </div></div>
            <div className="popContainerReadingText positionReadTextStory1">
          <div className="storyBottom__dateAndReadBelowStory">
              {moment(this.props.stories[0].lastUpdated).format('DD MMM')} · {this.props.stories[0].minRead} min
          </div>
        </div>
        </div>
         <div className="shareAndCommentsStory1">
             <FontAwesomeIcon icon={['far', 'comments']} className="commentIconStory" />
          <div className="scFont commentNumStory1">{this.props.stories[0].comments}</div>

          <div className="storyBottom__commentAndSharesLineStory1">
          </div>

          <FontAwesomeIcon icon={['fas', 'globe-americas']} className="shareIconStory" />
          <div className="scFont shareNumStory1">{this.props.stories[0].likes.length}</div>
                </div>
          </div>
        </div>
         </div>
        </div>

        { this.props.stories[1] ?

            <div ref={this.setTopContainerBottom2Ref} className="bottomContainerStory2">
            <Link to={this.props.stories[1].link}><Image cloud_name='novaterra' className="imageid popMainImageStyle" publicId={this.props.stories[1].mainImage}><Transformation crop="thumb" /></Image></Link>

            <hr className="popularImageLineBelow" />
        <div className="popularContainerHeightsAndShadow">
        <div className="popularContainerInnerMargins">
        <div ref={this.setCategoryBottom2Ref}><Link to={`/${this.props.stories[1].category}`} className="popularStoryCategories">
              {this.props.stories[1].category}
        </Link></div>
           <div className="popArtTitleHover">
          <a className="popularMainStoryTitles popularContainerStory2Title">{this.props.stories[1].title.length > 56 ? this.props.stories[1].title.slice(0, 56) + '...' : this.props.stories[1].title}</a>
          </div>

        <div className="popContainersLower">

        <div ref={this.setAuthorImageBottom2Ref}><Link to={this.findUser(this.props.stories[1].userId).profileUrl}>{this.findUser(this.props.stories[1].userId).profilePhoto ? <div><div className="ab__behindCircleContainerr"></div><Image className="ab__popMainStoryImage1Image" cloud_name='novaterra' publicId={this.findUser(this.props.stories[1].userId).profilePhoto}><Transformation crop="thumb" /></Image></div> :
        <img src={`../images/noImage.png`} className="ab__popMainStoryImage1"/>}</Link></div>

          <div className="floatLeft positionAbAuthorContainer">
          <div className="popContainerReadingText positionReadTextStory1">
          <div className="storyBottom__authorBelowStory" ref={this.setAuthorNameBottom2Ref}>
              <AuthorTooltip route='../' userId={this.props.stories[1].userId} users={this.props.users} />
          </div></div>
        <div className="popContainerReadingText positionReadTextStory1">
        <div className="storyBottom__dateAndReadBelowStory">
          {moment(this.props.stories[1].lastUpdated).format('DD MMM')} · {this.props.stories[1].minRead} min
        </div>
        </div>
        </div>
        <div className="shareAndCommentsStory1">
            <FontAwesomeIcon icon={['far', 'comments']} className="commentIconStory" />
          <div className="scFont commentNumStory1">{this.props.stories[1].comments}</div>

          <div className="storyBottom__commentAndSharesLineStory1">
          </div>

            <FontAwesomeIcon icon={['fas', 'globe-americas']} className="shareIconStory" />
          <div className="scFont shareNumStory1">{this.props.stories[1].likes.length}</div>
                </div>
          </div>
        </div>
        </div>
        </div>

        : undefined }

        { this.props.stories[2] ?

        <div ref={this.setTopContainerBottom3Ref} className="bottomContainerStory3">
        <Link to={this.props.stories[2].link}><Image cloud_name='novaterra' className="imageid popMainImageStyle" publicId={this.props.stories[2].mainImage}><Transformation crop="thumb" /></Image></Link>

            <hr className="popularImageLineBelow" />
        <div className="popularContainerHeightsAndShadow">
        <div className="popularContainerInnerMargins">
        <div ref={this.setCategoryBottom3Ref}><Link to={`/${this.props.stories[2].category}`} className="popularStoryCategories">
            {this.props.stories[2].category}
        </Link></div>
           <div className="popArtTitleHover">
          <a className="popularMainStoryTitles popularContainerStory3Title">{this.props.stories[2].title.length > 56 ? this.props.stories[2].title.slice(0, 56) + '...' : this.props.stories[2].title}</a>
          </div>

        <div className="popContainersLower">
            <div className="floatLeft">
         <div ref={this.setAuthorImageBottom3Ref} className="floatLeft ab__storyThreeMarginRight"><Link to={this.findUser(this.props.stories[2].userId).profileUrl}>{this.findUser(this.props.stories[2].userId).profilePhoto ? <div><div className="ab__behindCircleContainerr"></div><Image className="ab__popMainStoryImage1Image" cloud_name='novaterra' publicId={this.findUser(this.props.stories[2].userId).profilePhoto}><Transformation crop="thumb" /></Image></div> :
         <img src={`../images/noImage.png`} className="ab__popMainStoryImage1"/>}</Link></div>

          <div className="floatLeft positionAbAuthorContainer">
          <div className="popContainerReadingText positionReadTextStory1">
          <div className="storyBottom__authorBelowStory" ref={this.setAuthorNameBottom3Ref}>
              <AuthorTooltip route='../' userId={this.props.stories[2].userId} users={this.props.users} />
          </div></div>
        <div className="popContainerReadingText positionReadTextStory1">
        <div className="storyBottom__dateAndReadBelowStory">
          {moment(this.props.stories[2].lastUpdated).format('DD MMM')} · {this.props.stories[2].minRead} min
        </div>
        </div>
        </div>
        <div className="shareAndCommentsStory1">
          <FontAwesomeIcon icon={['far', 'comments']} className="commentIconStory" />
          <div className="scFont commentNumStory1">{this.props.stories[2].comments}</div>

          <div className="storyBottom__commentAndSharesLineStory1">
          </div>

         <FontAwesomeIcon icon={['fas', 'globe-americas']} className="shareIconStory" />
          <div className="scFont shareNumStory1">{this.props.stories[2].likes.length}</div>
         </div>
          </div>
          </div>
          </div>
         </div>
        </div>
        : undefined }

        </div>
        </div>
      </div>
    );
  }
}

export default withTracker(() => {
return {

};
})(Contact);
