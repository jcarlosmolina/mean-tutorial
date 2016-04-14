var app = angular.module('flapperNews', []);

app.factory('posts', function () {
	var o = {
		posts: [
			{title: 'post 1', upvotes: 5}, 
			{title: 'post 2', upvotes: 2},
			{title: 'post 3', upvotes: 15},
			{title: 'post 4', upvotes: 9},
			{title: 'post 5', upvotes: 4}
		]
	};
	return o;
});

app.controller('MainCtrl', [
	'$scope', 'posts',
	function($scope, posts){
		$scope.test = 'Hello, world!';
		$scope.posts = posts.posts;

		var addPostPreconditions = function(){
			return ($scope.title && $scope.title !== '');
		};

		var addPostImplementation = function(){
			$scope.posts.push( { 
				title: $scope.title,
				link: $scope.link, 
				upvotes: 0 } );
			$scope.title = '';
			$scope.link = '';
		};

		$scope.addPost = function(){
			if (addPostPreconditions() ) {
				addPostImplementation();
			}
		};

		$scope.incrementUpvotes = function(post) {
			post.upvotes += 1;
		};
}]);