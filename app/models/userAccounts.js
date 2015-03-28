/**
 * Created by M.JUNAID on 2015-03-28.
 */

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new mongoose.Schema({
    userName:String,
    email: String,
    pass: String

});

userSchema.method('userdata', function (username, email, password, callback) {

        this.userName =  username;
        this.email = email;
        this.pass = password;


    this.save(function(err,data){
        console.log(data)
        callback(err,data)
    })  ;

})

module.exports =mongoose.model('User', userSchema);
