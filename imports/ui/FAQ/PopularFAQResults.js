import React from 'react';
import { withTracker } from 'meteor/react-meteor-data';
import { Link } from 'react-router-dom';
import moment from 'moment';

const oneMonthAgo = moment().subtract(30, 'days');

import { Faq } from '../../api/faq';

Meteor.subscribe('allUsers');
Meteor.subscribe('stories');

let popularGeneral = [];
let popularStories = [];
let popularContact = [];
let popularDonate = [];
let popularAdvertising = [];
let popularCopyright = [];
let popularWebsiteBugs = [];
let popularOther = [];

let findPopularQuestions = Faq.find({}, {
    sort: {
      views: -1
    }
}).fetch().map((question) => {

  if (question.topic === 'General') {
    popularGeneral.push(question);
  } else if (question.topic === 'Stories') {
    popularStories.push(question);
  } else if (question.topic === 'Contact') {
    popularContact.push(question);
  } else if (question.topic === 'Donate') {
    popularDonate.push(question);
  } else if (question.topic === 'Advertising') {
    popularAdvertising.push(question);
  } else if (question.topic === 'Website Bugs') {
    popularWebsiteBugs.push(question);
  } else if (question.topic === 'Copyright') {
    popularCopyright.push(question);
  } else if (question.topic === 'Other') {
    popularOther.push(question);
  }

});

export class PopularResults extends React.Component {
constructor(props) {
super(props);
this.state = {

};
}
render() {
    return (
      <div>

        <div className="faq__popularResultsDiv">

        <div className="floatLeft faq__popularResultsIndividual">
        <div className="search__popularResultsHeader">General</div>
        <hr className="search__popularResultsHr"/>
        <div className="faq__popularResultsWidth">
        {popularGeneral.length > 0 ? <Link to={popularGeneral[0].link} className="search_popularResultsResult">{popularGeneral[0].title.length > 46 ? popularGeneral[0].title.slice(0, 46) + '...' : popularGeneral[0].title}</Link> : undefined }
        <div className="clearBoth search__popularResultsSpacing"></div>
        {popularGeneral.length > 1 ? <Link to={popularGeneral[1].link} className="search_popularResultsResult">{popularGeneral[1].title.length > 46 ? popularGeneral[1].title.slice(0, 46) + '...' : popularGeneral[1].title}</Link> : undefined }
        <div className="clearBoth search__popularResultsSpacing"></div>
        {popularGeneral.length > 2 ? <Link to={popularGeneral[2].link} className="search_popularResultsResult">{popularGeneral[2].title.length > 46 ? popularGeneral[2].title.slice(0, 46) + '...' : popularGeneral[2].title}</Link> : undefined }
        </div>
        </div>


        <div className="floatLeft faq__popularResultsIndividual">
        <div className="search__popularResultsHeader">Stories</div>
        <hr className="search__popularResultsHr"/>
        <div className="faq__popularResultsWidth">
        {popularStories.length > 0 ? <Link to={popularStories[0].link} className="search_popularResultsResult">{popularStories[0].title.length > 46 ? popularStories[0].title.slice(0, 46) + '...' : popularStories[0].title}</Link> : undefined }
        <div className="clearBoth search__popularResultsSpacing"></div>
        {popularStories.length > 1 ? <Link to={popularStories[0].link} className="search_popularResultsResult">{popularStories[1].title.length > 46 ? popularStories[1].title.slice(0, 46) + '...' : popularStories[1].title}</Link> : undefined }
        <div className="clearBoth search__popularResultsSpacing"></div>
        {popularStories.length > 2 ? <Link to={popularStories[0].link} className="search_popularResultsResult">{popularStories[2].title.length > 46 ? popularStories[2].title.slice(0, 46) + '...' : popularStories[2].title}</Link> : undefined }
        </div>
        </div>

        <div className="aboveContactClearBoth"></div>

        <div className="faq__popularResultsIndividualContact">
        <div className="search__popularResultsHeaderContact">Contact</div>
        <hr className="search__popularResultsHr"/>
        <div className="faq__popularResultsWidth">
        {popularContact.length > 0 ? <Link to={popularContact[0].link} className="search_popularResultsResult">{popularContact[0].title.length > 46 ? popularContact[0].title.slice(0, 46) + '...' : popularContact[0].title}</Link> : undefined }
        <div className="clearBoth search__popularResultsSpacing"></div>
        {popularContact.length > 1 ? <Link to={popularContact[1].link} className="search_popularResultsResult">{popularContact[1].title.length > 46 ? popularContact[1].title.slice(0, 46) + '...' : popularContact[1].title}</Link> : undefined }
        <div className="clearBoth search__popularResultsSpacing"></div>
        {popularContact.length > 2 ? <Link to={popularContact[2].link} className="search_popularResultsResult">{popularContact[2].title.length > 46 ? popularContact[2].title.slice(0, 46) + '...' : popularContact[2].title}</Link> : undefined }
        </div>
        </div>

        <div className="clearBoth search__popularResultsMiddleSpacing"></div>

        <div className="floatLeft faq__popularResultsIndividual">
        <div className="search__popularResultsHeader">Donate</div>
        <hr className="search__popularResultsHr"/>
        <div className="faq__popularResultsWidth">
        {popularDonate.length > 0 ? <Link to={popularDonate[0].link} className="search_popularResultsResult">{popularDonate[0].title.length > 46 ? popularDonate[0].title.slice(0, 46) + '...' : popularDonate[0].title}</Link> : undefined }
        <div className="clearBoth search__popularResultsSpacing"></div>
        {popularDonate.length > 1 ? <Link to={popularDonate[1].link} className="search_popularResultsResult">{popularDonate[1].title.length > 46 ? popularDonate[0].title.slice(0, 46) + '...' : popularDonate[1].title}</Link> : undefined }
        <div className="clearBoth search__popularResultsSpacing"></div>
        {popularDonate.length > 2 ? <Link to={popularDonate[2].link} className="search_popularResultsResult">{popularDonate[2].title.length > 46 ? popularDonate[0].title.slice(0, 46) + '...' : popularDonate[2].title}</Link> : undefined }
        </div>
        </div>


        <div className="floatLeft faq__popularResultsIndividual">
        <div className="search__popularResultsHeader">Advertising</div>
        <hr className="search__popularResultsHr"/>
        <div className="faq__popularResultsWidth">
        {popularAdvertising.length > 0 ? <Link to={popularAdvertising[0].link} className="search_popularResultsResult">{popularAdvertising[0].title.length > 46 ? popularAdvertising[0].title.slice(0, 46) + '...' : popularAdvertising[0].title}</Link> : undefined }
        <div className="clearBoth search__popularResultsSpacing"></div>
        {popularAdvertising.length > 1 ? <Link to={popularAdvertising[1].link} className="search_popularResultsResult">{popularAdvertising[1].title.length > 46 ? popularAdvertising[1].title.slice(0, 46) + '...' : popularAdvertising[1].title}</Link> : undefined }
        <div className="clearBoth search__popularResultsSpacing"></div>
        {popularAdvertising.length > 2 ? <Link to={popularAdvertising[2].link} className="search_popularResultsResult">{popularAdvertising[2].title.length > 46 ? popularAdvertising[2].title.slice(0, 46) + '...' : popularAdvertising[2].title}</Link> : undefined }
        </div>
        </div>

        <div className="floatLeft faq__popularResultsIndividual">
        <div className="search__popularResultsHeader">Copyright</div>
        <hr className="search__popularResultsHr"/>
        <div className="faq__popularResultsWidth">
        {popularCopyright.length > 0 ? <Link to={popularCopyright[0].link} className="search_popularResultsResult">{popularCopyright[0].title.length > 46 ? popularCopyright[0].title.slice(0, 46) + '...' : popularCopyright[0].title}</Link> : undefined }
        <div className="clearBoth search__popularResultsSpacing"></div>
        {popularCopyright.length > 1 ? <Link to={popularCopyright[1].link} className="search_popularResultsResult">{popularCopyright[1].title.length > 46 ? popularCopyright[1].title.slice(0, 46) + '...' : popularCopyright[1].title}</Link> : undefined }
        <div className="clearBoth search__popularResultsSpacing"></div>
        {popularCopyright.length > 2 ? <Link to={popularCopyright[2].link} className="search_popularResultsResult">{popularCopyright[2].title.length > 46 ? popularCopyright[2].title.slice(0, 46) + '...' : popularCopyright[2].title}</Link> : undefined }
        </div>
        </div>

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
