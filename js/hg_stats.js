/*
 Highcharts JS v3.0.8 (2014-01-09)

 (c) 2009-2014 Torstein Honsi

 License: www.highcharts.com/license
*/

/* _____________ ____________ ____________ */
/* _____________ ____________ ____________ */
/* _____________ ____________ ____________ */

$(function () {
    $('#graf17').highcharts({
        chart: {
            plotBackgroundColor: null,
            plotBorderWidth: null,
            plotShadow: false
        },
        title: {
            text: 'Оветили.. в %'
        },
        tooltip: {
            pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
        },
        plotOptions: {
            pie: {
                allowPointSelect: true,
                cursor: 'pointer',
                dataLabels: {
                    enabled: true,
                    color: '#000000',
                    connectorColor: '#000000',
                    format: '<b>{point.name}</b>: {point.percentage:.1f} %'
                }
            }
        },
        series: [{
            type: 'pie',
            name: 'Browser share',
            data: [
                ['привет',   53.0],
                {
                    name: 'Не ответили',
                    y: 3.0,
                    sliced: true,
                    selected: true
                },
                ['мы знакомы?',       32.0]
            ]
        }]
    });
});

/* _____________ ____________ ____________ */
/* _____________ ____________ ____________ */
/* _____________ ____________ ____________ */

$(function () {
        $('#graf11').highcharts({
            chart: {
                type: 'column'
            },
            title: {
                text: 'Оветили.. чел..'
            },
            subtitle: {
                text: 'Источник: vk.com'
            },
            xAxis: {
                categories: [
                    '06-08m .15y'
                ]
            },
            yAxis: {
                min: 0,
                title: {
                    text: 'человек'
                }
            },
            tooltip: {
                headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
                pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
                    '<td style="padding:0"><b>{point.y:.1f} чел</b></td></tr>',
                footerFormat: '</table>',
                shared: true,
                useHTML: true
            },
            plotOptions: {
                column: {
                    pointPadding: 0.2,
                    borderWidth: 0
                }
            },
            series: [{
                name: 'привет',
                data: [53.0]
    
            }, {
                name: 'Не ответили',
                data: [3.0]
    
            }, {
                name: 'мы знакомы?',
                data: [32.0]
    
            }, {
                name: 'всего ответили',
                data: [85.0]
    
            }]
        });
    });

/* _____________ ____________ ____________ */
/* _____________ ____________ ____________ */
/* _____________ ____________ ____________ */



/* _____________ ____________ ____________ */
/* _____________ ____________ ____________ */
/* _____________ ____________ ____________ */

$(function () {
    $('#answ1').highcharts({
        chart: {
            plotBackgroundColor: null,
            plotBorderWidth: null,
            plotShadow: false
        },
        title: {
            text: 'Оветили.. в %'
        },
        tooltip: {
            pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
        },
        plotOptions: {
            pie: {
                allowPointSelect: true,
                cursor: 'pointer',
                dataLabels: {
                    enabled: true,
                    color: '#000000',
                    connectorColor: '#000000',
                    format: '<b>{point.name}</b>: {point.percentage:.1f} %'
                }
            }
        },
        series: [{
            type: 'pie',
            name: 'Browser share',
            data: [
                ['сколько лет?',   53.0],
                {
                    name: 'что надо?',
                    y: 3.0,
                    sliced: true,
                    selected: true
                },
                ['не спросили',       32.0]
            ]
        }]
    });
});

/* _____________ ____________ ____________ */
/* _____________ ____________ ____________ */
/* _____________ ____________ ____________ */

$(function () {
        $('#answ2').highcharts({
            chart: {
                type: 'column'
            },
            title: {
                text: 'Оветили.. чел..'
            },
            subtitle: {
                text: 'Источник: vk.com'
            },
            xAxis: {
                categories: [
                    '06-08m .15y'
                ]
            },
            yAxis: {
                min: 0,
                title: {
                    text: 'человек'
                }
            },
            tooltip: {
                headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
                pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
                    '<td style="padding:0"><b>{point.y:.1f} чел</b></td></tr>',
                footerFormat: '</table>',
                shared: true,
                useHTML: true
            },
            plotOptions: {
                column: {
                    pointPadding: 0.2,
                    borderWidth: 0
                }
            },
            series: [{
                name: 'сколько лет?',
                data: [53.0]
    
            }, {
                name: 'что надо?',
                data: [3.0]
    
            }, {
                name: 'не спросили',
                data: [32.0]
    
            }, {
                name: 'всего спросили',
                data: [56.0]
    
            }]
        });
    });

/* _____________ ____________ ____________ */
/* _____________ ____________ ____________ */
/* _____________ ____________ ____________ */



/* _____________ ____________ ____________ */
/* _____________ ____________ ____________ */
/* _____________ ____________ ____________ */

$(function () {
        $('#answ3').highcharts({
            chart: {
                type: 'column'
            },
            title: {
                text: 'На вопрос, что нравится, чем увлекаешся?'
            },
            subtitle: {
                text: 'Источник: vk.com'
            },
            xAxis: {
                categories: [
                    '06-08m .15y'
                ]
            },
            yAxis: {
                min: 0,
                title: {
                    text: 'человек'
                }
            },
            tooltip: {
                headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
                pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
                    '<td style="padding:0"><b>{point.y:.1f} чел</b></td></tr>',
                footerFormat: '</table>',
                shared: true,
                useHTML: true
            },
            plotOptions: {
                column: {
                    pointPadding: 0.2,
                    borderWidth: 0
                }
            },
            series: [{
                name: 'всего ответили',
                data: [100.0]
    
            }, {
                name: 'Не ответили',
                data: [15.0]
    
            }, {
                name: 'аниме, скейтборд',
                data: [32.0]
    
            }, {
                name: 'лошади',
                data: [5.0]
    
            }, {
                name: 'сказали лижбы отвязался',
                data: [5.0]
    
            }]
        });
    });

/* _____________ ____________ ____________ */
/* _____________ ____________ ____________ */
/* _____________ ____________ ____________ */



/* _____________ ____________ ____________ */
/* _____________ ____________ ____________ */
/* _____________ ____________ ____________ */

$(function () {
        $('#graf6').highcharts({
            chart: {
                type: 'area'
            },
            title: {
                text: 'Краткая история переписок'
            },
            subtitle: {
                text: 'Источник: vk.com'
            },
            xAxis: {
                categories: ['Я:привет', 'Я:мне 20 лет', 'Я:пошли гулять', 'продолжили общение более чем после 5 вопросов'],
                tickmarkPlacement: 'on',
                title: {
                    enabled: false
                }
            },
            yAxis: {
                title: {
                    text: 'Процентов %'
                }
            },
            tooltip: {
                pointFormat: '<span style="color:{series.color}">{series.name}</span>: <b>{point.percentage:.1f}%</b> ({point.y:,.0f} человек)<br/>',
                shared: true
            },
            plotOptions: {
                area: {
                    stacking: 'percent',
                    lineColor: '#ffffff',
                    lineWidth: 1,
                    marker: {
                        lineWidth: 1,
                        lineColor: '#ffffff'
                    }
                }
            },
            series: [{
                name: 'до этого Всего контактировали',
                data: [100, 63, 43, 35]
            }, {
                name: 'остались лояльны',
                data: [60, 25, 13, 9]
            }, {
                name: 'игнор',
                data: [40, 38, 30, 6]
            }]
        });
    });

/* _____________ ____________ ____________ */
/* _____________ ____________ ____________ */
/* _____________ ____________ ____________ */