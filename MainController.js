myApp.controller('MainController', ['$scope', function($scope) { 
     $scope.income1_options = [0, 100, 150, 200, 250, 300, 350, 400, 450, 500, 550, 600, 650, 700, 750, 800, 850, 900, 950, 1000, 1050, 1100, 1150, 1200, 1250, 1300, 1350, 1400];
     $scope.income2_options = [0, 100, 150, 200, 250, 300, 350, 400, 450, 500, 550, 600, 650, 700, 750, 800, 850, 900, 950, 1000, 1050, 1100, 1150, 1200, 1250, 1300, 1350, 1400];
     $scope.income3_options = [0, 100, 150, 200, 250, 300, 350, 400, 450, 500, 550, 600, 650, 700, 750, 800, 850, 900, 950, 1000, 1050, 1100, 1150, 1200, 1250, 1300, 1350, 1400];
     $scope.food_options = 300; 
     $scope.rent_options = 645;
     $scope.utilities_options = 35;
     $scope.carinsurance_options = 103.50;
     $scope.cargas_options = 50;
     $scope.studentloanpmt_options = 250;
     $scope.phone_options = 110;
     $scope.internet_options = 35;
     $scope.creditcard1_options = 0;
     $scope.creditcard2_options = 0;
     
     $scope.income1 = 600;
     $scope.income2 = 0; 
     $scope.income3 = 0;
     $scope.food = 300; 
     $scope.rent = 645;
     $scope.utilities = 35;
     $scope.carinsurance = 103.50;
     $scope.cargas = 50;
     $scope.studentloanpmt = 250;
     $scope.phone = 110;
     $scope.internet = 35;
     $scope.creditcard1 = 0;
     $scope.creditcard2 = 0;
     $scope.calculations = function(){
         
        $scope.mybiweeklyincome = $scope.income1 + $scope.income2 + $scope.income3;
        $scope.mymonthlyincome = $scope.mybiweeklyincome*2;
        $scope.monthlyexpenses = $scope.rent + $scope.utilities + $scope.food + $scope.carinsurance  + $scope.cargas + $scope.studentloanpmt + $scope.phone + $scope.internet;
        $scope.descincome = $scope.mymonthlyincome - $scope.monthlyexpenses;   
     };
     $scope.calculations();
}]);
