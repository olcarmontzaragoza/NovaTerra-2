import React from 'react';
import { withTracker } from 'meteor/react-meteor-data';
import { Link } from 'react-router-dom';

import Navbar from './Components/Navbar';
import CCategories from './Components/Explore/CCategories';
import CCreators from './Components/Explore/CCreators';
import TTags from './Components/Explore/TTags';
import Footer from './Components/Footer';

import { Stories } from '../api/stories';

import createBrowserHistory from 'history/createBrowserHistory';

browserHistory = createBrowserHistory();

export class Explore extends React.Component {
constructor(props) {
super(props);
this.state = {

};
}
componentDidMount() {
    Meteor.subscribe('allUsers', () => {
      Tracker.autorun(() => {
         let findUser = Meteor.users;
        this.setState({ users: Meteor.users });
        });
      });
document.title = `NovaTerra - Explore`;
}
returnCreators(type) {

  let novaterraCreators = [];

  Stories.find({ storyType: 'published'
  }).fetch().map((story) => {
    let user = this.state.users.findOne({ _id: story.userId }); // FIX THIS

    let alreadyAdded = false;
    novaterraCreators.map((novaterraUser) => {
      if (novaterraUser._id === user._id) {
        alreadyAdded = true;
      }
    });

    if (!alreadyAdded) {
      novaterraCreators.push(user);
    }

  });

  console.log(novaterraCreators);

  if (type === 'new') {

    return novaterraCreators;

  } else if (type === 'old') {

    return novaterraCreators;

  } else if (type === 'pop') {

    return novaterraCreators;

  }

  // let creatorsPop = novaterraCreators.sort(function(a, b) { return a.followers - b.followers });
  //
  // let creatorsNew = novaterraCreators.sort(function(a, b) { return a.lastUpdated - b.lastUpdated });
  // let creatorsOld = creatorsNew.reverse();

}
render() {
    return (
      <div>
      <meta name="viewport" content="initial-scale=1"></meta>
        {this.state.users ?
          <div>
          <Navbar route={''} users={this.state.users} />

          <div className="explore__veryTopHrAndName">
          <hr className="mainTitleHr explore__hrAboveTitle" />
          <div className="mainTitleCategories">
          Explore
          </div>

          <Link to="/search" className="searchQuestion">Want to Search Something up on Novaterra Instead?</Link>
          </div>

          <div className="explore__topPageSpacing"></div>

          <CCategories/>
          <CCreators users={this.props.users} creatorsPop={this.returnCreators('pop')} creatorsNew={this.returnCreators('new')} creatorsOld={this.returnCreators('old')} />
          <TTags/>

          <div className="explore__aboveFooterSpacing"></div>

          <Footer route='' />
          </div>
       : undefined }
      </div>
    );
  }
}

export default withTracker(() => {
Meteor.subscribe('stories');
Meteor.subscribe('creators');
return {

};
})(Explore);
