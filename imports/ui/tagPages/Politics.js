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
  if (story.tags.includes('Politics')) {
    latest.push(story);
  }
});

const prePopular = Stories.find({ storyType: 'published' }, {
  sort: {
    likes: -1
  }
}).fetch().map((story) => {
  if (story.tags.includes('Politics')) {
    popular.push(story);
  }
});

function myArrayMin(arr) {
    return Math.min.apply(null, arr);
}

function myArrayMax(arr) {
    return Math.max.apply(null, arr);
}

// let creatorsPop = politicsCreators.sort(function(a, b) { return a.followers - b.followers });
//
// let creatorsNew = politicsCreators.sort(function(a, b) { return a.lastUpdated - b.lastUpdated });
// let creatorsOld = creatorsNew.reverse();

export class Politics extends React.Component {
constructor(props) {
super(props);
this.state = {

};
}
returnCreators(type) {
  let politicsCreators = [];
  popular.map((story) => {
    let user = Meteor.users.findOne({ _id: story.userId }); // FIX THIS

    let alreadyAdded = false;
    politicsCreators.map((politicsUser) => {
      if (politicsUser._id === user._id) {
        alreadyAdded = true;
      }
    });

    if (!alreadyAdded) {
      politicsCreators.push(user);
    }

    });

    if (type === 'pop') {
      return politicsCreators;
    } else if (type === 'new') {
      return politicsCreators;
    } else if (type === 'old') {
      return politicsCreators;
    }
}
componentDidMount() {

  Meteor.subscribe('allUsers', () => {
  Tracker.autorun(() => {
      let findUser = Meteor.users;
      this.setState({ users: Meteor.users });
  });
  });
document.title = `NovaTerra - Politics`;
}
render() {
    return (
      <div>
      {this.state.users ? <TagPageLayout users={this.state.users} latestCollection={latest} popularCollection={popular} creatorsPop={this.returnCreators('pop')} creatorsNew={this.returnCreators('new')} creatorsOld={this.returnCreators('old')} tag='Politics' tagDescription="what's your say?" relatedCategories={['Now', 'Economy', 'Future']} categoryLinks={['/now', '/economy', '/future']} relatedTags={['Equality', 'Climate Change', 'Cities']} tagLinks={['/equality', '/climate-change', '/cities']}  /> : undefined }
      </div>
    );
  }
}

export default withTracker(() => {
Meteor.subscribe('stories');
return {

};
})(Politics);
