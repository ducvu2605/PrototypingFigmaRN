import {styleSheetFactory} from '../../../constants/themes';

const themedStyles = styleSheetFactory(theme => ({
  containerImage: {
    flex: 1,
    justifyContent: 'center',
  },
  imageBackground: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageLogo: {
    width: 38,
    height: 38,
    marginRight: 20,
  },
  containerButton: {
    height: 92,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
  },
  buttonLeft: {
    flex: 1,
    marginRight: 9,
  },
}));
export default themedStyles;
