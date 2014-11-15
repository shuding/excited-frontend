// objects

var todolistLi = function (data) {
    // TODO
    this.class = "todolist-item-li";
    this.html = "EXCITED! This is a todo demo.";
};

// functions

var getTodolist = function () {
    return [
        new todolistLi(),
        new todolistLi()
    ];
};
