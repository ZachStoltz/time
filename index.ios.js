import App from './src/components/App';
import { Provider } from 'react-redux';
import React from 'react';
import store from './src/redux/store';
import { AppRegistry, NavigatorIOS, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  navigator: {
    flex: 1,
  },
});

const Time = () => (
  <Provider store={store}>
    <NavigatorIOS
      initialRoute={{
        title: 'time',
        component: App,
      }}
      barTintColor="#E91E63"
      style={styles.navigator}
    />
  </Provider>
);

AppRegistry.registerComponent('time', () => Time);
