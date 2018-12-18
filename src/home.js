import React, { Component, View } from 'react';
import { Container, Button, Text, Icon, Content, Form, Item, Input } from 'native-base';
import { Col, Row, Grid } from 'react-native-easy-grid';
import styles from './styles/style';
import Charts from "./components/charts"
import Echarts from 'native-echarts';
// import FBLogin from './components/fbLogin'

export default class Home extends React.Component {
    render() {
        return (
            <Charts height={300} />
        );
    }
}
