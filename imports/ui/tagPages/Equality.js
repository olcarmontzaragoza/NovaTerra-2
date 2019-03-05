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

// let creatorsPop = recyclingCreators.sort(function(a, b) { return a.followers - b.followers });
//
// let creatorsNew = recyclingCreators.sort(function(a, b) { return a.lastUpdated - b.lastUpdated });
// let creatorsOld = creatorsNew.reverse();

export class Equality extends React.Component {
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
    if (story.tags.includes('Equality')) {
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
  if (story.tags.includes('Equality')) {
    popular.push(story);
  }
});

return popular;
}
returnCreators(type) {
  let equalityCreators = [];
  this.returnPopular().map((story) => {
    let user = Meteor.users.findOne({ _id: story.userId }); // FIX THIS

    let alreadyAdded = false;
    equalityCreators.map((equalityUser) => {
      if (equalityUser._id === user._id) {
        alreadyAdded = true;
      }
    });

    if (!alreadyAdded) {
      equalityCreators.push(user);
    }

    });

    if (type === 'pop') {
      return equalityCreators;
    } else if (type === 'new') {
      return equalityCreators;
    } else if (type === 'old') {
      return equalityCreators;
    }
}
componentDidMount() {

  Meteor.subscribe('allUsers', () => {
  Tracker.autorun(() => {
      let findUser = Meteor.users;
      this.setState({ users: Meteor.users });
  });
  });
document.title = `NovaTerra - Equality`;
}
render() {
    return (
      <div>
        {this.state.users ? <TagPageLayout users={this.state.users} latestCollection={this.returnLatest()} popularCollection={this.returnPopular()} creatorsPop={this.returnCreators('pop')} creatorsNew={this.returnCreators('new')} creatorsOld={this.returnCreators('old')} tag='Equality' tagDescription="is this really fair?" relatedCategories={['Now', 'Future', 'Economy']} categoryLinks={['/now', '/future', '/economy']} relatedTags={['Work', 'Politics', 'Self']} tagLinks={['/work', '/politics', '/self']}  /> : undefined }
      </div>
    );
  }
}

export default withTracker(() => {
Meteor.subscribe('stories');
return {

};
})(Equality);
