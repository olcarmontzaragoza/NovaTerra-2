import React from 'react';
import { withTracker } from 'meteor/react-meteor-data';
import { Faq } from '../../api/faq';
import { Meteor } from 'meteor/meteor';
import { Session } from 'meteor/session';

import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';

import createBrowserHistory from 'history/createBrowserHistory';

browserHistory = createBrowserHistory();

let preUrl = browserHistory.location.pathname.slice(5, browserHistory.location.pathname.length)
let unCapTitle = preUrl.replace(/-/g, ' ');
let answer = Faq.findOne({ unCapTitle });

export class Answer extends React.Component {
constructor(props) {
super(props);
this.state = {

};
}
componentDidMount() {

}
render() {
    return (
      <div>
          <Navbar route={'../'}/>


          <div>{answer.title}</div>


          : <p>Couldn't find this answer</p> }


          <Footer route='' />
      </div>
    );
  }
}

export default withTracker(() => {
Meteor.subscribe('faq');
return {

};
})(Answer);
