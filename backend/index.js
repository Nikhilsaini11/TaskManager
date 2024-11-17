require('dotenv').config();

const connecrtToMongo = require('./db');
const express = require('express');
const cors = require('cors');

connecrtToMongo();
const app = express();
app.use(cors());
app.use(express.json());

const port = 5000;

// Available Routes
app.use('/api/auth', require('./routes/auth'));
app.use('/api/tasks', require('./routes/tasks'));

app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`);
})
