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
  category: 'Environment', storyType: 'published'
}, {
  sort: {
    lastUpdated: -1
  }
}).fetch();

const popular = Stories.find({
  category: 'Environment', storyType: 'published'
}, {
  sort: {
    likes: -1
  }
}).fetch();

export class Environment extends React.Component {
constructor(props) {
super(props);
this.state = {

};
}
returnCreators(type) {

  let environmentCreators = [];

  Stories.find({
    category: 'Environment', storyType: 'published'
  }).fetch().map((story) => {
    let user = this.state.users.findOne({ _id: story.userId }); // FIX THIS

    let alreadyAdded = false;
    environmentCreators.map((environmentUser) => {
      if (environmentUser._id === user._id) {
        alreadyAdded = true;
      }
    });

    if (!alreadyAdded) {
      environmentCreators.push(user);
    }

  });

  if (type === 'new') {

    return environmentCreators;

  } else if (type === 'old') {

    return environmentCreators;

  } else if (type === 'pop') {

    return environmentCreators;

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
document.title = `NovaTerra - Environment`;
}
render() {
    return (
      <div>
      {this.state.users ? <CategoryPageLayout isEnvironment={true} users={this.state.users} latestCollection={latest} popularCollection={popular} creatorsPop={this.returnCreators('pop')} creatorsNew={this.returnCreators('new')} creatorsOld={this.returnCreators('old')} category='Environment' categoryDescription="have we lost our touch?" relatedCategories={['Now', 'Health', 'Future']} categoryLinks={['/now', '/health', '/future']} relatedTags={['Climate Change', 'Biodiversity', 'Waste']} tagLinks={['/climate-change', '/biodiversity', '/waste']}  />
      : undefined }
      </div>
    );
  }
}

export default withTracker(() => {
return {

};
})(Environment);
