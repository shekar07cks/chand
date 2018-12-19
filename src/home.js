import React, { Component } from 'react';
import {
    View,
} from 'react-native';
import { Container, Button, Text, Icon, Content, Form, Item, Input } from 'native-base';
import { Col, Row, Grid } from 'react-native-easy-grid';
import styles from './styles/style';
import ChartsLayout from "./components/chartsLayout";
import BarChart from "./components/charts/barChart";

export default class Home extends React.Component {
    constructor(props) {
    super(props);
    this.state = {
        apple: [2, 4, 7, 2, 2, 7, 13, 16],
        organ: [6, 9, 9, 2, 8, 7, 17, 18],
    }

}
    render() {
        return (
            <React.Fragment>
                <View> 
                    <ChartsLayout options={BarChart.getOptions(this.state.apple, this.state.organ)} height={300} />
                </View> 
            </React.Fragment> 
        );
    }
}
