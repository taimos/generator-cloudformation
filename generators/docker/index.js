'use strict';
var Generator = require('yeoman-generator');
var chalk = require('chalk');
var yosay = require('yosay');

module.exports = Generator.extend({
  prompting: function () {
    this.log(yosay(
      'Welcome to the ' + chalk.red('generator-cloudformation') + ' generator for Docker setups!'
    ));
    
    var prompts = [{
      type: 'input',
      name: 'name',
      message: 'The name of the service?'
    }, {
      type: 'input',
      name: 'description',
      message: 'The description of the service?'
    }, {
      type: 'input',
      name: 'range',
      message: 'The second byte of the VPC CIDR range?',
      default: '0'
    }, {
      type: 'input',
      name: 'cost',
      message: 'The cost reference (for tagging)?'
    }, {
      type: 'input',
      name: 'customer',
      message: 'The customer of the service (for tagging)?'
    }, {
      type: 'input',
      name: 'port',
      message: 'The local port of the web app?'
    }, {
      type: 'input',
      name: 'hostname',
      message: 'The hostname of the service?'
    }, {
      type: 'input',
      name: 'domain',
      message: 'The domain of the service?'
    }, {
      type: 'input',
      name: 'healthcheck',
      message: 'The path to the health check returning 200-OK?'
    }, {
      type: 'list',
      name: 'instanceType',
      message: 'The EC2 instance type?',
      choices: [
        't2.nano', 't2.micro', 't2.small', 't2.medium', 't2.large'
      ],
      default: 't2.nano'
    }, {
      type: 'input',
      name: 'docker',
      message: 'The name of the docker image for the service?'
    }, {
      type: 'confirm',
      name: 'dvalin',
      message: 'The service is based on the dvalin framework?',
      default: false
    }, {
      type: 'list',
      name: 'logging',
      message: 'The type of logging to use',
      choices: ['none', 'sumologic', 'cloudwatch']
    }, {
      when: function (props) {
        return props.logging === 'sumologic';
      },
      name: 'sumoCollector',
      message: 'The SumoLogic collector endpoint',
      default: 'endpoint1.collection.eu.sumologic.com'
    }, {
      when: function (props) {
        return props.logging === 'sumologic';
      },
      name: 'sumoToken',
      message: 'The SumoLogic URL token'
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
