// TODO : debug
var domain = "";//http://172.27.221.110";
// TODO : end debug

var app = angular.module("excited", []);
var todoListItems = [];
var email = null,
    nickname = null;

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
        email = data.email;
        nickname = data.nickname;
    }).error(function () {
        redirectLogin();
    });
};

var main = function ($scope) {
};

var timelineList = function ($scope) {
    var callback = function (data) {
        var lists = [];
        for (var i in data) {
            if (todoListItems.indexOf( data[i].id ) == -1)
                lists.push(new timelineLi(data[i]));
        }
        $scope.lists = lists;
        $scope.$apply();
    };
    getTimeline(callback);

    //$scope.classUlShow = "hide";
    window.location.hash = "new";

    $scope.markItem = function (id, itemId) {
        markItemApi(itemId);
        markItemAnimation(id);
    };

    timelineInit();
};

var todoList = function ($scope) {
    var callback = function (data) {
        var lists = [];
        for (var i in data) {
            lists.splice(0, 0, new todolistLi(data[i]));
            todoListItems.push(data[i].item.id);
        }
        $scope.lists = lists;
        $scope.$apply();
    };
    getTodolist(callback);

    $scope.checkItem = function (id, $event) {
        var $li = $($event.currentTarget.parentNode);

        finishItem(id, function () {
            $li.css({
                "position": "fixed",
                "width": "258px",
                "height": "66px",
                "margin-bottom": "16px",
                "top": $li.offset().top + "px",
                opacity: 1
            }).addClass("checked");

            var $liPlaceholder = $("<div class='free-div'></div>").css({
                "width": "258px",
                "height": "66px",
                "margin-bottom": "16px"
            });

            $li.after($liPlaceholder);

            var offset = $(".todo-list-finished-items").offset();

            setTimeout(function () {
                $li.addClass("free-div-position").css({
                    top: offset.top - 66 + "px",
                    "margin-bottom": "0",
                    opacity: 0
                });
                $liPlaceholder.css({
                    "height": "0",
                    "margin-bottom": "0"
                });
            }, 500);
        });
    };
};

var followList = function ($scope) {
    $scope.lists = getFollow();
};

var toolbar = function ($scope) {
    $scope.userInfo = getUserInfo();
};

app.controller("main", main)
    .controller("toolbar", toolbar)
    .controller("todo-list", todoList)
    .controller("timeline-list", timelineList)
    .controller("follow-list", followList);

checkLogin();