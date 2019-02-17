import React from 'react';
import { withTracker } from 'meteor/react-meteor-data';
import { Link } from 'react-router-dom';
import { Stories } from '../../api/stories';
import { funcReplace } from '../../routes/routes.js';
import { Meteor } from 'meteor/meteor';
import moment from 'moment';
import { Session } from 'meteor/session';

import {Image, Video, Transformation, CloudinaryContext} from 'cloudinary-react';

import SmallStories from './SmallStories';
import AuthorTooltip from '../Components/Tooltips/AuthorTooltip';
import ImageTooltip from '../Components/Tooltips/ImageTooltip';

Meteor.subscribe('allUsers');

const findUser = (userId) => {
  return Meteor.users.findOne({ userId });
}

Session.set('sliceNumCatTag', 8);

export class LatAndPop extends React.Component {
constructor(props) {
super(props);
this.state = {
showMoreStories: [],
sliceNum: Session.get('sliceNumCatTag'),
storiesLefToShow: this.props.collection.length > 8,
// firstAuthor: console.log(findUser(this.props.collection[0].userId)),
// authorOnne: Meteor.user() ? console.log(Meteor.users.findOne({ userId: this.props.collection[0].userId})) : undefined
// author0: Meteor.users.findOne({ userId: this.props.collection[0].userId }) ? Meteor.users.findOne({ userId: this.props.collection[0].userId }.username) : undefined,
// authorZeroTwo: Meteor.users.findOne({}, { userId: this.props.collection[0].userId }),
// authorZero: Session.set('authorZero', Meteor.users.find({}, { userId: this.props.collection[0].userId }).fetch()),
// authorZeroTwo: findUser(this.props.collection[0].userId)
};
this.setTopContainer1Ref = this.setTopContainer1Ref.bind(this);
this.setCategory1Ref = this.setCategory1Ref.bind(this);
this.setAuthorName1Ref = this.setAuthorName1Ref.bind(this);
this.setAuthorImage1Ref = this.setAuthorImage1Ref.bind(this);

this.setTopContainer2Ref = this.setTopContainer2Ref.bind(this);
this.setCategory2Ref = this.setCategory2Ref.bind(this);
this.setAuthorName2Ref = this.setAuthorName2Ref.bind(this);
this.setAuthorImage2Ref = this.setAuthorImage2Ref.bind(this);

this.setTopContainer3Ref = this.setTopContainer3Ref.bind(this);
this.setCategory3Ref = this.setCategory3Ref.bind(this);
this.setAuthorName3Ref = this.setAuthorName3Ref.bind(this);
this.setAuthorImage3Ref = this.setAuthorImage3Ref.bind(this);

this.setTopContainer4Ref = this.setTopContainer4Ref.bind(this);
this.setCategory4Ref = this.setCategory4Ref.bind(this);
this.setAuthorName4Ref = this.setAuthorName4Ref.bind(this);
this.setAuthorImage4Ref = this.setAuthorImage4Ref.bind(this);

this.setTopContainer5Ref = this.setTopContainer5Ref.bind(this);
this.setCategory5Ref = this.setCategory5Ref.bind(this);
this.setAuthorName5Ref = this.setAuthorName5Ref.bind(this);
this.setAuthorImage5Ref = this.setAuthorImage5Ref.bind(this);

this.setTopContainer6Ref = this.setTopContainer6Ref.bind(this);
this.setCategory6Ref = this.setCategory6Ref.bind(this);
this.setAuthorName6Ref = this.setAuthorName6Ref.bind(this);
this.setAuthorImage6Ref = this.setAuthorImage6Ref.bind(this);

this.setTopContainer7Ref = this.setTopContainer7Ref.bind(this);
this.setCategory7Ref = this.setCategory7Ref.bind(this);
this.setAuthorName7Ref = this.setAuthorName7Ref.bind(this);
this.setAuthorImage7Ref = this.setAuthorImage7Ref.bind(this);

this.setTopContainer8Ref = this.setTopContainer8Ref.bind(this);
this.setCategory8Ref = this.setCategory8Ref.bind(this);
this.setAuthorName8Ref = this.setAuthorName8Ref.bind(this);
this.setAuthorImage8Ref = this.setAuthorImage8Ref.bind(this);

this.handleClickOutside = this.handleClickOutside.bind(this);
this.handleLoad = this.handleClickOutside.bind(this);
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
setCategory2Ref(node) {
    this.category2 = node;
}
setTopContainer2Ref(node) {
    this.topContainer2 = node;
}
setAuthorName2Ref(node) {
    this.authorName2 = node;
}
setAuthorImage2Ref(node) {
    this.authorImage2 = node;
}
setCategory3Ref(node) {
    this.category3 = node;
}
setTopContainer3Ref(node) {
    this.topContainer3 = node;
}
setAuthorName3Ref(node) {
    this.authorName3 = node;
}
setAuthorImage3Ref(node) {
    this.authorImage3 = node;
}
setCategory4Ref(node) {
    this.category4 = node;
}
setTopContainer4Ref(node) {
    this.topContainer4 = node;
}
setAuthorName4Ref(node) {
    this.authorName4 = node;
}
setAuthorImage4Ref(node) {
    this.authorImage4 = node;
}
setCategory5Ref(node) {
    this.category5 = node;
}
setTopContainer5Ref(node) {
    this.topContainer5 = node;
}
setAuthorName5Ref(node) {
    this.authorName5 = node;
}
setAuthorImage5Ref(node) {
    this.authorImage5 = node;
}
setCategory6Ref(node) {
    this.category6 = node;
}
setTopContainer6Ref(node) {
    this.topContainer6 = node;
}
setAuthorName6Ref(node) {
    this.authorName6 = node;
}
setAuthorImage6Ref(node) {
    this.authorImage6 = node;
}
setCategory7Ref(node) {
    this.category7 = node;
}
setTopContainer7Ref(node) {
    this.topContainer7 = node;
}
setAuthorName7Ref(node) {
    this.authorName7 = node;
}
setAuthorImage7Ref(node) {
    this.authorImage7 = node;
}
setCategory8Ref(node) {
    this.category8 = node;
}
setTopContainer8Ref(node) {
    this.topContainer8 = node;
}
setAuthorName8Ref(node) {
    this.authorName8 = node;
}
setAuthorImage8Ref(node) {
    this.authorImage8 = node;
}
componentDidMount() {
    document.addEventListener('mousedown', this.handleClickOutside);
}
componentWillUnmount() {
    document.removeEventListener('mousedown', this.handleClickOutside);
}
handleClickOutside(e) {

  if (this.topContainer1 && this.category1 && this.authorName1 && this.authorImage1 && this.topContainer1.contains(e.target) && !this.category1.contains(e.target) && !this.authorName1.contains(e.target) && !this.authorImage1.contains(e.target)) {
    funcReplace(this.props.collection[0].link);
  } else if (this.topContainer2 && this.category2 && this.authorName2 && this.authorImage2 && this.topContainer2.contains(e.target) && !this.category2.contains(e.target) && !this.authorName2.contains(e.target) && !this.authorImage2.contains(e.target)) {
    funcReplace(this.props.collection[1].link);
  } else if (this.topContainer3 && this.category3 && this.authorName3 && this.authorImage3 && this.topContainer3.contains(e.target) && !this.category3.contains(e.target) && !this.authorName3.contains(e.target) && !this.authorImage3.contains(e.target)) {
    funcReplace(this.props.collection[2].link);
  } else if (this.topContainer4 && this.category4 && this.authorName4 && this.authorImage4 && this.topContainer4.contains(e.target) && !this.category4.contains(e.target) && !this.authorName4.contains(e.target) && !this.authorImage4.contains(e.target)) {
    funcReplace(this.props.collection[3].link);
  } else if (this.topContainer5 && this.category5 && this.authorName5 && this.authorImage5 && this.topContainer5.contains(e.target) && !this.category5.contains(e.target) && !this.authorName5.contains(e.target) && !this.authorImage5.contains(e.target)) {
    funcReplace(this.props.collection[4].link);
  } else if (this.topContainer6 && this.category6 && this.authorName6 && this.authorImage6 && this.topContainer6.contains(e.target) && !this.category6.contains(e.target) && !this.authorName6.contains(e.target) && !this.authorImage6.contains(e.target)) {
    funcReplace(this.props.collection[5].link);
  } else if (this.topContainer7 && this.category7 && this.authorName7 && this.authorImage7 && this.topContainer7.contains(e.target) && !this.category7.contains(e.target) && !this.authorName7.contains(e.target) && !this.authorImage7.contains(e.target)) {
    funcReplace(this.props.collection[6].link);
  } else if (this.topContainer8 && this.category8 && this.authorName8 && this.authorImage8 && this.topContainer8.contains(e.target) && !this.category8.contains(e.target) && !this.authorName8.contains(e.target) && !this.authorImage8.contains(e.target)) {
    funcReplace(this.props.collection[7].link);
  }

}
// handleLoad() {
// console.log(Meteor.users.findOne({ userId: this.props.collection[0].userId }));
// // console.log(Meteor.users.findOne({ userId: this.props.collection[0].userId }));
// }
mapSmallerStories() {
  if (this.props.collection.length === 1) {
    return   <div className="categoryAndTag__marginLeftSmallStories"><SmallStories users={this.props.users} collection={this.props.collection[0]} refs={[this.setTopContainer1Ref, this.setCategory1Ref, this.setAuthorImage1Ref, this.setAuthorName1Ref]}/></div>;
  } else if (this.props.collection.length === 2) {
    return (
    <div className="categoryAndTag__marginLeftSmallStories">
    <SmallStories users={this.props.users} collection={this.props.collection[0]} refs={[this.setTopContainer1Ref, this.setCategory1Ref, this.setAuthorImage1Ref, this.setAuthorName1Ref]}/>
    <SmallStories users={this.props.users} collection={this.props.collection[1]} refs={[this.setTopContainer2Ref, this.setCategory2Ref, this.setAuthorImage2Ref, this.setAuthorName2Ref]}/>
  </div>
  )
  } else if (this.props.collection.length === 3) {
    return (
    <div className="categoryAndTag__marginLeftSmallStories">
    <SmallStories users={this.props.users} collection={this.props.collection[0]} refs={[this.setTopContainer1Ref, this.setCategory1Ref, this.setAuthorImage1Ref, this.setAuthorName1Ref]}/>
    <SmallStories users={this.props.users} collection={this.props.collection[1]} refs={[this.setTopContainer2Ref, this.setCategory2Ref, this.setAuthorImage2Ref, this.setAuthorName2Ref]}/>
    <SmallStories users={this.props.users} collection={this.props.collection[2]} refs={[this.setTopContainer3Ref, this.setCategory3Ref, this.setAuthorImage3Ref, this.setAuthorName3Ref]}/>
  </div>
  )
} else if (this.props.collection.length === 4) {
    return (
    <div className="categoryAndTag__marginLeftSmallStories">
      <SmallStories users={this.props.users} collection={this.props.collection[0]} refs={[this.setTopContainer1Ref, this.setCategory1Ref, this.setAuthorImage1Ref, this.setAuthorName1Ref]}/>
      <SmallStories users={this.props.users} collection={this.props.collection[1]} refs={[this.setTopContainer2Ref, this.setCategory2Ref, this.setAuthorImage2Ref, this.setAuthorName2Ref]}/>
      <SmallStories users={this.props.users} collection={this.props.collection[2]} refs={[this.setTopContainer3Ref, this.setCategory3Ref, this.setAuthorImage3Ref, this.setAuthorName3Ref]}/>
      <SmallStories users={this.props.users} collection={this.props.collection[3]} refs={[this.setTopContainer4Ref, this.setCategory4Ref, this.setAuthorImage4Ref, this.setAuthorName4Ref]}/>
  </div>
  )
  } else {
  return <p className="categoryAndTag__noStoriesMessage">Sorry, we couldn't find any stories in this {this.props.type}. <Link to='/profile' className="categoryAndTag__noStoriesMessageLink">Want to write the very first story for this {this.props.type}?</Link></p>;
  }
}
renderSixMoreStories() {
let showMoreStories;
let newNumShow = Session.get('sliceNumCatTag') + 7;
Session.set('sliceNumCatTag', newNumShow);

let s1 = Session.get('sliceNumCatTag') -1;

if (this.props.collection[s1]) {
  showMoreStories = this.props.collection.slice(8, Session.get('sliceNumCatTag'));
} else {
  showMoreStories = this.props.collection.slice(8, this.props.collection.length);
  Session.set('storiesLeft', true);
}

this.setState({ showMoreStories });
}
getMiddleWidth() {
  let width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
  if (width > 1225) {
    return 36;
  } else {
    return 28;
  }
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
        <div className="categoryAndTag__topClearSpace"></div>

        <div className="titleSectionsCategories">
        {this.props.lat ? 'Latest' : 'Popular'}
        </div>

        {/* { Meteor.isServer ?  this.setState('author0', findUser(this.props.collection[0])) : undefined } */}

        <hr className="categoryAndTag__hrBelowTitle" />

        <div className="categoryAndTag__allStoriesMarginLeft">

        { this.props.collection.length > 4 ?

        <div>
        <div className="categoryAndTag__largerContainerStories1">

        { this.props.collection[0] ?
        <div className="floatLeft">
        <div className="containerStory1Top">
        <div width="385px">

        <Link to={this.props.collection[0].link}><Image cloud_name='novaterra' className="categoryAndTags__bottomContainerImage" publicId={this.props.collection[0].mainImage}><Transformation crop="thumb" /></Image></Link></div>

        <hr className="categoriesAndTags__popularImageLineBelow" />

        <div ref={this.setTopContainer1Ref} className="popularContainerHeightsAndShadow1">


        <div className="popularContainerInnerMarginsTop">

        {/* <div className="popularContainerHeightsAndShadow"></div> */}

        <div className="categoriesAndTags__firstStoryTopSpacing"></div>
        <div className="categoryAndTags__authorLargerDiv2" ref={this.setCategory1Ref}>
        <Link to={`/${this.props.collection[0].category}`} className="categoryAndTag__popularStoryCategoriesTop">
            {this.props.collection[0].category}
        </Link></div>
           <div className="popArtTitleHover">
          <div className={`categoryAndTag__firstStoryTitle ${this.userHasSeenStory(this.props.collection[0]) ? 'title__grey' : ''}`}>{this.props.collection[0].title.length > 58 ? this.props.collection[0].title.slice(0, 58) + '...' : this.props.collection[0].title}</div>
          </div>


          <div ref={this.setAuthorImage1Ref}><Link to={this.findUser(this.props.collection[0].userId).profileUrl}>
          {this.findUser(this.props.collection[0].userId).profilePhoto ? <div><div className="catAndTag__behindCircle"></div><Image className="categoryAndTag__popMainStoryImage1 floatLeft" cloud_name='novaterra' publicId={this.findUser(this.props.collection[0].userId).profilePhoto}><Transformation crop="thumb" /></Image></div> :
          <img src={`${this.props.route}images/noImage.png`} className="categoryAndTag__popMainStoryImage1 floatLeft"/>}</Link></div>

            <div className="floatLeft categoryAndTag__authorBelowStory">
              <div><div className="categoryAndTag__firstStoryAuthor">
              </div></div>
              <div className="categoryAndTag__popContainerReadingText">
              <div className="floatLeft categoryAndTag__authorBelowStory" ref={this.setAuthorName1Ref}>
              <AuthorTooltip route='' userId={this.props.collection[0].userId} users={this.props.users} />
              </div>
              <div className="categoryAndTag__authorBelowStoryRead">
                {moment(this.props.collection[0].lastUpdated).format('MMM DD')} · {this.props.collection[0].minRead} min
              </div>
              </div>
            </div>

              {/*
              <div className="hoverAuthorName hovAuthorNamePop categoryPageLatestAuthorName1">
              <ImageTooltip userId={}/>
              </div> */}

            </div>
          </div>
        </div>
        </div>
        : undefined }

          <div className="floatLeft">

          { this.props.collection[1] ?
          <div ref={this.setTopContainer2Ref} className="categoryAndTag__moreIndividualContainers categoryAndTag__secondContainer">
          <div className="categoryAndTag__sideArticlesTopSpacing"></div>
          <div className="categoryAndTags__authorLargerDiv" ref={this.setCategory2Ref}><Link to={`/${this.props.collection[1].category}`} className="categoryAndTag__topMoreCat">
            {this.props.collection[1].category}
        </Link></div>

          <div className={`categoryAndTag__moreArContainerTitle categoryAndTags__secondTitle ${this.userHasSeenStory(this.props.collection[1]) ? 'title__grey' : ''}`}>{this.props.collection[1].title.length > 69 ? this.props.collection[1].title.slice(0, 69) + '...' : this.props.collection[1].title}</div>
          <Link to={this.props.collection[1].link}><Image cloud_name='novaterra' className="categoryAndTag__middleMoreStoryImages" publicId={this.props.collection[1].mainImage}><Transformation crop="thumb" /></Image>  <img src={this.props.collection[1].mainImage} className="categoryAndTag__middleMoreStoryImages" /></Link>

         <div ref={this.setAuthorImage2Ref}><Link to={this.findUser(this.props.collection[1].userId).profileUrl}>{this.findUser(this.props.collection[1].userId).profilePhoto ? <div><div className="catAndTag__behindCircle2"></div><Image className="categoryAndTag__popMainStoryImage2 floatLeft" cloud_name='novaterra' publicId={this.findUser(this.props.collection[1].userId).profilePhoto}><Transformation crop="thumb" /></Image></div> :
         <img src={`${this.props.route}images/noImage.png`} className="categoryAndTag__popMainStoryImage2 floatLeft"/>}</Link></div>

           <div className="floatLeft categoryAndTag__authorBelowStorySecondStory">
           <div className="categoryAndTag__popContainerReadingText">
           <div className="floatLeft categoryAndTag__authorBelowStorySide" ref={this.setAuthorName2Ref}>
           <AuthorTooltip route='' userId={this.props.collection[0].userId} users={this.props.users} />
           </div>
           <div className="categoryAndTag__authorBelowStorySideRead">
             {moment(this.props.collection[1].lastUpdated).format('MMM DD')} · {this.props.collection[1].minRead} min
          </div>
           </div>
         </div>
        </div>
        : undefined }

          { this.props.collection[2] ?
          <div ref={this.setTopContainer3Ref} className="categoryAndTag__moreIndividualContainers categoryAndTag__marginTopSpacing1">
          <div className="categoryAndTag__sideArticlesTopSpacing"></div>
          <div className="categoryAndTags__authorLargerDiv" ref={this.setCategory3Ref}><Link to={`/${this.props.collection[2].category}`} className="categoryAndTag__topMoreCat">
            {this.props.collection[2].category}
          </Link></div>

            <div className={`categoryAndTag__moreArContainerTitle categoryAndTags__secondTitle ${this.userHasSeenStory(this.props.collection[2]) ? 'title__grey' : ''}`}>{this.props.collection[2].title.length > 69 ? this.props.collection[2].title.slice(0, 69) + '...' : this.props.collection[2].title}</div>

            <Link to={this.props.collection[2].link}><Image cloud_name='novaterra' className="categoryAndTag__middleMoreStoryImages" publicId={this.props.collection[1].mainImage}><Transformation crop="thumb" /></Image>  <img src={this.props.collection[2].mainImage} className="categoryAndTag__middleMoreStoryImages" /></Link>

            <div ref={this.setAuthorImage3Ref}><Link to={this.findUser(this.props.collection[2].userId).profileUrl}>{this.findUser(this.props.collection[2].userId).profilePhoto ? <div><div className="catAndTag__behindCircle2"></div><Image className="categoryAndTag__popMainStoryImage2 floatLeft" cloud_name='novaterra' publicId={this.findUser(this.props.collection[2].userId).profilePhoto}><Transformation crop="thumb" /></Image></div> :
            <img src={`${this.props.route}images/noImage.png`} className="categoryAndTag__popMainStoryImage2 floatLeft"/>}</Link></div>

              <div className="floatLeft categoryAndTag__authorBelowStorySecondStory">
                <div className="categoryAndTag__popContainerReadingText">
                <div className="floatLeft categoryAndTag__authorBelowStorySide" ref={this.setAuthorName3Ref}>
                <AuthorTooltip route='' userId={this.props.collection[0].userId} users={this.props.users} />
                </div>
                <div className="categoryAndTag__authorBelowStorySideRead">
                  {moment(this.props.collection[2].lastUpdated).format('MMM DD')} · {this.props.collection[2].minRead} min
                </div>
                </div>
              </div>
            </div>
          : undefined }
          </div>

        </div>

        <div className="categoryAndTags_middleMarginLeft">

        { this.props.collection[3] ?
        <div ref={this.setTopContainer4Ref} className="categoryAndTag__middleIndividualContainers1 categoryAndTag__middleContainerTopSpacing">
        <div className="categoryAndTag__middleContainerTopMarginLeft">

      <Link to={this.props.collection[3].link}><Image cloud_name='novaterra' className="categoryAndTag__middleStoryImages1" publicId={this.props.collection[3].mainImage}><Transformation crop="thumb" /></Image></Link>

      <div className="categoryAndTag__middleContainersAboveCategorySpacing"></div>

        <div ref={this.setCategory4Ref} className="categoryAndTags__authorLargerDiv3"><Link to={`/${this.props.collection[3].category}`} className="categoryAndTag__topMoreCat categoryAndTag__secondMiddleContainerCategory">
            {this.props.collection[3].category}
        </Link></div>

        <div className={`categoryAndTag__moreArContainerTitle categoryAndTag__firstMiddleContainerTitle ${this.userHasSeenStory(this.props.collection[3]) ? 'title__grey' : ''}`}>{this.props.collection[3].title.length > 45 ? this.props.collection[3].title.slice(0, 45) + '...' : this.props.collection[3].title}</div>
        <div className="categoryAndTags__storyAbout">
        {this.props.collection[3].description.length > this.getMiddleWidth() ? this.props.collection[3].description.slice(0, this.getMiddleWidth()) + '...' : this.props.collection[3].description}
        </div>
        </div>

        <div className="categoryAndTag__middleContainersLeft">

        <div ref={this.setAuthorImage4Ref}><Link to={this.findUser(this.props.collection[3].userId).profileUrl}>{this.findUser(this.props.collection[3].userId).profilePhoto ? <div><div className="catAndTag__behindCircle3"></div><Image className="categoryAndTag__middleAuthorImage floatLeft" cloud_name='novaterra' publicId={this.findUser(this.props.collection[3].userId).profilePhoto}><Transformation crop="thumb" /></Image></div> :
        <img src={`${this.props.route}images/noImage.png`} className="categoryAndTag__middleAuthorImage floatLeft"/>}</Link></div>

        <div className="floatLeft categoryAndTag__authorBelowStorySecondStory">
        <div className="categoryAndTag__popContainerReadingText">
        <div className="floatLeft categoryAndTag__authorBelowStorySide" ref={this.setAuthorName4Ref}>
        <AuthorTooltip route='' userId={this.props.collection[3].userId} users={this.props.users} />
        </div>
        <div className="categoryAndTag__authorBelowStorySideRead">
            {moment(this.props.collection[3].lastUpdated).format('MMM DD')} · {this.props.collection[3].minRead} min
          </div>
        </div>
        </div>
        </div>

        </div>
        : undefined }

          { this.props.collection[4] ?
          <div ref={this.setTopContainer5Ref} className="categoryAndTag__middleIndividualContainers1 categoryAndTag__secondMiddleContainerPositioning">
        <div className="categoryAndTag__topBottomContainerMarginLeft">

          <Link to={this.props.collection[4].link}><Image cloud_name='novaterra' className="categoryAndTag__middleStoryImages1" publicId={this.props.collection[4].mainImage}><Transformation crop="thumb" /></Image></Link>

          <div className="categoryAndTag__middleContainersAboveCategorySpacing"></div>

          <div ref={this.setCategory5Ref} className="categoryAndTags__authorLargerDiv3"><Link to={`${this.props.collection[4].category}`} className="categoryAndTag__topMoreCat categoryAndTag__secondMiddleContainerCategory">
            {this.props.collection[4].category}
          </Link></div>

          <div className={`categoryAndTag__moreArContainerTitle categoryAndTag__firstMiddleContainerTitle ${this.userHasSeenStory(this.props.collection[4]) ? 'title__grey' : ''}`}>{this.props.collection[4].title.length > 45 ? this.props.collection[4].title.slice(0, 45) + '...' : this.props.collection[4].title}</div>
        <div className="categoryAndTags__storyAbout">
        {this.props.collection[4].description.length > this.getMiddleWidth() ? this.props.collection[4].description.slice(0, this.getMiddleWidth()) + '...' : this.props.collection[4].description}
        </div>
              </div>

        <div className="categoryAndTag__middleContainersLeft">

        <div ref={this.setAuthorImage5Ref}><Link to={this.findUser(this.props.collection[4].userId).profileUrl}>{this.findUser(this.props.collection[4].userId).profilePhoto ? <div><div className="catAndTag__behindCircle3"></div><Image className="categoryAndTag__middleAuthorImage floatLeft" cloud_name='novaterra' publicId={this.findUser(this.props.collection[4].userId).profilePhoto}><Transformation crop="thumb" /></Image></div> :
        <img src={`${this.props.route}images/noImage.png`} className="categoryAndTag__middleAuthorImage floatLeft"/>}</Link></div>

        <div className="floatLeft categoryAndTag__authorBelowStorySecondStory">
        <div className="categoryAndTag__popContainerReadingText">
        <div className="floatLeft categoryAndTag__authorBelowStorySide" ref={this.setAuthorName5Ref}>
        <AuthorTooltip route='' userId={this.props.collection[3].userId} users={this.props.users} />
        </div>
        <div className="categoryAndTag__authorBelowStorySideRead">
            {moment(this.props.collection[3].lastUpdated).format('MMM DD')} · {this.props.collection[3].minRead} min
          </div>
        </div>
        </div>
        </div>
        </div>
      : undefined }
    </div>

      <div className="categoryAndTag__marginLeftBottom">

      { this.props.collection[0] ?
      <div ref={this.setTopContainer6Ref} className="categoryAndTag__largerContainerStories1BottomMoreMobile">
      <div className="containerStory2">
      <Link to={this.props.collection[0].link}><Image cloud_name='novaterra' className="categoryAndTags__bottomContainerImage1" publicId={this.props.collection[0].mainImage}><Transformation crop="thumb" /></Image></Link>
      <hr className="categoriesAndTags__popularImageLineBelow1"/>
      <div className="popularContainerHeightsAndShadowBelow">
      <div className="popularContainerInnerMargins">

        <div className="categoriesAndTags__bottomStoriesSpacing"></div>

      <div ref={this.setCategory6Ref} className="categoryAndTags__authorLargerDiv2"><Link to={`${this.props.collection[0].category}`} className="categoryAndTag__popularStoryCategories categoryAndTag__firstBottomContainerCategory">
      {this.props.collection[0].category}
    </Link></div>
     <div className="popArtTitleHover">
        <div className={`popularMainStoryTitlesBottom categoryAndTag__bottomContainerTitle ${this.userHasSeenStory(this.props.collection[0]) ? 'title__grey' : ''}`}>{this.props.collection[0].title.length > 55 ? this.props.collection[0].title.slice(0, 55) + '...' : this.props.collection[0].title}</div>
        </div>

        <div ref={this.setAuthorImage6Ref}><Link to={this.findUser(this.props.collection[0].userId).profileUrl}>{this.findUser(this.props.collection[0].userId).profilePhoto ? <div><div className="catAndTag__behindCircle4"></div><Image className="categoryAndTag__bottomStoriesAuthorImage floatLeft" cloud_name='novaterra' publicId={this.findUser(this.props.collection[0].userId).profilePhoto}><Transformation crop="thumb" /></Image></div> :
        <img src={`${this.props.route}images/noImage.png`} className="categoryAndTag__bottomStoriesAuthorImage floatLeft"/>}</Link></div>

        <div className="floatLeft categoryAndTag__authorBelowStorySecondStoryBottom">
        <div className="categoryAndTag__popContainerReadingTextBottom">
        <div className="floatLeft categoryAndTag__authorBelowStorySide" ref={this.setAuthorName6Ref}>
        <AuthorTooltip route='' userId={this.props.collection[0].userId} users={this.props.users} />
        </div>
        <div className="categoryAndTag__authorBelowStorySideRead">
            {moment(this.props.collection[0].lastUpdated).format('MMM DD')} · {this.props.collection[0].minRead} min
          </div>
        </div>
        </div>

        </div>
       </div>
     </div>
   </div>
 : undefined }

 { this.props.collection[1] ?
 <div ref={this.setTopContainer6Ref} className="categoryAndTag__largerContainerStories1BottomMoreMobile">
 <div className="containerStory2">
 <Link to={this.props.collection[1].link}><Image cloud_name='novaterra' className="categoryAndTags__bottomContainerImage1" publicId={this.props.collection[1].mainImage}><Transformation crop="thumb" /></Image></Link>
 <div className="popularContainerHeightsAndShadowBelow">
 <div className="popularContainerInnerMargins">

   <div className="categoriesAndTags__bottomStoriesSpacing"></div>

 <div ref={this.setCategory6Ref} className="categoryAndTags__authorLargerDiv2"><Link to={`${this.props.collection[1].category}`} className="categoryAndTag__popularStoryCategories categoryAndTag__firstBottomContainerCategory">
 {this.props.collection[1].category}
</Link></div>
<div className="popArtTitleHover">
   <div className={`popularMainStoryTitlesBottom categoryAndTag__bottomContainerTitle ${this.userHasSeenStory(this.props.collection[1]) ? 'title__grey' : ''}`}>{this.props.collection[1].title.length > 55 ? this.props.collection[1].title.slice(0, 55) + '...' : this.props.collection[1].title}</div>
   </div>

   <div ref={this.setAuthorImage6Ref}><Link to={this.findUser(this.props.collection[1].userId).profileUrl}>{this.findUser(this.props.collection[1].userId).profilePhoto ? <div><div className="catAndTag__behindCircle4"></div><Image className="categoryAndTag__bottomStoriesAuthorImage floatLeft" cloud_name='novaterra' publicId={this.findUser(this.props.collection[1].userId).profilePhoto}><Transformation crop="thumb" /></Image></div> :
   <img src={`${this.props.route}images/noImage.png`} className="categoryAndTag__bottomStoriesAuthorImage floatLeft"/>}</Link></div>

   <div className="floatLeft categoryAndTag__authorBelowStorySecondStoryBottom">
   <div className="categoryAndTag__popContainerReadingTextBottom">
   <div className="floatLeft categoryAndTag__authorBelowStorySide" ref={this.setAuthorName6Ref}>
   <AuthorTooltip route='' userId={this.props.collection[1].userId} users={this.props.users} />
   </div>
   <div className="categoryAndTag__authorBelowStorySideRead">
       {moment(this.props.collection[1].lastUpdated).format('MMM DD')} · {this.props.collection[1].minRead} min
     </div>
   </div>
   </div>

   </div>
  </div>
</div>
</div>
: undefined }

{ this.props.collection[2] ?
<div ref={this.setTopContainer6Ref} className="categoryAndTag__largerContainerStories1BottomMoreMobile">
<div className="containerStory2">
<Link to={this.props.collection[2].link}><Image cloud_name='novaterra' className="categoryAndTags__bottomContainerImage1" publicId={this.props.collection[2].mainImage}><Transformation crop="thumb" /></Image></Link>
<hr className="categoriesAndTags__popularImageLineBelow1"/>
<div className="popularContainerHeightsAndShadowBelow">
<div className="popularContainerInnerMargins">

  <div className="categoriesAndTags__bottomStoriesSpacing"></div>

<div ref={this.setCategory6Ref} className="categoryAndTags__authorLargerDiv2"><Link to={`${this.props.collection[2].category}`} className="categoryAndTag__popularStoryCategories categoryAndTag__firstBottomContainerCategory">
{this.props.collection[2].category}
</Link></div>
<div className="popArtTitleHover">
  <div className={`popularMainStoryTitlesBottom categoryAndTag__bottomContainerTitle ${this.userHasSeenStory(this.props.collection[2]) ? 'title__grey' : ''}`}>{this.props.collection[2].title.length > 55 ? this.props.collection[2].title.slice(0, 55) + '...' : this.props.collection[2].title}</div>
  </div>

  <div ref={this.setAuthorImage6Ref}><Link to={this.findUser(this.props.collection[2].userId).profileUrl}>{this.findUser(this.props.collection[2].userId).profilePhoto ? <div><div className="catAndTag__behindCircle4"></div><Image className="categoryAndTag__bottomStoriesAuthorImage floatLeft" cloud_name='novaterra' publicId={this.findUser(this.props.collection[2].userId).profilePhoto}><Transformation crop="thumb" /></Image></div> :
  <img src={`${this.props.route}images/noImage.png`} className="categoryAndTag__bottomStoriesAuthorImage floatLeft"/>}</Link></div>

  <div className="floatLeft categoryAndTag__authorBelowStorySecondStoryBottom">
  <div className="categoryAndTag__popContainerReadingTextBottom">
  <div className="floatLeft categoryAndTag__authorBelowStorySide" ref={this.setAuthorName6Ref}>
  <AuthorTooltip route='' userId={this.props.collection[2].userId} users={this.props.users} />
  </div>
  <div className="categoryAndTag__authorBelowStorySideRead">
      {moment(this.props.collection[2].lastUpdated).format('MMM DD')} · {this.props.collection[2].minRead} min
    </div>
  </div>
  </div>

  </div>
 </div>
</div>
</div>
: undefined }

{ this.props.collection[3] ?
<div ref={this.setTopContainer6Ref} className="categoryAndTag__largerContainerStories1BottomMoreMobile">
<div className="containerStory2">
<Link to={this.props.collection[3].link}><Image cloud_name='novaterra' className="categoryAndTags__bottomContainerImage1" publicId={this.props.collection[3].mainImage}><Transformation crop="thumb" /></Image></Link>
<hr className="categoriesAndTags__popularImageLineBelow1"/>
<div className="popularContainerHeightsAndShadowBelow">
<div className="popularContainerInnerMargins">

  <div className="categoriesAndTags__bottomStoriesSpacing"></div>

<div ref={this.setCategory6Ref} className="categoryAndTags__authorLargerDiv2"><Link to={`${this.props.collection[3].category}`} className="categoryAndTag__popularStoryCategories categoryAndTag__firstBottomContainerCategory">
{this.props.collection[3].category}
</Link></div>
<div className="popArtTitleHover">
  <div className={`popularMainStoryTitlesBottom categoryAndTag__bottomContainerTitle ${this.userHasSeenStory(this.props.collection[2]) ? 'title__grey' : ''}`}>{this.props.collection[3].title.length > 55 ? this.props.collection[3].title.slice(0, 55) + '...' : this.props.collection[3].title}</div>
  </div>

  <div ref={this.setAuthorImage6Ref}><Link to={this.findUser(this.props.collection[3].userId).profileUrl}>{this.findUser(this.props.collection[3].userId).profilePhoto ? <div><div className="catAndTag__behindCircle4"></div><Image className="categoryAndTag__bottomStoriesAuthorImage floatLeft" cloud_name='novaterra' publicId={this.findUser(this.props.collection[3].userId).profilePhoto}><Transformation crop="thumb" /></Image></div> :
  <img src={`${this.props.route}images/noImage.png`} className="categoryAndTag__bottomStoriesAuthorImage floatLeft"/>}</Link></div>

  <div className="floatLeft categoryAndTag__authorBelowStorySecondStoryBottom">
  <div className="categoryAndTag__popContainerReadingTextBottom">
  <div className="floatLeft categoryAndTag__authorBelowStorySide" ref={this.setAuthorName6Ref}>
  <AuthorTooltip route='' userId={this.props.collection[3].userId} users={this.props.users} />
  </div>
  <div className="categoryAndTag__authorBelowStorySideRead">
      {moment(this.props.collection[3].lastUpdated).format('MMM DD')} · {this.props.collection[3].minRead} min
    </div>
  </div>
  </div>

  </div>
 </div>
</div>
</div>
: undefined }

{ this.props.collection[4] ?
<div ref={this.setTopContainer6Ref} className="categoryAndTag__largerContainerStories1BottomMoreMobile">
<div className="containerStory2">
<Link to={this.props.collection[4].link}><Image cloud_name='novaterra' className="categoryAndTags__bottomContainerImage1" publicId={this.props.collection[4].mainImage}><Transformation crop="thumb" /></Image></Link>
<hr className="categoriesAndTags__popularImageLineBelow1"/>
<div className="popularContainerHeightsAndShadowBelow">
<div className="popularContainerInnerMargins">

  <div className="categoriesAndTags__bottomStoriesSpacing"></div>

<div ref={this.setCategory6Ref} className="categoryAndTags__authorLargerDiv2"><Link to={`${this.props.collection[4].category}`} className="categoryAndTag__popularStoryCategories categoryAndTag__firstBottomContainerCategory">
{this.props.collection[4].category}
</Link></div>
<div className="popArtTitleHover">
  <div className={`popularMainStoryTitlesBottom categoryAndTag__bottomContainerTitle ${this.userHasSeenStory(this.props.collection[4]) ? 'title__grey' : ''}`}>{this.props.collection[4].title.length > 55 ? this.props.collection[4].title.slice(0, 55) + '...' : this.props.collection[4].title}</div>
  </div>

  <div ref={this.setAuthorImage6Ref}><Link to={this.findUser(this.props.collection[4].userId).profileUrl}>{this.findUser(this.props.collection[4].userId).profilePhoto ? <div><div className="catAndTag__behindCircle4"></div><Image className="categoryAndTag__bottomStoriesAuthorImage floatLeft" cloud_name='novaterra' publicId={this.findUser(this.props.collection[4].userId).profilePhoto}><Transformation crop="thumb" /></Image></div> :
  <img src={`${this.props.route}images/noImage.png`} className="categoryAndTag__bottomStoriesAuthorImage floatLeft"/>}</Link></div>

  <div className="floatLeft categoryAndTag__authorBelowStorySecondStoryBottom">
  <div className="categoryAndTag__popContainerReadingTextBottom">
  <div className="floatLeft categoryAndTag__authorBelowStorySide" ref={this.setAuthorName6Ref}>
  <AuthorTooltip route='' userId={this.props.collection[4].userId} users={this.props.users} />
  </div>
  <div className="categoryAndTag__authorBelowStorySideRead">
      {moment(this.props.collection[4].lastUpdated).format('MMM DD')} · {this.props.collection[4].minRead} min
    </div>
  </div>
  </div>

  </div>
 </div>
</div>
</div>
: undefined }


        { this.props.collection[5] ?
        <div ref={this.setTopContainer6Ref} className="categoryAndTag__largerContainerStories1BottomMore">
        <div className="containerStory2">
        <Link to={this.props.collection[5].link}><Image cloud_name='novaterra' className="categoryAndTags__bottomContainerImage1" publicId={this.props.collection[5].mainImage}><Transformation crop="thumb" /></Image></Link>
        <hr className="categoriesAndTags__popularImageLineBelow1"/>
        <div className="popularContainerHeightsAndShadowBelow">
        <div className="popularContainerInnerMargins">

          <div className="categoriesAndTags__bottomStoriesSpacing"></div>

        <div ref={this.setCategory6Ref} className="categoryAndTags__authorLargerDiv2"><Link to={`${this.props.collection[5].category}`} className="categoryAndTag__popularStoryCategories categoryAndTag__firstBottomContainerCategory">
        {this.props.collection[5].category}
      </Link></div>
       <div className="popArtTitleHover">
          <div className={`popularMainStoryTitlesBottom categoryAndTag__bottomContainerTitle ${this.userHasSeenStory(this.props.collection[5]) ? 'title__grey' : ''}`}>{this.props.collection[5].title.length > 55 ? this.props.collection[5].title.slice(0, 55) + '...' : this.props.collection[5].title}</div>
          </div>

          <div ref={this.setAuthorImage6Ref}><Link to={this.findUser(this.props.collection[5].userId).profileUrl}>{this.findUser(this.props.collection[5].userId).profilePhoto ? <div><div className="catAndTag__behindCircle4"></div><Image className="categoryAndTag__bottomStoriesAuthorImage floatLeft" cloud_name='novaterra' publicId={this.findUser(this.props.collection[5].userId).profilePhoto}><Transformation crop="thumb" /></Image></div> :
          <img src={`${this.props.route}images/noImage.png`} className="categoryAndTag__bottomStoriesAuthorImage floatLeft"/>}</Link></div>

          <div className="floatLeft categoryAndTag__authorBelowStorySecondStoryBottom">
          <div className="categoryAndTag__popContainerReadingTextBottom">
          <div className="floatLeft categoryAndTag__authorBelowStorySide" ref={this.setAuthorName6Ref}>
          <AuthorTooltip route='' userId={this.props.collection[5].userId} users={this.props.users} />
          </div>
          <div className="categoryAndTag__authorBelowStorySideRead">
              {moment(this.props.collection[5].lastUpdated).format('MMM DD')} · {this.props.collection[5].minRead} min
            </div>
          </div>
          </div>

          </div>
         </div>
       </div>
     </div>
   : undefined }

        { this.props.collection[6] ?
        <div ref={this.setTopContainer7Ref} className="categoryAndTag__largerContainerStories1BottomMore">
        <div className="containerStory2">
      <Link to={this.props.collection[6].link}><Image cloud_name='novaterra' className="categoryAndTags__bottomContainerImage1" publicId={this.props.collection[6].mainImage}><Transformation crop="thumb" /></Image></Link>
        <hr className="categoriesAndTags__popularImageLineBelow1"/>
        <div className="popularContainerHeightsAndShadowBelow">
        <div className="popularContainerInnerMargins">

          <div className="categoriesAndTags__bottomStoriesSpacing"></div>

        <div ref={this.setCategory7Ref} className="categoryAndTags__authorLargerDiv2"><Link to={`/${this.props.collection[6].category}`} className="categoryAndTag__popularStoryCategories categoryAndTag__firstBottomContainerCategory">
        {this.props.collection[6].category}
      </Link></div>
       <div className="popArtTitleHover">
          <div className={`popularMainStoryTitlesBottom categoryAndTag__bottomContainerTitle ${this.userHasSeenStory(this.props.collection[6]) ? 'title__grey' : ''}`}>{this.props.collection[6].title.length > 48 ? this.props.collection[6].title.slice(0, 48) + '...' : this.props.collection[6].title}</div>
          </div>

          <div ref={this.setAuthorImage7Ref}><Link to={this.findUser(this.props.collection[6].userId).profileUrl}>{this.findUser(this.props.collection[6].userId).profilePhoto ? <div><div className="catAndTag__behindCircle4"></div><Image className="categoryAndTag__bottomStoriesAuthorImage floatLeft" cloud_name='novaterra' publicId={this.findUser(this.props.collection[6].userId).profilePhoto}><Transformation crop="thumb" /></Image></div> :
          <img src={`${this.props.route}images/noImage.png`} className="categoryAndTag__bottomStoriesAuthorImage floatLeft"/>}</Link></div>

          <div className="floatLeft categoryAndTag__authorBelowStorySecondStoryBottom">
          <div className="categoryAndTag__popContainerReadingTextBottom">
          <div className="floatLeft categoryAndTag__authorBelowStorySide" ref={this.setAuthorName7Ref}>
          <AuthorTooltip route='' userId={this.props.collection[6].userId} users={this.props.users} />
          </div>
          <div className="categoryAndTag__authorBelowStorySideRead">
              {moment(this.props.collection[6].lastUpdated).format('MMM DD')} · {this.props.collection[6].minRead} min
            </div>
          </div>
          </div>

          </div>
         </div>
       </div>
     </div>
     : undefined }

        { this.props.collection[7] ?
        <div ref={this.setTopContainer8Ref} className="categoryAndTag__largerContainerStories1BottomMore">
        <div className="containerStory2">
        <Link to={this.props.collection[7].link}><Image cloud_name='novaterra' className="categoryAndTags__bottomContainerImage1" publicId={this.props.collection[7].mainImage}><Transformation crop="thumb" /></Image></Link>
        <hr className="categoriesAndTags__popularImageLineBelow1"/>
        <div className="popularContainerHeightsAndShadowBelow">
        <div className="popularContainerInnerMargins">

          <div className="categoriesAndTags__bottomStoriesSpacing"></div>

        <div ref={this.setCategory8Ref} className="categoryAndTags__authorLargerDiv2"><Link to={`/${this.props.collection[7].category}`} className="categoryAndTag__popularStoryCategories categoryAndTag__firstBottomContainerCategory">
        {this.props.collection[7].category}
        </Link></div>
       <div className="popArtTitleHover">
          <div className={`popularMainStoryTitlesBottom categoryAndTag__bottomContainerTitle ${this.userHasSeenStory(this.props.collection[7]) ? 'title__grey' : ''}`}>{this.props.collection[7].title.length > 48 ? this.props.collection[7].title.slice(0, 48) + '...' : this.props.collection[7].title}</div>
          </div>

        <div ref={this.setAuthorImage8Ref}><Link to={this.findUser(this.props.collection[7].userId).profileUrl}>{this.findUser(this.props.collection[7].userId).profilePhoto ? <div><div className="catAndTag__behindCircle4"></div><Image className="categoryAndTag__bottomStoriesAuthorImage floatLeft" cloud_name='novaterra' publicId={this.findUser(this.props.collection[7].userId).profilePhoto}><Transformation crop="thumb" /></Image></div> :
        <img src={`${this.props.route}images/noImage.png`} className="categoryAndTag__bottomStoriesAuthorImage floatLeft"/>}</Link></div>

        <div className="floatLeft categoryAndTag__authorBelowStorySecondStoryBottom">
        <div className="categoryAndTag__popContainerReadingTextBottom">
        <div className="floatLeft categoryAndTag__authorBelowStorySide" ref={this.setAuthorName8Ref}>
        <AuthorTooltip route='' userId={this.props.collection[7].userId} users={this.props.users} />
        </div>
        <div className="categoryAndTag__authorBelowStorySideRead">
            {moment(this.props.collection[7].lastUpdated).format('MMM DD')} · {this.props.collection[7].minRead} min
          </div>
        </div>
        </div>
        </div>
         </div>
       </div>
     </div>
     : undefined }

</div>
</div>
     : this.mapSmallerStories() }

     <div className="categoryAndTag__showMoreStories">

      {this.state.showMoreStories.map((story) => {

      return (
        <div ref={this.setTopContainer8Ref} key={story._id} className="categoryAndTag__largerContainerStories1BottomWithSpacing">
        <div className="containerStory2">
        <Link to={story.link}><Image cloud_name='novaterra' className="categoryAndTags__bottomContainerImage1" publicId={story.mainImage}><Transformation crop="thumb" /></Image></Link>
        <hr className="categoriesAndTags__popularImageLineBelow1"/>
        <div className="popularContainerHeightsAndShadowBelow">
        <div className="popularContainerInnerMargins">

          <div className="categoriesAndTags__bottomStoriesSpacing"></div>

        <div ref={this.setCategory8Ref}><Link to={`/${story.category}`} className="categoryAndTag__popularStoryCategories categoryAndTag__firstBottomContainerCategory">
        {story.category}
        </Link></div>
       <div className="popArtTitleHover">
          <div className={`popularMainStoryTitlesBottom categoryAndTag__bottomContainerTitle ${this.userHasSeenStory(story) ? 'title__grey' : ''}`}>{story.title.length > 48 ? story.title.slice(0, 48) + '...' : story.title}</div>
          </div>

        <div ref={this.setAuthorImage8Ref}><Link to={this.findUser(story.userId).profileUrl}>{this.findUser(story.userId).profilePhoto ? <div><div className="catAndTag__behindCircle4"></div><Image className="categoryAndTag__bottomStoriesAuthorImage floatLeft" cloud_name='novaterra' publicId={this.findUser(story.userId).profilePhoto}><Transformation crop="thumb" /></Image></div> :
        <img src={`${this.props.route}images/noImage.png`} className="categoryAndTag__bottomStoriesAuthorImage floatLeft"/>}</Link></div>

        <div className="floatLeft categoryAndTag__authorBelowStorySecondStoryBottom">
        <div className="categoryAndTag__popContainerReadingTextBottom">
        <div className="floatLeft categoryAndTag__authorBelowStorySide">
        <AuthorTooltip route='' userId={story.userId} users={this.props.users} />
        </div>
        <div className="categoryAndTag__authorBelowStorySideRead">
            {moment(story.lastUpdated).format('MMM DD')} · {story.minRead} min
          </div>
        </div>
        </div>

        </div>
         </div>
       </div>
      </div>
      )

      })}
      </div>
    </div>

        <div className="clearBoth"></div>

        { this.state.storiesLefToShow && !Session.get('storiesLeft') ?
        <div>
        <div onClick={() => { this.renderSixMoreStories() }} className="categoryAndTag__largerDivShowMore">
        <div className="categoryAndTag__showMoreBottomContainer">Show More</div>
        </div>
        <div className="categoryAndTag__showMoreTopSpacing"></div>
        </div>
        : undefined }
      </div>

    );

}
}

export default withTracker(() => {
Meteor.subscribe('allUsers');
return {

};
})(LatAndPop);
