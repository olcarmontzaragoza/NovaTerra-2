import React from 'react';
import { withTracker } from 'meteor/react-meteor-data';
import { Link } from 'react-router-dom';
import { Tags } from '../../../api/tags';
import { Categories } from '../../../api/categories';

import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';

library.add(far);
library.add(fas);

import { returnCurrentPage } from '../../../routes/routes.js';

import { browserHistory } from 'react-router';

import createBrowserHistory from 'history/createBrowserHistory';

browserHistory = createBrowserHistory();

export class Header extends React.Component {
constructor(props) {
super(props);
this.state = {
currentPage: Session.get('currentPage'),
tags: this.props.tags,
categories: this.props.categories,
};
this.resizeScrollLeft = this.resizeScrollLeft.bind(this);
}
componentDidMount() {
  window.addEventListener('resize', this.resizeScrollLeft);
}
componentWillUnmount() {
  window.removeEventListener('resize', this.resizeScrollLeft);
}
resizeScrollLeft() {
  console.log('should resize ====');
  document.getElementById('catScrollLeft').scrollLeft = 0;
}
returnCategories() {
return Categories.find({}, {
      sort: {
        followers: -1
      }
  }).fetch();
}
returnTags() {
return Tags.find({}, {
      sort: {
        followers: -1
      }
  }).fetch();
}
returnName(name) {
console.log('name', name);

if (name === 'Art & Film') {
  name = 'art-and-film';
}

return name.toLowerCase();
}
changeHeaderLeft(or) {
console.log('clicked arrow');
if (or === 'left') {
let currentScrollLeft = document.getElementById('catScrollLeft').scrollLeft;
document.getElementById('catScrollLeft').scrollLeft = currentScrollLeft - 130;
} else if (or === 'right') {
let currentScrollLeft = document.getElementById('catScrollLeft').scrollLeft;
if (currentScrollLeft < 260) {
document.getElementById('catScrollLeft').scrollLeft = currentScrollLeft + 130;
}
}
}
// setStateAndReturnGreen(num) {
//   this.setState({ currentPageNum: num });
//
//   return 'nav__green';
// }
returnTopBar() {
// let isTagPage = false;
// let tagArray = ['cities', 'climate-change', 'transport', 'energy', 'equality', 'food', 'biodiversity', 'waste', 'innovation', 'personal-finance', 'politics', 'research', 'science', 'self', 'work'];
//
// tagArray.map((tag) => {
//   if (tag === this.state.currentPage) {
//     isTagPage = true;
//   }
// });
//
// if (isTagPage) {
//
//   // <Link to={this.returnTags()[8].link} className={`nav__category floatLeft hoverGreen ${this.state.currentPage === this.returnTags()[8].link.slice(1, this.returnTags()[8].link.length) ? 'nav__green' : ''}`}>{this.returnTags()[8].name}</Link>
//   // <Link to={this.returnTags()[9].link} className={`nav__category floatLeft hoverGreen ${this.state.currentPage === this.returnTags()[9].link.slice(1, this.returnTags()[9].link.length) ? 'nav__green' : ''}`}>{this.returnTags()[9].name}</Link>
//   // <Link to={this.returnTags()[10].link} className={`nav__category floatLeft hoverGreen ${this.state.currentPage === this.returnTags()[10].link.slice(1, this.returnTags()[10].link.length) ? 'nav__green' : ''}`}>{this.returnTags()[10].name}</Link>
//   // <Link to={this.returnTags()[11].link} className={`nav__category floatLeft hoverGreen ${this.state.currentPage === this.returnTags()[11].link.slice(1, this.returnTags()[11].link.length) ? 'nav__green' : ''}`}>{this.returnTags()[11].name}</Link>
//
// return (
// <div>
// <FontAwesomeIcon icon={['fas', 'angle-left']} className="header__leftIcon" onClick={() => { this.changeHeaderLeft('left') }} />
// <div className="header__linksBox" id="catScrollLeft">
// <div className="header__innerLinksBox">
// <Link to='/climate-change' className={`nav__category floatLeft hoverGreen ${this.state.currentPage === 'climate-change' ? 'nav__green' : ''}`}>Climate Change</Link>
// <Link to='/energy' className={`nav__category floatLeft hoverGreen ${this.state.currentPage === 'energy' ? 'nav__green' : ''}`}>Energy</Link>
// <Link to='/biodiversity' className={`nav__category floatLeft hoverGreen ${this.state.currentPage === 'biodiversity' ? 'nav__green' : ''}`}>Biodiversity</Link>
// <Link to='/research' className={`nav__category floatLeft hoverGreen ${this.state.currentPage === 'research' ? 'nav__green' : ''}`}>Research</Link>
// <Link to='/transport' className={`nav__category floatLeft hoverGreen ${this.state.currentPage === 'transport' ? 'nav__green' : ''}`}>Transport</Link>
// <Link to='/self' className={`nav__category floatLeft hoverGreen ${this.state.currentPage === 'self' ? 'nav__green' : ''}`}>Self</Link>
// <Link to='/waste' className={`nav__category floatLeft hoverGreen ${this.state.currentPage === 'waste' ? 'nav__green' : ''}`}>Waste</Link>
// <Link to='/politics' className={`nav__category floatLeft hoverGreen ${this.state.currentPage === 'politics' ? 'nav__green' : ''}`}>Politics</Link>
// <Link to='/work' className={`nav__category floatLeft hoverGreen ${this.state.currentPage === 'work' ? 'nav__green' : ''}`}>Work</Link>
// <Link to='/personal-finance' className={`nav__category floatLeft hoverGreen ${this.state.currentPage === 'personal-finance' ? 'nav__green' : ''}`}>Personal Finance</Link>
// <Link to='/food' className={`nav__category floatLeft hoverGreen ${this.state.currentPage === 'food' ? 'nav__green' : ''}`}>Food</Link>
// <Link to='/science' className={`nav__category floatLeft hoverGreen ${this.state.currentPage === 'science' ? 'nav__green' : ''}`}>Science</Link>
// <Link to='/equality' className={`nav__category floatLeft hoverGreen ${this.state.currentPage === 'equality' ? 'nav__green' : ''}`}>Equality</Link>
// <Link to='/cities' className={`nav__category floatLeft hoverGreen ${this.state.currentPage === 'cities' ? 'nav__green' : ''}`}>Cities</Link>
// <Link to='/innovation' className={`nav__category floatLeft hoverGreen ${this.state.currentPage === 'innovation' ? 'nav__green' : ''}`}>Innovation</Link>
// </div>
// </div>
// <Link to="/explore" className={`header__tagExplore floatLeft hoverGreen ${this.state.currentPage === 'explore' ? 'nav__green' : ''}`}>Explore</Link>
// <FontAwesomeIcon icon={['fas', 'angle-right']} className="header__rightIcon" onClick={() => { this.changeHeaderLeft('right') }} />
// </div>
// );
//
// } else {

return (
  <div>
  <FontAwesomeIcon icon={['fas', 'angle-left']} className="header__leftIcon" onClick={() => { this.changeHeaderLeft('left') }} />
  <div className="header__linksBoxCat" id="catScrollLeft">
  <div className="header__innerLinksBoxCat">
  <Link to='/future' className={`nav__category floatLeft hoverGreen ${this.state.currentPage === 'future' ? 'nav__green' : ''}`}>Future</Link>
  <Link to='/health' className={`nav__category floatLeft hoverGreen ${this.state.currentPage === 'health' ? 'nav__green' : ''}`}>Health</Link>
  <Link to='/economy' className={`nav__category floatLeft hoverGreen ${this.state.currentPage === 'economy' ? 'nav__green' : ''}`}>Economy</Link>
  <Link to='/now' className={`nav__category floatLeft hoverGreen ${this.state.currentPage === 'now' ? 'nav__green' : ''}`}>Now</Link>
  <Link to='/technology' className={`nav__category floatLeft hoverGreen ${this.state.currentPage === 'technology' ? 'nav__green' : ''}`}>Technology</Link>
  <Link to='/environment' className={`nav__category floatLeft hoverGreen ${this.state.currentPage === 'environment' ? 'nav__green' : ''}`}>Environment</Link>
  </div>
  </div>
  <Link to="/explore" className={`header__catExplore floatLeft hoverGreen ${this.state.currentPage === 'explore' ? 'nav__green' : ''}`}>Explore</Link>
  <FontAwesomeIcon icon={['fas', 'angle-right']} className="header__rightIcon" onClick={() => { this.changeHeaderLeft('right') }} />
  </div>
)



}
returnEmptyDiv() {
let isTagPage = false;
let tagArray = ['renewables', 'fossil-fuels', 'transport', 'sustainability', 'agriculture', 'extreme-weather', 'biodiversity', 'waste', 'nature', 'home', 'justice', 'air-pollution', 'research', 'research'];

tagArray.map((tag) => {
  if (tag === this.state.currentPage) {
    isTagPage = true;
  }
});

if (isTagPage) {
  let currentPage = `/${this.state.currentPage}`;
  let tag = Tags.findOne({ link: currentPage });
  console.log('tags', this.returnTags());
  let index = this.returnTags().indexOf(tag);
  console.log('currentPage', currentPage);
  console.log('index', index);
  console.log('tag', tag);
  // let element = document.getElementsByClassName('nav__green')[0].baseURI;
  // console.log('element', element);
  if (1 > 2) {

  } else {

  }
} else {

}

  return <div></div>;
}
render() {
    return (
      <div>
        <div className={`${this.state.currentPage === 'signup' || this.state.currentPage === 'login' || this.state.currentPage.slice(0, 5) === 'draft' ? 'header__setMarginTopNoNav' : 'header__setMarginTop'} setWidth`}>
        <div className="clearBoth"></div>
        <div className="nav__headerLogoTopDiv"><Link to="/" className="nav__headerLogo">Novaterra</Link></div>

      <div className="clearBoth nav__fillingHeight"></div>

      <hr className="nav__headeHr"/>

      <div className="nav__categories">
        <div className="nav__categoriesCenter">
          {this.returnTopBar()}
        </div>
        </div>
        {this.returnEmptyDiv()}
      </div>
      </div>
    );
  }
}

export default withTracker(() => {
Meteor.subscribe('tags');
Meteor.subscribe('categories');
return {

};
})(Header);
