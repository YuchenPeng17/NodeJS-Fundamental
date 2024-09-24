var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/web/index');
const apiEntryRouter = require('./routes/api/entry');
const UserRouter = require('./routes/web/user');
const apiUserRouter = require('./routes/api/user');

var app = express();

// session set up
const session = require('express-session')
const MongoStore = require('connect-mongo');
const config = require(__dirname+'/config')
// Create Obj & Set middleware
app.use(session({
    name: 'sid',                // set name of the sessionID cokkie, `connect.sid` by default
    secret: 'kunasecret',       // signature, encrypt string
    saveUninitialized: false,   // 
    resave: true,               // re-save the session everytime when request
    store: MongoStore.create({
        mongoUrl: config.MongoDB_Connection_String,
        dbName: 'Express_Mongoose_01'
        // collectionName: '<NAME>', by default it is "sessions"
    }),
    cookie:{
        httpOnly: true,
        maxAge: 1000 * 60 * 60 * 24 * 7,
    }
}));

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));

/* json&urlencoded middleware -> access query string / request body(json) from req.body */
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/', UserRouter);
app.use('/api', apiEntryRouter);
app.use('/api', apiUserRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  // next(createError(404));
  res.render('404');
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
