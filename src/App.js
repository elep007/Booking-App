import React from 'react'
import { View, StatusBar } from 'react-native'

import { Provider } from 'react-redux'
import { configureStore } from './store'

import AppNavigator from './layout/index'

import colors from './theme/colors'

const store = configureStore()

export default class Root extends React.Component {
  render() {
    return (
      <Provider store={store}>
          <View style={{ flex: 1 }}>
              <StatusBar
                  barStyle={'light-content'}
                  backgroundColor={colors.primary}
              />
              <AppNavigator />
          </View>
      </Provider>
    )
  }
}
