import React from 'react';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import HomeScreen from "./src/home";
import Login from "./src/login";
import _ from "lodash";
// import { AsyncStorage } from "react-native";
import en from './src/locales/en';
import ar_EG from './src/locales/ar_EG';
import kn_IN from './src/locales/kn_IN';
import hi_IN from './src/locales/hi_IN';
import zh_CN from './src/locales/zh_CN';
import fr_FR from './src/locales/fr_FR';

const AppNavigator = createStackNavigator({
  Home: {
    screen: HomeScreen
  },
  Login: {
    screen: Login
  },
});

const appNavigator = createAppContainer(AppNavigator);

class Chand extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      screenPropsData: en,
      selectedLanguage: "en"
    }
  }

  async componentWillMount() {
    await this.toggleLanguage();
  }

  toggleLanguage = async () => {
    // this.setState({
    //   selectedLanguage: await AsyncStorage.getItem('@IV:SelectedLangauge')
    // }, () => {
    //   console.log("SelectedLangaugeApp", this.state.selectedLanguage)
    // })

    if (this.state.selectedLanguage === null) {
      this.setState({
        screenPropsData: en
      })
    }
    if (this.state.selectedLanguage == "en") {
      this.setState({
        screenPropsData: en
      })
    } else if (this.state.selectedLanguage == "ar_EG") {
      this.setState({
        screenPropsData: ar_EG
      })
    } else if (this.state.selectedLanguage == "kn_IN") {
      this.setState({
        screenPropsData: kn_IN
      })
    } else if (this.state.selectedLanguage == "hi_IN") {
      this.setState({
        screenPropsData: hi_IN
      })
    } else if (this.state.selectedLanguage == "zh_CN") {
      this.setState({
        screenPropsData: zh_CN
      })
    } else if (this.state.selectedLanguage == "fr_FR") {
      this.setState({
        screenPropsData: fr_FR
      })
    }
    return;
  }


  render() {
    return <App screenProps={_.merge(this.state.screenPropsData, { toggleLanguage: this.toggleLanguage })} />
  }
}
export default appNavigator;