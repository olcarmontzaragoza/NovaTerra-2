import React from 'react';
import { withTracker } from 'meteor/react-meteor-data';
import { Link } from 'react-router-dom';

export class SearchTooltipClick extends React.Component {
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
        <div ref={this.setMainTooltip} className={`tooltipClickSearch ${this.props.outsideClassName}`}>
          <div onClick={() => { this.setState({ showTooltip: !this.state.showTooltip }) }}>{this.props.outside}</div>

          {this.state.showTooltip ?
          <div>
          <span className="tooltiptextClickSearch"></span>
            <span className="tooltipborderClickSearch"></span>
            <span className="belowTooltipborderClickSearch"></span>
            <span className={`tooltiptextClickSearch ${this.props.insideClassName}`}>
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
})(SearchTooltipClick);
