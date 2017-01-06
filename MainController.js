myApp.controller('MainController', ['$scope', function($scope) {
  $scope.monthly = { 
     income1: 1500, 
     income2: 350,
     income3: 350,
     food: 400,
     rent: 645, 
     utilities: 35, 
     carinsurance: 103.50,
     cargas: 50,  
     datetime: new Date(2014, 11, 31, 21, 00, 00, 00),
     totalmonthlyincome: function(){return 2 + 2;}
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
