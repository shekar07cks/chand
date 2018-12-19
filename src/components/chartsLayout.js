import React, { Component } from 'react';
import Echarts from 'native-echarts';

export default class ChartsLayout extends Component {
// constructor(props) {
//     super(props);
//     this.state = {
//         apple: [2, 4, 7, 2, 2, 7, 13, 16],
//         organ: [6, 9, 9, 2, 8, 7, 17, 18],
//     }
// }

render() {
    // const option = {
    //     tooltip: {
    //         trigger: 'axis'
    //     },
    //     legend: {
    //         data: ['苹果', '橘子']
    //     },
    //     toolbox: {
    //         //orient: 'vertical',
    //         show: true,
    //         showTitle: true,
    //         feature: {
    //             dataView: { show: true, readOnly: false },
    //             magicType: {
    //                 type: ['line', 'bar', 'stack', 'tiled'],
    //             },

    //         }
    //     },
    //     xAxis: [
    //         {
    //             boundaryGap: true,
    //             type: 'category',
    //             name: '时间',
    //             data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月']
    //         }
    //     ],
    //     yAxis: [
    //         {
    //             type: 'value',
    //             name: '销量(kg)'
    //         }
    //     ],
    //     color: ['rgb(249,159,94)', 'rgb(67,205,126)'],
    //     series: [
    //         {
    //             name: '苹果',
    //             type: 'bar',
    //             data: this.state.apple
    //         },
    //         {
    //             name: '橘子',
    //             type: 'bar',
    //             data: this.state.organ
    //         }
    //     ]
    // };
    return (
            <Echarts option={this.props.options} height={this.props.height} width={"auto"} />
    );
}
}