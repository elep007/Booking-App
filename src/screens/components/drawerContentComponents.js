import React, { Component } from 'react';
import {NavigationActions} from 'react-navigation';
import { Text, View, StyleSheet, ImageBackground, Image, TouchableOpacity } from 'react-native'
import AsyncStorage from '@react-native-community/async-storage';
import Icon from 'react-native-vector-icons/AntDesign';

export default class drawerContentComponents extends Component {

    navigateToScreen = ( route ) =>(
        () => {
            if( route == 'logout' ){
                this.logOut();
            } else {
                const navigateAction = NavigationActions.navigate({
                    routeName: route
                });
                this.props.navigation.dispatch(navigateAction);
            }
        }
    )

    logOut = async () => {
        await AsyncStorage.clear();
        this.props.navigation.navigate('login');
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.headerContainer}>
                    <ImageBackground source={require('../../images/header.png')} style={{flex: 1, width: 280, alignItems: 'center', justifyContent: 'center'}} >
                        <Image 
                            style={{ width:150, height:150 }} 
                            source={ require('../../images/logo.png') }
                        />
                    </ImageBackground>
                </View>
                <View style={styles.screenContainer}>
                    <TouchableOpacity style={[styles.screenStyle, (this.props.activeItemKey=='Home') ? styles.activeBackgroundColor : null]}
                        onPress={this.navigateToScreen('Home')}>
                        <Text style={[styles.screenTextStyle, (this.props.activeItemKey=='Home') ? styles.selectedTextStyle : null]}>
                            <Icon name="home" size={23} /> Home
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.screenStyle, (this.props.activeItemKey=='Book_Now') ? styles.activeBackgroundColor : null]}
                        onPress={this.navigateToScreen('Book_Now')}>
                        <Text style={[styles.screenTextStyle, (this.props.activeItemKey=='Book_Now') ? styles.selectedTextStyle : null]}>
                            <Icon name="edit" size={23} /> Book Now
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.screenStyle, (this.props.activeItemKey=='Profile') ? styles.activeBackgroundColor : null]}
                        onPress={this.navigateToScreen('Profile')}>
                        <Text style={[styles.screenTextStyle, (this.props.activeItemKey=='Profile') ? styles.selectedTextStyle : null]}>
                            <Icon name="solution1" size={23} /> Profile
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.screenStyle}
                        onPress={ this.navigateToScreen('logout') }>
                        <Text style={ styles.screenTextStyle }>
                            <Icon name="logout" size={23} /> Log out
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
    },
    headerContainer: {
        height: 150,
    },
    headerText: {
        color: '#fff8f8',
    },
    screenContainer: { 
        paddingTop: 20,
        width: '100%',
    },
    screenStyle: {
        height: 50,
        marginTop: 2,
        flexDirection: 'row',
        alignItems: 'center',
        width: '100%'
    },
    screenTextStyle:{
        fontSize: 20,
        marginLeft: 20, 
        textAlign: 'center'
    },
    selectedTextStyle: {
        fontWeight: 'bold',
        color: '#00adff'
    },
    activeBackgroundColor: {
        backgroundColor: '#ABABAB'
    }
});