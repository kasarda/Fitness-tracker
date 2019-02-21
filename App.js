import React from 'react';
import { View } from 'react-native';
import { NativeRouter, Route } from 'react-router-native'
import Dashboard from './app/Dashboard'




export default class App extends React.Component {
  render() {
    return (
      <NativeRouter>
        <View>
          <Route exact path="/" component={Dashboard} />
        </View>
      </NativeRouter>
    )
  }
}