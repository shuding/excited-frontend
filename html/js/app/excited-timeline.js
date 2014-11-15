// objects

var listNumber = 0;

var getDesc = function (fullContent) {
    var containerDiv = $("<div></div>").html(fullContent);
    containerDiv = containerDiv.text();
    if (containerDiv.length > 200)
        containerDiv = containerDiv.substr(0, 200) + "...";
    return containerDiv;
};

var getImage = function (fullContent) {
    var containerDiv = $("<div></div>").html(fullContent);
    var img = containerDiv.find("img");
    if (img.length)
        return img[0].src;
    return null;
};

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
        if ( data.meta.protocol == "rss" ) {
            this.avatorSrc = "static/" + data.source + ".png";
        }
        this.author = data.source;
        this.title = data.title;
        this.fullContent = data.content;
        this.content = getDesc( data.content );
        this.itemId = data.id;
        this.image = getImage( data.content );
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