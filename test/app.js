'use strict';
var path = require('path');
var assert = require('yeoman-assert');
var helpers = require('yeoman-test');

describe('generator-cloudformation:app', function () {
  before(function () {
    return helpers.run(path.join(__dirname, '../generators/app'))
      .toPromise();
  });

  it('creates files', function () {
    assert.file([
      'cfn.yaml'
    ]);
  });
});
