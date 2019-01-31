import React from 'react';
import { withTracker } from 'meteor/react-meteor-data';

import { Nav } from './Navbar/Nav';
import { Header } from './Navbar/Header';

export class Navbar extends React.Component {
render() {
    return (
      <div>
        <Nav route={this.props.route} storyId={this.props.storyId} onSearch={this.props.onSearch} users={this.props.users} />
        <Header/>
    </div>
    );
  }
}

export default withTracker(() => {
return {
browserHistory
};
})(Navbar);
