'use strict';

var generators = require('yeoman-generator');

module.exports = generators.Base.extend({

  initializing: require('./tasks/init'),
  prompting: require('./tasks/prompt'),
  writing: require('./tasks/write'),
  install: require('./tasks/install'),
  end: require('./tasks/end'),

});
