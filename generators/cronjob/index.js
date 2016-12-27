'use strict';
var Generator = require('yeoman-generator');
var chalk = require('chalk');
var yosay = require('yosay');

module.exports = Generator.extend({
  prompting: function () {
    this.log(yosay(
      'Welcome to the terrific ' + chalk.red('generator-cloudformation') + ' generator for scheduled lambdas!'
    ));
    
    var prompts = [{
      type: 'input',
      name: 'description',
      message: 'The description of the lambda?'
    }, {
      type: 'input',
      name: 'expression',
      message: 'The schedule expression?',
      default: 'rate(1 day)'
    }, {
      type: 'input',
      name: 'timeout',
      message: 'The lambda execution timeout in seconds?',
      default: '30'
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
