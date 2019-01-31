import { Meteor } from 'meteor/meteor';
import React from 'react';
import Modal from 'react-modal';
import { Session } from 'meteor/session';

import {Image, Video, Transformation, CloudinaryContext} from 'cloudinary-react';
// import cloudinary from 'cloudinary';
// import axios from 'axios';

Modal.setAppElement('#app');

// const CLOUDINARY_UPLOAD_PRESET = 'r4xf9yat';
// const CLOUDINARY_UPLOAD_URL = 'cloudinary://464976181148953:EVG8kQZtN3dLA9waIKSRAue1Jzk@novaterra';

// import Dropzone from 'react-dropzone';
// import request from 'superagent';

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
    isOpen: false,
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
changeOpen() {
  this.setState({ isOpen: true });
  this.setState({ addImage: false });
}
setImageBelow(e) {

  var image = document.getElementById('imagePreview');
  // image.background = URL.createObjectURL(e.target.files[0]);
  this.setState({ imageExists: URL.createObjectURL(e.target.files[0]) });
  this.setState({ storyMainImage: true });

}
cancelImageUpload() {
  this.setState({ addImage: false });
  this.setState({ imageExists: '' });
}
onImageDrop(files) {
    this.setState({
      uploadedFile: files[0]
    });
this.handleImageUpload(files[0]);
}
// handleImageUpload(file) {
//     let upload = request.post(CLOUDINARY_UPLOAD_URL)
//                         .field('upload_preset', CLOUDINARY_UPLOAD_PRESET)
//                         .field('file', file);
//
//     upload.end((err, response) => {
//       if (err) {
//         console.error(err);
// }
// if (response.body.secure_url !== '') {
//     this.setState({
//       uploadedFileCloudinaryUrl: response.body.secure_url
//       });
//     }
//   });
// }
// saveImage() {
// this.setState({ addImage: true });
//
// if (this.state.imageExists) {
//
// window.cloudinary.v2.uploader.upload(`${this.state.imageExists}`,
//   { folder: "my_folder/my_sub_folder/",
//     public_id: "my_name" },
//   function(error, result) {console.log(result, error); });
// }
// }
componentDidMount() {

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
    return true;
  }
  return false;
}
findUserPhoto() {
  let user = Meteor.users.findOne({ _id: Meteor.userId() });
  return user.profilePhoto;
}
render () {
  return (
    <div>
    {this.findUserPhoto() ? <div><div className="profileModal__profileModalBehindCircleTRY"></div><Image className="mpl__topImage" onClick={() => this.changeOpen()} cloud_name='novaterra' publicId={this.findUserPhoto()}><Transformation crop="thumb" /></Image></div> : <img src={`${this.props.route}images/noImage.png`} onClick={() => this.changeOpen()} className="mpl__topImage"/>}
    <Modal isOpen={this.state.isOpen}
           contentLabel='Change Profile Image'
           onRequestClose={this.handleModalClose.bind(this)}
           className="boxed-view__box"
           overlayClassName="boxed-view boxed-view--modal">
      <h1 className="profileModal__imageModalTitle">Change Profile Image</h1>
      <hr className="profileModal__hr"/>

      <div className="profileModal__centeringMainContent">

      <div className="clearBoth"></div>

      {this.userHasPhoto() || Session.get('imageEntered') ? <div><div className="profileModal__profileModalBehindCircle"></div><Image className="profileModal__mainImage" cloud_name='novaterra' publicId={this.findUserPhoto()}><Transformation crop="scale" /></Image></div> : <div className="profileModal__mainImageNormal" style={{  backgroundImage: "url(" + `${this.props.imageSrc}` + ")" }} id="imagePreview"></div>}
      <div className={`profileModal__addButton`} onClick={() => this.doThis()}>Add</div>
      <div className="profileModal__removeButton" onClick={() => this.removeProfilePhoto()}>Remove</div>
      <div className="profileModal__cancelButton" onClick={this.handleModalClose.bind(this)}>Cancel</div>

      {this.state.error ? <p>{this.state.error}</p> : undefined}

      </div>
    </Modal>
    </div>
  );
}
}
