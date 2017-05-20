// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('starter', ['ionic'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

      // Don't remove this line unless you know what you are doing. It stops the viewport
      // from snapping when text inputs are focused. Ionic handles this internally for
      // a much nicer keyboard experience.
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})
.config(function($stateProvider,$urlRouterProvider){
	$stateProvider
	.state("home",{
		url:"/home",
		views:{
			home:{
				//对应的是index中底部ion-nav-view中的name值
				templateUrl:"html/home.html"
			}
		}
	})
	.state("find",{
		url:"/find",
		views:{
			find:{
				templateUrl:"html/find.html",
				controller:"find"
			}
		}
	})
	.state("youji",{
		url:"/find/:id",
		views:{
			find:{
				templateUrl:"html/youji.html",
				controller:"youji"
			}
		}
	})
	.state("my",{
		url:"/my",
		views:{
			my:{
				templateUrl:"html/my.html"
			}
		}
	})
	.state("jinhai",{
		url:"/jinhai",
		views:{
			home:{
				templateUrl:"html/jinhai.html",
				controller:"ctrl"
			}
		}
	})
	.state("trip1",{
		url:"/trip1",
		views:{
			home:{
				templateUrl:"html/trip1.html",
				controller:"ctrl1"
			}
		}
	})
	.state("setting",{
		url:"/setting",
		views:{
			home:{
				templateUrl:"html/setting.html"
				
			}
		}
	})
	$urlRouterProvider.otherwise("/home")
	
})
.controller("ctrl",function($scope,$http){
	$http({
		method:"get",
		url:"json/travel.json"
	}).success(function(data){
		console.log(typeof data.jinhai.img1)
		$scope.img1=data.jinhai.img1;
		$scope.title=data.jinhai.title;
		$scope.content=data.jinhai.content;
		$scope.arr=data.jinhai.imgs;
	})
	
})
.controller("ctrl1",function($scope,$http){
	$http({
		method:"get",
		url:"json/travel.json"
	}).success(function(data){
		console.log(data.trip1.contents)
		$scope.img1=data.trip1.img;
		$scope.arr1=data.trip1.content;
		$scope.arr2=data.trip1.contents;			
	})	
})
.controller("find",function($scope,$http){
	$http({
		method:"get",
		url:"json/youji.json"
	}).success(function(data){
		
		$scope.youji=data;
		console.log($scope.youji)
		
	})

})
.controller("youji",function($scope,$http,$stateParams){
	$http({
		method:"get",
		url:"json/youji.json"
	}).success(function(data){
		
		$scope.youji=data;
		
		$scope.str=data[$stateParams.id]
		console.log($scope.str)
	})
	
	
	
})




