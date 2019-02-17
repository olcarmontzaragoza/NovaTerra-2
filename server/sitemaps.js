// sitemaps.add('/sitemap.xml', function() {
//   // required: page
//   // optional: lastmod, changefreq, priority, xhtmlLinks, images, videos
//   return [
//
//     <Route exact path="/" render={() => allUsers(Index)}  />
//     {/* <Route path="/:id" render={() => allUsers(Story)} /> */}
//     <Route path="/login" render={() => allUsers(Login)} />
//     <Route path="/signup" render={() => allUsers(Signup)} />
//     <Route path="/story/:id" render={() => allUsers(Story)}  />
//
//     <Route path="/mission" render={() => allUsers(Mission)}  />
//     <Route path="/search" render={() => allUsers(Search)}  />
//     <Route path="/explore" render={() => allUsers(Explore)}  />
//     <Route path="/feedback" render={() => allUsers(Feedback)}  />
//     <Route path="/get-involved" render={() => allUsers(GetInvolved)}  />
//     <Route path="/contact" render={() => allUsers(Contact)}  />
//     <Route path="/donate" render={() => allUsers(Donate)}  />
//     <Route path="/forgot-password" render={() => allUsers(ForgotPassword)}  />
//
//     <Route path="/now" render={() => allUsers(Now)}  />
//     <Route path="/economy" render={() => allUsers(Economy)}  />
//     <Route path="/environment" render={() => allUsers(Environment)}  />
//     <Route path="/future" render={() => allUsers(Future)}  />
//     <Route path="/health" render={() => allUsers(Health)}  />
//     <Route path="/technology" render={() => allUsers(Technology)}  />
//
//
//
//     <Route path="/profile/:id" render={() => allUsers(UserProfile)}  />
//     <Route path="/profile" render={() => allUsers(Profile)}  />
//
//     { page: '/',
//     images: [
//       { loc: 'images/favicon.ico', caption: "NovaTerra - Logo", title: "NovaTerra - Logo" },
//     ], lastmod: new Date(), changefreq: 'daily', priority: 0.98 },
//
//
//
//
//     { page: '/profile/oliver-carmont', lastmod: new Date().getTime(), priority: 0.8 },
//     { page: '/profile/oliver-carmont', lastmod: new Date().getTime(), priority: 0.8 },
//     { page: '/profile/oliver-carmont', lastmod: new Date().getTime(), priority: 0.8 },
//
//     { page: '/technology', lastmod: new Date().getTime(), priority: 0.8 },
//     { page: '/future', lastmod: new Date().getTime(), priority: 0.8 },
//     { page: '/health', lastmod: new Date().getTime(), priority: 0.8 },
//     { page: '/now', lastmod: new Date().getTime(), priority: 0.8 },
//     { page: '/environment', lastmod: new Date().getTime(), priority: 0.8 },
//     { page: '/economy', lastmod: new Date().getTime(), priority: 0.8 },
//
//     { page: '/energy', lastmod: new Date().getTime(), priority: 0.7 },
//     { page: '/climate-change', lastmod: new Date().getTime(), priority: 0.7 },
//     { page: '/innovation', lastmod: new Date().getTime(), priority: 0.7 },
//     { page: '/transport', lastmod: new Date().getTime(), priority: 0.7 },
//     { page: '/biodiversity', lastmod: new Date().getTime(), priority: 0.7 },
//     { page: '/cities', lastmod: new Date().getTime(), priority: 0.7 },
//     { page: '/food', lastmod: new Date().getTime(), priority: 0.7 },
//     { page: '/waste', lastmod: new Date().getTime(), priority: 0.7 },
//     { page: '/self', lastmod: new Date().getTime(), priority: 0.7 },
//     { page: '/research', lastmod: new Date().getTime(), priority: 0.7 },
//     { page: '/politics', lastmod: new Date().getTime(), priority: 0.7 },
//     { page: '/personal-finance', lastmod: new Date().getTime(), priority: 0.7 },
//     { page: '/equality', lastmod: new Date().getTime(), priority: 0.7 },
//
//     { page: '/search', lastmod: new Date().getTime(), priority: 0.75 },
//     { page: '/privacy-policy', lastmod: new Date().getTime(), priority: 0.1 },
//     { page: '/terms-of-use', lastmod: new Date().getTime(), priority: 0.1 },
//     // https://support.google.com/webmasters/answer/178636?hl=en
//     { page: '/explore',
//       images: [
//         { loc: 'images/categoryImages/Economy.jpg', caption: "NovaTerra - Economy", title: "NovaTerra - Economy" },
//         { loc: 'images/categoryImages/Environment.jpg', caption: "NovaTerra - Environment", title: "NovaTerra - Environment" },
//         { loc: 'images/categoryImages/Future.jpg', caption: "NovaTerra - Future", title: "NovaTerra - Future" },
//         { loc: 'images/categoryImages/Health.jpg', caption: "NovaTerra - Health", title: "NovaTerra - Health" },
//         { loc: 'images/categoryImages/Now.jpg', caption: "NovaTerra - Now", title: "NovaTerra - Now" },
//         { loc: 'images/categoryImages/Technology.jpg', caption: "NovaTerra - Technology", title: "NovaTerra - Technology" },
//
//         { loc: 'images/categoryImages/Biodiversity.jpg', caption: "NovaTerra - Biodiversity", title: "NovaTerra - Biodiversity" },
//         { loc: 'images/categoryImages/Cities.jpg', caption: "NovaTerra - Cities", title: "NovaTerra - Cities" },
//         { loc: 'images/categoryImages/ClimateChange.jpg', caption: "NovaTerra - Climate Change", title: "NovaTerra - Future" },
//         { loc: 'images/categoryImages/Energy.jpg', caption: "NovaTerra - Energy", title: "NovaTerra - Energy" },
//         { loc: 'images/categoryImages/Equality.jpg', caption: "NovaTerra - Equality", title: "NovaTerra - Equality" },
//         { loc: 'images/categoryImages/Food.jpg', caption: "NovaTerra - Food", title: "NovaTerra - Food" },
//         { loc: 'images/categoryImages/Innovation.jpg', caption: "NovaTerra - Innovation", title: "NovaTerra - Innovation" },
//         { loc: 'images/categoryImages/PersonalFinance.jpg', caption: "NovaTerra - Personal Finance", title: "NovaTerra - Personal Finance" },
//         { loc: 'images/categoryImages/Politics.jpg', caption: "NovaTerra - Politics", title: "NovaTerra - Politics" },
//         { loc: 'images/categoryImages/Research.jpg', caption: "NovaTerra - Research", title: "NovaTerra - Research" },
//         { loc: 'images/categoryImages/Science.jpg', caption: "NovaTerra - Science", title: "NovaTerra - Science" },
//         { loc: 'images/categoryImages/Self.jpg', caption: "NovaTerra - Self", title: "NovaTerra - Self" },
//         { loc: 'images/categoryImages/Transport.jpg', caption: "NovaTerra - Transport", title: "NovaTerra - Transport" },
//         { loc: 'images/categoryImages/Waste.jpg', caption: "NovaTerra - Waste", title: "NovaTerra - Waste" },
//         { loc: 'images/categoryImages/Work.jpg', caption: "NovaTerra - Work", title: "NovaTerra - Work" },
//       ],
//       lastmod: new Date().getTime(), priority: 0.75
//     },
//     { page: '/faq',
//       images: [
//         { loc: 'images/faqImages/CanIChangeTheDescriptionBelowmyCharity.jpg', caption: "NovaTerra FAQ - Can I Change The Description Below My Charity?", title: "NovaTerra FAQ - Can I Change The Description Below My Charity?" },
//         { loc: 'images/faqImages/canIDonateDiretlyToNovaTerra.jpg', caption: "NovaTerra FAQ - Can I Donate Diretly To NovaTerra?", title: "NovaTerra FAQ - Can I Donate Diretly To NovaTerra?" },
//         { loc: 'images/faqImages/CanIPublishMyStoryonAnotherSite.jpg', caption: "NovaTerra FAQ - Can I Publish My Story on Another Site?", title: "NovaTerra FAQ - Future" },
//         { loc: 'images/faqImages/CanIUseContentFromaStoryonNovaTerraElsewhere.jpg', caption: "NovaTerra FAQ - Can I Use Content From a Story on NovaTerra Elsewhere?", title: "NovaTerra FAQ - Can I Use Content From a Story on NovaTerra Elsewhere?" },
//         { loc: 'images/faqImages/CanIUseOneOfNovaTerrasStoriesOnMyWebsite.jpg', caption: "NovaTerra FAQ - Can I Use One Of NovaTerra's Stories On My Website?", title: "NovaTerra FAQ - Can I Use One Of NovaTerra's Stories On My Website?" },
//         { loc: 'images/faqImages/DoesNovaTerraHaveAnyGuidelinesorRequirementsForStories.jpg', caption: "NovaTerra FAQ - Does NovaTerra Have Any Guidelines or Requirements For Stories?", title: "NovaTerra FAQ - Does NovaTerra Have Any Guidelines or Requirements For Stories?" },
//
//         { loc: 'images/faqImages/HowCanIAddMyCharityToNovaTerrasDonatePage.jpg', caption: "NovaTerra FAQ - How Can I Add My Charity To NovaTerra's Donate Page?", title: "NovaTerra FAQ - How Can I Add My Charity To NovaTerra's Donate Page?" },
//         { loc: 'images/faqImages/HowCanIAdvertiseonNovaTerra.jpg', caption: "NovaTerra FAQ - How Can I Advertise on NovaTerra?", title: "NovaTerra FAQ - How Can I Advertise on NovaTerra?" },
//         { loc: 'images/faqImages/HowCanIDeleteaStory.jpg', caption: "NovaTerra FAQ - How Can I Delete a Story?", title: "NovaTerra FAQ - How Can I Delete a Story?" },
//         { loc: 'images/faqImages/HowCanIEditaPublishedStory.jpg', caption: "NovaTerra FAQ - How Can I Edit a Published Story?", title: "NovaTerra FAQ - How Can I Edit a Published Story?" },
//         { loc: 'images/faqImages/HowCanIFormatMyStory.jpg', caption: "NovaTerra FAQ - How Can I Format My Story?", title: "NovaTerra FAQ - How Can I Format My Story?" },
//         { loc: 'images/faqImages/HowCanIImportAStoryFromAnotherWebsite.jpg', caption: "NovaTerra FAQ - How Can I Import A Story From Another Website?", title: "NovaTerra FAQ - How Can I Import A Story From Another Website?" },
//         { loc: 'images/faqImages/HowCanIPublishMyStory.jpg', caption: "NovaTerra FAQ - How Can I Publish My Story?", title: "NovaTerra FAQ - How Can I Publish My Story?" },
//         { loc: 'images/faqImages/HowCanIRemoveMyCharityFromNovaTerra.jpg', caption: "NovaTerra FAQ - How Can I Remove My Charity From NovaTerra?", title: "NovaTerra FAQ - How Can I Remove My Charity From NovaTerra?" },
//         { loc: 'images/faqImages/HowIsNovaTerraFunraising.jpg', caption: "NovaTerra FAQ - How Is NovaTerra Fundraising?", title: "NovaTerra FAQ - How Is NovaTerra Fundraising?" },
//         { loc: 'images/faqImages/IfIHavePublishedaStoryonNovaTerra,DoesitStillBelongtome.jpg', caption: "NovaTerra FAQ - If I Have Published a Story on NovaTerra, Does it Still Belong to me?", title: "NovaTerra FAQ - If I Have Published a Story on NovaTerra, Does it Still Belong to me?" },
//         { loc: 'images/faqImages/IFindSomethinginNovaTerrasStoriesDisturbingOffensive.jpg', caption: "NovaTerra FAQ - I Find Something in NovaTerra's Stories Disturbing/Offensive.", title: "NovaTerra FAQ - I Find Something in NovaTerra's Stories Disturbing/Offensive." },
//         { loc: 'images/faqImages/IFoundMisinformationinOneofNovaTerrasStories.jpg', caption: "NovaTerra FAQ - I Found Misinformation in One of NovaTerra's Stories.", title: "NovaTerra FAQ - I Found Misinformation in One of NovaTerra's Stories." },
//         { loc: 'images/faqImages/IWasntAbleToFindAnAnswerInThisFaq.jpg', caption: "NovaTerra FAQ - I Wasn't Able To Find An Answer In This Faq.", title: "NovaTerra FAQ - I Wasn't Able To Find An Answer In This Faq." },
//         { loc: 'images/faqImages/WhatIsNovaTerra.jpg', caption: "NovaTerra FAQ - What Is NovaTerra?", title: "NovaTerra FAQ - What Is NovaTerra?" },
//         { loc: 'images/faqImages/WhenWillNovaTerraRespondAfterSubmittingaContactForm.jpg', caption: "NovaTerra FAQ - When Will NovaTerra Respond After Submitting a Contact Form?", title: "NovaTerra FAQ - When Will NovaTerra Respond After Submitting a Contact Form?" },
//         { loc: 'images/faqImages/Where isNovaTerraDonatingTheirEarnings.jpg', caption: "NovaTerra FAQ - Where is NovaTerra Donating Their Earnings?", title: "NovaTerra FAQ - Where is NovaTerra Donating Their Earnings?" },
//         { loc: 'images/faqImages/WhereandHowCanIGetInvolved.jpg', caption: "NovaTerra FAQ - Where And How Can I Get Involved?", title: "NovaTerra FAQ - Where And How Can I Get Involved?" },
//         { loc: 'images/faqImages/WhereCanIContactNovaTerra.jpg', caption: "NovaTerra FAQ - Where Can I Contact NovaTerra?", title: "NovaTerra FAQ - Where Can I Contact NovaTerra?" },
//         { loc: 'images/faqImages/whereCanIDonate.jpg', caption: "NovaTerra FAQ - Where Can I Donate?", title: "NovaTerra FAQ - Where Can I Donate?" },
//         { loc: 'images/faqImages/WhereCanIFindStoriesonNovaTerra.jpg', caption: "NovaTerra FAQ - Where Can I Find Stories on NovaTerra?", title: "NovaTerra FAQ - Where Can I Find Stories on NovaTerra?" },
//         { loc: 'images/faqImages/WhereCanIReportaWebsiteBug.jpg', caption: "NovaTerra FAQ - Where Can I Report a Website Bug?", title: "NovaTerra FAQ - Where Can I Report a Website Bug?" },
//         { loc: 'images/faqImages/WhereCanIReportCopyrightContentinOneofNovaTerrasStories.jpg', caption: "NovaTerra FAQ - Where Can I Report Copyright Content in One of NovaTerra's Stories?", title: "NovaTerra FAQ - Where Can I Report Copyright Content in One of NovaTerra's Stories?" },
//         { loc: 'images/faqImages/WhereCanIRequestANewFeature.jpg', caption: "NovaTerra FAQ - Where Can I Request A New Feature?", title: "NovaTerra FAQ - Where Can I Request A New Feature?" },
//         { loc: 'images/faqImages/WhereCanISeeNovaTerrasImpact.jpg', caption: "NovaTerra FAQ - Where Can I See NovaTerra's Impact?", title: "NovaTerra FAQ - Where Can I See NovaTerra's Impact?" },
//         { loc: 'images/faqImages/WillIbeRewardedforFindngaBug.jpg', caption: "NovaTerra FAQ - Will I Be Rewarded For Findng a Bug?", title: "NovaTerra FAQ - Will I Be Rewarded For Findng a Bug?" },
//         { loc: 'images/faqImages/WillNovaTerraKnowIHaveDonated.jpg', caption: "NovaTerra FAQ - Will NovaTerra Know I Have Donated?", title: "NovaTerra FAQ - Will NovaTerra Know I Have Donated??" },
//       ],
//       lastmod: new Date().getTime(), priority: 0.3
//     },
//
//   ];
// });
