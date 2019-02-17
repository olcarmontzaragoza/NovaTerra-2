import React from 'react';
import { withTracker } from 'meteor/react-meteor-data';
import { Stories } from '../../api/stories';
import { Notifications } from '../../api/notifications';
import { Link } from 'react-router-dom';
import moment from 'moment';

import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';

export class Admin extends React.Component {
constructor(props) {
  super(props);
  this.state = {

  };
  }
  componentDidMount() {
      Meteor.subscribe('allUsers', () => {
        Tracker.autorun(() => {
          let findUser = Meteor.users;
          this.setState({ users: Meteor.users });
          });
        });
}
returnWaitingStories() {
  console.log('stories', Stories.find({ storyType: 'waiting' }).count());
  return Stories.find({ storyType: 'waiting' });
}
findStoryUser(id) {
  return Meteor.users.findOne({ _id: id });
}
publishStory(id) {

  let story = Stories.findOne({ _id: id });

  let user = Meteor.users.findOne({ _id: story.userId });

  let storyNotification = Notifications.findOne({ _id: user._id, storyId: story._id, });

  if (storyNotification) {
    Meteor.call('notifications.remove', storyNotification._id);
    console.log('notification removed...')
  }

  let firstReplaced = story.title.replace(/(<([^>]+)>)/g, "");
  let secondReplaced = firstReplaced.replace(/&nbsp;/g, ' ');

  var entities = [
    [ 'quot', '"'],
        ['amp', '&'],
        ['apos', '\''],
        ['#x27', '\''],
        ['#x2F', '/'],
        ['#39', '\''],
        ['#47', '/'],
        ['lt', '<'],
        ['gt', '>'],
        ['nbsp', ' '],
    ];

    for (var i = 0, max = entities.length; i < max; ++i) {
        secondReplaced = secondReplaced.replace(new RegExp('&'+entities[i][0]+';', 'g'), entities[i][1]);
    }

  let link = secondReplaced.toLowerCase();
  link = link.replace(/\s/g , "-");
  link = link.replace(/[?]/g, "");
  // link = link.replace(/?/g , "-");

  let details = {
  description: "Your story has been published:",
  thisUserId: user._id,
  created: moment().valueOf(),
  type: 'storyEvent',
  storyId: story._id,
  published:true,
  link: `story/${link}`,
  };

  if (Notifications.find({ storyId: story._id })) {
    Notifications.find({ storyId: story._id }).fetch().map((story) => {
      Meteor.call('notifications.remove', story._id);
    });
  }

  Meteor.call('notifications.insert', details);

  Meteor.call('stories.update', id, { storyType: 'published', link: `story/${link}`, lastUpdated: moment().valueOf() });

}
doNotPublishStory(id) {

  let notificationTitle = this.refs.notPublishedInput.value.trim();
  let notificationBody = this.refs.notPublishedTextArea.value.trim();

  if (notificationBody.length === 0 || notificationTitle.length === 0) {
    return false;
  } else {

    let story = Stories.findOne({ _id: id });

    let user = Meteor.users.findOne({ _id: story.userId });

    let details = {
    description: "Your story has not been published:",
    thisUserId: user._id,
    created: moment().valueOf(),
    type: 'storyEvent',
    storyId: story._id,
    published:false,
    link: `draft/${story._id}`,
    messageTitle: notificationTitle,
    messageBody: notificationBody,
    isStoryEvent: true,
    };

    console.log('notification inserted...')

    Meteor.call('notifications.insert', details);

    Meteor.call('stories.update', id, { storyType: 'drafted', link: `draft/${story._id}` });

}
}
renderAdminContent() {
  let user = Meteor.users.findOne({ _id: Meteor.userId() });
  if (user.emails[0].address === 'olcarmontzaragoza@gmail.com') {
    return (
      <div>
      <meta name="viewport" content="initial-scale=1"></meta>
        <h1>Waiting Stories</h1>
        {this.returnWaitingStories().map((story) => {
          return (<div key={story._id}>
          <hr/>
          <div>{story.category}</div>
          <div dangerouslySetInnerHTML={{ __html:
          story.title }}></div>
          <div className="admin__bodyBox" dangerouslySetInnerHTML={{ __html:
          story.body }}></div>
          <div>{story.tags.map((tag => {
            <div>{tag.name}></div>
          }))}
          <Link className="link" to={this.findStoryUser(story.userId).profileUrl}>{this.findStoryUser(story.userId).username}</Link>

          <div className="adminTopSpacing clearBoth"></div>
          <div onClick={() => this.publishStory(story._id)} className="admin__buttonPub">Publish</div>
          <br/>
          <div onClick={() => this.doNotPublishStory(story._id)} className="admin__buttonRej">Do Not Publish</div>
          <div className="clearBoth"></div>
          <input className="admin__input" ref="notPublishedInput"></input>
          <div className="clearBoth"></div>
          <textarea className="admin__textarea" ref="notPublishedTextArea"></textarea>
          <hr/>
          </div>
        </div>
      )
      })}
      </div>

  )

} else {
    return <div>Not Authorised</div>;
  }
}
render() {
    return (
      <div>
      {this.state.users ? this.renderAdminContent() : undefined}
      </div>
    );
  }
}

export default withTracker(() => {
return {

};
})(Admin);
