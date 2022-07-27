// import express for routes
const express = require("express");

// import html and api routes file
const htmlRoutes = require("./routes/htmlRoutes");
const apiRoutes = require("./routes/apiRoutes")

// process.env needed for deployment to Heroku
const PORT = process.env.PORT || 3001;
// store express in a const var for cleaner code
const app = express();
// needed to make it available for web
app.use(express.static("public"));
// complete detail parsing, then convert to JSON; Middleware Parsing
app.use(express.urlencoded({extended:true}));
app.use(express.json());

// Module route for api
app.use(apiRoutes)

// Module route for HTML
app.use(htmlRoutes)

// deploy the port
app.listen(PORT,()=>{
    console.log("App is listening on Port http://localhost:"+ PORT)
});