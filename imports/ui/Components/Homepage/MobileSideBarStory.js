import React from 'react';
import { withTracker } from 'meteor/react-meteor-data';
import { Link } from 'react-router-dom';

export class MobileSideBarStory extends React.Component {
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
        <div className="se3Mobile">
        <Link to={`${this.props.collection[this.props.num].link}`} className="kws">{`0${this.props.num + 1}`}</Link>
        </div>
        <div className="sqMobile">
        <Link to={`${this.props.collection[this.props.num].link}`} className={`sq1 ${this.userHasSeenStory(this.props.collection[this.props.num]) ? 'title__grey' : ''}`}>{this.props.collection[this.props.num].title.length > 68 ? this.props.collection[this.props.num].title.slice(0, 68) + '...' : this.props.collection[this.props.num].title}</Link>
        </div>
        <Link to={`/${this.props.collection[this.props.num].category}`} className="qqraMobile">
        {this.props.collection[this.props.num].category}
        </Link>
        <div className="qqrfMobile">
        {`${this.returnUsername(this.props.collection[this.props.num].userId).length > 18 ? this.returnUsername(this.props.collection[this.props.num].userId).slice(0, 18) + '...' : this.returnUsername(this.props.collection[this.props.num].userId)} · ${this.props.collection[this.props.num].minRead} min`}
      </div> {/* ${this.findUsername(this.props.collection[this.props.num].userId)} */}
      </div>
    )
  }
}

export default withTracker(() => {
return {

};
})(MobileSideBarStory);
