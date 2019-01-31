import React from 'react';
import { withTracker } from 'meteor/react-meteor-data';
import { Link } from 'react-router-dom';
import moment from 'moment';

import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { fas } from '@fortawesome/free-solid-svg-icons';

import {Image, Video, Transformation, CloudinaryContext} from 'cloudinary-react';

export class CreatorElement extends React.Component {
constructor(props) {
super(props);
this.state = {

};
}
render() {
    return (
      <div>
        <Link to={this.props.user.profileUrl}>
        <div className="search__moreIndividualContainers">

        {this.props.user.profilePhoto ? <div className="search__creatorElementImages"><div className="search__behindCircleCreator"></div><Image className="mainImagesSearchPageCreatorsImage" cloud_name='novaterra' publicId={this.props.user.profilePhoto}><Transformation crop="thumb" /></Image></div> :
        <img src={`images/noImage.png`} className="mainImagesSearchPageCreators"/>}

        <div className="profile__categoryMarginTop"></div>
        <div ref={true}><div className="search_a search__topMoreCat">
          Creator
      </div></div>

        <div className="search__moreArContainerCategory">{this.props.user.username}</div>


         <div className={`${this.props.user.description.length > 40 ? 'search__popContainerReadingTextLong' : 'search__popContainerReadingTextCreator'}`}>
           {this.props.user.description.length > 78 ? this.props.user.description.slice(0, 78) + '...' : this.props.user.description}
         </div>

          <div className="search__mobileStylesBottomHeightCreator"></div>

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
})(CreatorElement);
