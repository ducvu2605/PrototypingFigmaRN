import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import {FlatList, Image, Text, View} from 'react-native';
import {useTheme} from 'react-native-themed-styles';
import themedStyles from '../../pages/home/styles';
import {pngs} from '../../../assets/images/pngs';
import {TouchableOpacity} from 'react-native-gesture-handler';
import PhotoGrid from './photoGrid';
const GridImageCT = props => {
  const {} = props;
  const [styles, themed] = useTheme(themedStyles);

  useEffect(() => {}, []);
  const renderItem = () => {
    // const {width, height} = Image.resolveAssetSource(item);
    return (
      <View style={{backgroundColor: 'red'}}>
        <Image source={pngs.image1} style={{backgroundColor: 'red'}} />
      </View>
    );
  };

  return (
    <View style={{flexDirection: 'row', flex: 1, backgroundColor: 'red'}}>
      <PhotoGrid source={dataList} />
    </View>
  );
};
export default GridImageCT;

GridImageCT.defaultProps = {};
GridImageCT.propTypes = {};
const dataList = [pngs.image1, pngs.image2, pngs.image3, pngs.image1];
