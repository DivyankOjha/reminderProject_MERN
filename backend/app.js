
const fs = require('fs');
const path = require('path');
const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const helmet = require('helmet');
const rateLimit = require('express-rate-limit');
const cookieParser = require('cookie-parser');
const mongoSanitize = require('express-mongo-sanitize');
const reminderRouter = require('./routes/reminder');


// const globalErrorHandler = require('./controllers/errorController');
const app = express();

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept, Authorization'
  );
  res.setHeader(
    'Access-Control-Allow-Methods',
    'GET, POST, PATCH, PUT, DELETE, OPTIONS'
  );

  next();
});
// 1) MIDDLEWARES

//Set security HTTP headers
app.use(helmet());


// development logging
if (process.env.NODE_ENV === 'production') {  //development
  app.use(morgan());
}

//app.use(morgan('dev'));

// Limit requests from same API
// const limiter = rateLimit({
//   max: 1000,
//   windowMs: 60 * 60 * 1000,
//   message: 'Too many requests from this IP, please try again in an hour!',
// });
// app.use('/api', limiter);

//body parser - reading data from the body into req.body

app.use(bodyParser.json({ limit: '50mb' }));

//app.use(bodyParser.urlencoded({ extended: false }, { limit: '50mb' }));
app.use(
  bodyParser.urlencoded({
    limit: '50mb',
    extended: true,
    parameterLimit: 5000,
  })
);
app.use(cookieParser());
//app.use(express.json({ limit: '50mb' }));

//Data Sanitization against NoSql Query Injection
app.use(mongoSanitize());

app.use(express.static(path.join(__dirname, 'public')));

//test middleware
app.use((req, res, next) => {
  req.requestTime = new Date().toISOString();
  // console.log(res.cookies);
  next();
});

// 3) ROUTES
 app.use('/api/reminder', reminderRouter);

// app.use(globalErrorHandler);

module.exports = app;
