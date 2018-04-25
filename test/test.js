'use strict';

var assert = require('assert');

var whatsappMessageParser = require('../');

describe('Parsed test data', function(){

  var current;
  
  before(function(done) {
    whatsappMessageParser('test/log.txt', function(messages, err){
      if (err) {
        throw err;
        done();
      }
      current = messages;
      done();
    });
  });

  it('should have the correct amount of total messages', function() {
    assert(current);
    assert.equal(current.length, 4);
  });

  it('should have correct sender for messages', function() {
    assert(current[1]);
    assert.equal(current[1].sender, 'Alexey');
  });

  it('should have correct message', function() {
    assert.equal(current[1].message, 'Hello world');
  });

  it('should have labeled system messages correctly', function() {
    assert.equal(current[0].sender,'Group');
  });

  it('should have a date', function() {
    assert(current[3].date);
  });

  it('should have catenated multiline messages into one message with line breaks', function() {
    assert.equal(current[2].message, "Want a little mess?\nfollow me");
  });

});
