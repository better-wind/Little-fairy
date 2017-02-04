var app = angular.module('myApp', []);
app.controller('indexCtrl', function($scope) {
    // $scope.searchval = 'null'
    $scope.isLogined = false;
    $scope.isLogin = true;
    $scope.toggle = function() {
        $scope.isLogin = !$scope.isLogin;
    }
    $scope.login = function() {
        $scope.isLogin = false;
        $scope.isLogined = true;
    }
    $scope.search = function(){
        $.ajax({
            url:'/AngBot/data/data.json',
            type:'post',
            data:{

            },
            dataType:'json',
            success:function(res){
                if(res.code == 200){
                    var val  = res.data[$scope.searchname] || '搜索为空'
                    $scope.searchval = val;
                    console.log($scope.searchval);
                }
            }
        })
    }
});