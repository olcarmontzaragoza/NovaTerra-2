import React from 'react';
import { withTracker } from 'meteor/react-meteor-data';
import { Link } from 'react-router-dom';

export class NotFoundMessage extends React.Component {
constructor(props) {
super(props);
this.state = {
show: true,
};
}
hideMessage() {
  // this.setState({ show: false })
  // localStorage.setItem('popState','shown1');
}
render() {
    return (
      <div>

       </div>
    );
  }
}

export default withTracker(() => {
return {

};
})(NotFoundMessage);
