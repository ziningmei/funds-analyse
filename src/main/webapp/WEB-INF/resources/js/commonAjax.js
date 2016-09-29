/**
 * Created by jiang.qi on 2016/9/29.
 */
/*
 * commonAjax.js
 * Description：共同ajax调用js
 * Creator：CaoJian
 * CreateDate：2014-03-18
 */
var commonAjax = {};

commonAjax.ajaxPost = function (url, obj, event) {
    $.ajax({
        url: url,
        type: "POST",
        contentType: 'application/json;charset=UTF-8',
        dataType: "json",
        data: JSON.stringify(obj),
        timeout: 60000,
        success: function (result) {
            event(result);
        },
    });
};

commonAjax.ajaxGet = function (url, obj, event) {
    $.ajax({
        url:url,
        type: "GET",
        contentType: 'application/json;charset=UTF-8',
        dataType: "json",
        data: JSON.stringify(obj),
        timeout: 60000,
        success: function (result) {
            event(result);
        },
    });
}
