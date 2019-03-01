import React from 'react';
import { withTracker } from 'meteor/react-meteor-data';

import { Nav } from './Navbar/Nav';
import { Header } from './Navbar/Header';
import GDPRMessage from './GDPRMessage';

export class Navbar extends React.Component {
renderGDPRMessage() {
  // localStorage.setItem('popState','showns');
  if (localStorage.getItem('popState') != 'shown1'){
        return <GDPRMessage/>;
    }
}
render() {
    return (
      <div>
        <Nav route={this.props.route} storyId={this.props.storyId} onSearch={this.props.onSearch} users={this.props.users} />
        <Header/>
        {this.renderGDPRMessage()}
    </div>
    );
  }
}

export default withTracker(() => {
return {
browserHistory
};
})(Navbar);
