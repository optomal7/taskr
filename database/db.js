var pgp = require('pg-promise')()
var connectionString = 'postgres://localhost:5432/taskr'
var db = pgp(connectionString)

var Tasks = {
  getAll: function() {
    return db.any('SELECT * FROM todos');
  },
  create: function (task) {
    return db.any('INSERT INTO todos (task) VALUES ($1)', [task]);
  },
  delete: function (id) {
    return db.none('DELETE from todos WHERE id = $1', [id]);
  },
  completed: function (id) {
    return db.any('UPDATE todos SET isCompleted=true WHERE id = $1', [id]);
  },
  setToIncomplete: function (id) {
    return db.any('UPDATE todos SET isCompleted=false WHERE id = $1', [id]);
  },
  edited: function (id, task) {
    return db.any('UPDATE todos SET task=$1 WHERE id = $2', [task, id]);
  }
};

module.exports = Tasks;
