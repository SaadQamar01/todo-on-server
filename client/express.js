var mongoose = require('mongoose');
var express = require('express');
var bodyParser = require('body-parser');
var app = express();
//cors XML k error ko resolve krne k liye lgya h
var cors = require('cors')
cors({credentials: true, origin: true})
app.use(cors())
// Parsers for POST data
app.use(bodyParser.json(), function (err, req, res, next) {
    if (err) {
        return res.status(500).json({ error: err });
    }
    next();
});
app.use(bodyParser.urlencoded({ extended: false }));
//connect database to mongoose
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://todo:Gmail12345@ds149382.mlab.com:49382/todo', {
    useMongoClient: true
    /* other options */
});
//Create Schema using mongoose
var Schema = mongoose.Schema;
var todoDataSchema = new Schema({
    todo: { type: String, required: true },
}, { collection: 'todo-data' });
var TodoData = mongoose.model('TodoData', todoDataSchema);
//create post request to server
app.post('/CREATETODO', function (request, response) {
    response.header('Access-Control-Allow-Origin', "*");
    var item = {
        todo: request.body.item,
    };
    var data = new TodoData(item);
    data.save(function (err, data) {
        if (!err) {
            console.log("data", data)
            response.send(data)
        } else {
            console.log("Err", err)
            response.send(err)
        }
    })
})
//create get request to server
app.get('/getData', function (req, res) {
    res.header('Access-Control-Allow-Origin', "*");
    TodoData.find(function (err, data) {
        if (!err) {
            console.log("data", data)
            res.send(data)
        } else {
            console.log("Err", err)
            res.send(err)
        }
    });
})
//get one data
app.post('/oneData', function (req, res, next) {
    var _id = req.body.id;
    TodoData.findById(_id, function (err, data) {
        if (!err) {
            console.log("data", data)
            res.send(data)
        } else {
            console.log("Err", err)
            res.send(err)
        }
    });
});
//delete data
app.post('/deleteData', function (req, res, next) {
    var _id = req.body.id;
    TodoData.findByIdAndRemove(_id, function (err, data) {
        if (!err) {
            console.log("data", data)
            res.send(data)
        } else {
            console.log("Err", err)
            res.send(err)
        }
    }).exec();
    //   res.redirect('/');
});
//update data
app.post('/updateData', function (req, res, next) {
    var _id = req.body.id;

    TodoData.findById(_id, function (err, doc) {
        if (!err) {
            doc.todo = req.body.item;
            doc.save();
            // console.log("data", data)
            // res.send(data)
        } else {
            console.log("Err", err)
            res.send(err)
        }
    })
    //data update and show new data
    TodoData.find(function (err, data) {
        if (!err) {
            // console.log("data", data)
            res.send(data)
        } else {
            console.log("Err", err)
            res.send(err)
        }
    });
    //   res.redirect('/');
});
// When successfully connected
mongoose.connection.on('connected', function () {
    console.log('Mongoose default connection open to ');
});

// If the connection throws an error
mongoose.connection.on('error', function (err) {
    console.log('Mongoose default connection error: ' + err);
});

// When the connection is disconnected
mongoose.connection.on('disconnected', function () {
    console.log('Mongoose default connection disconnected');
});
var port = process.env.PORT || 8000;
app.listen(port, function () {
    console.log("Server run on port "+port)
});