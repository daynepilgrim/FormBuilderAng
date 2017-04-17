'use strict';

app.controller('ApplicationCtrl', function($scope, $location) {
 $scope.formData = {
     applicant: { 
         //contains all applicant data
     },
     education: {
         //contains all education data
     },
     employment: {
         //contains all employment data
     },
     references: {
         //contains all reference data
     },
     miscellaneous: {
         //contains all miscellaneous data
     }
 };

 var employmentBlanks = 3; //how many blocks you want to show on the form
 var employmentArr = [];

 for(var i = 1; i <= employmentBlanks; i++){
    employmentArr.push({
        title: `EMPLOYER #${i}${i === 1 ? ' (current or most recent)' : ''}`,
        index: `employer${i}`
    });
 }

 var referenceBlanks = 2; //how many blocks you want to show on the form
 var referenceArr = [];

 for(var i = 1; i <= referenceBlanks; i++){
     referenceArr.push({
         title: `REFERENCE #${i}`,
         index: `reference${i}`
     });
 }

 $scope.employment = employmentArr;
 $scope.references = referenceArr;

 $scope.submitForm = (valid) => {
    $scope.submitted = true;
    
    if(valid){
        //need to do something with the application data here. Currently just logging to console.
        console.log($scope.formData);
        $location.path('/applicationSubmit');
    }
 }

});