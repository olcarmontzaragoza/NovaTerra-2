import React from 'react';
import { withTracker } from 'meteor/react-meteor-data';
import { Link } from 'react-router-dom';
import AuthorTooltip from '../Tooltips/AuthorTooltip';
import AuthorTooltipHomeLeft from '../Tooltips/AuthorTooltipHomeLeft';
import { Stories } from '../../../api/stories';
import moment from 'moment';

import {Image, Video, Transformation, CloudinaryContext} from 'cloudinary-react';

Meteor.subscribe('stories');

export class HomeTop extends React.Component {
constructor(props) {
super(props);
this.state = {

};
}
// componentDidMount() {
//
//   Meteor.subscribe('allUsers', () => {
//     Tracker.autorun(() => {
//        let findUser = Meteor.users });
//       this.setState({ users: Meteor.users });
//       });
// }
getStories() {
  const oneWeekAgo = moment().subtract(7, 'days');
  const oneMonthAgo = moment().subtract(30, 'days');
  const threeMonthsAgo = moment().subtract(90, 'days');

  let mainPopular = [];
  let mainPopularMonth = [];
  let mainPopularThreeMonth = [];

  let findPopular =  Stories.find({ storyType: 'published' }, {
      sort: {
        likes: -1
      }
  }).fetch().map((story) => {
    if (moment(story.lastUpdated).isAfter(oneWeekAgo)) {
      mainPopular.push(story);
    } else if (moment(story.lastUpdated).isAfter(oneMonthAgo)) {
      mainPopularMonth.push(story);
    } else if (moment(story.lastUpdated).isAfter(threeMonthsAgo)) {
      mainPopularThreeMonth.push(story);
    }
  });

  if (mainPopular.length < 6) {

  mainPopularMonth.map((story) => {
  if (mainPopular.length < 6) {
  mainPopular.push(story);
  }
  });

  mainPopularThreeMonth.map((story) => {
  if (mainPopular.length < 6) {
  mainPopular.push(story);
  }
  });

  } else {
  mainPopular = mainPopular.slice(0, 6);
  }
  return mainPopular;
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
addClassName(inside, id) {
  return `<div id="${id}">${inside}</div>`;
}
render() {
    return (
      <div>
      <div className="topSpacingHomepage"></div>

    <div className="index__homeTop--marginLeft">

    <div className="leftSideHomeTop">
    <a className="featuredTop">
    <hr className="colorFeaturedHr"/>
    <div className="featuredTopText">
    Featured
    </div>
    </a>
    {this.getStories()[0] ?
    <div>
    <Link to={this.getStories()[0].link}><div className={`greenHov topFeaturedHome ${this.userHasSeenStory(this.getStories()[0]) ? 'title__grey' : ''}`}>{this.getStories()[0].title.length > 56 ? this.getStories()[0].title.slice(0, 56) + '...' : this.getStories()[0].title}</div></Link>

    <div className="homeTop__firstAuthorTooltip">
    <AuthorTooltipHomeLeft route='' ref='homeTop1' userId={this.getStories()[0].userId} users={this.props.users} outsideClassName='homeTop__firstAuthorToolTipStyles' />
    </div>

    <Link to={this.getStories()[0].link}><Image cloud_name='novaterra' className="topFirstStoryPhoto" publicId={this.getStories()[0].mainImage}><Transformation crop="thumb" /></Image></Link>
    </div>
    : undefined }
    </div>

    <div className="middleSideHomeTop">

    {this.getStories()[1] ?
    <div>

    <Link to={this.getStories()[1].link}><Image cloud_name='novaterra' className="middleTopImagePositioning" publicId={this.getStories()[1].mainImage}><Transformation crop="thumb" /></Image></Link>

    <div className="floatLeft">

    <Link to={this.getStories()[1].link} className={`middleSectionTopTitle1 greenHov ${this.userHasSeenStory(this.getStories()[1]) ? 'title__grey' : ''}`}>{this.getStories()[1].title.length > 52 ? this.getStories()[1].title.slice(0, 52) + '...' : this.getStories()[1].title}
    </Link>

    <div className="homeTop__readTimeAndDate">
    <div className="homeTop__authorToolTipPositioning">
    <AuthorTooltip route='' ref='homeTop2' userId={this.getStories()[1].userId} users={this.props.users} />
    </div>
    <div className="homeTop__readTimeBelowMargin">{moment(this.getStories()[1].lastUpdated).format('DD MMM YYYY')} · {this.getStories()[1].minRead} min read</div>
    </div>

    </div>

    </div>
    : undefined }

    <div className="clearSpacingTopHome"></div>

    {this.getStories()[2] ?
    <div>

    <Link to={this.getStories()[2].link}><Image cloud_name='novaterra' className="middleTopImagePositioning" publicId={this.getStories()[2].mainImage}><Transformation crop="thumb" /></Image></Link>

    <div className="floatLeft">

    <Link to={this.getStories()[2].link} className={`middleSectionTopTitle1 greenHov ${this.userHasSeenStory(this.getStories()[2]) ? 'title__grey' : ''}`}>
    {this.getStories()[2].title.length > 52 ? this.getStories()[2].title.slice(0, 52) + '...' : this.getStories()[2].title}
    </Link>

    <div className="homeTop__readTimeAndDate">
    <div className="homeTop__authorToolTipPositioning">
    <AuthorTooltip route='' ref='homeTop3' userId={this.getStories()[2].userId} users={this.props.users} />
    </div>
    <div className="homeTop__readTimeBelowMargin">{moment(this.getStories()[2].lastUpdated).format('DD MMM YYYY')} · {this.getStories()[2].minRead} min read</div>
    </div>
    </div>
    </div>

    : undefined }

    <div className="clearSpacingTopHome"></div>

    {this.getStories()[3] ?
    <div>

    <Link to={this.getStories()[3].link}><Image cloud_name='novaterra' className="middleTopImagePositioning" publicId={this.getStories()[3].mainImage}><Transformation crop="thumb" /></Image></Link>

    <div className="floatLeft">

    <Link to={this.getStories()[3].link} className={`middleSectionTopTitle1 greenHov ${this.userHasSeenStory(this.getStories()[3]) ? 'title__grey' : ''}`}>
    {this.getStories()[3].title.length > 52 ? this.getStories()[3].title.slice(0, 52) + '...' : this.getStories()[3].title}
    </Link>

    <div className="homeTop__readTimeAndDate">
    <div className="homeTop__authorToolTipPositioning">
    <AuthorTooltip route='' ref='homeTop4' userId={this.getStories()[3].userId} users={this.props.users} />
    </div>
    <div className="homeTop__readTimeBelowMargin">{moment(this.getStories()[3].lastUpdated).format('DD MMM YYYY')} · {this.getStories()[3].minRead} min read</div>
    </div>
    </div>

    </div>
    : undefined }

    </div>

    <div className="rightSideHomeTop">

    <div className="firstStoryRightTopHome">

    {this.getStories()[4] ?
    <div>
    <Link to={this.getStories()[4].link}><Image cloud_name='novaterra' className="rightHomeImagePositioning topFifthStoryPhoto" publicId={this.getStories()[4].mainImage}><Transformation crop="thumb" /></Image></Link>

    <Link to={this.getStories()[4].link} className={`rightSectionTopTitle greenHov ${this.userHasSeenStory(this.getStories()[4]) ? 'title__grey' : ''}`}>
    {this.getStories()[4].title.length > 56 ? this.getStories()[4].title.slice(0, 56) + '...' : this.getStories()[4].title}
    </Link>

    <div className="homeTop__readTimeAndDateRight">
    <div className="homeTop__authorToolTipPositioningRight">
    <AuthorTooltip route='' ref='homeTop5' userId={this.getStories()[4].userId} users={this.props.users} />
    </div>
    <div className="homeTop__readTimeBelowMarginRight"> {moment(this.getStories()[4].lastUpdated).format('DD MMM YYYY')} · {this.getStories()[4].minRead} min read</div>
    </div>
    </div>
    : undefined }

    </div>

    <div className="secondStoryRightTopHome">

    {this.getStories()[5] ?
    <div>
    <Link to={this.getStories()[5].link}><Image cloud_name='novaterra' className="rightHomeImagePositioning topFifthStoryPhoto" publicId={this.getStories()[5].mainImage}><Transformation crop="thumb" /></Image></Link>

    <Link to={this.getStories()[5].link} className={`rightSectionTopTitle greenHov ${this.userHasSeenStory(this.getStories()[5]) ? 'title__grey' : ''}`}>
    {this.getStories()[5].title.length > 56 ? this.getStories()[5].title.slice(0, 56) + '...' : this.getStories()[5].title}
    </Link>

    <div className="homeTop__readTimeAndDateRight">
    <div className="homeTop__authorToolTipPositioningRight">
    <AuthorTooltip route='' ref='homeTop6' userId={this.getStories()[5].userId} users={this.props.users} />
    </div>
    <div className="homeTop__readTimeBelowMarginRight"> {moment(this.getStories()[5].lastUpdated).format('DD MMM YYYY')} · {this.getStories()[5].minRead} min read</div>
    </div>
    </div>
    : undefined }

    </div>
    </div>

    </div>
    </div>
    );
  }
}

export default withTracker(() => {
Meteor.subscribe('stories');
return { // Note: these should all be customised in stories, they should not be the same for everyone
findPopular: Stories.find({}, {
    sort: {
      likes: -1
    }
  }).fetch().map((story) => {
  return {
  lastUpdated: undefined // see if moment has a way to check if this date is in the last week
};
})
};
})(HomeTop);
