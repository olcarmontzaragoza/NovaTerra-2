import React from 'react';
import { withTracker } from 'meteor/react-meteor-data';
import { Link } from 'react-router-dom';

export class MessageTooltipClickPro extends React.Component {
constructor(props) {
super(props);
this.state = {
showTooltip: false,
};
this.setMainTooltip = this.setMainTooltip.bind(this);

this.handleClickOutside = this.handleClickOutside.bind(this);
}
  setMainTooltip(node) {
      this.mainTooltip = node;
  }
  componentDidMount() {
      document.addEventListener('mousedown', this.handleClickOutside);
  }
  componentWillUnmount() {
      document.removeEventListener('mousedown', this.handleClickOutside);
  }
  handleClickOutside(e) {
  if (this.mainTooltip && !this.mainTooltip.contains(e.target)) {
    this.setState({ showTooltip: false });
  }
}
render() {
    return (
      <div>
        <div ref={this.setMainTooltip} className={`tooltipClickPro ${this.props.outsideClassName}`}>
          <div onClick={() => { this.setState({ showTooltip: !this.state.showTooltip }) }}>{this.props.outside}</div>

          {this.state.showTooltip ?
          <div>
            <span className="tooltipborderClickPro"></span>
            <span className="belowTooltipborderClickPro"></span>
            <span className={`tooltiptextClickPro ${this.props.insideClassName}`}>
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
})(MessageTooltipClickPro);
