import React from 'react';
import { withTracker } from 'meteor/react-meteor-data';
import { Link } from 'react-router-dom';
import moment from 'moment';

const oneMonthAgo = moment().subtract(30, 'days');

import { Stories } from '../../../api/stories';
import { Tags } from '../../../api/tags';
import { Categories } from '../../../api/categories';
import { Faq } from '../../../api/faq';

Meteor.subscribe('allUsers');
Meteor.subscribe('stories');

let popularStories = [];

let findPopularStories = Stories.find({ storyType: 'published' }, {
    sort: {
      likes: -1
    }
}).fetch().map((story) => {
  if (moment(story.lastUpdated).isAfter(oneMonthAgo)) {
    popularStories.push(story);
  }
});

let popularCategories = Categories.find({}, {
    sort: {
      followers: -1
    }
}).fetch();

let popularTags = Tags.find({}, {
    sort: {
      followers: -1
    }
}).fetch();


let popularFaq = Faq.find({}, {
    sort: {
      views: -1
    }
}).fetch();

export class PopularResults extends React.Component {
constructor(props) {
super(props);
this.state = {

};
}
returnCreators() {
  let creatorsArray = [];
  let popularCreators = [];

  this.props.users.find({}, {
    sort: {
      followers: -1
    }
  }).fetch().map((user) => {

    Stories.find({ storyType: 'published' }).fetch().map((story) => {
      if (story.userId === user._id) {
        if (!creatorsArray.includes(user._id)) {
          creatorsArray.push(user._id);
          popularCreators.push(user);
        }
      }
    });
  });

  return popularCreators;
}
render() {
    return (
      <div>

        <div className="search__popularResultsDiv">

        <div className="floatLeft search__popularResultsIndividual">
        <div className="search__popularResultsHeader">Stories</div>
        <hr className="search__popularResultsHr"/>
        <div className="search__popularResultsWidth">
        {popularStories.length > 0 ? <Link to={popularStories[0].link} className="search_popularResultsResult">{popularStories[0].title.length > 55 ? popularStories[0].title.slice(0, 55) + '...' : popularStories[0].title}</Link> : undefined }
        <div className="clearBoth search__popularResultsSpacing"></div>
        {popularStories.length > 1 ? <Link to={popularStories[1].link} className="search_popularResultsResult">{popularStories[1].title.length > 55 ? popularStories[1].title.slice(0, 55) + '...' : popularStories[1].title}</Link> : undefined }
        <div className="clearBoth search__popularResultsSpacing"></div>
        {popularStories.length > 2 ? <Link to={popularStories[2].link} className="search_popularResultsResult">{popularStories[2].title.length > 55 ? popularStories[2].title.slice(0, 55) + '...' : popularStories[2].title}</Link> : undefined }
        </div>
        </div>


        <div className="floatLeft search__popularResultsIndividual">
        <div className="search__popularResultsHeader">Creators</div>
        <hr className="search__popularResultsHr"/>
        {this.returnCreators().length > 0 ? <Link to={this.returnCreators()[0].profileUrl} className="search_popularResultsResult">{this.returnCreators()[0].username}</Link> : undefined }
        <div className="clearBoth search__popularResultsSpacing"></div>
        {this.returnCreators().length > 1 ? <Link to={this.returnCreators()[1].profileUrl} className="search_popularResultsResult">{this.returnCreators()[1].username}</Link> : undefined }
        <div className="clearBoth search__popularResultsSpacing"></div>
        {this.returnCreators().length > 2 ? <Link to={this.returnCreators()[2].profileUrl} className="search_popularResultsResult">{this.returnCreators()[2].username}</Link> : undefined }
        </div>


        <div className="floatLeft search__popularResultsIndividual">
        <div className="search__popularResultsHeader">Categories</div>
        <hr className="search__popularResultsHr"/>
        {popularCategories.length > 0 ? <Link to={popularCategories[0].link} className="search_popularResultsResult">{popularCategories[0].name}</Link> : undefined }
        <div className="clearBoth search__popularResultsSpacing"></div>
        {popularCategories.length > 1 ? <Link to={popularCategories[1].link} className="search_popularResultsResult">{popularCategories[1].name}</Link> : undefined }
        <div className="clearBoth search__popularResultsSpacing"></div>
        {popularCategories.length > 2 ? <Link to={popularCategories[2].link} className="search_popularResultsResult">{popularCategories[2].name}</Link> : undefined }
        </div>

        <div className="clearBoth search__popularResultsMiddleSpacing"></div>

        <div className="floatLeft search__popularResultsIndividual">
        <div className="search__popularResultsHeader">Tags</div>
        <hr className="search__popularResultsHr"/>
        {popularTags.length > 0 ? <Link to={popularTags[0].link} className="search_popularResultsResult">{popularTags[0].name}</Link> : undefined }
        <div className="clearBoth search__popularResultsSpacing"></div>
        {popularTags.length > 1 ? <Link to={popularTags[1].link} className="search_popularResultsResult">{popularTags[1].name}</Link> : undefined }
        <div className="clearBoth search__popularResultsSpacing"></div>
        {popularTags.length > 2 ? <Link to={popularTags[2].link} className="search_popularResultsResult">{popularTags[2].name}</Link> : undefined }
        </div>


        {/*<div className="floatLeft search__popularResultsIndividual">
        <div className="search__popularResultsHeader">FAQ</div>
        <hr className="search__popularResultsHr"/>
        <div className="search__popularResultsWidth">
        {popularFaq.length > 0 ? <Link to={popularFaq[0].link} className="search_popularResultsResult">{popularFaq[0].title.length > 55 ? popularFaq[0].title.slice(0, 55) + '...' : popularFaq[0].title}</Link> : undefined }
        <div className="clearBoth search__popularResultsSpacing"></div>
        {popularFaq.length > 1 ? <Link to={popularFaq[1].link} className="search_popularResultsResult">{popularFaq[1].title.length > 55 ? popularFaq[1].title.slice(0, 55) + '...' : popularFaq[1].title}</Link> : undefined }
        <div className="clearBoth search__popularResultsSpacing"></div>
        {popularFaq.length > 2 ? <Link to={popularFaq[2].link} className="search_popularResultsResult">{popularFaq[2].title.length > 55 ? popularFaq[2].title.slice(0, 55) + '...' : popularFaq[2].title}</Link> : undefined }
        </div>
        </div>*/}

        <div className="clearBoth search__popularResultsBottomSpacing"></div>

      </div>
      </div>
            );
          }
        }

export default withTracker(() => {
Meteor.subscribe('stories');
return {

};
})(PopularResults);
