var app = angular.module("excited", []);

var main = function ($scope) {

};

var timelineList = function ($scope) {
    $scope.lists = getTimeline();
};

var todoList = function ($scope) {
    $scope.lists = getTodolist();
};

var followList = function ($scope) {
    $scope.lists = getFollow();
};

app.controller("main", main)
    .controller("timeline-list", timelineList)
    .controller("todo-list", todoList)
    .controller("follow-list", followList);