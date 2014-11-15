// objects

var timelineLi = function (data) {
    // TODO
    this.id = "";
    this.class = "timeline-list-item-li";
    this.avatorSrc = "static/avator-demo.jpeg";
    this.author = "illusate";
    this.time = "2014-11-11 11:11:11";
    this.content = "EXCITED! This is a item demo.";
};

var timelineNewItemLi = function (num) {
    this.id = "new";
    this.class = "timeline-list-item-new-li";
    if (num)
        this.html = "View " + num + " new excitements!";
    else
        this.html = "New excitements!";
};

// functions

var getTimeline = function () {
    return [
        new timelineLi(),
        new timelineLi(),
        new timelineLi(),
        new timelineLi(),
        new timelineNewItemLi(4),
        new timelineLi(),
        new timelineLi(),
        new timelineLi()
    ];
};