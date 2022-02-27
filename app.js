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
app.set('view engine', 'ejs');
app.use('/static', express.static('static'));


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
app.use(session({secret: "trial"}))

passport.use(new GoogleStrategy({
    clientID:"1074242406000-60kbrbt2fmdfsrvkmo259qu638266lqo.apps.googleusercontent.com",
    clientSecret: "Kdhtr6b6QZ9n_CRbrrMErVHP",
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

// Routes
app.get("/", function(req, res) {
  res.render("index");
});

app.get("/home", function(req, res) {
  var sess = req.session.passport;
  if (typeof sess === 'undefined') {
    res.redirect('/');
  } else if (typeof req.session.username === "undefined") {
    res.redirect('/avatar');
  } else if (typeof req.session.interests === "undefined") {
    res.redirect('/interest');
  } else {
    var event_list = [{"username":"abhi", "interest":"hockey", "description":null}, 
    {"username":"kabhi", "interest":"football", "description":null},
    {"username":"jabhi", "interest":"cricket", "description":null},
    {"username":"tabhi", "interest":"squash", "description":null}]
    res.render("home", {events: event_list});
  }
});

// Access the session as req.session
// app.get('/login', function(req, res) {
//   var sess = req.session;
//   if (typeof sess.user === 'undefined') {
//     user++;
//     req.session.user = user;
//   }
//   res.end(
//       req.session.user.toString() +
//       ' is logged in, please go to the /discussion page.');
// });

//Whenever someone connects this gets executed
io.on('connection', function(socket) {
   console.log('A user connected');

   socket.on('chat message', (data) => {
                console.log('message: ' + data.message);
                socket.join(data.interest);
                io.sockets.in('hockey').emit('chat message', {message: data.message});
              });

   //Whenever someone disconnects this piece of code executed
   socket.on('disconnect', function () {  
      console.log('A user disconnected');
   });
});

app.get('/discussion', function(req, res) {
  var sess = req.session.passport;
  if (typeof sess === 'undefined') {
    res.redirect('/');
  } else {
    // res.setHeader('Content-Type', 'text/html');
    // res.write('<p>user: ' + sess.user + '</p>');
    // res.write('<p>expires in: ' + (sess.cookie.maxAge / 1000) + 's</p>');
    // res.end();
    res.render("discussion");
  }
});

app.get('/google',
  passport.authenticate('google', { scope:
      [ 'email', 'profile' ] }
));

app.get( '/google/callback',
  passport.authenticate('google', {
    failureRedirect: '/',
  }),
  function (req, res) {
    console.log("Success login")
    res.redirect('/home')
});

app.get("/logout", function(req, res){
  req.session = null;
  req.logout();
  res.redirect('/');
});

app.get("/interest", function(req, res){
  var sess = req.session.passport;
  if (typeof sess === 'undefined') {
    res.redirect('/');
  } else if (typeof req.session.username === "undefined") {
    res.redirect("/avatar");
  } else if (typeof req.session.interests === "undefined") {
    res.render("interest", {name: sess.user.given_name});
  } else {
    // If the user had added interests earlier then goto home
    res.redirect("/home");
  }
});

app.post("/interest", function(req, res) {
  // push to dataset
  req.session.interests = ["cricket", "hockey"];
  res.redirect("/home");
});

app.get("/avatar", function(req, res) {
  var sess = req.session.passport;
  if (typeof sess === 'undefined') {
    res.redirect('/');
  } else if (typeof req.session.username === "undefined") {
      res.render("avatar", {fname: sess.user.given_name,
        lname: sess.user.family_name,
        email: sess.user.email,
        pic: sess.user.picture});
  }  else {
    // If the user had filled the details earlier
    // then don't goto avatar
    res.redirect("interest");
  }
});

app.post("/avatar", function(req, res){
  var username = req.body.username;
  // Verify if the username using db
  // console.log(req.body);
  let username_valid = true;
  if (username_valid) {
    req.session.username = username;
    console.log(req.session.username);
    res.redirect("/interest");
  } else {
    res.end();
  }
});

server.listen(port, () => {console.log(`Example app listening on port ${port}`)})
