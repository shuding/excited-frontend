// objects

var todolistLi = function (data) {
    // TODO
    this.class = "todolist-item-li";
    this.title = data.item.title;
    this.desc = data.item.source + " - " + moment(new Date(data.created_on)).fromNow();
    this.finished = data.finished;
    this.id = data.id;
};

// functions

var getTodolist = function (callback) {
    getUserItems(callback);
};
