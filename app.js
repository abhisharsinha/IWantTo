var express = require('express');
var session = require('express-session');
var app = express();
var http = require('http');
var server = http.createServer(app);
var io = require('socket.io')(server);
const path = require('path');
const port = 8000
var user = 0
var passport = require('passport');
var GoogleStrategy = require( 'passport-google-oauth2' ).Strategy;
const cookieSession = require('cookie-session');
const routes = require('./routes')
const CLIENT_ID = "YOUR GOOGLE OAUTH CLIENT ID"
const CLIENT_SECRET = "YOUR GOOGLE OAUTH CLIENT SECRET"


app.set('view engine', 'ejs');
app.use("/static", express.static('static'));

// To parse the html request
app.use(
  express.urlencoded({
    extended: true
  })
)
app.use(express.json())

// For authentication
app.use(cookieSession({
  name: 'google-auth-session',
  keys: ['key1', 'key2']
}));
app.use(passport.initialize());
app.use(passport.session());
var sessionMiddleware = session({secret: "trial",
resave: true,
saveUninitialized: true});

// register middleware in Socket.IO
// app.use(sessionMiddleware);
io.use(function(socket, next) {
  sessionMiddleware(socket.request, socket.request.res || {}, next);
});

app.use(sessionMiddleware);

passport.use(new GoogleStrategy({
    clientID:CLIENT_ID,
    clientSecret: CLIENT_SECRET,
    callbackURL: "http://localhost:8000/google/callback",
    passReqToCallback   : true
  },
  function(request, accessToken, refreshToken, profile, done) {
      return done(null, profile);
    }
  
));
passport.serializeUser(function(user, done) {
        done(null, user);
});
passport.deserializeUser(function(user, done) {
        done(null, user);
});

//Whenever someone connects this gets executed
io.on('connection', function(socket) {
  console.log('A user connected');
 //  console.log(socket.client.request.session);
  socket.on('chat message', (data) => {
               console.log('message: ' + data.event_type);
               // console.log(socket.request.session.username + ' connected');
               // console.log(socket.client.request.session);

               // socket.join(data.interest);
               // io.sockets.in('hockey').emit('chat message', {message: data.message});
               io.sockets.emit('chat message', {message: data.event_type});
             });

  //Whenever someone disconnects this piece of code executed
  socket.on('disconnect', function () {  
     console.log('A user disconnected');
  });
});

app.use('/', routes);
// Routes

server.listen(port, () => {
  console.log(`Example app listening on port ${port}`)})
