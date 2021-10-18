import React, {useEffect} from 'react';
import {Keyboard, Text, TouchableOpacity, View} from 'react-native';
import {useTheme} from 'react-native-themed-styles';
import themedStyles from './styles';
import InputCT from '../../../components/inputCT';
import ButtonCT from '../../../components/buttonCT';
import {SvgXml} from 'react-native-svg';
import {svgs} from '../../../../assets/images/svgs';
import {enumStepSignUp} from '../../../../constants';
import {useMergeState} from '../../../../utils/hooks';
const Register = () => {
  const [styles, themed] = useTheme(themedStyles);
  const [state, setState] = useMergeState({
    currentStep: enumStepSignUp.step1,
    email: '',
    password: '',
    yourName: '',
  });

  useEffect(() => {
    Keyboard.dismiss();
    setState({currentStep: enumStepSignUp.step1});
  }, []);

  const onNextPressed = () => {
    setState({currentStep: enumStepSignUp.step2});
  };
  const onSignUpPressed = () => {};

  const onBackPressed = () => {
    Keyboard.dismiss();
    if (state.currentStep === enumStepSignUp.step2) {
      setState({currentStep: enumStepSignUp.step1});
    } else {
      //step 1 -> previous screen
    }
  };

  const onChangeTextEmail = text => {
    setState({email: text});
  };

  const onChangeTextPassword = text => {
    setState({password: text});
  };

  const onChangeTextYourName = text => {
    setState({yourName: text});
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onBackPressed}>
        <SvgXml xml={svgs.icBack} width={16} height={16} />
      </TouchableOpacity>

      <Text style={styles.titleHeader}>Register</Text>
      {state.currentStep === enumStepSignUp.step1 ? (
        <>
          <InputCT
            placeholder="email@gmail.com"
            onChangeText={text => {
              onChangeTextEmail(text);
            }}
            value={state.email}
          />
          <InputCT
            style={styles.marginInputText}
            type="Password"
            placeholder="Password"
            onChangeText={text => onChangeTextPassword(text)}
            value={state.password}
          />
          <ButtonCT title="Next" onPress={onNextPressed} />
        </>
      ) : (
        <>
          <InputCT
            placeholder="Enter your name"
            onChangeText={text => onChangeTextYourName(text)}
            value={state.yourName}
          />

          <ButtonCT
            title="Sign up"
            style={styles.marginButtonSignUp}
            onPress={onSignUpPressed}
          />

          <Text>
            {' By signing up, you agree to Photo’s'}
            <Text style={styles.textUnderline}>
              {' Terms of Service'}
              <Text>
                {' and '}
                <Text>{'Privacy Policy.'}</Text>
              </Text>
            </Text>
          </Text>
        </>
      )}
    </View>
  );
};
export default Register;
