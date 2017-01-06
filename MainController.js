app.controller('MainController', ['$scope', function($scope) {
  $scope.monthly = { 
     income1: 1500, 
     income2: 350, 
     rent: 645, 
     utilities: 35, 
     cargas: "The Empty Hearse", 
     carinsurance: "NOTES HERE", 
     datetime: new Date(2014, 11, 31, 21, 00, 00, 00)
  };
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
