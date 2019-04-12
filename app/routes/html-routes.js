const path = require("path");

module.exports = function(app){
    app.get("/", function(req, res){
        res.sendFile(path.join(__dirname, "./../public/index.html"));
    });

    app.get("/register", function(req, res){
        res.sendFile(path.join(__dirname, "./../public/register.html"));
    });

    app.get("/control", function(req, res){
        res.sendFile(path.join(__dirname, "./../public/control.html"));
    });
    app.get("/menu", function(req, res){
        res.sendFile(path.join(__dirname, "./../public/menu.html"));
    });
    app.get("/cart", function(req, res){
        res.sendFile(path.join(__dirname, "./../public/cart.html"));
    });
    app.get("/confirmation", function(req, res){
        res.sendFile(path.join(__dirname, "./../public/confirmation.html"));
    });
    
};  