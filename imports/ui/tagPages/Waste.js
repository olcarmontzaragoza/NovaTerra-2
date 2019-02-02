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
  if (story.tags.includes('Waste')) {
    latest.push(story);
  }
});

const prePopular = Stories.find({ storyType: 'published' }, {
  sort: {
    likes: -1
  }
}).fetch().map((story) => {
  if (story.tags.includes('Waste')) {
    popular.push(story);
  }
});

function myArrayMin(arr) {
    return Math.min.apply(null, arr);
}

function myArrayMax(arr) {
    return Math.max.apply(null, arr);
}

// let creatorsPop = wasteCreators.sort(function(a, b) { return a.followers - b.followers });
//
// let creatorsNew = wasteCreators.sort(function(a, b) { return a.lastUpdated - b.lastUpdated });
// let creatorsOld = creatorsNew.reverse();

export class Waste extends React.Component {
constructor(props) {
super(props);
this.state = {

};
}
returnCreators(type) {
  let wasteCreators = [];
  popular.map((story) => {
    let user = Meteor.users.findOne({ _id: story.userId }); // FIX THIS

    let alreadyAdded = false;
    wasteCreators.map((wasteUser) => {
      if (wasteUser._id === user._id) {
        alreadyAdded = true;
      }
    });

    if (!alreadyAdded) {
      wasteCreators.push(user);
    }

    });

    if (type === 'pop') {
      return wasteCreators;
    } else if (type === 'new') {
      return wasteCreators;
    } else if (type === 'old') {
      return wasteCreators;
    }
}
componentDidMount() {

  Meteor.subscribe('allUsers', () => {
  Tracker.autorun(() => {
      let findUser = Meteor.users;
      this.setState({ users: Meteor.users });
  });
  });
document.title = `NovaTerra - Waste`;
}
render() {
    return (
      <div>
        {this.state.users ? <TagPageLayout users={this.state.users} latestCollection={latest} popularCollection={popular} creatorsPop={this.returnCreators('pop')} creatorsNew={this.returnCreators('new')} creatorsOld={this.returnCreators('old')} tag="Waste" tagDescription="how do we redefine waste?" relatedCategories={['Environment', 'Economy', 'Future']} categoryLinks={['/environment', '/economy', '/future']} relatedTags={['Food', 'Cities', 'Work']} tagLinks={['/food', '/cities', '/work']}  /> : undefined }
      </div>
    );
  }
}

export default withTracker(() => {
Meteor.subscribe('stories');
return {

};
})(Waste);
