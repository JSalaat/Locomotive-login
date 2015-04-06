var locomotive = require('locomotive')
  , Controller = locomotive.Controller;

var myAppController = new Controller();

var User = require('../models/userAccounts');

myAppController.signup = function() {
  this.render()
};

myAppController.signin = function() {
  this.render()
};

myAppController.signupdata = function() {
  var UserObj = new User();

  var dataObj,errObj;
  console.log(this.req.body);

  var username = this.req.body.username;
  var email = this.req.body.email;
  var password = this.req.body.password;

  UserObj.sign_up_data(username,email,password)
      .then(function(data){
        this.res.send({resObj:data})
      }, function(err){
        this.res.send({resObj:err})
      });

};

myAppController.signindata = function() {
  var UserObj = new User();

  console.log(this.req.body);

  var username = this.req.body.username;
  var password = this.req.body.password;

  UserObj.sign_in_data(username,password,function(err,data){
    console.log(err+'------------'+data)
  });

};

module.exports = myAppController;



