import React, { Component } from 'react';
import App from './src/components';
import { Provider } from 'react-redux';
import store from './src/redux/store';
import {
  AppRegistry
} from 'react-native';

class Time extends Component {
  render() {
    return (
      <Provider store={store}>
        <App />
      </Provider>
    );
  }
}

AppRegistry.registerComponent('time', () => Time);
