import React from 'react';
import ReactDOM from 'react-dom'
import { withTracker } from 'meteor/react-meteor-data';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import { Session } from 'meteor/session';
import SearchInput, {createFilter} from 'react-search-input';
import MessageTooltipClick from './Components/Tooltips/MessageTooltipClick';
import SearchMessageTooltipClick from './Components/Tooltips/SearchTooltipClick';

import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { far } from '@fortawesome/free-regular-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';

library.add(fas);
library.add(far);

import StoryElement from './Components/Search/StoryElement';
import CategoryElement from './Components/Search/CategoryElement';
import CreatorElement from './Components/Search/CreatorElement';
import TagElement from './Components/Search/TagElement';
import FAQElement from './Components/Search/FAQElement';
import PopularResults from './Components/Search/PopularResults';

import { Stories } from '../api/stories';
import { Tags } from '../api/tags';
import { Categories } from '../api/categories';
import { Faq } from '../api/faq';

Meteor.subscribe('allUsers');

const KEYS_TO_FILTERS = ['name', 'username', 'title', 'description', 'body', 'category', 'tags'];

export const checkChange = (changeCurrentSearch) => {
    const search = (
     <div><p>it worked!</p></div>
   );
   return search;
   // const node = React.findDOMNode()
   // node.appendChild(search);
  }

Session.set({ searching: false });

export class Search extends React.Component {
constructor(props) {
super(props);
this.state = {
searchValue: Session.get('searchValue'),
searchTerm: Session.get('searchValue'),
storiesType: true,
creatorsType: true,
categoriesType: true,
tagsType: true,
// faqType: true,
searchResults: 'relevance',
readTime: 'All',
dropDown: false,
results: [],
};
this.searchUpdated = this.searchUpdated.bind(this);
this.handleFocusOut = this.handleFocusOut.bind(this);
this.handleFocus = this.handleFocus.bind(this);
this.hasText = this.hasText.bind(this);
}
handleFocusOut(e) {
  if (this.refs.searchInput.value !== '') {
  this.setState({ searching: false });
  }

}
hasText(e) {
  if (this.refs.searchInput.value !== '') {
    return false;
  }
   return true;
}
handleFocus(e) {
    this.setState({ searching: true });
}
searchUpdated (term) {

  this.setState({ searchTerm: this.refs.searchInput.value });

  setTimeout(
    function() {

if (this.refs.searchInput.value.length > 0) {

let array = [];

  if (this.state.searchResults === 'relevance') {

  if (this.state.categoriesType) {
    Categories.find().fetch().map((category) => {
    array.push(<CategoryElement key={category._id} category={category}/>);
    });
  }

  if (this.state.tagsType) {
    Tags.find().fetch().map((tag) => {
    array.push(<TagElement key={tag._id} tag={tag}/>);
    });
  }

  let creatorsArray = [];
  if (this.state.creatorsType) {
    Meteor.users.find().fetch().map((user) => {
      Stories.find({ storyType: 'published' }).fetch().map((story) => {
        if (story.userId === user._id) {
          if (!creatorsArray.includes(user._id)) {
            creatorsArray.push(user._id);
            array.push(<CreatorElement key={user._id} user={user}/>);
          }
        }
      });
    });
  }

  if (this.state.storiesType) {

    Stories.find({ storyType: 'published' }).fetch().map((story) => {

      if (this.state.readTime === 'All') {
        array.push(<StoryElement key={story._id} users={this.state.users} story={story}/>);

      } else if (this.state.readTime === '5min') {

      if (story.minRead < 5) {
        array.push(<StoryElement key={story._id} users={this.state.users} story={story}/>);
      }

      } else if (this.state.readTime === '5-10min') {

        if (story.minRead >= 5 && story.minRead < 10) {
          array.push(<StoryElement key={story._id} users={this.state.users} story={story}/>);
        }

      } else if (this.state.readTime === '10-30min') {

        if (story.minRead > 10 && story.minRead < 30) {
          array.push(<StoryElement key={story._id} users={this.state.users} story={story}/>);
        }

      } else if (this.state.readTime === '30min') {

        if (story.minRead > 30) {
          array.push(<StoryElement key={story._id} users={this.state.users} story={story}/>);
        }

      }
    });
  }

  // if (this.state.faqType) {
  //   Faq.find().fetch().map((faq) => {
  //   array.push(<FAQElement key={faq._id} faq={faq}/>);
  //   });
  // }
} else if (this.state.searchResults === 'popular') {

  if (this.state.categoriesType) {
    Categories.find({}, { sort: { followers: -1 } }).fetch().map((category) => {
    array.push(<CategoryElement key={category._id} category={category}/>);
    });
  }

  if (this.state.tagsType) {
    Tags.find({}, { sort: { followers: -1 } }).fetch().map((tag) => {
    array.push(<TagElement key={tag._id} tag={tag}/>);
    });
  }

  let creatorsArray = [];
  if (this.state.creatorsType) {
    Meteor.users.find({ storyType: 'published' }, { sort: { followers: -1 } }).fetch().map((user) => {
      Stories.find({ storyType: 'published' }).fetch().map((story) => {
        if (story.userId === user._id) {
          if (!creatorsArray.includes(user._id)) {
            creatorsArray.push(user._id);
            array.push(<CreatorElement key={user._id} user={user}/>);
          }
        }
      });
    });
  }

  if (this.state.storiesType) {

    Stories.find({ storyType: 'published' }, { sort: { likes: -1 } }).fetch().map((story) => {

      if (this.state.readTime === 'All') {
        array.push(<StoryElement key={story._id} users={this.state.users} story={story}/>);
      } else if (this.state.readTime === '5min') {

      if (story.readTime < 5) {
        array.push(<StoryElement key={story._id} users={this.state.users} story={story}/>);
      }

      } else if (this.state.readTime === '5-10min') {

        if (story.minRead >= 5 && story.minRead < 10) {
          array.push(<StoryElement key={story._id} users={this.state.users} story={story}/>);
        }

      } else if (this.state.readTime === '10-30min') {

        if (story.minRead > 10 && story.minRead < 30) {
          array.push(<StoryElement key={story._id} users={this.state.users} story={story}/>);
        }

      } else if (this.state.readTime === '30min') {

        if (story.readTime > 30) {
          array.push(<StoryElement key={story._id} users={this.state.users} story={story}/>);
        }

      }
    });
  }

//   if (this.state.faqType) {
//     Faq.find({}, { sort: { views: -1 } }).fetch().map((faq) => {
//     array.push(<FAQElement key={faq._id} faq={faq}/>);
//     });
// }

} else if (this.state.searchResults === 'newest') {

  if (this.state.categoriesType) {
    Categories.find({}, { sort: { lastUpdated: -1 } }).fetch().map((category) => {
    array.push(<CategoryElement key={category._id} category={category}/>);
    });
  }

  if (this.state.tagsType) {
    Tags.find({}, { sort: { lastUpdated: -1 } }).fetch().map((tag) => {
    array.push(<TagElement key={tag._id} tag={tag}/>);
    });
  }

  let creatorsArray = [];
  if (this.state.creatorsType) {
    Meteor.users.find({}, { sort: { lastUpdated: -1 } }).fetch().map((user) => {
      Stories.find({ storyType: 'published' }).fetch().map((story) => {
        if (story.userId === user._id) {
          if (!creatorsArray.includes(user._id)) {
            creatorsArray.push(user._id);
            array.push(<CreatorElement key={user._id} user={user}/>);
          }
        }
      });
    });
  }

  if (this.state.storiesType) {

    Stories.find({ storyType: 'published' }, { sort: { lastUpdated: -1 } }).fetch().map((story) => {

      if (this.state.readTime === 'All') {
        array.push(<StoryElement key={story._id} users={this.state.users} story={story}/>);
      } else if (this.state.readTime === '5min') {

      if (story.readTime < 5) {
        array.push(<StoryElement key={story._id} users={this.state.users} story={story}/>);
      }

      } else if (this.state.readTime === '5-10min') {

        if (story.minRead >= 5 && story.minRead < 10) {
          array.push(<StoryElement key={story._id} users={this.state.users} story={story}/>);
        }

      } else if (this.state.readTime === '10-30min') {

        if (story.minRead > 10 && story.minRead < 30) {
          array.push(<StoryElement key={story._id} users={this.state.users} story={story}/>);
        }

      } else if (this.state.readTime === '30min') {

        if (story.readTime > 30) {
          array.push(<StoryElement key={story._id} users={this.state.users} story={story}/>);
        }

      }
    });
  }

//   if (this.state.faqType) {
//     Faq.find({}, { sort: { lastUpdated: -1 } }).fetch().map((faq) => {
//     array.push(<FAQElement key={faq._id} faq={faq}/>);
//     });
// }

} else if (this.state.searchResults === 'oldest') {

  if (this.state.categoriesType) {
    Categories.find({}, { sort: { lastUpdated: 1 } }).fetch().map((category) => {
    array.push(<CategoryElement key={category._id} category={category}/>);
    });
  }

  if (this.state.tagsType) {
    Tags.find({}, { sort: { lastUpdated: 1 } }).fetch().map((tag) => {
    array.push(<TagElement key={tag._id} tag={tag}/>);
    });
  }

  let creatorsArray = [];
  if (this.state.creatorsType) {
    Meteor.users.find().fetch({}, { sort: { lastUpdated: 1 } }).map((user) => {
      Stories.find({ storyType: 'published' }).fetch().map((story) => {
        if (story.userId === user._id) {
          if (!creatorsArray.includes(user._id)) {
            creatorsArray.push(user._id);
            array.push(<CreatorElement key={user._id} user={user}/>);
          }
        }
      });
    });
  }

  if (this.state.storiesType) {

    Stories.find({ storyType: 'published' }, { sort: { lastUpdated: 1 } }).fetch().map((story) => {

      if (this.state.readTime === 'All') {
        array.push(<StoryElement key={story._id} users={this.state.users} story={story}/>);
      } else if (this.state.readTime === '5min') {

      if (story.readTime < 5) {
        array.push(<StoryElement key={story._id} users={this.state.users} story={story}/>);
      }

      } else if (this.state.readTime === '5-10min') {

        if (story.minRead >= 5 && story.minRead < 10) {
          array.push(<StoryElement key={story._id} users={this.state.users} story={story}/>);
        }

      } else if (this.state.readTime === '10-30min') {

        if (story.minRead > 10 && story.minRead < 30) {
          array.push(<StoryElement key={story._id} users={this.state.users} story={story}/>);
        }

      } else if (this.state.readTime === '30min') {

        if (story.readTime > 30) {
          array.push(<StoryElement key={story._id} users={this.state.users} story={story}/>);
        }

      }
    });
  }

  // if (this.state.faqType) {
  //   Faq.find().fetch({}, { sort: { lastUpdated: 1 } }).map((faq) => {
  //   array.push(<FAQElement key={faq._id} faq={faq}/>);
  //   });
  // }

}

let filteredArray = [];
let filteredIds = [];

let searchTerm = this.state.searchTerm.toUpperCase();

array.map((element) => {

if (element.props.category) {

if (element.props.category.name.toUpperCase().indexOf(searchTerm) > -1) {
if (!filteredIds.includes(element.key)) {
filteredIds.push(element.key);
filteredArray.push(element);
}
}
}
if (element.props.tag) {

if (element.props.tag.name.toUpperCase().indexOf(searchTerm) > -1) {
  if (!filteredIds.includes(element.key)) {
  filteredIds.push(element.key);
  filteredArray.push(element);
  }
}
}
if (element.props.story) {

// console.log(element.props.story.category);
// if (element.props.story.category.toUpperCase().indexOf(searchTerm) > -1) {
//   if (!filteredIds.includes(element.key)) {
//   filteredIds.push(element.key);
//   filteredArray.push(element);
//   }
// }

let creator = this.state.users.findOne({ _id: element.props.story.userId }).username;

  if (creator.toUpperCase().indexOf(searchTerm) > -1) {
    if (!filteredIds.includes(element.key)) {
    filteredIds.push(element.key);
    filteredArray.push(element);
    }
  }

if (element.props.story.description.toUpperCase().indexOf(searchTerm) > -1) {
  if (!filteredIds.includes(element.key)) {
  filteredIds.push(element.key);
  filteredArray.push(element);
  }
}


if (element.props.story.description.toUpperCase().indexOf(searchTerm) > -1) {
  if (!filteredIds.includes(element.key)) {
  filteredIds.push(element.key);
  filteredArray.push(element);
  }
}


if (element.props.story.title.toUpperCase().indexOf(searchTerm) > -1) {
  if (!filteredIds.includes(element.key)) {
  filteredIds.push(element.key);
  filteredArray.push(element);
  }
}

// console.log(element.props.story.body);
// if (element.props.story.body.toUpperCase().indexOf(this.state.searchTerm) > -1) {
// if (!filteredArray.includes(element)) {
// filteredArray.push(element);
// }
// }
}
if (element.props.user) {


if (element.props.user.username.toUpperCase().indexOf(searchTerm) > -1) {
  if (!filteredIds.includes(element.key)) {
  filteredIds.push(element.key);
  filteredArray.push(element);
  }
}


if (element.props.user.description.toUpperCase().indexOf(searchTerm) > -1) {
  if (!filteredIds.includes(element.key)) {
  filteredIds.push(element.key);
  filteredArray.push(element);
  }
}
}

});

// let filteredArray = array.filter(createFilter(this.state.searchTerm, KEYS_TO_FILTERS));

this.setState({ results: filteredArray });

} else {

  this.setState({ results: [] });
}

}
.bind(this),
5
);

}
firstSearchUpdated () {

  setTimeout(
    function() {

if (this.state.searchTerm.length > 0) {

let array = [];

  if (this.state.searchResults === 'relevance') {

  if (this.state.categoriesType) {
    Categories.find().fetch().map((category) => {
    array.push(<CategoryElement key={category._id} category={category}/>);
    });
  }

  if (this.state.tagsType) {
    Tags.find().fetch().map((tag) => {
    array.push(<TagElement key={tag._id} tag={tag}/>);
    });
  }

  let creatorsArray = [];
  if (this.state.creatorsType) {
    Meteor.users.find().fetch().map((user) => {
      Stories.find().fetch().map((story) => {
        if (story.userId === user._id) {
          if (!creatorsArray.includes(user._id)) {
            creatorsArray.push(user._id);
            array.push(<CreatorElement key={user._id} user={user}/>);
          }
        }
      });
    });
  }

  if (this.state.storiesType) {

    Stories.find().fetch().map((story) => {

      if (this.state.readTime === 'All') {
        array.push(<StoryElement key={story._id} users={this.state.users} story={story}/>);

      } else if (this.state.readTime === '5min') {

      if (story.minRead < 5) {
        array.push(<StoryElement key={story._id} users={this.state.users} story={story}/>);
      }

      } else if (this.state.readTime === '5-10min') {

        if (story.minRead >= 5 && story.minRead < 10) {
          array.push(<StoryElement key={story._id} users={this.state.users} story={story}/>);
        }

      } else if (this.state.readTime === '10-30min') {

        if (story.minRead > 10 && story.minRead < 30) {
          array.push(<StoryElement key={story._id} users={this.state.users} story={story}/>);
        }

      } else if (this.state.readTime === '30min') {

        if (story.minRead > 30) {
          array.push(<StoryElement key={story._id} users={this.state.users} story={story}/>);
        }

      }
    });
  }

  // if (this.state.faqType) {
  //   Faq.find().fetch().map((faq) => {
  //   array.push(<FAQElement key={faq._id} faq={faq}/>);
  //   });
  // }
} else if (this.state.searchResults === 'popular') {

  if (this.state.categoriesType) {
    Categories.find({}, { sort: { followers: -1 } }).fetch().map((category) => {
    array.push(<CategoryElement key={category._id} category={category}/>);
    });
  }

  if (this.state.tagsType) {
    Tags.find({}, { sort: { followers: -1 } }).fetch().map((tag) => {
    array.push(<TagElement key={tag._id} tag={tag}/>);
    });
  }

  let creatorsArray = [];
  if (this.state.creatorsType) {
    Meteor.users.find({}, { sort: { followers: -1 } }).fetch().map((user) => {
      Stories.find().fetch().map((story) => {
        if (story.userId === user._id) {
          if (!creatorsArray.includes(user._id)) {
            creatorsArray.push(user._id);
            array.push(<CreatorElement key={user._id} user={user}/>);
          }
        }
      });
    });
  }

  if (this.state.storiesType) {

    Stories.find({}, { sort: { likes: -1 } }).fetch().map((story) => {

      if (this.state.readTime === 'All') {
        array.push(<StoryElement key={story._id} users={this.state.users} story={story}/>);
      } else if (this.state.readTime === '5min') {

      if (story.readTime < 5) {
        array.push(<StoryElement key={story._id} users={this.state.users} story={story}/>);
      }

      } else if (this.state.readTime === '5-10min') {

        if (story.minRead >= 5 && story.minRead < 10) {
          array.push(<StoryElement key={story._id} users={this.state.users} story={story}/>);
        }

      } else if (this.state.readTime === '10-30min') {

        if (story.minRead > 10 && story.minRead < 30) {
          array.push(<StoryElement key={story._id} users={this.state.users} story={story}/>);
        }

      } else if (this.state.readTime === '30min') {

        if (story.readTime > 30) {
          array.push(<StoryElement key={story._id} users={this.state.users} story={story}/>);
        }

      }
    });
  }

//   if (this.state.faqType) {
//     Faq.find({}, { sort: { views: -1 } }).fetch().map((faq) => {
//     array.push(<FAQElement key={faq._id} faq={faq}/>);
//     });
// }

} else if (this.state.searchResults === 'newest') {

  if (this.state.categoriesType) {
    Categories.find({}, { sort: { lastUpdated: -1 } }).fetch().map((category) => {
    array.push(<CategoryElement key={category._id} category={category}/>);
    });
  }

  if (this.state.tagsType) {
    Tags.find({}, { sort: { lastUpdated: -1 } }).fetch().map((tag) => {
    array.push(<TagElement key={tag._id} tag={tag}/>);
    });
  }

  let creatorsArray = [];
  if (this.state.creatorsType) {
    Meteor.users.find({}, { sort: { lastUpdated: -1 } }).fetch().map((user) => {
      Stories.find().fetch().map((story) => {
        if (story.userId === user._id) {
          if (!creatorsArray.includes(user._id)) {
            creatorsArray.push(user._id);
            array.push(<CreatorElement key={user._id} user={user}/>);
          }
        }
      });
    });
  }

  if (this.state.storiesType) {

    Stories.find({}, { sort: { lastUpdated: -1 } }).fetch().map((story) => {

      if (this.state.readTime === 'All') {
        array.push(<StoryElement key={story._id} users={this.state.users} story={story}/>);
      } else if (this.state.readTime === '5min') {

      if (story.readTime < 5) {
        array.push(<StoryElement key={story._id} users={this.state.users} story={story}/>);
      }

      } else if (this.state.readTime === '5-10min') {

        if (story.minRead >= 5 && story.minRead < 10) {
          array.push(<StoryElement key={story._id} users={this.state.users} story={story}/>);
        }

      } else if (this.state.readTime === '10-30min') {

        if (story.minRead > 10 && story.minRead < 30) {
          array.push(<StoryElement key={story._id} users={this.state.users} story={story}/>);
        }

      } else if (this.state.readTime === '30min') {

        if (story.readTime > 30) {
          array.push(<StoryElement key={story._id} users={this.state.users} story={story}/>);
        }

      }
    });
  }

//   if (this.state.faqType) {
//     Faq.find({}, { sort: { lastUpdated: -1 } }).fetch().map((faq) => {
//     array.push(<FAQElement key={faq._id} faq={faq}/>);
//     });
// }

} else if (this.state.searchResults === 'oldest') {

  if (this.state.categoriesType) {
    Categories.find({}, { sort: { lastUpdated: 1 } }).fetch().map((category) => {
    array.push(<CategoryElement key={category._id} category={category}/>);
    });
  }

  if (this.state.tagsType) {
    Tags.find({}, { sort: { lastUpdated: 1 } }).fetch().map((tag) => {
    array.push(<TagElement key={tag._id} tag={tag}/>);
    });
  }

  let creatorsArray = [];
  if (this.state.creatorsType) {
    Meteor.users.find().fetch({}, { sort: { lastUpdated: 1 } }).map((user) => {
      Stories.find().fetch().map((story) => {
        if (story.userId === user._id) {
          if (!creatorsArray.includes(user._id)) {
            creatorsArray.push(user._id);
            array.push(<CreatorElement key={user._id} user={user}/>);
          }
        }
      });
    });
  }

  if (this.state.storiesType) {

    Stories.find({}, { sort: { lastUpdated: 1 } }).fetch().map((story) => {

      if (this.state.readTime === 'All') {
        array.push(<StoryElement key={story._id} users={this.state.users} story={story}/>);
      } else if (this.state.readTime === '5min') {

      if (story.readTime < 5) {
        array.push(<StoryElement key={story._id} users={this.state.users} story={story}/>);
      }

      } else if (this.state.readTime === '5-10min') {

        if (story.minRead >= 5 && story.minRead < 10) {
          array.push(<StoryElement key={story._id} users={this.state.users} story={story}/>);
        }

      } else if (this.state.readTime === '10-30min') {

        if (story.minRead > 10 && story.minRead < 30) {
          array.push(<StoryElement key={story._id} users={this.state.users} story={story}/>);
        }

      } else if (this.state.readTime === '30min') {

        if (story.readTime > 30) {
          array.push(<StoryElement key={story._id} users={this.state.users} story={story}/>);
        }

      }
    });
  }
  // if (this.state.faqType) {
  //   Faq.find().fetch({}, { sort: { lastUpdated: 1 } }).map((faq) => {
  //   array.push(<FAQElement key={faq._id} faq={faq}/>);
  //   });
  // }

}

let filteredArray = [];
let filteredIds = [];

let searchTerm = this.state.searchTerm.toUpperCase();

array.map((element) => {

if (element.props.category) {

if (element.props.category.name.toUpperCase().indexOf(searchTerm) > -1) {
if (!filteredIds.includes(element.key)) {
filteredIds.push(element.key);
filteredArray.push(element);
}
}
}
if (element.props.tag) {

if (element.props.tag.name.toUpperCase().indexOf(searchTerm) > -1) {
  if (!filteredIds.includes(element.key)) {
  filteredIds.push(element.key);
  filteredArray.push(element);
  }
}
}
if (element.props.story) {

// console.log(element.props.story.category);
// if (element.props.story.category.toUpperCase().indexOf(searchTerm) > -1) {
//   if (!filteredIds.includes(element.key)) {
//   filteredIds.push(element.key);
//   filteredArray.push(element);
//   }
// }


if (element.props.story.description.toUpperCase().indexOf(searchTerm) > -1) {
  if (!filteredIds.includes(element.key)) {
  filteredIds.push(element.key);
  filteredArray.push(element);
  }
}


if (element.props.story.description.toUpperCase().indexOf(searchTerm) > -1) {
  if (!filteredIds.includes(element.key)) {
  filteredIds.push(element.key);
  filteredArray.push(element);
  }
}


if (element.props.story.title.toUpperCase().indexOf(searchTerm) > -1) {
  if (!filteredIds.includes(element.key)) {
  filteredIds.push(element.key);
  filteredArray.push(element);
  }
}

let creator = this.state.users.findOne({ _id: element.props.story.userId }).username;

  if (creator.toUpperCase().indexOf(searchTerm) > -1) {
    if (!filteredIds.includes(element.key)) {
    filteredIds.push(element.key);
    filteredArray.push(element);
    }
  }

// console.log(element.props.story.body);
// if (element.props.story.body.toUpperCase().indexOf(this.state.searchTerm) > -1) {
// if (!filteredArray.includes(element)) {
// filteredArray.push(element);
// }
// }
}
if (element.props.user) {


if (element.props.user.username.toUpperCase().indexOf(searchTerm) > -1) {
  if (!filteredIds.includes(element.key)) {
  filteredIds.push(element.key);
  filteredArray.push(element);
  }
}


if (element.props.user.description.toUpperCase().indexOf(searchTerm) > -1) {
  if (!filteredIds.includes(element.key)) {
  filteredIds.push(element.key);
  filteredArray.push(element);
  }
}
}

});

array.map((element) => {



});

// let filteredArray = array.filter(createFilter(this.state.searchTerm, KEYS_TO_FILTERS));

this.setState({ results: filteredArray });

} else {

  this.setState({ results: [] });
}

}
.bind(this),
5
);

}
sortAll() {

// array.filter(createFilter(this.state.searchTerm, KEYS_TO_FILTERS));

}
handleSearchInput(e) {
let searchValue = e.target.value;
Session.set({ searchValue });
this.setState({ searchValue: Session.get('searchValue') });
}
clearSearchInput(e) {
let element = document.getElementById('onlyId');
element.value = null;
// element.parentNode.replaceChild(element.cloneNode(true), element);
document.getElementById('onlyId').focus();
// this.setState({ searching: true });
this.searchUpdated();
}
// componentDidMount() {

  // document.addEventListener('focusout', this.handleFocusOut);

  // this.refs.searchInput.addEventListener("keyup", function(e) {
  //   if (e.key === "Enter") {
  //     let searchValue = e.target.value;
  //     Session.set({ searchValue });
  //     document.getElementById('onlyId').blur();
  //     // document.getElementsByClassName('search__mainInput').blur();
  //     console.log(Session.get('searching'));
  //     Session.set({ searching: false });
  //     console.log(Session.get('searching'));
  // }
  // });

// }
componentDidMount() {
  Meteor.subscribe('allUsers', () => {
    Tracker.autorun(() => {
      let findUser = Meteor.users;
      this.setState({ users: Meteor.users });
      });
    });
}
componentWillUnmount() {
// document.removeEventListener('focusout', this.handleFocusOut);
}
checkChange() {
  const searchValue = Session.get('searchValue');

  if (searchValue) {
    return <div>{`You searched for '${searchValue}'`}</div>
    // run functions and things required to show search
  } else {
    return undefined;
    // Add JSX for the main search page
  }
}
toggleTypeSearch(type) {

  if (type === 'stories') {
    if (this.state.storiesType) {
    this.setState({ storiesType: false });
    this.setState({ readTime: '' });

  } else {
    this.setState({ storiesType: true });
    this.setState({ readTime: 'All' });
  }
} else if (type === 'creators') {
  this.setState({ creatorsType: !this.state.creatorsType });
  this.setState({ readTime: 'All' });
} else if (type === 'categories') {
    this.setState({ categoriesType: !this.state.categoriesType });
    this.setState({ readTime: 'All' });
} else if (type === 'tags') {
this.setState({ tagsType: !this.state.tagsType });
this.setState({ readTime: 'All' });
}
// } else if (type === 'faq') {
//   console.log('ran faq');
//   this.setState({ readTime: false });
//   this.setState({ faqType: !this.state.faqType })
// }
setTimeout(
  function() {
  this.searchUpdated();
  }
  .bind(this),
  5
);
}
setReadTime(value) {

  this.setState({ creatorsType: false });
  this.setState({ categoriesType: false });
  this.setState({ tagsType: false });

this.setState({ readTime: value });

setTimeout(
  function() {
  this.searchUpdated();
  }
  .bind(this),
  50
);

}
insertInsideHTML() {

return (

<div className="flex">

<div className="search__tooltipSection search__tooltipSection1 floatLeft">
<div className="search__tooltipHeader">Search Type</div>
<hr className="search__tooltipHeaderHr"/>

<div className={`search__tooltipMain ${this.state.storiesType ? 'search__tooltipMainSelected' : ''}`} onClick={() => this.toggleTypeSearch('stories') }>Stories</div>
<div className={`search__tooltipMain ${this.state.creatorsType ? 'search__tooltipMainSelected' : ''}`} onClick={() => this.toggleTypeSearch('creators') }>Creators</div>
<div className={`search__tooltipMain ${this.state.categoriesType ? 'search__tooltipMainSelected' : ''}`} onClick={() => this.toggleTypeSearch('categories') }>Categories</div>
<div className={`search__tooltipMain ${this.state.tagsType ? 'search__tooltipMainSelected' : ''}`} onClick={() => this.toggleTypeSearch('tags') }>Tags</div>
{/* <div className={`search__tooltipMain ${this.state.faqType ? 'search__tooltipMainSelected' : ''}`} onClick={() => this.toggleTypeSearch('faq') }>FAQ</div> */}

</div>

<div className="search__tooltipSection floatLeft">
<div className="search__tooltipHeader">Search Results</div>
<hr className="search__tooltipHeaderHr"/>

<div className={`search__tooltipMain ${this.state.searchResults === 'relevance' ? 'search__tooltipMainSelected' : ''}`} onClick={() => this.setSearchResults('relevance') }>Relevance</div>
<div className={`search__tooltipMain ${this.state.searchResults === 'popular' ? 'search__tooltipMainSelected' : ''}`} onClick={() => this.setSearchResults('popular') }>Popular</div>
<div className={`search__tooltipMain ${this.state.searchResults === 'newest' ? 'search__tooltipMainSelected' : ''}`} onClick={() => this.setSearchResults('newest') }>Newest</div>
<div className={`search__tooltipMain ${this.state.searchResults === 'oldest' ? 'search__tooltipMainSelected' : ''}`} onClick={() => this.setSearchResults('oldest') }>Oldest</div>

</div>

<div className="search__tooltipSection floatLeft">
<div className="search__tooltipHeader">Read Time</div>
<hr className="search__tooltipHeaderHr"/>

<div className={`search__tooltipMain ${this.state.readTime === 'All' ? 'search__tooltipMainSelected' : ''}`} onClick={() => { this.setReadTime('All') }}>All</div>
<div className={`search__tooltipMain ${this.state.readTime === '5min' ? 'search__tooltipMainSelected' : ''}`} onClick={() => { this.setReadTime('5min') }}> &#60; 5min </div>
<div className={`search__tooltipMain ${this.state.readTime === '5-10min' ? 'search__tooltipMainSelected' : ''}`} onClick={() => { this.setReadTime('5-10min') }}> 5 - 10min </div>
<div className={`search__tooltipMain ${this.state.readTime === '10-30min' ? 'search__tooltipMainSelected' : ''}`} onClick={() => { this.setReadTime('10-30min') }}> 10 - 30min </div>
<div className={`search__tooltipMain ${this.state.readTime === '30min' ? 'search__tooltipMainSelected' : ''}`} onClick={() => { this.setReadTime('30min')}}> &#62; 30min </div>

</div>

</div>

)
}
setSearchResults(re) {

if (re === 'relevance') {
this.setState({ searchResults: 'relevance' })
} else if (re === 'popular') {
this.setState({ searchResults: 'popular' })
} else if (re === 'newest') {
this.setState({ searchResults: 'newest' })
} else if (re === 'oldest') {
this.setState({ searchResults: 'oldest' })
}
  this.searchUpdated();
}
renderSideBar() {

let popularCategories = Categories.find({}, { sort: { followers: -1 } }).fetch();

let popularTags = Tags.find({}, { sort: { followers: -1 } }).fetch();

return (

  <div className="floatLeft search__mainSideBar">

  <div className="search__sideBarHeader">Popular Categories</div>
  <hr/>
  <div className="clearBoth"></div>
  <img src={popularCategories[0].profilePhoto} className="search__sideBarImage"/>
  <img src={popularCategories[1].profilePhoto} className="search__sideBarImage"/>
  <div className="clearBoth"></div>
  <img src={popularCategories[2].profilePhoto} className="search__sideBarImage"/>
  <img src={popularCategories[3].profilePhoto} className="search__sideBarImage"/>

  <div className="search__sideBarHeader">Popular Tags</div>
  <hr/>
  <img src={popularTags[0].profilePhoto} className="search__sideBarImage"/>
  <img src={popularTags[1].profilePhoto} className="search__sideBarImage"/>
  <div className="clearBoth"></div>
  <img src={popularTags[2].profilePhoto} className="search__sideBarImage"/>
  <img src={popularTags[3].profilePhoto} className="search__sideBarImage"/>

  </div>
)

}
renderNoResults() {
  if (this.state.searchTerm) {
    return <div className="floatLeft search__numResults">0 results</div>;
  }
}
returnNoResultsMessage() {
if (this.state.searchTerm.length > 1) {
  return (
    <div className="search__positionNoResultsMessage">
    <FontAwesomeIcon icon={['far', 'compass']} className='search__noNotficationsIcon' />
    <div className="search__centerNoResultsMessage"><div className="search__noResultsFound">{`Sorry, we couldn't find any results.`}</div> {/* ${this.state.searchTerm.length > 35 ? this.state.searchTerm.slice(0, 35) + '...' : this.state.searchTerm } */}
    </div></div>
  )
}
}
renderNormalContent() {
  // if (Session.get('searchValue')) {
  //   this.refs.searchInput.value = Session.get('searchValue');
  //
  //   setTimeout(
  //     function() {
  //     console.log('ref value', this.refs.searchInput.value);
  //     // this.searchUpdated();
  //     }
  //     .bind(this),
  //     5
  //   );
  // }
}
renderResults() {
  if (Session.get('searchValue') && this.state.results.length === 0) {
      this.firstSearchUpdated();
  }
  return (
    <div className="search__results">

      <div className="search__container1">
      <div id="123abc" className="search__container2">
        {this.state.results}
        {this.state.results.length === 0 ? this.returnNoResultsMessage() : undefined}
    </div>
    </div></div>
  )
}
render() {

    return (
      <div>
          {this.state.users ?
            <div>
            <Navbar onSearch={true} route={''} users={this.state.users} />
            <div className="search__mainInputDiv"><input type="text" defaultValue={Session.get('searchValue')} ref="searchInput" onFocus={() => { this.handleFocus() }} onBlur={() => { this.handleFocusOut() }} className="search__mainInput" id="onlyId" placeholder="Search" onChange={this.searchUpdated} />{this.state.searchTerm ? <FontAwesomeIcon icon={['far', 'times-circle']} onClick={() => { this.clearSearchInput() }} className="search__xIcon" /> : undefined}



            <div className="search__fitlerButtonMarginLeft">
            <SearchMessageTooltipClick inside={this.insertInsideHTML()} outside={<div onClick={() => { this.setState({ dropDown: !this.state.dropDown }) }} className="search__filterButton">filter {!this.state.dropDown ? <FontAwesomeIcon icon={['fas', 'angle-down']} className="search__UpDownIcon" /> : <FontAwesomeIcon icon={['fas', 'angle-up']} className="search__UpDownIcon" /> }</div>} outsideClassName={'search__outsideClassName'} insideClassName={'search__outsideTooltip'} />
            </div>
            </div>
            {/* {this.state.searchTerm ? this.renderSideBar() : undefined } */}

            <div className="search__belowInputDiv">
            <div className="search__header floatLeft">{this.state.searchTerm ? 'Search Results' : 'Popular Searches'}</div>{this.state.results.length > 0 ? <div className="floatLeft search__numResults">{this.state.results.length} {this.state.results.length === 1 ? 'result' : 'results'}</div> : this.renderNoResults() }
            <div className="clearBoth"></div>
            <hr className="search__hr"/>


            {this.state.searchTerm ?

            this.renderResults()

            :
            <div className="search__results1"><PopularResults users={this.state.users} /></div> }
        </div>
            <div className="searchPageBottomHeight"></div>
            <Footer/>
            </div>
          : undefined }
      </div>
    );
  }
}

export default withTracker(() => {
Meteor.subscribe('stories');
Meteor.subscribe('creators');
Meteor.subscribe('faq');
return {

};
})(Search);
