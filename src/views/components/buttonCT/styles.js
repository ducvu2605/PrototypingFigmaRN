import { styleSheetFactory } from '../../../constants/themes';

const themedStyles = styleSheetFactory(theme => ({
  containerFULL: {
    width: '100%',
    height: 52,
    backgroundColor: theme.black,
    borderRadius: 6,
    borderWidth: 2,
    borderColor: theme.black,
    justifyContent: 'center',
  },
  containerTextFULL: {
    color: theme.white,
    textAlign: 'center',
    flexShrink: 1,
    fontSize: 13,
  },
  containerOUTLINE: {
    width: '100%',
    height: 52,
    backgroundColor: 'transparent',
    borderRadius: 6,
    borderWidth: 2,
    borderColor: theme.black,
    justifyContent: 'center',
  },
  containerTextOUTLINE: {
    color: theme.black,
    textAlign: 'center',
    flexShrink: 1,
    fontSize: 13,
  },

}))

export default themedStyles;