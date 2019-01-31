import { Meteor } from 'meteor/meteor';
import React from 'react';
import { Session } from 'meteor/session';
import { Stories } from '../api/stories';

// Primary Pages
import Signup from '../ui/Signup';
import Login from '../ui/Login';
import Index from '../ui/Index';
import Story from '../ui/Story';

// Secondary Pages
import Mission from '../ui/Mission';
import Search from '../ui/Search';
import Explore from '../ui/Explore';
import Feedback from '../ui/Feedback';
import GetInvolved from '../ui/GetInvolved';
import Contact from '../ui/Contact';
import Donate from '../ui/Donate';
import NotFound from '../ui/NotFound';
import ForgotPassword from '../ui/ForgotPassword';

// Category Pages
import Economy from '../ui/categoryPages/Economy';
import Environment from '../ui/categoryPages/Environment';
import Future from '../ui/categoryPages/Future';
import Health from '../ui/categoryPages/Health';
import Technology from '../ui/categoryPages/Technology';
import Now from '../ui/categoryPages/Now';

// Tag categoryPages
import ClimateChange from '../ui/tagPages/ClimateChange';
import Cities from '../ui/tagPages/Cities';
import Waste from '../ui/tagPages/Waste';
import Politics from '../ui/tagPages/Politics';
import Biodiversity from '../ui/tagPages/Biodiversity';
import Food from '../ui/tagPages/Food';
import Science from '../ui/tagPages/Science';
import Self from '../ui/tagPages/Self';
import Equality from '../ui/tagPages/Equality';
import Energy from '../ui/tagPages/Energy';
import Research from '../ui/tagPages/Research';
import Work from '../ui/tagPages/Work';
import Transport from '../ui/tagPages/Transport';
import Innovation from '../ui/tagPages/Innovation';
import PersonalFinance from '../ui/tagPages/PersonalFinance';

// FAQ
import FAQSearch from '../ui/FAQ/Search';
import FAQAnswer from '../ui/FAQ/Answer';

// Profile pages
import Settings from '../ui/profilePages/Settings';
import Profile from '../ui/profilePages/Profile';
// import Bookmarks from '../ui/profilePages/Bookmarks';
import UserProfile from '../ui/profilePages/UserProfile';
import CreateStory from '../ui/profilePages/CreateStory';
// import ImportStory from '../ui/profilePages/ImportStory';
import DraftedStory from '../ui/profilePages/DraftedStory';

// Other Pages
import PrivacyPolicy from '../ui/otherPages/PrivacyPolicy';
import Admin from '../ui/otherPages/Admin';
// import SiteMap from '../ui/otherPages/SiteMap';
// import TermsOfUse from '../ui/otherPages/TermsOfUse';

import { Router, Route, browserHistory, Switch, Redirect } from 'react-router';

import createBrowserHistory from 'history/createBrowserHistory';

browserHistory = createBrowserHistory();

const unauthenticatedPages = ['/login', '/signup'];
const authenticatedPages = ['/profile', '/settings', '/draft', '/draft/:id'];

const allUsers = (Component) => {
  let location = browserHistory.location.pathname.slice(1, browserHistory.location.pathname.length);
  Session.set('currentPage', location);
  return <Component />;
};

let users = Meteor.users.find();

// function requireCredentials(nextState, replace, next) {
//   const query = nextState.location.query
//   if (query.qsparam) {
//     serverAuth(query.qsparam)
//     .then(
//       () => next(),
//       () => {
//         replace('/error')
//         next()
//       }
//     )
//   } else {
//     replace('/error')
//     next()
//   }
// }

export const returnCurrentPage = () => {
return browserHistory.location;
}

const onEnterStoryPage = (Component) => {
    let preUrl = browserHistory.location.pathname.slice(7, browserHistory.location.pathname.length)
    let unCapTitle = preUrl.replace(/-/g, ' ');
    let story = Stories.findOne({ unCapTitle });
    Session.set('currentStory', story);
    return <Component story={story} />;
};


// const onEnterLoggedOutPage = (Component) => {
//     if (Meteor.userId()) {
//         return <Redirect to="/" />;
//     } else {
//         return <Component />;
//     }
// };
//
// const onEnterLoggedInPage = (Component) => {
//     if (!Meteor.userId()) {
//         return <Redirect to="/login" />;
//     } else {
//         return <Component />;
//     }
// };

export const onAuthChange = (isAuthenticated) => {
const pathname = browserHistory.location.pathname;
const isUnauthenticatedPage = unauthenticatedPages.includes(pathname);
const isAuthenticatedPage = authenticatedPages.includes(pathname);

if (isAuthenticated && isUnauthenticatedPage) {
browserHistory.replace('/');
}
if (!isAuthenticated && isAuthenticatedPage) {
browserHistory.replace('/login');
}
};

const changedPage = () => {

}

export const funcReplace = (route) => {
browserHistory.replace(route);
};

export const routes = (
    <Router history={browserHistory}>
        <Switch>
          <Route exact path="/" render={() => allUsers(Index)}  />
          {/* <Route path="/:id" render={() => allUsers(Story)} /> */}
          <Route path="/login" render={() => allUsers(Login)} />
          <Route path="/signup" render={() => allUsers(Signup)} />
          <Route path="/story/:id" render={() => allUsers(Story)}  />

          <Route path="/mission" render={() => allUsers(Mission)}  />
          <Route path="/search" render={() => allUsers(Search)}  />
          <Route path="/explore" render={() => allUsers(Explore)}  />
          <Route path="/feedback" render={() => allUsers(Feedback)}  />
          <Route path="/get-involved" render={() => allUsers(GetInvolved)}  />
          <Route path="/contact" render={() => allUsers(Contact)}  />
          <Route path="/donate" render={() => allUsers(Donate)}  />
          <Route path="/forgot-password" render={() => allUsers(ForgotPassword)}  />

          <Route path="/now" render={() => allUsers(Now)}  />
          <Route path="/economy" render={() => allUsers(Economy)}  />
          <Route path="/environment" render={() => allUsers(Environment)}  />
          <Route path="/future" render={() => allUsers(Future)}  />
          <Route path="/health" render={() => allUsers(Health)}  />
          <Route path="/technology" render={() => allUsers(Technology)}  />

          <Route path="/climate-change" render={() => allUsers(ClimateChange)}  />
          <Route path="/waste" render={() => allUsers(Waste)}  />
          <Route path="/politics" render={() => allUsers(Politics)}  />
          <Route path="/cities" render={() => allUsers(Cities)}  />
          <Route path="/food" render={() => allUsers(Food)}  />
          <Route path="/biodiversity" render={() => allUsers(Biodiversity)}  />
          <Route path="/self" render={() => allUsers(Self)}  />
          <Route path="/energy" render={() => allUsers(Energy)}  />
          <Route path="/innovation" render={() => allUsers(Innovation)}  />
          <Route path="/equality" render={() => allUsers(Equality)}  />
          <Route path="/research" render={() => allUsers(Research)}  />
          <Route path="/personal-finance" render={() => allUsers(PersonalFinance)}  />
          <Route path="/transport" render={() => allUsers(Transport)}  />
          <Route path="/science" render={() => allUsers(Science)}  />
          <Route path="/innovation" render={() => allUsers(Innovation)}  />
          <Route path="/work" render={() => allUsers(Work)}  />

          {/* <Route path="/faq/:id" render={() => allUsers(FAQAnswer)}  /> */}
          <Route path="/faq" render={() => allUsers(FAQSearch)}  />

          <Route path="/profile/:id" render={() => allUsers(UserProfile)}  />
          <Route path="/profile" render={() => allUsers(Profile)}  />

          {/* <Route path="/bookmarks" render={() => allUsers(Bookmarks)}  /> */}
          <Route path="/settings" render={() => allUsers(Settings)}  />
          // <Route path="/import-story" render={() => allUsers(ImportStory)}  />
          <Route path="/draft/:id" render={() => allUsers(CreateStory)}  />

          <Route path="/privacy-policy" render={() => allUsers(PrivacyPolicy)}  />
          <Route path="/admin" render={() => allUsers(Admin)}  />
          // <Route path="/site-map" render={() => allUsers(SiteMap)}  />

          <Route path="*" render={() => allUsers(NotFound)}  />
        </Switch>
    </Router>
);
