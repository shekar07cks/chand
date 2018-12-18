import React, { Component } from 'react';
import { Platform, StyleSheet } from 'react-native';
import { Container, Button, Text, Icon, Content, Form, Item, Input } from 'native-base';
import { Col, Row, Grid } from 'react-native-easy-grid';
import styles from './styles/style';
// import FBLogin from './components/fbLogin'

export default class Login extends React.Component {
    render() {
        return (
            <Container>
                {/* <Grid styles={styles.loginContainer}>
                    <Col>
                        <Button >
                            <Icon name='home' />
                            <Text>
                                Login
                        </Text>
                        </Button> 
                    </Col>
                    <Col></Col>
                    
                    <Button>
                        <Icon name='home' />
                        <Text>
                            SignUp
                        </Text>
                    </Button>   
                </Grid>  */}
                <Content>
                    <Form>
                        <Item>
                            <Input placeholder="Username" />
                        </Item>
                        <Item last>
                            <Input placeholder="Password" />
                        </Item>
                        <Button onPress={() => this.props.navigation.navigate('Home')}>
                                <Icon name='home' />
                                <Text>Login</Text>
                            </Button>
                        <Button>
                            <Icon name='home' />
                            <Text>
                                SignUp
                        </Text>
                        </Button>
                    </Form>
                </Content>       
                {/* <Text style={styles.welcome}>Welcome to React Native!</Text> */}
                {/* <FBLogin /> */}
            </Container>
        );
    }
}
