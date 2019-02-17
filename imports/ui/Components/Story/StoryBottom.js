import React from 'react';
import { withTracker } from 'meteor/react-meteor-data';
import { Link } from 'react-router-dom';
import { Stories } from '../../../api/stories';
import { funcReplace } from '../../../routes/routes.js';
import { Meteor } from 'meteor/meteor';
import { Session } from 'meteor/session';
import moment from 'moment';
import Disqus from 'disqus-react';
// import ReactDisqusThread from 'react-disqus-thread';

import StoryPageContainer from './StoryPageContainer';
import LatestOnNovaTerra from './LatestOnNovaTerra';

import createBrowserHistory from 'history/createBrowserHistory';
browserHistory = createBrowserHistory();

let preUrl = browserHistory.location.pathname.slice(7, browserHistory.location.pathname.length)
let unCapTitle = preUrl.replace(/-/g, ' ');
let currentStory = Stories.findOne({}, { unCapTitle });

const oneWeekAgo = moment().subtract(7, 'days');
const oneMonthAgo = moment().subtract(30, 'days');
const threeMonthsAgo = moment().subtract(90, 'days');

import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';

library.add(far);
library.add(fas);

let popIndex = 1;
let animationOnGoing = false;

let zero = 'ab__zero';
let negative = 'ab__1195';
let positive = 'ab__negative1195';

export class StoryBottom extends React.Component {
constructor(props) {
super(props);
this.state = {
popIndex: 1,
animationOnGoing: false,

leftArrow: 'ab__colorGrey',
rightArrow: 'ab__colorGreen',

popCircleOne: 'ab__backgroundGreen',
popCircleTwo: 'ab__backgroundGrey',
popCircleThree: 'ab__backgroundGrey',
popCircleFour: 'ab__backgroundGrey',

containerOneMarginLeft: 'ab__zero',
containerTwoMarginLeft: 'ab__1195',
containerThreeMarginLeft: 'ab__1195',
containerFourMarginLeft: 'ab__1195',
};
}
handleNewComment() {

}
initialiseDisqus() {

  let disqusConfig = {
    url: this.props.story.link,
    identifier: this.props.story.id,
    title: this.props.story.title,
  }

  this.setState({ disqusShortname: 'www-novaterra-earth' });
  this.setState({ disqusConfig });

}
componentDidMount() {
  this.initialiseDisqus();
}
setGreen(green) {
  if (green === 1) {
  this.setState({ popCircleOne: 'ab__backgroundGreen' });
  this.setState({ popCircleTwo: 'ab__backgroundGrey' });
  this.setState({ popCircleThree: 'ab__backgroundGrey' });
  this.setState({ popCircleFour: 'ab__backgroundGrey' });
  }
  else if (green === 2) {
  this.setState({ popCircleOne: 'ab__backgroundGrey' });
  this.setState({ popCircleTwo: 'ab__backgroundGreen' });
  this.setState({ popCircleThree: 'ab__backgroundGrey' });
  this.setState({ popCircleFour: 'ab__backgroundGrey' });
  }
  else if (green === 3) {
  this.setState({ popCircleOne: 'ab__backgroundGrey' });
  this.setState({ popCircleTwo: 'ab__backgroundGrey' });
  this.setState({ popCircleThree: 'ab__backgroundGreen' });
  this.setState({ popCircleFour: 'ab__backgroundGrey' });
  }
  else if (green === 4) {
  this.setState({ popCircleOne: 'ab__backgroundGrey' });
  this.setState({ popCircleTwo: 'ab__backgroundGrey' });
  this.setState({ popCircleThree: 'ab__backgroundGrey' });
  this.setState({ popCircleFour: 'ab__backgroundGreen' });
  }
}
changeArrowColor() {
  if (popIndex === 1) {
  this.setState({ leftArrow: 'ab__colorGrey' });
  this.setState({ rightArrow: 'ab__colorGreen' });
  } else if (popIndex === this.returnLargestPopIndex()) {
  this.setState({ leftArrow: 'ab__colorGreen' });
  this.setState({ rightArrow: 'ab__colorGrey' });
  } else {
  this.setState({ leftArrow: 'ab__colorGreen' });
  this.setState({ rightArrow: 'ab__colorGreen' });
  }
}
popOneOnClick() {
if (animationOnGoing == false) {
animationOnGoing = true;
popIndex = 1;
this.popCheckFunc();
}
animationOnGoing = false;
};
popTwoOnClick() {
if (animationOnGoing == false) {
animationOnGoing = true;
popIndex = 2;
this.popCheckFunc();
}
animationOnGoing = false;
};
popThreeOnClick() {
if (animationOnGoing == false) {
animationOnGoing = true;
popIndex = 3;
this.popCheckFunc();
}
animationOnGoing = false;
};
popFourOnClick() {
if (animationOnGoing == false) {
animationOnGoing = true;
popIndex = 4;
this.popCheckFunc();
}
animationOnGoing = false;
}
leftArrowPop() {
if (popIndex > 1 && popIndex <= this.returnLargestPopIndex()) {
if (!animationOnGoing) {
animationOnGoing = true;
popIndex--;
this.popCheckFunc();
this.setGreen(popIndex);
}
animationOnGoing = false;
}
}
rightArrowPop() {
if (popIndex > 0 && popIndex < this.returnLargestPopIndex()) {
   if (!animationOnGoing) {
   animationOnGoing = true;
   popIndex = popIndex + 1;
   this.popCheckFunc();
   this.setGreen(popIndex);
}
animationOnGoing = false;
}
}
popCheckFunc() {

if (popIndex === 1) {

if (this.state.containerTwoMarginLeft === 'ab__zero') {
this.setState({ containerTwoMarginLeft: 'ab__1195' });
this.setState({ containerOneMarginLeft: 'ab__zero' });
this.setState({ containerThreeMarginLeft: 'ab__1195' });
this.setState({ containerFourMarginLeft: 'ab__1195' });

this.setGreen(1);

animationOnGoing = false;
}

if (this.state.containerThreeMarginLeft === 'ab__zero') {
this.setState({ containerThreeMarginLeft: 'ab__1195' });
this.setGreen(2);
this.setState({ containerTwoMarginLeft: 'ab__1195' });
this.setGreen(1);
this.setState({ containerOneMarginLeft: 'ab__zero' });
this.setState({ containerFourMarginLeft: 'ab__1195' });

animationOnGoing = false;
}

if (this.state.containerFourMarginLeft === 'ab__zero') {
this.setState({ containerFourMarginLeft: 'ab__1195' });
this.setGreen(3);
this.setState({ containerTwoMarginLeft: 'ab__1195' });
this.setGreen(2);
this.setState({ containerThreeMarginLeft: 'ab__1195' });
this.setGreen(1);
this.setState({ containerOneMarginLeft: 'ab__zero' });

animationOnGoing = false;
}
this.changeArrowColor();
}
else if (popIndex === 2) {

if (this.state.containerOneMarginLeft === 'ab__zero') {
this.setState({ containerOneMarginLeft: 'ab__negative1195' });
this.setGreen(2);
this.setState({ containerTwoMarginLeft: 'ab__zero' });
this.setState({ containerFourMarginLeft: 'ab__1195' });
this.setState({ containerThreeMarginLeft: 'ab__1195' });

animationOnGoing = false;
}

if (this.state.containerThreeMarginLeft === 'ab__zero') {
this.setState({ containerThreeMarginLeft: 'ab__1195' });
this.setGreen(2);
this.setState({ containerTwoMarginLeft: 'ab__zero' });
this.setState({ containerFourMarginLeft: 'ab__1195' });
this.setState({ containerOneMarginLeft: 'ab__negative1195' });

animationOnGoing = false;
}

if (this.state.containerFourMarginLeft === 'ab__zero') {
this.setState({ containerFourMarginLeft: 'ab__1195' });
this.setGreen(3);
this.setState({ containerThreeMarginLeft: 'ab__1195' });
this.setGreen(2);
this.setState({ containerTwoMarginLeft: 'ab__zero' });
this.setState({ containerOneMarginLeft: 'ab__negative1195' });

animationOnGoing = false;
}

this.changeArrowColor();
}
else if (popIndex === 3) {

if (this.state.containerOneMarginLeft === 'ab__zero') {
this.setState({ containerOneMarginLeft: 'ab__negative1195' });
this.setGreen(2);
this.setState({ containerTwoMarginLeft: 'ab__negative1195' });
this.setGreen(3);
this.setState({ containerThreeMarginLeft: 'ab__zero' });
this.setState({ containerFourMarginLeft: 'ab__1195' });

animationOnGoing = false;
}

if (this.state.containerTwoMarginLeft === 'ab__zero') {
this.setState({ containerTwoMarginLeft: 'ab__negative1195' });
this.setGreen(3);
this.setState({ containerThreeMarginLeft: 'ab__zero' });
this.setState({ containerFourMarginLeft: 'ab__1195' });
this.setState({ containerOneMarginLeft: 'ab__negative1195' });

animationOnGoing = false;
}

if (this.state.containerFourMarginLeft === 'ab__zero') {
this.setState({ containerFourMarginLeft: 'ab__1195' });
this.setGreen(3);
this.setState({ containerThreeMarginLeft: 'ab__zero' });
this.setState({ containerTwoMarginLeft: 'ab__negative1195' });
this.setState({ containerOneMarginLeft: 'ab__negative1195' });

animationOnGoing = false;
}
this.changeArrowColor();
}
else if (popIndex === 4) {

if (this.state.containerOneMarginLeft === 'ab__zero') {
this.setState({ containerOneMarginLeft: 'ab__negative1195' });
this.setGreen(2);
this.setState({ containerTwoMarginLeft: 'ab__negative1195' });
this.setGreen(3);
this.setState({ containerThreeMarginLeft: 'ab__negative1195' });
this.setGreen(4);
this.setState({ containerFourMarginLeft: 'ab__zero' });

animationOnGoing = false;
}

if (this.state.containerTwoMarginLeft === 'ab__zero') {
this.setState({ containerTwoMarginLeft: 'ab__negative1195' });
this.setGreen(3);
this.setState({ containerThreeMarginLeft: 'ab__negative1195' });
this.setGreen(4);
this.setState({ containerFourMarginLeft: 'ab__zero' });
this.setState({ containerOneMarginLeft: 'ab__negative1195' });

animationOnGoing = false;
}

if (this.state.containerThreeMarginLeft === 'ab__zero') {
this.setState({ containerThreeMarginLeft: 'ab__negative1195' });
this.setGreen(4);
this.setState({ containerFourMarginLeft: 'ab__zero' });
this.setState({ containerTwoMarginLeft: 'ab__negative1195' });
this.setState({ containerOneMarginLeft: 'ab__negative1195' });

animationOnGoing = false;
}
this.changeArrowColor();
}
}

renderFourPopularCircles() {

  if (this.returnTrendingWeek().length >= 10) {

    return (
      <div>
      <div className={`popCircle1 ${this.state.popCircleOne}`} onClick={() => { this.popOneOnClick() }}></div>
      <div className={`popCircle2 ${this.state.popCircleTwo}`} onClick={() => { this.popTwoOnClick() }}></div>
      <div className={`popCircle3 ${this.state.popCircleThree}`} onClick={() => { this.popThreeOnClick() }}></div>
      <div className={`popCircle4 ${this.state.popCircleFour}`} onClick={() => { this.popFourOnClick() }}></div>
      </div>
    )

  } if (this.returnTrendingWeek().length >= 7) {

    return (
      <div>
      <div className={`popCircle1 ${this.state.popCircleOne}`} onClick={() => { this.popOneOnClick() }}></div>
      <div className={`popCircle2 ${this.state.popCircleTwo}`} onClick={() => { this.popTwoOnClick() }}></div>
      <div className={`popCircle3 ${this.state.popCircleThree}`} onClick={() => { this.popThreeOnClick() }}></div>
      </div>
    )

  } if (this.returnTrendingWeek().length >= 4) {
    return (
      <div>
      <div className={`popCircle1 ${this.state.popCircleOne}`} onClick={() => { this.popOneOnClick() }}></div>
      <div className={`popCircle2 ${this.state.popCircleTwo}`} onClick={() => { this.popTwoOnClick() }}></div>
      </div>
    )
  }
  if (this.returnTrendingWeek().length === 3) {
    return (
      <div>
      <div className={`popCircle1 ${this.state.popCircleOne}`} onClick={() => { this.popOneOnClick() }}></div>
      </div>
    )
  }
}
renderContainers() {
  if (this.returnTrendingWeek().length >= 10) {

    return (
      <div>
      <StoryPageContainer users={this.props.users} stories={[this.returnTrendingWeek()[0], this.returnTrendingWeek()[1], this.returnTrendingWeek()[2]]} refs={[[this.setTopContainerBottom1Ref, this.setCategoryBottom1Ref, this.setAuthorNameBottom1Ref, this.setAuthorImageBottom1Ref], [this.setTopContainerBottom2Ref, this.setCategoryBottom2Ref, this.setAuthorNameBottom2Ref, this.setAuthorImageBottom2Ref], [this.setTopContainerBottom3Ref, this.setCategoryBottom3Ref, this.setAuthorNameBottom3Ref, this.setAuthorImageBottom3Ref]]} topClassName={this.state.containerOneMarginLeft}/>
      <StoryPageContainer users={this.props.users} stories={[this.returnTrendingWeek()[3], this.returnTrendingWeek()[4], this.returnTrendingWeek()[5]]} refs={[[this.setTopContainerBottom4Ref, this.setCategoryBottom4Ref, this.setAuthorNameBottom4Ref, this.setAuthorImageBottom4Ref], [this.setTopContainerBottom5Ref, this.setCategoryBottom5Ref, this.setAuthorNameBottom5Ref, this.setAuthorImageBottom5Ref], [this.setTopContainerBottom6Ref, this.setCategoryBottom6Ref, this.setAuthorNameBottom6Ref, this.setAuthorImageBottom6Ref]]} topClassName={this.state.containerTwoMarginLeft}/>
      <StoryPageContainer users={this.props.users} stories={[this.returnTrendingWeek()[6], this.returnTrendingWeek()[7], this.returnTrendingWeek()[8]]} refs={[[this.setTopContainerBottom7Ref, this.setCategoryBottom7Ref, this.setAuthorNameBottom7Ref, this.setAuthorImageBottom7Ref], [this.setTopContainerBottom8Ref, this.setCategoryBottom8Ref, this.setAuthorNameBottom8Ref, this.setAuthorImageBottom8Ref], [this.setTopContainerBottom9Ref, this.setCategoryBottom9Ref, this.setAuthorNameBottom9Ref, this.setAuthorImageBottom9Ref]]} topClassName={this.state.containerThreeMarginLeft}/>
      <StoryPageContainer users={this.props.users} stories={[this.returnTrendingWeek()[9], this.returnTrendingWeek()[10], this.returnTrendingWeek()[11]]} refs={[[this.setTopContainerBottom10Ref, this.setCategoryBottom10Ref, this.setAuthorNameBottom10Ref, this.setAuthorImageBottom10Ref], [this.setTopContainerBottom11Ref, this.setCategoryBottom11Ref, this.setAuthorNameBottom11Ref, this.setAuthorImageBottom11Ref], [this.setTopContainerBottom12Ref, this.setCategoryBottom12Ref, this.setAuthorNameBottom12Ref, this.setAuthorImageBottom12Ref]]} topClassName={this.state.containerFourMarginLeft}/>
      </div>
    )

  } if (this.returnTrendingWeek().length >= 7) {

    return (
      <div>
      <StoryPageContainer users={this.props.users} stories={[this.returnTrendingWeek()[0], this.returnTrendingWeek()[1], this.returnTrendingWeek()[2]]} refs={[['1', '2', '3']]} topClassName={this.state.containerOneMarginLeft}/>
      <StoryPageContainer users={this.props.users} stories={[this.returnTrendingWeek()[3], this.returnTrendingWeek()[4], this.returnTrendingWeek()[5]]} topClassName={this.state.containerTwoMarginLeft}/>
      <StoryPageContainer users={this.props.users} stories={[this.returnTrendingWeek()[6], this.returnTrendingWeek()[7], this.returnTrendingWeek()[8]]} topClassName={this.state.containerThreeMarginLeft}/>
      </div>
    )

  } if (this.returnTrendingWeek().length >= 4) {
    return (
      <div>
      <StoryPageContainer users={this.props.users} stories={[this.returnTrendingWeek()[0], this.returnTrendingWeek()[1], this.returnTrendingWeek()[2]]} refs={[['1', '2', '3']]} topClassName={this.state.containerOneMarginLeft}/>
      <StoryPageContainer users={this.props.users} stories={[this.returnTrendingWeek()[3], this.returnTrendingWeek()[4], this.returnTrendingWeek()[5]]} topClassName={this.state.containerTwoMarginLeft}/>
      </div>
    )
  }
  if (this.returnTrendingWeek().length === 3) {
    return (
      <div>
      <StoryPageContainer users={this.props.users} stories={[this.returnTrendingWeek()[0], this.returnTrendingWeek()[1], this.returnTrendingWeek()[2]]} refs={[['1', '2', '3']]} topClassName={this.state.containerOneMarginLeft}/>
      </div>
    )
  }
}
returnTrendingWeek() {
  let trendingWeek = [], trendingMonth = [], trendingThreeMonths = [];

  const popular = Stories.find({
    category: this.props.story.category, storyType: 'published'
  }, {
    sort: {
      likes: -1
    }
  }).fetch().map((story) => {

  if (!(story._id === this.props.story._id)) {
  if (moment(story.lastUpdated).isAfter(oneWeekAgo)) {
      trendingWeek.push(story);
  } else if (moment(story.lastUpdated).isAfter(oneMonthAgo)) {
      trendingMonth.push(story);
  } else if (moment(story.lastUpdated).isAfter(threeMonthsAgo)) {
      trendingThreeMonths.push(story);
  }
  }
  });

  if (trendingWeek.length < 16) {

  if (trendingMonth) {
    trendingMonth.map((story) => {
      trendingWeek.push(story);
    });
  }
  if (trendingThreeMonths) {
    trendingThreeMonths.map((story) => {
      trendingWeek.push(story);
    });
  }
  }

  if (trendingWeek.length > 16) {
    trendingWeek = trendingWeek.slice(0, 16);
  }

  return trendingWeek;
}
returnLargestPopIndex() {
  let largestPopIndex;

  if (this.returnTrendingWeek().length >= 10) {
  largestPopIndex = 4;
  } else if (this.returnTrendingWeek().length >= 7) {
  largestPopIndex = 3;
  } else if (this.returnTrendingWeek().length >= 4) {
  largestPopIndex = 2;
  } else {
  largestPopIndex = 1;
  }
  return largestPopIndex;
}
render() {
    return (
      <div>
        <div className="showToolTipAbove"></div>

{ this.returnTrendingWeek().length >= 3 ?
<div className="ab__popularSectionMarginLeft">
<div className="ret storyBottom__popularTopDiv">
<h2 className="storyBottom__popularHeader">
Popular
</h2><hr className="storyBottom__belowPopularHr" />
</div>

<div className="ab__storyContainersTopSpacing"></div>
<div className="ab__largerStoriesTopContainer">
<div className="storyBottom__relativeContainer">

{this.renderContainers()}

<div className="leftPaddingPopular" onClick={() => { this.leftArrowPop() }}></div>

<div className="rightPaddingPopular" onClick={() => { this.rightArrowPop() }}></div>

<div className="story__positionRightChange">
<div className="slideLeftPopular">
<FontAwesomeIcon icon={['fas', 'arrow-circle-left']} id="tryHover1" className={`${this.state.leftArrow}`} onClick={() => { this.leftArrowPop() }} />
</div>

<div className="popularBetweenArrowsVerticalHr"></div>

<div className="slideRightPopular">
<FontAwesomeIcon icon={['fas', 'arrow-circle-right']} id="tryHover2" className={`${this.state.rightArrow}`} onClick={() => { this.rightArrowPop() }} />
</div>

<div className="clearBoth"></div>


<div className="storyBottom__positionFourCircles">
{this.renderFourPopularCircles()}
</div>
</div>

<div className="ab__veryBottomSpacing"></div>

</div>
</div>
</div>
: undefined }

{/* <div id="disqus_thread"></div> */}

<div className="storyBottom__disqusStyles">

<Disqus.DiscussionEmbed shortname={'www-novaterra-earth'} config={{ url: `https://www.novaterra.earth/${this.props.story.link}`,
identifier: this.props.story._id,
title: this.props.story.title }} />
</div>


{/*<ReactDisqusThread
				shortname="www-novaterra-earth"
				identifier={this.props.story._id}
				title={this.props.story.title}
				url={this.props.story.link}
        category_id="123456"
				onNewComment={this.handleNewComment()}/>
				/>*/}


<LatestOnNovaTerra story={this.props.story} users={this.props.users} />
</div>
    );
  }
}

export default withTracker(() => {
return {

};
})(StoryBottom);
