import React from 'react';
import { withTracker } from 'meteor/react-meteor-data';
import { Link } from 'react-router-dom';
import moment from 'moment';

import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { fas } from '@fortawesome/free-solid-svg-icons';

export class TagElement extends React.Component {
constructor(props) {
super(props);
this.state = {

};
}
render() {
    return (
      <div>
        <Link to={this.props.tag.link}>
        <div className="search__moreIndividualContainers">

        <img src={this.props.tag.profilePhoto} className="mainImagesSearchPage" />
        <div className="profile__categoryMarginTop"></div>
        <div ref={true}><div className="search_a search__topMoreCat">
          Tag
      </div></div>

        <div className="search__moreArContainerCategory">{this.props.tag.name}</div>

         <div className="search__popContainerReadingTextCreator">
           {this.props.tag.description}
         </div>

          <div className="search__mobileStylesBottomHeight"></div>

       </div>
     </Link>
      </div>
            );
          }
        }

export default withTracker(() => {
Meteor.subscribe('stories');
return {

};
})(TagElement);
