const express = require('express');
const bodyParser = require('body-parser');
const helmet = require('helmet');
const morgan = require('morgan');
const cors = require('cors');
const mongoose = require('mongoose');

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(helmet());
app.use(morgan('dev'));
app.use(cors());

mongoose.connect("mongodb://localhost:27017/test");

app.get("/", function(req, res){
    res.send("Hello World");
});

const PORT =5000;
app.listen(PORT, () => console.log(`Server started at PORT: ${PORT}`));