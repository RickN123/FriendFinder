var surveyArray = [
    {
        Name: "",
        Image: "",
        Q1: "",
        Q2: "",
        Q3: "",
        Q4: "",
        Q5: "",
        Q6: "",
        Q7: "",
        Q8: "",
        Q9: "",
        Q10: ""

    }
];



module.exports = function (app) {
    app.get("/api/survey", function (req, res) {
        res.json(surveyArray);
    });



    app.post("/api/clear", function () {
        surveyArray = [];

        console.log(surveyArray);
    });
};
