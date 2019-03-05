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

export class Health extends React.Component {
constructor(props) {
super(props);
this.state = {

};
}
returnLatest() {
  const latest = Stories.find({
    category: 'Health', storyType: 'published'
  }, {
    sort: {
      lastUpdated: -1
    }
  }).fetch();

  return latest;
}
returnPopular() {
  const popular = Stories.find({
    category: 'Health', storyType: 'published'
  }, {
    sort: {
      reactions: -1
    }
  }).fetch();

  return popular;
}
returnCreators(type) {

  let healthCreators = [];

  Stories.find({
    category: 'Health', storyType: 'published'
  }).fetch().map((story) => {
    let user = this.state.users.findOne({ _id: story.userId }); // FIX THIS

    let alreadyAdded = false;
    healthCreators.map((healthUser) => {
      if (healthUser._id === user._id) {
        alreadyAdded = true;
      }
    });

    if (!alreadyAdded) {
      healthCreators.push(user);
    }

  });

  if (type === 'new') {

    return healthCreators;

  } else if (type === 'old') {

    return healthCreators;

  } else if (type === 'pop') {

    return healthCreators;

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
document.title = `NovaTerra - Health`;
}
render() {
    return (
      <div>
      {this.state.users ? <CategoryPageLayout users={this.state.users} latestCollection={this.returnLatest()} popularCollection={this.returnPopular()} creatorsPop={this.returnCreators('pop')} creatorsNew={this.returnCreators('new')} creatorsOld={this.returnCreators('old')} category='Health' categoryDescription="what does it mean to be healthy?" relatedCategories={['Environment', 'Now', 'Future']} categoryLinks={['/environment', '/now', '/future']} relatedTags={['Self', 'Food', 'Climate Change']} tagLinks={['/self', '/food', '/climate-change']}  />
      : undefined }
      </div>
    );
  }
}

export default withTracker(() => {
return {

};
})(Health);
