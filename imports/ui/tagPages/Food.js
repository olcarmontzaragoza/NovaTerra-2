import React from 'react';
import { withTracker } from 'meteor/react-meteor-data';
import TagPageLayout from './TagPageLayout';
import { Stories } from '../../api/stories';

let latest = [];
let popular = [];

const preLatest = Stories.find({ storyType: 'published' }, {
  sort: {
    lastUpdated: -1
  }
}).fetch().map((story) => {
  if (story.tags.includes('Food')) {
    latest.push(story);
  }
});

const prePopular = Stories.find({ storyType: 'published' }, {
  sort: {
    likes: -1
  }
}).fetch().map((story) => {
  if (story.tags.includes('Food')) {
    popular.push(story);
  }
});

function myArrayMin(arr) {
    return Math.min.apply(null, arr);
}

function myArrayMax(arr) {
    return Math.max.apply(null, arr);
}

//
// let creatorsPop = foodCreators.sort(function(a, b) { return a.followers - b.followers });
//
// let creatorsNew = foodCreators.sort(function(a, b) { return a.lastUpdated - b.lastUpdated });
// let creatorsOld = creatorsNew.reverse();

export class Food extends React.Component {
constructor(props) {
super(props);
this.state = {

};
}
returnCreators(type) {
  let foodCreators = [];
  popular.map((story) => {
    let user = Meteor.users.findOne({ _id: story.userId }); // FIX THIS
    if (user) {

    let alreadyAdded = false;
    foodCreators.map((foodUser) => {
      if (foodUser._id === user._id) {
        alreadyAdded = true;
      }
    });

    if (!alreadyAdded) {
      foodCreators.push(user);
    }

    }
  });

  if (type === 'new') {
    return foodCreators;
  } else if (type === 'old') {
    return foodCreators;
  } else if (type === 'pop') {
    return foodCreators;
  }
}
componentDidMount() {

Meteor.subscribe('allUsers', () => {
Tracker.autorun(() => {
    let findUser = Meteor.users;
    this.setState({ users: Meteor.users });
});
});
document.title = `NovaTerra - Food`;
}
render() {
    return (
      <div>
          {this.state.users ? <TagPageLayout users={this.state.users} latestCollection={latest} popularCollection={popular} creatorsPop={this.returnCreators('pop')} creatorsNew={this.returnCreators('new')} creatorsOld={this.returnCreators('old')} tag='Food' tagDescription="should we rethink food?" relatedCategories={['Health', 'Economy', 'Environment']} categoryLinks={['/health', '/economy', '/environment']} relatedTags={['Waste', 'Climate Change', 'Biodiversity']} tagLinks={['/waste', '/climate-change', '/biodiversity']}  />
          : undefined }
      </div>
    );
  }
}

export default withTracker(() => {
return {

};
})(Food);
