const mysql = require('mysql');
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const database = require('./database');
const app = express();
const encoder = bodyParser.urlencoded();
// const session = require('express-session');
// STATIC 
app.use(express.static(path.join(__dirname, 'public')));

// SESSION CREATION
// app.use(session({
//   secret: 'webslesson',
//   resave: true,
//   saveUninitialized: true
// }))
// LOGIN BUTTON 
app.use(bodyParser.urlencoded({ extended: true }));
app.get('/', (req, res) => {
  const filePath = path.join(__dirname, '..', 'public', 'index.html');
  res.render(filePath);
});

// VERIFY OR LOGO PAGE
app.use(bodyParser.urlencoded({ extended: true }));
app.get('/verify', (req, res) => {
  const filePath = path.join(__dirname, '..', 'public', 'verify.html');
  res.sendFile(filePath);
});


// LOGIN PAGE
app.get('/login', (req, res) => {
  const filePath = path.join(__dirname, '..', 'public', 'login.html');
  res.sendFile(filePath);
});

// RAGISTER PAGE
app.get('/register', (req, res) => {
  const filePath = path.join(__dirname, '..', 'public', 'register.html');
  res.sendFile(filePath);
});

// DASHBOARD PAGE
app.get('/dashboard',(req,res)=>{
  const filePath = path.join(__dirname,'..','public','dashboard.html');
  res.sendFile(filePath);
});

//  TOPUP PAGE
app.get('/topup',(req,res)=>{
  const filePath = path.join(__dirname,'..','public','topup.html');
  res.sendFile(filePath);
});

// LOGIN POST
// LOGIN PAGE
app.post('/login',encoder, (req, res) => {
  const username = req.body.P_LoginForm.username;
  const password = req.body.P_LoginForm.password;
  
  database.query('select * from registration where username = ? and password = ?',[username,password],function(error,results,fields){
    if (results.length > 0) {
      res.redirect('/dashboard')
      
    } else {
      res.redirect('/login')
    }
    res.end()
  })
});


// Register POST
app.post('/register',encoder, (req, res) => {
  const username = req.body.P_SignInForm.username;
  const jabber = req.body.P_SignInForm.jabber;
  const password = req.body.P_SignInForm.password;
  console.log(password)
  database.query("INSERT INTO `registration`(`username`, `password`, `email`) VALUES (?,?,?)",[username,password,jabber],function(error,results,fields){
    console.log(results)
  if (results.length > 0) {
    res.redirect('/register')
    
  } else {
    res.redirect('/dashboard')
  }
  res.end()
})
});
app.listen(3000)
