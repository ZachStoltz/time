import React, { PropTypes } from 'react';
import {
  Text,
  View,
} from 'react-native';


const Accruals = (props) => {
  const { title, style } = props;
  return (
    <View style={style.tabContainer}>
      <Text style={style.txt}>{title}</Text>
    </View>
  );
};
Accruals.propTypes = {
  title: PropTypes.string.isRequired,
  style: PropTypes.object.isRequired,
};
export default Accruals;
