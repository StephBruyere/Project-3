const express = require('express');
const app = express();
const session    = require('express-session');
const passport   = require('passport');
const bodyParser = require('body-parser');
const path = require("path");
var routes = require("./routes");
//*****************************************/
// Configure body parser for AJAX requests /
//*****************************************/
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//***************/
// For Passport  /
//***************/
app.use(session({ secret: 'keyboard cat',resave: true, saveUninitialized:true})); // session secret
app.use(passport.initialize());
app.use(passport.session()); 
app.use(express.static("client/build"));
//app.use(flash());

// Add routes, both API and view
app.use(routes);

//********/
// Models /
//********/
var models = require("./models");

//********/
// Routes /
//********/
//var authRoute = require('./routes/auth.js')(app,passport);

//**************************/
// load passport strategies /
//**************************/
//require('./config/passport/passport.js')(passport, models.user);
//require('./routes/api-routes.js')(app);

//***************/
// Sync Database /
//***************/
models.sequelize.sync().then(function() {
 console.log('Nice! Database looks fine')
 }).catch(function(err) {
 console.log(err, "Something went wrong with the Database Update!") 
});

//**********************/
// Start the API server /
//**********************/
app.listen(5000, function(err) {
    if (!err)
        console.log("Site is live");
    else console.log(err)
});

