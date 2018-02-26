'use strict';

var assert = require('chai').assert;

describe('wf-sinon/main', function() {
  var wfSinon;
  var obj;

  beforeEach(function() {
    wfSinon = require('../../');

    obj = {
      foo: function() {
        return 2;
      }
    };
  });

  afterEach(function() {
    wfSinon.restore();
  });

  it('should return an instance of a sandbox', function() {
    assert.isFunction(wfSinon.spy);
    assert.isFunction(wfSinon.stub);
    assert.isFunction(wfSinon.restore);
  });

  it('should allow restoring a stub', function() {
    assert.strictEqual(obj.foo(), 2);
    wfSinon.stub(obj, 'foo').returns(3);
    assert.strictEqual(obj.foo(), 3);
    wfSinon.restore();
    assert.strictEqual(obj.foo(), 2);
  });

  it('should allow creating a stub after restoring', function() {
    wfSinon.stub(obj, 'foo').returns(3);
    wfSinon.restore();
    wfSinon.stub(obj, 'foo').returns(5);
    assert.strictEqual(obj.foo(), 5);
  });

  describe('fake timers', function() {
    it('should not be enabled by default', function() {
      var now = Date.now();
      assert.notEqual(now, 0);
    });

    it('should not be fake after being restored', function() {
      var clock = wfSinon.useFakeTimers();
      clock.restore();
      var now = Date.now();
      assert.notEqual(now, 0);
    });

    it('should enable tick after being restored', function(done) {
      var clock = wfSinon.useFakeTimers();
      clock.tick(4);
      clock.restore();

      setTimeout(done, 0);
    });
  });
});
