import { connect } from 'react-redux';
import React, { Component, PropTypes } from 'react';
import {
  StyleSheet,
  Text,
  View,
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
      <View style={styles.container}>
        <Text>Hello!</Text>
      </View>
    );
  }
}

export default connect((state) => ({
  github: state.testReducer,
}))(App);
