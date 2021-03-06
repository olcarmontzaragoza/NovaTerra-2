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

export class Economy extends React.Component {
constructor(props) {
super(props);
this.state = {

};
}
returnLatest() {
  const latest = Stories.find({
    category: 'Economy', storyType: 'published'
  }, {
    sort: {
      lastUpdated: -1
    }
  }).fetch();

  return latest;
}
returnPopular() {
  const popular = Stories.find({
    category: 'Economy', storyType: 'published'
  }, {
    sort: {
      reactions: -1
    }
  }).fetch();

  return popular;
}
returnCreators(type) {

  let economyCreators = [];

  Stories.find({
    category: 'Economy', storyType: 'published'
  }).fetch().map((story) => {
    let user = this.state.users.findOne({ _id: story.userId }); // FIX THIS

    let alreadyAdded = false;
    economyCreators.map((economyUser) => {
      if (economyUser._id === user._id) {
        alreadyAdded = true;
      }
    });

    if (!alreadyAdded) {
      economyCreators.push(user);
    }

  });

  if (type === 'new') {

    return economyCreators;

  } else if (type === 'old') {

    return economyCreators;

  } else if (type === 'pop') {

    return economyCreators;

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
document.title = `NovaTerra - Economy`;
}
render() {
    return (
      <div>
     {this.state.users ? <CategoryPageLayout users={this.state.users} latestCollection={this.returnLatest()} popularCollection={this.returnPopular()} creatorsPop={this.returnCreators('pop')} creatorsNew={this.returnCreators('new')} creatorsOld={this.returnCreators('old')} category='Economy' categoryDescription="climate change vs capitalism." relatedCategories={['Now', 'Future', 'Tech']} categoryLinks={['/now', '/future', '/tech']} relatedTags={['Personal Finance', 'Work', 'Politics']} tagLinks={['/personal-finance', '/work', '/politics']}  /> : undefined }
     </div>
    );
  }
}

export default withTracker(() => {
return {

};
})(Economy);
