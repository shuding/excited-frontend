var timelineInit = function () {
    //console.log($(".timeline-list-item-new-li"));
};

var todoShowOverlay = function (id) {
    $("#details-main").html(listById[id].fullContent);
    $("#details-title").html(listById[id].title);
    $("#details-time").html(listById[id].time);
    $("#details-source").html(listById[id].author);
    $("#overlay").css({
        display: "inherit",
        opacity: 0
    }).animate({
        opacity: 1
    }, 500);

    $(".back-btn, .details-mark-btn, .details-share-btn").css("display", "inherit");
    $("#userinfo").css("display", "none");
};

var markItemAnimation = function (id, itemId) {
    var $item = $("#" + id);
    var width = $item.width(),
        height = $item.height(),
        offset = $item.offset();

    var title = $item.find(".timeline-list-item-content").html(),
        desc = $item.find(".timeline-list-item-author").html();

    var $placeholder = $("<div></div>").addClass("div-placeholder timeline-list-item timeline-placeholder")
        .css({
            "height": height + "px",
            "opacity": 0
        }).insertAfter($item);

    var todoPos = $("#todo-list").offset();

    todoPos.left += 16;
    todoPos.top += 96;

    var $newTodo = $("<li class='todo-list-item'>" +
                     "<a href='#' class='todo-list-item-checkbox'></a>" +
                     "<div class='todo-list-item-content' onclick='todoShowOverlay(" + itemId + ")'>" +
                     "<p class='todo-list-item-title'>" + title + "</p>" +
                     "<span class='todo-list-item-desc'>" + desc + "</span>" +
                     "</div></li>").css({
        "position": "fixed",
        "opacity": 0,
        "width": width,
        "height": height
    }).offset(offset).addClass("free-div").prependTo("#todo-list-ul");

    var $todoPlaceholder = $("<div></div>").addClass("todo-list-item").css({
        "height": 0,
        "margin-bottom": "-32px",
        "opacity": 0
    }).prependTo("#todo-list-ul").addClass("todo-placeholder");

    $item.css({
        "position": "fixed",
        "z-index": 1,
        "width": width,
        "height": height
    }).offset(offset).addClass("free-div").offset(todoPos).css({
        "width": "258px",
        "height": "66px",
        "opacity": 0
    });

    $newTodo.offset(todoPos).css({
        "width": "258px",
        "height": "66px",
        "opacity": 1
    });

    setTimeout(function () {
        $todoPlaceholder.css("display", "none");
        $newTodo.css("position", "inherit");
        $item.css("display", "none");
    }, 800);
};

$(window).load(function () {
    var scrollTop = $("#timeline").scrollTop();
    var scrollFn = function (event) {
        if ($(this).scrollTop() < scrollTop - 200) {
            $("#new").addClass("disappear-div").css({
                "height": 0, "margin": 0, "padding": 0, "opacity": 0
            });
            $(this).off("scroll", scrollFn);
        }
    };
    $("#timeline").on("scroll", scrollFn);
    
    $("#add-new-todo-input").on("keyup", function (event) {
        if(event.keyCode == 13 && this.value){
            createNewItem(this.value, nickname);
            var $newItem = $("<li class='todo-list-item todolist-item-li new-item-animation'>" +
                             "<a href='#' class='todo-list-item-checkbox'></a>" +
                             "<div class='todo-list-item-content'>" +
                             "<p class='todo-list-item-title'>" + this.value + "</p>" +
                             "<span class='todo-list-item-desc'>" + nickname + " - " + moment(new Date()).fromNow() + "</span>" +
                             "</div></li>").prependTo("#todo-list-ul");

            setTimeout(function () {
                $newItem.css({
                    "margin-top": 0,
                    "opacity": 1
                });
            }, 16);

            this.value = "";
        }
    }).on("blur", function (event) {
    });

    $("#overlay").click(function (event) {
        if (event.target == this) {
            $(this).animate({
                opacity: 0
            }, 500);

            $(".back-btn, .details-mark-btn, .details-share-btn").css("display", "none");
            $("#userinfo").css("display", "inherit");

            setTimeout(function () {
                $("#overlay").css("display", "none");
            }, 500);
        }
    });
    
    $(".todo-list-show-finished").click(function () {
        $(".todo-list-finished-items").toggleClass("ul-opcaity-zero");
    });

    $(".details-mark-btn").click(function () {

        $("#overlay").animate({
            opacity: 0
        }, 500);

        $(".back-btn, .details-mark-btn, .details-share-btn").css("display", "none");
        $("#userinfo").css("display", "inherit");

        setTimeout(function () {
            $("#overlay").css("display", "none");
            markItemApi(alllist[listNowId].itemId);
            markItemAnimation("list-item-" + (listNowId + 1));
        }, 500);
    });

    $(".back-btn").click(function () {

        $("#overlay").animate({
            opacity: 0
        }, 500);

        $(".back-btn, .details-mark-btn, .details-share-btn").css("display", "none");
        $("#userinfo").css("display", "inherit");

        setTimeout(function () {
            $("#overlay").css("display", "none");
        }, 500);
    });
});