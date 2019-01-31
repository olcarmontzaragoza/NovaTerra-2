import React from 'react';
import { withTracker } from 'meteor/react-meteor-data';
import moment from 'moment';
import { Stories } from '../../../api/stories';
import { Tags } from '../../../api/stories';
import { Meteor } from 'meteor/meteor';
import AuthorTooltip from '../Tooltips/AuthorTooltip';

// import MiddleStoryCategory from './MiddleStoryCategory';
import MiddleStory from './MiddleStory';
import MiddleSidebar from './MiddleSidebar';
import MobileSidebar from './MobileSidebar';

Session.set('sliceNumHomeMiddle', 16);

const oneWeekAgo = moment().subtract(7, 'days');
const oneMonthAgo = moment().subtract(30, 'days');
const threeMonthsAgo = moment().subtract(90, 'days');

let num = -1;

let mainLatest = [];
let monthLatest = [];
let threeMonthLatest = [];

function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;

  while (0 !== currentIndex) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

let homeMiddleArray = [];

// FIX THIS - PERSONALISED CONTENT
// if (!!Meteor.userId) {
//
//   let user = Meteor.users.findOne({ _id: this.userId }); // FIX THIS
//
//   if (!!Meteor.userId) {
//
//   let homeAndMiddleStories = [];
//
//   let categories = ['Climate', 'Energy', 'Future', 'Science', 'World', 'Technology', 'Economy', 'Science', 'Politics', 'Health', 'Media', 'Art & Film', 'Environment' ]
//
//   let tags = ['Fossil Fuels', 'Transport', 'Renewables', 'Sustainability', 'Agriculture', 'Extreme Weather', 'Biodiversity', 'Waste', 'Nature', 'Home', 'Justice', 'Air Pollution', 'Recycling', 'Research'];
//
//   let authors = [];
//
//   let findAuthors = Stories.find({ storyType: 'published' }, {
//   }).fetch().map((story) => {
//
//     let user = Meteor.users.findOne({ _id: story.userId }); // FIX THIS
//     if (user) {
//
//     let alreadyAdded = false;
//     authors.map((author) => {
//       if (author._id === user._id) {
//         alreadyAdded = true;
//       }
//     });
//
//     if (!alreadyAdded) {
//       authors.push(user);
//     }
//   }
//   });
//
//   let following = this;
//
//   categories.map((category) => {
//     if (following.includes(category)) {
//       Stories.find({ category, type: 'published'}).fetch().map((story) => {
//
//         if (moment(story.lastUpdated).isAfter(oneMonthAgo)) {
//         homeAndMiddleStories.push(story);
//       }
//       });
//     }
//   });
//
//   tag.map((tag) => {
//     if (following.includes(tag)) {
//       Stories.find({ storyType: 'published' }).fetch().map((story) => {
//
//         if (tags.includes(tag)) {
//         if (moment(story.lastUpdated).isAfter(oneMonthAgo)) {
//         homeAndMiddleStories.push(story);
//         }
//         }
//       });
//     }
//   });
//
//   Meteor.users.map((user) => {
//   if (following.includes(user._id)) {
//
//   Stories.find({ storyType: 'published' }).fetch().map((story) => {
//
//     if (story.userId === user._id) {
//     if (moment(story.lastUpdated).isAfter(oneMonthAgo)) {
//     homeAndMiddleStories.push(story);
//     }
//     }
//   });
//   }
//   });
//
//   if (homeAndMiddleStories.length >= 21) {
//
//   homeTopArray = homeAndMiddleStories.find({}, { sort: { likes: -1 }}).fetch().slice(0, 5);
//   homeTopArray.map((story) => {
//   if (homeAndMiddleStories.includes(story)) {
//   let index = homeAndMiddleStories.indexOf(story);
//   homeAndMiddleStories.splice(index, 1);
//
//   if (homeAndMiddleStories.length > 16) {
//     let extra = homeAndMiddleStories.slice(16, homeAndMiddleStories.length-1);
//     extra.map((story) => {
//       homeAndMiddleStories.unShift(story);
//     });
//     homeAndMiddleStories = homeAndMiddleStories.slice(0, 16);
//   }
//   }
//   });
//   homeMiddleArray = homeAndMiddleStories;
//
//   } else if (homeAndMiddleStories.length >= 5) {
//
//   homeTopArray = homeAndMiddleStories.find({}, { sort: { likes: -1 }}).fetch().slice(0, 5);;
//   if (homeAndMiddleStories.includes(story)) {
//   let index = homeAndMiddleStories.indexOf(story);
//   homeAndMiddleStories.splice(index, 1);
//   }
//   homeMiddleArray = homeAndMiddleStories;
//   }
//   }
// }

let findLatest =  Stories.find({ storyType: 'published' }, {
    sort: {
      lastUpdated: -1
    }
}).fetch().map((story) => {
  if (moment(story.lastUpdated).isAfter(oneWeekAgo)) {
    mainLatest.push(story);
  } else if (moment(story.lastUpdated).isAfter(oneMonthAgo)) {
    monthLatest.push(story);
  } else if (moment(story.lastUpdated).isAfter(threeMonthsAgo)) {
    threeMonthLatest.push(story);
  }
});

if (mainLatest.length < 16) {

monthLatest.map((story) => {
if (mainLatest.length < 16) {
mainLatest.push(story);
}
});

threeMonthLatest.map((story) => {
if (mainLatest.length < 16) {
mainLatest.push(story);
}
});

} else {
mainLatest = mainLatest.slice(0, 16);
}

mainLatest = shuffle(mainLatest);

let latestClimate = Stories.find({
  category: 'Climate', storyType: 'published'
}, {
  sort: {
      lastUpdated: -1
  }
}).fetch();

let latestWorld = Stories.find({
  category: 'World', storyType: 'published'
}, {
  sort: {
      lastUpdated: -1
  }
}).fetch();

let latestFuture = Stories.find({
  category: 'Future', storyType: 'published'
}, {
  sort: {
      lastUpdated: -1
  }
}).fetch();

if (homeMiddleArray.length === 16) {
 mainLatest = homeMiddleArray;
} else if (homeMiddleArray.length > 0) {
homeMiddleArray.map((story) => {
mainLatest.unshift(story);
});
mainLatest = mainLatest.slice(0, 16);
}

mainLatest.map((story) => {
  if (findLatest.includes(story)) {
    let index = findLatest.indexOf(story);
    findLatest.splice(index, 1);
  }
});

export class HomeMiddle extends React.Component {
constructor(props) {
super(props);
this.state = {
// showMoreContainers: this.props.showMoreContainers,
// middleStories: this.props.middleStoriese
latestStories: mainLatest
};
}
renderStoriesMiddle() {

}
renderEightMoreStories() {
let showMoreStories;
let newNumShow = Session.get('sliceNumHomeMiddle') + 9;
Session.set('sliceNumHomeMiddles', newNumShow);

let s1 = Session.get('sliceNumHomeMiddle') -1;

if (findLatest[s1]) {
  showMoreStories = findLatest.slice(16, Session.get('sliceNumHomeMiddle'));
} else  {
  showMoreStories = findLatest.slice(16, findLatest.length);
  Session.set('storiesLeftHomeMiddle', true);
}
this.setState({ showMoreStories });
}
setNum() {
  num = -1;
}
  render() {
    return (
      <div>

      <div className="positionfirstHrHome">
      </div>
            <hr className="bottomHrHomeTop" />


      <div className="mainSideBarHomeMiddle">
      <MiddleSidebar users={this.props.users} />
      </div>

        <div className="label homeMiddle__mainLabel">
        Latest on Novaterra
        </div>
        <hr className="veryTopMiddleHomeHr" id='home__topElement' />

        <div>
        {this.setNum()}
        {console.log('latest stories', this.state.latestStories)}
        {
          this.state.latestStories.map((story) => {
          num++;
          if (num === 3 && latestClimate.length >= 3) {
          return (
            <div key={story._id}>
              <MiddleStory story={story} users={this.props.users} />
              {/* <MiddleStoryCategory collection={latestClimate} /> */}
            </div>
          )
        } else if (num === 7 && latestWorld.length >= 3) {
          return (
            <div key={story._id}>
              <MiddleStory story={story} users={this.props.users} />
              {/* <MiddleStoryCategory collection={latestWorld} /> */}
            </div>
          )
        } else if (num === 11 && latestFuture.length >= 3) {
          return (
            <div key={story._id}>
              <MiddleStory story={story} users={this.props.users} collection={latestFuture} />
              {/* <MiddleStoryCategory collection={latestFuture} /> */}
            </div>
          )
          } else {
          return <MiddleStory key={story._id} users={this.props.users} story={story}/>;
          }

        })
        }

        { this.state.storiesLefToShow && !Session.get('storiesLeftHomeMiddle') ?
        <div>
        <div onClick={() => { this.renderEightMoreStories() }} className="explore__largerDivShowMore">
        <div className="explore__showMoreBottomContainer">Show More</div>
        </div>
        <div className="categoryAndTag__showMoreTopSpacing"></div>
        </div>
        : undefined }

        </div>

        <div id='home__bottomElement'></div>

        <div className="homeMiddle__bestOfNovaTerra">
        <div className="homeMiddle__bestOfNovaTerraLeft">
        <div className="bestOfNovaTerraMessage">Best of NovaTerra.</div>
        </div>

        <div className="homeMiddle__bestOfNovaTerraRight">
        <MobileSidebar users={this.props.users} />
        </div>

        </div>



      <div className="clearBoth"></div>
      </div>
    );
  }
}

export default withTracker(() => {
return {

};
})(HomeMiddle);
