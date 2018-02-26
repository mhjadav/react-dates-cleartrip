# sinon-sandbox

[![Build Status](https://travis-ci.org/wealthfront/sinon-sandbox.svg)](https://travis-ci.org/wealthfront/sinon-sandbox)
[![devDependency Status](https://david-dm.org/wealthfront/sinon-sandbox.svg)](https://david-dm.org/TheSavior/find-parent#info=devDependencies)
[![devDependency Status](https://david-dm.org/wealthfront/sinon-sandbox/dev-status.svg)](https://david-dm.org/TheSavior/find-parent#info=devDependencies)

Sinon-sandbox is a testing utility to make it easy to restore stubs after every test, agnostic of your team's testing framework of choice.

## Installation

```sh
$ npm install sinon-sandbox --save-dev
```

## Usage

In order to restore your sinon stubs after every test, call `restore` in an afterEach hook.

```javascript
// in a file included at the beginning of your test suite
var sinon = require('sinon-sandbox');

afterEach(function() {
  sinon.restore();
})
```

When writing tests, require `sinon-sandbox`. Since it returns an instance of a [sandbox](http://sinonjs.org/docs/#sandbox), you can treat it just like the original sinon module.

```javascript
var sinon = require('sinon-sandbox');

sinon.stub().returns('a stubbed return value');
```
