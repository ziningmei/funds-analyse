/**
 * Created by jiang.qi on 2016/9/28.
 */
var funds={};

$(function () {
    funds.init();
});

funds.init=function () {
    funds.initCharts();
};

funds.initCharts=function () {
    commonAjax.ajaxPost("/get")
}