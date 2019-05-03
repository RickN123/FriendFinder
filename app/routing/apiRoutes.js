var surveyData = require("../data/friends");
var express = require("express");
var path = require("path");
var app = express();





module.exports = function (app) {
    app.get("/api/survey", function (req, res) {
        res.json(surveyData);
    });



    app.post("/api/clear", function () {
        surveyArray = [];

        console.log(surveyData);
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