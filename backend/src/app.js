const express = require('express')
const app = express()
const ApiError = require('./utils/ApiError');
const NotFoundError = require('./middleware/404handling');
const morgan = require('morgan')
const cors = require("cors")



// Middleware for parsing request body
app.use(express.json({}));
app.use(cors())
app.use(morgan("dev"))
app.use("/api/v1", require("./router"))

app.get('/', (req, res) => {
  res.send({msg: 'Hello World!'})
});

app.use((req, res, next) => {
  next(new ApiError(404, "Not Found"));
});
console.log(process.env.FRONTEND_URI)

app.use(NotFoundError);

module.exports = app