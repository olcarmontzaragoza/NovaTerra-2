import React from 'react';
import { withTracker } from 'meteor/react-meteor-data';
import { Link } from 'react-router-dom';

export class GDPRMessage extends React.Component {
constructor(props) {
super(props);
this.state = {
show: true,
};
}
hideMessage() {
  this.setState({ show: false })
  localStorage.setItem('popState','shown1');
}
render() {
    return (
      <div>
      <div className={`${this.state.show ? 'gdprMessage__container' : 'gdprMessage__containerHidden'}`}>
      <div className="gdprMessage__topBackground">
      <div className="gdprMessage__title">Hey there friend!</div>
      </div>

      <div className="gdprMessage__bottomMargins">
      <div className="gdprMessage__bottomMessage">
      Sorry to bother you. We just need to make sure you agree with our <Link to="/privacy-policy" className="link">Privacy Policy</Link>.

      </div>
      </div>
      <div onClick={() => this.hideMessage()} className="gdprMessage__sureButton">Sure!</div>

      </div>
       </div>
    );
  }
}

export default withTracker(() => {
return {

};
})(GDPRMessage);
