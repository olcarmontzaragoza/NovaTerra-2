import React from 'react';
import { withTracker } from 'meteor/react-meteor-data';
import { Link } from 'react-router-dom';

export class Charity extends React.Component {
  render() {
    return (
      <div>
        <a href={this.props.charityUrl}><img className="floatLeft charityImage" src={this.props.imageSrc} /></a>
        <div className="floatLeft charity__marginLeftMobile">
        <h2 href={this.props.charityUrl} className="charityName">{this.props.charity}</h2>
        <p className="charity__mainText">{this.props.charityDescription}</p>
         <a href={this.props.charityUrl} className="floatLeft"><button className="charity__actionBox">Visit Website</button></a>
         {/* <a href={this.props.donateUrl}><button>Donate Now</button></a> */}
        </div>
        <div className="clearBoth charityBottomSpacing"></div>
       </div>
    );
  }
}

export default withTracker(() => {
return {

};
})(Charity);
