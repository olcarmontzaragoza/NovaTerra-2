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

// let creatorsPop = selfCreators.sort(function(a, b) { return a.followers - b.followers });
//
// let creatorsNew = selfCreators.sort(function(a, b) { return a.lastUpdated - b.lastUpdated });
// let creatorsOld = creatorsNew.reverse();

export class Self extends React.Component {
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
    if (story.tags.includes('Self')) {
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
    if (story.tags.includes('Self')) {
      popular.push(story);
    }
  });
  return popular;
}
returnCreators(type) {
  let selfCreators = [];

  this.returnPopular().map((story) => {
    let user = this.state.users.findOne({ _id: story.userId });

    // if (story.userId === user._id) {
    //   if (!creatorsArray.includes(user._id)) {
    //     creatorsArray.push(user._id);

    let alreadyAdded = false;
    selfCreators.map((selfUser) => {
      if (selfUser._id === user._id) {
        alreadyAdded = true;
      }
    });

    if (!alreadyAdded) {
      selfCreators.push(user);
    }

    });

    if (type === 'pop') {
      return selfCreators;
    } else if (type === 'new') {
      return selfCreators;
    } else if (type === 'old') {
      return selfCreators;
    }

}
componentDidMount() {

  Meteor.subscribe('allUsers', () => {
  Tracker.autorun(() => {
      let findUser = Meteor.users;
      this.setState({ users: Meteor.users });
  });
  });
document.title = `NovaTerra - Self`;
}
render() {
    return (
      <div>
      {this.state.users ? <TagPageLayout users={this.state.users} latestCollection={this.returnLatest()} popularCollection={this.returnPopular()} creatorsPop={this.returnCreators('pop')} creatorsNew={this.returnCreators('new')} creatorsOld={this.returnCreators('old')} tag='Self' tagDescription="how to invest in yourself." relatedCategories={['health', 'Technology', 'Economy']} categoryLinks={['/health', '/technology', '/economy']} relatedTags={['Personal Finance', 'Food', 'Work']} tagLinks={['/personal-finance', '/food', '/work']}  /> : undefined }
      </div>
    );
  }
}



export default withTracker(() => {
Meteor.subscribe('stories');
return {

};
})(Self);
