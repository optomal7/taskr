const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');


const app = express();
require('./controllers/todoController')(app);

// set up template
app.set('view engine', 'ejs');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// static files using express static
app.use(express.static(path.join(__dirname, './public/')));

// listen to port
app.listen(process.env.PORT || 3001);

console.log('taskr is listening on port 3001!');
