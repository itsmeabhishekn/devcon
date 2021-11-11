const express = require('express');
const connnectDB = require('./config/db');

const connectDB = require('./config/db');

const app = express();

//connect database 

connnectDB();

app.get('/', (req, res) => res.send('API Running'));


//define routes

app.use('/api/users', require('./routes/api/users'));
app.use('/api/profile', require('./routes/api/profile'));
app.use('/api/auth', require('./routes/api/auth'));
app.use('/api/post', require('./routes/api/post'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log('server started on port ${PORT}'));

