import React from 'react';
import { withTracker } from 'meteor/react-meteor-data';
import { Link } from 'react-router-dom';
import { Session } from 'meteor/session';
import { funcReplace } from '../../routes/routes.js';

Meteor.subscribe('currentUser');
Meteor.subscribe('allUsers');

export class DraftNotAuthorised extends React.Component {
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

    Session.set({ searchValue: '' });

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
            <div className="notFound__marginTop"></div>
            <div className="notFound__topMargins">
            <h1 className="notFound__404">401</h1><h3 className="notFound__pageNotFound">Not Authorised</h3><div className="clearBoth"></div>
            <p className="notFound__bodyText">Unfortunately you do not have access to this draft. If you do own this draft please check if you are on the right account. If you are on the right account and don't have access to this draft, please contact NovaTerra <Link to='/contact' className="notfound__linkIn link">here</Link>. Consider searching for a story:</p>

            <div className="floatLeft"><input type="text" ref="searchInputNotFound" maxLength="100" className="notFound__mainInput" /></div><button className="notFound__loginButton" onClick={ this.handleSearchSubmit.bind(this)}>Search</button>

            <div className="clearBoth marginBelowInputNotFound"></div>
            <p className="floatLeft">You may also want to go to your</p><Link to='/profile' className="notfound__link floatLeft link">Profile</Link>
          </div>
          <div className="notFound__marginBottom"></div>
          </div>
    );
  }
}

export default withTracker(() => {
return {

};
})(DraftNotAuthorised);
