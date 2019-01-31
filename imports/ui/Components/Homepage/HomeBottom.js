import React from 'react';
import { withTracker } from 'meteor/react-meteor-data';

// DONT ADD THIS

export class HomeBottom extends React.Component {
  render() {
    return (
      <div>
      </div>
    );
  }
}

export default withTracker(() => {
Meteor.subscribe('stories');
return {
findTrendingByCategory: undefined, // Bottom Section
};
})(HomeBottom);
