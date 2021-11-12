const express = require('express');
const connnectDB = require('./config/db');
const app = express();

//connect database 

connnectDB();

// init MIddleware

app.use(express.json({ extended: false}))

app.get('/', (req, res) => res.send('API Running'));


//define routes

app.use('/api/users', require('./routes/api/users'));
app.use('/api/profile', require('./routes/api/profile'));
app.use('/api/auth', require('./routes/api/auth'));
app.use('/api/post', require('./routes/api/post'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log('server started on port ${PORT}'));

