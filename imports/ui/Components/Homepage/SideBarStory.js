import React from 'react';
import { withTracker } from 'meteor/react-meteor-data';
import { Link } from 'react-router-dom';

export class SideBarStory extends React.Component {
constructor(props) {
super(props);
this.state = {

};
}
returnUsername(userId) {
    const user = this.props.users.findOne({ _id: userId });
    return user.username;
}
userHasSeenStory(story) {
if (Meteor.userId()) {
let user = this.props.users.findOne({ _id: Meteor.userId() });
if (user.storiesViewed.includes(story._id)) {
  return true;
} else {
  return false;
}
}
return false;
}
render() {
    return (
      <div>
        <div className="se3">
        <Link to={`${this.props.story.link}`} className="kws">{`0${this.props.num + 1}`}</Link>
        </div>
        <div className="sq">
        <Link to={`${this.props.story.link}`} className={`sq1 ${this.userHasSeenStory(this.props.story) ? 'title__grey' : ''}`}>{this.props.story.title.length > 63 ? this.props.story.title.slice(0, 63) + '...' : this.props.story.title}</Link>
        </div>
        <div className="clearBoth"></div>
        <Link to={`/${this.props.story.category}`} className={`qqra ${this.props.num === 0 ? 'firstEnvironmentMiddleHomeSide' : ''}`}>
        {this.props.story.category}
        </Link>
        <div className="qqrf">
        {`${this.returnUsername(this.props.story.userId)} · ${this.props.story.minRead} min`}
      </div> {/* ${this.findUsername(this.props.collection[this.props.num].userId)} */}
      </div>
    )
  }
}

export default withTracker(() => {
return {

};
})(SideBarStory);
