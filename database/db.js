const pgp = require('pg-promise')();

const connectionString = process.env.DATABASE_URL || 'postgres://localhost:5432/taskr';
const db = pgp(connectionString);

const Tasks = {
  getAll: function () {
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
  },
  getOne: function (id) {
    return db.one('SELECT * FROM todos WHERE id = $1', [id]);
  },
};

module.exports = Tasks;
