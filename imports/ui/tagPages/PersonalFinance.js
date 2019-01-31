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
  if (story.tags.includes('Personal Finance')) {
    latest.push(story);
  }
});

const prePopular = Stories.find({ storyType: 'published' }, {
  sort: {
    likes: -1
  }
}).fetch().map((story) => {
  if (story.tags.includes('Personal Finance')) {
    popular.push(story);
  }
});

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

export class PersonalFinance extends React.Component {
constructor(props) {
super(props);
this.state = {

};
}
returnCreators(type) {
  let innovationCreators = [];
  popular.map((story) => {
    let user = Meteor.users.findOne({ _id: story.userId });

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
  if (type === 'new') {
    return innovationCreators;
  } else if (type === 'old') {
    return innovationCreators;
  } else if (type === 'pop') {
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
}
render() {
    return (
      <div>
        {this.state.users ? <TagPageLayout users={this.props.users} latestCollection={latest} popularCollection={popular} creatorsPop={this.returnCreators('pop')} creatorsNew={this.returnCreators('new')} creatorsOld={this.returnCreators('old')} tag='Personal Finance' tagDescription="in the age of consumerism." relatedCategories={['Economy', 'Now', 'Technology']} categoryLinks={['/economy', '/now', '/technology']} relatedTags={['Self', 'Work', 'Transport']} tagLinks={['/self', '/work', '/transport']}  /> : undefined }
      </div>
    );
  }
}

export default withTracker(() => {
Meteor.subscribe('stories');
return {

};
})(PersonalFinance);
