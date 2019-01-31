import React from 'react';
import { withTracker } from 'meteor/react-meteor-data';
import AuthorTooltip from '../Tooltips/AuthorTooltip';
import moment from 'moment';
import { Link } from 'react-router-dom';
import { Stories } from '../../../api/stories';

const oneWeekAgo = moment().subtract(7, 'days');

// const findPopular = Stories.find({ category: this.props.category <--- problem; need props }, {
//     sort: {
//       likes: -1
//     }
// }).fetch().map((story) => {
//
// if (story.lastUpdated.isAfter(oneWeekAgo)) {
// return {
//   ...story
// };
// }
// });

export class MiddleStoryCategories extends React.Component {
  render() {
    return (
      <div>
        <hr className="middleStory__hrTop" />
        <div className="greenHov middleStory__CategoryTitle">
          {'Latest in ' + this.props.collection[0].category}
        </div>

<Link to={`/${this.props.collection[0].category}`} className="hovGreenSeeMore middleStory__topSeeMore">See more</Link>

<div className="middleContainer1">

<div className="floatLeft middleCategory__spacingLeft homeMiddle__categoryStoryContainer" width="192px">
<Link to={this.props.collection[0].link}> <img src={this.props.collection[0].mainImage} width="192px" height="93px" href="" className="middleMFirstStoryPhoto middleStory__story1Image" /></Link>

<Link to={this.props.collection[0].link} className="greenHov middleStory__story1Title">
{this.props.collection[0].title.length > 60 ? this.props.collection[0].title.slice(0, 60) + '...' : this.props.collection[0].title}
</Link>

{/* <AuthorTooltip userId={this.props.collection[0].userId}/> */}

<div className="homeMiddle__categoryReadTimeAndDate">
<div className="">{moment(this.props.collection[0].lastUpdated).format('DD MMM YYYY')} · {this.props.collection[0].minRead} min read</div>
</div>
</div>

<div className="floatLeft homeMiddle__categoryStoryContainer" width="192px">
<Link to={this.props.collection[1].link}><img src={this.props.collection[1].mainImage} width="192px" height="93px" className="middleMSecondStoryPhoto middleAricle__story1Image" /></Link>

<Link to={this.props.collection[1].link} className="greenHov middleStory__story1Title">
{this.props.collection[1].title.length > 60 ? this.props.collection[1].title.slice(0, 60) + '...' : this.props.collection[1].title}
</Link>

{/* <AuthorTooltip userId={this.props.collection[1].userId}/> */}

<div className="homeMiddle__categoryReadTimeAndDate">
<div className="">{moment(this.props.collection[1].lastUpdated).format('DD MMM YYYY')} · {this.props.collection[1].minRead} min read</div>
</div>

</div>

<div className="floatLeft homeMiddle__categoryStoryContainer" width="192px">
<Link to={this.props.collection[2].link}><img src={this.props.collection[2].mainImage} width="192px" height="93px" className="middleMThirdStoryPhoto middleStory_story1Image" /></Link>

<Link to={this.props.collection[2].link} className="greenHov middleStory__story1Title">
{this.props.collection[2].title.length > 60 ? this.props.collection[2].title.slice(0, 60) + '...' : this.props.collection[2].title}
</Link>

{/* <AuthorTooltip userId={this.props.collection[1].userId}/> */}

<div className="homeMiddle__categoryReadTimeAndDate">
<div className="">{moment(this.props.collection[2].lastUpdated).format('DD MMM YYYY')} · {this.props.collection[2].minRead} min read</div>
</div>

</div>

<div className="middleStory__middleSectionBottomSpacing"></div>
<hr className="middleStory__middleSectionBottomHr" />
</div></div>
    );
  }
}

export default withTracker(() => {
return {


};
})(MiddleStoryCategories);
