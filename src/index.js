const express = require('express');
const cors = require('cors');
const homeRouter = require('./routes/homeRouter');
const bodyParser = require('body-parser');

const app = express();

// middleware
app.use(cors());
app.use(bodyParser())

// operation
app.use("/", homeRouter)


module.exports = { app };