const express = require('express');
const app = express();
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const morgan = require('morgan');
require('dotenv').config();

// import routes
const authRoutes = require('./routes/authRoute');
const questionRoutes = require('./routes/QuestionRoute');
const answerRoutes = require('./routes/answerRoute');

// create port variable
const port = process.env.PORT || 3000;

// middleware
app.use(morgan('dev'))
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// routes
app.use('/', authRoutes);
app.use('/', questionRoutes);
app.use('/', answerRoutes);

//cloud database
const db = process.env.MONGO_URL 

//connecting to the database
mongoose.connect('mongodb+srv://Priscilla:Priscilla2@faw.hlyy4.mongodb.net/<FAW>?retryWrites=true&w=majority', {useUnifiedTopology:true, useNewUrlParser:true, useFindAndModify: false })
    .then(() => console.log('     MongoDb Connected!!! (*_*) '))


//server
app.listen(port, (req, res) => {
    console.log(`Server running at http://localhost:${port}`);
});
