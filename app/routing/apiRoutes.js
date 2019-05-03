var surveyData = require("../data/friends.js");
// var express = require("express");
// var path = require("path");
// var app = express();


var friends = [];


module.exports = function (app) {
    app.get("/data/friends", function (req, res) {
        res.json(friends);
    });



    app.post("/data/friends", function (req, res) {
        var userInput = req.body;
        // console.log(userInput);
        var userResponse = userInput.scores;
        // console.log(userResponse);

        friends.push(userInput);
        res.json(userInput);


    });
};


// var surveyArray = [
//     {
//         Name: "",
//         Image: "",
//         Q1: "",
//         Q2: "",
//         Q3: "",
//         Q4: "",
//         Q5: "",
//         Q6: "",
//         Q7: "",
//         Q8: "",
//         Q9: "",
//         Q10: ""