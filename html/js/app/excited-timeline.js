// objects

var listNumber = 0;

var timelineLi = function (data) {
    // TODO
    listNumber++;
    this.id = "list-item-" + listNumber;
    this.class = "timeline-list-item-li";
    this.avatorSrc = "static/avator-demo.jpeg";
    this.author = "illusate";
    this.time = "2014-11-11 11:11:11";
    this.content = "EXCITED! This is a item demo " + listNumber;
    if (data) {
        this.author = data.source;
        this.title = data.title;
        this.content = data.content;
    }
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

var getTimeline = function (callback) {
    getPublicItems("?item_count=100", callback);
    /*
    return [
        new timelineLi(),
        new timelineLi(),
        new timelineLi(),
        new timelineLi(),
        new timelineNewItemLi(4),
        new timelineLi(),
        new timelineLi(),
        new timelineLi()
    ];*/
};