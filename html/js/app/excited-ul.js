var timelineInit = function () {
    //console.log($(".timeline-list-item-new-li"));
};

var markItemAnimation = function (id) {
    var $item = $("#" + id);
    var width = $item.width(),
        height = $item.height(),
        offset = $item.offset();

    var title = $item.find(".timeline-list-item-content").html(),
        desc = $item.find(".timeline-list-item-author").html();

    var $placeholder = $("<div></div>").addClass("div-placeholder timeline-list-item timeline-placeholder")
        .css({
            "height": height + "px"
        }).insertAfter($item);

    var todoPos = $("#todo-list").offset();

    todoPos.left += 16;
    todoPos.top += 80;

    var $newTodo = $("<li class='todo-list-item'>" +
                     "<a href='#' class='todo-list-item-checkbox'></a>" +
                     "<div class='todo-list-item-content'>" +
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
    }, 800);
};