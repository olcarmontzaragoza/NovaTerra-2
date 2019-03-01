import React from 'react';
import ReactDOM from 'react-dom'
import { withTracker } from 'meteor/react-meteor-data';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import { Session } from 'meteor/session';
import SearchInput, {createFilter} from 'react-search-input';
import MessageTooltipClickFAQ from '../Components/Tooltips/MessageTooltipClickFAQ';
import FAQTooltipClick from '../Components/Tooltips/FAQTooltipClick';
import moment from 'moment';
import FAQAnswer from './FAQAnswer';
import { Link } from 'react-router-dom';
import { Faq } from '../../api/faq';

import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { far } from '@fortawesome/free-regular-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';

import FAQElement from './FAQElement';
import PopularFAQResults from './PopularFAQResults';

import createBrowserHistory from 'history/createBrowserHistory';

browserHistory = createBrowserHistory();

Meteor.subscribe('faq');

// let preUrlTop = browserHistory.location.pathname.slice(5, browserHistory.location.pathname.length)
// let unCapTitleTop = preUrlTop.replace(/-/g, ' ');
// let answerTop = Faq.findOne({ unCapTitle: unCapTitleTop });

export class Search extends React.Component {
constructor(props) {
super(props);
this.state = {
searchTerm: '',
generalType: true,
storiesType: true,
contactType: true,
donateType: true,
advertisingType: true,
copyrightType: true,
websiteBugsType: true,
otherType: true,
searchResults: 'relevance',
readTime: 'All',
dropDown: false,
results: [],
answer: false,
useful: '',
suggestionsLength: 0,
};
this.returnCharactersLeft = this.returnCharactersLeft.bind(this);
this.searchUpdated = this.searchUpdated.bind(this);
this.handleFocusOut = this.handleFocusOut.bind(this);
this.handleFocus = this.handleFocus.bind(this);
}
renderOnRender() {

  let popularGeneral = [];
  let popularStories = [];
  let popularContact = [];
  let popularDonate = [];
  let popularAdvertising = [];
  let popularCopyright = [];
  let popularWebsiteBugs = [];
  let popularOther = [];

  Faq.find({}, {
      sort: {
        views: -1
      }
  }).fetch().map((question) => {

    if (question.topic === 'General') {
      popularGeneral.push(question);
    } else if (question.topic === 'Stories') {
      popularStories.push(question);
    } else if (question.topic === 'Contact') {
      popularContact.push(question);
    } else if (question.topic === 'Donate') {
      popularDonate.push(question);
    } else if (question.topic === 'Advertising') {
      popularAdvertising.push(question);
    } else if (question.topic === 'Website Bugs') {
      popularWebsiteBugs.push(question);
    } else if (question.topic === 'Copyright') {
      popularCopyright.push(question);
    } else if (question.topic === 'Other') {
      popularOther.push(question);
    }

  });

  this.setState({ popularGeneral, popularStories, popularContact, popularDonate, popularAdvertising, popularWebsiteBugs, popularCopyright, popularOther });


}
setFaqAnswerInput(title) {
  this.refs.searchInputFaq.value = title;
}

// isAnswer() {
// let preUrl = browserHistory.location.pathname.slice(5, browserHistory.location.pathname.length)
// let unCapTitle = preUrl.replace(/-/g, ' ');
// let answer = Faq.findOne({ unCapTitle });
//
// this.setState({ answerOrSearch: !!answer });
//
// return !!answer;
// }
// findFaq() {
// let preUrl = browserHistory.location.pathname.slice(5, browserHistory.location.pathname.length)
// let unCapTitle = preUrl.replace(/-/g, ' ');
// let answer = Faq.findOne({ unCapTitle });
//
// return answer;
// }
handleFocusOut(e) {
  if (this.refs.searchInputFaq.value !== '') {
  this.setState({ searching: false });
  }
}
checkIfTopicTrue(type) {

  let boolean = false;

  if (type === 'General') { if (this.state.generalType) { boolean = true; } }
  if (type === 'Stories') { if (this.state.storiesType) { boolean = true; } }
  if (type === 'Contact') { if (this.state.contactType) { boolean = true; } }
  if (type === 'Donate') { if (this.state.donateType) { boolean = true; } }
  if (type === 'Advertising') { if (this.state.advertisingType) { boolean = true; } }
  if (type === 'Copyright') { if (this.state.copyrightType) { boolean = true; } }
  if (type === 'Website Bugs') { if (this.state.websiteBugsType) { boolean = true; } }
  if (type === 'Other') { if (this.state.otherType) { boolean = true; } }

  return boolean;

}
setFaqAnswer(faq) {
  this.setState({ answer: faq });
  this.setScrollTop();
}
handleFocus(e) {
    this.setState({ searching: true });
}
searchUpdated (term) {
  this.setState({ searchTerm: this.refs.searchInputFaq.value });

  this.setState({ answer: false });

  setTimeout(
    function() {

if (this.refs.searchInputFaq.value.length > 0) {

let array = [];

if (this.state.searchResults === 'relevance') {

  Faq.find().fetch().map((faq) => {

  if (this.checkIfTopicTrue(faq.topic)) {
    array.push(<div key={faq._id} onClick={() => this.setFaqAnswer(faq)}><FAQElement faq={faq}/></div>);
  }
  });

} else if (this.state.searchResults === 'popular') {

  Faq.find({}, { sort: { views: -1 } }).fetch().map((faq) => {

  if (this.checkIfTopicTrue(faq.topic)) {
  array.push(<div key={faq._id} onClick={() => this.setFaqAnswer(faq)}><FAQElement faq={faq}/></div>);
  }
  });

} else if (this.state.searchResults === 'newest') {

  Faq.find({}, { sort: { lastUpdated: -1 } }).fetch().map((faq) => {

  if (this.checkIfTopicTrue(faq.topic)) {
  array.push(<div key={faq._id} onClick={() => this.setFaqAnswer(faq)}><FAQElement faq={faq}/></div>);
  }
  });

} else if (this.state.searchResults === 'oldest') {

  Faq.find({}, { sort: { lastUpdated: 1 } }).fetch().map((faq) => {

  if (this.checkIfTopicTrue(faq.topic)) {
  array.push(<div key={faq._id} onClick={() => this.setFaqAnswer(faq)}><FAQElement faq={faq}/></div>);
  }
  });

}

console.log(array);

let filteredArray = [];
let filteredIds = [];

let lowerCaseSearchTerm = this.state.searchTerm.toLowerCase();
let searchTermArray = lowerCaseSearchTerm.split(" ");

console.log('lowerCaseSearchTerm', lowerCaseSearchTerm);
console.log('searchTermArray', searchTermArray);

array.map((element) => {

searchTermArray.map((searchTerm) => {

if (element.props.children.props.faq.tags.includes(searchTerm)) {
if (!filteredIds.includes(element.key)) {
filteredIds.push(element.key);
filteredArray.push(element);
}
}

});

});

array.map((element) => {

searchTermArray.map((searchTerm) => {

if (element.props.children.props.faq.shortAnswer.toLowerCase().indexOf(searchTerm) > -1) {
if (!filteredIds.includes(element.key)) {
filteredIds.push(element.key);
filteredArray.push(element);
}
}

if (element.props.children.props.faq.body.toLowerCase().indexOf(searchTerm) > -1) {
if (!filteredIds.includes(element.key)) {
filteredIds.push(element.key);
filteredArray.push(element);
}
}

});

});







this.setState({ results: filteredArray });

} else {
  this.setState({ results: [] });
}

}
.bind(this),
50
);
}
sortAll() {

// array.filter(createFilter(this.state.searchTerm, KEYS_TO_FILTERS));

}
clearSearchInput(e) {
let element = document.getElementById('onlyId');
element.value = null;
// element.parentNode.replaceChild(element.cloneNode(true), element);
document.getElementById('onlyId').focus();
// this.setState({ searching: true });
this.searchUpdated();
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

  if (type === 'General') {
    this.setState({ generalType: !this.state.generalType });
  } else if (type === 'Stories') {
        this.setState({ storiesType: !this.state.storiesType });
  } else if (type === 'Contact') {
        this.setState({ contactType: !this.state.contactType });
  } else if (type === 'Donate') {
        this.setState({ donateType: !this.state.donateType });
  } else if (type === 'Advertising') {
        this.setState({ advertisingType: !this.state.advertisingType });
  } else if (type === 'Copyright') {
        this.setState({ copyrightType: !this.state.copyrightType });
  } else if (type === 'Website Bugs') {
        this.setState({ websiteBugsType: !this.state.websiteBugsType });
  } else if (type === 'Other') {
        this.setState({ otherType: !this.state.otherType });
  }

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

<div className="floatLeft marginLeftFaqFilterleft">
<div className={`search__tooltipMain ${this.state.generalType ? 'search__tooltipMainSelected' : ''}`} onClick={() => this.toggleTypeSearch('General') }>General</div>
<div className={`search__tooltipMain ${this.state.storiesType ? 'search__tooltipMainSelected' : ''}`} onClick={() => this.toggleTypeSearch('Stories') }>Stories</div>
<div className={`search__tooltipMain ${this.state.contactType ? 'search__tooltipMainSelected' : ''}`} onClick={() => this.toggleTypeSearch('Contact') }>Contact</div>
<div className={`search__tooltipMain ${this.state.copyrightType ? 'search__tooltipMainSelected' : ''}`} onClick={() => this.toggleTypeSearch('Copyright') }>Copyright</div>
<div className="clearBoth"></div>
</div>


<div className="floatLeft faq__searchTypeMarginLeft">
  <div className="clearBoth"></div>
  <div className={`search__tooltipMain ${this.state.donateType ? 'search__tooltipMainSelected' : ''}`} onClick={() => this.toggleTypeSearch('Donate') }>Donate</div>
  <div className={`search__tooltipMain ${this.state.advertisingType ? 'search__tooltipMainSelected' : ''}`} onClick={() => this.toggleTypeSearch('Advertising') }>Advertising</div>

<div className={`search__tooltipMain ${this.state.websiteBugsType ? 'search__tooltipMainSelected' : ''}`} onClick={() => this.toggleTypeSearch('Website Bugs') }>Website Bugs</div>
<div className={`search__tooltipMain ${this.state.otherType ? 'search__tooltipMainSelected' : ''}`} onClick={() => this.toggleTypeSearch('Other') }>Other</div>

</div>

</div>

{/* <div className="search__tooltipSection floatLeft faq__secondTableTooltip ">


</div> */}

<div className="search__tooltipSectionRight floatLeft faq__searchResultsMarginLeft">
<div className="search__tooltipHeader">Search Results</div>
<hr className="search__tooltipHeaderHr"/>

<div className={`search__tooltipMain ${this.state.searchResults === 'relevance' ? 'search__tooltipMainSelected' : ''}`} onClick={() => this.setSearchResults('relevance') }>Relevance</div>
<div className={`search__tooltipMain ${this.state.searchResults === 'popular' ? 'search__tooltipMainSelected' : ''}`} onClick={() => this.setSearchResults('popular') }>Popular</div>
<div className={`search__tooltipMain ${this.state.searchResults === 'newest' ? 'search__tooltipMainSelected' : ''}`} onClick={() => this.setSearchResults('newest') }>Newest</div>
<div className={`search__tooltipMain ${this.state.searchResults === 'oldest' ? 'search__tooltipMainSelected' : ''}`} onClick={() => this.setSearchResults('oldest') }>Oldest</div>

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
setUsefulness(boolean) {

if (boolean) {
  this.setState({ useful: 'useful' });
if (!this.state.useful === 'useful') {
  console.log('useful', this.state.answer._id, this.state.answer.numUseful);
  Meteor.call('faq.increment', this.state.answer._id, { numUseful: 1 });
}
} else {
  this.setState({ useful: 'notUseful' })
if (!this.state.useful === 'notUseful') {
  console.log('not useful', this.state.answer.numNotUseful);
  Meteor.call('faq.increment', this.state.answer._id, { numNotUseful: 1 });
}
}

}
returnCharactersLeft(e) {
  this.setState({ suggestionsLength: this.refs.suggestionInput.value.length });
}
returnResults() {

if (this.state.results.length > 0) {
  return this.state.results;
} else {
  return (
    <div className="notFound__containerSearch">
    <div className="notFound__topSection">
    <svg width="0" height="0">
    <radialGradient id="notFoundColor" r="150%" cx="30%" cy="107%">
    <stop stopColor="#67B26F" offset="0.28" />
    <stop stopColor="#4ca2cd" offset="0.65" />
    </radialGradient>
    </svg>
    <div className="notFound__iconHover">
    <FontAwesomeIcon icon={['far', 'compass']} className='notFound__iconSearch' />
    </div>
    </div>

    <div className="notFound__bottomMargins">
    <div className="notFound__bottomMessage">
      <div className="notFound__publishedNoText"><p className="notFound__noStoriesFound">Sorry this question has not been asked yet. Would you like to add it to the FAQ?</p></div>
    </div>
    </div>
    <div className="notFound__positionButtonMobile">
    <Link to='/contact' className="faqAddQuestion faq__positionNoQuestionMessageButton">Add Question to FAQ</Link>
    </div>

    </div>
  )
    // <div className="faq__positionNoQuestionsMessage">
    // <div className="faq__noQuestionFound">Sorry this question has not been asked yet. Would you like to add it to the FAQ?</div>
    // <Link to='/contact' className="faqAddQuestion faq__positionNoQuestionMessageButton">Add Question to FAQ</Link>
    // </div>
}

}
renderSuggestionsInput() {
  return (
    <div>
      <p className="faq__sugesstionMessageHeader">How Could We Improve This Answer?</p>
      <textarea className="faq__suggestionMessageTextarea" ref='suggestionInput' maxLength='300' onChange={this.returnCharactersLeft.bind(this)} autoFocus placeholder="Maybe you could..."></textarea>
      <div className="faq__suggestionMessageMaxCharacters">{`${300 - this.state.suggestionsLength} Characters Left`}</div>

      <div className="faq__suggestionMessageSubmit">Submit</div>
    </div>
  )
}
renderFAQBody() {
//   const NewLineToBr = this.state.answer.body.split('\n')
//     .reduce((arr, line, index) => arr.concat(
//       <Fragment key={index}>
//         {line}
//         <br />
//       </Fragment>,
//     ), [])
}
setScrollTop() {
  window.scrollTo(0, 230);
}
componentDidMount() {
  Meteor.subscribe('allUsers', () => {
    Tracker.autorun(() => {
      let findUser = Meteor.users;
      this.setState({ users: Meteor.users });
      document.title = `NovaTerra - FAQ`;
      this.renderOnRender();
      });
    });
    this.renderOnRender();
}
render() {

    return (
      <div>
          {this.state.users && Faq.find().count() > 0 ?
          <div>
          <meta name="viewport" content="initial-scale=1"></meta>
          <Navbar route={''} users={this.state.users} />
          <div className="search__mainInputDiv"><input type="text" ref="searchInputFaq" onFocus={() => { this.handleFocus() }} onBlur={() => { this.handleFocusOut() }} className="search__mainInput" id="onlyId" placeholder="Search" onChange={this.searchUpdated} />{this.state.searchTerm ? <FontAwesomeIcon icon={['far', 'times-circle']} onClick={() => { this.clearSearchInput() }} className="search__xIcon" /> : undefined}

          <div className="search__fitlerButtonMarginLeft">
          <FAQTooltipClick inside={this.insertInsideHTML()} outside={<div onClick={() => { this.setState({ dropDown: !this.state.dropDown }) }} className="search__filterButton">filter {!this.state.dropDown ? <FontAwesomeIcon icon={['fas', 'angle-down']} className="search__UpDownIcon" /> : <FontAwesomeIcon icon={['fas', 'angle-up']} className="search__UpDownIcon" /> }</div>} outsideClassName={'search__outsideClassName'} insideClassName={'faq__outsideTooltip'} />
          </div>
          </div>

          {/* {this.state.searchTerm ? this.renderSideBar() : undefined } */}


          {!this.state.answer ?
          <div>
          <div className="search__belowInputDiv">
          <div className="search__header floatLeft">{this.state.searchTerm ? 'Search Results' : 'Popular Questions'}</div>{this.state.results.length > 0 ? <div className="floatLeft search__numResults">{this.state.results.length} {this.state.results.length === 1 ? 'question' : 'questions'}</div> : undefined }
          <div className="clearBoth"></div>
          <hr className="search__hr"/>

          {this.state.searchTerm ?

          <div className="search__results">

            <div className="search__container1">
            <div className="search__container2">
              {this.state.results.length > 0 ? <div className="faq__positoningButtonBottom"><Link to='/contact' className="faqAddQuestion">Add Question to FAQ</Link></div> : undefined }
              {this.returnResults()}
          </div>
          </div></div>

          :
          <div className="search__results1">

            <div className="faq__popularResultsDiv">

            <div className="floatLeft faq__popularResultsIndividual">
            <div className="search__popularResultsHeader">General</div>
            <hr className="search__popularResultsHr"/>
            <div className="faq__popularResultsWidth">
            {this.state.popularGeneral.length > 0 ? <a onClick={() => this.setFaqAnswer(this.state.popularGeneral[0])} className="search_popularResultsResult">{this.state.popularGeneral[0].title.length > 46 ? this.state.popularGeneral[0].title.slice(0, 46) + '...' : this.state.popularGeneral[0].title}</a> : undefined }
            <div className="clearBoth search__popularResultsSpacing"></div>
            {this.state.popularGeneral.length > 1 ? <a onClick={() => this.setFaqAnswer(this.state.popularGeneral[1])} className="search_popularResultsResult">{this.state.popularGeneral[1].title.length > 46 ? this.state.popularGeneral[1].title.slice(0, 46) + '...' : this.state.popularGeneral[1].title}</a> : undefined }
            <div className="clearBoth search__popularResultsSpacing"></div>
            {this.state.popularGeneral.length > 2 ? <a onClick={() => this.setFaqAnswer(this.state.popularGeneral[2])} className="search_popularResultsResult">{this.state.popularGeneral[2].title.length > 46 ? this.state.popularGeneral[2].title.slice(0, 46) + '...' : this.state.popularGeneral[2].title}</a> : undefined }
            </div>
            </div>


            <div className="floatLeft faq__popularResultsIndividual">
            <div className="search__popularResultsHeader">Stories</div>
            <hr className="search__popularResultsHr"/>
            <div className="faq__popularResultsWidth">
            {this.state.popularStories.length > 0 ? <a onClick={() => this.setFaqAnswer(this.state.popularStories[0])} className="search_popularResultsResult">{this.state.popularStories[0].title.length > 46 ? this.state.popularStories[0].title.slice(0, 46) + '...' : this.state.popularStories[0].title}</a> : undefined }
            <div className="clearBoth search__popularResultsSpacing"></div>
            {this.state.popularStories.length > 1 ? <a onClick={() => this.setFaqAnswer(this.state.popularStories[1])} className="search_popularResultsResult">{this.state.popularStories[1].title.length > 46 ? this.state.popularStories[1].title.slice(0, 46) + '...' : this.state.popularStories[1].title}</a> : undefined }
            <div className="clearBoth search__popularResultsSpacing"></div>
            {this.state.popularStories.length > 2 ? <a onClick={() => this.setFaqAnswer(this.state.popularStories[2])} className="search_popularResultsResult">{this.state.popularStories[2].title.length > 46 ? this.state.popularStories[2].title.slice(0, 46) + '...' : this.state.popularStories[2].title}</a> : undefined }
            </div>
            </div>


            <div className="floatLeft faq__popularResultsIndividualContact">
            <div className="search__popularResultsHeader">Contact</div>
            <hr className="search__popularResultsHr"/>
            <div className="faq__popularResultsWidth">
            {this.state.popularContact.length > 0 ? <a onClick={() => this.setFaqAnswer(this.state.popularContact[0])} className="search_popularResultsResult">{this.state.popularContact[0].title.length > 46 ? this.state.popularContact[0].title.slice(0, 46) + '...' : this.state.popularContact[0].title}</a> : undefined }
            <div className="clearBoth search__popularResultsSpacing"></div>
            {this.state.popularContact.length > 1 ? <a onClick={() => this.setFaqAnswer(this.state.popularContact[1])} className="search_popularResultsResult">{this.state.popularContact[1].title.length > 46 ? this.state.popularContact[1].title.slice(0, 46) + '...' : this.state.popularContact[1].title}</a> : undefined }
            <div className="clearBoth search__popularResultsSpacing"></div>
            {this.state.popularContact.length > 2 ? <a onClick={() => this.setFaqAnswer(this.state.popularContact[2])} className="search_popularResultsResult">{this.state.popularContact[2].title.length > 46 ? this.state.popularContact[2].title.slice(0, 46) + '...' : this.state.popularContact[2].title}</a> : undefined }
            </div>
            </div>

            <div className="clearBoth search__popularResultsMiddleSpacing"></div>

            <div className="floatLeft faq__popularResultsIndividual">
            <div className="search__popularResultsHeader">Donate</div>
            <hr className="search__popularResultsHr"/>
            <div className="faq__popularResultsWidth">
            {this.state.popularDonate.length > 0 ? <a onClick={() => this.setFaqAnswer(this.state.popularDonate[0])} className="search_popularResultsResult">{this.state.popularDonate[0].title.length > 46 ? this.state.popularDonate[0].title.slice(0, 46) + '...' : this.state.popularDonate[0].title}</a> : undefined }
            <div className="clearBoth search__popularResultsSpacing"></div>
            {this.state.popularDonate.length > 1 ? <a onClick={() => this.setFaqAnswer(this.state.popularDonate[1])} className="search_popularResultsResult">{this.state.popularDonate[1].title.length > 46 ? this.state.popularDonate[0].title.slice(0, 46) + '...' : this.state.popularDonate[1].title}</a> : undefined }
            <div className="clearBoth search__popularResultsSpacing"></div>
            {this.state.popularDonate.length > 2 ? <a onClick={() => this.setFaqAnswer(this.state.popularDonate[2])} className="search_popularResultsResult">{this.state.popularDonate[2].title.length > 46 ? this.state.popularDonate[0].title.slice(0, 46) + '...' : this.state.popularDonate[2].title}</a> : undefined }
            </div>
            </div>


            <div className="floatLeft faq__popularResultsIndividual">
            <div className="search__popularResultsHeader">Advertising</div>
            <hr className="search__popularResultsHr"/>
            <div className="faq__popularResultsWidth">
            {this.state.popularAdvertising.length > 0 ? <a onClick={() => this.setFaqAnswer(this.state.popularAdvertising[0])} className="search_popularResultsResult">{this.state.popularAdvertising[0].title.length > 46 ? this.state.popularAdvertising[0].title.slice(0, 46) + '...' : this.state.popularAdvertising[0].title}</a> : undefined }
            <div className="clearBoth search__popularResultsSpacing"></div>
            {this.state.popularAdvertising.length > 1 ? <a onClick={() => this.setFaqAnswer(this.state.popularAdvertising[1])} className="search_popularResultsResult">{this.state.popularAdvertising[1].title.length > 46 ? this.state.popularAdvertising[1].title.slice(0, 46) + '...' : this.state.popularAdvertising[1].title}</a> : undefined }
            <div className="clearBoth search__popularResultsSpacing"></div>
            {this.state.popularAdvertising.length > 2 ? <a onClick={() => this.setFaqAnswer(this.state.popularAdvertising[2])} className="search_popularResultsResult">{this.state.popularAdvertising[2].title.length > 46 ? this.state.popularAdvertising[2].title.slice(0, 46) + '...' : this.state.popularAdvertising[2].title}</a> : undefined }
            </div>
            </div>

            <div className="floatLeft faq__popularResultsIndividualContact">
            <div className="search__popularResultsHeader">Copyright</div>
            <hr className="search__popularResultsHr"/>
            <div className="faq__popularResultsWidth">
            {this.state.popularCopyright.length > 0 ? <a onClick={() => this.setFaqAnswer(this.state.popularCopyright[0])} className="search_popularResultsResult">{this.state.popularCopyright[0].title.length > 46 ? this.state.popularCopyright[0].title.slice(0, 46) + '...' : this.state.popularCopyright[0].title}</a> : undefined }
            <div className="clearBoth search__popularResultsSpacing"></div>
            {this.state.popularCopyright.length > 1 ? <a onClick={() => this.setFaqAnswer(this.state.popularCopyright[1])} className="search_popularResultsResult">{this.state.popularCopyright[1].title.length > 46 ? this.state.popularCopyright[1].title.slice(0, 46) + '...' : this.state.popularCopyright[1].title}</a> : undefined }
            <div className="clearBoth search__popularResultsSpacing"></div>
            {this.state.popularCopyright.length > 2 ? <a onClick={() => this.setFaqAnswer(this.state.popularCopyright[2])} className="search_popularResultsResult">{this.state.popularCopyright[2].title.length > 46 ? this.state.popularCopyright[2].title.slice(0, 46) + '...' : this.state.popularCopyright[2].title}</a> : undefined }
            </div>
            </div>

            <div className="clearBoth search__popularResultsBottomSpacing"></div>

          </div>

          </div> }
      </div>
      <div className="faq__veryMarginBottom"></div>
      </div>

      :
      <div>
      <div className="faq__belowInputDiv">

        {this.setFaqAnswerInput(this.state.answer.title)}

        <div className="faq__mainTopic"> <p className="faq__mainTopicLabel floatLeft">Topic:</p> <p className="faq__mainTopicTopic floatLeft">{this.state.answer.topic}</p> </div>
        <div className="clearBoth"></div>
        <div className="faq__mainAnswer"> <p className="faq__mainAnswerLabel">Answer: <p className="faq__mainAnswerAnswer">{this.state.answer.shortAnswer}</p> </p></div>
        <div className="clearBoth"></div>

        <div className="faq__answerBody">
        <FAQAnswer id={this.state.answer._id}/>
        </div>

        <hr className="faq__answerHr"/>

        <div className="faq__bottomTopContainer floatLeft">
        <p className="faq__bottomLabel">Last Edit</p>
        <p className="faq__bottomValue">{moment(this.state.answer.lastUpdated).format('DD MMM')}</p>
        </div>

        <div className="faq__bottomTopContainer floatLeft">
        <p className="faq__bottomLabel">Total Edits</p>
        <p className="faq__bottomValue">{this.state.answer.totalEdits}</p>
        </div>

        <div className="faq__bottomTopContainer floatLeft">
        <p className="faq__bottomLabel">Contributors</p>
        <p className="faq__bottomValue">{this.state.answer.contributors}</p>
        </div>

        <div className="faq__bottomTopContainer floatLeft">
        <p className="faq__bottomLabel">Total Views</p>
        <p className="faq__bottomValue">{this.state.answer.views}</p>
        </div>

        <div className="clearBoth faq__storyUsefulSpacing"></div>

        <p className="faq__bottomUsefulMessage floatLeft">Was this article useful?</p>
        <div className={`faq__usefulButton ${this.state.useful === 'useful' ? 'usefulButtonSelected' : ''}`} onClick={() => this.setUsefulness(true)}>Yes</div>
        <div className={`faq__notUsefulButton ${this.state.useful === 'notUseful' ? 'usefulButtonSelected' : ''}`} onClick={() => this.setUsefulness(false)}>No</div>

        <div className="clearBoth"></div>

        <div className="faq__suggestionTextMarginLeft">
        <MessageTooltipClickFAQ inside={this.renderSuggestionsInput()} outside={<div className="faq__suggestionMessage">Suggest an Improvement?</div>} outsideClassName={''} insideClassName={''} />
        </div>

        <div className="faq__suggestionMessageBottomSpacing"></div>

        <hr className="faq__answerHr"/>
        </div>
        </div>
      }

      {this.state.answer ? <div className="faq__answerVeryBottomSpacing"></div> : <div className="faqPageBottomHeight"></div>}
          <Footer route='' />
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
