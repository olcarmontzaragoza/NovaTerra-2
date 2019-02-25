import React from 'react';
import { withTracker } from 'meteor/react-meteor-data';
import { Link } from 'react-router-dom';
import { Session } from 'meteor/session';
import { funcReplace } from '../../routes/routes.js';

Meteor.subscribe('currentUser');
Meteor.subscribe('allUsers');

export class UserNotFound extends React.Component {
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
returnPopularCreators() {

return this.props.user.find({}, {
  sort: {
    followers: -1
  }
}).fetch();
}
redirectPage(link) {
  link = link.slice(8, link.length);
  window.location = `/profile${link}`;
}
render() {
    return (
            <div>
            <div className="notFound__marginTop"></div>
            <div className="notFound__topMargins">
            <h1 className="notFound__404">404</h1><h3 className="notFound__pageNotFound">Profile Not Found</h3><div className="clearBoth"></div>
            <p className="notFound__bodyText">I wasn't able to find this profile. This could be because the creator might have changed their username or you may have mistyped the URL of this profile. Consider searching for this creator:</p>

            <div className="floatLeft"><input type="text" ref="searchInputNotFound" maxLength="100" className="notFound__mainInput" /></div><button className="notFound__loginButton" onClick={ this.handleSearchSubmit.bind(this)}>Search</button>

            <div className="clearBoth marginBelowInputNotFound"></div>
            <p className="floatLeft">Popular creators on NovaTerra:</p>
            {this.returnPopularCreators().length > 0 ? <a onClick={() => this.redirectPage(this.returnPopularCreators()[0].profileUrl)} className="notfound__link floatLeft link">{this.returnPopularCreators()[0].username}</a> : undefined}
            {this.returnPopularCreators().length > 1 ? <a onClick={() => this.redirectPage(this.returnPopularCreators()[1].profileUrl)} className="notfound__link floatLeft link">{this.returnPopularCreators()[1].username}</a> : undefined}
            {this.returnPopularCreators().length > 2 ? <a onClick={() => this.redirectPage(this.returnPopularCreators()[2].profileUrl)} className="notfound__link floatLeft link">{this.returnPopularCreators()[2].username}</a> : undefined}

          </div>
          <div className="notFound__marginBottom"></div>
          </div>
    );
  }
}

export default withTracker(() => {
return {

};
})(UserNotFound);
