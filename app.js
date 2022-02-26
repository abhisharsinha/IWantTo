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
app.use(express.static('static'));

app.use(cookieSession({
  name: 'google-auth-session',
  keys: ['key1', 'key2']
}))
app.use(passport.initialize());
app.use(passport.session())

passport.use(new GoogleStrategy({
    clientID:"1074242406000-60kbrbt2fmdfsrvkmo259qu638266lqo.apps.googleusercontent.com",
    clientSecret: "Kdhtr6b6QZ9n_CRbrrMErVHP",
    callbackURL: "http://localhost:8000/google/callback",
    passReqToCallback   : true
  },
  function(request, accessToken, refreshToken, profile, done) {
    // User.findOrCreate({ googleId: profile.id }, function (err, user) {
      return done(null, profile);
    }
  
));
passport.serializeUser(function(user, done) {
        done(null, user);
});
passport.deserializeUser(function(user, done) {
        done(null, user);
});
// app.use('/', express.static('/'))

// Make sure this is defined before any of your routes
// that make use of the session.

app.get("/", function(req, res) {
  // res.sendFile(path.join(__dirname + '/views/index.html'))
  res.render("index");
});

app.get("/home", function(req, res) {
  var sess = req.session.passport;
  // console.log(sess);
  if (typeof sess === 'undefined') {
    console.log("Inside if undef")
    console.log(sess)
    res.redirect('/');
  } else {
    // res.sendFile(path.join(__dirname + '/views/home.html'))
    res.render("home");
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
                // io.emit('chat message', msg);
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
    // res.sendFile('./discussion.html')

    // res.sendFile(path.join(__dirname + '/views/discussion.html'))
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
  // res.sendFile(path.join(__dirname + '/views/interest.html'))
  res.render("interest", {name: req.session.passport.user.given_name});
});

app.get("/avatar", function(req, res){
  // First check if the session is valid
  res.render("avatar", {fname: req.session.passport.user.given_name,
  lname: req.session.passport.user.family_name,
  email: req.session.passport.user.email,
  pic: req.session.passport.user.picture});
});

server.listen(port, () => {console.log(`Example app listening on port ${port}`)})
