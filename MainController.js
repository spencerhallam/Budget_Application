myApp.controller('MainController', ['$scope', function($scope) { 
     //options
     $scope.income1_options = [0, 100, 150, 200, 250, 300, 350, 400, 450, 500, 550, 600, 650, 700, 750, 800, 850, 900, 950, 1000, 1050, 1100, 1150, 1200, 1250, 1300, 1350, 1400];
     $scope.income2_options = [0, 100, 150, 200, 250, 300, 350, 400, 450, 500, 550, 600, 650, 700, 750, 800, 850, 900, 950, 1000, 1050, 1100, 1150, 1200, 1250, 1300, 1350, 1400];
     $scope.income3_options = [0, 100, 150, 200, 250, 300, 350, 400, 450, 500, 550, 600, 650, 700, 750, 800, 850, 900, 950, 1000, 1050, 1100, 1150, 1200, 1250, 1300, 1350, 1400];
     $scope.food_options = [0, 100, 150, 200, 250, 300, 350, 400, 450]; 
     $scope.rent_options = [0, 645, 400, 450, 500, 550, 600, 650, 700, 750, 800, 850];
     $scope.utilities_options = [0, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80, 85, 90, 95, 100];
     $scope.carinsurance_options = [0, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80, 85, 90, 95, 100];
     $scope.cargas_options = [0, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80, 85, 90, 95, 100];
     $scope.studentloanpmt_options = [100, 150, 200, 250, 300, 350, 450, 600, 650, 700, 750];
     $scope.phone_options = [80, 85, 90, 95, 100, 105, 110, 115, 120, 125, 130, 135, 140];
     $scope.internet_options = [0, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80, 85, 90, 95, 100];
     $scope.creditcard1_options = [0, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80, 85, 90, 95, 100];
     $scope.creditcard2_options = [0, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80, 85, 90, 95, 100];
     
     //default values
     $scope.income1 = 600;
     $scope.income2 = 0; 
     $scope.income3 = 0;
     $scope.food = 300; 
     $scope.rent = 645;
     $scope.utilities = 35;
     $scope.carinsurance = 50;
     $scope.cargas = 40;
     $scope.studentloanpmt = 250;
     $scope.phone = 110;
     $scope.internet = 35;
     $scope.creditcard1 = 20;
     $scope.creditcard2 = 100;
     
     //calculations
     $scope.calculations = function(){
         
        $scope.mybiweeklyincome = $scope.income1 + $scope.income2 + $scope.income3;
        $scope.mymonthlyincome = $scope.mybiweeklyincome*2;
        $scope.monthlyexpenses = $scope.rent + $scope.utilities + $scope.food + $scope.carinsurance  + $scope.cargas + $scope.studentloanpmt + $scope.phone + $scope.internet + $scope.creditcard1 + $scope.creditcard2;
        $scope.descincome = $scope.mymonthlyincome - $scope.monthlyexpenses;   
     };
     $scope.calculations();
}]);
