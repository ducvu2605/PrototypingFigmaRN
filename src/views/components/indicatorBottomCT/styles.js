import {styleSheetFactory} from '../../../constants/themes';
const themedStyles = styleSheetFactory(theme => ({
  container: {
    width: 135,
    height: 5,
    backgroundColor: 'black',
    borderRadius: 10,
    alignSelf: 'center',
    marginBottom: 8,
  },
}));
export default themedStyles;
