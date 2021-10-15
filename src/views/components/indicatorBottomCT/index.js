import React from 'react';
import PropTypes from 'prop-types';
import { Text, View, ViewPropTypes } from 'react-native'
import { useTheme } from 'react-native-themed-styles';
import themedStyles from './styles';

const IndicatorBottomCT = (props) => {
  const { style } = props;
  const [styles, themed] = useTheme(themedStyles)
  return (
    <View style={[styles.container, style]} />
  )
}
export default IndicatorBottomCT;

IndicatorBottomCT.defaultProps = {
  style: {}
}
IndicatorBottomCT.propTypes = {
  style: PropTypes.oneOfType([ViewPropTypes.style, PropTypes.arrayOf(ViewPropTypes.style)])
}