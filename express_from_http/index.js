require('dotenv').config();
const express = require('express');
const path = require('path');

const app = express();

app.use(express.static(path.join(__dirname, 'public')));
//app.use(express.urlencoded({ extended: false }));

app.get('/', function(req, res) {
    res.sendFile('index.html');
});

app.get('/page1', function(req, res) {
    res.sendFile(path.join(__dirname, 'public') + '/page1.html');
});

app.get('/page2', function(req, res) {
    res.sendFile(path.join(__dirname, 'public') + '/page2.html');
});

app.post('/', function(req, res) {
    res.status(200).send(JSON.stringify({ title: "The Matrix" }));
});

app.listen(process.env.PORT);