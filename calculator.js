const express = require("express");
const bodyParser = require("body-parser");
const res = require("express/lib/response");

const app = express();

app.use(bodyParser.urlencoded({extended : true}));


app.get("/",function(req,res){
    res.sendFile(__dirname + "/index.html");
});

app.post("/",function(req,res){
    var n1 = Number(req.body.num1);
    var n2 = Number(req.body.num2);
    var ans = n1 + n2;
    res.send("The result is " + ans);
});

app.get("/bmicalculator",function(req,res){
    res.sendFile(__dirname + "/bmiCalculator.html");
});

app.post("/bmicalculator",function(req,res){
    var weight = parseFloat(req.body.wt);
    var height = parseFloat(req.body.ht);

    var ans = (weight / (height * height));
    res.send("The bmi is " + ans);
});

app.listen(3000,function(){
    console.log("server started");
});