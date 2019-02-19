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

export class Now extends React.Component {
constructor(props) {
super(props);
this.state = {

};
}
returnLatest() {
  const latest = Stories.find({
    category: 'Now', storyType: 'published'
  }, {
    sort: {
      lastUpdated: -1
    }
  }).fetch();

  return latest;
}
returnPopular() {
  const popular = Stories.find({
    category: 'Now', storyType: 'published'
  }, {
    sort: {
      likes: -1
    }
  }).fetch();

return popular;
}
returnCreators(type) {

  let nowCreators = [];

  Stories.find({
    category: 'Now', storyType: 'published'
  }).fetch().map((story) => {
    let user = this.state.users.findOne({ _id: story.userId }); // FIX THIS

    let alreadyAdded = false;
    nowCreators.map((nowUser) => {
      if (nowUser._id === user._id) {
        alreadyAdded = true;
      }
    });

    if (!alreadyAdded) {
      nowCreators.push(user);
    }

  });

  if (type === 'new') {

    return nowCreators;

  } else if (type === 'old') {

    return nowCreators;

  } else if (type === 'pop') {

    return nowCreators;

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
document.title = `NovaTerra - Now`;
}
render() {
    return (
      <div>
       {this.state.users ? <CategoryPageLayout users={this.state.users} latestCollection={this.returnLatest()} popularCollection={this.returnPopular() } creatorsPop={this.returnCreators('pop')} creatorsNew={this.returnCreators('new')} creatorsOld={this.returnCreators('old')} category='Now' categoryDescription="in the moment." relatedCategories={['Economy', 'Environment', 'Future']} categoryLinks={['/economy', '/environment', '/future']} relatedTags={['Equality', 'Politics', 'Innovation']} tagLinks={['/equality', '/politics', '/innovation']}  /> : undefined }
      </div>
    );
  }
}

export default withTracker(() => {
return {

};
})(Now);
