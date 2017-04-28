const { expect } = require('chai');
const { describe, it } = require('mocha');
let db = require('../database/db.js');

describe('db.js', function() {
  describe('create task', function() {
    it('puts a thing in the database', function(done) {
      db.create('test item 1')
        .then(()=> done())
        .catch(done);
    });
  });
  describe('complete task', function() {
    it('changes database item to complete', function(done) {
        db.getAll()
        .then((todone)=> {
          return db.completed(todone[0].id);
          })
        .then(()=> done())
        .catch(done);
    })
  });
});
