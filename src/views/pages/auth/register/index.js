import React, { useEffect } from 'react';
import { Keyboard, Text, TouchableOpacity, View } from 'react-native';
import { useTheme } from 'react-native-themed-styles';
import themedStyles from './styles';
import InputCT from '../../../components/inputCT';
import ButtonCT from '../../../components/buttonCT';
import { SvgXml } from 'react-native-svg';
import { svgs } from '../../../../assets/images/svgs';
const Register = () => {
  const [styles, themed] = useTheme(themedStyles)
  const enumStep = { step1: 'STEP-1', step2: 'STEP-2' }
  useEffect(() => {
    Keyboard.dismiss();
  }, [])
  return (
    <View style={styles.container}>
      <TouchableOpacity >
        <View style={{ width: 14, height: 14, backgroundColor: 'red' }} />
      </TouchableOpacity>

      <Text style={styles.titleHeader}>Register</Text>
      {
        enumStep.step1 === 'STEP-1' ? (
          <>
            <InputCT
              placeholder='email@gmail.com'
            />
            <InputCT
              style={styles.marginInputText}
              type='Password'
              placeholder='Password'
            />
            <ButtonCT title='Next' />
          </>
        ) : (
          <>
            <InputCT
              placeholder='Enter your name'

            />

            <ButtonCT title='Sign up' style={styles.marginButtonSignUp} />

            <Text>
              {` By signing up, you agree to Photo’s`}
              <Text style={styles.textUnderline}>
                {` Terms of Service`}
                <Text>{` and `}
                  <Text>{`Privacy Policy.`}</Text>
                </Text>
              </Text>
            </Text>
          </>
        )

      }
    </View >
  )
}
export default Register;