const pgp = require('pg-promise')();

const connectionString = 'postgres://localhost:5432/taskr';
const db = pgp(connectionString);

const Tasks = {
  getAll() {
    return db.any('SELECT * FROM todos');
  },
  create(task) {
    return db.any('INSERT INTO todos (task) VALUES ($1)', [task]);
  },
  delete(id) {
    return db.none('DELETE from todos WHERE id = $1', [id]);
  },
  completed(id) {
    return db.any('UPDATE todos SET isCompleted=true WHERE id = $1', [id]);
  },
  setToIncomplete(id) {
    return db.any('UPDATE todos SET isCompleted=false WHERE id = $1', [id]);
  },
  edited(id, task) {
    return db.any('UPDATE todos SET task=$1 WHERE id = $2 RETURNING task', [task, id]);
  },
  getOne(id) {
    return db.one('SELECT * FROM todos WHERE id = $1', [id]);
  },
};

module.exports = Tasks;
