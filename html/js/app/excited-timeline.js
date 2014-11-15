// objects

var timelineLi = function (data) {
    // TODO
    this.class = "timeline-list-item-li";
    this.html = "EXCITED! This is a item demo.";
};

var timelineNewItemLi = function (num) {
    this.class = "timeline-list-item-new-li";
    if (num)
        this.html = "View " + num + " excitements!";
    else
        this.html = "New excitements!";
};

// functions

var getTimeline = function () {
    return [
        new timelineLi(),
        new timelineLi()
    ];
};