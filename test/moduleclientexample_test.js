'use strict';
var ModuleClientExample = require('../src/moduleclientexample.js');

exports['awesome'] = {
  setUp: function (done) {
    done();
  },
  'no args': function(test) {
    test.expect(1);
    test.equal(ModuleClientExample.awesome(), 'awesome', 'should be awesome');
    test.done();
  }
};
