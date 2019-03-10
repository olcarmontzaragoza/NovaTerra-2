import { Meteor } from 'meteor/meteor';
import React from 'react';
import Modal from 'react-modal';
import { Session } from 'meteor/session';

import {Image, Video, Transformation, CloudinaryContext} from 'cloudinary-react';

Modal.setAppElement('#app');

Session.set({ imageEntered: false });

var myWidget = cloudinary.createUploadWidget({
  cloudName: 'novaterra',
  uploadPreset: 'r4xf9yat', cropping: true }, (error, result) => {
if (result.info.public_id) {
Meteor.call('users.update', Meteor.userId(), { profilePhoto: result.info.public_id });
Session.get({ imageEntered: true });
}
});

export default class AddLink extends React.Component {
constructor(props) {
  super(props);
  this.state = {
    isOpen: false
  };
}
onSubmit (e) {
    const { url } = this.state;

    e.preventDefault();

    Meteor.call('links.insert', url, (err, res) => {
       if (!err) {
          this.handleModalClose();
       } else {
         this.setState({ error: err.reason });
       }
    });
}
onChange(e) {
  this.setState({
    url: e.target.value
  });
}
handleModalClose() {
this.setState({ isOpen: false,
                url: '',
                error: ''
                });
}
removeProfilePhoto() {
  Meteor.call('users.update', Meteor.userId(), { profilePhoto: '' });
}
doThis() {
  myWidget.open();
}
userHasPhoto() {
let user = Meteor.users.findOne({ _id: Meteor.userId() });
  if (user.profilePhoto) {
  if (user.profilePhoto.length > 0) {
    return true;
  }
}
  return false;
}
findUserPhoto() {
  let user = Meteor.users.findOne({ _id: Meteor.userId() });
  return user.profilePhoto;
}
changeOpen() {
  this.setState({ isOpen: true });
  this.setState({ addImage: false });
}
render () {
  return (
    <div>
    {this.findUserPhoto() ? <div><div className="profileModal__profileModalBehindCircleTRYEdit1"></div><Image className="mpl__topImageEditProfilee" onClick={() => this.changeOpen()} cloud_name='novaterra' publicId={this.findUserPhoto()}><Transformation crop="thumb" /></Image></div> : <img src={`${this.props.route}images/noImage.png`} onClick={() => this.changeOpen()} className="mpl__topImageEditProfilee"/>}
    <div className="clearBoth"></div>

    <div onClick={() => this.changeOpen()}className="editProfile__changeProfilePicture">Change Profile Picture</div>

    <Modal isOpen={this.state.isOpen}
           contentLabel='Change Profile Image'
           onRequestClose={this.handleModalClose.bind(this)}
           className="boxed-view__boxPro"
           overlayClassName="boxed-viewPro boxed-view--modalPro">
      <h1 className="profileModal__imageModalTitle">Change Profile Image</h1>
      <hr className="profileModal__hr"/>

      <div className="profileModal__centeringMainContent">

      <div className="clearBoth"></div>

      {this.userHasPhoto() || Session.get('imageEntered') ? <div><div className="profileModal__profileModalBehindCircle"></div><Image className="profileModal__mainImage" cloud_name='novaterra' publicId={this.findUserPhoto()}><Transformation crop="scale" /></Image></div> : <div className="profileModal__mainImageNormal" style={{  backgroundImage: "url(" + `${this.props.imageSrc}` + ")" }} id="imagePreview"></div>}
      <div className="profileModal__bottomButtonsMobile">
      <div className={`profileModal__addButton`} onClick={() => this.doThis()}>Add</div>
      <div className="profileModal__removeButton" onClick={() => this.removeProfilePhoto()}>Remove</div>
      <div className="profileModal__cancelButton" onClick={this.handleModalClose.bind(this)}>Cancel</div>
      </div>
      <div className="profileModal__bottomButtonsMobileHeight"></div>

      {this.state.error ? <p>{this.state.error}</p> : undefined}

      </div>
    </Modal>
    </div>
  );
}
}
