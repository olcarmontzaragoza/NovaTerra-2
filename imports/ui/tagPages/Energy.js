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

// let creatorsPop = energyCreators.sort(function(a, b) { return a.followers - b.followers });
//
// let creatorsNew = energyCreators.sort(function(a, b) { return a.lastUpdated - b.lastUpdated });
// let creatorsOld = creatorsNew.reverse();

export class Energy extends React.Component {
constructor(props) {
super(props);
this.state = {

};
}
returnPopular() {
let popular = [];

  const prePopular = Stories.find({ storyType: 'published' }, {
    sort: {
      likes: -1
    }
  }).fetch().map((story) => {
    if (story.tags.includes('Energy')) {
      popular.push(story);
    }
  });

  return popular;
}
returnLatest() {
let latest = [];

  const preLatest = Stories.find({ storyType: 'published' }, {
    sort: {
      lastUpdated: -1
    }
  }).fetch().map((story) => {
    if (story.tags.includes('Energy')) {
      latest.push(story);
    }
  });

  return latest;
}
returnCreators(type) {
  let energyCreators = [];
  this.returnPopular().map((story) => {
    let user = Meteor.users.findOne({ _id: story.userId }); // FIX THIS

    let alreadyAdded = false;
    energyCreators.map((energyUser) => {
      if (energyUser._id === user._id) {
        alreadyAdded = true;
      }
    });

    if (!alreadyAdded) {
      energyCreators.push(user);
    }
    });

    if (type === 'pop') {
      return energyCreators;
    } else if (type === 'new') {
      return energyCreators;
    } else if (type === 'old') {
      return energyCreators;
    }
}
componentDidMount() {

  Meteor.subscribe('allUsers', () => {
  Tracker.autorun(() => {
      let findUser = Meteor.users;
      this.setState({ users: Meteor.users });
  });
  });
document.title = `NovaTerra - Energy`;
}
render() {
    return (
      <div>
        {this.state.users ? <TagPageLayout users={this.state.users} latestCollection={this.returnLatest()} popularCollection={this.returnPopular()} creatorsPop={this.returnCreators('pop')} creatorsNew={this.returnCreators('new')} creatorsOld={this.returnCreators('old')} tag="Energy" tagDescription="when do we move forward?" relatedCategories={['Future', 'Economy', 'Now']} categoryLinks={['/future', '/economy', '/now']} relatedTags={['Climate Change', 'Innovation', 'Politics']} tagLinks={['/climate-change', '/innovation', '/politics']}  /> : undefined }
      </div>
    );
  }
}

export default withTracker(() => {
Meteor.subscribe('stories');
return {

};
})(Energy);
