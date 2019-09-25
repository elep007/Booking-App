import React from 'react';
import { Button, View, Text } from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import BookNow1 from './bookNow';
import BookNow2 from './bookNow1';

const RootStack = createStackNavigator(
    {
        bookNow1: BookNow1,
        bookNow2: BookNow2,
    }, {
        headerMode: 'none',
    }, {
        initialRouteName: 'bookNow1',
    }
);

const AppContainer = createAppContainer(RootStack);

export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}