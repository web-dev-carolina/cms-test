const createError = require('http-errors');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const cors = require('cors');
const indexRouter = require('./routes/index');
const body_parser = require('body-parser');
const express = require('express');
const app = express();
var mongodb = require("mongodb");
var ObjectID = require('mongodb').ObjectID;
app.use(cors());
app.options('*', cors());
// parse JSON (application/json content-type)
app.use(body_parser.json());
require('dotenv').config();
const db = require("./db");

// After login, a user may connect to one of their projects - this function will initialize connections to all collections.
// CONNECT to user's project
// ex. curl -X POST -H "Content-Type: application/json" -d '{"project":"projectName"}' http://localhost:9000/projects/connect
// initialize Testimonial and People db, should be called after login
let testimonialCollection;
let peopleCollection;
let textCollection;

app.post('/projects/connect', async (req, res) => {
    console.log(req.body);
    try {
        const proj = req.body.project;

        dbName = process.env.DB_NAME;

        // connect to testimonial collection
        collectionName = proj + "-testimonials";
        console.log("attempting connection to: " + collectionName);
        db.initialize(dbName, collectionName, function (dbCollection) { // successCallback
            testimonialCollection = dbCollection;
        }, function (err) { // failureCallback
            throw (err);
        });

        // connect to people collection
        // defined above - const dbName = "test1";
        collectionName = proj + "-people";
        console.log("attempting connection to: " + collectionName);
        db.initialize(dbName, collectionName, function (dbCollection) { // successCallback
            peopleCollection = dbCollection;
        }, function (err) { // failureCallback
            throw (err);
        });

        // connect to people collection
        // defined above - const dbName = "test1";
        collectionName = proj + "-text";
        console.log("attempting connection to: " + collectionName);
        db.initialize(dbName, collectionName, function (dbCollection) { // successCallback
            textCollection = dbCollection;
        }, function (err) { // failureCallback
            throw (err);
        });

        res.json(200);
    } catch (err) {
        res.status(500).json(err);
    }
});

// READ all testimonials
// ex. $ curl http://localhost:9000/testimonials
// -> all testimonials as array of JSON
app.get("/testimonials", (req, res) => {
    // respond with all items in collection
    testimonialCollection.find().toArray((error, result) => {
        if (error) throw error;
        res.json(result);
    });
});

// READ all people
// ex. $ curl http://localhost:9000/people
// -> all testimonials as JSON
app.get("/people", (req, res) => {
    // respond with all items in collection
    peopleCollection.find().toArray((error, result) => {
        if (error) throw error;
        res.json(result);
    });
});

// READ all text content
// ex. $ curl http://localhost:9000/textContent
// -> all testimonials as array of JSON
app.get("/textContent", (req, res) => {
    // respond with all items in collection
    textCollection.find({ sections: { $exists: false } }).toArray((error, result) => {
        if (error) throw error;
        res.json(result);
    });
});

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
// catch 404 and forward to error handler
app.use(function (req, res, next) {
    next(createError(404));
});
// error handler
app.use(function (err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render('error');
});

module.exports = app;

