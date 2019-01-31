import React from 'react';
import { withTracker } from 'meteor/react-meteor-data';
import { Link } from 'react-router-dom';
import moment from 'moment';

import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { fas } from '@fortawesome/free-solid-svg-icons';

export class FAQElement extends React.Component {
constructor(props) {
super(props);
this.state = {

};
}
render() {
    return (
      <div>
        {/* <Link to={this.props.faq.link}> */}
        <div className="search__moreIndividualContainers" >

        <img src={this.props.faq.mainImage} className="mainImagesFaqPage" />
        <div className="profile__categoryMarginTop"></div>
        <div><div className="search_a faq__topMoreCat">
          {this.props.faq.topic}
      </div></div>

        <div className="search__moreArContainerTitleStories">{this.props.faq.title.length > 55 ? this.props.faq.title.slice(0, 55) + '...' : this.props.faq.title}</div>

        {/* <div className="search__categoryMarginBottomFAQ"></div> */}

        <div className="faq__popContainerReadingText">
          {this.props.faq.shortAnswer.slice(0, 33) + '...'}
        </div>

        <div className="faq__mobileStylesBottomHeightStory"></div>

       </div>
      </div>
            );
          }
        }

export default withTracker(() => {
Meteor.subscribe('stories');
return {

};
})(FAQElement);
