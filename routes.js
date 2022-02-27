var express = require('express');
var passport = require('passport');
var app = express.Router();
const { Pool,Client } = require('pg');
const credentials = {
    user: "postgres",
    host: "localhost",
    database: "db_iwantto",
    password: "codechef",
    port: 5432
};
var event_list = [{"username":"abhi", "interest":"hockey", "description":null}, 
{"username":"kabhi", "interest":"football", "description":null},
{"username":"jabhi", "interest":"cricket", "description":null},
{"username":"tabhi", "interest":"squash", "description":null}]
const client = new Pool(credentials);

app.get("/", function(req, res) {
    res.render("index");
  });
  
app.get("/home", async function(req, res) {
    var sess = req.session.passport;
    if (typeof sess === 'undefined' || typeof req.session.username === 'undefined' || typeof req.session.interests === 'undefined') {
      res.redirect('/');
    } 
    
    var result = await client.query("SELECT NAME FROM ACTIVITY;")
    res.render("home", {events: result.rows});
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
  
  app.get('/discussion', function(req, res) {
    var sess = req.session.passport;
    if (typeof sess === 'undefined') {
      res.redirect('/');
    } else {
      // res.setHeader('Content-Type', 'text/html');
      // res.write('<p>user: ' + sess.user + '</p>');
      // res.write('<p>expires in: ' + (sess.cookie.maxAge / 1000) + 's</p>');
      // res.end();
      res.render("discussion", {interests: JSON.stringify(req.session.interests)});
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
      res.redirect('/avatar')
  });
  
  app.get("/logout", function(req, res){
    req.session = null;
    req.logout();
    res.redirect('/');
  });
  
  app.get("/interest", async function(req, res) {
    var sess = req.session.passport;
    if (typeof sess === 'undefined' || typeof req.session.username === 'undefined') {
      res.redirect('/');
    }else if (typeof req.session.interests === "undefined") {

      var result = await client.query(`SELECT AID FROM USERS, INTERESTS WHERE USERNAME = $1 AND USERS.ID = INTERESTS.UID`, [req.session.username]);
    
      if(result.rows.length != 0)
      {
        req.session.interests = []
        for(var i=0;i<result.rows.length;i++)
        {
          req.session.interests.push(result.rows[i]['aid'])
        }

        res.redirect('/home')
      }
      else{
        var activities = await client.query(`SELECT * FROM ACTIVITY`);
        res.render("interest", {name: sess.user.given_name, activities: activities.rows});
      } 
    }
    else{
      res.redirect('/home');
    }
  });
  
  app.post("/interest", async function(req, res) {
    // push to dataset
    // req.session.interests = ["cricket", "hockey"];
    // interests = req.session.interests;
    var user_interests = req.body;
    
    interest_ids = []
    for( let i in user_interests)
      interest_ids.push(user_interests[i])

    console.log(interest_ids);
    var username = req.session.username;
    var result = await client.query(`SELECT ID FROM USERS WHERE USERNAME = $1`, [username]);
    var userid = result.rows[0].id;
    
    let interests_valid = true;
    try{
    for (var i=0; i<interest_ids.length; i++) {
        await client.query(`INSERT INTO INTERESTS (UID, AID, PRIOR) VALUES ($1, $2, $3)`, [parseInt(userid), parseInt(interest_ids[i]),i+1]);
    }
    }catch (err){
      console.log("Duplicate interests error");
      interests_valid = false;
    }

    if(interests_valid)
    {
      req.session.interests = interest_ids;
      res.redirect("/home");
    }
    else{
      res.render("interest", {name: sess.user.given_name, activities: activities.rows});
    }

  });
  
  app.get("/avatar", async function(req, res) {
    var sess = req.session.passport;
    
    // var username = req.session.username;
    var fname = sess.user.given_name
    var lname = sess.user.family_name;
    var email = sess.user.email;

    if (typeof sess === 'undefined') {
      res.redirect('/');
    } else if (typeof req.session.username === 'undefined'){
        var email = sess.user.email;
        var result = await client.query(`SELECT * FROM USERS WHERE EMAIL = $1`, [email]);
        
        if(result.rows.length != 0) {
            req.session.username = result.rows[0]['username']
            res.redirect("/interest");
        } else {
            res.render("avatar", {fname: fname,
                lname: lname,
                email: email});
        }
    }
    else{
      res.redirect("/interest");
    }
  });
  
  app.post("/avatar", async function(req, res){
    
    var sess = req.session.passport;
    var username = req.body.username;
    var fname = sess.user.given_name
    var lname = sess.user.family_name;
    var email = sess.user.email;

    let username_valid = true;
    try{
        await client.query(`INSERT INTO USERS (username, first_name, last_name, email) 
                    VALUES ($1,$2,$3,$4);`,[username,fname,lname,email])
    } catch(err) {
        console.log("Duplicate key error");
        username_valid = false;
        // res.send("Username already exists!");
    }
    
    // Verify if the username using db
    // console.log(req.body);

    if (username_valid) {
      req.session.username = username;
      res.redirect("/interest");
    } else {
        res.render("avatar", {fname: fname,
            lname: lname,
            email: email, error: true});
    }
  });
  

  app.get("/addevent", function(req, res) {
    // var username = req.session.username;
    res.render("addevent");
  });
  
  app.post("/addevent", function(req, res) {
    var username = req.session.username;
    var event_type = req.body.event_type;
  
  });

  module.exports = app;
  