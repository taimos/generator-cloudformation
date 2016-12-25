'use strict';
var Generator = require('yeoman-generator');
var chalk = require('chalk');
var yosay = require('yosay');

module.exports = Generator.extend({
  prompting: function () {
    // Have Yeoman greet the user.
    this.log(yosay(
      'Welcome to the epic ' + chalk.red('generator-cloudformation') + ' generator!'
    ));
  },

  writing: function () {
    this.fs.copy(
      this.templatePath('cfn.yaml'),
      this.destinationPath('cfn.yaml')
    );
  },

  install: function () {
    //
  }
});
