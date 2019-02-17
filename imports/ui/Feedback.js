import React from 'react';
import { Link } from 'react-router-dom';
import { withTracker } from 'meteor/react-meteor-data';
import moment from 'moment';

import Navbar from './Components/Navbar';
import Footer from './Components/Footer';

Meteor.subscribe('currentUser');

import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';

library.add(far);
library.add(fas);

export class Feedback extends React.Component {
constructor(props) {
super(props);
this.state = {
design: 0,
functionality: 0,
easeOfUse: 0,
userExperience: 0,
error: '',
homePageChecked: false,
categoryChecked: false,
missionChecked: false,
searchChecked: false,
profileChecked: false,
otherChecked: false,
sortOption: '',
toggleDropDown: 'dropdown-content',
descriptionLength: 0,
};
this.setWrapperRef = this.setWrapperRef.bind(this);
this.setWrapperRef2 = this.setWrapperRef2.bind(this);
this.handleClickOutside = this.handleClickOutside.bind(this);
}
showMessage() {
  this.setState({ showMessage: true });
}
onSubmit(e) {
e.preventDefault();

  let design = this.state.design;
  let functionality = this.state.functionality
  let easeOfUse = this.state.easeOfUse;
  let userExperience = this.state.userExperience;

  let homepage = this.state.homePageChecked;
  let category = this.state.categoryChecked;
  let mission = this.state.missionChecked;
  let search = this.state.searchChecked;
  let profile = this.state.profileChecked;
  let other = this.state.otherChecked;

  let message = this.refs.message.value;

  let details = {
    reason: 'FEEDBACK',
    time: moment(moment().valueOf()).format('LLLL'),
    user: Meteor.userId() ? Meteor.userId() : 'Not Signed In',
    username: Meteor.userId() ? Meteor.users.findOne({ _id: Meteor.userId() }).username : 'Not Signed in',
    design,
    functionality,
    easeOfUse,
    userExperience,
    homepage,
    category,
    mission,
    search,
    profile,
    other,
    message
  }

Meteor.call('submissions.insert', details);

if (!(this.state.error)) {
  this.setState({ showMessage: true });
} else {
  this.setState({ showMessage: false });
}


// Important: Don't send an email to the user, just send it to your main account with a title saying 'Feedback'

}
toggleDropDown() {
if (this.state.toggleDropDown === 'dropdown-content') {
this.setState({ 'toggleDropDown': 'dropdown-content1' });
} else {
this.setState({ toggleDropDown: 'dropdown-content' });
}
}
setWrapperRef(node) {
    this.wrapperRef = node;
}
setWrapperRef2(node) {
    this.wrapperRef2 = node;
}
componentDidMount() {
  Meteor.subscribe('allUsers', () => {
    Tracker.autorun(() => {
      let findUser = Meteor.users;
      this.setState({ users: Meteor.users });
      });
    });
    document.title = `NovaTerra - Feedback`;
    document.addEventListener('mousedown', this.handleClickOutside);
}
componentWillUnmount() {
  document.removeEventListener('mousedown', this.handleClickOutside);
}
handleClickOutside(e) {
    if (this.wrapperRef && this.wrapperRef2 && !this.wrapperRef.contains(e.target) && !this.wrapperRef2.contains(e.target)) {
      this.setState({ toggleDropDown: 'dropdown-content' });
    }
}
returnDescriptionCharactersLeft(e) {
  this.setState({ descriptionLength: e.target.value.length });
}
  render() {
    return (
      <div>
      <meta name="viewport" content="initial-scale=1"></meta>
      {this.state.users ?
      <div>
      <Navbar route={''} users={this.state.users} />

      <div className="login__background">
      <div className="login__mobileView">

      <div className="floatLeft feedback__leftContainer">
      <div className="contact__topTitleLogin">Feedback</div>
      <hr className="flex feedback__hrTop"/>
      <br className="clearBoth"/>

      <div className="clearBoth"></div>

      <div className="feedback__firstDiv">Your advice could have a significant impact on both NovaTerra and our future. Your feedback will help improve NovaTerra, which as a result will help us get closer to our goal of raising <Link className="link" to="/mission">€50,000 by 2020</Link>. Thank your for your support, NovaTerra.</div>

      <div className="clearBoth"></div>

      <div className="fifteenPixelHeight">
      {this.state.error ? <p>{this.state.error}</p> : <p></p>}
      </div>

        <div>
        <form onSubmit={this.onSubmit.bind(this)} noValidate>

          <p className="clearBoth">How Would You Rate Our Website?</p>
          <hr className="feedback__subtitleHr"/>

                <div className="feedback__ratingFloatLeft">
                <div className="feedback__popularContainer marginBottomMediaDesign"><div className='feedback__popularText'>Design</div><FontAwesomeIcon icon={['far', 'star']} onClick={() => { this.setState({ design: 1 })}} className={`${this.state.design > 0 ? 'feedback__greenIconPop' : 'feedback__popularIcon'}`}  />
                <FontAwesomeIcon icon={['far', 'star']} onClick={() => { this.setState({ design: 2 })}} className={`${this.state.design > 1 ? 'feedback__greenIconPop' : 'feedback__popularIcon'}`} /><FontAwesomeIcon icon={['far', 'star']} onClick={() => { this.setState({ design: 3 })}} className={`${this.state.design > 2 ? 'feedback__greenIconPop' : 'feedback__popularIcon'}`}  /><FontAwesomeIcon icon={['far', 'star']} onClick={() => { this.setState({ design: 4 })}} className={`${this.state.design > 3 ? 'feedback__greenIconPop' : 'feedback__popularIcon'}`}  /><FontAwesomeIcon icon={['far', 'star']} onClick={() => { this.setState({ design: 5 })}} className={`${this.state.design > 4 ? 'feedback__greenIconPop' : 'feedback__popularIcon'}`}  /></div>
                </div>

                <div className="feedback__ratingFloatLeft">
                <div className="feedback__popularContainer"><div className='feedback__popularText'>Functionality</div><FontAwesomeIcon icon={['far', 'star']} onClick={() => { this.setState({ functionality: 1 })}} className={`${this.state.functionality > 0 ? 'feedback__greenIconPop' : 'feedback__popularIcon'}`}  />
                <FontAwesomeIcon icon={['far', 'star']} onClick={() => { this.setState({ functionality: 2 })}} className={`${this.state.functionality > 1 ? 'feedback__greenIconPop' : 'feedback__popularIcon'}`}  /><FontAwesomeIcon icon={['far', 'star']} onClick={() => { this.setState({ functionality: 3 })}} className={`${this.state.functionality > 2 ? 'feedback__greenIconPop' : 'feedback__popularIcon'}`}  /><FontAwesomeIcon icon={['far', 'star']} onClick={() => { this.setState({ functionality: 4 })}} className={`${this.state.functionality > 3 ? 'feedback__greenIconPop' : 'feedback__popularIcon'}`}  /></div><FontAwesomeIcon icon={['far', 'star']} onClick={() => { this.setState({ functionality: 5 })}} className={`${this.state.functionality > 4 ? 'feedback__greenIconPop' : 'feedback__popularIcon'}`}  />
                </div>
                <div className="clearBoth"></div>

                <div className="feedback__ratingFloatLeft feedbackContainersMarginTop">
                <div className="feedback__popularContainer"><div className='feedback__popularText'>Ease of Use</div><FontAwesomeIcon icon={['far', 'star']} onClick={() => { this.setState({ easeOfUse: 1 })}} className={`${this.state.easeOfUse > 0 ? 'feedback__greenIconPop' : 'feedback__popularIcon'}`}  /><FontAwesomeIcon icon={['far', 'star']} onClick={() => { this.setState({ easeOfUse: 2 })}} className={`${this.state.easeOfUse > 1 ? 'feedback__greenIconPop' : 'feedback__popularIcon'}`} /><FontAwesomeIcon icon={['far', 'star']} onClick={() => { this.setState({ easeOfUse: 3 })}} className={`${this.state.easeOfUse > 2 ? 'feedback__greenIconPop' : 'feedback__popularIcon'}`}  /></div><FontAwesomeIcon icon={['far', 'star']} onClick={() => { this.setState({ easeOfUse: 4 })}} className={`${this.state.easeOfUse > 3 ? 'feedback__greenIconPop' : 'feedback__popularIcon'}`} /><FontAwesomeIcon icon={['far', 'star']} onClick={() => { this.setState({ easeOfUse: 5 })}} className={`${this.state.easeOfUse > 4 ? 'feedback__greenIconPop' : 'feedback__popularIcon'}`}  />
                </div>
               <div className="feedback__ratingFloatLeft feedbackContainersMarginTopSpecial">
               <div className="feedback__popularContainer"><div className='feedback__popularText'>User Experience</div><FontAwesomeIcon icon={['far', 'star']} onClick={() => { this.setState({ userExperience: 1 })}} className={`${this.state.userExperience > 0 ? 'feedback__greenIconPop' : 'feedback__popularIcon'}`} /><FontAwesomeIcon icon={['far', 'star']} onClick={() => { this.setState({ userExperience: 2 })}} className={`${this.state.userExperience > 1 ? 'feedback__greenIconPop' : 'feedback__popularIcon'}`}  /></div><FontAwesomeIcon icon={['far', 'star']} onClick={() => { this.setState({ userExperience: 3 })}} className={`${this.state.userExperience > 2 ? 'feedback__greenIconPop' : 'feedback__popularIcon'}`}  /><FontAwesomeIcon icon={['far', 'star']} onClick={() => { this.setState({ userExperience: 4 })}} className={`${this.state.userExperience > 3 ? 'feedback__greenIconPop' : 'feedback__popularIcon'}`}  /><FontAwesomeIcon icon={['far', 'star']} onClick={() => { this.setState({ userExperience: 5 })}} className={`${this.state.userExperience > 4 ? 'feedback__greenIconPop' : 'feedback__popularIcon'}`} />
                </div>
                {/*  <div onClick={() => { this.setState({ sortOption: 'Very Bad' }) }} className="feedback__oldestContainer"><div className={`${this.state.sortOption === 'Very Bad' ? 'sort__greenText' : 'feedback__popularText'}`}>Very Bad</div><FontAwesomeIcon icon={['far', 'star']} className={`${this.state.sortOption === 'Very Bad' ? 'feedback__greenIconPop' : 'feedback__popularIcon'}`}  /></div>*/}



              <div className="clearBoth"></div>



          <p className="feedback_areasMarginTop">Areas For Improvement</p>
          <hr className="feedback__subtitleHr"/>

          <div className="feedback__checkBoxesMarginLeft">
          <div className="feedbackCheckmark_container"><div onClick={() => { this.setState({ homePageChecked: !this.state.homePageChecked })}} className="floatLeft inputSignupPage cursorDefault"><input onClick={() => { this.setState({ homePageChecked: !this.state.homePageChecked })}} checked={this.state.homePageChecked} className="feedback__signUpPageMarginRight" ref='homepage' type="checkbox" name="homepage" /><span className={`feedbackCheckmark`}></span><p className="feedback__inputSignupPage">Homepage</p></div></div>
          <div className="clearBoth"></div>
          <div className="feedbackCheckmark_container"><div onClick={() => { this.setState({ categoryChecked: !this.state.categoryChecked })}} className="floatLeft inputSignupPage cursorDefault"><input onClick={() => { this.setState({ categoryChecked: !this.state.categoryChecked })}} checked={this.state.categoryChecked} className="feedback__signUpPageMarginRight" ref='category' type="checkbox" name="category" /><span className={`feedbackCheckmark`}></span><p className="feedback__inputSignupPage">Category Pages</p></div></div>
          <div className="clearBoth"></div>
          <div className="feedbackCheckmark_container"><div onClick={() => { this.setState({ missionChecked: !this.state.missionChecked })}} className="floatLeft inputSignupPage cursorDefault"><input onClick={() => { this.setState({ missionChecked: !this.state.missionChecked })}} checked={this.state.missionChecked} className="feedback__signUpPageMarginRight" ref='mission' type="checkbox" name="mission" /><span className={`feedbackCheckmark`}></span><p className="feedback__inputSignupPage">Mission Page</p></div></div>
          <div className="clearBoth"></div>
          </div>
          <div className="marginLeftAreasForImprovement">
          <div className="feedbackCheckmark_container"><div onClick={() => { this.setState({ searchChecked: !this.state.searchChecked })}} className="floatLeft inputSignupPage cursorDefault"><input onClick={() => { this.setState({ searchChecked: !this.state.searchChecked })}} checked={this.state.searchChecked} className="feedback__signUpPageMarginRight" ref='search' type="checkbox" name="search" /><span className={`feedbackCheckmark`}></span><p className="feedback__inputSignupPage">Search Page</p></div></div>
          <div className="clearBoth"></div>
          <div className="feedbackCheckmark_container"><div onClick={() => { this.setState({ profileChecked: !this.state.profileChecked })}} className="floatLeft inputSignupPage cursorDefault"><input onClick={() => { this.setState({ profileChecked: !this.state.profileChecked })}} checked={this.state.profileChecked} className="feedback__signUpPageMarginRight" ref='profile' type="checkbox" name="profile" /><span className={`feedbackCheckmark`}></span><p className="feedback__inputSignupPage">Profile Page</p></div></div>
          <div className="clearBoth"></div>
          <div className="feedbackCheckmark_container"><div onClick={() => { this.setState({ otherChecked: !this.state.otherChecked })}} className="floatLeft inputSignupPage cursorDefault"><input onClick={() => { this.setState({ otherChecked: !this.state.otherChecked })}} checked={this.state.otherChecked} className="feedback__signUpPageMarginRight" ref='other' type="checkbox" name="other" /><span className={`feedbackCheckmark`}></span><p className="feedback__inputSignupPage">Other (Please Specify Below)</p></div></div>

          </div>
          <div className="clearBoth"></div>

        <div className={`feedback__messageRightSubtitle`}>Message</div>
        <textarea ref="message" name="message" onChange={this.returnDescriptionCharactersLeft.bind(this)} maxLength='1000' className={`contact__textArea floatLeft`}></textarea>
        <div className="contact__descriptionMessageMaxCharacters">{`${1000 - this.state.descriptionLength} Characters Left`}</div>



        <p> (Re-captcha) </p>

        <br className="clearBoth"/>

        <button className="login__loginButton signup__belowSubmitButtonMarginBottom" onClick={() => { this.onSubmit.bind(this) }}>Submit</button>
        {this.state.showMessage ? <div className="feedback__successBox"><div className="contact__successBoxInnerMargins">Sent. Thank you for your support.</div></div> : undefined}
        </form>

          <hr className="flex feedback__hrBottom" />

        </div></div></div></div>

      <Footer route='' />
          </div>
          : undefined }
        </div>
    );
  }
}


export default withTracker(() => {
return {

};
})(Feedback);
