var mongoose = require('mongoose');
var Blog = mongoose.model('Blog');
var Comment = mongoose.model('Comment');

/* GET users listing. */

exports.list = function(req, res){
    res.send("respond with a resource");
};

/* GET users request. */

exports.register = function(req, res){
    if (req.session.logined) {
        res.redirect('/');
        return;
    }
    res.render("users/register");
};

exports.signin = function(req, res){
    if (req.session.logined) {
        res.redirect('/');
        return;
    }
    res.render("users/signin");
};

exports.signout = function(req, res){
    req.session.logined = false;
    res.redirect('/');
    res.end();
};

exports.forget = function(req, res){
    if (req.session.logined) {
        res.redirect('/');
        return;
    }
    res.render("users/forget");
};

exports.profile = function(req, res){
    res.send("This is the profile page.");
};

exports.add_article = function(req, res){
    res.send("This is the add_article page.");
};

exports.modify = function(req, res){
    res.send("This is the modify page.");
};

exports.message = function(req, res){
    res.send("This is the message page.");
};

exports.login = function(req, res){
    if((!req.body.user) || (!req.body.passwd)) {
        res.redirect('register');
        return;
    }

    req.session.name = req.body.user;
    req.session.passwd = req.body.passwd;
    req.session.logined = true;
    req.redirect('/');
};
