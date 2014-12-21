var app = angular.module('Deals', ['ui.bootstrap']);

// HTTP service
app.service("hotelService", function($http, $q) {
	var deferred = $q.defer();
	$http.get("hotelDeals.json").then(function (data) {
		deferred.resolve(data);
	});
	this.getDeals = function() {
		return deferred.promise;
	}
})
// Controller function
.controller('hotelDealsCntrl', function ($scope, hotelService){
	$scope.visible = false;
	$scope.orderByField = 'starRating';
	$scope.reverseSort = false;
	$scope.priceRanges = [
							{'range': "Select All", 'min': 0, 'max': 1999},
							{'range': "$ 25 And Below", 'min': 0, 'max': 25},
							{'range': "$ 25 - $ 49.99", 'min': 25, 'max': 49.99},
							{'range': "$ 50 - $ 99.99", 'min': 50, 'max': 99.99},
							{'range': "$ 100 And Above", 'min': 100, 'max': 1999}
						];
	$scope.searchPriceRange = {"priceRange": false};
	$scope.resetPriceRange = function(){
		$scope.searchPriceRange.priceRange = false;
	}

	// scope variables for Hotel Star ranges
	$scope.hotelStarRanges = [
							{'range': "Select All", 'min': 0, 'max': 10},
							{'range': "2 Star Hotel", 'min': 0, 'max': 2.9},
							{'range': "3 Star Hotel", 'min': 3, 'max': 3.9},
							{'range': "4 Star and Above", 'min': 4, 'max': 10}
						];
	$scope.searchHotelStarRange = {"hotelStarRange": false};
	$scope.resetHotelStarRange = function(){
		$scope.searchHotelStarRange.hotelStarRange = false;
	}

	// Calling service method to get data from json file
	var promise = hotelService.getDeals();
	promise.then(function (data) {
		$scope.deals = data;
		for(var i=0,len=$scope.deals.data.length; i<len; i++) {
			$scope.deals.data[i].dealDeepLink = unescape($scope.deals.data[i].dealDeepLink);
			$scope.deals.data[i].similarDeepLink = unescape($scope.deals.data[i].similarDeepLink);
		}
	});

	// method to initialize and load map
	$scope.initializeMap = function(lat, longi, index) {
        var mapCanvas = document.getElementById('map-canvas' + index);
		var myLatlng = new google.maps.LatLng(lat, longi);
        var mapOptions = {
          center: myLatlng,
          zoom: 8,
          mapTypeId: google.maps.MapTypeId.ROADMAP
        }
        var map = new google.maps.Map(mapCanvas, mapOptions);
		var marker = new google.maps.Marker({
			  position: myLatlng,
			  map: map
		});
    }
});

app.filter('priceRangeFilter', function() {
	return function(items, priceRange) {
		var prod = [];
		if(priceRange === false){
			return items;
		}
		else{
			priceRange = JSON.parse(priceRange);
			for(var i=0; i<items.length;i++){
				if(items[i].pricePerNight >= priceRange.min && items[i].pricePerNight <= priceRange.max){
					prod.push(items[i]);
				}
			}
			return prod;
		}
	}
});

app.filter('hotelStarRangeFilter', function() {
	return function(items, hotelStarRange) {
		var prod = [];
		if(hotelStarRange === false){
			return items;
		}
		else{
			hotelStarRange = JSON.parse(hotelStarRange);
			for(var i=0; i<items.length;i++){
				if(items[i].starRating >= hotelStarRange.min && items[i].starRating <= hotelStarRange.max){
					prod.push(items[i]);
				}
			}
			return prod;
		}
	}
});

