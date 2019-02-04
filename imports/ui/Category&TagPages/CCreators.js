import React from 'react';
import { withTracker } from 'meteor/react-meteor-data';
import { Link } from 'react-router-dom';
import { Session } from 'meteor/session';
import { Stories } from '../../api/stories';
import moment from 'moment';

import {Image, Video, Transformation, CloudinaryContext} from 'cloudinary-react';

import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';

library.add(far);
library.add(fas);

Session.set('sliceNumCreatorsCat', 6);

export class CCreators extends React.Component {
constructor(props) {
super(props);
this.state = {
sortOption: 'popular',
toggleDropDown: 'dropdown-content',
creators: this.props.creatorsPop,
showMoreCreators: [],
sliceNumCreatorsCat: 6,
creatorsLefToShow: this.props.creatorsPop.length > 6,
};
this.setWrapperRef = this.setWrapperRef.bind(this);
this.setWrapperRef2 = this.setWrapperRef2.bind(this);
this.handleClickOutside = this.handleClickOutside.bind(this);
}
changeSortOptions(sort) {
if (sort === 'popular') {
this.setState({ sortOption: 'popular' });
this.setState({ creators: this.props.creatorsPop });
this.setState({ creatorsLefToShow: this.props.creatorsPop.length > 6 });
} else if (sort === 'newest') {
this.setState({ sortOption: 'newest' });
this.setState({ creators: this.props.creatorsNew });
this.setState({ creatorsLefToShow: this.props.creatorsNew.length > 6 });
} else {
this.setState({ sortOption: 'oldest' });
this.setState({ creators: this.props.creatorsOld });
this.setState({ creatorsLefToShow: this.props.creatorsOld.length > 6 });
}
// this.toggleDropDown();
}
toggleDropDown() {
if (this.state.toggleDropDown === 'dropdown-content') {
this.setState({ 'toggleDropDown': 'dropdown-content1' });
} else {
this.setState({ toggleDropDown: 'dropdown-content' });
}
}
setWrapperRef(node) {
    this.wrapperRef = node;
}
setWrapperRef2(node) {
    this.wrapperRef2 = node;
}
componentDidMount() {
  document.addEventListener('mousedown', this.handleClickOutside);
}
componentWillUnmount() {
  document.removeEventListener('mousedown', this.handleClickOutside);
}
handleClickOutside(e) {
    if (this.wrapperRef && this.wrapperRef2 && !this.wrapperRef.contains(e.target) && !this.wrapperRef2.contains(e.target)) {
      this.setState({ toggleDropDown: 'dropdown-content' });
    }
}
renderSixMoreCreators() {
let showMoreCreators;
let newNumShow = Session.get('sliceNumCreatorsCat') + 7;
Session.set('sliceNumCreatorsCat', newNumShow);

let s1 = Session.get('sliceNumCreatorsCat') -1;

if (this.state.creators[s1]) {
  showMoreCreators = this.state.creators.slice(7, Session.get('sliceNumCreatorsCat'));
} else {
  showMoreCreators = this.state.creators.slice(7, this.state.creators.length);
  Session.set('creatorsLeft', true);
}

this.setState({ showMoreCreators });
}
  render() {
    return (
      <div>
        <div className="categoryAndTag__aboveHrDiv">
        <a className="mainTitleCatSubTitle floatLeft">
        Popular Creators
        </a>

        <div className="floatRight sort__marginLeft">
          <div className="dropdown">
            <div ref={this.setWrapperRef} onClick={this.toggleDropDown.bind(this)} className="sort__sortByButton dropbtn"><FontAwesomeIcon icon={['fas', 'sort-amount-up']} className="sort__mainIcon"/><div className="sort__mainText">Sort by</div></div>
            <div ref={this.setWrapperRef2} className={this.state.toggleDropDown}>
            <div className="dropdown-content__innerMargins">
              <div onClick={() => { this.changeSortOptions('popular') }} className="sort__popularContainer"><FontAwesomeIcon icon={['fas', 'fire']} className={`${this.state.sortOption === 'popular' ? 'sort__greenIconPop' : 'sort__popularIcon'}`}  /><div className={`${this.state.sortOption === 'popular' ? 'sort__greenText' : 'sort__popularText'}`}>Popular</div></div>
              <div className="clearBoth"></div>
              <div onClick={() => { this.changeSortOptions('newest') }} className="sort__newestContainer"><FontAwesomeIcon icon={['fas', 'hourglass-start']} className={`${this.state.sortOption === 'newest' ? 'sort__greenIcon' : 'sort__newestIcon'}`} /><div className={`${this.state.sortOption === 'newest' ? 'sort__greenText' : 'sort__newestText'}`}>Newest</div></div>
              <div className="clearBoth"></div>
              <div onClick={() => { this.changeSortOptions('oldest') }} className="sort__oldestContainer"><FontAwesomeIcon icon={['fas', 'hourglass-end']} className={`${this.state.sortOption === 'oldest' ? 'sort__greenIcon' : 'sort__oldestIcon'}`} /><div className={`${this.state.sortOption === 'oldest' ? 'sort__greenText' : 'sort__oldestText'}`}>Oldest</div></div>
            </div></div>
          </div>
        </div>
        </div>
        <hr className="explore__belowCreatorsHr" />
        <div className="explore__creatorsContainer">

          { this.state.creators.slice(0, 5).map((creator) => {

            return (
              <Link to={creator.profileUrl} key={creator._id} className="creatorContainer">
              {creator.profilePhoto ? <div><div className="catAndTag__behindCircleCreators"></div><Image className="creatorImageBelowCategoriesImage" cloud_name='novaterra' publicId={creator.profilePhoto}><Transformation crop="thumb" /></Image></div> :
              <img src={`images/noImage.png`} className="creatorImageBelowCategories"/>}
              <div className="creatorNameCatContainer">{creator.username.length > 18 ? creator.username.slice(0, 18) + '...' : creator.username}</div>
              <div className="joinedDateAuthorCat">{`Joined ${moment(creator.joinDate).format('MMMM YYYY')}`}</div>
              <div className="authorDescriptionBelowContainer">{creator.description.length > 67 ? creator.description.slice(0, 67) + '...' : creator.description}</div>
              </Link>
            )
            })
          }

          {this.state.creators.length === 0 ? <p className="categoryAndTag__noStoriesMessageCreators">Sorry, we couldn't find any creators in this {this.props.type}. <Link to='/profile' className="categoryAndTag__noStoriesMessageLink">Want to write the very first story for this {this.props.type}?</Link></p> : undefined }

            {this.state.showMoreCreators.map((creator) => {
              <Link to={creator.profileUrl} key={creator._id} className="creatorContainer">
              {creator.profilePhoto ? <div><div className="catAndTag__behindCircleCreators"></div><Image className="creatorImageBelowCategoriesImage" cloud_name='novaterra' publicId={creator.profilePhoto}><Transformation crop="thumb" /></Image></div> :
              <img src={`images/noImage.png`} className="creatorImageBelowCategories"/>}
              <div className="creatorNameCatContainer">{creator.username.length > 18 ? creator.username.slice(0, 18) + '...' : creator.username}</div>
              <div className="joinedDateAuthorCat">{`Joined ${moment(creator.joinDate).format('MMMM YYYY')}`}</div>
              <div className="authorDescriptionBelowContainer">{creator.description.length > 67 ? creator.description.slice(0, 67) + '...' : creator.description}</div>
              </Link>
            })}

        <div className="explore__bottomCreatorsAboveShowMoreSpacing"></div>

        { this.state.creatorsLefToShow && !Session.get('creatorsLeft') ?
        <div onClick={() => { this.renderSixMoreCreators() }} className="explore__largerDivShowMore">
        <div className="explore__showMoreBottomContainer">Show More</div>
        </div>
        : undefined }

        </div>
      </div>
    );
  }
}

export default withTracker(() => {
return {

}
})(CCreators);
