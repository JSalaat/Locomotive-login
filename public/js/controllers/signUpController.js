/**
 * Created by M.JUNAID on 2015-03-28.
 */

myApp.controller('signUpController',function($scope,$http){

    $scope.userData = {
        username:'',
        email:'',
        password:''
    };

    $scope.submit = function(){
        $http.post(("http://localhost:3000/signUpData"), $scope.userData)
            .success(function(data,res){
                console.log(data);
                console.log(res);
                alert("Sign Up Complete Successfully")
            })
            .error(function(err){
                console.log(err);
                alert("Sign Up Error")
            });
    }
});