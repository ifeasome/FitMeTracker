// Dependencies
const router = require("express").Router(); 
const path = require("path");



// a res.send file 
// a join directory of the current path to whereever the html file is stored 
// DIRNAME 
// NEEDS TO BE EXPORTED into the server.js 
// in the server use the routes folder. 

module.exports = function(router) {
 
    router.get("/exercise", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/exercise.html"));
    }); 
    
    router.get("/", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/index.html"));
    });

    router.get("/stats", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/stats.html"));
    });

    router.get("*", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/index.html"));
    });
}


