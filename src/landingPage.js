import React, { Component } from 'react';
import { View, Text } from 'react-native';
import LottieView from 'lottie-react-native';

export class LandingPage extends React.Component {
    componentDidMount() {
        // Start counting when the page is loaded
        this.timeoutHandle = setTimeout(() => {
            this.props.navigation.navigate('Login');
        }, 5000);
    }

    componentWillUnmount() {
        clearTimeout(this.timeoutHandle); // This is just necessary in the case that the screen is closed before the timeout fires, otherwise it would cause a memory leak that would trigger the transition regardless, breaking the user experience.
    }

    // componentDidMount() {
        // this.animation.play();
        // Or set a specific startFrame and endFrame with:
        // this.animation.play(30, 120);
    // }

    // <Button onPress={() => this.props.navigation.navigate('HomeScreen')} title="Home" />

    render() {

        // var animation = bodymovin.loadAnimation({
        //     container: document.getElementById('network-build-vid'), // the dom element
        //     renderer: 'svg',
        //     loop: false,
        //     autoplay: false,
        //     path: "./lotties/world/Plane.json" // the animation data
        // });

        // test = () => {
        //     this.props.navigation.navigate('Login')
        // }
        // animation.addEventListener('complete', this.test());

        return (
            <LottieView
                // onClick={this.props.navigation.navigate('Login')}
                // ref={animation => {
                    // this.animation = animation;
                // }}
                // onLoopComplete={() => this.props.navigation.navigate('Login')}
                source={require('./lotties/world/Plane.json')}
                autoPlay
                // loop
            />
        )
    }
}

export default LandingPage