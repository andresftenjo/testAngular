"use strict";

var app = angular.module('appTesting', ['ngRoute']);

function loadScript(src,callback){

    var script = document.createElement("script");
    script.type = "text/javascript";
    if(callback)script.onload=callback;
    document.getElementsByTagName("body")[0].appendChild(script);
    script.src = src;
}

app.factory("services", ['$http', function($http) {

    var serviceBase = 'http://test.alquimedia.co/'
    var obj = {};
    obj.getUsers = function() {
        return $http.get(serviceBase + 'rest/user');
    }
    obj.getUser = function(userID) {
        return $http.get(serviceBase + 'rest/user/' + userID);
    }

    obj.insertUser = function (user_) {
        
        var obJsn = $.extend({}, user_);
        
        return $http.post(serviceBase + 'register-user', obJsn).then(function (results) {
            window.location.assign('/');
            return results;
        });
    };
    
    obj.updateUser = function (id,user_) {
        return $http.post(serviceBase + 'update-user', user_).then(function (status) {
            window.location.assign('/');
	        return status.data;
	    });
	};
    
    obj.deleteUser = function (id) {
	    return $http.post(serviceBase + 'delete-user?user_id=' + id, {user_id : id}).then(function (status) {
            window.location.assign('/');
	        return status.data;
	    });
	};
    
    return obj;
}]);

//Including UsersController
document.write('<script type="text/javascript" src="src/controllers/usersCtrl.js" ></script>');

app.config(['$routeProvider',
    function($routeProvider) {

        $routeProvider.
            when('/', {
                title: 'Users',
                templateUrl: 'src/templates/user-table.html',
                controller: 'GetUsersCtrl'
            })
            .when('/edit/:userID', {
                title: 'Edit Users',
                templateUrl: 'src/templates/edit-user.html',
                controller: 'editCtrl',
                resolve: {
                    user: function(services, $route) {
                        var userID = $route.current.params.userID;
                        return services.getUser(userID);;
                    }
                }
            })
            .otherwise({
                redirectTo: '/'
            });
    }]);

app.run(['$location', '$rootScope', function($location, $rootScope) {

    $rootScope.$on('$routeChangeSuccess', function(event, current, previous) {
        current.$route ? $rootScope.title = current.$route.title : "";
    });

}]);
