import {styleSheetFactory} from '../../../../constants/themes';

const themedStyles = styleSheetFactory(theme => ({
  container: {
    flex: 1,
    padding: 16,
  },
  titleHeader: {
    fontSize: 36,
    color: theme.black,
    lineHeight: 40,
    marginVertical: 32,
  },
  marginInputText: {
    marginVertical: 16,
  },
  marginButtonSignUp: {
    marginTop: 16,
    marginBottom: 32,
  },
  textUnderline: {
    textDecorationLine: 'underline',
  },
}));
export default themedStyles;
