const { describe, it } = require('mocha');
const { expect } = require('chai');

const db = require('../database/db.js');

describe('db.js', () => {
  describe('create task', () => {
    it('puts a thing in the database', (done) => {
      db.create('test item 1')
        .then(() => done())
        .catch(done);
    });
  });
  describe('complete task', () => {
    it('changes database item to complete', (done) => {
      db.getAll()
        .then(todone => db.completed(todone[0].id))
        .then(() => done())
        .catch(done);
    });
  });
  describe('edit task', () => {
    it('changes the text of the task', (done) => {
      db.getAll()
      .then((toedit) => {
        db.edited(toedit[0].id, 'edited task')
        .then((editedPromise) => {
          editedPromise
          .then((result) => {
            expect(result).to.equal('edited task');
          });
        });
      })
      .then(() => done())
      .catch(done);
    });
  });

  describe('delete task', () => {
    it('delete database item', (done) => {
      db.getAll()
      .then(todone => db.delete(todone[0].id))
      .then(() => done())
      .catch(done);
    });
  });
});
