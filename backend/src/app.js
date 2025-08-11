const express = require('express')
const app = express()
const ApiError = require('./utils/ApiError');
const NotFoundError = require('./middleware/404handling');
const morgan = require('morgan');




// Middleware for parsing request body
app.use(express.json({}));
app.use(morgan("dev"))
app.use("/api/v1", require("./router"))

app.get('/', (req, res) => {
  res.send({msg: 'Hello World!'})
});

app.use((req, res, next) => {
  next(new ApiError(404, "Not Found"));
});

app.use(NotFoundError);

module.exports = app