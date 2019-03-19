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

width: window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth,

containerOneMarginLeft: this.setMarginLeftsState('zero'),
containerTwoMarginLeft: this.setMarginLeftsState('positive'),
containerThreeMarginLeft: this.setMarginLeftsState('positive'),
containerFourMarginLeft: this.setMarginLeftsState('positive'),

};
this.handleResize = this.handleResize.bind(this);
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
  window.addEventListener('resize', this.handleResize);
}
componentWillUnmount() {
  window.removeEventListener('resize', this.handleResize);
}
handleResize() {
  let width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
  this.setState({ width });

  if (popIndex > this.returnLargestPopIndex()) {
    console.log('largest', this.returnLargestPopIndex());
    popIndex = this.returnLargestPopIndex();
    this.setGreen(this.returnLargestPopIndex());
    this.popCheckFunc();

    // if (this.returnLargestPopIndex() === 1) {
    //
    //   this.setState({ containerOneMarginLeft: this.setMarginLefts('zero') });
    //   this.setState({ containerTwoMarginLeft: this.setMarginLefts('positive') });
    //   this.setState({ containerThreeMarginLeft: this.setMarginLefts('positive') });
    //   this.setState({ containerFourMarginLeft: this.setMarginLefts('positive') });
    //
    // } else if (this.returnLargestPopIndex() === 2) {
    //
    //   this.setState({ containerOneMarginLeft: this.setMarginLefts('negative') });
    //   this.setState({ containerTwoMarginLeft: this.setMarginLefts('zero') });
    //   this.setState({ containerThreeMarginLeft: this.setMarginLefts('positive') });
    //   this.setState({ containerFourMarginLeft: this.setMarginLefts('positive') });
    //
    // } else if (this.returnLargestPopIndex() === 3) {
    //
    //   this.setState({ containerOneMarginLeft: this.setMarginLefts('negative') });
    //   this.setState({ containerTwoMarginLeft: this.setMarginLefts('negative') });
    //   this.setState({ containerThreeMarginLeft: this.setMarginLefts('zero') });
    //   this.setState({ containerFourMarginLeft: this.setMarginLefts('positive') });
    //
    // } else {
    //
    //   this.setState({ containerOneMarginLeft: this.setMarginLefts('negative') });
    //   this.setState({ containerTwoMarginLeft: this.setMarginLefts('negative') });
    //   this.setState({ containerThreeMarginLeft: this.setMarginLefts('negative') });
    //   this.setState({ containerFourMarginLeft: this.setMarginLefts('zero') });
    //
    // }


  }
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
setMarginLeftsState(input) {

  let awidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;

  // console.log('awidth', awidth);

  if (input === 'zero') {

  if (awidth > 945) {

    return 'ab__zero';

  } else if (awidth < 945 && awidth > 545) {

    return 'ab__zero';

  } else if (awidth < 545) {

    return 'ab__zero';

  }

  } else if (input === 'negative') {

    if (awidth > 945) {

      return 'ab__negative1195';

    } else if (awidth < 945 && awidth > 545) {

      return 'ab__negative1195';

    } else if (awidth < 545) {

      return 'ab__negative1195';

    }

  } else if (input === 'positive') {

    if (awidth > 945) {

      return 'ab__1195';

    } else if (awidth < 945 && awidth > 545) {

      return 'ab__1195';

    } else if (awidth < 545) {

      return 'ab__1195';

    }

  }
}
setMarginLefts(input) {
  if (input === 'zero') {

  if (this.state.width > 945) {

    return 'ab__zero';

  } else if (this.state.width < 945 && this.state.width > 545) {

    return 'ab__zero';

  } else if (this.state.width < 545) {

    return 'ab__zero';

  }

  } else if (input === 'negative') {

    if (this.state.width > 945) {

      return 'ab__negative1195';

    } else if (this.state.width < 945 && this.state.width > 545) {

      return 'ab__negative1195';

    } else if (this.state.width < 545) {

      return 'ab__negative1195';

    }

  } else if (input === 'positive') {

    if (this.state.width > 945) {

      return 'ab__1195';

    } else if (this.state.width < 945 && this.state.width > 545) {

      return 'ab__1195';

    } else if (this.state.width < 545) {

      return 'ab__1195';

    }

  }
}
popCheckFunc() {

if (popIndex === 1) {

if (this.state.containerTwoMarginLeft === this.setMarginLefts('zero')) {
this.setState({ containerTwoMarginLeft: this.setMarginLefts('positive') });
this.setState({ containerOneMarginLeft: this.setMarginLefts('zero') });
this.setState({ containerThreeMarginLeft: this.setMarginLefts('positive') });
this.setState({ containerFourMarginLeft: this.setMarginLefts('positive') });

this.setGreen(1);

animationOnGoing = false;
}

if (this.state.containerThreeMarginLeft === this.setMarginLefts('zero')) {
this.setState({ containerThreeMarginLeft: this.setMarginLefts('positive') });
this.setGreen(2);
this.setState({ containerTwoMarginLeft: this.setMarginLefts('positive') });
this.setGreen(1);
this.setState({ containerOneMarginLeft: this.setMarginLefts('zero') });
this.setState({ containerFourMarginLeft: this.setMarginLefts('positive') });

animationOnGoing = false;
}

if (this.state.containerFourMarginLeft === this.setMarginLefts('zero')) {
this.setState({ containerFourMarginLeft: this.setMarginLefts('positive') });
this.setGreen(3);
this.setState({ containerTwoMarginLeft: this.setMarginLefts('positive') });
this.setGreen(2);
this.setState({ containerThreeMarginLeft: this.setMarginLefts('positive') });
this.setGreen(1);
this.setState({ containerOneMarginLeft: this.setMarginLefts('zero') });

animationOnGoing = false;
}
this.changeArrowColor();
}
else if (popIndex === 2) {

if (this.state.containerOneMarginLeft === this.setMarginLefts('zero')) {
this.setState({ containerOneMarginLeft: this.setMarginLefts('negative') });
this.setGreen(2);
this.setState({ containerTwoMarginLeft: this.setMarginLefts('zero') });
this.setState({ containerFourMarginLeft: this.setMarginLefts('positive') });
this.setState({ containerThreeMarginLeft: this.setMarginLefts('positive') });

animationOnGoing = false;
}

if (this.state.containerThreeMarginLeft === this.setMarginLefts('zero')) {
this.setState({ containerThreeMarginLeft: this.setMarginLefts('positive') });
this.setGreen(2);
this.setState({ containerTwoMarginLeft: this.setMarginLefts('zero') });
this.setState({ containerFourMarginLeft: this.setMarginLefts('positive') });
this.setState({ containerOneMarginLeft: this.setMarginLefts('negative') });

animationOnGoing = false;
}

if (this.state.containerFourMarginLeft === this.setMarginLefts('zero')) {
this.setState({ containerFourMarginLeft: this.setMarginLefts('positive') });
this.setGreen(3);
this.setState({ containerThreeMarginLeft: this.setMarginLefts('positive') });
this.setGreen(2);
this.setState({ containerTwoMarginLeft: this.setMarginLefts('zero') });
this.setState({ containerOneMarginLeft: this.setMarginLefts('negative') });

animationOnGoing = false;
}

this.changeArrowColor();
}
else if (popIndex === 3) {

if (this.state.containerOneMarginLeft === this.setMarginLefts('zero')) {
this.setState({ containerOneMarginLeft: this.setMarginLefts('negative') });
this.setGreen(2);
this.setState({ containerTwoMarginLeft: this.setMarginLefts('negative') });
this.setGreen(3);
this.setState({ containerThreeMarginLeft: this.setMarginLefts('zero') });
this.setState({ containerFourMarginLeft: this.setMarginLefts('positive') });

animationOnGoing = false;
}

if (this.state.containerTwoMarginLeft === this.setMarginLefts('zero')) {
this.setState({ containerTwoMarginLeft: this.setMarginLefts('negative') });
this.setGreen(3);
this.setState({ containerThreeMarginLeft: this.setMarginLefts('zero') });
this.setState({ containerFourMarginLeft: this.setMarginLefts('positive') });
this.setState({ containerOneMarginLeft: this.setMarginLefts('negative') });

animationOnGoing = false;
}

if (this.state.containerFourMarginLeft === this.setMarginLefts('zero')) {
this.setState({ containerFourMarginLeft: this.setMarginLefts('positive') });
this.setGreen(3);
this.setState({ containerThreeMarginLeft: this.setMarginLefts('zero') });
this.setState({ containerTwoMarginLeft: this.setMarginLefts('negative') });
this.setState({ containerOneMarginLeft: this.setMarginLefts('negative') });

animationOnGoing = false;
}
this.changeArrowColor();
}
else if (popIndex === 4) {

if (this.state.containerOneMarginLeft === this.setMarginLefts('zero')) {
this.setState({ containerOneMarginLeft: this.setMarginLefts('negative') });
this.setGreen(2);
this.setState({ containerTwoMarginLeft: this.setMarginLefts('negative') });
this.setGreen(3);
this.setState({ containerThreeMarginLeft: this.setMarginLefts('negative') });
this.setGreen(4);
this.setState({ containerFourMarginLeft: this.setMarginLefts('zero') });

animationOnGoing = false;
}

if (this.state.containerTwoMarginLeft === this.setMarginLefts('zero')) {
this.setState({ containerTwoMarginLeft: this.setMarginLefts('negative') });
this.setGreen(3);
this.setState({ containerThreeMarginLeft: this.setMarginLefts('negative') });
this.setGreen(4);
this.setState({ containerFourMarginLeft: this.setMarginLefts('zero') });
this.setState({ containerOneMarginLeft: this.setMarginLefts('negative') });

animationOnGoing = false;
}

if (this.state.containerThreeMarginLeft === this.setMarginLefts('zero')) {
this.setState({ containerThreeMarginLeft: this.setMarginLefts('negative') });
this.setGreen(4);
this.setState({ containerFourMarginLeft: this.setMarginLefts('zero') });
this.setState({ containerTwoMarginLeft: this.setMarginLefts('negative') });
this.setState({ containerOneMarginLeft: this.setMarginLefts('negative') });

animationOnGoing = false;
}
this.changeArrowColor();
}
}

renderFourPopularCircles() {

  if (this.state.width > 945) {

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
} else if (this.state.width < 945 && this.state.width > 545) {

  if (this.returnTrendingWeek().length <= 2) {

    return (
      <div>
      <div className={`popCircle1 ${this.state.popCircleOne}`} onClick={() => { this.popOneOnClick() }}></div>
      </div>
    )
  } else if (this.returnTrendingWeek().length <= 4) {

      return (
        <div>
        <div className={`popCircle1 ${this.state.popCircleOne}`} onClick={() => { this.popOneOnClick() }}></div>
        <div className={`popCircle2 ${this.state.popCircleTwo}`} onClick={() => { this.popTwoOnClick() }}></div>
        </div>
      )
  } else if (this.returnTrendingWeek().length <= 6) {

      return (
        <div>
        <div className={`popCircle1 ${this.state.popCircleOne}`} onClick={() => { this.popOneOnClick() }}></div>
        <div className={`popCircle2 ${this.state.popCircleTwo}`} onClick={() => { this.popTwoOnClick() }}></div>
        <div className={`popCircle3 ${this.state.popCircleThree}`} onClick={() => { this.popThreeOnClick() }}></div>
        </div>
      )
  } else if (this.returnTrendingWeek().length > 6) {

      return (
        <div>
        <div className={`popCircle1 ${this.state.popCircleOne}`} onClick={() => { this.popOneOnClick() }}></div>
        <div className={`popCircle2 ${this.state.popCircleTwo}`} onClick={() => { this.popTwoOnClick() }}></div>
        <div className={`popCircle3 ${this.state.popCircleThree}`} onClick={() => { this.popThreeOnClick() }}></div>
        <div className={`popCircle4 ${this.state.popCircleFour}`} onClick={() => { this.popFourOnClick() }}></div>
        </div>
      )
  }

} else if (this.state.width < 545) {

  if (this.returnTrendingWeek().length === 1) {

    return (
      <div>
      <div className={`popCircle1 ${this.state.popCircleOne}`} onClick={() => { this.popOneOnClick() }}></div>
      </div>
    )
  } else if (this.returnTrendingWeek().length === 2) {

      return (
        <div>
        <div className={`popCircle1 ${this.state.popCircleOne}`} onClick={() => { this.popOneOnClick() }}></div>
        <div className={`popCircle2 ${this.state.popCircleTwo}`} onClick={() => { this.popTwoOnClick() }}></div>
        </div>
      )
  } else if (this.returnTrendingWeek().length === 3) {

      return (
        <div>
        <div className={`popCircle1 ${this.state.popCircleOne}`} onClick={() => { this.popOneOnClick() }}></div>
        <div className={`popCircle2 ${this.state.popCircleTwo}`} onClick={() => { this.popTwoOnClick() }}></div>
        <div className={`popCircle3 ${this.state.popCircleThree}`} onClick={() => { this.popThreeOnClick() }}></div>
        </div>
      )
  } else if (this.returnTrendingWeek().length > 3) {

      return (
        <div>
        <div className={`popCircle1 ${this.state.popCircleOne}`} onClick={() => { this.popOneOnClick() }}></div>
        <div className={`popCircle2 ${this.state.popCircleTwo}`} onClick={() => { this.popTwoOnClick() }}></div>
        <div className={`popCircle3 ${this.state.popCircleThree}`} onClick={() => { this.popThreeOnClick() }}></div>
        <div className={`popCircle4 ${this.state.popCircleFour}`} onClick={() => { this.popFourOnClick() }}></div>
        </div>
      )
  }

}
}
renderContainers() {

  if (this.state.width > 945) {

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

} else if (this.state.width < 945 && this.state.width > 545) {

  if (this.returnTrendingWeek().length <= 2) {

    if (this.returnTrendingWeek().length === 1) {

      return (
        <div>
        <StoryPageContainer users={this.props.users} stories={[this.returnTrendingWeek()[0]]} refs={[[this.setTopContainerBottom1Ref, this.setCategoryBottom1Ref, this.setAuthorNameBottom1Ref, this.setAuthorImageBottom1Ref], [this.setTopContainerBottom2Ref, this.setCategoryBottom2Ref, this.setAuthorNameBottom2Ref, this.setAuthorImageBottom2Ref], [this.setTopContainerBottom3Ref, this.setCategoryBottom3Ref, this.setAuthorNameBottom3Ref, this.setAuthorImageBottom3Ref]]} topClassName={this.state.containerOneMarginLeft}/>
        </div>
      )

    } else {

      return (
        <div>
        <StoryPageContainer users={this.props.users} stories={[this.returnTrendingWeek()[0], this.returnTrendingWeek()[1]]} refs={[[this.setTopContainerBottom1Ref, this.setCategoryBottom1Ref, this.setAuthorNameBottom1Ref, this.setAuthorImageBottom1Ref], [this.setTopContainerBottom2Ref, this.setCategoryBottom2Ref, this.setAuthorNameBottom2Ref, this.setAuthorImageBottom2Ref], [this.setTopContainerBottom3Ref, this.setCategoryBottom3Ref, this.setAuthorNameBottom3Ref, this.setAuthorImageBottom3Ref]]} topClassName={this.state.containerOneMarginLeft}/>
        </div>
      )

    }

  } if (this.returnTrendingWeek().length <= 4) {

    if (this.returnTrendingWeek().length === 3) {

      return (
        <div>
        <StoryPageContainer users={this.props.users} stories={[this.returnTrendingWeek()[0], this.returnTrendingWeek()[1]]} refs={[['1', '2', '3']]} topClassName={this.state.containerOneMarginLeft}/>
        <StoryPageContainer users={this.props.users} stories={[this.returnTrendingWeek()[2]]} topClassName={this.state.containerTwoMarginLeft}/>
        </div>
      )

    } else {

      return (
        <div>
        <StoryPageContainer users={this.props.users} stories={[this.returnTrendingWeek()[0], this.returnTrendingWeek()[1]]} refs={[['1', '2', '3']]} topClassName={this.state.containerOneMarginLeft}/>
        <StoryPageContainer users={this.props.users} stories={[this.returnTrendingWeek()[2], this.returnTrendingWeek()[3]]} topClassName={this.state.containerTwoMarginLeft}/>
        </div>
      )

    }

  } if (this.returnTrendingWeek().length <= 6) {

    if (this.returnTrendingWeek().length === 5) {

      return (
        <div>
        <StoryPageContainer users={this.props.users} stories={[this.returnTrendingWeek()[0], this.returnTrendingWeek()[1]]} refs={[[this.setTopContainerBottom1Ref, this.setCategoryBottom1Ref, this.setAuthorNameBottom1Ref, this.setAuthorImageBottom1Ref], [this.setTopContainerBottom2Ref, this.setCategoryBottom2Ref, this.setAuthorNameBottom2Ref, this.setAuthorImageBottom2Ref], [this.setTopContainerBottom3Ref, this.setCategoryBottom3Ref, this.setAuthorNameBottom3Ref, this.setAuthorImageBottom3Ref]]} topClassName={this.state.containerOneMarginLeft}/>
        <StoryPageContainer users={this.props.users} stories={[this.returnTrendingWeek()[2], this.returnTrendingWeek()[3]]} refs={[[this.setTopContainerBottom4Ref, this.setCategoryBottom4Ref, this.setAuthorNameBottom4Ref, this.setAuthorImageBottom4Ref], [this.setTopContainerBottom5Ref, this.setCategoryBottom5Ref, this.setAuthorNameBottom5Ref, this.setAuthorImageBottom5Ref], [this.setTopContainerBottom6Ref, this.setCategoryBottom6Ref, this.setAuthorNameBottom6Ref, this.setAuthorImageBottom6Ref]]} topClassName={this.state.containerTwoMarginLeft}/>
        <StoryPageContainer users={this.props.users} stories={[this.returnTrendingWeek()[4]]} refs={[[this.setTopContainerBottom7Ref, this.setCategoryBottom7Ref, this.setAuthorNameBottom7Ref, this.setAuthorImageBottom7Ref], [this.setTopContainerBottom8Ref, this.setCategoryBottom8Ref, this.setAuthorNameBottom8Ref, this.setAuthorImageBottom8Ref], [this.setTopContainerBottom9Ref, this.setCategoryBottom9Ref, this.setAuthorNameBottom9Ref, this.setAuthorImageBottom9Ref]]} topClassName={this.state.containerThreeMarginLeft}/>
        </div>
      )

    } else {

      return (
        <div>
        <StoryPageContainer users={this.props.users} stories={[this.returnTrendingWeek()[0], this.returnTrendingWeek()[1]]} refs={[[this.setTopContainerBottom1Ref, this.setCategoryBottom1Ref, this.setAuthorNameBottom1Ref, this.setAuthorImageBottom1Ref], [this.setTopContainerBottom2Ref, this.setCategoryBottom2Ref, this.setAuthorNameBottom2Ref, this.setAuthorImageBottom2Ref], [this.setTopContainerBottom3Ref, this.setCategoryBottom3Ref, this.setAuthorNameBottom3Ref, this.setAuthorImageBottom3Ref]]} topClassName={this.state.containerOneMarginLeft}/>
        <StoryPageContainer users={this.props.users} stories={[this.returnTrendingWeek()[2], this.returnTrendingWeek()[3]]} refs={[[this.setTopContainerBottom4Ref, this.setCategoryBottom4Ref, this.setAuthorNameBottom4Ref, this.setAuthorImageBottom4Ref], [this.setTopContainerBottom5Ref, this.setCategoryBottom5Ref, this.setAuthorNameBottom5Ref, this.setAuthorImageBottom5Ref], [this.setTopContainerBottom6Ref, this.setCategoryBottom6Ref, this.setAuthorNameBottom6Ref, this.setAuthorImageBottom6Ref]]} topClassName={this.state.containerTwoMarginLeft}/>
        <StoryPageContainer users={this.props.users} stories={[this.returnTrendingWeek()[4], this.returnTrendingWeek()[5]]} refs={[[this.setTopContainerBottom7Ref, this.setCategoryBottom7Ref, this.setAuthorNameBottom7Ref, this.setAuthorImageBottom7Ref], [this.setTopContainerBottom8Ref, this.setCategoryBottom8Ref, this.setAuthorNameBottom8Ref, this.setAuthorImageBottom8Ref], [this.setTopContainerBottom9Ref, this.setCategoryBottom9Ref, this.setAuthorNameBottom9Ref, this.setAuthorImageBottom9Ref]]} topClassName={this.state.containerThreeMarginLeft}/>
        </div>
      )

    }
  } else if (this.returnTrendingWeek().length > 6) {

    if (this.returnTrendingWeek().length === 7) {

      return (
        <div>
        <StoryPageContainer users={this.props.users} stories={[this.returnTrendingWeek()[0], this.returnTrendingWeek()[1]]} refs={[[this.setTopContainerBottom1Ref, this.setCategoryBottom1Ref, this.setAuthorNameBottom1Ref, this.setAuthorImageBottom1Ref], [this.setTopContainerBottom2Ref, this.setCategoryBottom2Ref, this.setAuthorNameBottom2Ref, this.setAuthorImageBottom2Ref], [this.setTopContainerBottom3Ref, this.setCategoryBottom3Ref, this.setAuthorNameBottom3Ref, this.setAuthorImageBottom3Ref]]} topClassName={this.state.containerOneMarginLeft}/>
        <StoryPageContainer users={this.props.users} stories={[this.returnTrendingWeek()[2], this.returnTrendingWeek()[3]]} refs={[[this.setTopContainerBottom4Ref, this.setCategoryBottom4Ref, this.setAuthorNameBottom4Ref, this.setAuthorImageBottom4Ref], [this.setTopContainerBottom5Ref, this.setCategoryBottom5Ref, this.setAuthorNameBottom5Ref, this.setAuthorImageBottom5Ref], [this.setTopContainerBottom6Ref, this.setCategoryBottom6Ref, this.setAuthorNameBottom6Ref, this.setAuthorImageBottom6Ref]]} topClassName={this.state.containerTwoMarginLeft}/>
        <StoryPageContainer users={this.props.users} stories={[this.returnTrendingWeek()[4], this.returnTrendingWeek()[5]]} refs={[[this.setTopContainerBottom7Ref, this.setCategoryBottom7Ref, this.setAuthorNameBottom7Ref, this.setAuthorImageBottom7Ref], [this.setTopContainerBottom8Ref, this.setCategoryBottom8Ref, this.setAuthorNameBottom8Ref, this.setAuthorImageBottom8Ref], [this.setTopContainerBottom9Ref, this.setCategoryBottom9Ref, this.setAuthorNameBottom9Ref, this.setAuthorImageBottom9Ref]]} topClassName={this.state.containerThreeMarginLeft}/>
        <StoryPageContainer users={this.props.users} stories={[this.returnTrendingWeek()[6]]} refs={[[this.setTopContainerBottom10Ref, this.setCategoryBottom10Ref, this.setAuthorNameBottom10Ref, this.setAuthorImageBottom10Ref], [this.setTopContainerBottom11Ref, this.setCategoryBottom11Ref, this.setAuthorNameBottom11Ref, this.setAuthorImageBottom11Ref], [this.setTopContainerBottom12Ref, this.setCategoryBottom12Ref, this.setAuthorNameBottom12Ref, this.setAuthorImageBottom12Ref]]} topClassName={this.state.containerFourMarginLeft}/>
        </div>
      )

    } else {

      return (
        <div>
        <StoryPageContainer users={this.props.users} stories={[this.returnTrendingWeek()[0], this.returnTrendingWeek()[1]]} refs={[[this.setTopContainerBottom1Ref, this.setCategoryBottom1Ref, this.setAuthorNameBottom1Ref, this.setAuthorImageBottom1Ref], [this.setTopContainerBottom2Ref, this.setCategoryBottom2Ref, this.setAuthorNameBottom2Ref, this.setAuthorImageBottom2Ref], [this.setTopContainerBottom3Ref, this.setCategoryBottom3Ref, this.setAuthorNameBottom3Ref, this.setAuthorImageBottom3Ref]]} topClassName={this.state.containerOneMarginLeft}/>
        <StoryPageContainer users={this.props.users} stories={[this.returnTrendingWeek()[2], this.returnTrendingWeek()[3]]} refs={[[this.setTopContainerBottom4Ref, this.setCategoryBottom4Ref, this.setAuthorNameBottom4Ref, this.setAuthorImageBottom4Ref], [this.setTopContainerBottom5Ref, this.setCategoryBottom5Ref, this.setAuthorNameBottom5Ref, this.setAuthorImageBottom5Ref], [this.setTopContainerBottom6Ref, this.setCategoryBottom6Ref, this.setAuthorNameBottom6Ref, this.setAuthorImageBottom6Ref]]} topClassName={this.state.containerTwoMarginLeft}/>
        <StoryPageContainer users={this.props.users} stories={[this.returnTrendingWeek()[4], this.returnTrendingWeek()[5]]} refs={[[this.setTopContainerBottom7Ref, this.setCategoryBottom7Ref, this.setAuthorNameBottom7Ref, this.setAuthorImageBottom7Ref], [this.setTopContainerBottom8Ref, this.setCategoryBottom8Ref, this.setAuthorNameBottom8Ref, this.setAuthorImageBottom8Ref], [this.setTopContainerBottom9Ref, this.setCategoryBottom9Ref, this.setAuthorNameBottom9Ref, this.setAuthorImageBottom9Ref]]} topClassName={this.state.containerThreeMarginLeft}/>
        <StoryPageContainer users={this.props.users} stories={[this.returnTrendingWeek()[6], this.returnTrendingWeek()[7]]} refs={[[this.setTopContainerBottom10Ref, this.setCategoryBottom10Ref, this.setAuthorNameBottom10Ref, this.setAuthorImageBottom10Ref], [this.setTopContainerBottom11Ref, this.setCategoryBottom11Ref, this.setAuthorNameBottom11Ref, this.setAuthorImageBottom11Ref], [this.setTopContainerBottom12Ref, this.setCategoryBottom12Ref, this.setAuthorNameBottom12Ref, this.setAuthorImageBottom12Ref]]} topClassName={this.state.containerFourMarginLeft}/>
        </div>
      )

    }
}
} else if (this.state.width < 545) {

  if (this.returnTrendingWeek().length === 1) {
    return (
      <div>
      <StoryPageContainer users={this.props.users} stories={[this.returnTrendingWeek()[0]]} refs={[['1', '2', '3']]} topClassName={this.state.containerOneMarginLeft}/>
      </div>
    )
  } else if (this.returnTrendingWeek().length === 2) {
    return (
      <div>
      <StoryPageContainer users={this.props.users} stories={[this.returnTrendingWeek()[0]]} refs={[['1', '2', '3']]} topClassName={this.state.containerOneMarginLeft}/>
        <StoryPageContainer users={this.props.users} stories={[this.returnTrendingWeek()[1]]} refs={[['1', '2', '3']]} topClassName={this.state.containerTwoMarginLeft}/>
      </div>
    )
  }
  else if (this.returnTrendingWeek().length === 3) {
    return (
      <div>
      <StoryPageContainer users={this.props.users} stories={[this.returnTrendingWeek()[0]]} refs={[['1', '2', '3']]} topClassName={this.state.containerOneMarginLeft}/>
      <StoryPageContainer users={this.props.users} stories={[this.returnTrendingWeek()[1]]} refs={[['1', '2', '3']]} topClassName={this.state.containerTwoMarginLeft}/>
      <StoryPageContainer users={this.props.users} stories={[this.returnTrendingWeek()[2]]} refs={[['1', '2', '3']]} topClassName={this.state.containerThreeMarginLeft}/>
      </div>
    )
  }
  else if (this.returnTrendingWeek().length > 3) {
    console.log('more than three containers created');
    return (
      <div>
      <StoryPageContainer users={this.props.users} stories={[this.returnTrendingWeek()[0]]} refs={[['1', '2', '3']]} topClassName={this.state.containerOneMarginLeft}/>
      <StoryPageContainer users={this.props.users} stories={[this.returnTrendingWeek()[1]]} refs={[['1', '2', '3']]} topClassName={this.state.containerTwoMarginLeft}/>
      <StoryPageContainer users={this.props.users} stories={[this.returnTrendingWeek()[2]]} refs={[['1', '2', '3']]} topClassName={this.state.containerThreeMarginLeft}/>
      <StoryPageContainer users={this.props.users} stories={[this.returnTrendingWeek()[3]]} refs={[['1', '2', '3']]} topClassName={this.state.containerFourMarginLeft}/>
      </div>
    )
  }
}
}
returnTrendingWeek() {
  let trendingWeek = [], trendingMonth = [], trendingThreeMonths = [];

  const popular = Stories.find({
 storyType: 'published'
  }, {
    sort: {
      reactions: -1
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

  if (this.state.width > 945) {

  if (this.returnTrendingWeek().length >= 10) {
  largestPopIndex = 4;
  } else if (this.returnTrendingWeek().length >= 7) {
  largestPopIndex = 3;
  } else if (this.returnTrendingWeek().length >= 4) {
  largestPopIndex = 2;
  } else {
  largestPopIndex = 1;
  }

  } else if (this.state.width < 945 && this.state.width > 545) {

  if (this.returnTrendingWeek().length <= 2) {
  largestPopIndex = 1;
  } else if (this.returnTrendingWeek().length <= 4) {
  largestPopIndex = 2;
  } else if (this.returnTrendingWeek().length <= 6) {
  largestPopIndex = 3;
  } else if (this.returnTrendingWeek().length > 6) {
  largestPopIndex = 4;
  }

  } else if (this.state.width < 545) {

  if (this.returnTrendingWeek().length === 1) {
  largestPopIndex = 1;
  } else if (this.returnTrendingWeek().length === 2) {
  largestPopIndex = 2;
  } else if (this.returnTrendingWeek().length === 3) {
  largestPopIndex = 3;
  } else if (this.returnTrendingWeek().length > 3) {
  largestPopIndex = 4;
  }
  }

  return largestPopIndex;
}
render() {
    return (
      <div>
        <div className="showToolTipAbove"></div>
{console.log('trending week', this.returnTrendingWeek())}
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
{this.state.width ? this.renderFourPopularCircles() : undefined}
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
