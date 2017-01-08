myApp.controller('MainController', ['$scope', function($scope) { 
     $scope.income1 = 1200;//[350, 500, 1200];
     $scope.income2 = 350;//[350, 500, 1200];
     $scope.income3 = 500;//[350, 500, 1200];
     $scope.food = [250, 350, 450];
     $scope.rent = 645;
     $scope.utilities = 35;
     $scope.carinsurance = 103.50;
     $scope.cargas = 50;
     $scope.calculations = function(){
         
        $scope.mybiweeklyincome = $scope.income1 + $scope.income2 + $scope.income3;
        $scope.mymonthlyincome = $scope.mybiweeklyincome*2;
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
