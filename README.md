# generator-cloudformation 

[![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Dependency Status][daviddm-image]][daviddm-url] [![Coverage percentage][coveralls-image]][coveralls-url]
> Generate CloudFormation templates

## Installation

First, install [Yeoman](http://yeoman.io) and generator-cloudformation using [npm](https://www.npmjs.com/) (we assume you have pre-installed [node.js](https://nodejs.org/)).

```bash
npm install -g yo
npm install -g generator-cloudformation
```

Then generate your new project:

```bash
yo cloudformation:<name>
```

## Available subgenerators

### docker

Generate a CloudFormation template that runs a web application as Docker containers on CoreOS instances. 

## License

Apache-2.0 © [Taimos GmbH](https://www.taimos.de)

## Changelog

### 0.1.0

* Initial version with docker subgenerator


[npm-image]: https://badge.fury.io/js/generator-cloudformation.svg
[npm-url]: https://npmjs.org/package/generator-cloudformation
[travis-image]: https://travis-ci.org/taimos/generator-cloudformation.svg?branch=master
[travis-url]: https://travis-ci.org/taimos/generator-cloudformation
[daviddm-image]: https://david-dm.org/taimos/generator-cloudformation.svg?theme=shields.io
[daviddm-url]: https://david-dm.org/taimos/generator-cloudformation
[coveralls-image]: https://coveralls.io/repos/taimos/generator-cloudformation/badge.svg
[coveralls-url]: https://coveralls.io/r/taimos/generator-cloudformation
