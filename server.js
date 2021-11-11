const express = require('express');
const connnectDB = require('./config/db');

const connectDB = require('./config/db');

const app = express();

//connect database 

connnectDB();

app.get('/', (req, res) => res.send('API Running'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log('server started on port ${PORT}'));

