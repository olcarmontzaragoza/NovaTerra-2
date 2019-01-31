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
  category: 'Economy', storyType: 'published'
}, {
  sort: {
    lastUpdated: -1
  }
}).fetch();

const popular = Stories.find({
  category: 'Economy', storyType: 'published'
}, {
  sort: {
    likes: -1
  }
}).fetch();

export class Economy extends React.Component {
constructor(props) {
super(props);
this.state = {

};
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
}
render() {
    return (
      <div>
     {this.state.users ? <CategoryPageLayout users={this.state.users} latestCollection={latest} popularCollection={popular} creatorsPop={this.returnCreators('pop')} creatorsNew={this.returnCreators('new')} creatorsOld={this.returnCreators('old')} category='Economy' categoryDescription="climate change vs capitalism." relatedCategories={['Now', 'Future', 'Technology']} categoryLinks={['/now', '/future', '/technology']} relatedTags={['Personal Finance', 'Work', 'Politics']} tagLinks={['/personal-finance', '/work', '/politics']}  /> : undefined }
     </div>
    );
  }
}

export default withTracker(() => {
return {

};
})(Economy);
