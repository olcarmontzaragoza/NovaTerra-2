import React from 'react';
import { withTracker } from 'meteor/react-meteor-data';
import { Link } from 'react-router-dom';

export class MessageTooltip extends React.Component {
  render() {
    return (
      <div>
        <div className="tooltip">
          {this.props.outside}
        <span className={`tooltiptext ${this.props.outsideClassName}`}></span>
            <span className="belowTooltipborder"></span>
            <span className={`tooltiptext ${this.props.insideClassName}`}>
              {this.props.inside}
            </span>
            </div>
      </div>
    )
  }
}

export default withTracker(() => {
return {

};
})(MessageTooltip);
