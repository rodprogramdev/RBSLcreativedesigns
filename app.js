//jshint esversion:6
const express = require("express");
const bodyParser = require('body-parser');
const ejs = require("ejs");

//CONTENT
const homeIntroduction = "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Architecto at molestias quae omnis quos. Expedita officia quasi velit maxime doloremque. Nostrum quaerat cumque sunt modi itaque eius? Quisquam, rerum eos.";

const app = express();


app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));


app.get("/", function(req, res){
    res.render("home", {startingContent: homeIntroduction});
});


app.listen(3000, function(){
    console.log("Server started on port 3000");
});

