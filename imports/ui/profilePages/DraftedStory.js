import React from 'react';
import { withTracker } from 'meteor/react-meteor-data';
import { Editor } from '@tinymce/tinymce-react';

import { Stories } from '../../api/stories';

import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';

import createBrowserHistory from 'history/createBrowserHistory';

browserHistory = createBrowserHistory();

let id = browserHistory.location.pathname.slice(9, browserHistory.location.pathname.length)

let story = Stories.find({ _id : id }); // USE THIS TO SEE IF THIS IS A COMPLETELY NEW DRAFT OR NOT

export class DraftedStory extends React.Component {
  render() {
    return (
      <div>
          <Navbar route={'../'}/>
          <h1>This is the createStory page</h1>
          <Editor
            initialValue="<p>This is the initial content of the editor</p>"
            init={{
              plugins: 'link image code',
              toolbar: 'undo redo | bold italic | alignleft aligncenter alignright | code | image',
              menubar: "insert",
            }}
            onChange={this.handleEditorChange}
          />
          <Footer/>
      </div>
    );
  }
}

export default withTracker(() => {
Meteor.subscribe('stories');

return {

};
})(DraftedStory);
