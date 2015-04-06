/**
 * Created by M.JUNAID on 2015-03-28.
 */

var mongoose = require('mongoose');
var q        = require('q');

var userSchema = new mongoose.Schema({
    userName:String,
    email: String,
    pass: String
});

userSchema.method('sign_up_data', function (username, email, password, callback) {

    var defered = q.defer();

    this.userName =  username;
    this.email = email;
    this.pass = password;

    this.save(function(err,data){
        if(err){
            console.log(err);
            defered.reject(err);
        }else{
            console.log(data);
            defered.resolve(data);
        }
    });
    return defered.promise;

});

userSchema.method('sign_in_data', function (username, password, callback) {

    var signInData = {userName: username, pass: password};

    User.find(signInData,function(err,data){
        console.log(data);
        callback(err,data)
    });
});

User = mongoose.model('User', userSchema);
module.exports = User;
