const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const httpError = require('http-errors');
require("dotenv").config();
const db = require("./models/index");


const app = express();

app.use(morgan("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// boor sung cacs middlewares kiem soat hoat dong tren express web server


app.get('/', (req, res) => {
    res.json({ message: "Welcome to WEB" });
});




app.use(async (req, res, next) => {
    next(httpError.NotFound());
});

app.use((err, req, res, next) => {
    res.status(err.status || 500);
    res.send({
        error: {
            status: err.status || 500,
            message: err.message,
        }
    });
});


app.listen(process.env.PORT, process.env.HOST_NAME, () => {   
    console.log("Server listening on port " + process.env.PORT);
    db.connectDB();
});
