import React from 'react';
import { 
    ActivityIndicator, 
    View,
 } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack'
import loginScreen from '../screens/authscreen/login';
import signupScreen from '../screens/authscreen/signup';
import mainScreen from '../screens/index';
console.disableYellowBox = true;

const AuthStack = createStackNavigator(
    {
        login: { screen : loginScreen },
        signup: { screen : signupScreen },
    }, {
        headerMode: 'none',
    }, {
        initialRouteName: 'login',
    }
);
const AppStack = createStackNavigator(
    {
        mainScreen: mainScreen,
    }, {
        headerMode: 'none',
    }
);
class AuthLoadingScreen extends React.Component {
    constructor() {
        super();
        this._bootstrapAsync();
    }

    _bootstrapAsync = async () => {
        // await AsyncStorage.clear();
        const userToken = await AsyncStorage.getItem('userToken');
        console.log(userToken)
        this.props.navigation.navigate(userToken ? 'App' : 'Auth');
    };
  
    render() {
        return (
            <View>
                <ActivityIndicator />
            </View>
        );
    }
  }

export default createAppContainer(createSwitchNavigator(
    {
        AuthLoading: AuthLoadingScreen,
        App: AppStack,
        Auth: AuthStack,
    },
    {
        initialRouteName: 'AuthLoading',
    }
));