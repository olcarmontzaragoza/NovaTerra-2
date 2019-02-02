import React from 'react';
import { withTracker } from 'meteor/react-meteor-data';
import CategoryPageLayout from './CategoryPageLayout';
import { Stories } from '../../api/stories';

function myArrayMin(arr) {
    return Math.min.apply(null, arr);
}

function myArrayMax(arr) {
    return Math.max.apply(null, arr);
}

const latest = Stories.find({
  category: 'Tech', storyType: 'published'
}, {
  sort: {
    lastUpdated: -1
  }
}).fetch();

const popular = Stories.find({
  category: 'Tech', storyType: 'published'
}, {
  sort: {
    likes: -1
  }
}).fetch();

export class Tech extends React.Component {
constructor(props) {
super(props);
this.state = {

};
}
returnCreators(type) {

  let techCreators = [];

  Stories.find({
    category: 'Tech', storyType: 'published'
  }).fetch().map((story) => {
    let user = this.state.users.findOne({ _id: story.userId }); // FIX THIS

    let alreadyAdded = false;
    techCreators.map((techUser) => {
      if (techUser._id === user._id) {
        alreadyAdded = true;
      }
    });

    if (!alreadyAdded) {
      techCreators.push(user);
    }

  });

  if (type === 'new') {

    return techCreators;

  } else if (type === 'old') {

    return techCreators;

  } else if (type === 'pop') {

    return techCreators;

  }

  // let creatorsPop = climateCreators.sort(function(a, b) { return a.followers - b.followers });
  //
  // let creatorsNew = climateCreators.sort(function(a, b) { return a.lastUpdated - b.lastUpdated });
  // let creatorsOld = creatorsNew.reverse();

}
componentDidMount() {

Meteor.subscribe('allUsers', () => {
Tracker.autorun(() => {
  let findUser = Meteor.users;
  this.setState({ users: Meteor.users });
});
});
document.title = `NovaTerra - Technology`;
}
render() {
    return (
      <div>
      {this.state.users ? <CategoryPageLayout users={this.state.users} latestCollection={latest} popularCollection={popular} creatorsPop={this.returnCreators('pop')} creatorsNew={this.returnCreators('new')} creatorsOld={this.returnCreators('new')} category='Technology' categoryDescription="our greatest ally or greatest enemy?" relatedCategories={['Future', 'Economy', 'Now']} categoryLinks={['/future', '/economy', '/now']} relatedTags={['Innovation', 'Research', 'Work']} tagLinks={['/innovation', '/research', '/work']}  />
      : undefined }</div>
    );
  }
}

export default withTracker(() => {
return {

};
})(Tech);
