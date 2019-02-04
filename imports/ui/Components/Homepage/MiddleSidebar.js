import React from 'react';
import { withTracker } from 'meteor/react-meteor-data';
import moment from 'moment';
import { Stories } from '../../../api/stories';
import SideBarStory from './SideBarStory';
import { Session } from 'meteor/session';

const oneWeekAgo = moment().subtract(7, 'days');
const oneMonthAgo = moment().subtract(30, 'days');

let num = -1;
let num1 = -1;

let mainTrending = [];
let trendingMonth = [];
let trendingAll = [];

let findLatest =  Stories.find({ storyType: 'published' }, {
    sort: {
      lastUpdated: -1
    }
}).fetch();

let trending = Stories.find({ storyType: 'published' }, {
      sort: {
        likes: -1
      }
  }).fetch().map((story) => {

  if (moment(story.lastUpdated).isAfter(oneWeekAgo)) {
    mainTrending.push(story);
  } else if (moment(story.lastUpdated).isAfter(oneMonthAgo)) {
    trendingMonth.push(story);
  } else {
    trendingAll.push(story);
  }
});

if (mainTrending.length < 4) {

trendingMonth.map((story) => {
if (mainTrending.length < 4) {
mainTrending.push(story);
}
});

trendingAll.map((story) => {
if (mainTrending.length < 4) {
mainTrending.push(story);
}
});

} else {
mainTrending = mainTrending.slice(0, 4);
}

Session.set('sideBarSide', false);

export class MiddleSidebar extends React.Component {
constructor(props) {
super(props);
this.state = {
latestStories: findLatest.slice(0, 4),
trendingStories: [],
mainTrending,
sideBarSide: false,
trackClassName: 'rightSideBarNotTop',
};
this.trackScrolling = this.trackScrolling.bind(this);
}
toggleClassSideBar() {

}
handleChange(thing) {
  if (thing === 'latest') {
    this.setState({ 'sideBarSide': true });
    num1 = -1;
  } else {
    this.setState({ 'sideBarSide': false });
    num = -1;
  }
}
componentDidMount() {
  document.addEventListener('scroll', this.trackScrolling);
}
componentWillUnmount() {
  document.removeEventListener('scroll', this.trackScrolling);
}
trackScrolling(e) {

let page = window.pageYOffset;
let topElement = document.getElementById('home__topElement').offsetTop;
let bottomElement = document.getElementById('home__bottomElement').offsetTop;

let topOffset = topElement - 141;
let bottomOffset = bottomElement - 610;

console.log('page', page);
console.log('top', topElement);
console.log('bottom', bottomElement);

num = -1;

if (page < topOffset) {
  this.setState({ trackClassName: 'rightSideBarNotTop' });
} else if (page >= topOffset && page <= bottomOffset) {
  console.log('this is now true');
  this.setState({ trackClassName: 'rightSideBar' });
} else if (page > bottomOffset) {
  this.setState({ trackClassName: 'rightSideBarNotBottom' });
}
}
setNum() {
  num = -1;
}
setNum1() {
  num1 = -1;
}
render() {
    return (
      <div>
<div id='trackRightSidebar' className={this.state.trackClassName}>

{ this.state.sideBarSide ?
<div ref="latestSide" onClick={() => { this.handleChange('latest') }} className="latestCategoryRight middleSideBar__selectedCategory">
  <div className="posStoryCat marginLeft10">
Latest </div>
</div>
:
<div ref="latestSide" onClick={() => { this.handleChange('latest') }} className="latestCategoryRight">
  <div className="posStoryCat marginLeft10">
Latest </div>
</div>
}

{ this.state.sideBarSide ?
<div ref="trendingSide" onClick={() => { this.handleChange('trending') }} className="topCategoryBox1 trendingCategoryRight">
  <div className="posStoryCatTrending">
Trending </div>
</div>
:
<div ref="trendingSide" onClick={() => { this.handleChange('trending') }} className="topCategoryBox1 trendingCategoryRight middleSideBar__selectedCategory">
  <div className="posStoryCatTrending">
Trending </div>
</div>
}


<div className="clearBoth"></div>
<hr className="mainHrSideBar" />

{ this.state.sideBarSide ?

  <div className="bottomRightSideBar">

    {this.setNum1()}
    { this.state.latestStories.map((story) => {
      num1++;
      return <SideBarStory collection={this.state.latestStories} users={this.props.users} key={num1} num={num1}/>;
    })}

  </div>

  :

  // {for (let num = 0; num < 4; num++) {
  //   return <SideBarStory collection={this.state.latestStories} num={num}/>;
  // }}

  <div className="bottomRightSideBar">

  {/* {this.returnStories()} */}

  {this.setNum()}

  { this.state.mainTrending.map((story) => {

    num++;
    return <SideBarStory collection={this.state.mainTrending} users={this.props.users} key={num} num={num}/>;
  })}

  </div>
}

</div></div>
    );
  }
}

export default withTracker(() => {
return {

};
})(MiddleSidebar);
