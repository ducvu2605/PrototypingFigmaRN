import React from 'react';
import PropTypes from 'prop-types';
import { TouchableOpacity, View ,Text} from 'react-native';
import themedStyles from './styles';
import { useTheme } from 'react-native-themed-styles';
const ButtonCT = (props) => {
  const {type} = props
  const [styles, themed] =useTheme(themedStyles)
  if (type === 'FULL') {
    return (
      <TouchableOpacity>
        <View>
          <Text>1232</Text>
        </View>
      </TouchableOpacity>

    )
  }
}
ButtonCT.defaultProps = {
  type: 'FULL',
}
ButtonCT.propTypes = {
  type: PropTypes.string,
}

export default ButtonCT;