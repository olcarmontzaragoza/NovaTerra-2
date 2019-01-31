import React from 'react';
import { withTracker } from 'meteor/react-meteor-data';
import { Link } from 'react-router-dom';
import { Stories } from '../../../api/stories';

export class ImageTooltip extends React.Component {
  findUser(userId) {
    const user = Meteor.users.findOne({ userId });
    return user;
  }
  render() {
    return (
      <div>
        <div className="categoryPageImageToolTip">
        <img src={this.findUser(this.props.userId).profilePhoto} width="42"
          height="42" className="popMainStoryImage1 hovFirstStoryDisplayTooltip categoryPageLatestAuthorPhoto1" />

           <span className="categoryPageImageToolTipborder"></span>
          <span className="categoryPageImageBelowToolTipborder"></span>
            <span className="categoryPageImageToolTiptext">
                     <Link to={this.findUser(this.props.userId).profileUrl} className="hoverOverToolTipMainAuthor">
                        {this.findUser(this.props.userId).username}
                     </Link>
                     <div className="toolTipAboutTheAuthor aboutTextFont categoryPageLatest1StoryTooltipDes">
                       {this.findUser(this.props.userId).description}
                   </div>
        <img src={this.findUser(this.props.userId).profilePhoto} width="58"
          height="58" className="toolTipAuthorImage categoryPageLatestAuthorPhoto1" />

        <hr className="toolTipHigherHr"/>

                   <div className="toolTipPopularStories">
                     Popular Stories
                   </div>
                   <div className="popularStoriesList">


                    <div className="toolTipPopularStoriesN ttPolarStoriesN1">1. </div><Link to={this.findUser(this.props.userId).profileUrl} className="toolTipPopularStories ttPolarStories1 topFirstStoryTooltipPopS1">{this.findUser(this.props.userId).popularStories[0].title}</Link>

                     <div className="tooltipStoriesSpacing"></div>

                     {this.findUser(this.props.userId).popularStories.length > 1 ?
                       <div>
                       <div className="toolTipPopularStoriesN ttPolarStoriesN3"> 2. </div><Link to={this.findUser(this.props.userId).profileUrl} className="toolTipPopularStories topFirstStoryTooltipPopS2">{this.findUser(this.props.userId).popularStories[1].title}</Link>
                       <div className="tooltipStoriesSpacing">
                       </div>

                       </div>

                       : undefined
                     }

                     {this.findUser(this.props.userId).popularStories.length > 2 ?
                     <div>
                     <div className="toolTipPopularStoriesN" className="ttPolarStoriesN3 fontThirdStoryTooltip"> 3. </div><Link to={this.findUser(this.props.userId).profileUrl} className="toolTipPopularStories topSecondStoryTooltipPopS3 marginRight15">{this.findUser(this.props.userId).popularStories[2].title}</Link>
                     </div>

                     : undefined
                    }
                    </div>

                   <div className="toolTipAboveLowerHrSpacing"></div>

                   <hr className="toolTipLowerHr" />

                   <div className="joinedDateLower topFirstStoryTooltipAuthorJoinDate">
                    {this.findUser(this.props.userId).joinDate}
                             </div>
                     <a className="authorProfileButton topFirstStoryTooltipViewProfileLink">
                       <div className="viewProfileText">
                           <Link to={this.findUser(this.props.userId).profileUrl}>View Profile</Link>
                       </div>
                             </a>
                           </span>
                      </div>
      </div>
    );
  }
}

export default withTracker(() => {
  Meteor.subscribe('stories');
  Meteor.subscribe('creators');
  return {

  };
})(ImageTooltip);
