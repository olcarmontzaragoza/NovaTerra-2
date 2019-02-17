import React from 'react';
import { withTracker } from 'meteor/react-meteor-data';
import { Tags } from '../../../api/tags';
import { Session } from 'meteor/session';
import { Link } from 'react-router-dom';

import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';

library.add(far);
library.add(fas);

Session.set('sliceNum', 5);

export class TTags extends React.Component {
constructor(props) {
super(props);
this.state = {
sortOption: 'popular',
toggleDropDown: 'dropdown-content',
tags: this.props.tagsPop.slice(0, this.getSliceTags()),
showMoreTags: [],
sliceNum: 8,
moreToShow: true
};
this.setWrapperRef = this.setWrapperRef.bind(this);
this.setWrapperRef2 = this.setWrapperRef2.bind(this);
this.handleClickOutside = this.handleClickOutside.bind(this);
this.handleResize = this.handleResize.bind(this);
}
handleResize() {
  this.setState({ tags: this.props.tagsPop.slice(0, this.getSliceTags()) });
}
getSliceTags() {
let width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
if (width > 990) {
  return 8;
} else {
  return 15;
}
}
changeSortOptions(sort) {
if (sort === 'popular') {
this.setState({ sortOption: 'popular' });
this.setState({ tags: this.props.tagsPop.slice(0, this.getSliceTags())});
} else if (sort === 'newest') {
this.setState({ sortOption: 'newest' });
this.setState({ tags: this.props.tagsNew.slice(0, getSliceTags())});
} else if (sort === 'oldest') {
this.setState({ sortOption: 'oldest' });
this.setState({ tags: this.props.tagsOld.slice(0, getSliceTags())});
}
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
  window.addEventListener('resize', this.handleResize);
}
componentWillUnmount() {
  document.removeEventListener('mousedown', this.handleClickOutside);
  window.removeEventListener('resize', this.handleResize);
}
handleClickOutside(e) {
  if (this.wrapperRef && this.wrapperRef2 && !this.wrapperRef.contains(e.target) && !this.wrapperRef2.contains(e.target)) {
      this.setState({ toggleDropDown: 'dropdown-content' });
  }
}
renderSixMoreTags() {
console.log('supposed to render');
// let newNumShow = Session.get('sliceNum') + 8;
// Session.set('sliceNum', newNumShow);

let cutShowMoreTags;
if (this.state.sortOption === 'popular') {
  cutShowMoreTags = this.props.tagsPop.slice(8, 15);
} else if (this.state.sortOption === 'newest') {
  cutShowMoreTags = this.props.tagsNew.slice(8, 15);
} else if (this.state.sortOption === 'oldest') {
  cutShowMoreTags = this.props.tagsOld.slice(8, 15);
}
// cutShowMoreTags = cutShowMoreTags.slice(0, Session.get('sliceNum'));
console.log('new', this.props.tagsNew);
console.log('new', this.props.tagsPop);
console.log('new', this.props.tagsOld);

this.setState({ showMoreTags: cutShowMoreTags });
this.setState({ moreToShow: false });
}
render() {
    return (
      <div>
      <div className="tagsSpacingAt990">
        <a className="mainTitleCatSubTitle categoryPageHoverLink floatLeft">
        Popular Tags
        </a>
        <div className="positionZIndexPositionsTags">
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
            </div></div></div>
          </div>
          </div>
          </div></div>
          </div>

        <hr className="explore__belowCreatorsHr" />

        <div className="explore__mainTagsBox">

        <div className="explore__mainTagsContainer">

          { this.state.tags.map((tag) => {

            return (
              <Link to={`${tag.link}`} key={tag.name} className="tagContainerBelowCat">
              <img src={tag.profilePhoto} className="popularTagContainer" />
              <div className="imageCoverTags"></div>
              <div className="tagContainerBelowImage">
              <div className="tagNameContainer">
               {tag.name}
              </div>
              </div>
              </Link>
            )
            })
          }
          { this.state.showMoreTags.map((tag) => {

            return (
            <Link to={`${tag.link}`} key={tag.name} className="tagContainerBelowCat">
            <img src={tag.profilePhoto} className="popularTagContainer" />
            <div className="imageCoverTags"></div>
            <div className="tagContainerBelowImage">
            <div className="tagNameContainer">
             {tag.name}
            </div>
            </div>
           </Link>
           )

          }) }

        <div className="explore__bottomCreatorsAboveShowMoreSpacing"></div>

        { this.state.moreToShow && this.state.tags.length === 8 ?
        <div onClick={() => { this.renderSixMoreTags() }} className="explore__largerDivShowMoreTags">
        <div className="explore__showMoreBottomContainer">Show More</div>
        </div>
        : undefined }

        </div></div>

        <div className="explore__bottomCreatorsSpacing"></div>


      </div>
    );
  }
}

export default withTracker(() => {
Meteor.subscribe('tags');
return {
tagsPop: Tags.find({}, {
  sort: {
    followers: -1
  }
}).fetch(),
tagsNew: Tags.find({}, {
sort: {
  dateCreated: -1
}
}).fetch(),
tagsOld: Tags.find({}, {
sort: {
  dateCreated: 1
}
}).fetch(),
};
})(TTags);
