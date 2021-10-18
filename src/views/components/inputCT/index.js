import React from 'react';
import PropTypes from 'prop-types';
import {Text, TextInput, View, ViewPropTypes} from 'react-native';
import {useTheme} from 'react-native-themed-styles';
import themedStyles from './styles';

const InputCT = props => {
  const {type, titleHeader, placeholder, value, onChangeText, style} = props;
  const [styles, themed] = useTheme(themedStyles);
  return (
    <View style={style}>
      {titleHeader !== '' && (
        <Text style={styles.titleHeader}>{titleHeader}</Text>
      )}
      <View style={styles.containerTextInput}>
        <TextInput
          style={styles.textInput}
          placeholder={placeholder}
          value={value}
          onChangeText={onChangeText}
          secureTextEntry={type === 'Password' ? true : false}
        />
      </View>
    </View>
  );
};
export default InputCT;

InputCT.defaultProps = {
  type: 'Normal',
  titleHeader: '',
  placeholder: '',
  value: '',
  onChangeText: () => {},
  style: {},
};
InputCT.propTypes = {
  type: PropTypes.string,
  titleHeader: PropTypes.string,
  placeholder: PropTypes.string,
  value: PropTypes.string,
  onChangeText: PropTypes.func,
  style: PropTypes.oneOfType([
    ViewPropTypes.style,
    PropTypes.arrayOf(ViewPropTypes.style),
  ]),
};
