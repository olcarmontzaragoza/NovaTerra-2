import React from 'react';
import { withTracker } from 'meteor/react-meteor-data';
import { Link } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';

export class GetInvolved extends React.Component {
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
document.title = `NovaTerra - Get Involved`;
}
render() {
    return (
      <div>
      <meta name="viewport" content="initial-scale=1"></meta>
        {this.state.users ?
        <div>
        <Navbar route={''} users={this.state.users} />
        <div className="getInvolved__mainTitleCategories">
        Get Involved
        </div>
        <div className="clearBoth"></div>
        <div className="getInvolved__topHeaderSubtitleAbout">“We’re the first generation to feel the impact of climate change and the last generation that can do something about it” - Jay Inslee</div>
        <div className="clearBoth"></div>
        <hr className="getInvolved__hr"/>


        <div className="topBottomMarginsGetInvolved"></div>
        <div className="floatLeft">
        <img src='images/getInvolved/readOurStories.jpg' className="getInvovled__readOurStoriesImage"/>
        </div>

        <div className="floatLeft getInvolved__leftContainer">
        <h2 className="getInvolved__mainHeader">Read Our Stories</h2>
        <p className="getInvolved__mainText">Read the stories published by our users and you can help inform yourself about environmental crises around the globe as well as help raise money for these issues.</p>
        <Link to="/explore" className="getInvolved__actionBox">Search</Link>
        </div>

        <div className="clearBoth bottomMarginsGetInvolved"></div>
        <hr className="getInvolved__hr getInvolved___displayNoneWhenSmall"/>

        <div className="floatLeft">
        <img src='images/getInvolved/joinOurCommunity.jpg' className="getInvovled__readOurStoriesImage"/>
        </div>

        <div className="floatLeft getInvolved__leftContainer">
        <h2 className="getInvolved__mainHeader">Join Our Community</h2>
        <p className="getInvolved__mainText">Create an account on NovaTera and join the many authors publishing fascinating stories on issues globally, raising both awareness and funding to create a better world.</p>
        <Link to={Meteor.userId() ? '/get-involved' : '/signup'} className="getInvolved__actionBox">Join</Link>
        </div>

        <div className="clearBoth bottomMarginsGetInvolved"></div>
        <hr className="getInvolved__hr getInvolved___displayNoneWhenSmall"/>

        <div className="floatLeft">
        <img src='images/getInvolved/createAStory.jpg' className="getInvovled__readOurStoriesImage"/>
        </div>

        <div className="floatLeft getInvolved__leftContainer">
        <h2 className="getInvolved__mainHeader">Create a Story</h2>
        <p className="getInvolved__mainText">Create your first story on NovaTerra. NovaTerra has limited guideliness, so stories of all shapes, sizes, lengths and authors from all ages and backgrounds are welcome. </p>
        <Link to={Meteor.userId() ? '/profile' : '/signup'} className="getInvolved__actionBox">Create</Link>
        </div>

        <div className="clearBoth bottomMarginsGetInvolved"></div>
        <hr className="getInvolved__hr getInvolved___displayNoneWhenSmall"/>

        <div className="floatLeft">
        <img src='images/getInvolved/Donate.jpg' className="getInvovled__readOurStoriesImage"/>
        </div>

        <div className="floatLeft getInvolved__leftContainer">
        <h2 className="getInvolved__mainHeader">Donate</h2>
        <p className="getInvolved__mainText">Leave a mark on this world by donating to the countless charities helping to combat the environmental issues mentioned in our stories.</p>
        <Link to="/donate" className="getInvolved__actionBox">Donate</Link>
        </div>

        <div className="clearBoth veryBottomMarginsGetInvolved"></div>

        <Footer/>
        </div>
        : undefined }
      </div>
    );
  }
}

export default withTracker(() => {
return {

};
})(GetInvolved);
