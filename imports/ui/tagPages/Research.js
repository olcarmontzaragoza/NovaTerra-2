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

// let creatorsPop = researchCreators.sort(function(a, b) { return a.followers - b.followers });
//
// let creatorsNew = researchCreators.sort(function(a, b) { return a.lastUpdated - b.lastUpdated });
// let creatorsOld = creatorsNew.reverse();

export class Research extends React.Component {
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
    if (story.tags.includes('Research')) {
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
  if (story.tags.includes('Research')) {
    popular.push(story);
  }
});

return popular;
}
returnCreators(type) {
  let researchCreators = [];
  this.returnPopular().map((story) => {
    let user = Meteor.users.findOne({ _id: story.userId }); // FIX THIS

    let alreadyAdded = false;
    researchCreators.map((researchUser) => {
      if (researchUser._id === user._id) {
        alreadyAdded = true;
      }
    });

    if (!alreadyAdded) {
      researchCreators.push(user);
    }

    });

    if (type === 'pop') {
      return researchCreators;
    } else if (type === 'new') {
      return researchCreators;
    } else if (type === 'old') {
      return researchCreators;
    }
}
componentDidMount() {

  Meteor.subscribe('allUsers', () => {
  Tracker.autorun(() => {
      let findUser = Meteor.users;
      this.setState({ users: Meteor.users });
  });
  });
document.title = `NovaTerra - Research`;
}
render() {
    return (
      <div>
        {this.state.users ? <TagPageLayout users={this.state.users} latestCollection={this.returnLatest()} popularCollection={this.returnPopular()} creatorsPop={this.returnCreators('pop')} creatorsNew={this.returnCreators('new')} creatorsOld={this.returnCreators('old')} tag='Research' tagDescription="were we wrong?" relatedCategories={['Future', 'Tech', 'Economy']} categoryLinks={['/future', '/tech', '/economy']} relatedTags={['Innovation', 'Energy', 'Biodiversity']} tagLinks={['/innovation', '/energy', '/biodiversity']}  /> : undefined }
      </div>
    );
  }
}

export default withTracker(() => {
Meteor.subscribe('stories');
return {

};
})(Research);
