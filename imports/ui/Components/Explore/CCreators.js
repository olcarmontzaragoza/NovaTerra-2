import React from 'react';
import { withTracker } from 'meteor/react-meteor-data';
import { Link } from 'react-router-dom';
import { Session } from 'meteor/session';
import { Stories } from '../../../api/stories';
import moment from 'moment';

import {Image, Video, Transformation, CloudinaryContext} from 'cloudinary-react';

import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';

library.add(far);
library.add(fas);

Session.set('sliceNumCreatorsExplore', 6);

export class CCreators extends React.Component {
constructor(props) {
super(props);
this.state = {
sortOption: 'popular',
toggleDropDown: 'dropdown-contentBase',
creators: this.props.creatorsPop,
showMoreCreatorsExplore: [],
sliceNumCreatorsExplore: 6,
creatorsLefToShowExplore: this.props.creatorsPop.length > 6,
sliceNum: 5
};
this.setWrapperRef = this.setWrapperRef.bind(this);
this.setWrapperRef2 = this.setWrapperRef2.bind(this);
this.handleClickOutside = this.handleClickOutside.bind(this);
}
changeSortOptions(sort) {
if (sort === 'popular') {
this.setState({ sortOption: 'popular' });
this.setState({ creators: this.props.creatorsPop });
this.setState({ creatorsLefToShowExplore: this.props.creatorsPop.length > 6 });
} else if (sort === 'newest') {
this.setState({ sortOption: 'newest' });
this.setState({ creators: this.props.creatorsNew });
this.setState({ creatorsLefToShowExplore: this.props.creatorsNew.length > 6 });
} else if (sort === 'oldest') {
this.setState({ sortOption: 'oldest' });
this.setState({ creators: this.props.creatorsOld });
this.setState({ creatorsLefToShowExplore: this.props.creatorsOld.length > 6 });
}
}
toggleDropDown() {
if (this.state.toggleDropDown === 'dropdown-contentBase') {
this.setState({ 'toggleDropDown': 'dropdown-content1Base' });
} else {
this.setState({ toggleDropDown: 'dropdown-contentBase' });
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
      this.setState({ toggleDropDown: 'dropdown-contentBase' });
    }
}
renderSixMoreCreators() {
  let showMoreCreatorsExplore;
  let newNumShow = Session.get('sliceNumCreatorsCat') + 7;
  Session.set('sliceNumCreatorsCat', newNumShow);

  let s1 = Session.get('sliceNumCreatorsCat') -1;

  if (this.state.creators[s1]) {
    showMoreCreatorsExplore = this.state.creators.slice(7, Session.get('sliceNumCreatorsCat'));
  } else {
    showMoreCreatorsExplore = this.state.creators.slice(7, this.state.creators.length);
    Session.set('creatorsLeftExplore', true);
  }

  this.setState({ showMoreCreatorsExplore });
}
  render() {
    return (
      <div>
        <div className="explore__aboveHrDiv">
        <a className="mainTitleCatSubTitle categoryPageHoverLink floatLeft">
        Popular Creators
        </a>
        <div className="sort__marginLeftExplore">
        <div className="sort__buttonMarginLeftExplore">
          <div className="dropdown">
            <div ref={this.setWrapperRef} onClick={this.toggleDropDown.bind(this)} className="sort__sortByButton dropbtn"><FontAwesomeIcon icon={['fas', 'sort-amount-up']} className="sort__mainIcon"/><div className="sort__mainText">Sort by</div></div>
            <div ref={this.setWrapperRef2} className={this.state.toggleDropDown}>
            <div className="dropdown-content__innerLargerMargins">
            <div className="dropdown-content__innerMargins">
              <div onClick={() => { this.changeSortOptions('popular') }} className="sort__popularContainer"><FontAwesomeIcon icon={['fas', 'fire']} className={`${this.state.sortOption === 'popular' ? 'sort__greenIconPop' : 'sort__popularIcon'}`}  /><div className={`${this.state.sortOption === 'popular' ? 'sort__greenText' : 'sort__popularText'}`}>Popular</div></div>
              <div className="clearBoth"></div>
              <div onClick={() => { this.changeSortOptions('newest') }} className="sort__newestContainer"><FontAwesomeIcon icon={['fas', 'hourglass-start']} className={`${this.state.sortOption === 'newest' ? 'sort__greenIcon' : 'sort__newestIcon'}`} /><div className={`${this.state.sortOption === 'newest' ? 'sort__greenText' : 'sort__newestText'}`}>Newest</div></div>
              <div className="clearBoth"></div>
              <div onClick={() => { this.changeSortOptions('oldest') }} className="sort__oldestContainer"><FontAwesomeIcon icon={['fas', 'hourglass-end']} className={`${this.state.sortOption === 'oldest' ? 'sort__greenIcon' : 'sort__oldestIcon'}`} /><div className={`${this.state.sortOption === 'oldest' ? 'sort__greenText' : 'sort__oldestText'}`}>Oldest</div></div>
            </div></div>
          </div></div>
          </div></div>
          </div>
        <hr className="explore__belowCreatorsHr" />

        <div className="explore__mainCreatorsBox">

        <div className="explore__mainCreatorsContainer">

        { this.state.creators.map((creator) => {

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
          {this.state.showMoreCreatorsExplore.map((creator) => {
            <Link to={creator.profileUrl} key={creator._id} className="creatorContainer">
            {creator.profilePhoto ? <div><div className="catAndTag__behindCircleCreators"></div><Image className="creatorImageBelowCategoriesImage" cloud_name='novaterra' publicId={creator.profilePhoto}><Transformation crop="thumb" /></Image></div> :
            <img src={`images/noImage.png`} className="creatorImageBelowCategories"/>}
            <div className="creatorNameCatContainer">{creator.username.length > 18 ? creator.username.slice(0, 18) + '...' : creator.username}</div>
            <div className="joinedDateAuthorCat">{moment(creator.joinDate).format('MMM YYYY')}</div>
            <div className="authorDescriptionBelowContainer">{creator.description.length > 67 ? creator.description.slice(0, 67) + '...' : creator.description}</div>
            </Link>
          })}

        <div className="explore__bottomCreatorsAboveShowMoreSpacing"></div>

        { this.state.creatorsLefToShowExplore && !Session.get('creatorsLeftExplore') ?
        <div onClick={() => { this.renderSixMoreCreators() }} className="explore__largerDivShowMore">
        <div className="explore__showMoreBottomContainer">Show More</div>
        </div>
        : undefined }
        <div className="explore__bottomCreatorsSpacing"></div>

        </div></div>
      </div>
    );
  }
}

export default withTracker(() => {
return {

}
})(CCreators);
