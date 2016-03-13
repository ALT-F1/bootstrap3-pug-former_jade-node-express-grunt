/*
 creating a Express app initializing it with the HelloWorld message
 */
'use strict';

var PORT_LISTENER = 3001;
console.log('I am listening to this port: http://localhost:%s', PORT_LISTENER);

var express = require('express'),
    bodyParser = require('body-parser'),
    methodOverride = require('method-override'),
    cookieParser = require('cookie-parser'),
    session = require('express-session'),
    errorhandler = require('errorhandler'),
    favicon = require('serve-favicon'),
    logger = require('morgan'),
    http = require('http'),
    path = require('path');

var appConfig = require('./config/appConfig.json');
var router = require('./routes/index');

var app = express();

// all environments
app.set('port', process.env.PORT || PORT_LISTENER);
app.set('views', __dirname + '/views');
app.set('view engine', 'jade');
app.use(favicon(__dirname + '/public/bootstrap-3.3.1/docs/favicon.ico'));
app.use(logger('dev'));
app.use(bodyParser({ keepExtensions: true, uploadDir: path.join(__dirname, appConfig.directories.publicDir) }));
app.use(methodOverride());
app.use(cookieParser('my v3ry s3cr3t C00k1e k3y d0nt y0u th1nk?'));
app.use(session({ resave: true,
                  saveUninitialized: true,
                  secret: 'my l1ttl3 s3cret s3ss10n k3y isnt it?' }));

//routes
app.use('/', router);

app.use(express.static(path.join(__dirname, appConfig.directories.publicDir)));

app.use(function (req, res, next) {
    console.log('req.body: ' + JSON.stringify(req.body));
    next();
});

// development only
if ('development' === app.get('env')) {
    app.use(errorhandler());
}


http.createServer(app).listen(app.get('port'), function () {
    console.log('Express server listening on port ' + app.get('port'));
});
