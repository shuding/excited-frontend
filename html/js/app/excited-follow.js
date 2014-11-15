// objects

var followLi = function (data) {
    // TODO
    this.class = "follow-item-li";
    this.avator = "static/avator-demo.jpeg";
    this.name = "illusate";
    this.desc = "illu";
};

// functions

var getFollow = function () {
    return [
        new followLi(),
        new followLi()
    ];
};
