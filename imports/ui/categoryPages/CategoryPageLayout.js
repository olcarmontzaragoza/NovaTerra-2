import React from 'react';
import { withTracker } from 'meteor/react-meteor-data';
import { Link } from 'react-router-dom';
import { Stories } from '../../api/stories';
import { Categories } from '../../api/categories';

import LatAndPop from '../Category&TagPages/LatAndPop';
import CCreators from '../Category&TagPages/CCreators';

import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';

export class CategoryPageLayout extends React.Component {
constructor(props) {
super(props);
this.state = {

};
}
componentDidMount() {
if (!!Meteor.userId()) {
this.renderFollowingButton();
}

if (!!Meteor.userId()) {
Tracker.autorun(() => {
   let userFollowing = Meteor.users.findOne({ _id: Meteor.userId() }).following;
   this.renderFollowingButton();
});
}
}
renderFollowingButton() {
console.log('renderFollowingButton ran');

let user = Meteor.users.findOne({ _id: Meteor.userId() });
let profileFollow = user.following.includes(Categories.findOne({ name: this.props.category })._id);

// console.log('author tooltip id', this.props.userId);

this.setState({ profileFollow });
console.log('followButton', this.state.profileFollow);
}
toggleIsFollowing() {
  // this.renderFollowingButton();

  if (!!Meteor.userId()) {

  let user = Meteor.users.findOne({ _id: Meteor.userId() });
  let otherUser = Categories.findOne({ name: this.props.category });

  console.log('otheruser', otherUser._id);

  let currentFollowing = user.following;
  let currentFollowers = otherUser.followers;

  if (user.following.includes(otherUser._id)) {
  let newFollowing = currentFollowing;
  console.log('newFollowing', newFollowing);
  let index = newFollowing.indexOf(otherUser._id);
  console.log('index', index);
  newFollowing.splice(index, 1);
  console.log('newFollowing', newFollowing);

  let newFollowers = currentFollowers;
  let otherIndex = currentFollowers.indexOf(user._id);
  newFollowers.splice(index, 1);
  console.log('newFollowers', newFollowers);

  Meteor.call('users.update', Meteor.userId(), { following: newFollowing });
  Meteor.call('categories.update', otherUser._id, { followers: newFollowers });
  this.setState({ profileFollow: false });
  // this.renderFollowingButton();
  // this.setState({ follow: false });
  // this.renderFollowingButton();
  console.log('newFollowing', newFollowing);
  console.log('newFollowers', newFollowers);


  } else {
  let newFollowing = currentFollowing;
  if (!(newFollowing.includes(otherUser._id))) {
  newFollowing.push(otherUser._id);
  }
  console.log('newFollowing', newFollowing);

  let newFollowers = currentFollowers;
  if (!(newFollowers.includes(user._id))) {
  newFollowers.push(user._id);
  }
  console.log('newFollowers', newFollowers);

  // console.log('follow', this.state.profileFollow);

  Meteor.call('users.update', Meteor.userId(), { following: newFollowing });
  Meteor.call('categories.update', otherUser._id, { followers: newFollowers });
  this.setState({ profileFollow: true });

  // this.renderFollowingButton();

  // this.renderFollowingButton();
  //
  // this.renderFollowingButton();
  console.log('newFollowing', newFollowing);
  console.log('newFollowers', newFollowers);
  // this.renderFollowingButton();

    // console.log('follow value', this.state.profileFollow);


  }
} else {
  funcReplace('/login');
}
  // this.renderFollowingButton();
}
render() {
    return (
      <div>
      <meta name="viewport" content="initial-scale=1"></meta>
        <Navbar route={''} users={this.props.users} />
          <div className={`${this.props.isEnvironment ? 'topHeaderCategoryPageEnvironment' : 'topHeaderCategoryPage'}`}>{this.props.category}</div>{this.state.profileFollow ? <div className="categoryAndTag__followingButtonLarge floatLeft" onClick={() => { this.toggleIsFollowing() }}>Following</div> : <div className="categoryAndTag__followButtonLarge floatLeft" onClick={() => { this.toggleIsFollowing() }}>Follow</div>}
          <div className="clearBoth"></div>
          <div className="category__description topHeaderSubtitleAbout">{this.props.categoryDescription}</div>

          <hr className="categoryAndTag__topHr" />

          <div className="category__relatedCategories floatLeft">Related Categories:</div>
          <div className="relatedTagsLeft floatLeft">
          <Link to={this.props.categoryLinks[0]} className="relatedTagTopCat">{this.props.relatedCategories[0]}</Link>
          <a className="categoryAndTag__categoriesSpacing">, </a>
          <Link to={this.props.categoryLinks[1]} className="relatedTagTopCat">{this.props.relatedCategories[1]}</Link>
          <a className="categoryAndTag__categoriesSpacing">, </a>
          <Link to={this.props.categoryLinks[2]} className="relatedTagTopCat">{this.props.relatedCategories[2]}</Link>
          </div>

          <LatAndPop users={this.props.users} type='category' lat={true} collection={this.props.latestCollection} />
          <LatAndPop users={this.props.users} type='category' lat={false} collection={this.props.popularCollection} />
          <CCreators users={this.props.users} type='category' creatorsOld={this.props.creatorsOld} creatorsNew={this.props.creatorsNew} creatorsPop={this.props.creatorsPop} />

          <div className="category__relatedCategories floatLeft">Related Tags:</div>
          <div className="relatedTagsLeft floatLeft">
          <Link to={this.props.tagLinks[0]} className="relatedTagTopCat">{this.props.relatedTags[0]}</Link>
          <a className="categoryAndTag__categoriesSpacing">, </a>
          <Link to={this.props.tagLinks[1]} className="relatedTagTopCat">{this.props.relatedTags[1]}</Link>
          <a className="categoryAndTag__categoriesSpacing">, </a>
          <Link to={this.props.tagLinks[2]} className="relatedTagTopCat">{this.props.relatedTags[2]}</Link>
          <div className="categoryAndTag__relatedTagsMarginBottom"></div>
          </div>
          <Footer route='' />
      </div>
    );
  }
}

export default withTracker(() => {
return {

};
})(CategoryPageLayout);
