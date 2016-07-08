angular.module(window.nameSpaceApp)
    .controller('UsersController', ['$scope', '$http', UsersController]);

function UsersController( $scope, $http )
{
    var vm = this;

    vm.users = [
        {
            name: 'Richard',
            firstName: 'Rivas',
            phone: 300845120
        }
    ];
}