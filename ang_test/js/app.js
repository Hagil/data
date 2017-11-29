var angular_app = angular.module('IntroToAngularApp', [])
angular_app.controller('controller_1', controller_1);
angular_app.controller('controller_2', controller_2);
angular_app.controller('controller_3', controller_3);



function controller_1($scope) {
    $scope.name = 'Pittsburgh Steelers';
    $scope.division = 'AFC North';
    $scope.established = '1933';
}

function controller_2($scope) {
    $scope.qb = {
        name: 'Ben Rotheisburger',
        number: 7,
        position: 'QB'
    };

    $scope.rb = {
        name: 'Leveon Bell',
        number: 26,
        position: 'RB'
    };
    $scope.wr = {
        name: 'Antonio Brown',
        number: 84,
        position: 'WR'
};
}

function controller_3($scope) {
    $scope.website = 'www.steelers.com';
    $scope.email = 'hagilbaik@gmail.com';
    $scope.number = '852-92293015';
}