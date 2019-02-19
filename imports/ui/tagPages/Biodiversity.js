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

// let creatorsPop = biodiversityCreators.sort(function(a, b) { return a.followers - b.followers });
//
// let creatorsNew = biodiversityCreators.sort(function(a, b) { return a.lastUpdated - b.lastUpdated });
// let creatorsOld = creatorsNew.reverse();

export class Biodiversity extends React.Component {
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
    if (story.tags.includes('Biodiversity')) {
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
    if (story.tags.includes('Biodiversity')) {
      popular.push(story);
    }
  });

  return popular;
}
returnCreators(type) {
  let biodiversityCreators = [];
  popular.map((story) => {
    let user = Meteor.users.findOne({ _id: story.userId }); // FIX THIS

    let alreadyAdded = false;
    biodiversityCreators.map((biodiversityUser) => {
      if (biodiversityUser._id === user._id) {
        alreadyAdded = true;
      }
    });

    if (!alreadyAdded) {
      biodiversityCreators.push(user);
    }

  });

  if (type === 'pop') {
    return biodiversityCreators;
  } else if (type === 'new') {
    return biodiversityCreators;
  } else if (type === 'old') {
    return biodiversityCreators;
  }
}
componentDidMount() {

  Meteor.subscribe('allUsers', () => {
  Tracker.autorun(() => {
      let findUser = Meteor.users;
      this.setState({ users: Meteor.users });
  });
  });
document.title = `NovaTerra - Biodiversity`;
}
render() {
    return (
      <div>
      {this.state.users ? <TagPageLayout users={this.state.users} latestCollection={latest} popularCollection={popular} creatorsPop={this.returnCreators('pop')} creatorsNew={this.returnCreators('new')} creatorsOld={this.returnCreators('old')} tag='Biodiversity' tagDescription="can we live side by side?" relatedCategories={['Environment', 'Now', 'Future']} categoryLinks={['/environment', '/now', '/future']} relatedTags={['Climate Change', 'Food', 'Cities']} tagLinks={['/climate-change', '/food', '/cities']}  /> : undefined }
      </div>
    );
  }
}

export default withTracker(() => {
Meteor.subscribe('stories');
return {

};
})(Biodiversity);
