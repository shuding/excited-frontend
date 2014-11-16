// objects

var followLi = function (data, desc) {
    // TODO
    this.class = "follow-item-li";
    this.avator = "static/" + data + ".png";
    this.name = data;
    this.desc = desc;
};

// functions

var getFollow = function () {
    return [
        new followLi("dribbble", "Show and tell for designers."),
        new followLi("36kr", "关注互联网创业"),
        new followLi("bilibili", "( ゜- ゜)つロ  乾杯~")
    ];
};
