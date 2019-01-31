import React from 'react';
import { withTracker } from 'meteor/react-meteor-data';

import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';

export class SiteMap extends React.Component {
  render() {
    return (
      <div>
          <h1>This is the site map page</h1>
      </div>
    );
  }
}

export default withTracker(() => {
return {

};
})(SiteMap);
