import { Meteor } from 'meteor/meteor';
import ReactDOM from 'react-dom';
import { routes, onAuthChange } from '../imports/routes/routes.js';
import '../imports/startup/simple-schema-configuration';
import { Tracker } from 'meteor/tracker';
// import { renderLogoutButton } from '../imports/ui/Index';
import { setTotalRevenue, renderImageOrButton } from '../imports/ui/Components/Navbar/Nav';

import '../imports/ui/Components/Homepage/MiddleSidebar';

import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { faCircle } from '@fortawesome/free-solid-svg-icons';

import { fasTwitter } from '@fortawesome/free-solid-svg-icons';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
import { faAngleUp } from '@fortawesome/free-solid-svg-icons';

import { Session } from 'meteor/session';
import { checkChange } from '../imports/ui/Search';
import moment from 'moment';
import { Tags } from '../imports/api/tags';

import 'froala-editor/js/froala_editor.pkgd.min.js';
import 'froala-editor/css/froala_style.min.css';
import 'froala-editor/css/froala_editor.pkgd.min.css';
import $ from 'jquery';
window.$ = $;

import createBrowserHistory from 'history/createBrowserHistory';

browserHistory = createBrowserHistory();

// library.add(faFacebook);
library.add(faPlus);
// library.add(fab);
// library.add(fasTwitter);
library.add(faSearch);
library.add(faHeart);
library.add(faCircle);
library.add(faAngleDown);

// const mongoose = require('mongoose');
//
// var url = process.env.DATABASE_URL || "mongodb://localhost:27017/";
// mongoose.connect(url, { useNewUrlParser: true })
//     .then(() => console.log("Connection Successful"))
//     .catch(err => console.log(err));

// mongoose.connect('mongod://localhost/', { useNewUrlParser: true });

// mongoose.connect('mongodb://localhost:3000', { useNewUrlParser: true })

Meteor.subscribe('tags');
let route = 'images/tagImages/'

// if (Tags.find({}).count() === 0) Tags.insert({ text: 'Hello, world!' });

Meteor.subscribe('currentUser');

Tracker.autorun(() => {
let user = Meteor.users.findOne({ _id: Meteor.userId() });
Session.set('currentUser', user);
});

Tracker.autorun(() => {
let totalRevenue = 250;
const moneyRaised = totalRevenue * 0.9;
Session.set({ moneyRaised });

const donatedFunds = {   justDiggit: moneyRaised * 0.28,
                           theSolutionsProject: moneyRaised * 0.23,
                           solarAid: moneyRaised * 0.17,
                           standForTrees: moneyRaised * 0.12,
                           threeFiftyDotOrg: moneyRaised * 0.08,
                           theGoodFoodInstitute: moneyRaised * 0.03,
                           cotap: moneyRaised * 0.03,
                           nrdc: moneyRaised * 0.01
                        };


let projectCompletion = Math.floor((moneyRaised / 50000)*100);

if (projectCompletion < 1) {
projectCompletion = 1;
}

console.log(projectCompletion);

// const projectCompletion = Session.get('projectCompletion');
setTotalRevenue(projectCompletion);
Session.set('projectCompletion', projectCompletion);
});

Tracker.autorun(() => {
const isAuthenticated = !!Meteor.userId();
console.log(isAuthenticated);
Session.set('loginStatus', isAuthenticated);
renderImageOrButton(isAuthenticated);
onAuthChange(isAuthenticated);
});

// Tracker.autorun(() =>{
// const sideBarSide = Session.get('sideBarSide');
//
// var latest = ReactDOM.findDOMNode(this.refs.latestSide);
// latest.classList.toggle('middleSideBar__selectedCategory');
//
// var trending = ReactDOM.findDOMNode(this.refs.trendingSide);
// trending.classList.toggle('middleSideBar__selectedCategory');
// });



Meteor.startup(() => {
  Tracker.autorun(() => {

    var siteWidth = 1280;
    var scale = screen.width /siteWidth

    document.querySelector('meta[name="viewport"]').setAttribute('content', 'width='+siteWidth+', initial-scale='+scale+'');

  const changeCurrentSearch = Session.get('changeCurrentSearch');

  if (changeCurrentSearch) {
  checkChange(changeCurrentSearch);
  }

  ReactDOM.render(routes, document.getElementById('app'));
  });
});
