import React from 'react';
import { withTracker } from 'meteor/react-meteor-data';
import { Link } from 'react-router-dom';

export class MessageTooltipClickPublishReact extends React.Component {
constructor(props) {
super(props);
this.state = {

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
    this.setState({ open: false });
  }
}

render() {
    return (
      <div>
        <div ref={this.setMainTooltip} className={`tooltipClickPublish ${this.props.outsideClassName}`}>
          <div>{this.props.outside}</div>

          {this.props.open ?
          <div>
            <span className={`tooltiptextClickPublish ${this.props.insideClassName}`}>
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
})(MessageTooltipClickPublishReact);
