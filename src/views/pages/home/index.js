import React from 'react';
import {FlatList, Image, ScrollView, Text, View} from 'react-native';
import {useTheme} from 'react-native-themed-styles';
import {pngs} from '../../../assets/images/pngs';
import themedStyles from './styles';
import GridImageCT from '../../components/girdImageCT';
const dataList = [
  pngs.image1,
  pngs.imageNewToday,
  pngs.imageNewToday,
  pngs.image1,
];
const Home = () => {
  const [styles, themed] = useTheme(themedStyles);

  return (
    <View style={{flex: 1, paddingHorizontal: 16}}>
      <Text>Discover</Text>
      <Text>WHAT'S NEW TODAY</Text>
      <>
        <Image
          source={pngs.imageNewToday}
          style={{height: 343, width: '100%'}}
        />
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <View
            style={{
              width: 28,
              height: 28,
              borderRadius: 14,
              borderColor: 'black',
              backgroundColor: 'red',
            }}
          />
          <View style={{flexDirection: 'column'}}>
            <Text>Nguyen Duc Vu</Text>
            <Text>@ndvu</Text>
          </View>
        </View>
      </>
      <Text>BROWSER ALL</Text>

      <View style={{flex: 1}}>
        <GridImageCT />
      </View>
    </View>
  );
};

export default Home;
