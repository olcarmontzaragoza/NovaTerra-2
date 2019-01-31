import React from 'react';
import { withTracker } from 'meteor/react-meteor-data';

const urlStructure = '/images/categoryImages';
const categoryImages = ['Climate.png', 'Energy.jpg', 'Future.jpg', 'World.jpg', 'Technology.jpg', 'Economy.jpg', 'Science.jpg', 'Politics.jpg', 'Health.jpg', 'Media.jpg', 'art-and-film.jpg', 'Environment.jpg'];
import { funcReplace } from '../../../routes/routes.js';
import { Meteor } from 'meteor/meteor';
import { Categories } from '../../../api/categories';

Meteor.subscribe('categories');

export class CCategories extends React.Component {
constructor(props) {
super(props);
this.state = {

};
}
// renderCategoryPage(path) {
//
// let remove = path.indexOf('.');
// path = path.slice(0, remove);
//
// funcReplace(`/${path}`);
// }
// getCategory(path) {
//
// let remove = path.indexOf('.');
// path = path.slice(0, remove);
//
// return path;
// }
render() {
  return (
<div>
<div className="mainTitleCatSubTitle">
Categories
</div>
<hr className="explore__belowCategoriesHr" />

  <div className="explore__mainCategoriesBox">

  <div className="explore__mainCategoriesContainer">
  { Categories.find().fetch().map((category) => {

    // let category;
    // if (image === 'art-and-film.jpg') {
    //   category = 'Art & Film';
    // } else {
    //   category = this.getCategory(image);
    // }

    let coverImageClass;
    if (category.name === 'Science' || category.name === 'Equality') {
      coverImageClass = 'imageCoverCategories1';
    } else {
      coverImageClass = 'imageCoverCategories';
    }

      return (
      <div key={category._id} className="explore__topDivCategories" onClick={() => { funcReplace(category.link) }}>
      <img src={category.profilePhoto} className="categoryBelowExploreImage" />
      <div className={coverImageClass}>
      <div className="categoryTitleAllStyles1">
        {category.name}
      </div>
    </div>
      </div>
    );
  })}
  </div>
  </div>

<div className="explore__bottomSpacing"></div>
</div>
    );
  }
}

export default withTracker(() => {
return {

};
})(CCategories);
