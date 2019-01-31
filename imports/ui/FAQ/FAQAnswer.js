import React from 'react';
import { withTracker } from 'meteor/react-meteor-data';
import { Faq } from '../../api/faq';
import { Meteor } from 'meteor/meteor';
import { Session } from 'meteor/session';
import { Link } from 'react-router-dom';

export class FAQAnswer extends React.Component {
constructor(props) {
super(props);
this.state = {

};
}
renderFAQBody() {
if (this.props.id === 'faq1') {

return (
<div>
NovaTerra uses Good Loop to place advertisements on our site in order to complete our goal of raising 50,000 pounds to combat environmental degradation and climate change by 2020. However, as you may have noticed, Good Loop ads aren't any ordinary ads. Instead, Good loop ads are very short videos that you must watch in full in order to donate to a charity of your choice as well as to NovaTerra. After those 15 seconds, you will be given the choice of donating to one of many charities.
<br/><br/>
50% of all earnings made from the advertisement will be donated to that same charity, 40% to NovaTerra and 10% to Good Loop. Of the 40% of the earnings that goes to NovaTerra, we donate 90% of that to charities working to combat climate change and environmental degradation. With some quick calculations you will find that in all, 86% of all earnings made from the ad goes towards charities.
<br/> <br/>
If you wish to learn more about how Good Loop works, <a className="link" href="https://www.good-loop.com/how-it-works">click here</a>.
<br/> <br/>
How many times you wish to look at the ads is up to you, but we would encourage you to not over-watch in order to donate, as this could end our partnership with Good Loop. Although if you watch one 15 second-video per story you should be fine, but as I said before, how often you decide to watch these advertisements is completely up to you.
<br/><br/>
If you have any other questions about how Good Loop works, please don't hesitate in <Link to='/contact' className="link">contacting us</Link> or <a href="https://www.good-loop.com/contact-us" className="link">contacting Good Loop</a> is you wish to.
<br/><br/>
Hope this helps,
<br/><br/>
Oliver from NovaTerra
</div>
)
} else if (this.props.id === 'faq2') {

return (
<div>
Unfortunately, NovaTerra has not yet established a way for advertisers to apply to advertise on our site. We have partnered with <a href="https://www.good-loop.com/" className="link">Good Loop</a>, a startup working to help websites and content creators make a difference by donating ad revenue. With Good Loop, we aren't able to choose our advertisers as we simply place the ads on a certain part of the page.
<br/> <br/>
If we do make changes to allow advertisers to place other advertisements on NovaTerra, it will be featured on this same FAQ page.
<br/> <br/>
If you have any other questions about advertising on NovaTerra, please don't hesitate in <Link to='/contact' className="link">contacting us</Link>.
<br/><br/>
Hope this helps,
<br/><br/>
Oliver from NovaTerra
</div>
)

} else if (this.props.id === 'faq3') {

return (
<div>
We can't really answer this question for you. You can choose when and how many times you choose to watch these video ads. We do, however, encourage to not over-watch this advertisements in order to donate. We understand that we all want to do good and it has never been easier, but if too many NovaTerra users do this we could have our partnership with Good Loop terminated. This would cause us to be unable to complete our goal as a community of raising 50,000 pounds by 2020.
<br/> <br/>
We advise against watching more than one Good Loop ad per story you read. I hope this gives you somewhat of an idea of how often or when you should watch these video ads.
<br/> <br/>
If you still aren't sure, please don't hesitate in <Link to='/contact' className="link">contacting us</Link> or <a href="https://www.good-loop.com/contact-us" className="link">contacting Good Loop</a>, we won't usually bite.
<br/> <br/>
Hope this helps,
<br/><br/>
Oliver from NovaTerra
</div>
)

} else if (this.props.id === 'faq4') {

return (
<div>
You can contact NovaTerra in two ways. The first way is by completing <Link to='/contact' className="link">this form</Link> where you can provide a description as to what you may need help with. The second way is to contact us with this email: contact@novaterra.earth. You may want to choose this option if you have are having difficulties explaining your issue in words and would like to send us some screenshots or other attachments. Note that in either scenario, NovaTerra will send a reply back to the email you used in the form or the one you used to send us an email. Please take into account that if you complete the form while you are signed in, we will send a reply to the email registered with your account. We typically take no longer than 48 hours to reply. You are free to reply to the email we send to you as we do not send any automated emails.
<br/> <br/>
Hope this helps,
<br/><br/>
Oliver from NovaTerra
</div>
)

} else if (this.props.id === 'faq5') {

return (
<div>
We take no longer than 48 hours to reply to a contact form you filled out or to an email. Although we typically take less time than this. If we still haven't answered after 48 hours please don't worry, this means we must have missed your email (Sorry!) and we would encourage you to send us another email or submit the <Link to='/contact' className="link">contact form</Link> again. If you have contacted us to give suggestions for new features or ways in which we could improve, we send you a reply with our thoughts on these suggestions and when we may put them into practice.
<br/> <br/>
If you have any other questions about absolutely anything, please don't hesitate in <Link to='/contact' className="link">contacting us</Link>.
<br/> <br/>
Hope this helps,
<br/><br/>
Oliver from NovaTerra
</div>
)

} else if (this.props.id === 'faq6') {

return (
<div>
Absolutely. You have full ownership over any content you publish on NovaTerra. We, the founders of NovaTerra, are creators and storytellers just like you and we understand the hard work and time you have to put into the stories you tell.
<br/> <br/>
For this reason, we've decided that any content published by our users is always under their control. We value this so much that we made it a core principle of ours, as seen on our <Link to="/mission">mission page</Link>. This means NovaTerra or any of its current or future affiliates will not have access to copy or remove any stories published on our site.
<br/> <br/>
NovaTerra just makes a review of your article before it is published to ensure that any information you included is reliable and appropriate for our site. If you wish to update your article, we will need to review it again to ensure that it is still appropriate and if sources are used, that they are trustworthy. NovaTerra is a platform to connect readers to creators, but not to take the stories away from the creators. Having control over any content you published also allows you to publish your story on another publishing site such as Medium or a blog you may have created yourself. This are countless benefits to having the stories in the hands of the creators and we want to keep it this way. Thank you for your support, NovaTerra.
<br/> <br/>
If you have any other questions about story rights, please don't hesitate in <Link to='/contact' className="link">contacting us</Link>.
<br/><br/>
Hope this helps,
<br/> <br/>
Oliver from NovaTerra
</div>
)

} else if (this.props.id === 'faq8') {

  return (
  <div>
  Please notify us as soon as possible by contacting us. Please provide the details as to where you found this copyright content as well as proof that it has been unfairly taken from another source. If this content belongs to you please provide proof as to where this content was taken from and proof that we can confirm it has indeed been copyrighted. \n \n Note that this content includes text and any other form of media such as images, videos, social media posts and so forth. We are very sorry to hear this and will the copyright content as soon as we can get in contact with you and the user who published this copyright content. Sorry in advance.
  <br/><br/>
  If you have any other questions about copyright content or anything you may need help with, please don't hesitate in <Link to='/contact' className="link">contacting us</Link>.
  <br/><br/>
  Hope this helps,
  <br/> <br/>
  Oliver from NovaTerra
  </div>
  )

} else if (this.props.id === 'faq9') {

  return (
  <div>
  You will be able to find our charities on our <Link to='/donate' className="link">donate page</Link>. Here you will be presented with a list of charities, all helping to combat climate change and other environmental issues. Some of these charities we actively donate to as shown on our mission page. Others we know well and can confirm that they are trustworthy. Please make sure to learn about all the charities on this page before deciding which to donate to as this will help you make the difference you truly wish to make. Please also note that charities are organized in no particular order, which means that ones listed at the top are not necessarily those that are the most popular or spend a higher percentage of your donation on their actual cause. You may also want to check other websites, such as Charity Navigator, to see just this.
  <br/><br/>
  If you have any other questions about our donate page or anything else you may need help with, please don't hesitate in <Link to='/contact' className="link">contacting us</Link>.
  <br/><br/>
  Hope this helps,
  <br/> <br/>
  Oliver from NovaTerra
  </div>
  )

} else if (this.props.id === 'faq10') {

  return (
  <div>
  No. We do not accept donations as we have chosen not to rely on our users to keep us afloat. Instead, we raise funding through the many advertisements you can see across our site. If you would wish to see an ad-free version of NovaTerra, please <Link to='/contact' className="link">contact us</Link> and tell us any suggestions or advice you may have. Note that there is also no real reason to donate to NovaTerra as all earnings that are generated on this site go to the many charities you can donate to as well. If you wish to see where our earnings are spent check out our <Link to='/mission' className="link">mission page</Link>. If you wish to support us in some way, read our articles and watch an ad every once in a while. If you are feeling especially generous, check out our <Link to='/donate' className="link">donate page</Link> where you could make an even larger impact. Just remember: the world wouldn't be the same without you. Thank you for supporting NovaTerra.
  <br/> <br/>
  If you have any other questions about our donate page or anything else you may need help with, please don't hesitate in <Link to='/contact' className="link">contacting us</Link>.
  <br/><br/>
  Hope this helps,
  <br/> <br/>
  Oliver from NovaTerra
  </div>
  )

} else if (this.props.id === 'faq11') {

  return (
  <div>
  We are sorry to hear you wish to remove your charity from our <Link to='/donate' className="link">donate page</Link>. Please <Link to='/contact' className="link">contact us</Link> and provide proof that you represent this charity and are in a position to remove your charity from our website. If possible, we would very much appreciate any feedback you can give us as to why you decided to remove your charity from our donate page. If you ever decide to re-join our donate page in the future, feel free to do so to by <Link to='/contact' className="link">contacting us</Link>. We will be more than happy to invite you back.
  <br/> <br/>
  If you have any other questions or anything else you may need help with, please don't hesitate in contacting us.
  <br/> <br/>
  Hope this helps,
  <br/> <br/>
  Oliver from NovaTerra
  </div>
  )

} else if (this.props.id === 'faq12') {

  return (
  <div>
  You will need to <Link to='/contact' className="link">contact us</Link> to add your charity to our <Link to='/donate' className="link">donate page</Link>. Here, you will need to provide proof that you are in a position to give us the rights to display your charity on our website. You will also need to provide a description of up to 40 words about your charity similar to the ones already shown on our donate page. Please take into account that to join our donate page, we will need to make some research to confirm that you are a trustworthy charity. This does not mean you need to be a large and well-known charity. As long as we can confirm that you are using the donations you receive to combat environmental issues we will gladly accept you to join our list of charities.
  <br/> <br/>
  If you have any other questions about joining our donate page or anything else you may need help with, please don't hesitate in <Link to='/contact' className="link">contacting us</Link>.
  <br/> <br/>
  Hope this helps,
  <br/> <br/>
  Oliver from NovaTerra
  </div>
  )

} else if (this.props.id === 'faq13') {

  return (
  <div>
  Yes and we encourage you to do so. <Link to='/contact' className="link">Contact us</Link> and provide a new description of roughly the same size (40 words). We will then proceed to review this new description with you once we've received it to make sure it's appropriate and of the correct length. We will also, however, require proof that you are from the charity and are in a position to represent them. From there, if we confirm that you are from this charity, we will replace the existing charity description with the new description you have provided.
  <br/> <br/>
  If you have any other questions about our <Link to='/donate' className="link">donate page</Link> or anything else you may need help with, please don't hesitate in <Link to='/contact' className="link">contacting us</Link>.
  <br/> <br/>
  Hope this helps,
  <br/> <br/>
  Oliver from NovaTerra
  </div>
  )

} else if (this.props.id === 'faq14') {

  return (
  <div>
  No. We do not track the number of clicks each charity receives and even if we did, we wouldn't know how many of those clicks ended up donating. We or the charities do not use cookies to track these donations, so any donation made through this page is completely anonymous. Therefore, any amount you donate will not be included in our earnings displayed on our <Link to='/mission' className="link">mission page</Link>. Also, note that these charities are displayed in no particular order, so we encourage you to check out all of them before deciding to donate in order for to make the impact you where you truly wish to make it. Each charity is helping to make a difference in a slightly different way, so make sure to choose the one that's creating the future you truly wish to see.
  <br/> <br/>
  If you have any other questions about how our <Link to='/donate' className="link">donate page</Link> works or anything else you may need help with, please don't hesitate in <Link to='/contact' className="link">contacting us</Link>.
  <br/> <br/>
  Hope this helps,
  <br/> <br/>
  Oliver from NovaTerra
  </div>
  )

} else if (this.props.id === 'faq15') {

  return (
  <div>
  If you wish to see the amount of money we've raised so far, click here to go to our <Link to='/mission' className="link">mission page</Link>. Here, you will also be able to see how far we've progressed on our mission to raise 50,000 pounds by 2020. Below this, you will see how our profit is being distributed to each of our charities. You will also be able to see our revenue model and spending model on this page. If you wish to see our complete list of trusted environmental charities, check out our <Link to='/donate' className="link">donate page</Link>.
  <br/> <br/>
  If you have any other questions about NovaTerra's finances or anything you may need help with or are interested in, please don't hesitate in <Link to='/contact' className="link">contacting us</Link>.
  <br/> <br/>
  Hope this helps,
  <br/> <br/>
  Oliver from NovaTerra
  </div>
  )

} else if (this.props.id === 'faq16') {

  return (
  <div>
  If you have stayed at NovaTerra long enough, you will probably know that we are constantly adding new features and finding new ways to improve our site. For this reason, we would love to hear any thoughts or suggestions you may have for NovaTerra. Please <Link to='/contact' className="link">contact us</Link> about your idea and will we soon get in contact you with our thoughts on it. All suggestions are welcome, as this will help improve the user-experience on our website and possibly help us, the NovaTerra community, get closer to achieving our 2020 goal. We sincerely appreciate any support you can give us.
  <br/> <br/>
  If you have any other questions about features or anything else you may need help with, please don't hesitate in <Link to='/contact' className="link">contacting us</Link>.
  <br/> <br/>
  Hope this helps,
  <br/> <br/>
  Oliver from NovaTerra
  </div>
  )

} else if (this.props.id === 'faq17') {

  return (
  <div>
  NovaTerra was first founded under the name CCRO, which stood for Climate Change Reversal Organization. CCRO first hit the internet on the 16th of November 2017. Although back then, CCRO looked more like a blog than what NovaTerra is today. As our project began looking more and more like a social platform, we decided to change the name to Novaterra on the 7th of February 2018. NovaTerra is still a relatively small website and we hope to see NovaTerra grow and reach new milestones in <Link to='/mission' className="link">our mission</Link> of donating 50,000 pounds for environmental causes by 2020. But without the support from users like you, we will never be able to achieve this mission. Thank you.
  <br/> <br/>
  If you have any other questions about NovaTerra or anything else you may need help with, please don't hesitate in <Link to='/contact' className="link">contacting us</Link>.
  <br/> <br/>
  Hope this helps,
  <br/> <br/>
  Oliver from NovaTerra
  </div>
  )

} else if (this.props.id === 'faq18') {

  return (
  <div>
  NovaTerra has decided that in order to complete our mission of raising awareness and funding to combat environmental degradation and climate change, we need to make our stories accessible to everyone. For this reason, we have not relied on paid subscriptions or donations from our users to keep our site running. We have opted for a relatively new advertising service called <a href="https://www.good-loop.com/" className="link">Good Loop</a>. Good Loop produces ads that don't distract from the content, produce higher earnings, but most importantly allow us to get closer to completing our goal of raising 50,000 pounds by 2020. 90% of all revenue generated from these ads on NovaTerra goes towards achieving this goal. You will find Good Loop ads below the title as well as another just below the comment section of each story. You will not find any other advertisement on any other page. If you would like to learn more about Good Loop and how it works click here.
  <br/> <br/>
  If you have any other questions about Good Loop, please don't hesitate in <Link to='/contact' className="link">contacting us</Link> or <a href="https://www.good-loop.com/contact-us" className="link">contacting Good Loop</a>.
  <br/> <br/>
  Hope this helps,
  <br/> <br/>
  Oliver from NovaTerra
  </div>
  )

} else if (this.props.id === 'faq19') {

  return (
  <div>
  NovaTerra is a non-profit social platform working to raise awareness and funding for the most pressing environmental issues we face today. In order to combat these environmental issues, NovaTerra has set the goal of donating 50,000 pounds by 2020 for charities focused on these issues.
  <br/> <br/>
  NovaTerra has decided that we will not work with paid subscriptions as we want our content to be available to everyone. We have opted for ads 15-second video ads by Good Loop on the left-hand side of our stories.
  <br/> <br/>
  Because of the fact that NovaTerra is a non-profit platform, we cannot pay our users for the stories they publish. However, any story published on NovaTerra belongs to the user that uploaded it. Therefore, any user has the ability to re-publish their content on any other site. What this means is that you can both profit and contribute to a change with your stories.
  <br/> <br/>
  NovaTerra more than an organisation is a community, where we all work together to drive change, pushing ourselves to new limits to fight this crisis that seems to be affecting all aspects of our lives. Join the NovaTerra community and together we can make sure climate change and other environmental issues are put to a halt once and for all.
  <br/> <br/>
  If you have any other questions about NovaTerra or anything else you may need help with, please don't hesitate in <Link to='/contact' className="link">contacting us</Link>.
  <br/> <br/>
  Hope this helps,
  <br/> <br/>
  Oliver from NovaTerra
  </div>
  )

} else if (this.props.id === 'faq20') {

  return (
  <div>
  NovaTerra's impact is best seen through our progression on our 2020 goal of donating 50,000 pounds towards environment-related issues. You can also see our impact through our yearly financial spreadsheets reporting all earnings made on our site. Both of these are featured on our <Link to='/mission' className="link">mission page</Link>. On this page we also feature how are distributing this funding to the various charities we support.
  <br/> <br/>
  If you have any other questions about NovaTerra or anything you may need help with, please don't hesitate in <Link to='/contact' className="link">contacting us</Link>.
  <br/> <br/>
  Hope this helps,
  <br/> <br/>
  Oliver from NovaTerra
  </div>
  )

} else if (this.props.id === 'faq21') {

  return (
  <div>
  On our <Link to='/get-involved' className="link">Get Involved</Link> page, you will be able to see four ways in which you can get involved on NovaTerra. For a quick summary, the four ways include:
  <br/> <br/>
  1) Reading stories on NovaTerra
  <br/> <br/>
  2) Joining the NovaTerra community by creating an account
  <br/> <br/>
  3) Creating your first story on NovaTerra
  <br/> <br/>
  4) Donating to one of the many charities listed on our <Link to='/donate' className="link">donate page</Link>
  <br/> <br/>
  If you have any other questions about NovaTerra or anything you may need help with, please don't hesitate in <Link to='/contact' className="link">contacting us</Link>.
  <br/> <br/>
  Hope this helps,
  <br/> <br/>
  Oliver from NovaTerra
  </div>
  )

} else if (this.props.id === 'faq22') {

  return (
  <div>
  We are working hard to add as many questions as we can into our FAQ in order to make both our users' life and our life easier. If you couldn't find your question listed here, please don't hesitate in <Link to='/contact' className="link">contacting us</Link> instead, we'd love to hear from you. You could contact us either through <Link to='/contact' className="link">this form</Link> or by emailing us at contact@novaterra.earth.
  <br/> <br/>
  Hope this helps,
  <br/> <br/>
  Oliver from NovaTerra
  </div>
  )

} else if (this.props.id === 'faq25') {

  return (
  <div>
  Hi, I'm guessing you're new around here so I just want to quickly say... Welcome! It's great to have you around here. I'll give you a little tour of how to find stories on NovaTerra that will best suit your interests. There are many ways in which you can navigate through NovaTerra to simply explore our collection of stories or to find one story in particular.
  <br/> <br/>
  If you wish to see the most popular stories and have a look around, you may want to check out our <Link to='/' className="link">homepage</Link>. On our homepage, we feature the most popular and latest stories on all of NovaTerra as well as others personalised for you. This is the best option if you are new to our site and would simply like see the kind of stories we have up for display.
  <br/> <br/>
  If you would like to see the different categories, creators and tags on NovaTerra, consider going to our <Link to='/explore' className="link">explore page</Link>. On this page, you can look for content that may be a bit more specific and closer to your interests by providing you with more control over the stories you see. Choose this option if you aren't sure what exactly it is that you may be looking for, but have somewhat of an idea.
  <br/> <br/>
  On the other hand, if you are looking for a specific story or stories based on a certain topic, consider going to our <Link to='/search' className="link">search page</Link>. From here you can search for any keywords that may help you find the story or types of stories you are looking for. Please note that on our search page you can filter the results by clicking on the 'filter' button.
  <br/> <br/>
  If you have any other questions about how to navigate on our site, please don't hesitate in <Link to='/contact' className="link">contacting us</Link>.
  <br/> <br/>
  Hope this helps,
  <br/> <br/>
  Oliver from NovaTerra
  </div>
  )

} else if (this.props.id === 'faq26') {

  return (
  <div>
  Ready to publish your first story? Before publishing a story you will first have had to create a draft. On the top of your current page, click on the '+' icon. You will see an option to 'create a story'. This will create a new draft where you can start writing your story. If you have already created a story, you can click on your profile image on the top-right corner of the screen and select 'profile'. Here, under 'drafted' you will be able to see all of your drafts.
  <br/><br/>
  Once you are ready to publish your story, go to the editor page of this story by clicking on the story. On this page, you will see a button on the top-right corner to 'publish'. You will want to select this option. Once you have done this, you will be brought to the 'waiting' page where your article will be reviewed by NovaTerra and published. This process takes no longer than 24 hours. Once this process is done you will get a notification which you will be able to see by pressing the 'heart' icon on the top-right corner of your screen.
  <br/> <br/>
  You will receive a message saying that the story either has or hasn't been published. If it has been published, it will display under the 'published' articles on your profile. If it hasn't been published, make sure to click the 'learn why' button to see our comments. Make these changes quickly and the next time you press 'publish', it will go straight through. Once you've done this, you can sit back, relax and see the feedback you get from others creators on NovaTerra!
  <br/> <br/>
  If you have any other questions about publishing stories, please don't hesitate in <Link to='/contact' className="link">contacting us</Link>.
  <br/> <br/>
  Hope this helps,
  <br/> <br/>
  Oliver from NovaTerra
  </div>
  )

} else if (this.props.id === 'faq27') {

  return (
  <div>
  NovaTerra does not have set guidelines for stories as we want our creators to be as free and creative in their writing as possible. Being creators ourselves, we know that stories come in all shapes and sizes. However, we do review every story before it is published to make sure it is appropriate, not spam and any information used is from reliable sources. Don't let this discourage you from making stories, we are not picky with stories, we welcome all genuine stories. What we mainly try to avoid is stories that include misinformation, copyrighted content or stories used as a form of spam or sponsored content. We also only allow advertising inside stories that promote environmentalism (i.e. environmentally-conscious companies or charities).  NovaTerra just wants to be a platform that is open to all creators where the is a positive atmosphere that promotes sustainability and activism.
  <br/> <br/>
  If you have any other questions about navigating our site, please don't hesitate in <Link to='/contact' className="link">contacting us</Link>.
  <br/> <br/>
  Hope this helps,
  <br/> <br/>
  Oliver from NovaTerra
  </div>
  )

} else if (this.props.id === 'faq29') {

  return (
  <div>
  You can click on your profile image on the top-right corner of the screen and then go to 'profile'. From here, you will have to go to your 'published' stories and select 'draft'. What this does is that it drafts your story making it viewable just by you and not anyone else. This is meant to be an intermediary phase, so you don't have to delete your story completely in order to make changes to it or remove it for some time. From here, if you wish to delete the draft, you can click 'delete' to remove the story from your profile. If you don't like this feature or would like to change it in some way, please <Link to='/contact' className="link">reach out</Link> to us.
  <br/> <br/>
  If you have any other questions about managing stories, please don't hesitate in <Link to='/contact' className="link">contacting us</Link>.
  <br/> <br/>
  Hope this helps,
  <br/> <br/>
  Oliver from NovaTerra
  </div>
  )

} else if (this.props.id === 'faq30') {

  return (
  <div>
  Here is a short video explaining all the features our editors have to provide. If you are not sure how to add images, social media posts, videos or anything related to formatting, make sure to follow the tutorial below carefully. If you are new to creating stories and haven't started editing yet, it also may be a good idea to learn how our editors work. I'll stop spoiling the video and let you get creating your stories!
  <br/><br/>
  (show a video tutorial)
  <br/> <br/>
  If you have any other questions about creating and formatting stories, please don't hesitate in <Link to='/contact' className="link">contacting us</Link>.
  <br/> <br/>
  Hope this helps,
  <br/> <br/>
  Oliver from NovaTerra
  </div>
  )

} else if (this.props.id === 'faq31') {

  return (
  <div>
  On NovaTerra, in order to edit a published story, you will need to first make it a draft. What this does is that if you are in the process of making changes to it, you can it off the main pages and re-publish it once you've made the changes you wish to make.
  <br/> <br/>
  In order to do this you will need to navigate to the profile page by clicking on your profile image on the top-right corner of your screen and click 'profile'. Here you will want to go to your 'published' stories and finding the one you want to edit. You will want to click the 'draft'. This story will now appear under your drafts where you can edit it however much you want. When you are ready to publish this story, click on the 'publish' button on the editor page and we will begin our reviewing process again. All of the likes and comments your story recieied will still be there when you re-publish it.
  <br/> <br/>
  If you have any other questions about editing stories, please don't hesitate in <Link to='/contact' className="link">contacting us</Link>.
  <br/> <br/>
  Hope this helps,
  <br/> <br/>
  Oliver from NovaTerra
  </div>
  )

} else if (this.props.id === 'faq32') {

  return (
  <div>
  Yes. However, there is a limit of 75 words used directly and in all cases, you will need to reference close to the text used, the author of the story as well as NovaTerra. If you wish to use another source of content such as photos or videos, you can use those as well as long as you reference the author of the story as well as NovaTerra. Take into account that this only applies in the case that the story does not belong to you. If you are the creator of this story, you have full rights to publish the entire story anywhere online as mentioned in our other FAQ questions. If this story does not belong to you and you wish to use more than 75 words, you will need to contact the individual author, not NovaTerra. All rights to the story belong to the author and NovaTerra will not help you in getting the rights to use this story. If you cannot find the email address of this author, NovaTerra will not be able to share these details with you either. Sorry for the inconveniences, we just take privacy very seriously!
  <br/> <br/>
  If you have any other questions about using content from NovaTerra, please don't hesitate in <Link to='/contact' className="link">contacting us</Link>.
  <br/> <br/>
  Hope this helps,
  <br/> <br/>
  Oliver from NovaTerra
  </div>
  )

} else if (this.props.id === 'faq33') {

  return (
  <div>
  If you wish to use less than 75 words from a story, you can use that same text on your site as long as the author and NovaTerra are referenced. If you wish to use a visual such as a video or image, you can use it as well, again, as long as the author and NovaTerra are referenced. If, however, you wish to use a full story, you will need to get the rights to do so from the author. If you cannot find the email address of the author from their profile, please do not contact NovaTerra, we cannot share these details from our creators for privacy reasons.
  <br/> <br/>
  If you have any other questions about using stories from NovaTerra, please don't hesitate in <Link to='/contact' className="link">contacting us</Link>.
  <br/> <br/>
  Hope this helps,
  <br/> <br/>
  Oliver from NovaTerra
  </div>
  )

} else if (this.props.id === 'faq34') {

  return (
  <div>
  On NovaTerra, any story published belongs to the creator that published it. This gives creators like you full rights over the stories you write, letting you remove any story that belongs to you from our site at any point in time. Also, the great thing about having full rights to your stories is that you can publish your story elsewhere online as well. If you wish to reach out to readers on sites like <a href="https://medium.com/" className="link">Medium</a> and if you want to support NovaTerra's goal of raising 50,000 euros by 2020, you can both! This lets you reach as many readers as possible. What creators have also chosen to do is that if they want to get paid for the stories they write and make a difference, they can publish their stories on different sites to achieve either goal.
  <br/> <br/>
  If you have any other questions about story rights, please don't hesitate in <Link to='/contact' className="link">contacting us</Link>.
  <br/> <br/>
  Hope this helps,
  <br/> <br/>
  Oliver from NovaTerra
  </div>
  )

} else if (this.props.id === 'faq35') {

  return (
  <div>
  Please notify us as soon as possible <Link to='/contact' className="link">here</Link>. You will need to provide details of where this inaccurate information is located in our stories as well as proof as to why this information is incorrect.
  <br/> <br/>
  If you have any other questions about misinformation on our site, please don't hesitate in <Link to='/contact' className="link">contacting us</Link>.
  <br/> <br/>
  Hope this helps,
  <br/> <br/>
  Oliver from NovaTerra
  </div>
  )

} else if (this.props.id === 'faq36') {

  return (
  <div>
  Please notify us as soon as possible <Link to='/contact' className="link">here</Link>. You will need to provide the details as to where this offensive information is located in our stories. We are very sorry in advance.
  <br/> <br/>
  If you have any other questions about stories on NovaTerra please don't hesitate in <Link to='/contact' className="link">contacting us</Link>.
  <br/> <br/>
  Hope this helps,
  <br/> <br/>
  Oliver from NovaTerra
  </div>
  )

} else if (this.props.id === 'faq37') {

  return (
  <div>
  If you have found a bug on a website please <Link to='/contact' className="link">contact us</Link> as soon as possible. Please provide details as to where you found this bug and how our website responded. This could include any bug such as a link going to the wrong location. Thank you for your support, NovaTerra.
  <br/> <br/>
  If you have any other questions about website bugs please don't hesitate in <Link to='/contact' className="link">contacting us</Link>.
  <br/> <br/>
  Hope this helps,
  <br/> <br/>
  Oliver from NovaTerra
  </div>
  )

} else if (this.props.id === 'faq38') {

  return (
  <div>
  Unfortunately, we do not generate enough revenue on our site to be giving out rewards for finding bugs. 90% of all revenue generated on our site is donated, leaving just 10% for costs. If we deciden to implement some sort of reward system for finding bugs in the future, we will make sure to notify you. Sorry for the inconveniences, we truly appreciate your support.
  <br/> <br/>
  If you have any other questions about website bugs, please don't hesitate in <Link to='/contact' className="link">contacting us</Link>.
  <br/> <br/>
  Hope this helps,
  <br/> <br/>
  Oliver from NovaTerra
  </div>
  )

}
}
render() {
    return (
      <div>
        {this.renderFAQBody()}
      </div>
    );
  }
}

export default withTracker(() => {
return {

};
})(FAQAnswer);
