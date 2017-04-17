'use strict';

app.controller('OptionsCtrl', function($scope, $location){

    $scope.applicationForm = () => {
        $location.path('/application');
    };

    $scope.builtForm = () => {
        $location.path('/builtform');
    };
});