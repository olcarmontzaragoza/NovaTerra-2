import React from 'react';
import { withTracker } from 'meteor/react-meteor-data';
import { Link } from 'react-router-dom';
import { Session } from 'meteor/session';
import { funcReplace } from '../../routes/routes.js';

Meteor.subscribe('currentUser');
Meteor.subscribe('allUsers');

export class DraftNotFound extends React.Component {
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
            <h1 className="notFound__404">404</h1><h3 className="notFound__pageNotFound">Draft Not Found</h3><div className="clearBoth"></div>
            <p className="notFound__bodyText">I wasn't able to find this draft. This could be because the you or the creator of the draft may have published or deleted it. Consider searching for this story:</p>

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
})(DraftNotFound);
