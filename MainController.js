myApp.controller('MainController', ['$scope', function($scope) { 
     $scope.income1_options = [100, 150, 200, 250, 300, 350, 400, 450, 500, 550, 600, 650, 700, 750, 800, 850, 900, 950, 1000, 1050, 1100, 1150, 1200, 1250, 1300, 1350, 1400];
     $scope.income2_options = [100, 150, 200, 250, 300, 350, 400, 450, 500, 550, 600, 650, 700, 750, 800, 850, 900, 950, 1000, 1050, 1100, 1150, 1200, 1250, 1300, 1350, 1400];
     $scope.income3_options = [100, 150, 200, 250, 300, 350, 400, 450, 500, 550, 600, 650, 700, 750, 800, 850, 900, 950, 1000, 1050, 1100, 1150, 1200, 1250, 1300, 1350, 1400];
     $scope.income1 = 1200; //[350, 500, 1200];
     $scope.income2 = 350; //[350, 500, 1200];
     $scope.income3 = 500; //[350, 500, 1200];
     $scope.food = 450; //[250, 350, 450];
     $scope.rent = 645;
     $scope.utilities = 35;
     $scope.carinsurance = 103.50;
     $scope.cargas = 50;
     $scope.studentloanpmt = 250;
     $scope.calculations = function(){
         
        $scope.mybiweeklyincome = $scope.income1 + $scope.income2 + $scope.income3;
        $scope.mymonthlyincome = $scope.mybiweeklyincome*2;
        $scope.monthlyexpenses = $scope.rent + $scope.utilities + $scope.food + $scope.carinsurance  + $scope.cargas + $scope.studentloanpmt;
        $scope.descincome = $scope.mymonthlyincome - $scope.monthlyexpenses;  
     };
     $scope.calculations();

}]);

//app.controller('MainController', ['$scope', function($scope) {
//  $scope.program = { series: "Sherlock", 
//                    series_img: "img/sherlock.jpg", 
//                    genre: "Crime drama", 
//                    season: 3, 
//                    episode: "The Empty Hearse", 
//                    description: "ts and  Night.", 
//                    datetime: new Date(2014, 11, 31, 21, 00, 00, 00) 
//  };
//  
// }]);
