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

// let creatorsPop = scienceCreators.sort(function(a, b) { return a.followers - b.followers });
//
// let creatorsNew = scienceCreators.sort(function(a, b) { return a.lastUpdated - b.lastUpdated });
// let creatorsOld = creatorsNew.reverse();

export class Science extends React.Component {
constructor(props) {
super(props);
this.state = {

};
}
returnLatest() {
  let latest = [];
  const preLatest = Stories.find({ storyType: 'published' }, {
    sort: {
      lastUpdated: -1
    }
  }).fetch().map((story) => {
    if (story.tags.includes('Science')) {
      latest.push(story);
    }
  });
  return latest;
}
returnPopular() {
  let popular = [];
  const prePopular = Stories.find({ storyType: 'published' }, {
    sort: {
      likes: -1
    }
  }).fetch().map((story) => {
    if (story.tags.includes('Science')) {
      popular.push(story);
    }
  });
  return popular;
}
returnCreators(type) {
  let scienceCreators = [];
  this.returnPopular().map((story) => {
    let user = Meteor.users.findOne({ _id: story.userId }); // FIX THIS

    let alreadyAdded = false;
    scienceCreators.map((scienceUser) => {
      if (scienceUser._id === user._id) {
        alreadyAdded = true;
      }
    });

    if (!alreadyAdded) {
      scienceCreators.push(user);
    }

  });
  if (type === 'pop') {
    return scienceCreators;
  } else if (type === 'new') {
    return scienceCreators;
  } else if (type === 'old') {
    return scienceCreators;
  }
}
componentDidMount() {

  Meteor.subscribe('allUsers', () => {
  Tracker.autorun(() => {
      let findUser = Meteor.users;
      this.setState({ users: Meteor.users });
  });
  });
document.title = `NovaTerra - Science`;
}
render() {
    return (
      <div>
        {this.state.users ? <TagPageLayout users={this.state.users} latestCollection={this.returnLatest()} popularCollection={this.returnPopular()} creatorsPop={this.returnCreators('pop')} creatorsNew={this.returnCreators('new')} creatorsOld={this.returnCreators('old')} tag='Science' tagDescription="what can it tells us?" relatedCategories={['Future', 'Environment', 'Tech']} categoryLinks={['/future', '/environment', '/tech']} relatedTags={['Research', 'Energy', 'Biodiversity']} tagLinks={['/research', '/energy', '/biodiversity']}  /> : undefined }
      </div>
    );
  }
}

export default withTracker(() => {
Meteor.subscribe('stories');
return {


};
})(Science);
