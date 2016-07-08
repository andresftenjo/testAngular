
app.controller('GetUsersCtrl', function($scope, services) {
    $scope.hello = "Welcome to Alquemedia Test App !";
    services.getUsers().then(function(data) {
        $scope.users = data.data;
    });
});

app.controller('editCtrl', function ($scope, $rootScope, $location, $routeParams, services, user) {
    var customerID = ($routeParams.userID) ? parseInt($routeParams.userID) : 0;
    $rootScope.title = (customerID > 0) ? 'Edit User' : 'Add User';
    $scope.buttonText = (customerID > 0) ? 'Update User' : 'Add New User';
    
      var original = user.data;
      original._id = customerID;
      $scope.user = angular.copy(original);
      $scope.user._id = customerID;

      $scope.isClean = function() {
        return angular.equals(original, $scope.user);
      }

      $scope.deleteCustomer = function(customer) {
        //$location.path('/');
        if(confirm("Are you sure to delete user number: "+$scope.user.full_name)==true)
        services.deleteUser(customer.user_id);
      };

      $scope.saveUser = function(user_) {
        //$location.path('/');
        if (customerID <= 0) {
            
            console.log(user_);
            $(user_).each(function( index ) {
                delete user_[index];
            });
            delete user_._id;
            
            console.log(user_);
            
            services.insertUser(user_);
        }
        else {
            services.updateUser(customerID, user_);
        }
    };
});
