// TODO : debug
var domain = "";//http://172.27.221.110"
// TODO : end debug

var app = angular.module("excited", []);

var redirectLogin = function () {
    $("#overlay").css("display", "inherit");
    $("#warning").css("opacity", "1");
    var secondLeft = 5;
    $("#second").html(secondLeft);
    setInterval(function () {
        secondLeft--;
        if (secondLeft <= 0)
            window.location.href = "login/";
        else
            $("#second").html(secondLeft);
    }, 1000);
};

var checkLogin = function () {
    var signed_in = false;
    $.ajax({
        url: domain + "/api/check-login/",
        method: "get"
    }).done(function (data) {
        if (typeof data.signed_in !== "undefined")
            signed_in = data.signed_in;
        if (!signed_in)
            redirectLogin();
    }).error(function () {
        redirectLogin();
    });
};

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

checkLogin();