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
  if (story.tags.includes('Work')) {
    latest.push(story);
  }
});

const prePopular = Stories.find({ storyType: 'published' }, {
  sort: {
    likes: -1
  }
}).fetch().map((story) => {
  if (story.tags.includes('Work')) {
    popular.push(story);
  }
});

function myArrayMin(arr) {
    return Math.min.apply(null, arr);
}

function myArrayMax(arr) {
    return Math.max.apply(null, arr);
}

// let creatorsPop = workCreators.sort(function(a, b) { return a.followers - b.followers });
//
// let creatorsNew = workCreators.sort(function(a, b) { return a.lastUpdated - b.lastUpdated });
// let creatorsOld = creatorsNew.reverse();

export class Work extends React.Component {
constructor(props) {
super(props);
this.state = {

};
}
returnCreators(type) {
  let workCreators = [];
  popular.map((story) => {
    let user = Meteor.users.findOne({ _id: story.userId }); // FIX THIS

    let alreadyAdded = false;
    workCreators.map((workUser) => {
      if (workUser._id === user._id) {
        alreadyAdded = true;
      }
    });

    if (!alreadyAdded) {
      workCreators.push(user);
    }
  });

  if (type === 'pop') {
    return workCreators;
  } else if (type === 'new') {
    return workCreators;
  } else if (type === 'old') {
    return workCreators;
  }
}
componentDidMount() {

  Meteor.subscribe('allUsers', () => {
  Tracker.autorun(() => {
      let findUser = Meteor.users;
      this.setState({ users: Meteor.users });
  });
  });
document.title = `NovaTerra - Work`;
}
render() {
    return (
      <div>
        {this.state.users ? <TagPageLayout users={this.state.users} latestCollection={latest} popularCollection={popular} creatorsPop={this.returnCreators('pop')} creatorsNew={this.returnCreators('new')} creatorsOld={this.returnCreators('old')} tag='Work' tagDescription="where does it from here?" relatedCategories={['Economy', 'Future', 'Now']} categoryLinks={['/economy', '/future', '/now']} relatedTags={['Personal Finance', 'Self', 'Cities']} tagLinks={['/personal-finance', '/self', '/cities']}  /> : undefined }
      </div>
    );
  }
}

export default withTracker(() => {
Meteor.subscribe('stories');
return {

};
})(Work);
