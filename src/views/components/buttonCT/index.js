import React from 'react';
import PropTypes from 'prop-types';
import {TouchableOpacity, Text, ViewPropTypes} from 'react-native';
import themedStyles from './styles';
import {useTheme} from 'react-native-themed-styles';
const ButtonCT = props => {
  const {type, title, onPress, style} = props;
  const [styles, themed] = useTheme(themedStyles);
  if (type === 'FULL') {
    return (
      <TouchableOpacity style={[styles.containerFULL, style]} onPress={onPress}>
        <Text style={styles.containerTextFULL}>{title}</Text>
      </TouchableOpacity>
    );
  }

  if (type === 'OUTLINE') {
    return (
      <TouchableOpacity
        style={[styles.containerOUTLINE, style]}
        onPress={onPress}>
        <Text style={styles.containerTextOUTLINE}>{title}</Text>
      </TouchableOpacity>
    );
  }
};
ButtonCT.defaultProps = {
  type: 'FULL',
  title: '',
  onPress: () => {},
  style: {},
};
ButtonCT.propTypes = {
  type: PropTypes.string,
  title: PropTypes.string,
  onPress: PropTypes.func,
  style: PropTypes.oneOfType([
    ViewPropTypes.style,
    PropTypes.arrayOf(ViewPropTypes.style),
  ]),
};

export default ButtonCT;
