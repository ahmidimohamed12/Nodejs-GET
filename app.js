const express = require("express");
const app = express();

const http = require("http")
const fs = require("fs");

app.get("/",function(req,res){
    res.sendFile(__dirname+'/'+"index.html")
});

var server = app.listen(8081,function(){
    host = server.address().host;
    port = server.address().port;
});