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