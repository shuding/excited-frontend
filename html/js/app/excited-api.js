var getPublicItems = function (options, callback) {
    var request = "/api/get-public-items/";
    if (options)
        request += options;
    $.ajax({
        url: request,
        method: "get"
    }).done(function (data) {
        callback(data);
    }).error(function (data) {
        
    });
};

var markItemApi = function (itemId) {
    console.log(itemId);
    $.ajax({
        url: "/api/pick-item/",
        data: JSON.stringify({item_id: itemId}),
        method: "post"
    }).done(function (data) {
        console.log("succ");
        console.log(data);
    }).error(function (data) {
        console.log(data);
    });
};

var getUserItems = function (callback) {
    $.ajax({
        url: "/api/get-items/",
        method: "get"
    }).done(function (data) {
        callback(data);
    }).error(function (data) {

    });
};