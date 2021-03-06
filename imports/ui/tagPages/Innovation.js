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

// let creatorsPop = innovationCreators.sort(function(a, b) { return a.followers - b.followers });
//
// let creatorsNew = innovationCreators.sort(function(a, b) { return a.lastUpdated - b.lastUpdated });
// let creatorsOld = creatorsNew.reverse();

export class Innovation extends React.Component {
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
    if (story.tags.includes('Innovation')) {
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
    if (story.tags.includes('Innovation')) {
      popular.push(story);
    }
  });
  return popular;
}
returnCreators(type) {
  let innovationCreators = [];
  this.returnPopular().map((story) => {
    let user = Meteor.users.findOne({ _id: story.userId }); // FIX THIS

    let alreadyAdded = false;
    innovationCreators.map((innovationUser) => {
      if (innovationUser._id === user._id) {
        alreadyAdded = true;
      }
    });

    if (!alreadyAdded) {
      innovationCreators.push(user);
    }

    });

    if (type === 'pop') {
      return innovationCreators;
    } else if (type === 'new') {
      return innovationCreators;
    } else if (type === 'old') {
      return innovationCreators;
    }
}
componentDidMount() {

  Meteor.subscribe('allUsers', () => {
  Tracker.autorun(() => {
      let findUser = Meteor.users;
      this.setState({ users: Meteor.users });
  });
  });
document.title = `NovaTerra - Innovation`;
}
render() {
    return (
      <div>
        {this.state.users ? <TagPageLayout users={this.state.users} latestCollection={this.returnLatest()} popularCollection={this.returnPopular()} creatorsPop={this.returnCreators('pop')} creatorsNew={this.returnCreators('new')} creatorsOld={this.returnCreators('old')} tag='Innovation' tagDescription="it's about time." relatedCategories={['Future', 'Tech', 'Economy']} categoryLinks={['/future', '/tech', '/economy']} relatedTags={['Research', 'Science', 'Energy']} tagLinks={['/research', '/science', '/energy']}  /> : undefined }
      </div>
    );
  }
}

export default withTracker(() => {
Meteor.subscribe('stories');
return {

};
})(Innovation);
