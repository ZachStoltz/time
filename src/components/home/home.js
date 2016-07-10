import React, { PropTypes } from 'react';
import {
  Text,
  View,
} from 'react-native';


const Home = (props) => {
  const { title, style } = props;
  return (
    <View style={style.tabContainer}>
      <Text style={style.txt}>{title}</Text>
    </View>
  );
};
Home.propTypes = {
  title: PropTypes.string.isRequired,
  style: PropTypes.object.isRequired,
};
export default Home;
