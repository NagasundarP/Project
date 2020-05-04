//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const mongoose = require('mongoose');


const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

mongoose.connect("mongodb://127.0.0.1:27017/blogDB", { useNewUrlParser: true, useUnifiedTopology: true });



app.get("/header", function(req,res){
    res.render("header");
});




app.listen(3000, function() {
    console.log("Server started on port 3000");
  });
  