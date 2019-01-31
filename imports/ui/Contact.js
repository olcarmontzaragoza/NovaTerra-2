import React from 'react';
import { Link } from 'react-router-dom';
import { withTracker } from 'meteor/react-meteor-data';

import Navbar from './Components/Navbar';
import Footer from './Components/Footer';

Meteor.subscribe('currentUser');

export class Contact extends React.Component {
constructor(props) {
super(props);
this.state = {
error: '',
showFirstForm: !!Meteor.userId(),
descriptionLength: 0,
};
}
onSubmit(e) {
e.preventDefault();

if (this.state.showFirstForm) {
  let email = Meteor.users.findOne({ _id: Meteor.userId() }).emails[0].address;
  let reason = this.refs.reason.value;
  let message = this.refs.message.value;
} else {
  let firstName = this.refs.firstName.value.trim();
  let lastName = this.refs.lastName.value.trim();
  let email = this.refs.email.value.trim();
  let message = this.refs.message.value;
}
}
componentDidMount() {
  Meteor.subscribe('allUsers', () => {
    Tracker.autorun(() => {
      let findUser = Meteor.users;
      this.setState({ users: Meteor.users });
      });
    });
}
submitContactForm(e) {
e.preventDefault();
  if (this.state.showFirstForm) {

  let email = this.state.users.findOne({ _id: Meteor.userId() }).emails[0].address;
  let message = this.refs.message.value.trim();

  } else {

    let firstName = this.refs.firstName.value.trim();
    let lastName = this.refs.lastName.value.trim();
    let email = this.refs.email.value.trim();
    let header = this.refs.header.value.trim();
    let body = this.refs.body.value.trim();

    if (firstName.length < 1) {
    this.setErrorScrollTop();
    return this.setState({ error: 'Did you forget your add your first name?' });
    }

    if (lastName.length < 1) {
      this.setErrorScrollTop();
    return this.setState({ error: 'Did you forget your add your last name?' });
    }

    if (firstName.length > 15) {
      this.setErrorScrollTop();
    return this.setState({ error: "First Name shouldn't be more than 15 characters" });
    }

    if (lastName.length > 15) {
      this.setErrorScrollTop();
    return this.setState({ error: "Last Name shouldn't be more than 15 characters" });
    }

    Meteor.call('users.validateEmail', email, (err) => {
        if (err) {
          console.log('err', err);
          if (err.reason === 'Email must be a valid email address [400]') {
            err.reason = 'Are you sure your email Address is correct?';
          }  else if (err.reason === 'Internal server error') {
            err.reason = 'Are you sure your email Address is correct?';
          } else if (err.reason === 'Email already exists.') {
            err.reason = "I'm afraid this email already exists";
          }
          this.setErrorScrollTop();
          this.setState({error: err.reason });
        } else {
            this.setState({error: '' });
        }
    });
}

setTimeout(
    function() {
      console.log('error', this.state.error);
      if (!(this.state.error)) {
      this.setState({ showMessage: true });
      } else {
      this.setState({ showMessage: false });
      }
    }
    .bind(this),
    50
  );
}
resetError() {
this.setState({ error: '' });
}
returnDescriptionCharactersLeft(e) {
  this.resetError();
  this.setState({ descriptionLength: e.target.value.length });
}
setErrorScrollTop() {
  window.scrollTo(0, 350);
}
setPage() {
  this.resetError();
  this.setState({ showFirstForm: true })
}
  render() {
    return (
      <div>
      {this.state.users ?
      <div>
      <Navbar route={''} users={this.state.users} />

      <div className="login__background">
      <div className="login__mobileView">

      <div className="floatLeft feedback__leftContainer">
      <div className="contact__topTitleLogin">Contact</div>
      <hr className="flex contact__hrTop"/>
      <br className="clearBoth"/>

      <div className="clearBoth"></div>

      { this.state.showFirstForm ?

        <div>
        <form onSubmit={this.onSubmit.bind(this)} noValidate>

        <div className="contact__firstDiv floatLeft">Hmm... I see you are logged in. I will use your account's email to contact you. If you would like to use another email address, please <div className="link contact__link" onClick={() => { this.setState({ showFirstForm: false }) }}>click here</div></div>

        <br className="clearBoth"/>


        <div className={`login__rightSubtitle`}>Header</div>
        <input type="header" ref="header" name="header" onChange={() => { this.resetError()}} className={`contact__headerInput floatLeft`} />

        <br className="clearBoth"/>

        <div className={`login__rightSubtitle`}>Body</div>
        <textarea ref="message" name="message" onChange={this.returnDescriptionCharactersLeft.bind(this)} maxLength='1000' className={`contact__textArea floatLeft`}></textarea>
        <div className="contact__descriptionMessageMaxCharacters">{`${1000 - this.state.descriptionLength} Characters Left`}</div>

        <br className="clearBoth"/>

        <p> (Re-captcha) </p>

        <br className="clearBoth"/>

        {/*<div className="contact__afterSubmitMessage">Thank you for contacting us. You will recieve an email back from us within 24 hours.</div>*/}

        <button className="login__loginButton signup__belowSubmitButtonMarginBottom" onClick={() => { this.submitContactForm() }}>Submit</button>
        {this.state.showMessage ? <div className="contact__successBox"><div className="contact__successBoxInnerMargins">Sent. You will recieve an email back from us within 24 hours.</div></div> : undefined}
        </form>
        </div>

      :

      <div>
      <form onSubmit={this.submitContactForm.bind(this)} noValidate>

      { Meteor.userId() ? <div><div className="floatLeft contactPageWidth2 contactPageSwitchBack"> Want to switch back?</div><div className="link floatLeft" onClick={() => { this.setPage() }}>Click here</div></div> : <div className="floatLeft contactPageWidth3 contactPageSwitchBack">Please fill in the form below to reach out to us. Take into account we will use the email you provide below to respond back to you. Note, that if you like, you can also contact us directly at contact@novaterra.earth.</div>}

     {this.state.error ? <div className="contact__positioningErrorBox"><div className="login__errorBox"><p>{this.state.error}</p></div></div> : undefined}

      <div className="belowReasonContact"></div>

      <div className="contact__smallHeader">Contact Information</div>
      <hr className="contact__smallHr"/>

      <br className="clearBoth"/>

      <div className="floatLeft">
      <div className={`login__rightSubtitle ${this.state.error === 'Did you forget your add your first name?' || this.state.error === "First Name shouldn't be more than 15 characters" ? 'signup__redLabel' : ''}`}>First Name</div>
      <input type="name" ref="firstName" name="first-name" maxLength="15" onChange={() => { this.resetError()}} className={`contact__firstLastNameInputs floatLeft ${this.state.error === 'Did you forget your add your first name?' || this.state.error === "First Name shouldn't be more than 15 characters" ? 'signup__passwordRed' : ''}`} />
      </div>

      <div className="floatLeft">
      <div className={`login__rightSubtitle ${this.state.error === 'Did you forget your add your last name?' || this.state.error === "Last Name shouldn't be more than 15 characters" ? 'signup__redLabel' : ''}`}>Last Name</div>
      <input type="name" ref="lastName" name="last-name" maxLength="15" onChange={() => { this.resetError()}} className={`contact__firstLastNameInputs floatLeft ${this.state.error === 'Did you forget your add your last name?' || this.state.error === "Last Name shouldn't be more than 15 characters" ? 'signup__passwordRed' : ''}`} />
      </div>

      <br className="clearBoth"/>

      <div className={`login__rightSubtitle ${this.state.error === 'Are you sure your email Address is correct?' || this.state.error === "I'm afraid this email already exists" ? 'signup__redLabel' : ''}`}>Email</div>
      <input type="email" ref="email" name="email" onChange={() => { this.resetError()}} className={`contact__emailInput floatLeft ${this.state.error === 'Are you sure your email Address is correct?' || this.state.error === "I'm afraid this email already exists" ? 'signup__passwordRed' : ''}`} />

      <br className="clearBoth"/>

      <div className="contact__smallHeader">Message</div>
      <hr className="contact__smallHr"/>

      <br className="clearBoth"/>

      <div className={`login__rightSubtitle`}>Header</div>
      <input type="header" ref="header" name="header" onChange={() => { this.resetError()}} className={`contact__headerInput floatLeft`} />

      <br className="clearBoth"/>

      <div className={`login__rightSubtitle`}>Body</div>
      <textarea ref="body" name="body" onChange={this.returnDescriptionCharactersLeft.bind(this)} maxLength='1000' className={`contact__textArea floatLeft`}></textarea>
      <div className="contact__descriptionMessageMaxCharacters">{`${1000 - this.state.descriptionLength} Characters Left`}</div>

      <br className="clearBoth"/>

      <p> (Re-captcha) </p>

      <br className="clearBoth"/>

      <button className="login__loginButton signup__belowSubmitButtonMarginBottom" onClick={() => { this.submitContactForm.bind(this) }}>Submit</button>
      {this.state.showMessage ? <div className="contact__successBox"><div className="contact__successBoxInnerMargins">Sent. You will recieve a response within 24 hours.</div></div> : undefined}
      </form>

      </div>
      }
      <hr className="flex contact__hrBottom" />
        <div className="contactPage__lastDiv floatLeft">Have a burning question?</div><Link to="/faq" className="floatLeft contactPage__firstDiv link">Search our FAQ!</Link>
      <br className="clearBoth"/>

      </div></div></div>

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
})(Contact);
