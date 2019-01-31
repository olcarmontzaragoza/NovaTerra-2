import React from 'react';
import { withTracker } from 'meteor/react-meteor-data';
import { Link } from 'react-router-dom';

export class MessageTooltipClickNot extends React.Component {
constructor(props) {
super(props);
this.state = {
showTooltip: false,
};
this.setMainTooltip = this.setMainTooltip.bind(this);

this.handleClickOutside = this.handleClickOutside.bind(this);
this.handleResize = this.handleResize.bind(this);
}
  setMainTooltip(node) {
      this.mainTooltip = node;
  }
  componentDidMount() {
      document.addEventListener('mousedown', this.handleClickOutside);
      window.addEventListener('resize', this.handleResize);
  }
  componentWillUnmount() {
      document.removeEventListener('mousedown', this.handleClickOutside);
  }
  handleClickOutside(e) {
  if (this.mainTooltip && !this.mainTooltip.contains(e.target)) {
    this.setState({ showTooltip: false });
  }
  }
handleResize(e) {
  this.setState({ showTooltip: false });
}
render() {
    return (
      <div>
        <div ref={this.setMainTooltip} className={`tooltipClickNot ${this.props.outsideClassName}`}>
          <div onClick={() => { this.setState({ showTooltip: !this.state.showTooltip }) }}>{this.props.outside}</div>

          {this.state.showTooltip ?
          <div>
            <span className="tooltipborderClickNot"></span>
            <span className="belowTooltipborderClickNot"></span>
            <span className={`tooltiptextClickNot ${this.props.insideClassName}`}>
              {this.props.inside}
            </span>
            </div>
            : undefined }
            </div>
      </div>
    )
  }
}

export default withTracker(() => {
return {

};
})(MessageTooltipClickNot);
