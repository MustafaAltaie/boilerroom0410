const express = require('express');
const dotenv = require('dotenv');
const passport = require('passport');
const session = require('express-session');
const { initializePassport } = require('./auth');
const prisma = require('./prisma');
const path = require('path');


dotenv.config();
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, '../frontend')));

app.use(session({ secret: '4435966', resave: false, saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.session());

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../../frontend/public/index.html'));
});

app.get('/clients', (req, res) => {
    res.send('Client list');
});

initializePassport(passport);

app.listen(process.env.PORT || 5000, () => {
    console.log(`Server is running on port ${process.env.PORT || 5000}`);
});