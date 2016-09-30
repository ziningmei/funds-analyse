/**
 * Created by jiang.qi on 2016/9/28.
 */
var funds={};

$(function () {
    funds.init();
});

funds.init=function () {
    funds.initCharts1();
    // funds.initCharts2();
    // funds.initCharts3();
    funds.initCharts4();
};

funds.initCharts1=function () {
    var obj=new Object();
    var mychart=echarts.init(document.getElementById("totalChart"));
    commonAjax.ajaxPost("/funds/getTotalFundsList",obj,function (result) {
        if(result.success==false){
            alert("加载出错");
            return;
        }
        var oneDay = 24 * 3600 * 1000;
        var resData=JSON.parse(result.resData);
        var date = [];
        var data = [];
        for(var i=0;i<resData.length;i++){
            date.push(resData[i].date);
            data.push(resData[i].perPrice);
        }
        var option = {
            tooltip: {
                trigger: 'axis',
                position: function (pt) {
                    return [pt[0], '10%'];
                }
            },
            title: {
                left: 'center',
                text: '总体图',
            },
            xAxis: {
                type: 'category',
                boundaryGap: ['20%', '20%'],
                data: date,
            },
            yAxis: {
                type: 'value',
                boundaryGap: [0, '100%'],
                min:200,
                max:300
            },
            dataZoom: [{
                type: 'inside',
                start: 80,
                end: 100
            }, {
                start: 0,
                end: 10,
                handleIcon: 'M10.7,11.9v-1.3H9.3v1.3c-4.9,0.3-8.8,4.4-8.8,9.4c0,5,3.9,9.1,8.8,9.4v1.3h1.3v-1.3c4.9-0.3,8.8-4.4,8.8-9.4C19.5,16.3,15.6,12.2,10.7,11.9z M13.3,24.4H6.7V23h6.6V24.4z M13.3,19.6H6.7v-1.4h6.6V19.6z',
                handleSize: '80%',
                handleStyle: {
                    color: '#fff',
                    shadowBlur: 3,
                    shadowColor: 'rgba(0, 0, 0, 0.6)',
                    shadowOffsetX: 2,
                    shadowOffsetY: 2
                }
            }],
            visualMap: {
                top: 0,
                right: 5,
                pieces: [{
                    gt: 200,
                    lte: 225,
                    color: '#096'
                },{
                    gt: 225,
                    lte: 250,
                    color: '#ffde33'
                },{
                    gt: 250,
                    lte: 275,
                    color: '#16a951'
                }, {
                    gt: 275,
                    lte: 300,
                    color: '#c3272b'
                }],
                outOfRange: {
                    color: '#999'
                }
            },
            series: [
                {
                    name:'金价',
                    type:'line',
                    smooth:true,
                    symbol: 'rect',
                    sampling: 'average',
                    itemStyle: {
                        normal: {
                            label : {show: true},
                            color: 'rgb(255, 70, 131)'
                        }
                    },
                    markLine: {
                        silent: true,
                        data: [{
                            yAxis: 200
                        }, {
                            yAxis: 225
                        }, {
                            yAxis: 250
                        }, {
                            yAxis: 275
                        }, {
                            yAxis: 300
                        }]
                    },
                    // areaStyle: {
                    //     normal: {
                    //         color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                    //             offset: 0,
                    //             color: 'rgb(255, 158, 68)'
                    //         }, {
                    //             offset: 1,
                    //             color: 'rgb(255, 70, 131)'
                    //         }])
                    //     }
                    // },
                    data: data
                }
            ]
        };
        mychart.setOption(option);
    });
}

funds.initCharts2=function () {
    var obj=new Object();
    var mychart=echarts.init(document.getElementById("startChart"));
    commonAjax.ajaxPost("/funds/getStartFundsList",obj,function (result) {
        if(result.success==false){
            alert("加载出错");
            return;
        }
        var oneDay = 24 * 3600 * 1000;
        var resData=JSON.parse(result.resData);
        var date = [];
        var data = [];
        for(var i=0;i<resData.length;i++){
            date.push(resData[i].date);
            data.push(resData[i].dayRate);
        }
        var option = {
            tooltip: {
                trigger: 'axis',
                position: function (pt) {
                    return [pt[0], '10%'];
                }
            },
            title: {
                left: 'center',
                text: '开市图',
            },
            xAxis: {
                type: 'category',
                boundaryGap: false,
                data: date,
            },
            yAxis: {
                type: 'value',
                boundaryGap: [0, '100%'],
                min:-15,
                max:15
            },
            dataZoom: [{
                type: 'inside',
                start: 80,
                end: 100
            }, {
                start: 0,
                end: 10,
                handleIcon: 'M10.7,11.9v-1.3H9.3v1.3c-4.9,0.3-8.8,4.4-8.8,9.4c0,5,3.9,9.1,8.8,9.4v1.3h1.3v-1.3c4.9-0.3,8.8-4.4,8.8-9.4C19.5,16.3,15.6,12.2,10.7,11.9z M13.3,24.4H6.7V23h6.6V24.4z M13.3,19.6H6.7v-1.4h6.6V19.6z',
                handleSize: '80%',
                handleStyle: {
                    color: '#fff',
                    shadowBlur: 3,
                    shadowColor: 'rgba(0, 0, 0, 0.6)',
                    shadowOffsetX: 2,
                    shadowOffsetY: 2
                }
            }],
            visualMap: {
                top: 10,
                right: 10,
                pieces: [{
                    gt: -10,
                    lte: -5,
                    color: '#096'
                }, {
                    gt: -5,
                    lte: 0,
                    color: '#ffde33'
                }, {
                    gt: 0,
                    lte: 5,
                    color: '#ff8833'
                }, {
                    gt: 5,
                    lte: 10,
                    color: '#cc5533'
                }],
                outOfRange: {
                    color: '#999'
                }
            },
            series: [
                {
                    name:'跌幅',
                    type:'line',
                    smooth:true,
                    symbol: 'rect',
                    sampling: 'average',
                    itemStyle: {
                        normal: {
                            label : {show: true},
                            color: 'rgb(255, 70, 131)'
                        }
                    },
                    markLine: {
                        silent: true,
                        data: [{
                            yAxis: -10
                        }, {
                            yAxis: 0
                        }, {
                            yAxis: 10
                        }]
                    },
                    // areaStyle: {
                    //     normal: {
                    //         color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                    //             offset: 0,
                    //             color: 'rgb(255, 158, 68)'
                    //         }, {
                    //             offset: 1,
                    //             color: 'rgb(255, 70, 131)'
                    //         }])
                    //     }
                    // },
                    data: data
                }
            ]
        };
        mychart.setOption(option);
    });
}

funds.initCharts3=function () {
    var obj=new Object();
    var mychart=echarts.init(document.getElementById("endChart"));
    commonAjax.ajaxPost("/funds/getEndFundsList",obj,function (result) {
        if(result.success==false){
            alert("加载出错");
            return;
        }
        var oneDay = 24 * 3600 * 1000;
        var resData=JSON.parse(result.resData);
        var date = [];
        var data = [];
        for(var i=0;i<resData.length;i++){
            date.push(resData[i].date);
            data.push(resData[i].dayRate);
        }
        var option = {
            tooltip: {
                trigger: 'axis',
                position: function (pt) {
                    return [pt[0], '10%'];
                }
            },
            title: {
                left: 'center',
                text: '闭市图',
            },
            xAxis: {
                type: 'category',
                boundaryGap: false,
                data: date,
            },
            yAxis: {
                type: 'value',
                boundaryGap: [0, '100%'],
                min:-15,
                max:15
            },
            dataZoom: [{
                type: 'inside',
                start: 80,
                end: 100
            }, {
                start: 0,
                end: 10,
                handleIcon: 'M10.7,11.9v-1.3H9.3v1.3c-4.9,0.3-8.8,4.4-8.8,9.4c0,5,3.9,9.1,8.8,9.4v1.3h1.3v-1.3c4.9-0.3,8.8-4.4,8.8-9.4C19.5,16.3,15.6,12.2,10.7,11.9z M13.3,24.4H6.7V23h6.6V24.4z M13.3,19.6H6.7v-1.4h6.6V19.6z',
                handleSize: '80%',
                handleStyle: {
                    color: '#fff',
                    shadowBlur: 3,
                    shadowColor: 'rgba(0, 0, 0, 0.6)',
                    shadowOffsetX: 2,
                    shadowOffsetY: 2
                }
            }],
            visualMap: {
                top: 10,
                right: 10,
                pieces: [{
                    gt: -10,
                    lte: -5,
                    color: '#096'
                }, {
                    gt: -5,
                    lte: 0,
                    color: '#ffde33'
                }, {
                    gt: 0,
                    lte: 5,
                    color: '#ff8833'
                }, {
                    gt: 5,
                    lte: 10,
                    color: '#cc5533'
                }],
                outOfRange: {
                    color: '#999'
                }
            },
            series: [
                {
                    name:'跌幅',
                    type:'line',
                    smooth:true,
                    symbol: 'rect',
                    sampling: 'average',
                    itemStyle: {
                        normal: {
                            label : {show: true},
                            color: 'rgb(255, 70, 131)'
                        }
                    },
                    markLine: {
                        silent: true,
                        data: [{
                            yAxis: -10
                        }, {
                            yAxis: 0
                        }, {
                            yAxis: 10
                        }]
                    },
                    // areaStyle: {
                    //     normal: {
                    //         color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                    //             offset: 0,
                    //             color: 'rgb(255, 158, 68)'
                    //         }, {
                    //             offset: 1,
                    //             color: 'rgb(255, 70, 131)'
                    //         }])
                    //     }
                    // },
                    data: data
                }
            ]
        };
        mychart.setOption(option);
    });
}

funds.initCharts4=function () {
    var obj=new Object();
    var mychart=echarts.init(document.getElementById("gapChart"));
    commonAjax.ajaxPost("/funds/getGapFundsList",obj,function (result) {
        if(result.success==false){
            alert("加载出错");
            return;
        }
        var oneDay = 24 * 3600 * 1000;
        var resData=JSON.parse(result.resData);
        var date = [];
        var data = [];
        for(var i=0;i<resData.length;i++){
            date.push(resData[i].date);
            data.push(resData[i].dayRate);
        }
        var option = {
            tooltip: {
                trigger: 'axis',
                position: function (pt) {
                    return [pt[0], '10%'];
                }
            },
            title: {
                left: 'center',
                text: '差价图',
            },
            xAxis: {
                type: 'category',
                boundaryGap: false,
                data: date,
            },
            yAxis: {
                type: 'value',
                boundaryGap: [0, '100%'],
                min:-15,
                max:15
            },
            dataZoom: [{
                type: 'inside',
                start: 80,
                end: 100
            }, {
                start: 0,
                end: 10,
                handleIcon: 'M10.7,11.9v-1.3H9.3v1.3c-4.9,0.3-8.8,4.4-8.8,9.4c0,5,3.9,9.1,8.8,9.4v1.3h1.3v-1.3c4.9-0.3,8.8-4.4,8.8-9.4C19.5,16.3,15.6,12.2,10.7,11.9z M13.3,24.4H6.7V23h6.6V24.4z M13.3,19.6H6.7v-1.4h6.6V19.6z',
                handleSize: '80%',
                handleStyle: {
                    color: '#fff',
                    shadowBlur: 3,
                    shadowColor: 'rgba(0, 0, 0, 0.6)',
                    shadowOffsetX: 2,
                    shadowOffsetY: 2
                }
            }],
            visualMap: {
                top: 10,
                right: 10,
                pieces: [{
                    gt: -10,
                    lte: -5,
                    color: '#096'
                }, {
                    gt: -5,
                    lte: 0,
                    color: '#ffde33'
                }, {
                    gt: 0,
                    lte: 5,
                    color: '#ff8833'
                }, {
                    gt: 5,
                    lte: 10,
                    color: '#cc5533'
                }],
                outOfRange: {
                    color: '#999'
                }
            },
            series: [
                {
                    name:'跌幅',
                    type:'line',
                    smooth:true,
                    symbol: 'rect',
                    sampling: 'average',
                    itemStyle: {
                        normal: {
                            label : {show: true},
                            color: 'rgb(255, 70, 131)'
                        }
                    },
                    markLine: {
                        silent: true,
                        data: [{
                            yAxis: -10
                        }, {
                            yAxis: 0
                        }, {
                            yAxis: 10
                        }]
                    },
                    // areaStyle: {
                    //     normal: {
                    //         color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                    //             offset: 0,
                    //             color: 'rgb(255, 158, 68)'
                    //         }, {
                    //             offset: 1,
                    //             color: 'rgb(255, 70, 131)'
                    //         }])
                    //     }
                    // },
                    data: data
                }
            ]
        };
        mychart.setOption(option);
    });
}