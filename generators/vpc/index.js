'use strict';
var Generator = require('yeoman-generator');
var chalk = require('chalk');
var yosay = require('yosay');

module.exports = Generator.extend({
  prompting: function () {
    this.log(yosay(
      'Welcome to the solid ' + chalk.red('generator-cloudformation') + ' generator for VPCs!'
    ));

    var prompts = [{
      type: 'input',
      name: 'name',
      message: 'The name of the environment?'
    }, {
      type: 'input',
      name: 'description',
      message: 'The description of the environment?'
    }, {
      type: 'input',
      name: 'range',
      message: 'The second byte of the VPC CIDR range?',
      default: '0'
    }];

    return this.prompt(prompts).then(function (props) {
      this.props = props;
    }.bind(this));
  },

  writing: function () {
    this.fs.copyTpl(
      this.templatePath('cfn.yaml'),
      this.destinationPath('cfn.yaml'),
      this.props
    );
  },

  install: function () {
    //
  }
});
