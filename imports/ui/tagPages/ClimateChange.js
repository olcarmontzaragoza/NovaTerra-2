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

// let creatorsPop = fossilFuelsCreators.sort(function(a, b) { return a.followers - b.followers });
//
// let creatorsNew = fossilFuelsCreators.sort(function(a, b) { return a.lastUpdated - b.lastUpdated });
// let creatorsOld = creatorsNew.reverse();

export class ClimateChange extends React.Component {
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
    if (story.tags.includes('Climate Change')) {
      latest.push(story);
    }
  });

  return latest;
}
returnPopular() {
  let popular = [];
  const prePopular = Stories.find({ storyType: 'published' }, {
    sort: {
      reactions: -1
    }
  }).fetch().map((story) => {
    if (story.tags.includes('Climate Change')) {
      popular.push(story);
    }
  });

  return popular;
}
returnCreators(type) {
  let climateChangeCreators = [];
  this.returnPopular().map((story) => {
    let user = Meteor.users.findOne({ _id: story.userId }); // FIX THIS

    let alreadyAdded = false;
    climateChangeCreators.map((climateChangeUser) => {
      if (climateChangeUser._id === user._id) {
        alreadyAdded = true;
      }
    });

    if (!alreadyAdded) {
      climateChangeCreators.push(user);
    }

  });
  if (type === 'pop') {
    return climateChangeCreators;
  } else if (type === 'new') {
    return climateChangeCreators;
  } else if (type === 'old') {
    return climateChangeCreators;
  }
}
componentDidMount() {

  Meteor.subscribe('allUsers', () => {
  Tracker.autorun(() => {
      let findUser = Meteor.users;
      this.setState({ users: Meteor.users });
  });
  });
document.title = `NovaTerra - Climate Change`;
}
render() {
    return (
      <div>
        {this.state.users ? <TagPageLayout users={this.state.users} latestCollection={this.returnLatest()} popularCollection={this.returnPopular()} creatorsPop={this.returnCreators('pop')} creatorsNew={this.returnCreators('new')} creatorsOld={this.returnCreators('old')} tag='Climate Change' tagDescription="are these effects irreversible?" relatedCategories={['Environment', 'Future', 'Now']} categoryLinks={['/environment', '/future', '/now']} relatedTags={['Energy', 'Biodiversity', 'Politics']} tagLinks={['/energy', '/biodiversity', '/politics']}  /> : undefined }
      </div>
    );
  }
}

export default withTracker(() => {
Meteor.subscribe('stories');
return {


};
})(ClimateChange);
