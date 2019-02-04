import React from 'react';
import { withTracker } from 'meteor/react-meteor-data';
import { Stories } from '../../api/stories';
import { Session } from 'meteor/session';

// import { Editor } from '@tinymce/tinymce-react';


// $('textarea').froalaEditor();

import 'froala-editor/js/froala_editor.pkgd.min.js';
import 'froala-editor/css/froala_style.min.css';
import 'froala-editor/css/froala_editor.pkgd.min.css';
import $ from 'jquery';
window.$ = $;

import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';

import {Image, Video, Transformation, CloudinaryContext} from 'cloudinary-react';

import createBrowserHistory from 'history/createBrowserHistory';

browserHistory = createBrowserHistory();

let id = browserHistory.location.pathname.slice(7, browserHistory.location.pathname.length);

Session.set({ storyImageEntered: false });

var myWidget = cloudinary.createUploadWidget({
    cloudName: 'novaterra',
    uploadPreset: 'r4xf9yat', cropping: true }, (error, result) => {
  if (result.info.public_id) {
  let story = Stories.findOne({ _id: id });
  Meteor.call('stories.update', story._id, { mainImage: result.info.public_id });
  console.log('updated', result.info.public_id);
  Session.set({ storyImageEntered: true });
  }
});

// $('.title').froalaEditor({
//   saveInterval: 2500
// });
//
// $('.title').froalaEditor({
//     placeholderText: 'Start typing something...'
//   })
//
// $('#body').froalaEditor({
//   pluginsEnabled: ['codeBeautifier', 'codeView', 'quickInsert',]
// });

import FroalaEditor from 'react-froala-wysiwyg';

// // Require Editor JS files.
// import 'froala-editor/js/froala_editor.pkgd.min.js';
//
// // Require Editor CSS files.
// import 'froala-editor/css/froala_style.min.css';
// import 'froala-editor/css/froala_editor.pkgd.min.css';
//
// // Require Font Awesome.
// import 'font-awesome/css/font-awesome.css';

// import FroalaEditor from 'react-froala-wysiwyg';



// tinymce.init({ selector: #mytextarea })}

// var webpack = require("webpack");
//
// module.exports = {
//   module: {
//     rules: [
//       {
//         test: /\.jsx$/,
//         use: {
//           loader: 'babel-loader',
//           options: {
//             cacheDirectory: true,
//             presets: ['react','es2015', 'stage-2']
//           }
//         }
//       }, {
//         test: /\.css$/,
//         use: [
//           'style-loader',
//           'css-loader'
//         ]
//       },
//       {
//         test: /\.woff(\?v=\d+\.\d+\.\d+)?$/,
//         use: "url-loader?limit=10000&mimetype=application/font-woff"
//       }, {
//         test: /\.woff2(\?v=\d+\.\d+\.\d+)?$/,
//         use: "url-loader?limit=10000&mimetype=application/font-woff"
//       }, {
//         test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
//         use: "url-loader?limit=10000&mimetype=application/octet-stream"
//       }, {
//         test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
//         use: "file-loader"
//       }, {
//         test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
//         use: "url-loader?limit=10000&mimetype=image/svg+xml"
//       }
//     ]
//   },
//   resolve: {
//     modules: ['node_modules']
//   },
//   plugins: [
//     new webpack.ProvidePlugin({
//       $: "jquery",
//       jQuery: "jquery"
//     })
//   ]
// };

export class CreateStoryLayout extends React.Component {
constructor(props) {
super(props);
this.state = {
bodyFeatures: 'normal',
toggleDropDown: 'dropdown-content',
toggleDropDownTags: 'dropdown-contentTags',
tags: Stories.findOne({ _id: props.storyId }).tags,
titleConfig: {
  theme: "custom",
  charCounterMax: 85,
  multiLine: false,
  placeholderText: "short and sweet!",
  quickInsertButtons: ['ul', 'ol'],
  imageAllowedTypes: [''],
  videoAllowedProviders: [''],
  videoAllowedTypes: [''],
  toolbarButtons: ['undo', 'redo', '|', 'italic', 'underline', 'strikeThrough', '|', 'formatOL', 'formatUL'],
  toolbarButtonsMD: ['undo', 'redo', '|', 'bold', 'italic', 'underline', 'strikeThrough', '|', 'formatOL', 'formatUL'],
  toolbarButtonsSM: ['undo', 'redo', '|', 'bold', 'italic', 'underline', 'strikeThrough', '|', 'formatOL', 'formatUL'],
  toolbarButtonsXS: ['undo', 'redo', '|', 'bold', 'italic', 'underline', 'strikeThrough', '|', 'formatOL', 'formatUL'],
},
bodyConfig: {
  // pluginsEnabled: ['quickInsert'],
  placeholderText: "I'm ready when you are!",
  theme: "custom",
  linkList: [
    {
              text: 'NovaTerra',
              href: 'https://www.novaterra.earth',
              target: '_blank'
            },
            {
              text: 'Google',
              href: 'https://google.com',
              target: '_blank'
            },
            {
              text: 'Facebook',
              href: 'https://facebook.com'
            }
  ],
  toolbarButtons: ['fullscreen', '|', 'insertTable', 'fontAwesome', 'emoticons', 'specialCharacters', 'subscript', 'superscript', 'insertHR', 'inlineClass', 'quote', 'insertFile', 'html', '|', 'getPDF', 'print', 'spellChecker', 'help', '|', '-',  'undo', 'redo', '|', 'paragraphFormat', 'fontFamily', 'fontSize', '|', 'color', 'bold', 'italic', 'underline', 'strikeThrough',  '|', 'insertLink', 'video', 'insertImage', '|', 'align', 'lineHeight', 'indent', 'outdent', '|', 'formatOL', 'formatUL'],
  toolbarButtonsMD: ['fullscreen', '|', 'insertTable', 'fontAwesome', 'emoticons', 'specialCharacters', 'subscript', 'superscript', 'insertHR', 'inlineClass', 'quote', 'insertFile', 'html', '|', 'getPDF', 'print', 'spellChecker', 'help', '|', '-', 'undo', 'redo', '|', 'paragraphFormat', 'fontFamily', 'fontSize', '|', 'color', 'bold', 'italic', 'underline', 'strikeThrough', '|', 'insertLink', 'insertVideo', 'insertImage', '|', 'align', 'lineHeight', 'indent', 'outdent', '|', 'formatOL', 'formatUL'],
  toolbarButtonsSM: ['fullscreen', '|', 'insertTable', 'fontAwesome', 'emoticons', 'specialCharacters', 'subscript', 'superscript','insertHR', 'quote', 'insertFile', 'html', '|', 'getPDF', 'spellChecker', 'help', '-', 'undo', 'redo', '|', 'fontFamily', 'fontSize', '|', 'color', 'bold', 'italic', 'underline', 'strikeThrough', '|', 'insertLink', 'insertVideo', 'insertImage', '|', 'align', 'lineHeight', '|', 'formatOL', 'formatUL'],
  toolbarButtonsXS: ['fullscreen', '|', 'insertTable', 'fontAwesome', 'emoticons', 'insertFile', 'html', '|', 'help', '-', 'undo', 'redo', '|', 'fontFamily', 'fontSize', '|', 'color', 'bold', 'italic', '|', 'insertLink', 'insertVideo', 'insertImage', '|', 'formatOL', 'formatUL'],
  imageUploadURL: 'https://api.cloudinary.com/v1_1/novaterra/image/upload',
  imageUploadParams: {
      'api_key': '464976181148953',
      'upload_preset': 'r4xf9yat'
  },
  imageUploadMethod: 'POST',
  events: {
      'froalaEditor.image.uploaded': (e, editor, response) => {
          response = JSON.parse(response);
          editor.image.insert(response.secure_url, true, null, editor.image.get(), null)
          return false
      }
  }
},
bodyFullConfig: {
  // pluginsEnabled: ['quickInsert'],
  placeholderText: "I'm ready when you are!",
  theme: "custom",
  linkList: [
    {
              text: 'NovaTerra',
              href: 'https://www.novaterra.earth',
              target: '_blank'
            },
            {
              text: 'Google',
              href: 'https://google.com',
              target: '_blank'
            },
            {
              text: 'Facebook',
              href: 'https://facebook.com'
            }
  ],
  toolbarButtons: ['fullscreen', '|', 'insertTable', 'fontAwesome', 'emoticons', 'specialCharacters', 'subscript', 'superscript', 'insertHR', 'inlineClass', 'quote', 'insertFile', 'html', '|', 'getPDF', 'print', 'spellChecker', 'help',  'undo', 'redo', '|', 'paragraphFormat', 'fontFamily', 'fontSize', '|', 'color', 'bold', 'italic', 'underline', 'strikeThrough',  '|', 'insertLink', 'video', 'insertImage', '|', 'align', 'lineHeight', 'indent', 'outdent', '|', 'formatOL', 'formatUL'],
  toolbarButtonsMD: ['fullscreen', '|', 'insertTable', 'fontAwesome', 'emoticons', 'specialCharacters', 'subscript', 'superscript', 'insertHR', 'inlineClass', 'quote', 'insertFile', 'html', '|', 'getPDF', 'print', 'spellChecker', 'help', 'undo', 'redo', '|', 'paragraphFormat', 'fontFamily', 'fontSize', '|', 'color', 'bold', 'italic', 'underline', 'strikeThrough', '|', 'insertLink', 'insertVideo', 'insertImage', '|', 'align', 'lineHeight', 'indent', 'outdent', '|', 'formatOL', 'formatUL'],
  toolbarButtonsSM: ['fullscreen', '|', 'insertTable', 'fontAwesome', 'emoticons', 'specialCharacters', 'subscript', 'superscript','insertHR', 'quote', 'insertFile', 'html', '|', 'getPDF', 'spellChecker', 'help', '-', 'undo', 'redo', '|', 'fontFamily', 'fontSize', '|', 'color', 'bold', 'italic', 'underline', 'strikeThrough', '|', 'insertLink', 'insertVideo', 'insertImage', '|', 'align', 'lineHeight', '|', 'formatOL', 'formatUL'],
  toolbarButtonsXS: ['fullscreen', '|', 'insertTable', 'fontAwesome', 'emoticons', 'specialCharacters', 'subscript', 'superscript','insertHR', 'quote', 'insertFile', 'html', '|', 'getPDF', 'spellChecker', 'help', '-', 'undo', 'redo', '|', 'fontFamily', 'fontSize', '|', 'color', 'bold', 'italic', 'underline', 'strikeThrough', '|', 'insertLink', 'insertVideo', 'insertImage', '|', 'align', 'lineHeight', '|', 'formatOL', 'formatUL'],
},
referencesConfig: {
  theme: "custom",
  quickInsertButtons: ['ul', 'ol', 'hr'],
  imageAllowedTypes: [''],
  videoAllowedProviders: [''],
  videoAllowedTypes: [''],
  placeholderText: "did you use any sources?",
  toolbarButtons: ['undo', 'redo', '|', 'bold', 'italic', 'underline', 'strikeThrough', '|', 'subscript', 'superscript', '|', 'formatOL', 'formatUL'],
  toolbarButtonsMD: ['undo', 'redo', '|', 'bold', 'italic', 'underline', 'strikeThrough', '|', 'subscript', 'superscript', '|', 'formatOL', 'formatUL'],
  toolbarButtonsSM: ['undo', 'redo', '|', 'bold', 'italic', 'underline', 'strikeThrough', '|', 'subscript', 'superscript', '|','formatOL', 'formatUL'],
  toolbarButtonsXS: ['undo', 'redo', '|', 'bold', 'italic', 'underline', 'strikeThrough', '|', 'formatOL', 'formatUL'],
},
};
this.setWrapperRef = this.setWrapperRef.bind(this);
this.setWrapperRef2 = this.setWrapperRef2.bind(this);
this.setWrapperRef3 = this.setWrapperRef3.bind(this);
this.setWrapperRef4 = this.setWrapperRef4.bind(this);
this.handleClickOutside = this.handleClickOutside.bind(this);
this.handleTitleChange = this.handleTitleChange.bind(this);
this.handleBodyChange = this.handleBodyChange.bind(this);
this.handleReferencesChange = this.handleReferencesChange.bind(this);
}
setWrapperRef(node) {
    this.wrapperRef = node;
}
setWrapperRef2(node) {
    this.wrapperRef2 = node;
}
setWrapperRef3(node) {
    this.wrapperRef3 = node;
}
setWrapperRef4(node) {
    this.wrapperRef4 = node;
}
componentDidMount() {
  document.addEventListener('mousedown', this.handleClickOutside);
  this.setState({ imageReady: !!Stories.findOne({ _id: this.props.storyId }).mainImage  });

  Tracker.autorun(() => {
    let imageExists = Stories.findOne({ _id: this.props.storyId }).mainImage;
      Session.set('storyImageEntered', !!imageExists);
  });
  this.setTagsUp();

  this.setState({ title: Stories.findOne({ _id: this.props.storyId }).title });
  this.setState({ body: Stories.findOne({ _id: this.props.storyId }).body });
  this.setState({ references: Stories.findOne({ _id: this.props.storyId }).references });

}
componentWillUnmount() {
  document.removeEventListener('mousedown', this.handleClickOutside);
}
handleClickOutside(e) {
    if (this.wrapperRef && this.wrapperRef2 && !this.wrapperRef.contains(e.target) && !this.wrapperRef2.contains(e.target)) {
      this.setState({ toggleDropDown: 'dropdown-content' });
    }
    else if (this.wrapperRef3 && this.wrapperRef4 && !this.wrapperRef3.contains(e.target) && !this.wrapperRef4.contains(e.target)) {
      this.setState({ toggleDropDownTags: 'dropdown-contentTags' });
    }
}
toggleDropDown() {
if (this.state.toggleDropDown === 'dropdown-content') {
this.setState({ 'toggleDropDown': 'dropdown-content1' });
} else {
this.setState({ toggleDropDown: 'dropdown-content' });
}
}
toggleDropDownTags() {
if (this.state.toggleDropDownTags === 'dropdown-contentTags') {
this.setState({ toggleDropDownTags: 'dropdown-content1Tags' });
} else {
this.setState({ toggleDropDownTags: 'dropdown-contentTags' });
}
}
findStory() {
  return Stories.findOne({ _id: this.props.storyId });
}
returnBodyMessage() {
  let width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
  console.log('width', width);

  if (width < 767) {
    return <div><p className="editor__bodyMessage">Want fully featured desktop editor?</p><p className="link" onClick={() => this.setState({ bodyFeatures: 'desktop' })}>Click here</p></div>;
}
}
changeSortOptions(category) {
  console.log(this.findStory().category);
  Meteor.call('stories.update', this.props.storyId, { category });
  setTimeout(
    function() {
    this.setState({ category: this.findStory().category });
    }
    .bind(this),
    5
  );
}
setTagsUp() {
  this.setState({ tags: Stories.findOne({ _id: this.props.storyId }).tags });
}
changeTagSortOptions(tag) {
let newTags;
let includes = false;

Stories.findOne({ _id: this.props.storyId }).tags.map((tagName) => {
if (tagName === tag) {
  includes = true;
}
});

  if (includes) {
    newTags = Stories.findOne({ _id: this.props.storyId }).tags;
    let index = newTags.indexOf(tag);
    newTags.splice(index, 1);

    console.log('newTags', newTags);

    Meteor.call('stories.update', this.props.storyId, { tags: newTags });

  } else {
    newTags = Stories.findOne({ _id: this.props.storyId }).tags;
    newTags.push(tag);

    console.log('newTags', newTags);

    Meteor.call('stories.update', this.props.storyId, { tags: newTags });
  }

  setTimeout(
    function() {
    this.setState({ tags: newTags });
    }
    .bind(this),
    5
  );

  // Meteor.call('stories.update', this.props.storyId, { tag });
}
returnCategoryIcon() {
  let category;
  if (this.state.category) {
    console.log('chose category');
    category = this.state.category;
  } else {
    category = this.findStory().category;
  }
  if (category === 'Economy') {
    return 'yen-sign';
  } else if (category === 'Environment') {
    return 'leaf';
  } else if (category === 'Future') {
    return 'dna';
  } else if (category === 'Technology') {
    return 'microchip';
  } else if (category === 'Health') {
    return 'heartbeat';
  } else if (category === 'Now') {
    return 'newspaper';
  }
}
returnTagIcons() {
let returnArray = [];

this.state.tags.map((tag) => {

if (tag === 'Energy') {

returnArray.push(<div className="tags__sortOutsideSpacing"><FontAwesomeIcon icon={['fas', `solar-panel`]} className="sortProfile__mainIcon"/><div className="sortProfile__mainText">Energy</div></div>);

} else if (tag === 'Climate Change') {

returnArray.push(<div className="tags__sortOutsideSpacing"><FontAwesomeIcon icon={['fas', `thermometer-full`]} className="sortProfile__mainIcon"/><div className="sortProfile__mainText">Climate Change</div></div>);

} else if (tag === 'Innovation') {

returnArray.push(<div className="tags__sortOutsideSpacing"><FontAwesomeIcon icon={['fas', `satellite`]} className="sortProfile__mainIcon"/><div className="sortProfile__mainText">Innovation</div></div>);

} else if (tag === 'Transport') {

  returnArray.push(<div className="tags__sortOutsideSpacing"><FontAwesomeIcon icon={['fas', `car`]} className="sortProfile__mainIcon"/><div className="sortProfile__mainText">Transport</div></div>);

} else if (tag === 'Biodiversity') {

  returnArray.push(<div className="tags__sortOutsideSpacing"><FontAwesomeIcon icon={['fas', `paw`]} className="sortProfile__mainIcon"/><div className="sortProfile__mainText">Biodiversity</div></div>);

} else if (tag === 'Cities') {

  returnArray.push(<div className="tags__sortOutsideSpacing"><FontAwesomeIcon icon={['fas', `city`]} className="sortProfile__mainIcon"/><div className="sortProfile__mainText">Cities</div></div>);

} else if (tag === 'Food') {

  returnArray.push(<div className="tags__sortOutsideSpacing"><FontAwesomeIcon icon={['fas', `utensils`]} className="sortProfile__mainIcon"/><div className="sortProfile__mainText">Food</div></div>);

} else if (tag === 'Science') {

  returnArray.push(<div className="tags__sortOutsideSpacing"><FontAwesomeIcon icon={['fas', `flask`]} className="sortProfile__mainIcon"/><div className="sortProfile__mainText">Science</div></div>);

} else if (tag === 'Waste') {

  returnArray.push(<div className="tags__sortOutsideSpacing"><FontAwesomeIcon icon={['fas', `trash-alt`]} className="sortProfile__mainIcon"/><div className="sortProfile__mainText">Waste</div></div>);

} else if (tag === 'Self') {

  returnArray.push(<div className="tags__sortOutsideSpacing"><FontAwesomeIcon icon={['fas', `male`]} className="sortProfile__mainIcon"/><div className="sortProfile__mainText">Self</div></div>);

} else if (tag === 'Research') {

  returnArray.push(<div className="tags__sortOutsideSpacing"><FontAwesomeIcon icon={['fas', `brain`]} className="sortProfile__mainIcon"/><div className="sortProfile__mainText">Research</div></div>);

} else if (tag === 'Politics') {

  returnArray.push(<div className="tags__sortOutsideSpacing"><FontAwesomeIcon icon={['fas', `vote-yea`]} className="sortProfile__mainIcon"/><div className="sortProfile__mainText">Politics</div></div>);

} else if (tag === 'Personal Finance') {

  returnArray.push(<div className="tags__sortOutsideSpacing"><FontAwesomeIcon icon={['fas', `money-bill-wave`]} className="sortProfile__mainIcon"/><div className="sortProfile__mainText">Personal Finance</div></div>);

} else if (tag === 'Work') {

  returnArray.push(<div className="tags__sortOutsideSpacing"><FontAwesomeIcon icon={['fas', `briefcase`]} className="sortProfile__mainIcon"/><div className="sortProfile__mainText">Work</div></div>);

} else if (tag === 'Equality') {

  returnArray.push(<div className="tags__sortOutsideSpacing"><FontAwesomeIcon icon={['fas', `equals`]} className="sortProfile__mainIcon"/><div className="sortProfile__mainText">Equality</div></div>);

}

});

if (this.state.tags.length === 0) {
  returnArray.push(<div className="tagsHashtag__sortOutsideSpacing"><FontAwesomeIcon icon={['fas', `hashtag`]} className="sortProfile__mainIcon"/><div className="sortProfile__mainTextHashtag">Tags</div></div>);
}

return returnArray;

}
setImageBelow(e) {

  var image = document.getElementById('imagePreview');
  image.src = URL.createObjectURL(e.target.files[0]);
  this.setState({ storyMainImage: true });

}
findImage() {
return Stories.findOne({ _id: this.props.storyId }).mainImage;
}
doThis() {
  myWidget.open();
}
storyHasPhoto() {
let story = Stories.findOne({ _id: this.props.storyId });
  if (story.mainImage.length > 0) {
    return true;
  }
  return false;
}
findStoryPhoto() {
  let story = Stories.findOne({ _id: this.props.storyId });
  return story.mainImage;
}
removeImage() {
  Meteor.call('stories.update', this.props.storyId, { mainImage: '' });
  Session.set('storyImageEntered', false);
}
includesTag(tag) {

let includes = false;

this.state.tags.map((tagName) => {
if (tagName === tag) {
  includes = true;
}
});

console.log(tag, includes);

return includes;
}
getBody() {
  let story = Stories.findOne({ _id: this.props.storyId });
  return story.body;
}
getTitle() {
  let story = Stories.findOne({ _id: this.props.storyId });
  return story.title;
}
getReferences() {
  let story = Stories.findOne({ _id: this.props.storyId });
  return story.references;
}
handleBodyChange(model) {
  this.setState({ body: model });

  let minRead = Math.round(model.length / 2605);

  if (minRead === 0 && model.length !== 0) {
    minRead = 1;
  }

  let plainText = model.replace(/(<([^>]+)>)/g, "");
  // plainText = plainText.replace(/&nbsp;/g, ' ');
  // plainText = plainText.replace(/&#39;/g, "'");

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
        plainText = plainText.replace(new RegExp('&'+entities[i][0]+';', 'g'), entities[i][1]);
    }

  plainText = plainText.slice(0,65);


  console.log('minread', minRead);
  Meteor.call('stories.update', this.props.storyId, { body: model, minRead, description: plainText });
  this.setState({ getBodySaved: 'Saving...' });

  setTimeout(
    function() {
    this.setState({ getBodySaved: 'Changes Saved' });
    }
    .bind(this),
    1000
  );

}
handleTitleChange(model) {
  this.setState({ title: model });

  let plainText = model.replace(/(<([^>]+)>)/g, "");

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
        plainText = plainText.replace(new RegExp('&'+entities[i][0]+';', 'g'), entities[i][1]);
    }

  Meteor.call('stories.update', this.props.storyId, { title: plainText });
  this.setState({ getTitleSaved: 'Saving...' });

  setTimeout(
    function() {
    this.setState({ getTitleSaved: 'Changes Saved' });
    }
    .bind(this),
    1000
  );
}
handleReferencesChange(model) {
  this.setState({ references: model });
  Meteor.call('stories.update', this.props.storyId, { references: model });
  this.setState({ getReferencesSaved: 'Saving...' });

  setTimeout(
    function() {
    this.setState({ getReferencesSaved: 'Changes Saved' });
    }
    .bind(this),
    1000
  );

}
render() {
    return (
      <div>
      <link rel="manifest" href="%PUBLIC_URL%/manifest.json"/>
    <link rel="shortcut icon" href="%PUBLIC_URL%/favicon.ico"/>
    <link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet" integrity="sha384-wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN"
 crossorigin="anonymous"/>

      <div className="editor__marginLeft">

      <div className="profile__createStoryHeader">Category</div>

      <div className="createStory__sortMarginLeft">
        <div className="dropdown">
          <div ref={this.setWrapperRef} onClick={() => this.toggleDropDown()} className="profileEdit__sortByButton dropbtn">{!this.findStory().category ? <div className="profileMainSortDiv"><FontAwesomeIcon icon={['fas', 'compass']} className="sortProfile__mainIcon"/><div className="sortProfile__mainText">Category</div></div> : <div className="profileMainSortDiv"><FontAwesomeIcon icon={['fas', `${this.returnCategoryIcon()}`]} className="sortProfile__mainIcon"/><div className="sortProfile__mainText">{this.state.category || this.findStory().category}</div></div>}  </div>
          <div ref={this.setWrapperRef2} className={this.state.toggleDropDown}>
          <div className="dropdown-content__innerMargins">
            <div onClick={() => { this.changeSortOptions('Economy') }} className="sort__popularContainer"><FontAwesomeIcon icon={['fas', 'yen-sign']} className={`${this.findStory().category === 'Economy' || this.state.category === 'Economy' ? 'sort__greenIconPop' : 'sort__popularIcon'}`}  /><div className={`${this.findStory().category === 'Economy' || this.state.category === 'Economy' ? 'sort__greenText' : 'sort__popularText'}`}>Economy</div></div>
            <div className="clearBoth"></div>
            <div onClick={() => { this.changeSortOptions('Future') }} className="sort__oldestContainer"><FontAwesomeIcon icon={['fas', 'dna']} className={`${this.findStory().category === 'Future' || this.state.category === 'Future' ? 'sort__greenIcon' : 'sort__oldestIcon'}`} /><div className={`${this.findStory().category === 'Future' || this.state.category === 'Future' ? 'sort__greenText' : 'sort__oldestText'}`}>Future</div></div>
            <div className="clearBoth"></div>
            <div onClick={() => { this.changeSortOptions('Environment') }} className="sort__newestContainer"><FontAwesomeIcon icon={['fas', 'leaf']} className={`${this.findStory().category === 'Environment' || this.state.category === 'Environment' ? 'sort__greenIcon' : 'sort__newestIcon'}`} /><div className={`${this.findStory().category === 'Environment' || this.state.category === 'Environment' ? 'sort__greenText' : 'sort__newestText'}`}>Environment</div></div>
            <div className="clearBoth"></div>
            <div onClick={() => { this.changeSortOptions('Technology') }} className="sort__oldestContainer"><FontAwesomeIcon icon={['fas', 'microchip']} className={`${this.findStory().category === 'Technology' || this.state.category === 'Technology' ? 'sort__greenIcon' : 'sort__oldestIcon'}`} /><div className={`${this.findStory().category === 'Technology' || this.state.category === 'Technology' ? 'sort__greenText' : 'sort__oldestText'}`}>Technology</div></div>
            <div className="clearBoth"></div>
            <div onClick={() => { this.changeSortOptions('Health') }} className="sort__oldestContainer"><FontAwesomeIcon icon={['fas', 'heartbeat']} className={`${this.findStory().category === 'Health' || this.state.category === 'Health' ? 'sort__greenIcon' : 'sort__oldestIcon'}`} /><div className={`${this.findStory().category === 'Health' || this.state.category === 'Health' ? 'sort__greenText' : 'sort__oldestText'}`}>Health</div></div>
            <div className="clearBoth"></div>
            <div onClick={() => { this.changeSortOptions('Now') }} className="sort__oldestContainer"><FontAwesomeIcon icon={['fas', 'newspaper']} className={`${this.findStory().category === 'Now' || this.state.category === 'Now' ? 'sort__greenIcon' : 'sort__oldestIcon'}`} /><div className={`${this.findStory().category === 'Now' || this.state.category === 'Now' ? 'sort__greenText' : 'sort__oldestText'}`}>Now</div></div>
          </div></div>
        </div>
      </div>

      <div className="profile__createStoryHeader">Tags</div>

      <div className="createStory__sortMarginLeft">
        <div className="dropdown">
          <div ref={this.setWrapperRef3} onClick={() => this.toggleDropDownTags()} className="profileEdit__tagsByButton dropbtn">{!this.state.tags.length === 0 ? <div className="profileMainSortDivTags"><FontAwesomeIcon icon={['fas', 'hashtag']} className="sortProfile__mainIcon"/><div className="sortProfile__mainText">Tags</div></div> : <div className="profileMainSortDiv">{this.returnTagIcons()}</div>}</div>
          <div ref={this.setWrapperRef4} className={this.state.toggleDropDownTags}>
          <div className="dropdown-content__innerMargins">

            <div className="floatLeft dropDownTagsMarginRight">
            <div onClick={() => { this.changeTagSortOptions('Energy') }} className="sort__popularContainer"><FontAwesomeIcon icon={['fas', 'solar-panel']} className={`${this.includesTag('Energy') ? 'tags__greenIcon' : 'tags__newestIcon'}`}  /><div className={`${this.includesTag('Energy') ? 'tags__greenText' : 'tags__newestText'}`}>Energy</div></div>
            <div className="clearBoth"></div>
            <div onClick={() => { this.changeTagSortOptions('Climate Change') }} className="sort__oldestContainer"><FontAwesomeIcon icon={['fas', 'thermometer-full']} className={`${this.includesTag('Climate Change') ? 'tags__greenIcon' : 'tags__newestIcon'}`} /><div className={this.includesTag('Climate Change') ? 'tags__greenIcon' : 'tags__newestIcon'}>Climate Change</div></div>
            <div className="clearBoth"></div>
            <div onClick={() => { this.changeTagSortOptions('Innovation') }} className="sort__newestContainer"><FontAwesomeIcon icon={['fas', 'satellite']} className={`${this.includesTag('Innovation') ? 'tags__greenIcon' : 'tags__newestIcon'}`} /><div className={`${this.includesTag('Innovation') ? 'tags__greenText' : 'tags__newestText'}`}>Innovation</div></div>
            <div className="clearBoth"></div>
            <div onClick={() => { this.changeTagSortOptions('Transport') }} className="sort__oldestContainer"><FontAwesomeIcon icon={['fas', 'car']} className={`${this.includesTag('Transport') ? 'tags__greenIcon' : 'tags__newestIcon'}`} /><div className={`${this.includesTag('Transport') ? 'tags__greenText' : 'tags__newestText'}`}>Transport</div></div>
            <div className="clearBoth"></div>
            <div onClick={() => { this.changeTagSortOptions('Biodiversity') }} className="sort__oldestContainer"><FontAwesomeIcon icon={['fas', 'paw']} className={`${this.includesTag('Biodiversity') ? 'tags__greenIcon' : 'tags__newestIcon'}`} /><div className={`${this.includesTag('Biodiversity') ? 'tags__greenText' : 'tags__newestText'}`}>Biodiversity</div></div>
            <div className="clearBoth"></div>
            <div onClick={() => { this.changeTagSortOptions('Cities') }} className="sort__oldestContainer"><FontAwesomeIcon icon={['fas', 'city']} className={`${this.includesTag('Cities') ? 'tags__greenIcon' : 'tags__newestIcon'}`} /><div className={`${this.includesTag('Cities') ? 'tags__greenText' : 'tags__newestText'}`}>Cities</div></div>
            <div className="clearBoth"></div>
            <div onClick={() => { this.changeTagSortOptions('Food') }} className="sort__oldestContainer"><FontAwesomeIcon icon={['fas', 'utensils']} className={`${this.includesTag('Food') ? 'tags__greenIcon' : 'tags__newestIcon'}`} /><div className={`${this.includesTag('Food') ? 'tags__greenText' : 'tags__newestText'}`}>Food</div></div>
            <div className="clearBoth"></div>
            <div onClick={() => { this.changeTagSortOptions('Science') }} className="sort__popularContainer"><FontAwesomeIcon icon={['fas', 'flask']} className={`${this.includesTag('Science') ? 'tags__greenIcon' : 'tags__newestIcon'}`}  /><div className={`${this.includesTag('Science') ? 'tags__greenText' : 'tags__newestText'}`}>Science</div></div>
            </div>

            <div className="floatLeft">
            <div onClick={() => { this.changeTagSortOptions('Waste') }} className="sort__oldestContainer"><FontAwesomeIcon icon={['fas', 'trash-alt']} className={`${this.includesTag('Waste') ? 'tags__greenIcon' : 'tags__newestIcon'}`} /><div className={`${this.includesTag('Waste') ? 'tags__greenText' : 'tags__newestText'}`}>Waste</div></div>
            <div className="clearBoth"></div>
            <div onClick={() => { this.changeTagSortOptions('Self') }} className="sort__newestContainer"><FontAwesomeIcon icon={['fas', 'male']} className={`${this.includesTag('Self') ? 'tags__greenIconSelf' : 'tags__newestIconSelf'}`} /><div className={`${this.includesTag('Self') ? 'tags__greenText' : 'tags__newestText'}`}>Self</div></div>
            <div className="clearBoth"></div>
            <div onClick={() => { this.changeTagSortOptions('Research') }} className="sort__oldestContainer"><FontAwesomeIcon icon={['fas', 'brain']} className={`${this.includesTag('Research') ? 'tags__greenIcon' : 'tags__newestIcon'}`} /><div className={`${this.includesTag('Research') ? 'tags__greenText' : 'tags__newestText'}`}>Research</div></div>
            <div className="clearBoth"></div>
            <div onClick={() => { this.changeTagSortOptions('Politics') }} className="sort__oldestContainer"><FontAwesomeIcon icon={['fas', 'vote-yea']} className={`${this.includesTag('Politics') ? 'tags__greenIcon' : 'tags__newestIcon'}`} /><div className={`${this.includesTag('Politics') ? 'tags__greenText' : 'tags__newestText'}`}>Politics</div></div>
            <div className="clearBoth"></div>
            <div onClick={() => { this.changeTagSortOptions('Personal Finance') }} className="sort__oldestContainer"><FontAwesomeIcon icon={['fas', 'money-bill-wave']} className={`${this.includesTag('Personal Finance') ? 'tags__greenIcon' : 'tags__newestIcon'}`} /><div className={`${this.includesTag('Personal Finance') ? 'tags__greenText' : 'tags__newestText'}`}>Personal Finance</div></div>
            <div className="clearBoth"></div>
            <div onClick={() => { this.changeTagSortOptions('Work') }} className="sort__oldestContainer"><FontAwesomeIcon icon={['fas', 'briefcase']} className={`${this.includesTag('Work') ? 'tags__greenIcon' : 'tags__newestIcon'}`} /><div className={`${this.includesTag('Work') ? 'tags__greenText' : 'tags__newestText'}`}>Work</div></div>
            <div className="clearBoth"></div>
            <div onClick={() => { this.changeTagSortOptions('Equality') }} className="sort__oldestContainer"><FontAwesomeIcon icon={['fas', 'equals']} className={`${this.includesTag('Equality') ? 'tags__greenIcon' : 'tags__newestIcon'}`} /><div className={`${this.includesTag('Equality') ? 'tags__greenText' : 'tags__newestText'}`}>Equality</div></div>
            </div>

          </div></div>
        </div>
      </div>

      <p className="createStory__imageInfo">P.S: Pick as many as you want!</p>

      <div className="profile__createStoryHeader">Image</div>
      <div onClick={() => this.removeImage()} className={`createStory__removeImageButton ${Session.get('storyImageEntered') ? '' : 'createStory__lowOpacity'}`}>Remove Image</div> <div onClick={() => this.doThis()} className="createStory__addImageButton">Upload Image</div>
      {/* <input type="file" label="Upload" id="uplodadStoryImage" ref="uploadStoryImage" onChange={this.setImageBelow.bind(this)} className="createStory__fileName" accept="image/*"/> */}
      <div className="clearBoth"></div>
      {Session.get('storyImageEntered') ? <Image className="createStory__actualImageUploadedShadow" cloud_name='novaterra' publicId={this.findStoryPhoto()}><Transformation crop="scale" /></Image> : <img id="imagePreview" className="createStory__actualImageUploaded"/>}



      <div className="clearBoth"></div>

      <p className="createStory__imageInfo">P.S: This will not work with file other than images</p>

      {/* {this.state.storyMainImage ? <button onClick={() => this.uploadImage()} className="createStory__useButton">Use</button> : <button className="createStory__useButtonDim">Use</button>} */}

      <div className="profile__createStoryHeader">Title</div>
      <FroalaEditor model={this.state.title} onModelChange={this.handleTitleChange} className="title" config={this.state.titleConfig} />

      <div className="createStory__changesSaved">{this.state.getTitleSaved}</div>

      <div className="profile__createStoryHeader">Body</div>
      <FroalaEditor model={this.state.body} onModelChange={this.handleBodyChange} className="body" config={this.state.bodyConfig} />

      <div className="createStory__changesSaved">{this.state.getBodySaved}</div>

      {}

      <div className="clearBoth"></div>

    <div className="profile__optionalPart">(Optional)</div><div className="profile__createStoryHeaderNextOptional">References</div>
      <FroalaEditor model={this.state.references} onModelChange={this.handleReferencesChange} config={this.state.referencesConfig} />

      <div className="createStory__changesSaved">{this.state.getReferencesSaved}</div>

      </div>
      {/*
      <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.4.0/css/font-awesome.min.css" rel="stylesheet" type="text/css" />
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/codemirror/5.25.0/codemirror.min.css">

    <!-- Include Editor style. -->
    <link href="https://cdn.jsdelivr.net/npm/froala-editor@2.9.1/css/froala_editor.pkgd.min.css" rel="stylesheet" type="text/css" />
    <link href="https://cdn.jsdelivr.net/npm/froala-editor@2.9.1/css/froala_style.min.css" rel="stylesheet" type="text/css" />

    <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/jquery/1.11.0/jquery.min.js"></script>
    <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/codemirror/5.25.0/codemirror.min.js"></script>
    <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/codemirror/5.25.0/mode/xml/xml.min.js"></script>

    <!-- Include Editor JS files. -->
    <script type="text/javascript" src="https://cdn.jsdelivr.net/npm/froala-editor@2.9.1/js/froala_editor.pkgd.min.js"></script>
    */}

        {/*  <script src='https://cloud.tinymce.com/stable/tinymce.min.js?apiKey=nqy7617sj6ipnugtkoyg52ulemmoy27m4pa85vtg24ykowd7'></script>
            <textarea id="mytextarea">Hello, World!</textarea>

            */}

        {/*}<FroalaEditor
        tag='textarea'
        />*/}
        {/* }<Editor apiKey='nqy7617sj6ipnugtkoyg52ulemmoy27m4pa85vtg24ykowd7' cloudChannel='dev'
        initialValue=""
        init={{
          plugins: 'autoresize autosave fullpage textcolor colorpicker link image code help searchreplace table lists advlist media preview anchor print codesample imagetools mediaembed pagebreak hr charmap emoticons',
          toolbar: 'undo redo | formatselect | bold italic underline forecolor backcolor | alignleft aligncenter alignright | bullist numlist outdent indent | link image code | ',
          selector: "textarea",
          min_height : 2000,
          min_height : 1000,
          autoresize_min_height: 530,
          autoresize_top_margin: 150,
          preview_styles: 'font-size color',
          resize:false,
          mobile: {
            theme: 'mobile',
              plugins: 'autoresize autosave fullpage textcolor colorpicker link image code help searchreplace table lists advlist media preview anchor print codesample imagetools mediaembed pagebreak hr',
          }
        }}
        onChange={() => console.log('changed')}
      /> */}

      </div>
    );
  }
}

export default withTracker(() => {
return {

};
})(CreateStoryLayout);
