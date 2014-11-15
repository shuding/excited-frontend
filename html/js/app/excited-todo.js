// objects

var todolistLi = function (data) {
    // TODO
    this.class = "todolist-item-li";
    this.title = data.item.title;
    this.desc = data.item.source;
};

// functions

var getTodolist = function (callback) {
    getUserItems(callback);
};
