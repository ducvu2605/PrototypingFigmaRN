import React from 'react';
import { View, Image, ImageBackground, Text } from 'react-native';
import { useTheme } from 'react-native-themed-styles';
import globalStyles from '../../../constants/globalStyles';
import ButtonCT from '../../components/buttonCT';
import IndicatorBottomCT from '../../components/indicatorBottomCT';
import themedStyles from './styles';

const Welcome = () => {
  const [styles, themed] = useTheme(themedStyles)
  const [glbStyles] = useTheme(globalStyles);
  return (
    <View style={glbStyles.flx}>
      <View style={styles.containerImage}>
        <ImageBackground style={styles.imageBackground}>
          <Image style={styles.imageLogo} />
          <Text style={{ fontSize: 48, }}>photo</Text>
        </ImageBackground>
      </View>

      <View style={styles.containerButton}>
        <ButtonCT style={styles.buttonLeft} type='OUTLINE' title='LOG IN' />
        <ButtonCT style={glbStyles.flx} title='REGISTER' />
      </View>
      <IndicatorBottomCT />
    </View>
  )
}
export default Welcome;