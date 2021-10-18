import React, {useEffect} from 'react';
import {Keyboard, Text, TouchableOpacity, View} from 'react-native';
import {useTheme} from 'react-native-themed-styles';
import themedStyles from './styles';
import InputCT from '../../../components/inputCT';
import ButtonCT from '../../../components/buttonCT';
import {SvgXml} from 'react-native-svg';
import {svgs} from '../../../../assets/images/svgs';
import {useMergeState} from '../../../../utils/hooks';
const Login = () => {
  const [styles, themed] = useTheme(themedStyles);
  const [state, setState] = useMergeState({
    email: '',
    password: '',
  });

  useEffect(() => {
    Keyboard.dismiss();
  }, []);

  const onLoginPressed = () => {};

  const onBackPressed = () => {
    Keyboard.dismiss();
  };

  const onChangeTextEmail = text => {
    setState({email: text});
  };

  const onChangeTextPassword = text => {
    setState({password: text});
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onBackPressed}>
        <SvgXml xml={svgs.icBack} width={16} height={16} />
      </TouchableOpacity>
      <Text style={styles.titleHeader}>Log in</Text>
      <InputCT
        placeholder="Enter your email"
        onChangeText={text => {
          onChangeTextEmail(text);
        }}
        value={state.email}
      />
      <InputCT
        style={styles.marginInputText}
        type="Password"
        placeholder="Enter your password"
        onChangeText={text => onChangeTextPassword(text)}
        value={state.password}
      />
      <ButtonCT title="Login" onPress={onLoginPressed} />
    </View>
  );
};
export default Login;
