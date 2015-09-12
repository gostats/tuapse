/*
 Highcharts JS v3.0.8 (2014-01-09)

 (c) 2009-2014 Torstein Honsi

 License: www.highcharts.com/license
*/

/* _____________ ____________ ____________ */
/* _____________ ____________ ____________ */
/* _____________ ____________ ____________ */

var /* не ответили */ v_dnt_answ=24,
/* мертвые аккаунты */ v_acc_die=15,
/* всего ответили */ v_all_answ=76,
/* ответили привет на привет */ v_hi=30,
/* ответили другое на привет */ v_hioth=20,
/* ответили знакомы? на привет */ v_familiar=22
;

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
            name: 'всего',
            data: [
                ['мертвый акк',   v_acc_die],
                {
                    name: 'Не ответили',
                    y: v_dnt_answ,
                    sliced: true,
                    selected: true
                },
                ['привет',   v_hi],
                ['мы знакомы?',   v_familiar],
                ['другое',   v_hioth]
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
            series: [
            {
                name: 'мёртвые аккаунты',
                data: [v_acc_die]
            },
            {
                name: 'Не ответили',
                data: [v_dnt_answ]
            },
            {
                name: 'оветили привет',
                data: [v_hi]
            },
            {
                name: 'мы знакомы?',
                data: [v_familiar]
            },
            {
                name: 'ответили другое',
                data: [v_hioth]
            },
            {
                name: 'всего ответили',
                data: [v_all_answ]
            }
            ]
        });
    });

/* _____________ ____________ ____________ */
/* _____________ ____________ ____________ */
/* _____________ ____________ ____________ */



















/* _____________ ____________ ____________ */
/* _____________ ____________ ____________ */
/* _____________ ____________ ____________ */

var /* всего второй вопрос спросили */ v_all_asked=30,
/* всего Не спросили из 76 */ v_all_dnt_asked=46,
/* спросили что надо? */ v_asked_wtf=5,
/* сколько лет? */ v_asked_howold=10,
/* спросили фотку */ v_asked_photo=7,
/* спросили другое */ v_asked_oth=8;

var /* на вопрос что нравится, как убиваешь время из **
всего ответили */ v_all_answ_favor=25,
/* всего Не ответили */ v_all_dnt_answ_favor=2,
/* на природе.. */ v_answ_favor_nature=7,
/* anime и др 'электронные' развления */ v_answ_favor_art_anime=5,
/* ответили другое */ v_answ_oth_favor=7,
/* ответили в стиле не ваше дело */ v_answfavor_faq=6;

var /* узнали что 20 лет остались лояльны */ v_20year_loyal=14, 
/* узнали что 20 лет ушли в игнор */ v_20year_ignor=6, 
/* продолжили общение и после 5 вопросов */ v_loyal_5answ=14, 
/* после 5 вопросов ушли в игнор */ v_ignor_5answ=3;


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
            name: 'всего',
            data: [
                {
                    name: 'что надо?',
                    y: 3.0,
                    sliced: true,
                    selected: true
                },
                ['сколько лет?',   v_asked_howold],
                ['спросили фотку',   v_asked_photo,],
                ['спросили другое',   v_asked_oth,],
                ['не спросили',   v_all_dnt_asked]
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
                name: 'что надо?',
                data: [v_asked_wtf]
    
            }, {
                name: 'сколько лет?',
                data: [v_asked_howold]
    
            },{
                name: 'спросили фотку',
                data: [v_asked_photo]
    
            },{
                name: 'спросили другое',
                data: [v_asked_oth]
    
            },
             {
                name: 'не спросили',
                data: [v_all_dnt_asked]
    
            }, {
                name: 'всего спросили',
                data: [v_all_asked]
    
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
                name: 'на природе',
                data: [v_answ_favor_nature]
    
            }, {
                name: 'anime и др электронные развления',
                data: [v_answ_favor_art_anime]
    
            }, {
                name: 'ответили другое',
                data: [v_answ_oth_favor]
    
            }, {
                name: 'ответили в стиле не ваше дело',
                data: [v_answfavor_faq]
    
            }, {
                name: 'всего ответили',
                data: [v_all_answ_favor]
    
            },{
                name: 'всего Не ответили',
                data: [v_all_dnt_answ_favor]
    
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
                categories: ['Я:привет', 'Я:мне 20 лет', 'продолжили общение более чем после 5 вопросов'],
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
                data: [111, 76, 35]
            }, {
                name: 'остались лояльны',
                data: [76, v_20year_loyal, v_loyal_5answ]
            }, {
                name: 'игнор',
                data: [24, v_20year_ignor, v_ignor_5answ]
            }]
        });
    });

/* _____________ ____________ ____________ */
/* _____________ ____________ ____________ */
/* _____________ ____________ ____________ */