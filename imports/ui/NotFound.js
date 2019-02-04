import React from 'react';
import { withTracker } from 'meteor/react-meteor-data';
import { Link } from 'react-router-dom';
import { Session } from 'meteor/session';
import { funcReplace } from '../routes/routes.js';

import Navbar from './Components/Navbar';
import Footer from './Components/Footer';

Meteor.subscribe('currentUser');
Meteor.subscribe('allUsers');

export class NotFound extends React.Component {
  constructor(props) {
  super(props);
  this.state = {
  // searchValue: Session.get('searchValue'),
};
this.handleKeyUp = this.handleKeyUp.bind(this);
}
handleSearchSubmit(e) {
let searchValue = this.refs.searchInputNotFound.value;
Session.set({ searchValue });
funcReplace('/search');
}
componentDidMount() {

      Meteor.subscribe('allUsers', () => {
        Tracker.autorun(() => {
          let findUser = Meteor.users;
          this.setState({ users: Meteor.users });
          });
        });

    Session.set({ searchValue: '' });

    document.title = `NovaTerra - Not Found`;

    document.addEventListener('keyup', this.handleKeyUp);
}
componentWillUnmount() {
    document.removeEventListener('keyup', this.handleKeyUp);
}
handleKeyUp(e) {
       if (this.refs.searchInputNotFound.contains(e.target)) {
       if (e.key === "Enter") {
         let searchValue = e.target.value;
         Session.set({ searchValue });
         funcReplace('/search');
       }
     }
}
render() {
    return (
      <div>
        <meta name="viewport" content="initial-scale=1"></meta>
          {this.state.users ?
            <div>
            <Navbar route={''} users={this.state.users} />
            <div className="notFound__marginTop"></div>
            <div className="notFound__topMargins">
            <h1 className="notFound__404">404</h1><h3 className="notFound__pageNotFound">Page Not Found</h3><div className="clearBoth"></div>

            <p className="notFound__bodyText">I wasn't able to find this page. This could be because we changed the URL of a post or you may have mistyped the URL of a post. Considering searching for this post:</p>

            <div className="floatLeft"><input type="text" ref="searchInputNotFound" maxLength="100" className="notFound__mainInput" /></div><button className="notFound__loginButton" onClick={ this.handleSearchSubmit.bind(this)}>Search</button>

            <div className="clearBoth marginBelowInputNotFound"></div>
            <p className="notFound__otherPagesToCheckOutMobile">Other pages you may want to check out:</p>
            <Link to="/" className="floatLeft link notfound__link">Home</Link>
            <Link to="/explore" className="floatLeft link notfound__link">Explore</Link>
            <Link to="/search" className="floatLeft link notfound__link">Search</Link>

          </div>
          <div className="notFound__marginBottom"></div>
          <Footer route=''/>
          </div>
        : undefined }
      </div>
    );
  }
}

export default withTracker(() => {
return {

};
})(NotFound);
