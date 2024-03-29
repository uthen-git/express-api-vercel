var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
// const mongoose = require('mongoose');
require('dotenv').config();
require('./config/database').connect();


var usersRouter = require('./routes/users');
var productsRouter = require('./routes/products');
var quotationRouter = require('./routes/Quotations');
var lessonRouter = require('./routes/lesson');
var instantpaymentRouter = require('./routes/instantpayment');
var expenseRouter = require('./routes/expense');
var projectRouter = require('./routes/project');


const cors = require('cors');


var app = express();
const port = 3000
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(cors());

app.use('/users', usersRouter);
app.use('/products', productsRouter);
app.use('/quotations', quotationRouter);
app.use('/lessons', lessonRouter);
app.use('/instantpayments', instantpaymentRouter);
app.use('/projects', projectRouter);
app.use('/expenses', expenseRouter);
app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
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
