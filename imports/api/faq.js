import { Mongo } from 'meteor/mongo';
import { Meteor } from 'meteor/meteor';
import moment from 'moment';
import SimpleSchema from 'simpl-schema';
import React from 'react';

export const Faq = new Mongo.Collection('faq');

let Faq1 = {
title: "How Does NovaTerra's Advertisements Work?",
unCapTitle: "how Does novaTerra's advertisements work",
shortAnswer: 'NovaTerra uses Good Loop, a service providing short video ads',
topic: 'Advertising',
mainImage: 'images/faqImages/HowDoesNovaTerraAdvertisementsWork.jpg',
faqMainImage: '../images/faqImages/HowDoesNovaTerraAdvertisementsWork.jpg',
lastUpdated: moment().valueOf(),
_id: 'faq1',
link: "/faq/how-does-novaTerra's-advertisements-work",
type: 'faq',
numUseful: 0,
numNotUseful: 0,
totalEdits: 0,
contributors: 1,
views: 0,
body: "NovaTerra uses Good Loop to place advertisements on our site in order to complete our goal of raising 50,000 pounds to combat environmental degradation and climate change by 2020. However, as you may have noticed, Good Loop ads aren't any ordinary ads. Instead, Good loop ads are very short videos that you must watch in full in order to donate to a charity of your choice as well as to NovaTerra. After those 15 seconds, you will be given the choice of donating to one of many charities. 50% of all earnings made from the advertisement will be donated to that same charity, 40% to NovaTerra and 10% to Good Loop. Of the 40% of the earnings that goes to NovaTerra, we donate 90% of that to charities working to combat climate change and environmental degradation. With some quick calculations you will find that in all, 86% of all earnings made from the ad goes towards charities. \n \n If you wish to learn more about how Good Loop works, click here (https://www.good-loop.com/how-it-works). \n \n How many times you wish to look at the ads is up to you, but we would encourage you to not over-watch in order to donate, as this could end our partnership with Good Loop. Although if you watch one 15 second-video per story you should be fine, as I said before, how often you decide to watch these advertisements is completely up to you. \n \n If you have any other questions about how Good Loop works, please don't hesitate in contacting us or contacting Good Loop is you wish to. \n \n Hope this helps, \n \n Oliver from NovaTerra",
tags: ['work', 'advertisements', 'ad', 'advert', 'ads', 'function']
}

let Faq2 = {
title: "How Can I Advertise on NovaTerra?",
unCapTitle: "how can i advertise on novaterra",
shortAnswer: "Unfortunately, we don't have other advertising spaces for advertisers. You will need to contact Good Loop instead.",
topic: 'Advertising',
mainImage: 'images/faqImages/HowCanIAdvertiseonNovaTerra.jpg',
faqMainImage: '../images/faqImages/HowCanIAdvertiseonNovaTerra.jpg',
lastUpdated: moment().valueOf(),
_id: 'faq2',
link: "/faq/how-can-i-advertise-on-novaterra",
type: 'faq',
numUseful: 0,
numNotUseful: 0,
totalEdits: 0,
contributors: 1,
views: 0,
body: "Unfortunately, NovaTerra has not yet established a way for advertisers to apply to advertise on our site. We have partnered with Good Loop, a startup working to help websites and content creators make a difference by donating ad revenue. With Good Loop, we aren't able to choose our advertisers as we simply place the ads on a certain part of the page." +
"\n \n If we do make changes to allow advertisers to place other advertisements on NovaTerra, it will be featured on this same FAQ page." +
"\n \n If you have any other questions about advertising on NovaTerra, please don't hesitate in contacting us. \n \n Hope this helps, \n \n Oliver from NovaTerra.",
tags: ['advertise', 'ad', 'advert', 'ads', 'advertisements', 'place ads']
}

let Faq3 = {
title: "When Can I Watch a NovaTerra Advertisement?",
unCapTitle: "when can i watch a novaterra advertisement",
shortAnswer: 'This is completely up to you, but we recommend you do not abuse this feature.',
topic: 'Advertising',
mainImage: 'images/faqImages/WhenCanIWatchaNovaTerraAdvertisement.jpg',
faqMainImage: '../images/faqImages/WhenCanIWatchaNovaTerraAdvertisement.jpg',
lastUpdated: moment().valueOf(),
_id: 'faq3',
link: "/faq/when-can-i-watch-a-novaterra-advertisement",
type: 'faq',
numUseful: 0,
numNotUseful: 0,
totalEdits: 0,
contributors: 1,
views: 0,
body: "We can't really answer this question for you. You can choose when and how many times you choose to watch these video ads. We do, however, encourage to not over-watch this advertisements in order to donate. We understand that we all want to do good and it has never been easier, but if too many NovaTerra users do this we could have our partnership with Good Loop terminated. This would cause us to be unable to complete our goal as a community of raising 50,000 pounds by 2020. \n \n We advise against watching more than one Good Loop ad per story you read. \n \n I hope this gives you somewhat of an idea of how often or when you should watch these video ads. If you still aren't sure, please don't hesitate in contacting us or contacting Good Loop, we won't usually bite. \n \n Hope this helps, \n \n Oliver from NovaTerra",
tags: ['when', 'ad', 'advert', 'ads', 'watch', 'advertisements'],
}

let Faq4 = {
title: "Where Can I Contact NovaTerra?",
unCapTitle: "where can i contact novaterra",
shortAnswer: 'On our contact page, we have a form you can fill out in order to contact us.',
topic: 'Contact',
mainImage: 'images/faqImages/WhereCanIContactNovaTerra.jpg',
faqMainImage: '../images/faqImages/WhereCanIContactNovaTerra.jpg',
lastUpdated: moment().valueOf(),
_id: 'faq4',
link: "/faq/where-can-i-contact-novaterra",
type: 'faq',
numUseful: 0,
numNotUseful: 0,
totalEdits: 0,
contributors: 1,
views: 0,
body: "You can contact NovaTerra in two ways.\n \n The first way is by completing this form where you can provide a description as to what you may need help with. \n \n The second way is to contact us with this email: contact@novaterra.earth \n \n You may want to choose this option if you have are having difficulties explaining your issue in words and wish to send us some screenshots or other attachments. \n \n Note that in either scenario, NovaTerra will send a reply back to the email you used in the form or the one you used to send us an email. Please take into account that if you complete the form while you are signed in, we will send a reply to the email registered with your account. \n \n We typically take no longer than 48 hours to reply. You are free to reply to the email we send to you as we do not send any automated emails. \n \n Hope this helps, \n \n Oliver from NovaTerra",
tags: ['contact', 'message', 'talk to', 'get in contact', 'email', 'customer', 'phone', 'call', 'communicate', 'telephone', 'visit', 'connect', 'NovaTerra'],
}

let Faq5 = {
title: "When Will NovaTerra Respond After Submitting a Contact Form?",
unCapTitle: "when-will-novaterra-respond-after-submitting-a-contact-form",
shortAnswer: 'Up to 48 hours, although typically less.',
topic: 'Contact',
mainImage: 'images/faqImages/WhenWillNovaTerraRespondAfterSubmittingaContactForm.jpg',
faqMainImage: '../images/faqImages/WhenWillNovaTerraRespondAfterSubmittingaContactForm.jpg',
lastUpdated: moment().valueOf(),
_id: 'faq5',
link: "/faq/when-will-novaterra-respond-after-submitting-a-contact-form",
type: 'faq',
numUseful: 0,
numNotUseful: 0,
totalEdits: 0,
contributors: 1,
views: 0,
body: "We take no longer than 48 hours to reply to a contact form you filled out or to an email. Although we typically take less time than this. If we still haven't answered after 48 hours please don't worry, this means we must have missed your email (Sorry!) and we would encourage you to send us another email or submit the contact form again. \n \n If you have contacted us to give suggestions for new features or ways in which we could improve, we send you a reply with our thoughts on these suggestions and when we may put them into practice. \n \n If you have any other questions about absolutely anything, please don't hesitate in contacting us. \n \n Hope this helps, \n \n Oliver from NovaTerra",
tags: ['respond', 'contact', 'contacted', 'get in contact', 'email', 'reply', 'communicate', 'talk', 'submit', 'entered', 'sent', 'after', "hasn't", 'responded', 'replied'],
}

let Faq6 = {
title: "If I Have Published a Story on NovaTerra, Does it Still Belong to me?",
unCapTitle: "if-i-have-published-a-story-on-novaterra-does-it-still-belong-to-me",
shortAnswer: 'You have all rights to anything you publish on NovaTera',
topic: 'Copyright',
mainImage: 'images/faqImages/IfIHavePublishedaStoryonNovaTerra,DoesitStillBelongtome.jpg',
faqMainImage: '../images/faqImages/IfIHavePublishedaStoryonNovaTerra,DoesitStillBelongtome.jpg',
lastUpdated: moment().valueOf(),
_id: 'faq6',
link: "/faq/if-i-have-submitted-an-story-to-novaterra-does-it-still-belong-to-me",
type: 'faq',
numUseful: 0,
numNotUseful: 0,
totalEdits: 0,
contributors: 1,
views: 0,
body: "Absolutely. You have full ownership over any content you publish on NovaTerra. We, the founders of NovaTerra, are creators and storytellers just like you and we understand the hard work and time you have to put into the stories you tell. For this reason, we've decided that any content published by our users is always under their control. We value this so much that we made it a core principle of ours, as seen on our mission page. This means NovaTerra or any of its current or future affiliates will not have access to copy or remove any stories published on our site. NovaTerra just makes a review of your article before it is published to ensure that any information you included is reliable and appropriate for our site. If you wish to update your article, we will need to review it again to ensure that it is still appropriate and if sources are used, that they are trustworthy. NovaTerra is a platform to connect readers to creators, but not to take the stories away from the creators. Having control over any content you published also allows you to publish your story on another publishing site such as Medium or a blog you may have created yourself. This are countless benefits to having the stories in the hands of the creators and we want to keep it this way. Thank you for your support, NovaTrra. \n \n Hope this helps, \n \n Oliver from NovaTerra",
tags: ['copyright', 'belong', 'own', 'rights', 'publish', 'story', 'content', 'ownership'],
}

// let Faq7 = {
// title: "Is NovaTerra Trademarked?",
// unCapTitle: "is-novaterra-trademarked",
// shortAnswer: 'Yes, because na na na',
// topic: 'Copyright',
// mainImage: 'images/faqImages/7g5d.jpg',
// faqMainImage: '../images/faqImages/7g5d.jpg',
// lastUpdated: moment().valueOf(),
// _id: 'faq7',
// link: "/faq/is-novaterra-trademarked",
// type: 'faq',
// numUseful: 0,
// numNotUseful: 0,
// totalEdits: 0,
// contributors: 1,
// views: 0,
// body: "No. NovaTerra is not trademarked or registered, although we are looking to do so soon to help develop NovaTerra and transform it into a powerful tool capable of driving change.  \n \n If you have any other questions about NovaTerra or anything else you may need help with, please don't hesitate in contacting us. \n \n Hope this helps,\n \n Alice from NovaTerra",
// }

let Faq8 = {
title: "Where Can I Report Copyright Content in One of NovaTerra's Stories?",
unCapTitle: "where-can-i-report-copyright-content-in-one-of-novaterra's-Stories",
shortAnswer: 'Please contact us as soon as possible.',
topic: 'Copyright',
mainImage: 'images/faqImages/WhereCanIReportCopyrightContentinOneofNovaTerrasStories.jpg',
faqMainImage: '../images/faqImages/WhereCanIReportCopyrightContentinOneofNovaTerrasStories.jpg',
lastUpdated: moment().valueOf(),
_id: 'faq8',
link: "/faq/where-can-i-report-copyright-content-in-one-of-novaterra's-Stories",
type: 'faq',
numUseful: 0,
numNotUseful: 0,
totalEdits: 0,
contributors: 1,
views: 0,
body: "Please notify us as soon as possible by contacting us. Please provide the details as to where you found this copyright content as well as proof that it has been unfairly taken from another source. \n \n If this content belongs to you please provide proof as to where this content was taken from and proof that we can confirm it has indeed been copyrighted. \n \n Note that this content includes text and any other form of media such as images, videos, social media posts and so forth. \n \n \n \n We are very sorry to hear this and will the copyright content as soon as we can get in contact with you and the user who published this copyright content. Sorry in advance. \n \n If you have any other questions about copyright content or anything you may need help with, please don't hesitate in contacting us. \n \n Hope this helps, \n \n Oliver from NovaTerra",
tags: ['copyright', 'content', 'copy', 'copied', 'taken', 'report', 'mine', 'stolen', 'unfair', 'unfairly'],
}

let Faq9 = {
title: "Where Can I Donate?",
unCapTitle: "where-can-i-donate",
shortAnswer: 'On our donate page, you will find a large selection of charities to donate to.',
topic: 'Donate',
mainImage: 'images/faqImages/whereCanIDonate.jpg',
faqMainImage: '../images/faqImages/whereCanIDonate.jpg',
lastUpdated: moment().valueOf(),
_id: 'faq10',
link: "/faq/where-can-i-donate",
type: 'faq',
numUseful: 0,
numNotUseful: 0,
totalEdits: 0,
contributors: 1,
views: 0,
body: "You will be able to find our charities on our donate page. Here you will be presented with a list of charities, all helping to combat climate change and other environmental issues. Some of these charities we actively donate to as shown on our mission page. Others we know well and can confirm that they are trustworthy. Please make sure to learn about all the charities on this page before deciding which to donate to as this will help you make the difference you truly wish to make.  \n \n Please also note that charities are organized in no particular order, which means that ones listed at the top are not necessarily those that are the most popular or spend a higher percentage of your donation on their actual cause. You may also want to check other websites, such as Charity Navigator, to see just this. \n \n If you have any other questions about our donate page or anything else you may need help with, please don't hesitate in contacting us. \n \n Hope this helps, \n \n Oliver from NovaTerra",
tags: ['donate', 'give', 'money', 'raise', 'charity', 'charities', 'NovaTerra'],
}

let Faq10 = {
title: "Can I Donate to NovaTerra Directly?",
unCapTitle: "can-i-donate-to-novaterra-directly",
shortAnswer: 'NovaTerra does not accept any donations.',
topic: 'Donate',
mainImage: 'images/faqImages/canIDonateDiretlyToNovaTerra.jpg',
faqMainImage: '../images/faqImages/canIDonateDiretlyToNovaTerra.jpg',
lastUpdated: moment().valueOf(),
_id: 'faq9',
link: "/faq/can-i-donate-to-novaterra-directly",
type: 'faq',
numUseful: 0,
numNotUseful: 0,
totalEdits: 0,
contributors: 1,
views: 0,
body: "No. We do not accept donations as we have chosen not to rely on our users to keep us afloat. Instead, we raise funding through the many advertisements you can see across our site. If you would wish to see an ad-free version of NovaTerra, please contact us and tell us any suggestions or advice you may have. \n \n Note that there is also no real reason to donate to NovaTerra as all earnings that are generated on this site go to the many charities you can donate to as well. If you wish to see where our earnings are spent check out our mission page. \n \n If you wish to support us in some way, read our articles and watch an ad every once in a while. If you are feeling especially generous, check out our donate page where you could make an even larger impact. Just remember: the world wouldn't be the same without you. Thank you for supporting NovaTerra. \n \n If you have any other questions about our donate page or anything else you may need help with, please don't hesitate in contacting us. \n \n Hope this helps, \n \n Oliver from NovaTerra",
tags: ['donate', 'give', 'money', 'raise', 'charity', 'charities', 'to', 'NovaTerra'],
}

let Faq11 = {
title: "How Can I Remove my Charity From NovaTerra?",
unCapTitle: "how-can-i-remove-my-charity-from-novaterra",
shortAnswer: 'Contact us with the name of your charity and proof that you are in a position to represent this charity.',
topic: 'Donate',
mainImage: 'images/faqImages/HowCanIRemoveMyCharityFromNovaTerra.jpg',
faqMainImage: '../images/faqImages/HowCanIRemoveMyCharityFromNovaTerra.jpg',
lastUpdated: moment().valueOf(),
_id: 'faq11',
link: "/faq/how-can-i-remove-my-charity-from-novaterra",
type: 'faq',
numUseful: 0,
numNotUseful: 0,
totalEdits: 0,
contributors: 1,
views: 0,
body: "We are sorry to hear you wish to remove your charity from our donate page. \n \n Please contact us and provide proof that you represent this charity and are in a position to remove your charity from our website.  \n \n If possible, we would very much appreciate any feedback you can give us as to why you decided to remove your charity from our donations page. \n \n If you ever decide to re-join our donate page in the future, feel free to do so to by contacting us. We will be happy to invite you back. \n \n If you have any other questions or anything else you may need help with, please don't hesitate in contacting us. \n \n Hope this helps, \n \n Oliver from NovaTerra",
tags: ['donate', 'give', 'money', 'raise', 'charity', 'charities', 'remove', 'delete', 'take', 'out', 'NovaTerra'],
}

let Faq12 = {
title: "How Can I Add my Charity to NovaTerra's Donate Page?",
unCapTitle: "how-can-i-add-my-charity-to-novaterra's-donate-page",
shortAnswer: 'Contact us with the name of your charity and provide some proof that you represent this charity.',
topic: 'Donate',
mainImage: 'images/faqImages/HowCanIAddMyCharityToNovaTerrasDonatePage.jpg',
faqMainImage: '../images/faqImages/HowCanIAddMyCharityToNovaTerrasDonatePage.jpg',
lastUpdated: moment().valueOf(),
_id: 'faq12',
link: "/faq/how-can-i-add-my-charity-to-novaterra's-donate-page",
type: 'faq',
numUseful: 0,
numNotUseful: 0,
totalEdits: 0,
contributors: 1,
views: 0,
body: "You will need to contact us to add your charity to our donate page. Here, you will need to provide proof that you are in a position to give us the rights to display your charity on our website. You will also need to provide a description of up to 40 words about your charity similar to the ones already shown on our donate page.  \n \n Please take into account that to join our donate page, we will need to make some research to confirm that you are a trustworthy charity. This does not mean you need to be a large and well-known charity. As long as we can confirm that you are using the donations you receive to combat environmental issues we will gladly accept you to join our list of charities.  \n \n If you have any other questions about joining our donate page or anything else you may need help with, please don't hesitate in contacting us. \n \n Hope this helps, \n \n Oliver from NovaTerra",
tags: ['donate', 'give', 'money', 'raise', 'charity', 'charities', 'add', 'insert', 'my', 'our', 'NovaTerra'],
}

let Faq13 = {
title: "Can I Change The Description Below my Charity?",
unCapTitle: "can-i-change-the-description-below-my-charity",
shortAnswer: "Yes and we recommend you do so. Just make sure it is 40 words or less.",
topic: 'Donate',
mainImage: 'images/faqImages/CanIChangeTheDescriptionBelowmyCharity.jpg',
faqMainImage: '../images/faqImages/CanIChangeTheDescriptionBelowmyCharity.jpg',
lastUpdated: moment().valueOf(),
_id: 'faq13',
link: "/faq/can-i-change-the-description-below-my-charity",
type: 'faq',
numUseful: 0,
numNotUseful: 0,
totalEdits: 0,
contributors: 1,
views: 0,
body: "Yes and we encourage you to do so. \n \n Contact us and provide a new description of roughly the same size (40 words). We will then proceed to review this new description with you once we've received it to make sure it's appropriate and of the correct length. We will also, however, require proof that you are from the charity and are in a position to represent them. \n \n From there, if we confirm that you are from this charity, we will replace the existing charity description with the new description you have provided. \n \n If you have any other questions about our donate page or anything else you may need help with, please don't hesitate in contacting us.\n \n Hope this helps, \n \n Oliver from NovaTerra",
tags: ['donate', 'give', 'money', 'raise', 'charity', 'charities', 'description', 'paragraph', 'change', 'edit', 'improve', 'remove', 'insert', 'add', 'NovaTerra'],
}

let Faq14 = {
title: "Will NovaTerra Know I Have Donated?",
unCapTitle: "will-novaterra-know-i-have-donate",
shortAnswer: 'No. NovaTerra does not keep track of which charities our users donate to.',
topic: 'Donate',
mainImage: 'images/faqImages/WillNovaTerraKnowIHaveDonated.jpg',
faqMainImage: '../images/faqImages/WillNovaTerraKnowIHaveDonated.jpg',
lastUpdated: moment().valueOf(),
_id: 'faq14',
link: "/faq/will-novaterra-know-i-have-donate",
type: 'faq',
numUseful: 0,
numNotUseful: 0,
totalEdits: 0,
contributors: 1,
views: 0,
body: "No. We do not track the number of clicks each charity receives and even if we did, we wouldn't know how many of those clicks ended up donating. We or the charities do not use cookies to track these donations, so any donation made through this page is completely anonymous. Therefore, any amount you donate will not be included in our earnings displayed on our mission page.\n \n Also, note that these charities are displayed in no particular order, so we encourage you to check out all of them before deciding to donate in order for to make the impact you where you truly wish to make it. \n \n Each charity is helping to make a difference in a slightly different way, so make sure to choose the one that's creating the future you truly wish to see. \n \n Click here to go to our donate page. \n \n If you have any other questions about how our donate page works or anything else you may need help with, please don't hesitate in contacting us. \n \n Hope this helps, \n \n Oliver from NovaTerra",
tags: ['donate', 'give', 'money', 'raise', 'charity', 'charities', 'know', 'donated', 'goal', 'mission', 'included', 'into account', 'NovaTerra'],
}

let Faq15 = {
title: "Where is NovaTerra Donating Their Earnings?",
unCapTitle: "Where-is-novaterra-donating-their-earnings",
shortAnswer: 'To the many charities listed on our mission page.',
topic: 'General',
mainImage: 'images/faqImages/Where isNovaTerraDonatingTheirEarnings.jpg',
faqMainImage: '../images/faqImages/Where isNovaTerraDonatingTheirEarnings.jpg',
lastUpdated: moment().valueOf(),
_id: 'faq15',
link: "/faq/Where-is-novaterra-donating-their-earnings",
type: 'faq',
numUseful: 0,
numNotUseful: 0,
totalEdits: 0,
contributors: 1,
views: 0,
body: "If you wish to see the amount of money we've raised so far, click here to go to our mission page. Here, you will also be able to see how far we've progressed on our mission to raise 50,000 pounds by 2020.  \n \n Below this, you will see how our profit is being distributed to each of our charities. You will also be able to see our revenue model and spending model on this page.  \n \n If you wish to see our complete list of trusted environmental charities, click here to go to our donate page. \n \n If you have any other questions about NovaTerra's finances or anything you may need help with or are interested in, please don't hesitate in contacting us. \n \n Hope this helps, \n \n Oliver from NovaTerra",
tags: ['donate', 'NovaTerra', 'give', 'money', 'raise', 'charity', 'charities', 'donating', 'earnings', 'revenue', 'profit', 'going', 'giving', 'donated'],
}

let Faq16 = {
title: "Where Can I Request a New Feature?",
unCapTitle: "where-can-i-request-a-new-feature",
shortAnswer: 'On our contact page, you can fill out a form or email us at contact@novaterra.earth',
topic: 'General',
mainImage: 'images/faqImages/WhereCanIRequestANewFeature.jpg',
faqMainImage: '../images/faqImages/WhereCanIRequestANewFeature.jpg',
lastUpdated: moment().valueOf(),
_id: 'faq16',
link: "/faq/where-can-i-request-a-new-feature",
type: 'faq',
numUseful: 0,
numNotUseful: 0,
totalEdits: 0,
contributors: 1,
views: 0,
body: "If you have stayed at NovaTerra long enough, you will probably know that we are constantly adding new features and finding new ways to improve our site. For this reason, we would love to hear any thoughts or suggestions you may have for NovaTerra.  \n \n Please contact us about your idea and will we soon get in contact you with our thoughts on it. All suggestions are welcome, as this will help improve the user-experience on our website and possibly help us, the NovaTerra community, get closer to achieving our 2020 goal. We sincerely appreciate any support you can give us.  \n \n If you have any other questions about features or anything else you may need help with, please don't hesitate in contacting us. \n \n Hope this helps, \n \n Oliver from NovaTerra",
tags: ['feature', 'request', 'ask', 'new', 'add', 'addition', 'functionality',],
}

let Faq17 = {
title: "When Was NovaTerra Founded?",
unCapTitle: "when-was-novaterra-founded",
shortAnswer: "NovaTerra was first hit the internet under 'CCRO' in November of 2017",
topic: 'General',
mainImage: 'images/faqImages/WhenWasNovaTerraFounded.jpg',
faqMainImage: '../images/faqImages/WhenWasNovaTerraFounded.jpg',
lastUpdated: moment().valueOf(),
_id: 'faq17',
link: "/faq/when-was-novaterra-founded",
type: 'faq',
numUseful: 0,
numNotUseful: 0,
totalEdits: 0,
contributors: 1,
views: 0,
body: "NovaTerra was first founded under the name CCRO, which stood for Climate Change Reversal Organization. CCRO first hit the internet on the 16th of November 2017. Although back then, CCRO looked more like a blog than what NovaTerra is today. As our project began looking more and more like a professional site, we decided to change the name to Novaterra on the 7th of February 2018. \n \n NovaTerra is still a relatively small website and we hope to see NovaTerra grow and reach new milestones in our mission of donating 50,000 pounds for environmental causes by 2020. But without the support from users like you, we will never be able to achieve this mission. Thank you. \n \n If you have any other questions about NovaTerra or anything else you may need help with, please don't hesitate in contacting us. \n \n Hope this helps, \n \n Oliver from NovaTerra.",
tags: ['founded', 'began', 'started', 'start', 'since', 'established', 'first']
}

let Faq18 = {
title: "How is NovaTerra Fundraising?",
unCapTitle: "how-is-novaterra-fundraising",
shortAnswer: 'NovaTerra is using advertisements, displayed on the right-side of our stories to raise funding for environmental charities.',
topic: 'General',
mainImage: 'images/faqImages/HowIsNovaTerraFunraising.jpg',
faqMainImage: '../images/faqImages/HowIsNovaTerraFunraising.jpg',
lastUpdated: moment().valueOf(),
_id: 'faq18',
link: "/faq/how-is-novaterra-fundraising",
type: 'faq',
numUseful: 0,
numNotUseful: 0,
totalEdits: 0,
contributors: 1,
views: 0,
body: "NovaTerra has decided that in order to complete our mission of raising awareness and funding to combat environmental degradation and climate change, we need to make our stories accessible to everyone. For this reason, we have not relied on paid subscriptions or donations from our users to keep our site running. We have opted for a relatively new advertising service called Good Loop. Good Loop produces ads that don't distract from the content, produce higher earnings, but most importantly allow us to get closer to completing our goal of raising 50,000 pounds by 2020. 90% of all revenue generated from these ads on NovaTerra goes towards achieving this goal. \n \n You will find Good Loop ads below the title as well as another just below the comment section of each story. You will not find any other advertisement on any other page. \n \n If you would like to learn more about Good Loop and how it works click here. \n \n If you have any other questions about Good Loop, please don't hesitate in contacting us or contacting Good Loop. \n \n Hope this helps, \n \n Oliver from NovaTerra",
tags: ['fundraising', 'raising', 'money', 'donate', 'donating', 'ads', 'ad', 'advertisement', 'advert', 'adverts', 'advertisements', 'givng', 'revenue', 'profit']
}

let Faq19 = {
title: "What is NovaTerra?",
unCapTitle: "what-is-novaterra",
shortAnswer: 'NovaTerra is a new social platform working to promote environmental causes.',
topic: 'General',
mainImage: 'images/faqImages/WhatIsNovaTerra.jpg',
faqMainImage: '../images/faqImages/WhatIsNovaTerra.jpg',
lastUpdated: moment().valueOf(),
_id: 'faq19',
link: "/faq/what-is-novaterra",
type: 'faq',
numUseful: 0,
numNotUseful: 0,
totalEdits: 0,
contributors: 1,
views: 0,
body: "NovaTerra is a non-profit social platform working to raise awareness and funding for the most pressing environmental issues we face today. In order to combat these environmental issues, NovaTerra has set the goal of donating 50,000 pounds by 2020 for charities focused on these issues. \n \n NovaTerra has decided that we will not work with paid subscriptions as we want our content to be available to everyone. We have opted for ads 15-second video ads by Good Loop on the left-hand side of our stories. \n \n Because of the fact that NovaTerra is a non-profit platform, we cannot pay our users for the stories they publish. However, any story published on NovaTerra belongs to the user that uploaded it. Therefore, any user has the ability to re-publish their content on any other site. What this means is that you can both profit and contribute to a change with your stories. \n \n NovaTerra more than an organisation is a community, where we all work together to drive change, pushing ourselves to new limits to fight this crisis that seems to be affecting all aspects of our lives. Join the NovaTerra community and together we can make sure climate change and other environmental issues are put to a halt once and for all. \n \n If you have any other questions about NovaTerra or anything else you may need help with, please don't hesitate in contacting us. \n \n Hope this helps, \n \n Oliver from NovaTerra",
tags: ['NovaTerra', 'what', 'what is']
}

let Faq20 = {
title: "Where Can I See NovaTerra's Impact?",
unCapTitle: "where-can-i-see-novaterra's-impact",
shortAnswer: "On our mission page, we display all of our profits and where we're donating them",
topic: 'General',
mainImage: 'images/faqImages/WhereCanISeeNovaTerrasImpact.jpg',
faqMainImage: '../images/faqImages/WhereCanISeeNovaTerrasImpact.jpg',
lastUpdated: moment().valueOf(),
_id: 'faq20',
link: "/faq/where-can-i-see-novaterra's-impact",
type: 'faq',
numUseful: 0,
numNotUseful: 0,
totalEdits: 0,
contributors: 1,
views: 0,
body: "NovaTerra's impact is best seen through our progression on our 2020 goal of donating 50,000 pounds towards environment-related issues. You can also see our impact through our yearly financial spreadsheets reporting all earnings made on our site. \n \n Both of these are featured on our mission page. \n \n On this page we also feature how are distributing this funding to the various charities we support. \n \n If you have any other questions about NovaTerra or anything you may need help with, please don't hesitate in contacting us. \n \n Hope this helps, \n \n Oliver from NovaTerra",
tags: ['impact', 'progress', 'donate', 'donated', 'revenue', 'profit', 'see', 'growth', 'goal', 'mission', 'NovaTerra']
}

let Faq21 = {
title: "Where and How Can I Get Involved?",
unCapTitle: "where-and-how-can-i-get-involved",
shortAnswer: 'On our Get Involved page, you will be able to see all the ways you can get invovled on NovaTerra',
topic: 'General',
mainImage: 'images/faqImages/WhereandHowCanIGetInvolved.jpg',
faqMainImage: '../images/faqImages/WhereandHowCanIGetInvolved.jpg',
lastUpdated: moment().valueOf(),
_id: 'faq21',
link: "/faq/where-and-how-can-i-get-involved",
type: 'faq',
numUseful: 0,
numNotUseful: 0,
totalEdits: 0,
contributors: 1,
views: 0,
body: "On our donate page, you will be able to see four ways in which you can get involved on NovaTerra. For a quick summary, the four ways include: \n \n 1) Reading stories on NovaTerra \n \n 2) Joining the NovaTerra community by creating an account \n \n 3) Creating your first story on NovaTerra \n \n 4) Donating to one of the many charities listed on our donate page \n \n If you have any other questions about NovaTerra or anything you may need help with, please don't hesitate in contacting us. \n \n Hope this helps, \n \n Oliver from NovaTerra",
tags: ['get involved', 'involved', 'action', 'work', 'write', 'donate', 'NovaTerra']
}

let Faq22 = {
title: "I Wasn't Able to Find an Answer in The FAQ.",
unCapTitle: "how-can-i-support-novaterra",
shortAnswer: "Reach out to us on our contact page or by emailing us at contact@novaterra.earth",
topic: 'General',
mainImage: 'images/faqImages/IWasntAbleToFindAnAnswerInThisFaq.jpg',
faqMainImage: '../images/faqImages/IWasntAbleToFindAnAnswerInThisFaq.jpg',
lastUpdated: moment().valueOf(),
_id: 'faq22',
link: "/faq/how-can-i-support-novaterra",
type: 'faq',
numUseful: 0,
numNotUseful: 0,
totalEdits: 0,
contributors: 1,
views: 0,
body: "We are working hard to add as many questions as we can into our FAQ in order to make both our users' life and our life easier. If you couldn't find your question listed here, please don't hesitate in contacting us instead, we'd love to hear from you. You could contact us either through this form or by emailing us at contact@novaterra.earth. \n \n Hope this helps, \n \n Oliver from NovaTerra",
tags: ["can't", 'cant', 'cannot', 'find', 'look', 'not', 'no', 'lost', 'contact', 'email', 'phone', 'message', 'customer', 'service', 'NovaTerra']
}

// let Faq23 = {
// title: "Where Can I Follow NovaTerra",
// unCapTitle: "where-can-i-follow-novaterra",
// shortAnswer: 'Yes, because na na na',
// topic: 'Social Media',
// mainImage: 'images/faqImages/7g5d.jpg',
// faqMainImage: '../images/faqImages/7g5d.jpg',
// lastUpdated: moment().valueOf(),
// _id: 'faq23',
// link: "/faq/where-can-i-follow-novaterra",
// type: 'faq',
// numUseful: 0,
// numNotUseful: 0,
// totalEdits: 0,
// contributors: 1,
// views: 0,
// body: "",
// }
//
// let Faq24 = {
// title: "Does NovaTerra Have a Newsletter?",
// unCapTitle: "does-novaterra-have-a-newsletter",
// shortAnswer: 'Yes, because na na na',
// topic: 'Social Media',
// mainImage: 'images/faqImages/7g5d.jpg',
// faqMainImage: '../images/faqImages/7g5d.jpg',
// lastUpdated: moment().valueOf(),
// _id: 'faq24',
// link: "/faq/does-novaterra-have-a-newsletter",
// type: 'faq',
// numUseful: 0,
// numNotUseful: 0,
// totalEdits: 0,
// contributors: 1,
// views: 0,
// body: "",
// }

let Faq25 = {
title: "Where Can I Find Stories on NovaTerra?",
unCapTitle: "where-can-i-find-stories-on-novaterra",
shortAnswer: 'You can find stories on our home, explore or search page.',
topic: 'Stories',
mainImage: 'images/faqImages/WhereCanIFindStoriesonNovaTerra.jpg',
faqMainImage: '../images/faqImages/WhereCanIFindStoriesonNovaTerra.jpg',
lastUpdated: moment().valueOf(),
_id: 'faq25',
link: "/faq/where-can-i-find-stories-on-novaterra",
type: 'faq',
numUseful: 0,
numNotUseful: 0,
totalEdits: 0,
contributors: 1,
views: 0,
body: "Hi, I'm guessing you're new around here so I just want to quickly say... Welcome! It's great to have you around here. I'll give you a little tour of how to find stories on NovaTerra that will best suit your interests. There are many ways in which you can navigate through NovaTerra to simply explore our collection of stories or to find one story in particular. \n \n If you wish to see the most popular stories and have a look around, you may want to check out our homepage. On our homepage, we feature the most popular and latest stories on all of NovaTerra as well as others personalised for you. This is the best option if you are new to our site and would simply like see the kind of stories we have up for display. \n \n If you would like to see the different categories, creators and tags on NovaTerra, consider going to our explore page. On this page, you can look for content that may be a bit more specific and closer to your interests by providing you with more control over the stories you see. Choose this option if you aren't sure what exactly it is that you may be looking for, but have somewhat of an idea. \n \n On the other hand, if you are looking for a specific story or stories based on a certain topic, consider going to our search page. From here you can search for any keywords that may help you find the story or types of stories you are looking for. Please note that on our search page you can filter the results by clicking on the 'filter' button. \n \n If you have any other questions about how to navigate on our site, please don't hesitate in contacting us. \n \n Hope this helps, \n \n Oliver from NovaTerra.",
tags: ['find', 'see', 'look', 'explore', 'look', 'stories', 'story', 'articles', 'article']
}

let Faq26 = {
title: "How Can I Publish My Story?",
unCapTitle: "how-can-i-publish-my-story",
shortAnswer: 'On the editor page, you will see an option to publish your article on the right-hand corner.',
topic: 'Stories',
mainImage: 'images/faqImages/HowCanIPublishMyStory.jpg',
faqMainImage: '../images/faqImages/HowCanIPublishMyStory.jpg',
lastUpdated: moment().valueOf(),
_id: 'faq26',
link: "/faq/how-can-i-publish-my-story",
type: 'faq',
numUseful: 0,
numNotUseful: 0,
totalEdits: 0,
contributors: 1,
views: 0,
body: "Ready to publish your first story? Before publishing a story you will first have had to create a draft. On the top of your current page, click on the '+' icon. You will see an option to 'create a story'. This will create a new draft where you can start writing your story. If you have already created a story, you can click on your profile image on the top-right corner of the screen and select 'profile'. Here, under 'drafted' you will be able to see all of your drafts. \n \n Once you are ready to publish your story, go to the editor page of this story by clicking on the story. On this page, you will see a button on the top-right corner to 'publish'. You will want to select this option. Once you have done this, you will be brought to the 'waiting' page where your article will be reviewed by NovaTerra and published. This process takes no longer than 24 hours. Once this process is done you will get a notification. which you will be able to see by pressing the 'heart' icon on the top-right corner of your screen. You will receive a message saying that the story either has or hasn't been published. If it has been published, it will display under the 'published' articles on your profile. If it hasn't been published, make sure to click the 'learn why' button to see our comments. Make these changes quickly and the next time you press 'publish', it will go straight through. Once you've done this, you can sit back, relax and see the feedback you get from others creators on NovaTerra! \n \n If you have any other questions about publishing stories, please don't hesitate in contacting us. \n \n Hope this helps, \n \n Oliver from NovaTerra.",
tags: ['publish', 'submit', 'post', 'story', 'stories', 'article', 'articles', 'posts', 'enter']
}

let Faq27 = {
title: "Does NovaTerra Have Any Guidelines or Requirements For Stories?",
unCapTitle: "does-novaterra-have-any-guidelines-or-requirements-for-stories",
shortAnswer: 'No. Although make sure to keep the story appropriate and use trustworthy sources if any.',
topic: 'Stories',
mainImage: 'images/faqImages/DoesNovaTerraHaveAnyGuidelinesorRequirementsForStories.jpg',
faqMainImage: '../images/faqImages/DoesNovaTerraHaveAnyGuidelinesorRequirementsForStories.jpg',
lastUpdated: moment().valueOf(),
_id: 'faq27',
link: "/faq/does-novaterra-have-any-guidelines-or-requirements-for-stories",
type: 'faq',
numUseful: 0,
numNotUseful: 0,
totalEdits: 0,
contributors: 1,
views: 0,
body: "NovaTerra does not have set guidelines for stories as we want our creators to be as free and creative in their writing as possible. Being creators ourselves, we know that stories come in all shapes and sizes. However, we do review every story before it is published to make sure it is appropriate, not spam and any information used is from reliable sources. Don't let this discourage you from making stories, we are not picky with stories, we welcome all genuine stories. What we mainly try to avoid is stories that include misinformation, copyrighted content or stories used as a form of spam or sponsored content. We also only allow advertising inside stories that promote environmentalism (i.e. environmentally-conscious companies or charities).  NovaTerra just wants to be a platform that is open to all creators where the is a positive atmosphere that promotes sustainability and activism. \n \n If you have any other questions about navigating our site, please don't hesitate in contacting us. \n \n Hope this helps, \n \n James from NovaTerra.",
tags: ['requirements', 'guidelines', 'basis', 'rules', 'rule', 'protocol', 'publish', 'story', 'stories', 'article', 'articles', 'post', 'posts']
}

// let Faq28 = {
// title: "How Can I Import A Story From Another Website?",
// unCapTitle: "how-can-i-import-an-story-from-another-website",
// shortAnswer: "Yes. By clicking the '+' icon on the top of your page, you can select 'Import Story' '",
// topic: 'Stories',
// mainImage: 'images/faqImages/HowCanIImportAStoryFromAnotherWebsite.jpg',
// faqMainImage: '../images/faqImages/HowCanIImportAStoryFromAnotherWebsite.jpg',
// lastUpdated: moment().valueOf(),
// _id: 'faq28',
// link: "/faq/how-can-i-import-an-story-from-another-website",
// type: 'faq',
// numUseful: 0,
// numNotUseful: 0,
// totalEdits: 0,
// contributors: 1,
// views: 0,
// body: "\n \n If you have any other questions about navigating our site, please don't hesitate in contacting us. \n \n Hope this helps, \n \n James from NovaTerra.",
// }

let Faq29 = {
title: "How Can I Delete a Story?",
unCapTitle: "how-can-i-delete-a-story",
shortAnswer: 'On your profile page, you will be able to draft your story and then delete it from there.',
topic: 'Stories',
mainImage: 'images/faqImages/HowCanIDeleteaStory.jpg',
faqMainImage: '../images/faqImages/HowCanIDeleteaStory.jpg',
lastUpdated: moment().valueOf(),
_id: 'faq29',
link: "/faq/how-can-i-delete-a-story",
type: 'faq',
numUseful: 0,
numNotUseful: 0,
totalEdits: 0,
contributors: 1,
views: 0,
body: "You can click on your profile image on the top-right corner of the screen and then go to 'profile'. From here, you will have to go to your 'published' stories and select 'draft'. What this does is that it drafts your story making it viewable just by you and not anyone else. This is meant to be an intermediary phase, so you don't have to delete your story completely in order to make changes to it or remove it for some time. From here, if you wish to delete the draft, you can click 'delete' to remove the story from your profile. If you don't like this feature or would like to change it in some way, please reach out to us. \n \n If you have any other questions about managing stories, please don't hesitate in contacting us. \n \n Hope this helps, \n \n Oliver from NovaTerra.",
tags: ['delete', 'remove', 'take', 'off', 'NovaTerra', 'story', 'stories', 'article', 'articles', 'post', 'posts', 'eliminate', 'erase', 'cut', 'rid']
}

let Faq30 = {
title: "How Can I Format My Story?",
unCapTitle: "how-can-i-format-my-story",
shortAnswer: 'Here is a short video explaining all the features available for creating stories.',
topic: 'Stories',
mainImage: 'images/faqImages/HowCanIFormatMyStory.jpg',
faqMainImage: '../images/faqImages/HowCanIFormatMyStory.jpg',
lastUpdated: moment().valueOf(),
_id: 'faq30',
link: "/faq/how-can-i-format-my-story",
type: 'faq',
numUseful: 0,
numNotUseful: 0,
totalEdits: 0,
contributors: 1,
views: 0,
body: "Here is a short video explaining all the features our editors have to provide. If you are not sure how to add images, social media posts, videos or anything related to formatting, make sure to follow the tutorial below carefully. If you are new to creating stories and haven't started editing yet, it also may be a good idea to learn how our editors work. I'll stop spoiling the video and let you get creating your stories! (show a video tutorial) \n \n If you have any other questions about creating and formatting stories, please don't hesitate in contacting us. \n \n Hope this helps, \n \n Oliver from NovaTerra.",
tags: ['format', 'layout', 'edit', 'make', 'build', 'add', 'change', 'edit', 'story', 'stories', 'article', 'articles', 'post', 'posts']
}

let Faq31 = {
title: "How Can I Edit a Published Story?",
unCapTitle: "how-can-i-edit-a-published-story",
shortAnswer: "By clicking on 'draft' under your published stories on your profile page.",
topic: 'Stories',
mainImage: 'images/faqImages/HowCanIEditaPublishedStory.jpg',
faqMainImage: '../images/faqImages/HowCanIEditaPublishedStory.jpg',
lastUpdated: moment().valueOf(),
_id: 'faq31',
link: "/faq/how-can-i-edit-a-published-story",
type: 'faq',
numUseful: 0,
numNotUseful: 0,
totalEdits: 0,
contributors: 1,
views: 0,
body: "On NovaTerra, in order to edit a published story, you will need to first make it a draft. What this does is that if you are in the process of making changes to it, you can it off the main pages and re-publish it once you've made the changes you wish to make. \n \n In order to do this you will need to navigate to the profile page by clicking on your profile image on the top-right corner of your screen and click 'profile'. Here you will want to go to your 'published' stories and finding the one you want to edit. You will want to click the 'draft'. This story will now appear under your drafts where you can edit it however much you want. When you are ready to publish this story, click on the 'publish' button on the editor page and we will begin our reviewing process again. All of the reactions and comments your story recieied will still be there when you re-publish it. \n \n If you have any other questions about editing stories, please don't hesitate in contacting us. \n \n Hope this helps, \n \n Oliver from NovaTerra.",
tags: ['edit', 'change', 're-', 'republish', 're-publish', 'published', 'story', 'stories', 'post', 'posts', 'article', 'articles', 'draft', 'publish', 'already']
}

let Faq32 = {
title: "Can I Use Content From a Story on NovaTerra Elsewhere?",
unCapTitle: "can-i-use-content-from-a-story-on-novaterra-elsewhere",
shortAnswer: "NovaTerra allows anyone to use up to 75 words from a story and any amount of visuals, as long as the author and NovaTerra is referenced.",
topic: 'Stories',
mainImage: 'images/faqImages/CanIUseContentFromaStoryonNovaTerraElsewhere.jpg',
faqMainImage: '../images/faqImages/CanIUseContentFromaStoryonNovaTerraElsewhere.jpg',
lastUpdated: moment().valueOf(),
_id: 'faq32',
link: "/faq/can-i-use-content-from-a-story-on-novaterra-elsewhere",
type: 'faq',
numUseful: 0,
numNotUseful: 0,
totalEdits: 0,
contributors: 1,
views: 0,
body: "Yes. However, there is a limit of 75 words used directly and in all cases, you will need to reference close to the text used, the author of the story as well as NovaTerra. If you wish to use another source of content such as photos or videos, you can use those as well as long as you reference the author of the story as well as NovaTerra. Take into account that this only applies in the case that the story does not belong to you. If you are the creator of this story, you have full rights to publish the entire story anywhere online as mentioned in our other FAQ questions. If this story does not belong to you and you wish to use more than 75 words, you will need to contact the individual author, not NovaTerra. All rights to the story belong to the author and NovaTerra will not help you in getting the rights to use this story. If you cannot find the email address of this author, NovaTerra will not be able to share these details with you either. Sorry for the inconveniences, we just take privacy very seriously! \n \n If you have any other questions about using content from NovaTerra, please don't hesitate in contacting us. \n \n Hope this helps, \n \n Oliver from NovaTerra.",
tags: ['use', 'story', 'stories', 'article', 'articles', 'post', 'posts', 'content', 'text', 'part', 'elsehwhere', 'website', 'outside', 'blog', 'site']
}

let Faq33 = {
title: "Can I Use One Of NovaTerra's Stories On My Website?",
unCapTitle: "can-i-use-one-of-novaterra's-stories-on-my-website",
shortAnswer: 'You will need to contact the individual author.',
topic: 'Stories',
mainImage: 'images/faqImages/CanIUseOneOfNovaTerrasStoriesOnMyWebsite.jpg',
faqMainImage: '../images/faqImages/CanIUseOneOfNovaTerrasStoriesOnMyWebsite.jpg',
lastUpdated: moment().valueOf(),
_id: 'faq33',
link: "/faq/can-i-use-one-of-novaterra's-stories-on-my-website",
type: 'faq',
numUseful: 0,
numNotUseful: 0,
totalEdits: 0,
contributors: 1,
views: 0,
body: "If you wish to use less than 75 words from a story, you can use that same text on your site as long as the author and NovaTerra are referenced. If you wish to use a visual such as a video or image, you can use it as well, again, as long as the author and NovaTerra are referenced. If, however, you wish to use a full story, you will need to get the rights to do so from the author. If you cannot find the email address of the author from their profile, please do not contact NovaTerra, we cannot share these details from our creators for privacy reasons. \n \n If you have any other questions about using stories from NovaTerra, please don't hesitate in contacting us. \n \n Hope this helps, \n \n Oliver from NovaTerra.",
tags: ['use', 'story', 'stories', 'article', 'articles', 'post', 'posts', 'content', 'text', 'elsewhere', 'website', 'outside', 'publish', 'blog', 'site']
}

let Faq34 = {
title: "Can I Publish My Story on Another Site?",
unCapTitle: "can-i-publish-my-story-on-another-site?",
shortAnswer: 'Yes. You have full rights to any story you publish on NovaTerra allowing you to publish your story elsewhere online.',
topic: 'Stories',
mainImage: 'images/faqImages/CanIPublishMyStoryonAnotherSite.jpg',
faqMainImage: '../images/faqImages/CanIPublishMyStoryonAnotherSite.jpg',
lastUpdated: moment().valueOf(),
_id: 'faq34',
link: "/faq/can-i-publish-my-story-on-another-site",
type: 'faq',
numUseful: 0,
numNotUseful: 0,
totalEdits: 0,
contributors: 1,
views: 0,
body: "On NovaTerra, any story published belongs to the creator that published it. This gives creators like you full rights over the stories you write, letting you remove any story that belongs to you from our site at any point in time. Also, the great thing about having full rights to your stories is that you can publish your story elsewhere online as well. If you wish to reach out to readers on sites like Medium and if you want to support NovaTerra's goal of raising 50,000 euros by 2020, you can both! This lets you reach as many readers as possible. What creators have also chosen to do is that if they want to get paid for the stories they write and make a difference, they can publish their stories on different sites to achieve either goal. \n \n If you have any other questions about story rights, please don't hesitate in contacting us. \n \n Hope this helps, \n \n Oliver from NovaTerra.",
tags: ['use', 'story', 'stories', 'article', 'articles', 'post', 'posts', 'content', 'text', 'elsewhere', 'website', 'outside', 'publish', 'blog', 'site', 'my']
}

let Faq35 = {
title: "I Found Misinformation in One of NovaTerra's Stories.",
unCapTitle: "i-found-misinformation-in-one-of-novaterra's-stories",
shortAnswer: 'Please contact us as soon as possible with the location of the misinformation.',
topic: 'Stories',
mainImage: 'images/faqImages/IFoundMisinformationinOneofNovaTerrasStories.jpg',
faqMainImage: '../images/faqImages/IFoundMisinformationinOneofNovaTerrasStories.jpg',
lastUpdated: moment().valueOf(),
_id: 'faq35',
link: "/faq/i-found-misinformation-in-one-of-novaterra's-stories",
type: 'faq',
numUseful: 0,
numNotUseful: 0,
totalEdits: 0,
contributors: 1,
views: 0,
body: "Please notify us as soon as possible here. You will need to provide details of where this inaccurate information is located in our stories as well as proof as to why this information is incorrect. \n \n If you have any other questions about misinformation on our site, please don't hesitate in contacting us. \n \n Hope this helps, \n \n Oliver from NovaTerra.",
tags: ['fake', 'story', 'stories', 'article', 'articles', 'post', 'posts', 'content', 'text', 'false', 'misinformation', 'not', 'true', 'incorrect', 'wrong']
}

let Faq36 = {
title: "I Find Something in NovaTerra's Stories Disturbing / Offensive",
unCapTitle: "i-find-something-in-novaterra's-stories-disturbing/offensive",
shortAnswer: 'We are very sorry to hear this and ask that you contact us with the exact location of this offensive content asap.',
topic: 'Stories',
mainImage: 'images/faqImages/IFindSomethinginNovaTerrasStoriesDisturbingOffensive.jpg',
faqMainImage: '../images/faqImages/IFindSomethinginNovaTerrasStoriesDisturbingOffensive.jpg',
lastUpdated: moment().valueOf(),
_id: 'faq36',
link: "/faq/i-find-something-in-novaterra's-stories-disturbing/offensive",
type: 'faq',
numUseful: 0,
numNotUseful: 0,
totalEdits: 0,
contributors: 1,
views: 0,
body: "Please notify us as soon as possible here. You will need to provide the details as to where this offensive information is located in our stories. We are very sorry in advance. \n \n If you have any other questions about stories on NovaTerra please don't hesitate in contacting us. \n \n Hope this helps, \n \n Oliver from NovaTerra.",
tags: ['disturbing', 'story', 'stories', 'article', 'articles', 'post', 'posts', 'content', 'text', 'offensive', 'inappropriate', 'disgusting', 'racist', 'sexual', 'violent', 'violence', 'graphic', 'porn', 'pornography']
}

let Faq37 = {
title: "Where Can I Report a Website Bug?",
unCapTitle: "where-can-i-report-a-website-bug",
shortAnswer: 'On our contact form, you will be be able to describe to us this bug.',
topic: 'Website Bugs',
mainImage: 'images/faqImages/WhereCanIReportaWebsiteBug.jpg',
faqMainImage: '../images/faqImages/WhereCanIReportaWebsiteBug.jpg',
lastUpdated: moment().valueOf(),
_id: 'faq37',
link: "/faq/where-can-i-report-a-website-bug",
type: 'faq',
numUseful: 0,
numNotUseful: 0,
totalEdits: 0,
contributors: 1,
views: 0,
body: "If you have found a bug on a website please contact us as soon as possible. Please provide details as to where you found this bug and how our website responded. This could include any bug such as a link going to the wrong location. Thank you for your support, NovaTerra. \n \n If you have any other questions about website bugs please don't hesitate in contacting us. \n \n Hope this helps, \n \n Oliver from NovaTerra.",
tags: ['bug', 'error', "doesn't", 'doesnt', 'broken', 'not', 'work', 'working', 'stop', 'stopped']
}

let Faq38 = {
title: "Will I be Rewarded for Finding a Bug?",
unCapTitle: "will-i-be-rewarded-for-finding-a-bug",
shortAnswer: 'Yes, because na na na',
topic: 'Website Bugs',
mainImage: 'images/faqImages/WillIbeRewardedforFindngaBug.jpg',
faqMainImage: '../images/faqImages/WillIbeRewardedforFindngaBug.jpg',
lastUpdated: moment().valueOf(),
_id: 'faq38',
link: "/faq/will-i-be-rewarded-for-finding-a-bug",
type: 'faq',
numUseful: 0,
numNotUseful: 0,
totalEdits: 0,
contributors: 1,
views: 0,
body: "Unfortunately, we do not generate enough revenue on our site to be giving out rewards for finding bugs. 90% of all revenue generated on our site is donated, leaving just 10% for costs. If we deciden to implement some sort of reward system for finding bugs in the future, we will make sure to notify you. Sorry for the inconveniences, we truly appreciate your support. \n \n If you have any other questions about website bugs, please don't hesitate in contacting us. \n \n Hope this helps, \n \n Oliver from NovaTerra.",
tags: ['reward', 'find', "found", 'finding', 'fix', 'exploit', 'bug', 'earn', 'paid', 'given', 'give']
}


if (Meteor.isServer) {
    Meteor.publish('faq', function() {
    return Faq.find();
});
}

function adminUser(userId) {
  var adminUser = Meteor.users.findOne({ username: "admin" });
  return (userId && adminUser && userId === adminUser._id);
}
Faq.allow({
  insert: (userId) => adminUser(userId),
  update: (userId) => adminUser(userId),
  remove: (userId) => adminUser(userId),
});

Meteor.methods({
  'faq.insert'(details) {
      // if (!this.userId) {
      //   throw new Meteor.Error('not-authorized');
      // }

      return Faq.insert({
        title: details.title,
        topic: details.topic,
        body: details.body,
        numUseful: 0,
        numNotUseful: 0,
        lastUpdated: moment().valueOf(),
        totalEdits: 0,
        contributors: 0,
        totalViews: 0,
        type: 'faq',
      });
    },
    'faq.increment'(_id, updates) {

      Faq.update({ _id }, {
        $inc: {
          ...updates
        }
      });
    },
});

// if (Faq.find().count() === 0) {
// if (Faq.find({ title: "How does NovaTerra's Advertisements Work?" }).count() === 0) Faq.insert({ ...Faq1 });
// if (Faq.find({ title: "How Can I Advertise on NovaTerra?" }).count() === 0) Faq.insert({ ...Faq2 });
// if (Faq.find({ title: "When Can I Watch a NovaTerra Ads?" }).count() === 0) Faq.insert({ ...Faq3 });
// if (Faq.find({ title: "Where Can I Contact NovaTerra?" }).count() === 0) Faq.insert({ ...Faq4 });
// if (Faq.find({ title: "When Will NovaTerra Respond After Submitting a Contact Form?" }).count() === 0) Faq.insert({ ...Faq5 });
// if (Faq.find({ title: "If I Have Published a Story on NovaTerra, Does it Still Belong to me?" }).count() === 0) Faq.insert({ ...Faq6 });
// // if (Faq.find({ title: "Is NovaTerra Trademarked?" }).count() === 0) Faq.insert({ ...Faq7 });
// if (Faq.find({ title: "Where Can I Report Copyright Content in One of NovaTerra's Stories?" }).count() === 0) Faq.insert({ ...Faq8 });
// if (Faq.find({ title: "Where Can I Donate?" }).count() === 0) Faq.insert({ ...Faq9 });
// if (Faq.find({ title: "Can I Donate to NovaTerra Directly?" }).count() === 0) Faq.insert({ ...Faq10 });
// if (Faq.find({ title: "How Can I Remove my Charity From NovaTerra?" }).count() === 0) Faq.insert({ ...Faq11 });
// if (Faq.find({ title: "How Can I Add my Charity to NovaTerra's Donate Page?" }).count() === 0) Faq.insert({ ...Faq12 });
// if (Faq.find({ title: "Can I Change The Description Below my Charity?" }).count() === 0) Faq.insert({ ...Faq13 });
// if (Faq.find({ title: "Will NovaTerra Know I Have Donated?" }).count() === 0) Faq.insert({ ...Faq14 });
// if (Faq.find({ title: "Where is NovaTerra Donating Their Earnings?" }).count() === 0) Faq.insert({ ...Faq15 });
// if (Faq.find({ title: "Where Can I Request a New Feature?" }).count() === 0) Faq.insert({ ...Faq16 });
// if (Faq.find({ title: "When Was NovaTerra Founded?" }).count() === 0) Faq.insert({ ...Faq17 });
// if (Faq.find({ title: "How is NovaTerra Fundraising?" }).count() === 0) Faq.insert({ ...Faq18 });
// if (Faq.find({ title: "What is NovaTerra?" }).count() === 0) Faq.insert({ ...Faq19 });
// if (Faq.find({ title: "Where Can I See NovaTerra's Impact?" }).count() === 0) Faq.insert({ ...Faq20 });
// if (Faq.find({ title: "Where and How Can I Get Involved?" }).count() === 0) Faq.insert({ ...Faq21 });
// if (Faq.find({ title: "I Wasn't Able to Find an Answer in The FAQ." }).count() === 0) Faq.insert({ ...Faq22 });
// // if (Faq.find({ title: "Where Can I Follow NovaTerra" }).count() === 0) Faq.insert({ ...Faq23 });
// // if (Faq.find({ title: "Does NovaTerra Have a Newsletter?" }).count() === 0) Faq.insert({ ...Faq24 });
// if (Faq.find({ title: "Where Can I Find Stories on NovaTerra?" }).count() === 0) Faq.insert({ ...Faq25 });
// if (Faq.find({ title: "How Can I Publish My Story?" }).count() === 0) Faq.insert({ ...Faq26 });
// if (Faq.find({ title: "Does NovaTerra Have Any Guidelines or Requirements For Stories?" }).count() === 0) Faq.insert({ ...Faq27 });
// // if (Faq.find({ title: "How Can I Import A Story From Another Website?" }).count() === 0) Faq.insert({ ...Faq28 });
// if (Faq.find({ title: "How Can I Delete One of My Story?" }).count() === 0) Faq.insert({ ...Faq29 });
// if (Faq.find({ title: "How Can I Format My Story?" }).count() === 0) Faq.insert({ ...Faq30 });
// if (Faq.find({ title: "How Can I Edit a Published Story?" }).count() === 0) Faq.insert({ ...Faq31 });
// if (Faq.find({ title: "Can I Use Text From a Story on NovaTerra Elsewhere?" }).count() === 0) Faq.insert({ ...Faq32 });
// if (Faq.find({ title: "Can I Use One Of NovaTerra's Stories On My Website?" }).count() === 0) Faq.insert({ ...Faq33 });
// if (Faq.find({ title: "Can I Published My Story on Another Site?" }).count() === 0) Faq.insert({ ...Faq34 });
// if (Faq.find({ title: "I Found Misinformation in One of NovaTerra's Stories." }).count() === 0) Faq.insert({ ...Faq35 });
// if (Faq.find({ title: "I Find Something in NovaTerra's Stories Disturbing / Offensive" }).count() === 0) Faq.insert({ ...Faq36 });
// if (Faq.find({ title: "Where Can I Report a Website Bug?" }).count() === 0) Faq.insert({ ...Faq37 });
// if (Faq.find({ title: "Will I be Rewarded for Finding a Bug / Exploit?" }).count() === 0) Faq.insert({ ...Faq38 });
// }
