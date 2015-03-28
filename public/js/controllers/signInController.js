/**
 * Created by M.JUNAID on 2015-03-28.
 */

myApp.controller('signInController',function($scope,$http){

    $scope.userData = {
        username:'',
        password:''
    };

    $scope.submit = function(){
        $http.post(("http://localhost:3000/signInData"), $scope.userData)
            .success(function(data){
                console.log(data);
                alert('Successfully SignIn ')
            })
            .error(function(err){
                console.log(err);
                alert('Error SignIn In')
            });
    }

});