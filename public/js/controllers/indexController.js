/**
 * Created by M.JUNAID on 2015-03-28.
 */

myApp.controller('indexController',function($scope,$http){

    $scope.userData = {
        username:'',
        email:'',
        password:''
    };

    $scope.submit = function(){
        $http.post(("http://localhost:3000/indexdata"), $scope.userData)
            .success(function(data){
                console.log(data);
            })
            .error(function(err){
                console.log(err);

            });
    }

});