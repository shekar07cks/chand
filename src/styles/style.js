import EStyleSheet from 'react-native-extended-stylesheet';

// define extended styles 
const styles = EStyleSheet.create({
    loginContainer: {
        width: '80%',
        backGround: "#ccc",                                    // 80% of screen width
    },
    // text: {
    //     color: '$textColor',                            // global variable $textColor
    //     fontSize: '1.5rem'                              // relative REM unit
    // },
    // '@media (min-width: 350) and (max-width: 500)': { // media queries
    //     text: {
    //         fontSize: '2rem',
    //     }
    // }
});