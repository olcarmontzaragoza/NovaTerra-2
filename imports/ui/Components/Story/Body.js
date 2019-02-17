import React from 'react';
import { withTracker } from 'meteor/react-meteor-data';
import { Link } from 'react-router-dom';

export class Body extends React.Component {
constructor(props) {
super(props);
this.state = {
};
}
render() {
    return (
      <div>

<div className="storyBody__topSpacing"></div>

<div className="storyBody__margins">
<div className="mainStoryText" dangerouslySetInnerHTML={{ __html: this.props.story.body }}>
</div></div>

<div className="marginLeftTags">
{this.props.story.tags.map((tag) => {
return (
<Link to={`/${tag.replace(/ /g, '-')}`} key={tag} className="storyTags">
<div className="storyBody__tagsTopDiv">
<div className="storyBody__tagsInnerDiv"></div>
{tag}
</div></Link>
)
})}

</div></div>
    );
  }
}

export default withTracker(() => {
return {

};
})(Body);
