import React from 'react';
import PropTypes from 'prop-types';
import { TouchableOpacity, View, Text, ViewPropTypes } from 'react-native';
import themedStyles from './styles';
import { useTheme } from 'react-native-themed-styles';
const ButtonCT = (props) => {
  const { type, title, style } = props
  const [styles, themed] = useTheme(themedStyles)
  if (type === 'FULL') {
    return (
      <TouchableOpacity style={[styles.containerFULL, style]}>
        <Text style={styles.containerTextFULL}>{title}</Text>
      </TouchableOpacity>
    )
  }

  if (type === 'OUTLINE') {
    return (
      <TouchableOpacity style={[styles.containerOUTLINE,style]}>
        <Text style={styles.containerTextOUTLINE}>{title}</Text>
      </TouchableOpacity>
    )
  }
}
ButtonCT.defaultProps = {
  type: 'FULL',
  title: '',
  style: {},

}
ButtonCT.propTypes = {
  type: PropTypes.string,
  title: PropTypes.string,
  style: PropTypes.oneOfType([ViewPropTypes.style, PropTypes.arrayOf(ViewPropTypes.style)])

}

export default ButtonCT;