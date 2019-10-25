// var http = require('http');
// http.createServer(function (request, response) {
//   response.writeHead(200, {'Content-Type': 'text/plain'});
//   response.end('Hello World');
// }).listen(8081);

// console.log('Server running at http://127.0.0.1:8081/');

// var http = require('http');
// http.createServer((req, res) => {

//     res.writeHead(200, { 'Content-Type': 'text/plain' });
//     res.end("This is our nodemon is running the server");

// }).listen(3000, '127.0.0.1');


// console.log("Server is running at localhost:3000");

const express = require('express');
const path = require('path');


const app = express();

const todos = [
    {
        name: "Attend CS404",
        venue: "LAB 2",
        time: "12:00",
        isDone: false
    },

    {
        name: "Attend CS504",
        venue: "LAB 1",
        time: "02:00",
        isDone: false
    },
    {
        name: "Attend MTH318",
        venue: "MLR",
        time: "05:00",
        isDone: false
    }
]

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');


app.use('/todo', (req, res, next) => {

    res.render('todoView', { todos });

});


app.use((req, res, next) => {

    res.render('index', { name: "Dauda" });

});

app.listen(3000, 'localhost', () => {
    console.log("server is running at localhost:3000");
});