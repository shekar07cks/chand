import React, { Component } from 'react';

const BarChart = {
getOptions : (apple, organ) => {
  let option = {
        tooltip: {
            trigger: 'axis'
        },
        legend: {
            data: ['苹果', '橘子']
        },
        toolbox: {
            //orient: 'vertical',
            show: true,
            showTitle: true,
            feature: {
                dataView: { show: true, readOnly: false },
                magicType: {
                    type: ['line', 'bar', 'stack', 'tiled'],
                },

            }
        },
        xAxis: [
            {
                boundaryGap: true,
                type: 'category',
                name: '时间',
                data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月']
            }
        ],
        yAxis: [
            {
                type: 'value',
                name: '销量(kg)'
            }
        ],
        color: ['rgb(249,159,94)', 'rgb(67,205,126)'],
        series: [
            {
                name: '苹果',
                type: 'bar',
                data: apple
            },
            {
                name: '橘子',
                type: 'bar',
                data: organ
            }
        ]
    };
    return option;
}
// render() {
//     let option = {
//         tooltip: {
//             trigger: 'axis'
//         },
//         legend: {
//             data: ['苹果', '橘子']
//         },
//         toolbox: {
//             //orient: 'vertical',
//             show: true,
//             showTitle: true,
//             feature: {
//                 dataView: { show: true, readOnly: false },
//                 magicType: {
//                     type: ['line', 'bar', 'stack', 'tiled'],
//                 },

//             }
//         },
//         xAxis: [
//             {
//                 boundaryGap: true,
//                 type: 'category',
//                 name: '时间',
//                 data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月']
//             }
//         ],
//         yAxis: [
//             {
//                 type: 'value',
//                 name: '销量(kg)'
//             }
//         ],
//         color: ['rgb(249,159,94)', 'rgb(67,205,126)'],
//         series: [
//             {
//                 name: '苹果',
//                 type: 'bar',
//                 data: this.state.apple
//             },
//             {
//                 name: '橘子',
//                 type: 'bar',
//                 data: this.state.organ
//             }
//         ]
//     };
//     return option;
// }
}
export default BarChart;