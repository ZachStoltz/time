import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Text, StyleSheet } from 'react-native';
import { testAction } from '../redux/actions/testActions';
class App extends Component {
  constructor(props){
    super(props);
  }

  componentWillMount() {
    this.props.dispatch(testAction());
  }

  render(){
    const { github } = this.props;
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>From Github: {github.data ? github.data.name : 'Loading.....'} </Text>
        <Text style={styles.instructions}>
          Hello =)
        </Text>
      </View>
    );
  }
}

export default connect((state) => ({
  github: state.testReducer
}))(App);
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
