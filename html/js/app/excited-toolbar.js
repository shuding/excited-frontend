var getUserInfo = function () {
    return {
        avator: "http://1.gravatar.com/avatar/" + md5(email)
    };
};