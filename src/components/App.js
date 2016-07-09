import { connect } from 'react-redux';
import React, { Component, PropTypes } from 'react';
import {
  StyleSheet,
  TabBarIOS,
} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

class App extends Component {
  static propTypes = {
    dispatch: PropTypes.func.isRequired,
  };

  render() {
    return (
      <TabBarIOS
        barTintColor="#E91E63"
      >
        <TabBarIOS.Item
          systemIcon="history"
        >
        </TabBarIOS.Item>
      </TabBarIOS>
    );
  }
}

export default connect((state) => ({
  github: state.testReducer,
}))(App);
