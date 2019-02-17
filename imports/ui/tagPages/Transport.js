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

// let creatorsPop = transportCreators.sort(function(a, b) { return a.followers - b.followers });
//
// let creatorsNew = transportCreators.sort(function(a, b) { return a.lastUpdated - b.lastUpdated });
// let creatorsOld = creatorsNew.reverse();

export class Transport extends React.Component {
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
    if (story.tags.includes('Transport')) {
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
    if (story.tags.includes('Transport')) {
      popular.push(story);
    }
  });
  return popular;
}
returnCreators(type) {
  let transportCreators = [];
  this.returnPopular().map((story) => {
    let user = Meteor.users.findOne({ _id: story.userId }); // FIX THIS

    let alreadyAdded = false;
    transportCreators.map((transportUser) => {
      if (transportUser._id === user._id) {
        alreadyAdded = true;
      }
    });

    if (!alreadyAdded) {
      transportCreators.push(user);
    }

    });

    if (type === 'pop') {
      return transportCreators;
    } else if (type === 'new') {
      return transportCreators;
    } else if (type === 'old') {
      return transportCreators;
    }
}
componentDidMount() {

  Meteor.subscribe('allUsers', () => {
  Tracker.autorun(() => {
      let findUser = Meteor.users;
      this.setState({ users: Meteor.users });
  });
  });
document.title = `NovaTerra - Transport`;
}
render() {
    return (
      <div>
      {this.state.users ? <TagPageLayout users={this.state.users} latestCollection={this.returnLatest()} popularCollection={this.returnPopular()} creatorsPop={this.returnCreators('pop')} creatorsNew={this.returnCreators('new')} creatorsOld={this.returnCreators('old')} tag="Transport" tagDescription="where does it go next?" relatedCategories={['Economy', 'Future', 'Technology']} categoryLinks={['/economy', '/future', '/technology']} relatedTags={['Cities', 'Energy', 'Innovation']} tagLinks={['/cities', '/energy', '/innovation']}  /> : undefined }
      </div>
    );
  }
}

export default withTracker(() => {
Meteor.subscribe('stories');
return {

};
})(Transport);
