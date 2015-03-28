var locomotive = require('locomotive')
  , Controller = locomotive.Controller;

var myAppController = new Controller();

var User = require('../models/userAccounts');

myAppController.signup = function() {
  this.render()
};

myAppController.signupdata = function() {
  var UserObj = new User();

  console.log(this.req.body);

  var username = this.req.body.username;
  var email = this.req.body.email;
  var password = this.req.body.password;

  UserObj.userdata(username,email,password,function(err,data){
    console.log(err+'------------'+data)
  });

};


module.exports = myAppController;



