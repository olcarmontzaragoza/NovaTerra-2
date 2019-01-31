import { Meteor } from 'meteor/meteor';
import { WebApp } from 'meteor/webapp';

import '../imports/api/users';
import '../imports/api/stories';
import '../imports/api/tags';
import '../imports/api/creators';
import '../imports/api/notifications';
import '../imports/api/categories';
import '../imports/api/faq';

import { Stories } from '../imports/api/stories';

import '../imports/startup/simple-schema-configuration.js';

// const mongoose = require('mongoose');

// mongoose.connect('mongod://localhost/', { useNewUrlParser: true });

// mongoose.connect('mongodb://localhost:3000', { useNewUrlParser: true })

Meteor.startup(() => {

});
