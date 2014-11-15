// objects

var todolistLi = function (data) {
    // TODO
    this.class = "todolist-item-li";
    this.title = "Aha";
    this.desc = data || "EXCITED! This is a todo demo.";
};

// functions

var getTodolist = function () {
    return [
        new todolistLi(),
        new todolistLi(),
        new todolistLi(),
        new todolistLi(),
        new todolistLi(),
        new todolistLi()
    ];
};
