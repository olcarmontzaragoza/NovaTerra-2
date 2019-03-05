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

export class Future extends React.Component {
constructor(props) {
super(props);
this.state = {

};
}
returnLatest() {
  const latest = Stories.find({
    category: 'Future', storyType: 'published'
  }, {
    sort: {
      lastUpdated: -1
    }
  }).fetch();

  return latest;
}
returnPopular() {
  const popular = Stories.find({
    category: 'Future', storyType: 'published'
  }, {
    sort: {
      reactions: -1
    }
  }).fetch();

  return popular;
}
returnCreators(type) {

  let futureCreators = [];

  Stories.find({
    category: 'Future', storyType: 'published'
  }).fetch().map((story) => {
    let user = this.state.users.findOne({ _id: story.userId }); // FIX THIS

    let alreadyAdded = false;
    futureCreators.map((futureUser) => {
      if (futureUser._id === user._id) {
        alreadyAdded = true;
      }
    });

    if (!alreadyAdded) {
      futureCreators.push(user);
    }

  });

  if (type === 'new') {

    return futureCreators;

  } else if (type === 'old') {

    return futureCreators;

  } else if (type === 'pop') {

    return futureCreators;

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
document.title = `NovaTerra - Future`;
}
render() {
    return (
      <div>
      {this.state.users ? <CategoryPageLayout users={this.state.users} latestCollection={this.returnLatest()} popularCollection={this.returnPopular()} creatorsPop={this.returnCreators('pop')} creatorsNew={this.returnCreators('new')} creatorsOld={this.returnCreators('old')} category='Future' categoryDescription="it's in our hands." relatedCategories={['Tech', 'Economy', 'Environment']} categoryLinks={['/tech', '/economy', '/environment']} relatedTags={['Science', 'Innovation', 'Research']} tagLinks={['/science', '/innovation', '/research']}  />
      : undefined }</div>
    );
  }
}

export default withTracker(() => {
return {

};
})(Future);
