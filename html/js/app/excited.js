var app = angular.module("excited", []);

var main = function ($scope) {

};

var timelineList = function ($scope) {
    $scope.lists = getTimeline();
    //$scope.classUlShow = "hide";
    window.location.hash = "new";

    $scope.markItem = function (id) {
        markItemAnimation(id);
    };

    timelineInit();
};

var todoList = function ($scope) {
    $scope.lists = getTodolist();

    $scope.addNewTodo = function () {
        if(event.keyCode == 13 && $scope.newTodoText){
            $scope.lists.splice(
                0, 0, new todolistLi($scope.newTodoText)
            );
        }
    }
};

var followList = function ($scope) {
    $scope.lists = getFollow();
};

var toolbar = function ($scope) {
    $scope.userInfo = getUserInfo();
};

app.controller("main", main)
    .controller("toolbar", toolbar)
    .controller("timeline-list", timelineList)
    .controller("todo-list", todoList)
    .controller("follow-list", followList);