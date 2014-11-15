// objects

var todolistLi = function (data) {
    // TODO
    this.class = "todolist-item-li";
    this.title = data.item.title;
    this.desc = data.item.source;
    this.finished = data.finished;
};

// functions

var getTodolist = function (callback) {
    getUserItems(callback);
};
