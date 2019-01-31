import React from 'react';
import { withTracker } from 'meteor/react-meteor-data';

// LEAVE FOR ANOTHER VERSION

export class Bookmarks extends React.Component {
  render() {
    return (
      <div>
          {/* <h1>This is the Bookmarks page</h1> */}
      </div>
    );
  }
}

export default withTracker(() => {
Meteor.subscribe('stories');
return {

};
})(Bookmarks);
