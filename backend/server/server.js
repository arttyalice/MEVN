const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const path = require('path');

const users = require('./routes/api/users');

const app = express();

//Body-Parser Middleware
app.use(bodyParser.json());

//DB Config
const db = 'mongodb://localhost:27017/demouser'

//Connect to mongo
mongoose.connect(db, { useNewUrlParser: true })
    .then(() => console.log("Connected to Demo User"))
    .catch(err => console.log(err));

//Use Routes
app.use('/api/users', users);

const port = 5000 || process.env.PORT;

app.listen(port, () => console.log('Server start on port ' + port));