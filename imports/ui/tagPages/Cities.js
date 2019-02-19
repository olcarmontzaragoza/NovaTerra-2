import React from 'react';
import { withTracker } from 'meteor/react-meteor-data';
import TagPageLayout from './TagPageLayout';
import { Stories } from '../../api/stories';

function myArrayMin(arr) {
    return Math.min.apply(null, arr);
}

function myArrayMax(arr) {
    return Math.max.apply(null, arr);
}

// let creatorsPop = natureCreators.sort(function(a, b) { return a.followers - b.followers });
//
// let creatorsNew = natureCreators.sort(function(a, b) { return a.lastUpdated - b.lastUpdated });
// let creatorsOld = creatorsNew.reverse();

export class Cities extends React.Component {
constructor(props) {
super(props);
this.state = {

};
}
returnPopular() {
  let popular = [];

  const preLatest = Stories.find({ storyType: 'published' }, {
    sort: {
      lastUpdated: -1
    }
  }).fetch().map((story) => {
    if (story.tags.includes('Cities')) {
      latest.push(story);
    }
  });

  return popular;
}
returnLatest() {
  let latest = [];

  const prePopular = Stories.find({ storyType: 'published' }, {
    sort: {
      likes: -1
    }
  }).fetch().map((story) => {
    if (story.tags.includes('Cities')) {
      popular.push(story);
    }
  });

  return latest;
}
returnCreators(type) {
  let citiesCreators = [];
  popular.map((story) => {
    let user = Meteor.users.findOne({ _id: story.userId }); // FIX THIS

    let alreadyAdded = false;
    citiesCreators.map((citiesUser) => {
      if (citiesUser._id === user._id) {
        alreadyAdded = true;
      }
    });

    if (!alreadyAdded) {
      citiesCreators.push(user);
    }

    });

    if (type === 'pop') {
      return citiesCreators;
    } else if (type === 'new') {
      return citiesCreators;
    } else if (type === 'old') {
      return citiesCreators;
    }
}
componentDidMount() {

  Meteor.subscribe('allUsers', () => {
  Tracker.autorun(() => {
      let findUser = Meteor.users;
      this.setState({ users: Meteor.users });
  });
  });
document.title = `NovaTerra - Cities`;
}
render() {
    return (
      <div>
        {this.state.users ? <TagPageLayout users={this.state.users} latestCollection={this.returnLatest()} popularCollection={this.returnPopular()} creatorsPop={this.returnCreators('pop')} creatorsNew={this.returnCreators('new')} creatorsOld={this.returnCreators('old')} tag='Cities' tagDescription='how can we run most effeciently?' relatedCategories={['Future', 'Health', 'Economy']} categoryLinks={['/future', '/health', '/economy']} relatedTags={['Transport', 'Waste', 'Work']} tagLinks={['/transport', '/waste', '/work']}  /> : undefined }
      </div>
    );
  }
}

export default withTracker(() => {
Meteor.subscribe('stories');
return {


};
})(Cities);
